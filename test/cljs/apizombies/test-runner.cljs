(ns apizombies.test-runner
  (:require
   [cljs.test :refer-macros [run-tests]]
   [apizombies.core-test]))

(enable-console-print!)

(defn runner []
  (if (cljs.test/successful?
       (run-tests
        'apizombies.core-test))
    0
    1))
