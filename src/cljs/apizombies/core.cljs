(ns apizombies.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [reagent.core :as r]
            [ajax.core :refer [GET]]
            [cljs.reader :as reader]
            [material-ui.core :as mui :include-macros true]
            [cljs.core.async :as async :refer [put! chan <! alts!]]
            [secretary.core :as secretary :refer-macros [defroute]]
            [goog.events :as events])
  (:import [goog.net XhrIo]
           goog.net.EventType
           [goog.history Html5History EventType]))

(enable-console-print!)

;;;;;;
;;;;;;
;;;;;;
;;;;;; NAVIGATION
;;;;;;
;;;;;;
;;;;;;

(defn get-token []
  (str js/window.location.pathname js/window.location.search))

(defn make-history []
  (doto (Html5History.)
    (.setPathPrefix (str js/window.location.protocol
                         "//"
                         js/window.location.host))
    (.setUseFragment false)))

(defn handle-url-change [e]
  ;; we are checking if this event is due to user action,
  ;; such as click a link, a back button, etc.
  ;; as opposed to programmatically setting the URL with the API
  (when-not (.-isNavigation e)
    ;; let's scroll to the top to simulate a navigation
    (js/window.scrollTo 0 0))
  ;; dispatch on the token
  (secretary/dispatch! (get-token)))

;; there is a fucking circular dependency with routes and page/views and
;; I don't know how to resolve it properly.
;; If you want to use named routes in your components, you need to declare them
;; before your components. But then, in your `defroute` you need to refer to
;; your components. arg!! 

(declare home-path)
(declare employees-list-path)
(declare employee-detail-path)

(defonce history (doto (make-history)
                   (goog.events/listen EventType.NAVIGATE
                                       ;; wrap in a fn to allow live reloading
                                       #(handle-url-change %))
                   (.setEnabled true)))

(defn nav! [token]
  (.setToken history token))

;; xhr requests

(def ^:private meths
  {:get "GET"
   :put "PUT"
   :post "POST"
   :delete "DELETE"})

(defn edn-xhr [{:keys [method url data on-complete on-error]}]
  (let [xhr (XhrIo.)]
    (events/listen xhr goog.net.EventType.SUCCESS
                   (fn [e]
                     (on-complete (reader/read-string (.getResponseText xhr)))))
    (events/listen xhr goog.net.EventType.ERROR
                   (fn [e]
                     (on-error {:error (.getResponseText xhr)})))
    (. xhr
       (send url (meths method) (when data (pr-str data))
             #js {"Content-Type" "application/edn" "Accept" "application/edn"}))))

(defonce app-state (r/atom {:employees '()}))

(defn employee-avatar [employee]
  [mui/Avatar {} "?"])

(defn load-employee [id]
  {:name "Toni" :email "toni@3scale.net"})

(defn employees-list-detail [employee]
  [mui/ListItem {:primaryText (:name employee)
                 :leftAvatar (r/as-element (employee-avatar employee))
                 :on-click #(do (.preventDefault %) (nav! (employee-detail-path)))}])

(defn load-employees []
  (let [res-chan (chan)]
    (GET "http://localhost:10555/employees" {:handler (fn [res] (put! res-chan res))
                                             :response-format :json
                                             :keywords? true})
    res-chan))


(defn simple-back-button []
  [mui/wrapper
   [mui/IconButton {:onClick #(do (.preventDefault %) (nav! "/"))
                    :iconStyle {:color (:darkWhite mui/colors)}
                    :iconClassName "material-icons"} "arrow_back"]])

(defn back-button []
  (r/create-element (r/reactify-component simple-back-button)))

(defn employees-list-component []
  (let [get-employees (fn []
                        (go
                          (let [employees (<! (load-employees))]
                            (swap! app-state assoc :employees employees))))]
    (get-employees)
    (fn []
      [mui/wrapper
      [:div
       [mui/AppBar {:title "APIZombies"
                    :iconElementLeft (back-button)}]
       [mui/List
        (for [employee (:employees @app-state)]
          [employees-list-detail employee])]]
       ]
      )))

(defn employee-detail-component []
  (fn []
    [:div
     [mui/wrapper
      [:div
      [mui/AppBar {:title "APIZombies"
                   :iconElementLeft (back-button)}]
      [mui/Card
       [mui/CardHeader {:title "Toni"
                        :subtitle "Description"}]
       [mui/CardText "Lorem ipsum dolor sit amet"]
       ]
       
       ]

      
      ]
     ]
    )
  )

(defn main-component []
  [:div {:style {:background "url('../img/bg_halloween.jpg')" :text-align "center"}}
   [:div {:style {:margin-bottom 30 }}
    [:img {:src "img/apizombies-logo.png"}]]
   [mui/wrapper
    [mui/RaisedButton {:label "Explore the team"
                       :secondary true
                       :on-click #(do (.preventDefault %) (nav! (employees-list-path)))}]]])

(defn page [page-component]
  (r/render-component
   [page-component]
   (.getElementById js/document "app")))

(defroute home-path "/" [] (page main-component))
(defroute employees-list-path "/employees" [] (page employees-list-component))
(defroute employee-detail-path "/employee" [] (page employee-detail-component))

(defn main []
  (secretary/dispatch! (home-path)))
