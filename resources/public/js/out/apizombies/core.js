// Compiled by ClojureScript 1.7.145 {}
goog.provide('apizombies.core');
goog.require('cljs.core');
goog.require('material_ui.core');
goog.require('ajax.core');
goog.require('secretary.core');
goog.require('goog.history.Html5History');
goog.require('goog.history.EventType');
goog.require('cljs.core.async');
goog.require('reagent.core');
goog.require('goog.events');
goog.require('goog.net.XhrIo');
goog.require('cljs.reader');
cljs.core.enable_console_print_BANG_.call(null);
apizombies.core.get_token = (function apizombies$core$get_token(){
return [cljs.core.str(window.location.pathname),cljs.core.str(window.location.search)].join('');
});
apizombies.core.make_history = (function apizombies$core$make_history(){
var G__10039 = (new goog.history.Html5History());
G__10039.setPathPrefix([cljs.core.str(window.location.protocol),cljs.core.str("//"),cljs.core.str(window.location.host)].join(''));

G__10039.setUseFragment(false);

return G__10039;
});
apizombies.core.handle_url_change = (function apizombies$core$handle_url_change(e){
if(cljs.core.truth_(e.isNavigation)){
} else {
window.scrollTo((0),(0));
}

return secretary.core.dispatch_BANG_.call(null,apizombies.core.get_token.call(null));
});
apizombies.core.home_path;
apizombies.core.employees_list_path;
apizombies.core.employee_detail_path;
if(typeof apizombies.core.history !== 'undefined'){
} else {
apizombies.core.history = (function (){var G__10041 = apizombies.core.make_history.call(null);
goog.events.listen(G__10041,goog.history.EventType.NAVIGATE,((function (G__10041){
return (function (p1__10040_SHARP_){
return apizombies.core.handle_url_change.call(null,p1__10040_SHARP_);
});})(G__10041))
);

G__10041.setEnabled(true);

return G__10041;
})();
}
apizombies.core.nav_BANG_ = (function apizombies$core$nav_BANG_(token){
return apizombies.core.history.setToken(token);
});
apizombies.core.meths = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"get","get",1683182755),"GET",new cljs.core.Keyword(null,"put","put",1299772570),"PUT",new cljs.core.Keyword(null,"post","post",269697687),"POST",new cljs.core.Keyword(null,"delete","delete",-1768633620),"DELETE"], null);
apizombies.core.edn_xhr = (function apizombies$core$edn_xhr(p__10042){
var map__10045 = p__10042;
var map__10045__$1 = ((((!((map__10045 == null)))?((((map__10045.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10045.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10045):map__10045);
var method = cljs.core.get.call(null,map__10045__$1,new cljs.core.Keyword(null,"method","method",55703592));
var url = cljs.core.get.call(null,map__10045__$1,new cljs.core.Keyword(null,"url","url",276297046));
var data = cljs.core.get.call(null,map__10045__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var on_complete = cljs.core.get.call(null,map__10045__$1,new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971));
var on_error = cljs.core.get.call(null,map__10045__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var xhr = (new goog.net.XhrIo());
goog.events.listen(xhr,goog.net.EventType.SUCCESS,((function (xhr,map__10045,map__10045__$1,method,url,data,on_complete,on_error){
return (function (e){
return on_complete.call(null,cljs.reader.read_string.call(null,xhr.getResponseText()));
});})(xhr,map__10045,map__10045__$1,method,url,data,on_complete,on_error))
);

goog.events.listen(xhr,goog.net.EventType.ERROR,((function (xhr,map__10045,map__10045__$1,method,url,data,on_complete,on_error){
return (function (e){
return on_error.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),xhr.getResponseText()], null));
});})(xhr,map__10045,map__10045__$1,method,url,data,on_complete,on_error))
);

return xhr.send(url,apizombies.core.meths.call(null,method),(cljs.core.truth_(data)?cljs.core.pr_str.call(null,data):null),{"Content-Type": "application/edn", "Accept": "application/edn"});
});
if(typeof apizombies.core.app_state !== 'undefined'){
} else {
apizombies.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"employees","employees",1002695450),cljs.core.List.EMPTY], null));
}
apizombies.core.employee_avatar = (function apizombies$core$employee_avatar(employee){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.Avatar,cljs.core.PersistentArrayMap.EMPTY,"?"], null);
});
apizombies.core.load_employee = (function apizombies$core$load_employee(id){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"Toni",new cljs.core.Keyword(null,"email","email",1415816706),"toni@3scale.net"], null);
});
apizombies.core.employees_list_detail = (function apizombies$core$employees_list_detail(employee){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.ListItem,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"primaryText","primaryText",229382014),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(employee),new cljs.core.Keyword(null,"leftAvatar","leftAvatar",431224504),reagent.core.as_element.call(null,apizombies.core.employee_avatar.call(null,employee)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__10047_SHARP_){
p1__10047_SHARP_.preventDefault();

return apizombies.core.nav_BANG_.call(null,apizombies.core.employee_detail_path.call(null));
})], null)], null);
});
apizombies.core.load_employees = (function apizombies$core$load_employees(){
var res_chan = cljs.core.async.chan.call(null);
ajax.core.GET.call(null,"http://apizombies.herokuapp.com/employees",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (res_chan){
return (function (res){
return cljs.core.async.put_BANG_.call(null,res_chan,res);
});})(res_chan))
,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null));

