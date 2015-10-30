(ns material-ui.core
  (:require-macros [material-ui.core :refer [export-material-ui-react-classes]])
  (:require [reagent.core]))

(export-material-ui-react-classes)

(def ^:dynamic theme-manager
  js/MaterialUI.Styles.ThemeManager)

;; By the moment, we are using the default light theme.
;; We could define our custom theme here.
(def ^:dynamic light-theme
  js/MaterialUI.Styles.LightRawTheme)

(def ^:dynamic light-theme->clj
  (js->clj light-theme :keywordize-keys true))

(def ^:dynamic custom-theme
  (-> material-ui.core/light-theme->clj
      (assoc-in [:palette :primary1Color] "#77477E")
      (assoc-in [:palette :accent1Color] "#FE9600")))

(def ^:dynamic *mui-theme*
  (.getMuiTheme theme-manager (clj->js custom-theme)))

(def colors
  (js->clj js/MaterialUI.Styles.Colors :keywordize-keys true))

(def palette
  (:palette light-theme->clj))

(def spacing
  (:spacing light-theme->clj))

(defn wrapper [content]
  (reagent.core/create-class
   {:display-name "mui wrapper"
    :child-context-types
    #js {:muiTheme js/React.PropTypes.object}
    :get-child-context
    (fn [this]
      #js {:muiTheme *mui-theme*})
    :reagent-render
    (fn [content] content)}))
