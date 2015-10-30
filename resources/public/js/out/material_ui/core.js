// Compiled by ClojureScript 1.7.145 {}
goog.provide('material_ui.core');
goog.require('cljs.core');
goog.require('reagent.core');
material_ui.core.AppBar = reagent.core.adapt_react_class.call(null,(MaterialUI["AppBar"]));

material_ui.core.AppCanvas = reagent.core.adapt_react_class.call(null,(MaterialUI["AppCanvas"]));

material_ui.core.Avatar = reagent.core.adapt_react_class.call(null,(MaterialUI["Avatar"]));

material_ui.core.BeforeAfterWrapper = reagent.core.adapt_react_class.call(null,(MaterialUI["BeforeAfterWrapper"]));

material_ui.core.Card = reagent.core.adapt_react_class.call(null,(MaterialUI["Card"]));

material_ui.core.CardActions = reagent.core.adapt_react_class.call(null,(MaterialUI["CardActions"]));

material_ui.core.CardHeader = reagent.core.adapt_react_class.call(null,(MaterialUI["CardHeader"]));

material_ui.core.CardMedia = reagent.core.adapt_react_class.call(null,(MaterialUI["CardMedia"]));

material_ui.core.CardExpandable = reagent.core.adapt_react_class.call(null,(MaterialUI["CardExpandable"]));

material_ui.core.CardText = reagent.core.adapt_react_class.call(null,(MaterialUI["CardText"]));

material_ui.core.CardTitle = reagent.core.adapt_react_class.call(null,(MaterialUI["CardTitle"]));

material_ui.core.CircularProgress = reagent.core.adapt_react_class.call(null,(MaterialUI["CircularProgress"]));

material_ui.core.ClearFix = reagent.core.adapt_react_class.call(null,(MaterialUI["ClearFix"]));

material_ui.core.FloatingActionButton = reagent.core.adapt_react_class.call(null,(MaterialUI["FloatingActionButton"]));

material_ui.core.FontIcon = reagent.core.adapt_react_class.call(null,(MaterialUI["FontIcon"]));

material_ui.core.IconButton = reagent.core.adapt_react_class.call(null,(MaterialUI["IconButton"]));

material_ui.core.LeftNav = reagent.core.adapt_react_class.call(null,(MaterialUI["LeftNav"]));

material_ui.core.List = reagent.core.adapt_react_class.call(null,(MaterialUI["List"]));

material_ui.core.ListDivider = reagent.core.adapt_react_class.call(null,(MaterialUI["ListDivider"]));

material_ui.core.ListItem = reagent.core.adapt_react_class.call(null,(MaterialUI["ListItem"]));

material_ui.core.Overlay = reagent.core.adapt_react_class.call(null,(MaterialUI["Overlay"]));

material_ui.core.Paper = reagent.core.adapt_react_class.call(null,(MaterialUI["Paper"]));

material_ui.core.RaisedButton = reagent.core.adapt_react_class.call(null,(MaterialUI["RaisedButton"]));

material_ui.core.SelectField = reagent.core.adapt_react_class.call(null,(MaterialUI["SelectField"]));

material_ui.core.Tab = reagent.core.adapt_react_class.call(null,(MaterialUI["Tab"]));

material_ui.core.Tabs = reagent.core.adapt_react_class.call(null,(MaterialUI["Tabs"]));

material_ui.core.TextField = reagent.core.adapt_react_class.call(null,(MaterialUI["TextField"]));
material_ui.core.theme_manager = MaterialUI.Styles.ThemeManager;
material_ui.core.light_theme = MaterialUI.Styles.LightRawTheme;
material_ui.core.light_theme__GT_clj = cljs.core.js__GT_clj.call(null,material_ui.core.light_theme,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
material_ui.core.custom_theme = cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,material_ui.core.light_theme__GT_clj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"palette","palette",-456203511),new cljs.core.Keyword(null,"primary1Color","primary1Color",-897717479)], null),"#77477E"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"palette","palette",-456203511),new cljs.core.Keyword(null,"accent1Color","accent1Color",-24756672)], null),"#FE9600");
material_ui.core._STAR_mui_theme_STAR_ = material_ui.core.theme_manager.getMuiTheme(cljs.core.clj__GT_js.call(null,material_ui.core.custom_theme));
material_ui.core.colors = cljs.core.js__GT_clj.call(null,MaterialUI.Styles.Colors,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
material_ui.core.palette = new cljs.core.Keyword(null,"palette","palette",-456203511).cljs$core$IFn$_invoke$arity$1(material_ui.core.light_theme__GT_clj);
material_ui.core.spacing = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(material_ui.core.light_theme__GT_clj);
material_ui.core.wrapper = (function material_ui$core$wrapper(content){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"mui wrapper",new cljs.core.Keyword(null,"child-context-types","child-context-types",1863743773),{"muiTheme": React.PropTypes.object},new cljs.core.Keyword(null,"get-child-context","get-child-context",-867424947),(function (this$){
return {"muiTheme": material_ui.core._STAR_mui_theme_STAR_};
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (content__$1){
return content__$1;
})], null));
});

//# sourceMappingURL=core.js.map