return res_chan;
});
apizombies.core.simple_back_button = (function apizombies$core$simple_back_button(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.wrapper,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.IconButton,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (p1__10048_SHARP_){
p1__10048_SHARP_.preventDefault();

return apizombies.core.nav_BANG_.call(null,"/");
}),new cljs.core.Keyword(null,"iconStyle","iconStyle",1185883564),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"darkWhite","darkWhite",1685255323).cljs$core$IFn$_invoke$arity$1(material_ui.core.colors)], null),new cljs.core.Keyword(null,"iconClassName","iconClassName",1821763512),"material-icons"], null),"arrow_back"], null)], null);
});
apizombies.core.back_button = (function apizombies$core$back_button(){
return reagent.core.create_element.call(null,reagent.core.reactify_component.call(null,apizombies.core.simple_back_button));
});
apizombies.core.employees_list_component = (function apizombies$core$employees_list_component(){
var get_employees = (function (){
var c__7650__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7650__auto__){
return (function (){
var f__7651__auto__ = (function (){var switch__7585__auto__ = ((function (c__7650__auto__){
return (function (state_10072){
var state_val_10073 = (state_10072[(1)]);
if((state_val_10073 === (1))){
var inst_10067 = apizombies.core.load_employees.call(null);
var state_10072__$1 = state_10072;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10072__$1,(2),inst_10067);
} else {
if((state_val_10073 === (2))){
var inst_10069 = (state_10072[(2)]);
var inst_10070 = cljs.core.swap_BANG_.call(null,apizombies.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"employees","employees",1002695450),inst_10069);
var state_10072__$1 = state_10072;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10072__$1,inst_10070);
} else {
return null;
}
}
});})(c__7650__auto__))
;
return ((function (switch__7585__auto__,c__7650__auto__){
return (function() {
var apizombies$core$employees_list_component_$_state_machine__7586__auto__ = null;
var apizombies$core$employees_list_component_$_state_machine__7586__auto____0 = (function (){
var statearr_10077 = [null,null,null,null,null,null,null];
(statearr_10077[(0)] = apizombies$core$employees_list_component_$_state_machine__7586__auto__);

(statearr_10077[(1)] = (1));

return statearr_10077;
});
var apizombies$core$employees_list_component_$_state_machine__7586__auto____1 = (function (state_10072){
while(true){
var ret_value__7587__auto__ = (function (){try{while(true){
var result__7588__auto__ = switch__7585__auto__.call(null,state_10072);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7588__auto__;
}
break;
}
}catch (e10078){if((e10078 instanceof Object)){
var ex__7589__auto__ = e10078;
var statearr_10079_10085 = state_10072;
(statearr_10079_10085[(5)] = ex__7589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10072);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10078;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10086 = state_10072;
state_10072 = G__10086;
continue;
} else {
return ret_value__7587__auto__;
}
break;
}
});
apizombies$core$employees_list_component_$_state_machine__7586__auto__ = function(state_10072){
switch(arguments.length){
case 0:
return apizombies$core$employees_list_component_$_state_machine__7586__auto____0.call(this);
case 1:
return apizombies$core$employees_list_component_$_state_machine__7586__auto____1.call(this,state_10072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
apizombies$core$employees_list_component_$_state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$0 = apizombies$core$employees_list_component_$_state_machine__7586__auto____0;
apizombies$core$employees_list_component_$_state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$1 = apizombies$core$employees_list_component_$_state_machine__7586__auto____1;
return apizombies$core$employees_list_component_$_state_machine__7586__auto__;
})()
;})(switch__7585__auto__,c__7650__auto__))
})();
var state__7652__auto__ = (function (){var statearr_10080 = f__7651__auto__.call(null);
(statearr_10080[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7650__auto__);

return statearr_10080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7652__auto__);
});})(c__7650__auto__))
);

return c__7650__auto__;
});
get_employees.call(null);

return ((function (get_employees){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.wrapper,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.AppBar,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"APIZombies",new cljs.core.Keyword(null,"iconElementLeft","iconElementLeft",-685485132),apizombies.core.back_button.call(null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.List,(function (){var iter__5339__auto__ = ((function (get_employees){
return (function apizombies$core$employees_list_component_$_iter__10081(s__10082){
return (new cljs.core.LazySeq(null,((function (get_employees){
return (function (){
var s__10082__$1 = s__10082;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__10082__$1);
if(temp__4425__auto__){
var s__10082__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10082__$2)){
var c__5337__auto__ = cljs.core.chunk_first.call(null,s__10082__$2);
var size__5338__auto__ = cljs.core.count.call(null,c__5337__auto__);
var b__10084 = cljs.core.chunk_buffer.call(null,size__5338__auto__);
if((function (){var i__10083 = (0);
while(true){
if((i__10083 < size__5338__auto__)){
var employee = cljs.core._nth.call(null,c__5337__auto__,i__10083);
cljs.core.chunk_append.call(null,b__10084,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [apizombies.core.employees_list_detail,employee], null));

var G__10087 = (i__10083 + (1));
i__10083 = G__10087;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10084),apizombies$core$employees_list_component_$_iter__10081.call(null,cljs.core.chunk_rest.call(null,s__10082__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10084),null);
}
} else {
var employee = cljs.core.first.call(null,s__10082__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [apizombies.core.employees_list_detail,employee], null),apizombies$core$employees_list_component_$_iter__10081.call(null,cljs.core.rest.call(null,s__10082__$2)));
}
} else {
return null;
}
break;
}
});})(get_employees))
,null,null));
});})(get_employees))
;
return iter__5339__auto__.call(null,new cljs.core.Keyword(null,"employees","employees",1002695450).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,apizombies.core.app_state)));
})()], null)], null)], null);
});
;})(get_employees))
});
apizombies.core.employee_detail_component = (function apizombies$core$employee_detail_component(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.wrapper,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.AppBar,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"APIZombies",new cljs.core.Keyword(null,"iconElementLeft","iconElementLeft",-685485132),apizombies.core.back_button.call(null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.Card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.CardHeader,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Toni",new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363),"Description"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.CardText,"Lorem ipsum dolor sit amet"], null)], null)], null)], null)], null);
});
});
apizombies.core.main_component = (function apizombies$core$main_component(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),"url('../img/bg_halloween.jpg')",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(30)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"img/apizombies-logo.png"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.wrapper,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.RaisedButton,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Explore the team",new cljs.core.Keyword(null,"secondary","secondary",-669381460),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__10088_SHARP_){
p1__10088_SHARP_.preventDefault();

return apizombies.core.nav_BANG_.call(null,apizombies.core.employees_list_path.call(null));
})], null)], null)], null)], null);
});
apizombies.core.page = (function apizombies$core$page(page_component){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [page_component], null),document.getElementById("app"));
});
var action__9913__auto___10093 = (function (params__9914__auto__){
if(cljs.core.map_QMARK_.call(null,params__9914__auto__)){
var map__10089 = params__9914__auto__;
var map__10089__$1 = ((((!((map__10089 == null)))?((((map__10089.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10089.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10089):map__10089);
return apizombies.core.page.call(null,apizombies.core.main_component);
} else {
if(cljs.core.vector_QMARK_.call(null,params__9914__auto__)){
var vec__10091 = params__9914__auto__;
return apizombies.core.page.call(null,apizombies.core.main_component);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__9913__auto___10093);

apizombies.core.home_path = ((function (action__9913__auto___10093){
return (function apizombies$core$home_path(var_args){
var args__5632__auto__ = [];
var len__5625__auto___10094 = arguments.length;
var i__5626__auto___10095 = (0);
while(true){
if((i__5626__auto___10095 < len__5625__auto___10094)){
args__5632__auto__.push((arguments[i__5626__auto___10095]));

var G__10096 = (i__5626__auto___10095 + (1));
i__5626__auto___10095 = G__10096;
continue;
} else {
}
break;
}

var argseq__5633__auto__ = ((((0) < args__5632__auto__.length))?(new cljs.core.IndexedSeq(args__5632__auto__.slice((0)),(0))):null);
return apizombies.core.home_path.cljs$core$IFn$_invoke$arity$variadic(argseq__5633__auto__);
});})(action__9913__auto___10093))
;

apizombies.core.home_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__9913__auto___10093){
return (function (args__9912__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/",args__9912__auto__);
});})(action__9913__auto___10093))
;

apizombies.core.home_path.cljs$lang$maxFixedArity = (0);

apizombies.core.home_path.cljs$lang$applyTo = ((function (action__9913__auto___10093){
return (function (seq10092){
return apizombies.core.home_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10092));
});})(action__9913__auto___10093))
;
var action__9913__auto___10101 = (function (params__9914__auto__){
if(cljs.core.map_QMARK_.call(null,params__9914__auto__)){
var map__10097 = params__9914__auto__;
var map__10097__$1 = ((((!((map__10097 == null)))?((((map__10097.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10097.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10097):map__10097);
return apizombies.core.page.call(null,apizombies.core.employees_list_component);
} else {
if(cljs.core.vector_QMARK_.call(null,params__9914__auto__)){
var vec__10099 = params__9914__auto__;
return apizombies.core.page.call(null,apizombies.core.employees_list_component);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/employees",action__9913__auto___10101);

apizombies.core.employees_list_path = ((function (action__9913__auto___10101){
return (function apizombies$core$employees_list_path(var_args){
var args__5632__auto__ = [];
var len__5625__auto___10102 = arguments.length;
var i__5626__auto___10103 = (0);
while(true){
if((i__5626__auto___10103 < len__5625__auto___10102)){
args__5632__auto__.push((arguments[i__5626__auto___10103]));

var G__10104 = (i__5626__auto___10103 + (1));
i__5626__auto___10103 = G__10104;
continue;
} else {
}
break;
}

var argseq__5633__auto__ = ((((0) < args__5632__auto__.length))?(new cljs.core.IndexedSeq(args__5632__auto__.slice((0)),(0))):null);
return apizombies.core.employees_list_path.cljs$core$IFn$_invoke$arity$variadic(argseq__5633__auto__);
});})(action__9913__auto___10101))
;

apizombies.core.employees_list_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__9913__auto___10101){
return (function (args__9912__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/employees",args__9912__auto__);
});})(action__9913__auto___10101))
;

apizombies.core.employees_list_path.cljs$lang$maxFixedArity = (0);

apizombies.core.employees_list_path.cljs$lang$applyTo = ((function (action__9913__auto___10101){
return (function (seq10100){
return apizombies.core.employees_list_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10100));
});})(action__9913__auto___10101))
;
var action__9913__auto___10109 = (function (params__9914__auto__){
if(cljs.core.map_QMARK_.call(null,params__9914__auto__)){
var map__10105 = params__9914__auto__;
var map__10105__$1 = ((((!((map__10105 == null)))?((((map__10105.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10105.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10105):map__10105);
return apizombies.core.page.call(null,apizombies.core.employee_detail_component);
} else {
if(cljs.core.vector_QMARK_.call(null,params__9914__auto__)){
var vec__10107 = params__9914__auto__;
return apizombies.core.page.call(null,apizombies.core.employee_detail_component);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/employee",action__9913__auto___10109);

apizombies.core.employee_detail_path = ((function (action__9913__auto___10109){
return (function apizombies$core$employee_detail_path(var_args){
var args__5632__auto__ = [];
var len__5625__auto___10110 = arguments.length;
var i__5626__auto___10111 = (0);
while(true){
if((i__5626__auto___10111 < len__5625__auto___10110)){
args__5632__auto__.push((arguments[i__5626__auto___10111]));

var G__10112 = (i__5626__auto___10111 + (1));
i__5626__auto___10111 = G__10112;
continue;
} else {
}
break;
}

var argseq__5633__auto__ = ((((0) < args__5632__auto__.length))?(new cljs.core.IndexedSeq(args__5632__auto__.slice((0)),(0))):null);
return apizombies.core.employee_detail_path.cljs$core$IFn$_invoke$arity$variadic(argseq__5633__auto__);
});})(action__9913__auto___10109))
;

apizombies.core.employee_detail_path.cljs$core$IFn$_invoke$arity$variadic = ((function (action__9913__auto___10109){
return (function (args__9912__auto__){
return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/employee",args__9912__auto__);
});})(action__9913__auto___10109))
;

apizombies.core.employee_detail_path.cljs$lang$maxFixedArity = (0);

apizombies.core.employee_detail_path.cljs$lang$applyTo = ((function (action__9913__auto___10109){
return (function (seq10108){
return apizombies.core.employee_detail_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10108));
});})(action__9913__auto___10109))
;
apizombies.core.main = (function apizombies$core$main(){
return secretary.core.dispatch_BANG_.call(null,apizombies.core.home_path.call(null));
});

//# sourceMappingURL=core.js.map