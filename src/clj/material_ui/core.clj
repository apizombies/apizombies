(ns material-ui.core)

(def material-tags
  '[AppBar
    AppCanvas
    Avatar
    BeforeAfterWrapper
    Card
    CardActions
    CardHeader
    CardMedia
    CardExpandable
    CardText
    CardTitle
    ;; Checkbox
    CircularProgress
    ClearFix
    ;; DatePicker
    ;; Dialog
    ;; DropDownIcon
    ;; DropDownMenu
    ;; EnhancedButton
    ;; FlatButton
    ;; FlatButtonLabel
    FloatingActionButton
    FontIcon
    IconButton
    ;; InkBar
    LeftNav
    ;; LinearProgress
    List
    ListDivider
    ListItem
    ;; MenuItem
    ;; Menu
    Overlay
    Paper
    ;; RadioButton
    ;; RadioButtonGroup
    RaisedButton
    ;; RefreshIndicator
    SelectField
    ;; Slider
    ;; SlideIn
    ;; Snackbar
    ;; SvgIcon
    Tab
    Tabs
    ;; TableHeader
    ;; TableRowsItem
    ;; TableRows
    TextField
    ;; Toggle
    ;; ToolbarGroup
    ;; Toolbar
    ;; Tooltip
    ;; TouchRipple
    ])

(defn material-ui-react-import [tname]
  `(def ~tname (reagent.core/adapt-react-class (aget js/MaterialUI ~(name tname)))))

(defmacro export-material-ui-react-classes []
  `(do ~@(map material-ui-react-import material-tags)))
