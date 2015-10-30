// Compiled by ClojureScript 1.7.145 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__10497_10501 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__10498_10502 = null;
var count__10499_10503 = (0);
var i__10500_10504 = (0);
while(true){
if((i__10500_10504 < count__10499_10503)){
var k_10505 = cljs.core._nth.call(null,chunk__10498_10502,i__10500_10504);
var v_10506 = (b[k_10505]);
(a[k_10505] = v_10506);

var G__10507 = seq__10497_10501;
var G__10508 = chunk__10498_10502;
var G__10509 = count__10499_10503;
var G__10510 = (i__10500_10504 + (1));
seq__10497_10501 = G__10507;
chunk__10498_10502 = G__10508;
count__10499_10503 = G__10509;
i__10500_10504 = G__10510;
continue;
} else {
var temp__4425__auto___10511 = cljs.core.seq.call(null,seq__10497_10501);
if(temp__4425__auto___10511){
var seq__10497_10512__$1 = temp__4425__auto___10511;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10497_10512__$1)){
var c__5370__auto___10513 = cljs.core.chunk_first.call(null,seq__10497_10512__$1);
var G__10514 = cljs.core.chunk_rest.call(null,seq__10497_10512__$1);
var G__10515 = c__5370__auto___10513;
var G__10516 = cljs.core.count.call(null,c__5370__auto___10513);
var G__10517 = (0);
seq__10497_10501 = G__10514;
chunk__10498_10502 = G__10515;
count__10499_10503 = G__10516;
i__10500_10504 = G__10517;
continue;
} else {
var k_10518 = cljs.core.first.call(null,seq__10497_10512__$1);
var v_10519 = (b[k_10518]);
(a[k_10518] = v_10519);

var G__10520 = cljs.core.next.call(null,seq__10497_10512__$1);
var G__10521 = null;
var G__10522 = (0);
var G__10523 = (0);
seq__10497_10501 = G__10520;
chunk__10498_10502 = G__10521;
count__10499_10503 = G__10522;
i__10500_10504 = G__10523;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__5165__auto__,writer__5166__auto__,opt__5167__auto__){
return cljs.core._write.call(null,writer__5166__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__5165__auto__,writer__5166__auto__,opt__5167__auto__){
return cljs.core._write.call(null,writer__5166__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args10524 = [];
var len__5625__auto___10527 = arguments.length;
var i__5626__auto___10528 = (0);
while(true){
if((i__5626__auto___10528 < len__5625__auto___10527)){
args10524.push((arguments[i__5626__auto___10528]));

var G__10529 = (i__5626__auto___10528 + (1));
i__5626__auto___10528 = G__10529;
continue;
} else {
}
break;
}

var G__10526 = args10524.length;
switch (G__10526) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10524.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__10531 = (i + (2));
var G__10532 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__10531;
ret = G__10532;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__5165__auto__,writer__5166__auto__,opt__5167__auto__){
return cljs.core._write.call(null,writer__5166__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__5165__auto__,writer__5166__auto__,opt__5167__auto__){
return cljs.core._write.call(null,writer__5166__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__10533_10537 = cljs.core.seq.call(null,v);
var chunk__10534_10538 = null;
var count__10535_10539 = (0);
var i__10536_10540 = (0);
while(true){
if((i__10536_10540 < count__10535_10539)){
var x_10541 = cljs.core._nth.call(null,chunk__10534_10538,i__10536_10540);
ret.push(x_10541);

var G__10542 = seq__10533_10537;
var G__10543 = chunk__10534_10538;
var G__10544 = count__10535_10539;
var G__10545 = (i__10536_10540 + (1));
seq__10533_10537 = G__10542;
chunk__10534_10538 = G__10543;
count__10535_10539 = G__10544;
i__10536_10540 = G__10545;
continue;
} else {
var temp__4425__auto___10546 = cljs.core.seq.call(null,seq__10533_10537);
if(temp__4425__auto___10546){
var seq__10533_10547__$1 = temp__4425__auto___10546;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10533_10547__$1)){
var c__5370__auto___10548 = cljs.core.chunk_first.call(null,seq__10533_10547__$1);
var G__10549 = cljs.core.chunk_rest.call(null,seq__10533_10547__$1);
var G__10550 = c__5370__auto___10548;
var G__10551 = cljs.core.count.call(null,c__5370__auto___10548);
var G__10552 = (0);
seq__10533_10537 = G__10549;
chunk__10534_10538 = G__10550;
count__10535_10539 = G__10551;
i__10536_10540 = G__10552;
continue;
} else {
var x_10553 = cljs.core.first.call(null,seq__10533_10547__$1);
ret.push(x_10553);

var G__10554 = cljs.core.next.call(null,seq__10533_10547__$1);
var G__10555 = null;
var G__10556 = (0);
var G__10557 = (0);
seq__10533_10537 = G__10554;
chunk__10534_10538 = G__10555;
count__10535_10539 = G__10556;
i__10536_10540 = G__10557;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__5165__auto__,writer__5166__auto__,opt__5167__auto__){
return cljs.core._write.call(null,writer__5166__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__5165__auto__,writer__5166__auto__,opt__5167__auto__){
return cljs.core._write.call(null,writer__5166__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__10558_10562 = cljs.core.seq.call(null,v);
var chunk__10559_10563 = null;
var count__10560_10564 = (0);
var i__10561_10565 = (0);
while(true){
if((i__10561_10565 < count__10560_10564)){
var x_10566 = cljs.core._nth.call(null,chunk__10559_10563,i__10561_10565);
ret.push(x_10566);

var G__10567 = seq__10558_10562;
var G__10568 = chunk__10559_10563;
var G__10569 = count__10560_10564;
var G__10570 = (i__10561_10565 + (1));
seq__10558_10562 = G__10567;
chunk__10559_10563 = G__10568;
count__10560_10564 = G__10569;
i__10561_10565 = G__10570;
continue;
} else {
var temp__4425__auto___10571 = cljs.core.seq.call(null,seq__10558_10562);
if(temp__4425__auto___10571){
var seq__10558_10572__$1 = temp__4425__auto___10571;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10558_10572__$1)){
var c__5370__auto___10573 = cljs.core.chunk_first.call(null,seq__10558_10572__$1);
var G__10574 = cljs.core.chunk_rest.call(null,seq__10558_10572__$1);
var G__10575 = c__5370__auto___10573;
var G__10576 = cljs.core.count.call(null,c__5370__auto___10573);
var G__10577 = (0);
seq__10558_10562 = G__10574;
chunk__10559_10563 = G__10575;
count__10560_10564 = G__10576;
i__10561_10565 = G__10577;
continue;
} else {
var x_10578 = cljs.core.first.call(null,seq__10558_10572__$1);
ret.push(x_10578);

var G__10579 = cljs.core.next.call(null,seq__10558_10572__$1);
var G__10580 = null;
var G__10581 = (0);
var G__10582 = (0);
seq__10558_10562 = G__10579;
chunk__10559_10563 = G__10580;
count__10560_10564 = G__10581;
i__10561_10565 = G__10582;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__5165__auto__,writer__5166__auto__,opt__5167__auto__){
return cljs.core._write.call(null,writer__5166__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__10583_10587 = cljs.core.seq.call(null,v);
var chunk__10584_10588 = null;
var count__10585_10589 = (0);
var i__10586_10590 = (0);
while(true){
if((i__10586_10590 < count__10585_10589)){
var x_10591 = cljs.core._nth.call(null,chunk__10584_10588,i__10586_10590);
ret.push(x_10591);

var G__10592 = seq__10583_10587;
var G__10593 = chunk__10584_10588;
var G__10594 = count__10585_10589;
var G__10595 = (i__10586_10590 + (1));
seq__10583_10587 = G__10592;
chunk__10584_10588 = G__10593;
count__10585_10589 = G__10594;
i__10586_10590 = G__10595;
continue;
} else {
var temp__4425__auto___10596 = cljs.core.seq.call(null,seq__10583_10587);
if(temp__4425__auto___10596){
var seq__10583_10597__$1 = temp__4425__auto___10596;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10583_10597__$1)){
var c__5370__auto___10598 = cljs.core.chunk_first.call(null,seq__10583_10597__$1);
var G__10599 = cljs.core.chunk_rest.call(null,seq__10583_10597__$1);
var G__10600 = c__5370__auto___10598;
var G__10601 = cljs.core.count.call(null,c__5370__auto___10598);
var G__10602 = (0);
seq__10583_10587 = G__10599;
chunk__10584_10588 = G__10600;
count__10585_10589 = G__10601;
i__10586_10590 = G__10602;
continue;
} else {
var x_10603 = cljs.core.first.call(null,seq__10583_10597__$1);
ret.push(x_10603);

var G__10604 = cljs.core.next.call(null,seq__10583_10597__$1);
var G__10605 = null;
var G__10606 = (0);
var G__10607 = (0);
seq__10583_10587 = G__10604;
chunk__10584_10588 = G__10605;
count__10585_10589 = G__10606;
i__10586_10590 = G__10607;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__5165__auto__,writer__5166__auto__,opt__5167__auto__){
return cljs.core._write.call(null,writer__5166__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__5165__auto__,writer__5166__auto__,opt__5167__auto__){
return cljs.core._write.call(null,writer__5166__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args10608 = [];
var len__5625__auto___10619 = arguments.length;
var i__5626__auto___10620 = (0);
while(true){
if((i__5626__auto___10620 < len__5625__auto___10619)){
args10608.push((arguments[i__5626__auto___10620]));

var G__10621 = (i__5626__auto___10620 + (1));
i__5626__auto___10620 = G__10621;
continue;
} else {
}
break;
}

var G__10610 = args10608.length;
switch (G__10610) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10608.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__10611 = obj;
G__10611.push(kfn.call(null,k),vfn.call(null,v));

return G__10611;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x10612 = cljs.core.clone.call(null,handlers);
x10612.forEach = ((function (x10612,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__10613 = cljs.core.seq.call(null,coll);
var chunk__10614 = null;
var count__10615 = (0);
var i__10616 = (0);
while(true){
if((i__10616 < count__10615)){
var vec__10617 = cljs.core._nth.call(null,chunk__10614,i__10616);
var k = cljs.core.nth.call(null,vec__10617,(0),null);
var v = cljs.core.nth.call(null,vec__10617,(1),null);
f.call(null,v,k);

var G__10623 = seq__10613;
var G__10624 = chunk__10614;
var G__10625 = count__10615;
var G__10626 = (i__10616 + (1));
seq__10613 = G__10623;
chunk__10614 = G__10624;
count__10615 = G__10625;
i__10616 = G__10626;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__10613);
if(temp__4425__auto__){
var seq__10613__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10613__$1)){
var c__5370__auto__ = cljs.core.chunk_first.call(null,seq__10613__$1);
var G__10627 = cljs.core.chunk_rest.call(null,seq__10613__$1);
var G__10628 = c__5370__auto__;
var G__10629 = cljs.core.count.call(null,c__5370__auto__);
var G__10630 = (0);
seq__10613 = G__10627;
chunk__10614 = G__10628;
count__10615 = G__10629;
i__10616 = G__10630;
continue;
} else {
var vec__10618 = cljs.core.first.call(null,seq__10613__$1);
var k = cljs.core.nth.call(null,vec__10618,(0),null);
var v = cljs.core.nth.call(null,vec__10618,(1),null);
f.call(null,v,k);

var G__10631 = cljs.core.next.call(null,seq__10613__$1);
var G__10632 = null;
var G__10633 = (0);
var G__10634 = (0);
seq__10613 = G__10631;
chunk__10614 = G__10632;
count__10615 = G__10633;
i__10616 = G__10634;
continue;
}
} else {
return null;
}
}
break;
}
});})(x10612,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x10612;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args10635 = [];
var len__5625__auto___10641 = arguments.length;
var i__5626__auto___10642 = (0);
while(true){
if((i__5626__auto___10642 < len__5625__auto___10641)){
args10635.push((arguments[i__5626__auto___10642]));

var G__10643 = (i__5626__auto___10642 + (1));
i__5626__auto___10642 = G__10643;
continue;
} else {
}
break;
}

var G__10637 = args10635.length;
switch (G__10637) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10635.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit10638 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit10638 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta10639){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta10639 = meta10639;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit10638.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10640,meta10639__$1){
var self__ = this;
var _10640__$1 = this;
return (new cognitect.transit.t_cognitect$transit10638(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta10639__$1));
});

cognitect.transit.t_cognitect$transit10638.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10640){
var self__ = this;
var _10640__$1 = this;
return self__.meta10639;
});

cognitect.transit.t_cognitect$transit10638.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit10638.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit10638.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit10638.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit10638.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta10639","meta10639",-888914459,null)], null);
});

cognitect.transit.t_cognitect$transit10638.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit10638.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit10638";

cognitect.transit.t_cognitect$transit10638.cljs$lang$ctorPrWriter = (function (this__5165__auto__,writer__5166__auto__,opt__5167__auto__){
return cljs.core._write.call(null,writer__5166__auto__,"cognitect.transit/t_cognitect$transit10638");
});

cognitect.transit.__GT_t_cognitect$transit10638 = (function cognitect$transit$__GT_t_cognitect$transit10638(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta10639){
return (new cognitect.transit.t_cognitect$transit10638(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta10639));
});

}

return (new cognitect.transit.t_cognitect$transit10638(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__4567__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__4567__auto__)){
return or__4567__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map