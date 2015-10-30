// Compiled by ClojureScript 1.7.145 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__10648,handler){
var map__10649 = p__10648;
var map__10649__$1 = ((((!((map__10649 == null)))?((((map__10649.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10649.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10649):map__10649);
var uri = cljs.core.get.call(null,map__10649__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__10649__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__10649__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__10649__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__10649__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__10649__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__10649__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__10649,map__10649__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__10647_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__10647_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__10649,map__10649__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___10657 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___10657)){
var response_type_10658 = temp__4425__auto___10657;
this$__$1.responseType = cljs.core.name.call(null,response_type_10658);
} else {
}

var seq__10651_10659 = cljs.core.seq.call(null,headers);
var chunk__10652_10660 = null;
var count__10653_10661 = (0);
var i__10654_10662 = (0);
while(true){
if((i__10654_10662 < count__10653_10661)){
var vec__10655_10663 = cljs.core._nth.call(null,chunk__10652_10660,i__10654_10662);
var k_10664 = cljs.core.nth.call(null,vec__10655_10663,(0),null);
var v_10665 = cljs.core.nth.call(null,vec__10655_10663,(1),null);
this$__$1.setRequestHeader(k_10664,v_10665);

var G__10666 = seq__10651_10659;
var G__10667 = chunk__10652_10660;
var G__10668 = count__10653_10661;
var G__10669 = (i__10654_10662 + (1));
seq__10651_10659 = G__10666;
chunk__10652_10660 = G__10667;
count__10653_10661 = G__10668;
i__10654_10662 = G__10669;
continue;
} else {
var temp__4425__auto___10670 = cljs.core.seq.call(null,seq__10651_10659);
if(temp__4425__auto___10670){
var seq__10651_10671__$1 = temp__4425__auto___10670;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10651_10671__$1)){
var c__5370__auto___10672 = cljs.core.chunk_first.call(null,seq__10651_10671__$1);
var G__10673 = cljs.core.chunk_rest.call(null,seq__10651_10671__$1);
var G__10674 = c__5370__auto___10672;
var G__10675 = cljs.core.count.call(null,c__5370__auto___10672);
var G__10676 = (0);
seq__10651_10659 = G__10673;
chunk__10652_10660 = G__10674;
count__10653_10661 = G__10675;
i__10654_10662 = G__10676;
continue;
} else {
var vec__10656_10677 = cljs.core.first.call(null,seq__10651_10671__$1);
var k_10678 = cljs.core.nth.call(null,vec__10656_10677,(0),null);
var v_10679 = cljs.core.nth.call(null,vec__10656_10677,(1),null);
this$__$1.setRequestHeader(k_10678,v_10679);

var G__10680 = cljs.core.next.call(null,seq__10651_10671__$1);
var G__10681 = null;
var G__10682 = (0);
var G__10683 = (0);
seq__10651_10659 = G__10680;
chunk__10652_10660 = G__10681;
count__10653_10661 = G__10682;
i__10654_10662 = G__10683;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4567__auto__ = body;
if(cljs.core.truth_(or__4567__auto__)){
return or__4567__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map