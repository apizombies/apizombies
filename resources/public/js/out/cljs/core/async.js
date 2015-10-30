// Compiled by ClojureScript 1.7.145 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async11233 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11233 = (function (fn_handler,f,meta11234){
this.fn_handler = fn_handler;
this.f = f;
this.meta11234 = meta11234;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11233.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11235,meta11234__$1){
var self__ = this;
var _11235__$1 = this;
return (new cljs.core.async.t_cljs$core$async11233(self__.fn_handler,self__.f,meta11234__$1));
});

cljs.core.async.t_cljs$core$async11233.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11235){
var self__ = this;
var _11235__$1 = this;
return self__.meta11234;
});

cljs.core.async.t_cljs$core$async11233.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async11233.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async11233.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async11233.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta11234","meta11234",885420596,null)], null);
});

cljs.core.async.t_cljs$core$async11233.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11233.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11233";

cljs.core.async.t_cljs$core$async11233.cljs$lang$ctorPrWriter = (function (this__5165__auto__,writer__5166__auto__,opt__5167__auto__){
return cljs.core._write.call(null,writer__5166__auto__,"cljs.core.async/t_cljs$core$async11233");
});

cljs.core.async.__GT_t_cljs$core$async11233 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async11233(fn_handler__$1,f__$1,meta11234){
return (new cljs.core.async.t_cljs$core$async11233(fn_handler__$1,f__$1,meta11234));
});

}

return (new cljs.core.async.t_cljs$core$async11233(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args11238 = [];
var len__5625__auto___11241 = arguments.length;
var i__5626__auto___11242 = (0);
while(true){
if((i__5626__auto___11242 < len__5625__auto___11241)){
args11238.push((arguments[i__5626__auto___11242]));

var G__11243 = (i__5626__auto___11242 + (1));
i__5626__auto___11242 = G__11243;
continue;
} else {
}
break;
}

var G__11240 = args11238.length;
switch (G__11240) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11238.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args11245 = [];
var len__5625__auto___11248 = arguments.length;
var i__5626__auto___11249 = (0);
while(true){
if((i__5626__auto___11249 < len__5625__auto___11248)){
args11245.push((arguments[i__5626__auto___11249]));

var G__11250 = (i__5626__auto___11249 + (1));
i__5626__auto___11249 = G__11250;
continue;
} else {
}
break;
}

var G__11247 = args11245.length;
switch (G__11247) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11245.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_11252 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_11252);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_11252,ret){
return (function (){
return fn1.call(null,val_11252);
});})(val_11252,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args11253 = [];
var len__5625__auto___11256 = arguments.length;
var i__5626__auto___11257 = (0);
while(true){
if((i__5626__auto___11257 < len__5625__auto___11256)){
args11253.push((arguments[i__5626__auto___11257]));

var G__11258 = (i__5626__auto___11257 + (1));
i__5626__auto___11257 = G__11258;
continue;
} else {
}
break;
}

var G__11255 = args11253.length;
switch (G__11255) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11253.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5470__auto___11260 = n;
var x_11261 = (0);
while(true){
if((x_11261 < n__5470__auto___11260)){
(a[x_11261] = (0));

var G__11262 = (x_11261 + (1));
x_11261 = G__11262;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__11263 = (i + (1));
i = G__11263;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async11267 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11267 = (function (alt_flag,flag,meta11268){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta11268 = meta11268;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11267.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_11269,meta11268__$1){
var self__ = this;
var _11269__$1 = this;
return (new cljs.core.async.t_cljs$core$async11267(self__.alt_flag,self__.flag,meta11268__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async11267.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_11269){
var self__ = this;
var _11269__$1 = this;
return self__.meta11268;
});})(flag))
;

cljs.core.async.t_cljs$core$async11267.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async11267.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async11267.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async11267.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta11268","meta11268",-753677552,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async11267.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11267.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11267";

cljs.core.async.t_cljs$core$async11267.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5165__auto__,writer__5166__auto__,opt__5167__auto__){
return cljs.core._write.call(null,writer__5166__auto__,"cljs.core.async/t_cljs$core$async11267");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async11267 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async11267(alt_flag__$1,flag__$1,meta11268){
return (new cljs.core.async.t_cljs$core$async11267(alt_flag__$1,flag__$1,meta11268));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async11267(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async11273 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11273 = (function (alt_handler,flag,cb,meta11274){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta11274 = meta11274;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11273.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11275,meta11274__$1){
var self__ = this;
var _11275__$1 = this;
return (new cljs.core.async.t_cljs$core$async11273(self__.alt_handler,self__.flag,self__.cb,meta11274__$1));
});

cljs.core.async.t_cljs$core$async11273.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11275){
var self__ = this;
var _11275__$1 = this;
return self__.meta11274;
});

cljs.core.async.t_cljs$core$async11273.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async11273.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async11273.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async11273.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta11274","meta11274",-1420704432,null)], null);
});

cljs.core.async.t_cljs$core$async11273.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11273.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11273";

cljs.core.async.t_cljs$core$async11273.cljs$lang$ctorPrWriter = (function (this__5165__auto__,writer__5166__auto__,opt__5167__auto__){
return cljs.core._write.call(null,writer__5166__auto__,"cljs.core.async/t_cljs$core$async11273");
});

cljs.core.async.__GT_t_cljs$core$async11273 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async11273(alt_handler__$1,flag__$1,cb__$1,meta11274){
return (new cljs.core.async.t_cljs$core$async11273(alt_handler__$1,flag__$1,cb__$1,meta11274));
});

}

return (new cljs.core.async.t_cljs$core$async11273(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11276_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11276_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11277_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11277_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4567__auto__ = wport;
if(cljs.core.truth_(or__4567__auto__)){
return or__4567__auto__;
} else {
return port;
}
})()], null));
} else {
var G__11278 = (i + (1));
i = G__11278;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4567__auto__ = ret;
if(cljs.core.truth_(or__4567__auto__)){
return or__4567__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__4555__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4555__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4555__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5632__auto__ = [];
var len__5625__auto___11284 = arguments.length;
var i__5626__auto___11285 = (0);
while(true){
if((i__5626__auto___11285 < len__5625__auto___11284)){
args__5632__auto__.push((arguments[i__5626__auto___11285]));

var G__11286 = (i__5626__auto___11285 + (1));
i__5626__auto___11285 = G__11286;
continue;
} else {
}
break;
}

var argseq__5633__auto__ = ((((1) < args__5632__auto__.length))?(new cljs.core.IndexedSeq(args__5632__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5633__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__11281){
var map__11282 = p__11281;
var map__11282__$1 = ((((!((map__11282 == null)))?((((map__11282.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11282.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11282):map__11282);
var opts = map__11282__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq11279){
var G__11280 = cljs.core.first.call(null,seq11279);
var seq11279__$1 = cljs.core.next.call(null,seq11279);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11280,seq11279__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args11287 = [];
var len__5625__auto___11337 = arguments.length;
var i__5626__auto___11338 = (0);
while(true){
if((i__5626__auto___11338 < len__5625__auto___11337)){
args11287.push((arguments[i__5626__auto___11338]));

var G__11339 = (i__5626__auto___11338 + (1));
i__5626__auto___11338 = G__11339;
continue;
} else {
}
break;
}

var G__11289 = args11287.length;
switch (G__11289) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11287.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__7650__auto___11341 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7650__auto___11341){
return (function (){
var f__7651__auto__ = (function (){var switch__7585__auto__ = ((function (c__7650__auto___11341){
return (function (state_11313){
var state_val_11314 = (state_11313[(1)]);
if((state_val_11314 === (7))){
var inst_11309 = (state_11313[(2)]);
var state_11313__$1 = state_11313;
var statearr_11315_11342 = state_11313__$1;
(statearr_11315_11342[(2)] = inst_11309);

(statearr_11315_11342[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11314 === (1))){
var state_11313__$1 = state_11313;
var statearr_11316_11343 = state_11313__$1;
(statearr_11316_11343[(2)] = null);

(statearr_11316_11343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11314 === (4))){
var inst_11292 = (state_11313[(7)]);
var inst_11292__$1 = (state_11313[(2)]);
var inst_11293 = (inst_11292__$1 == null);
var state_11313__$1 = (function (){var statearr_11317 = state_11313;
(statearr_11317[(7)] = inst_11292__$1);

return statearr_11317;
})();
if(cljs.core.truth_(inst_11293)){
var statearr_11318_11344 = state_11313__$1;
(statearr_11318_11344[(1)] = (5));

} else {
var statearr_11319_11345 = state_11313__$1;
(statearr_11319_11345[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11314 === (13))){
var state_11313__$1 = state_11313;
var statearr_11320_11346 = state_11313__$1;
(statearr_11320_11346[(2)] = null);

(statearr_11320_11346[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11314 === (6))){
var inst_11292 = (state_11313[(7)]);
var state_11313__$1 = state_11313;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11313__$1,(11),to,inst_11292);
} else {
if((state_val_11314 === (3))){
var inst_11311 = (state_11313[(2)]);
var state_11313__$1 = state_11313;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11313__$1,inst_11311);
} else {
if((state_val_11314 === (12))){
var state_11313__$1 = state_11313;
var statearr_11321_11347 = state_11313__$1;
(statearr_11321_11347[(2)] = null);

(statearr_11321_11347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11314 === (2))){
var state_11313__$1 = state_11313;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11313__$1,(4),from);
} else {
if((state_val_11314 === (11))){
var inst_11302 = (state_11313[(2)]);
var state_11313__$1 = state_11313;
if(cljs.core.truth_(inst_11302)){
var statearr_11322_11348 = state_11313__$1;
(statearr_11322_11348[(1)] = (12));

} else {
var statearr_11323_11349 = state_11313__$1;
(statearr_11323_11349[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11314 === (9))){
var state_11313__$1 = state_11313;
var statearr_11324_11350 = state_11313__$1;
(statearr_11324_11350[(2)] = null);

(statearr_11324_11350[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11314 === (5))){
var state_11313__$1 = state_11313;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11325_11351 = state_11313__$1;
(statearr_11325_11351[(1)] = (8));

} else {
var statearr_11326_11352 = state_11313__$1;
(statearr_11326_11352[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11314 === (14))){
var inst_11307 = (state_11313[(2)]);
var state_11313__$1 = state_11313;
var statearr_11327_11353 = state_11313__$1;
(statearr_11327_11353[(2)] = inst_11307);

(statearr_11327_11353[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11314 === (10))){
var inst_11299 = (state_11313[(2)]);
var state_11313__$1 = state_11313;
var statearr_11328_11354 = state_11313__$1;
(statearr_11328_11354[(2)] = inst_11299);

(statearr_11328_11354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11314 === (8))){
var inst_11296 = cljs.core.async.close_BANG_.call(null,to);
var state_11313__$1 = state_11313;
var statearr_11329_11355 = state_11313__$1;
(statearr_11329_11355[(2)] = inst_11296);

(statearr_11329_11355[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7650__auto___11341))
;
return ((function (switch__7585__auto__,c__7650__auto___11341){
return (function() {
var cljs$core$async$state_machine__7586__auto__ = null;
var cljs$core$async$state_machine__7586__auto____0 = (function (){
var statearr_11333 = [null,null,null,null,null,null,null,null];
(statearr_11333[(0)] = cljs$core$async$state_machine__7586__auto__);

(statearr_11333[(1)] = (1));

return statearr_11333;
});
var cljs$core$async$state_machine__7586__auto____1 = (function (state_11313){
while(true){
var ret_value__7587__auto__ = (function (){try{while(true){
var result__7588__auto__ = switch__7585__auto__.call(null,state_11313);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7588__auto__;
}
break;
}
}catch (e11334){if((e11334 instanceof Object)){
var ex__7589__auto__ = e11334;
var statearr_11335_11356 = state_11313;
(statearr_11335_11356[(5)] = ex__7589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11313);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11334;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11357 = state_11313;
state_11313 = G__11357;
continue;
} else {
return ret_value__7587__auto__;
}
break;
}
});
cljs$core$async$state_machine__7586__auto__ = function(state_11313){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7586__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7586__auto____1.call(this,state_11313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7586__auto____0;
cljs$core$async$state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7586__auto____1;
return cljs$core$async$state_machine__7586__auto__;
})()
;})(switch__7585__auto__,c__7650__auto___11341))
})();
var state__7652__auto__ = (function (){var statearr_11336 = f__7651__auto__.call(null);
(statearr_11336[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7650__auto___11341);

return statearr_11336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7652__auto__);
});})(c__7650__auto___11341))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__11541){
var vec__11542 = p__11541;
var v = cljs.core.nth.call(null,vec__11542,(0),null);
var p = cljs.core.nth.call(null,vec__11542,(1),null);
var job = vec__11542;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7650__auto___11724 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7650__auto___11724,res,vec__11542,v,p,job,jobs,results){
return (function (){
var f__7651__auto__ = (function (){var switch__7585__auto__ = ((function (c__7650__auto___11724,res,vec__11542,v,p,job,jobs,results){
return (function (state_11547){
var state_val_11548 = (state_11547[(1)]);
if((state_val_11548 === (1))){
var state_11547__$1 = state_11547;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11547__$1,(2),res,v);
} else {
if((state_val_11548 === (2))){
var inst_11544 = (state_11547[(2)]);
var inst_11545 = cljs.core.async.close_BANG_.call(null,res);
var state_11547__$1 = (function (){var statearr_11549 = state_11547;
(statearr_11549[(7)] = inst_11544);

return statearr_11549;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11547__$1,inst_11545);
} else {
return null;
}
}
});})(c__7650__auto___11724,res,vec__11542,v,p,job,jobs,results))
;
return ((function (switch__7585__auto__,c__7650__auto___11724,res,vec__11542,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7586__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7586__auto____0 = (function (){
var statearr_11553 = [null,null,null,null,null,null,null,null];
(statearr_11553[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7586__auto__);

(statearr_11553[(1)] = (1));

return statearr_11553;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7586__auto____1 = (function (state_11547){
while(true){
var ret_value__7587__auto__ = (function (){try{while(true){
var result__7588__auto__ = switch__7585__auto__.call(null,state_11547);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7588__auto__;
}
break;
}
}catch (e11554){if((e11554 instanceof Object)){
var ex__7589__auto__ = e11554;
var statearr_11555_11725 = state_11547;
(statearr_11555_11725[(5)] = ex__7589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11547);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11554;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11726 = state_11547;
state_11547 = G__11726;
continue;
} else {
return ret_value__7587__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7586__auto__ = function(state_11547){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7586__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7586__auto____1.call(this,state_11547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7586__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7586__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7586__auto__;
})()
;})(switch__7585__auto__,c__7650__auto___11724,res,vec__11542,v,p,job,jobs,results))
})();
var state__7652__auto__ = (function (){var statearr_11556 = f__7651__auto__.call(null);
(statearr_11556[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7650__auto___11724);

return statearr_11556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7652__auto__);
});})(c__7650__auto___11724,res,vec__11542,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__11557){
var vec__11558 = p__11557;
var v = cljs.core.nth.call(null,vec__11558,(0),null);
var p = cljs.core.nth.call(null,vec__11558,(1),null);
var job = vec__11558;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__5470__auto___11727 = n;
var __11728 = (0);
while(true){
if((__11728 < n__5470__auto___11727)){
var G__11559_11729 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__11559_11729) {
case "compute":
var c__7650__auto___11731 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11728,c__7650__auto___11731,G__11559_11729,n__5470__auto___11727,jobs,results,process,async){
return (function (){
var f__7651__auto__ = (function (){var switch__7585__auto__ = ((function (__11728,c__7650__auto___11731,G__11559_11729,n__5470__auto___11727,jobs,results,process,async){
return (function (state_11572){
var state_val_11573 = (state_11572[(1)]);
if((state_val_11573 === (1))){
var state_11572__$1 = state_11572;
var statearr_11574_11732 = state_11572__$1;
(statearr_11574_11732[(2)] = null);

(statearr_11574_11732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11573 === (2))){
var state_11572__$1 = state_11572;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11572__$1,(4),jobs);
} else {
if((state_val_11573 === (3))){
var inst_11570 = (state_11572[(2)]);
var state_11572__$1 = state_11572;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11572__$1,inst_11570);
} else {
if((state_val_11573 === (4))){
var inst_11562 = (state_11572[(2)]);
var inst_11563 = process.call(null,inst_11562);
var state_11572__$1 = state_11572;
if(cljs.core.truth_(inst_11563)){
var statearr_11575_11733 = state_11572__$1;
(statearr_11575_11733[(1)] = (5));

} else {
var statearr_11576_11734 = state_11572__$1;
(statearr_11576_11734[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11573 === (5))){
var state_11572__$1 = state_11572;
var statearr_11577_11735 = state_11572__$1;
(statearr_11577_11735[(2)] = null);

(statearr_11577_11735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11573 === (6))){
var state_11572__$1 = state_11572;
var statearr_11578_11736 = state_11572__$1;
(statearr_11578_11736[(2)] = null);

(statearr_11578_11736[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11573 === (7))){
var inst_11568 = (state_11572[(2)]);
var state_11572__$1 = state_11572;
var statearr_11579_11737 = state_11572__$1;
(statearr_11579_11737[(2)] = inst_11568);

(statearr_11579_11737[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__11728,c__7650__auto___11731,G__11559_11729,n__5470__auto___11727,jobs,results,process,async))
;
return ((function (__11728,switch__7585__auto__,c__7650__auto___11731,G__11559_11729,n__5470__auto___11727,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7586__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7586__auto____0 = (function (){
var statearr_11583 = [null,null,null,null,null,null,null];
(statearr_11583[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7586__auto__);

(statearr_11583[(1)] = (1));

return statearr_11583;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7586__auto____1 = (function (state_11572){
while(true){
var ret_value__7587__auto__ = (function (){try{while(true){
var result__7588__auto__ = switch__7585__auto__.call(null,state_11572);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7588__auto__;
}
break;
}
}catch (e11584){if((e11584 instanceof Object)){
var ex__7589__auto__ = e11584;
var statearr_11585_11738 = state_11572;
(statearr_11585_11738[(5)] = ex__7589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11572);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11584;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11739 = state_11572;
state_11572 = G__11739;
continue;
} else {
return ret_value__7587__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7586__auto__ = function(state_11572){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7586__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7586__auto____1.call(this,state_11572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7586__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7586__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7586__auto__;
})()
;})(__11728,switch__7585__auto__,c__7650__auto___11731,G__11559_11729,n__5470__auto___11727,jobs,results,process,async))
})();
var state__7652__auto__ = (function (){var statearr_11586 = f__7651__auto__.call(null);
(statearr_11586[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7650__auto___11731);

return statearr_11586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7652__auto__);
});})(__11728,c__7650__auto___11731,G__11559_11729,n__5470__auto___11727,jobs,results,process,async))
);


break;
case "async":
var c__7650__auto___11740 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__11728,c__7650__auto___11740,G__11559_11729,n__5470__auto___11727,jobs,results,process,async){
return (function (){
var f__7651__auto__ = (function (){var switch__7585__auto__ = ((function (__11728,c__7650__auto___11740,G__11559_11729,n__5470__auto___11727,jobs,results,process,async){
return (function (state_11599){
var state_val_11600 = (state_11599[(1)]);
if((state_val_11600 === (1))){
var state_11599__$1 = state_11599;
var statearr_11601_11741 = state_11599__$1;
(statearr_11601_11741[(2)] = null);

(statearr_11601_11741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11600 === (2))){
var state_11599__$1 = state_11599;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11599__$1,(4),jobs);
} else {
if((state_val_11600 === (3))){
var inst_11597 = (state_11599[(2)]);
var state_11599__$1 = state_11599;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11599__$1,inst_11597);
} else {
if((state_val_11600 === (4))){
var inst_11589 = (state_11599[(2)]);
var inst_11590 = async.call(null,inst_11589);
var state_11599__$1 = state_11599;
if(cljs.core.truth_(inst_11590)){
var statearr_11602_11742 = state_11599__$1;
(statearr_11602_11742[(1)] = (5));

} else {
var statearr_11603_11743 = state_11599__$1;
(statearr_11603_11743[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11600 === (5))){
var state_11599__$1 = state_11599;
var statearr_11604_11744 = state_11599__$1;
(statearr_11604_11744[(2)] = null);

(statearr_11604_11744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11600 === (6))){
var state_11599__$1 = state_11599;
var statearr_11605_11745 = state_11599__$1;
(statearr_11605_11745[(2)] = null);

(statearr_11605_11745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11600 === (7))){
var inst_11595 = (state_11599[(2)]);
var state_11599__$1 = state_11599;
var statearr_11606_11746 = state_11599__$1;
(statearr_11606_11746[(2)] = inst_11595);

(statearr_11606_11746[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__11728,c__7650__auto___11740,G__11559_11729,n__5470__auto___11727,jobs,results,process,async))
;
return ((function (__11728,switch__7585__auto__,c__7650__auto___11740,G__11559_11729,n__5470__auto___11727,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7586__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7586__auto____0 = (function (){
var statearr_11610 = [null,null,null,null,null,null,null];
(statearr_11610[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7586__auto__);

(statearr_11610[(1)] = (1));

return statearr_11610;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7586__auto____1 = (function (state_11599){
while(true){
var ret_value__7587__auto__ = (function (){try{while(true){
var result__7588__auto__ = switch__7585__auto__.call(null,state_11599);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7588__auto__;
}
break;
}
}catch (e11611){if((e11611 instanceof Object)){
var ex__7589__auto__ = e11611;
var statearr_11612_11747 = state_11599;
(statearr_11612_11747[(5)] = ex__7589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11599);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11611;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11748 = state_11599;
state_11599 = G__11748;
continue;
} else {
return ret_value__7587__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7586__auto__ = function(state_11599){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7586__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7586__auto____1.call(this,state_11599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7586__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7586__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7586__auto__;
})()
;})(__11728,switch__7585__auto__,c__7650__auto___11740,G__11559_11729,n__5470__auto___11727,jobs,results,process,async))
})();
var state__7652__auto__ = (function (){var statearr_11613 = f__7651__auto__.call(null);
(statearr_11613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7650__auto___11740);

return statearr_11613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7652__auto__);
});})(__11728,c__7650__auto___11740,G__11559_11729,n__5470__auto___11727,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__11749 = (__11728 + (1));
__11728 = G__11749;
continue;
} else {
}
break;
}

var c__7650__auto___11750 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7650__auto___11750,jobs,results,process,async){
return (function (){
var f__7651__auto__ = (function (){var switch__7585__auto__ = ((function (c__7650__auto___11750,jobs,results,process,async){
return (function (state_11635){
var state_val_11636 = (state_11635[(1)]);
if((state_val_11636 === (1))){
var state_11635__$1 = state_11635;
var statearr_11637_11751 = state_11635__$1;
(statearr_11637_11751[(2)] = null);

(statearr_11637_11751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11636 === (2))){
var state_11635__$1 = state_11635;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11635__$1,(4),from);
} else {
if((state_val_11636 === (3))){
var inst_11633 = (state_11635[(2)]);
var state_11635__$1 = state_11635;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11635__$1,inst_11633);
} else {
if((state_val_11636 === (4))){
var inst_11616 = (state_11635[(7)]);
var inst_11616__$1 = (state_11635[(2)]);
var inst_11617 = (inst_11616__$1 == null);
var state_11635__$1 = (function (){var statearr_11638 = state_11635;
(statearr_11638[(7)] = inst_11616__$1);

return statearr_11638;
})();
if(cljs.core.truth_(inst_11617)){
var statearr_11639_11752 = state_11635__$1;
(statearr_11639_11752[(1)] = (5));

} else {
var statearr_11640_11753 = state_11635__$1;
(statearr_11640_11753[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11636 === (5))){
var inst_11619 = cljs.core.async.close_BANG_.call(null,jobs);
var state_11635__$1 = state_11635;
var statearr_11641_11754 = state_11635__$1;
(statearr_11641_11754[(2)] = inst_11619);

(statearr_11641_11754[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11636 === (6))){
var inst_11616 = (state_11635[(7)]);
var inst_11621 = (state_11635[(8)]);
var inst_11621__$1 = cljs.core.async.chan.call(null,(1));
var inst_11622 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11623 = [inst_11616,inst_11621__$1];
var inst_11624 = (new cljs.core.PersistentVector(null,2,(5),inst_11622,inst_11623,null));
var state_11635__$1 = (function (){var statearr_11642 = state_11635;
(statearr_11642[(8)] = inst_11621__$1);

return statearr_11642;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11635__$1,(8),jobs,inst_11624);
} else {
if((state_val_11636 === (7))){
var inst_11631 = (state_11635[(2)]);
var state_11635__$1 = state_11635;
var statearr_11643_11755 = state_11635__$1;
(statearr_11643_11755[(2)] = inst_11631);

(statearr_11643_11755[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11636 === (8))){
var inst_11621 = (state_11635[(8)]);
var inst_11626 = (state_11635[(2)]);
var state_11635__$1 = (function (){var statearr_11644 = state_11635;
(statearr_11644[(9)] = inst_11626);

return statearr_11644;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11635__$1,(9),results,inst_11621);
} else {
if((state_val_11636 === (9))){
var inst_11628 = (state_11635[(2)]);
var state_11635__$1 = (function (){var statearr_11645 = state_11635;
(statearr_11645[(10)] = inst_11628);

return statearr_11645;
})();
var statearr_11646_11756 = state_11635__$1;
(statearr_11646_11756[(2)] = null);

(statearr_11646_11756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__7650__auto___11750,jobs,results,process,async))
;
return ((function (switch__7585__auto__,c__7650__auto___11750,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7586__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7586__auto____0 = (function (){
var statearr_11650 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11650[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7586__auto__);

(statearr_11650[(1)] = (1));

return statearr_11650;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7586__auto____1 = (function (state_11635){
while(true){
var ret_value__7587__auto__ = (function (){try{while(true){
var result__7588__auto__ = switch__7585__auto__.call(null,state_11635);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7588__auto__;
}
break;
}
}catch (e11651){if((e11651 instanceof Object)){
var ex__7589__auto__ = e11651;
var statearr_11652_11757 = state_11635;
(statearr_11652_11757[(5)] = ex__7589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11635);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11651;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11758 = state_11635;
state_11635 = G__11758;
continue;
} else {
return ret_value__7587__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7586__auto__ = function(state_11635){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7586__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7586__auto____1.call(this,state_11635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7586__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7586__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7586__auto__;
})()
;})(switch__7585__auto__,c__7650__auto___11750,jobs,results,process,async))
})();
var state__7652__auto__ = (function (){var statearr_11653 = f__7651__auto__.call(null);
(statearr_11653[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7650__auto___11750);

return statearr_11653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7652__auto__);
});})(c__7650__auto___11750,jobs,results,process,async))
);


var c__7650__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7650__auto__,jobs,results,process,async){
return (function (){
var f__7651__auto__ = (function (){var switch__7585__auto__ = ((function (c__7650__auto__,jobs,results,process,async){
return (function (state_11691){
var state_val_11692 = (state_11691[(1)]);
if((state_val_11692 === (7))){
var inst_11687 = (state_11691[(2)]);
var state_11691__$1 = state_11691;
var statearr_11693_11759 = state_11691__$1;
(statearr_11693_11759[(2)] = inst_11687);

(statearr_11693_11759[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11692 === (20))){
var state_11691__$1 = state_11691;
var statearr_11694_11760 = state_11691__$1;
(statearr_11694_11760[(2)] = null);

(statearr_11694_11760[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11692 === (1))){
var state_11691__$1 = state_11691;
var statearr_11695_11761 = state_11691__$1;
(statearr_11695_11761[(2)] = null);

(statearr_11695_11761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11692 === (4))){
var inst_11656 = (state_11691[(7)]);
var inst_11656__$1 = (state_11691[(2)]);
var inst_11657 = (inst_11656__$1 == null);
var state_11691__$1 = (function (){var statearr_11696 = state_11691;
(statearr_11696[(7)] = inst_11656__$1);

return statearr_11696;
})();
if(cljs.core.truth_(inst_11657)){
var statearr_11697_11762 = state_11691__$1;
(statearr_11697_11762[(1)] = (5));

} else {
var statearr_11698_11763 = state_11691__$1;
(statearr_11698_11763[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11692 === (15))){
var inst_11669 = (state_11691[(8)]);
var state_11691__$1 = state_11691;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11691__$1,(18),to,inst_11669);
} else {
if((state_val_11692 === (21))){
var inst_11682 = (state_11691[(2)]);
var state_11691__$1 = state_11691;
var statearr_11699_11764 = state_11691__$1;
(statearr_11699_11764[(2)] = inst_11682);

(statearr_11699_11764[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11692 === (13))){
var inst_11684 = (state_11691[(2)]);
var state_11691__$1 = (function (){var statearr_11700 = state_11691;
(statearr_11700[(9)] = inst_11684);

return statearr_11700;
})();
var statearr_11701_11765 = state_11691__$1;
(statearr_11701_11765[(2)] = null);

(statearr_11701_11765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11692 === (6))){
var inst_11656 = (state_11691[(7)]);
var state_11691__$1 = state_11691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11691__$1,(11),inst_11656);
} else {
if((state_val_11692 === (17))){
var inst_11677 = (state_11691[(2)]);
var state_11691__$1 = state_11691;
if(cljs.core.truth_(inst_11677)){
var statearr_11702_11766 = state_11691__$1;
(statearr_11702_11766[(1)] = (19));

} else {
var statearr_11703_11767 = state_11691__$1;
(statearr_11703_11767[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11692 === (3))){
var inst_11689 = (state_11691[(2)]);
var state_11691__$1 = state_11691;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11691__$1,inst_11689);
} else {
if((state_val_11692 === (12))){
var inst_11666 = (state_11691[(10)]);
var state_11691__$1 = state_11691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11691__$1,(14),inst_11666);
} else {
if((state_val_11692 === (2))){
var state_11691__$1 = state_11691;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11691__$1,(4),results);
} else {
if((state_val_11692 === (19))){
var state_11691__$1 = state_11691;
var statearr_11704_11768 = state_11691__$1;
(statearr_11704_11768[(2)] = null);

(statearr_11704_11768[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11692 === (11))){
var inst_11666 = (state_11691[(2)]);
var state_11691__$1 = (function (){var statearr_11705 = state_11691;
(statearr_11705[(10)] = inst_11666);

return statearr_11705;
})();
var statearr_11706_11769 = state_11691__$1;
(statearr_11706_11769[(2)] = null);

(statearr_11706_11769[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11692 === (9))){
var state_11691__$1 = state_11691;
var statearr_11707_11770 = state_11691__$1;
(statearr_11707_11770[(2)] = null);

(statearr_11707_11770[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11692 === (5))){
var state_11691__$1 = state_11691;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11708_11771 = state_11691__$1;
(statearr_11708_11771[(1)] = (8));

} else {
var statearr_11709_11772 = state_11691__$1;
(statearr_11709_11772[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11692 === (14))){
var inst_11671 = (state_11691[(11)]);
var inst_11669 = (state_11691[(8)]);
var inst_11669__$1 = (state_11691[(2)]);
var inst_11670 = (inst_11669__$1 == null);
var inst_11671__$1 = cljs.core.not.call(null,inst_11670);
var state_11691__$1 = (function (){var statearr_11710 = state_11691;
(statearr_11710[(11)] = inst_11671__$1);

(statearr_11710[(8)] = inst_11669__$1);

return statearr_11710;
})();
if(inst_11671__$1){
var statearr_11711_11773 = state_11691__$1;
(statearr_11711_11773[(1)] = (15));

} else {
var statearr_11712_11774 = state_11691__$1;
(statearr_11712_11774[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11692 === (16))){
var inst_11671 = (state_11691[(11)]);
var state_11691__$1 = state_11691;
var statearr_11713_11775 = state_11691__$1;
(statearr_11713_11775[(2)] = inst_11671);

(statearr_11713_11775[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11692 === (10))){
var inst_11663 = (state_11691[(2)]);
var state_11691__$1 = state_11691;
var statearr_11714_11776 = state_11691__$1;
(statearr_11714_11776[(2)] = inst_11663);

(statearr_11714_11776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11692 === (18))){
var inst_11674 = (state_11691[(2)]);
var state_11691__$1 = state_11691;
var statearr_11715_11777 = state_11691__$1;
(statearr_11715_11777[(2)] = inst_11674);

(statearr_11715_11777[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11692 === (8))){
var inst_11660 = cljs.core.async.close_BANG_.call(null,to);
var state_11691__$1 = state_11691;
var statearr_11716_11778 = state_11691__$1;
(statearr_11716_11778[(2)] = inst_11660);

(statearr_11716_11778[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7650__auto__,jobs,results,process,async))
;
return ((function (switch__7585__auto__,c__7650__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7586__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7586__auto____0 = (function (){
var statearr_11720 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11720[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7586__auto__);

(statearr_11720[(1)] = (1));

return statearr_11720;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7586__auto____1 = (function (state_11691){
while(true){
var ret_value__7587__auto__ = (function (){try{while(true){
var result__7588__auto__ = switch__7585__auto__.call(null,state_11691);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7588__auto__;
}
break;
}
}catch (e11721){if((e11721 instanceof Object)){
var ex__7589__auto__ = e11721;
var statearr_11722_11779 = state_11691;
(statearr_11722_11779[(5)] = ex__7589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11721;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11780 = state_11691;
state_11691 = G__11780;
continue;
} else {
return ret_value__7587__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7586__auto__ = function(state_11691){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7586__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7586__auto____1.call(this,state_11691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7586__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7586__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7586__auto__;
})()
;})(switch__7585__auto__,c__7650__auto__,jobs,results,process,async))
})();
var state__7652__auto__ = (function (){var statearr_11723 = f__7651__auto__.call(null);
(statearr_11723[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7650__auto__);

return statearr_11723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7652__auto__);
});})(c__7650__auto__,jobs,results,process,async))
);

return c__7650__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args11781 = [];
var len__5625__auto___11784 = arguments.length;
var i__5626__auto___11785 = (0);
while(true){
if((i__5626__auto___11785 < len__5625__auto___11784)){
args11781.push((arguments[i__5626__auto___11785]));

var G__11786 = (i__5626__auto___11785 + (1));
i__5626__auto___11785 = G__11786;
continue;
} else {
}
break;
}

var G__11783 = args11781.length;
switch (G__11783) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11781.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args11788 = [];
var len__5625__auto___11791 = arguments.length;
var i__5626__auto___11792 = (0);
while(true){
if((i__5626__auto___11792 < len__5625__auto___11791)){
args11788.push((arguments[i__5626__auto___11792]));

var G__11793 = (i__5626__auto___11792 + (1));
i__5626__auto___11792 = G__11793;
continue;
} else {
}
break;
}

var G__11790 = args11788.length;
switch (G__11790) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11788.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args11795 = [];
var len__5625__auto___11848 = arguments.length;
var i__5626__auto___11849 = (0);
while(true){
if((i__5626__auto___11849 < len__5625__auto___11848)){
args11795.push((arguments[i__5626__auto___11849]));

var G__11850 = (i__5626__auto___11849 + (1));
i__5626__auto___11849 = G__11850;
continue;
} else {
}
break;
}

var G__11797 = args11795.length;
switch (G__11797) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11795.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__7650__auto___11852 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7650__auto___11852,tc,fc){
return (function (){
var f__7651__auto__ = (function (){var switch__7585__auto__ = ((function (c__7650__auto___11852,tc,fc){
return (function (state_11823){
var state_val_11824 = (state_11823[(1)]);
if((state_val_11824 === (7))){
var inst_11819 = (state_11823[(2)]);
var state_11823__$1 = state_11823;
var statearr_11825_11853 = state_11823__$1;
(statearr_11825_11853[(2)] = inst_11819);

(statearr_11825_11853[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11824 === (1))){
var state_11823__$1 = state_11823;
var statearr_11826_11854 = state_11823__$1;
(statearr_11826_11854[(2)] = null);

(statearr_11826_11854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11824 === (4))){
var inst_11800 = (state_11823[(7)]);
var inst_11800__$1 = (state_11823[(2)]);
var inst_11801 = (inst_11800__$1 == null);
var state_11823__$1 = (function (){var statearr_11827 = state_11823;
(statearr_11827[(7)] = inst_11800__$1);

return statearr_11827;
})();
if(cljs.core.truth_(inst_11801)){
var statearr_11828_11855 = state_11823__$1;
(statearr_11828_11855[(1)] = (5));

} else {
var statearr_11829_11856 = state_11823__$1;
(statearr_11829_11856[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11824 === (13))){
var state_11823__$1 = state_11823;
var statearr_11830_11857 = state_11823__$1;
(statearr_11830_11857[(2)] = null);

(statearr_11830_11857[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11824 === (6))){
var inst_11800 = (state_11823[(7)]);
var inst_11806 = p.call(null,inst_11800);
var state_11823__$1 = state_11823;
if(cljs.core.truth_(inst_11806)){
var statearr_11831_11858 = state_11823__$1;
(statearr_11831_11858[(1)] = (9));

} else {
var statearr_11832_11859 = state_11823__$1;
(statearr_11832_11859[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11824 === (3))){
var inst_11821 = (state_11823[(2)]);
var state_11823__$1 = state_11823;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11823__$1,inst_11821);
} else {
if((state_val_11824 === (12))){
var state_11823__$1 = state_11823;
var statearr_11833_11860 = state_11823__$1;
(statearr_11833_11860[(2)] = null);

(statearr_11833_11860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11824 === (2))){
var state_11823__$1 = state_11823;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11823__$1,(4),ch);
} else {
if((state_val_11824 === (11))){
var inst_11800 = (state_11823[(7)]);
var inst_11810 = (state_11823[(2)]);
var state_11823__$1 = state_11823;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11823__$1,(8),inst_11810,inst_11800);
} else {
if((state_val_11824 === (9))){
var state_11823__$1 = state_11823;
var statearr_11834_11861 = state_11823__$1;
(statearr_11834_11861[(2)] = tc);

(statearr_11834_11861[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11824 === (5))){
var inst_11803 = cljs.core.async.close_BANG_.call(null,tc);
var inst_11804 = cljs.core.async.close_BANG_.call(null,fc);
var state_11823__$1 = (function (){var statearr_11835 = state_11823;
(statearr_11835[(8)] = inst_11803);

return statearr_11835;
})();
var statearr_11836_11862 = state_11823__$1;
(statearr_11836_11862[(2)] = inst_11804);

(statearr_11836_11862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11824 === (14))){
var inst_11817 = (state_11823[(2)]);
var state_11823__$1 = state_11823;
var statearr_11837_11863 = state_11823__$1;
(statearr_11837_11863[(2)] = inst_11817);

(statearr_11837_11863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11824 === (10))){
var state_11823__$1 = state_11823;
var statearr_11838_11864 = state_11823__$1;
(statearr_11838_11864[(2)] = fc);

(statearr_11838_11864[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11824 === (8))){
var inst_11812 = (state_11823[(2)]);
var state_11823__$1 = state_11823;
if(cljs.core.truth_(inst_11812)){
var statearr_11839_11865 = state_11823__$1;
(statearr_11839_11865[(1)] = (12));

} else {
var statearr_11840_11866 = state_11823__$1;
(statearr_11840_11866[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7650__auto___11852,tc,fc))
;
return ((function (switch__7585__auto__,c__7650__auto___11852,tc,fc){
return (function() {
var cljs$core$async$state_machine__7586__auto__ = null;
var cljs$core$async$state_machine__7586__auto____0 = (function (){
var statearr_11844 = [null,null,null,null,null,null,null,null,null];
(statearr_11844[(0)] = cljs$core$async$state_machine__7586__auto__);

(statearr_11844[(1)] = (1));

return statearr_11844;
});
var cljs$core$async$state_machine__7586__auto____1 = (function (state_11823){
while(true){
var ret_value__7587__auto__ = (function (){try{while(true){
var result__7588__auto__ = switch__7585__auto__.call(null,state_11823);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7588__auto__;
}
break;
}
}catch (e11845){if((e11845 instanceof Object)){
var ex__7589__auto__ = e11845;
var statearr_11846_11867 = state_11823;
(statearr_11846_11867[(5)] = ex__7589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11823);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11845;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11868 = state_11823;
state_11823 = G__11868;
continue;
} else {
return ret_value__7587__auto__;
}
break;
}
});
cljs$core$async$state_machine__7586__auto__ = function(state_11823){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7586__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7586__auto____1.call(this,state_11823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7586__auto____0;
cljs$core$async$state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7586__auto____1;
return cljs$core$async$state_machine__7586__auto__;
})()
;})(switch__7585__auto__,c__7650__auto___11852,tc,fc))
})();
var state__7652__auto__ = (function (){var statearr_11847 = f__7651__auto__.call(null);
(statearr_11847[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7650__auto___11852);

return statearr_11847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7652__auto__);
});})(c__7650__auto___11852,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__7650__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7650__auto__){
return (function (){
var f__7651__auto__ = (function (){var switch__7585__auto__ = ((function (c__7650__auto__){
return (function (state_11915){
var state_val_11916 = (state_11915[(1)]);
if((state_val_11916 === (1))){
var inst_11901 = init;
var state_11915__$1 = (function (){var statearr_11917 = state_11915;
(statearr_11917[(7)] = inst_11901);

return statearr_11917;
})();
var statearr_11918_11933 = state_11915__$1;
(statearr_11918_11933[(2)] = null);

(statearr_11918_11933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11916 === (2))){
var state_11915__$1 = state_11915;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11915__$1,(4),ch);
} else {
if((state_val_11916 === (3))){
var inst_11913 = (state_11915[(2)]);
var state_11915__$1 = state_11915;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11915__$1,inst_11913);
} else {
if((state_val_11916 === (4))){
var inst_11904 = (state_11915[(8)]);
var inst_11904__$1 = (state_11915[(2)]);
var inst_11905 = (inst_11904__$1 == null);
var state_11915__$1 = (function (){var statearr_11919 = state_11915;
(statearr_11919[(8)] = inst_11904__$1);

return statearr_11919;
})();
if(cljs.core.truth_(inst_11905)){
var statearr_11920_11934 = state_11915__$1;
(statearr_11920_11934[(1)] = (5));

} else {
var statearr_11921_11935 = state_11915__$1;
(statearr_11921_11935[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11916 === (5))){
var inst_11901 = (state_11915[(7)]);
var state_11915__$1 = state_11915;
var statearr_11922_11936 = state_11915__$1;
(statearr_11922_11936[(2)] = inst_11901);

(statearr_11922_11936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11916 === (6))){
var inst_11901 = (state_11915[(7)]);
var inst_11904 = (state_11915[(8)]);
var inst_11908 = f.call(null,inst_11901,inst_11904);
var inst_11901__$1 = inst_11908;
var state_11915__$1 = (function (){var statearr_11923 = state_11915;
(statearr_11923[(7)] = inst_11901__$1);

return statearr_11923;
})();
var statearr_11924_11937 = state_11915__$1;
(statearr_11924_11937[(2)] = null);

(statearr_11924_11937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11916 === (7))){
var inst_11911 = (state_11915[(2)]);
var state_11915__$1 = state_11915;
var statearr_11925_11938 = state_11915__$1;
(statearr_11925_11938[(2)] = inst_11911);

(statearr_11925_11938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__7650__auto__))
;
return ((function (switch__7585__auto__,c__7650__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__7586__auto__ = null;
var cljs$core$async$reduce_$_state_machine__7586__auto____0 = (function (){
var statearr_11929 = [null,null,null,null,null,null,null,null,null];
(statearr_11929[(0)] = cljs$core$async$reduce_$_state_machine__7586__auto__);

(statearr_11929[(1)] = (1));

return statearr_11929;
});
var cljs$core$async$reduce_$_state_machine__7586__auto____1 = (function (state_11915){
while(true){
var ret_value__7587__auto__ = (function (){try{while(true){
var result__7588__auto__ = switch__7585__auto__.call(null,state_11915);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7588__auto__;
}
break;
}
}catch (e11930){if((e11930 instanceof Object)){
var ex__7589__auto__ = e11930;
var statearr_11931_11939 = state_11915;
(statearr_11931_11939[(5)] = ex__7589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11915);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11930;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11940 = state_11915;
state_11915 = G__11940;
continue;
} else {
return ret_value__7587__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__7586__auto__ = function(state_11915){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__7586__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__7586__auto____1.call(this,state_11915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__7586__auto____0;
cljs$core$async$reduce_$_state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__7586__auto____1;
return cljs$core$async$reduce_$_state_machine__7586__auto__;
})()
;})(switch__7585__auto__,c__7650__auto__))
})();
var state__7652__auto__ = (function (){var statearr_11932 = f__7651__auto__.call(null);
(statearr_11932[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7650__auto__);

return statearr_11932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7652__auto__);
});})(c__7650__auto__))
);

return c__7650__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args11941 = [];
var len__5625__auto___11993 = arguments.length;
var i__5626__auto___11994 = (0);
while(true){
if((i__5626__auto___11994 < len__5625__auto___11993)){
args11941.push((arguments[i__5626__auto___11994]));

var G__11995 = (i__5626__auto___11994 + (1));
i__5626__auto___11994 = G__11995;
continue;
} else {
}
break;
}

var G__11943 = args11941.length;
switch (G__11943) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11941.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__7650__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7650__auto__){
return (function (){
var f__7651__auto__ = (function (){var switch__7585__auto__ = ((function (c__7650__auto__){
return (function (state_11968){
var state_val_11969 = (state_11968[(1)]);
if((state_val_11969 === (7))){
var inst_11950 = (state_11968[(2)]);
var state_11968__$1 = state_11968;
var statearr_11970_11997 = state_11968__$1;
(statearr_11970_11997[(2)] = inst_11950);

(statearr_11970_11997[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11969 === (1))){
var inst_11944 = cljs.core.seq.call(null,coll);
var inst_11945 = inst_11944;
var state_11968__$1 = (function (){var statearr_11971 = state_11968;
(statearr_11971[(7)] = inst_11945);

return statearr_11971;
})();
var statearr_11972_11998 = state_11968__$1;
(statearr_11972_11998[(2)] = null);

(statearr_11972_11998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11969 === (4))){
var inst_11945 = (state_11968[(7)]);
var inst_11948 = cljs.core.first.call(null,inst_11945);
var state_11968__$1 = state_11968;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11968__$1,(7),ch,inst_11948);
} else {
if((state_val_11969 === (13))){
var inst_11962 = (state_11968[(2)]);
var state_11968__$1 = state_11968;
var statearr_11973_11999 = state_11968__$1;
(statearr_11973_11999[(2)] = inst_11962);

(statearr_11973_11999[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11969 === (6))){
var inst_11953 = (state_11968[(2)]);
var state_11968__$1 = state_11968;
if(cljs.core.truth_(inst_11953)){
var statearr_11974_12000 = state_11968__$1;
(statearr_11974_12000[(1)] = (8));

} else {
var statearr_11975_12001 = state_11968__$1;
(statearr_11975_12001[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11969 === (3))){
var inst_11966 = (state_11968[(2)]);
var state_11968__$1 = state_11968;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11968__$1,inst_11966);
} else {
if((state_val_11969 === (12))){
var state_11968__$1 = state_11968;
var statearr_11976_12002 = state_11968__$1;
(statearr_11976_12002[(2)] = null);

(statearr_11976_12002[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11969 === (2))){
var inst_11945 = (state_11968[(7)]);
var state_11968__$1 = state_11968;
if(cljs.core.truth_(inst_11945)){
var statearr_11977_12003 = state_11968__$1;
(statearr_11977_12003[(1)] = (4));

} else {
var statearr_11978_12004 = state_11968__$1;
(statearr_11978_12004[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11969 === (11))){
var inst_11959 = cljs.core.async.close_BANG_.call(null,ch);
var state_11968__$1 = state_11968;
var statearr_11979_12005 = state_11968__$1;
(statearr_11979_12005[(2)] = inst_11959);

(statearr_11979_12005[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11969 === (9))){
var state_11968__$1 = state_11968;
if(cljs.core.truth_(close_QMARK_)){
var statearr_11980_12006 = state_11968__$1;
(statearr_11980_12006[(1)] = (11));

} else {
var statearr_11981_12007 = state_11968__$1;
(statearr_11981_12007[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11969 === (5))){
var inst_11945 = (state_11968[(7)]);
var state_11968__$1 = state_11968;
var statearr_11982_12008 = state_11968__$1;
(statearr_11982_12008[(2)] = inst_11945);

(statearr_11982_12008[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11969 === (10))){
var inst_11964 = (state_11968[(2)]);
var state_11968__$1 = state_11968;
var statearr_11983_12009 = state_11968__$1;
(statearr_11983_12009[(2)] = inst_11964);

(statearr_11983_12009[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11969 === (8))){
var inst_11945 = (state_11968[(7)]);
var inst_11955 = cljs.core.next.call(null,inst_11945);
var inst_11945__$1 = inst_11955;
var state_11968__$1 = (function (){var statearr_11984 = state_11968;
(statearr_11984[(7)] = inst_11945__$1);

return statearr_11984;
})();
var statearr_11985_12010 = state_11968__$1;
(statearr_11985_12010[(2)] = null);

(statearr_11985_12010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7650__auto__))
;
return ((function (switch__7585__auto__,c__7650__auto__){
return (function() {
var cljs$core$async$state_machine__7586__auto__ = null;
var cljs$core$async$state_machine__7586__auto____0 = (function (){
var statearr_11989 = [null,null,null,null,null,null,null,null];
(statearr_11989[(0)] = cljs$core$async$state_machine__7586__auto__);

(statearr_11989[(1)] = (1));

return statearr_11989;
});
var cljs$core$async$state_machine__7586__auto____1 = (function (state_11968){
while(true){
var ret_value__7587__auto__ = (function (){try{while(true){
var result__7588__auto__ = switch__7585__auto__.call(null,state_11968);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7588__auto__;
}
break;
}
}catch (e11990){if((e11990 instanceof Object)){
var ex__7589__auto__ = e11990;
var statearr_11991_12011 = state_11968;
(statearr_11991_12011[(5)] = ex__7589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11968);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11990;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12012 = state_11968;
state_11968 = G__12012;
continue;
} else {
return ret_value__7587__auto__;
}
break;
}
});
cljs$core$async$state_machine__7586__auto__ = function(state_11968){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7586__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7586__auto____1.call(this,state_11968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7586__auto____0;
cljs$core$async$state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7586__auto____1;
return cljs$core$async$state_machine__7586__auto__;
})()
;})(switch__7585__auto__,c__7650__auto__))
})();
var state__7652__auto__ = (function (){var statearr_11992 = f__7651__auto__.call(null);
(statearr_11992[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7650__auto__);

return statearr_11992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7652__auto__);
});})(c__7650__auto__))
);

return c__7650__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__5222__auto__ = (((_ == null))?null:_);
var m__5223__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5222__auto__)]);
if(!((m__5223__auto__ == null))){
return m__5223__auto__.call(null,_);
} else {
var m__5223__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__5223__auto____$1 == null))){
return m__5223__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__5222__auto__ = (((m == null))?null:m);
var m__5223__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5222__auto__)]);
if(!((m__5223__auto__ == null))){
return m__5223__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__5223__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__5223__auto____$1 == null))){
return m__5223__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__5222__auto__ = (((m == null))?null:m);
var m__5223__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5222__auto__)]);
if(!((m__5223__auto__ == null))){
return m__5223__auto__.call(null,m,ch);
} else {
var m__5223__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__5223__auto____$1 == null))){
return m__5223__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__5222__auto__ = (((m == null))?null:m);
var m__5223__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5222__auto__)]);
if(!((m__5223__auto__ == null))){
return m__5223__auto__.call(null,m);
} else {
var m__5223__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__5223__auto____$1 == null))){
return m__5223__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async12234 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12234 = (function (mult,ch,cs,meta12235){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta12235 = meta12235;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12234.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12236,meta12235__$1){
var self__ = this;
var _12236__$1 = this;
return (new cljs.core.async.t_cljs$core$async12234(self__.mult,self__.ch,self__.cs,meta12235__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async12234.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12236){
var self__ = this;
var _12236__$1 = this;
return self__.meta12235;
});})(cs))
;

cljs.core.async.t_cljs$core$async12234.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async12234.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async12234.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async12234.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async12234.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async12234.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async12234.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta12235","meta12235",1153414085,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async12234.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12234.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12234";

cljs.core.async.t_cljs$core$async12234.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5165__auto__,writer__5166__auto__,opt__5167__auto__){
return cljs.core._write.call(null,writer__5166__auto__,"cljs.core.async/t_cljs$core$async12234");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async12234 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async12234(mult__$1,ch__$1,cs__$1,meta12235){
return (new cljs.core.async.t_cljs$core$async12234(mult__$1,ch__$1,cs__$1,meta12235));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async12234(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__7650__auto___12455 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7650__auto___12455,cs,m,dchan,dctr,done){
return (function (){
var f__7651__auto__ = (function (){var switch__7585__auto__ = ((function (c__7650__auto___12455,cs,m,dchan,dctr,done){
return (function (state_12367){
var state_val_12368 = (state_12367[(1)]);
if((state_val_12368 === (7))){
var inst_12363 = (state_12367[(2)]);
var state_12367__$1 = state_12367;
var statearr_12369_12456 = state_12367__$1;
(statearr_12369_12456[(2)] = inst_12363);

(statearr_12369_12456[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12368 === (20))){
var inst_12268 = (state_12367[(7)]);
var inst_12278 = cljs.core.first.call(null,inst_12268);
var inst_12279 = cljs.core.nth.call(null,inst_12278,(0),null);
var inst_12280 = cljs.core.nth.call(null,inst_12278,(1),null);
var state_12367__$1 = (function (){var statearr_12370 = state_12367;
(statearr_12370[(8)] = inst_12279);

return statearr_12370;
})();
if(cljs.core.truth_(inst_12280)){
var statearr_12371_12457 = state_12367__$1;
(statearr_12371_12457[(1)] = (22));

} else {
var statearr_12372_12458 = state_12367__$1;
(statearr_12372_12458[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12368 === (27))){
var inst_12239 = (state_12367[(9)]);
var inst_12310 = (state_12367[(10)]);
var inst_12308 = (state_12367[(11)]);
var inst_12315 = (state_12367[(12)]);
var inst_12315__$1 = cljs.core._nth.call(null,inst_12308,inst_12310);
var inst_12316 = cljs.core.async.put_BANG_.call(null,inst_12315__$1,inst_12239,done);
var state_12367__$1 = (function (){var statearr_12373 = state_12367;
(statearr_12373[(12)] = inst_12315__$1);

return statearr_12373;
})();
if(cljs.core.truth_(inst_12316)){
var statearr_12374_12459 = state_12367__$1;
(statearr_12374_12459[(1)] = (30));

} else {
var statearr_12375_12460 = state_12367__$1;
(statearr_12375_12460[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12368 === (1))){
var state_12367__$1 = state_12367;
var statearr_12376_12461 = state_12367__$1;
(statearr_12376_12461[(2)] = null);

(statearr_12376_12461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12368 === (24))){
var inst_12268 = (state_12367[(7)]);
var inst_12285 = (state_12367[(2)]);
var inst_12286 = cljs.core.next.call(null,inst_12268);
var inst_12248 = inst_12286;
var inst_12249 = null;
var inst_12250 = (0);
var inst_12251 = (0);
var state_12367__$1 = (function (){var statearr_12377 = state_12367;
(statearr_12377[(13)] = inst_12251);

(statearr_12377[(14)] = inst_12248);

(statearr_12377[(15)] = inst_12285);

(statearr_12377[(16)] = inst_12249);

(statearr_12377[(17)] = inst_12250);

return statearr_12377;
})();
var statearr_12378_12462 = state_12367__$1;
(statearr_12378_12462[(2)] = null);

(statearr_12378_12462[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12368 === (39))){
var state_12367__$1 = state_12367;
var statearr_12382_12463 = state_12367__$1;
(statearr_12382_12463[(2)] = null);

(statearr_12382_12463[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12368 === (4))){
var inst_12239 = (state_12367[(9)]);
var inst_12239__$1 = (state_12367[(2)]);
var inst_12240 = (inst_12239__$1 == null);
var state_12367__$1 = (function (){var statearr_12383 = state_12367;
(statearr_12383[(9)] = inst_12239__$1);

return statearr_12383;
})();
if(cljs.core.truth_(inst_12240)){
var statearr_12384_12464 = state_12367__$1;
(statearr_12384_12464[(1)] = (5));

} else {
var statearr_12385_12465 = state_12367__$1;
(statearr_12385_12465[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12368 === (15))){
var inst_12251 = (state_12367[(13)]);
var inst_12248 = (state_12367[(14)]);
var inst_12249 = (state_12367[(16)]);
var inst_12250 = (state_12367[(17)]);
var inst_12264 = (state_12367[(2)]);
var inst_12265 = (inst_12251 + (1));
var tmp12379 = inst_12248;
var tmp12380 = inst_12249;
var tmp12381 = inst_12250;
var inst_12248__$1 = tmp12379;
var inst_12249__$1 = tmp12380;
var inst_12250__$1 = tmp12381;
var inst_12251__$1 = inst_12265;
var state_12367__$1 = (function (){var statearr_12386 = state_12367;
(statearr_12386[(13)] = inst_12251__$1);

(statearr_12386[(18)] = inst_12264);

(statearr_12386[(14)] = inst_12248__$1);

(statearr_12386[(16)] = inst_12249__$1);

(statearr_12386[(17)] = inst_12250__$1);

return statearr_12386;
})();
var statearr_12387_12466 = state_12367__$1;
(statearr_12387_12466[(2)] = null);

(statearr_12387_12466[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12368 === (21))){
var inst_12289 = (state_12367[(2)]);
var state_12367__$1 = state_12367;
var statearr_12391_12467 = state_12367__$1;
(statearr_12391_12467[(2)] = inst_12289);

(statearr_12391_12467[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12368 === (31))){
var inst_12315 = (state_12367[(12)]);
var inst_12319 = done.call(null,null);
var inst_12320 = cljs.core.async.untap_STAR_.call(null,m,inst_12315);
var state_12367__$1 = (function (){var statearr_12392 = state_12367;
(statearr_12392[(19)] = inst_12319);

return statearr_12392;
})();
var statearr_12393_12468 = state_12367__$1;
(statearr_12393_12468[(2)] = inst_12320);

(statearr_12393_12468[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12368 === (32))){
var inst_12307 = (state_12367[(20)]);
var inst_12310 = (state_12367[(10)]);
var inst_12308 = (state_12367[(11)]);
var inst_12309 = (state_12367[(21)]);
var inst_12322 = (state_12367[(2)]);
var inst_12323 = (inst_12310 + (1));
var tmp12388 = inst_12307;
var tmp12389 = inst_12308;
var tmp12390 = inst_12309;
var inst_12307__$1 = tmp12388;
var inst_12308__$1 = tmp12389;
var inst_12309__$1 = tmp12390;
var inst_12310__$1 = inst_12323;
var state_12367__$1 = (function (){var statearr_12394 = state_12367;
(statearr_12394[(20)] = inst_12307__$1);

(statearr_12394[(10)] = inst_12310__$1);

(statearr_12394[(11)] = inst_12308__$1);

(statearr_12394[(21)] = inst_12309__$1);

(statearr_12394[(22)] = inst_12322);

return statearr_12394;
})();
var statearr_12395_12469 = state_12367__$1;
(statearr_12395_12469[(2)] = null);

(statearr_12395_12469[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12368 === (40))){
var inst_12335 = (state_12367[(23)]);
var inst_12339 = done.call(null,null);
var inst_12340 = cljs.core.async.untap_STAR_.call(null,m,inst_12335);
var state_12367__$1 = (function (){var statearr_12396 = state_12367;
(statearr_12396[(24)] = inst_12339);

return statearr_12396;
})();
var statearr_12397_12470 = state_12367__$1;
(statearr_12397_12470[(2)] = inst_12340);

(statearr_12397_12470[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12368 === (33))){
var inst_12326 = (state_12367[(25)]);
var inst_12328 = cljs.core.chunked_seq_QMARK_.call(null,inst_12326);
var state_12367__$1 = state_12367;
if(inst_12328){
var statearr_12398_12471 = state_12367__$1;
(statearr_12398_12471[(1)] = (36));

} else {
var statearr_12399_12472 = state_12367__$1;
(statearr_12399_12472[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12368 === (13))){
var inst_12258 = (state_12367[(26)]);
var inst_12261 = cljs.core.async.close_BANG_.call(null,inst_12258);
var state_12367__$1 = state_12367;
var statearr_12400_12473 = state_12367__$1;
(statearr_12400_12473[(2)] = inst_12261);

(statearr_12400_12473[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12368 === (22))){
var inst_12279 = (state_12367[(8)]);
var inst_12282 = cljs.core.async.close_BANG_.call(null,inst_12279);
var state_12367__$1 = state_12367;
var statearr_12401_12474 = state_12367__$1;
(statearr_12401_12474[(2)] = inst_12282);

(statearr_12401_12474[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12368 === (36))){
var inst_12326 = (state_12367[(25)]);
var inst_12330 = cljs.core.chunk_first.call(null,inst_12326);
var inst_12331 = cljs.core.chunk_rest.call(null,inst_12326);
var inst_12332 = cljs.core.count.call(null,inst_12330);
var inst_12307 = inst_12331;
var inst_12308 = inst_12330;
var inst_12309 = inst_12332;
var inst_12310 = (0);
var state_12367__$1 = (function (){var statearr_12402 = state_12367;
(statearr_12402[(20)] = inst_12307);

(statearr_12402[(10)] = inst_12310);

(statearr_12402[(11)] = inst_12308);

(statearr_12402[(21)] = inst_12309);

return statearr_12402;
})();
var statearr_12403_12475 = state_12367__$1;
(statearr_12403_12475[(2)] = null);

(statearr_12403_12475[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12368 === (41))){
var inst_12326 = (state_12367[(25)]);
var inst_12342 = (state_12367[(2)]);
var inst_12343 = cljs.core.next.call(null,inst_12326);
var inst_12307 = inst_12343;
var inst_12308 = null;
var inst_12309 = (0);
var inst_12310 = (0);
var state_12367__$1 = (function (){var statearr_12404 = state_12367;
(statearr_12404[(20)] = inst_12307);

(statearr_12404[(27)] = inst_12342);

(statearr_12404[(10)] = inst_12310);

(statearr_12404[(11)] = inst_12308);

(statearr_12404[(21)] = inst_12309);

return statearr_12404;
})();
var statearr_12405_12476 = state_12367__$1;
(statearr_12405_12476[(2)] = null);

(statearr_12405_12476[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12368 === (43))){
var state_12367__$1 = state_12367;
var statearr_12406_12477 = state_12367__$1;
(statearr_12406_12477[(2)] = null);

(statearr_12406_12477[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12368 === (29))){
var inst_12351 = (state_12367[(2)]);
var state_12367__$1 = state_12367;
var statearr_12407_12478 = state_12367__$1;
(statearr_12407_12478[(2)] = inst_12351);

(statearr_12407_12478[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12368 === (44))){
var inst_12360 = (state_12367[(2)]);
var state_12367__$1 = (function (){var statearr_12408 = state_12367;
(statearr_12408[(28)] = inst_12360);

return statearr_12408;
})();
var statearr_12409_12479 = state_12367__$1;
(statearr_12409_12479[(2)] = null);

(statearr_12409_12479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12368 === (6))){
var inst_12299 = (state_12367[(29)]);
var inst_12298 = cljs.core.deref.call(null,cs);
var inst_12299__$1 = cljs.core.keys.call(null,inst_12298);
var inst_12300 = cljs.core.count.call(null,inst_12299__$1);
var inst_12301 = cljs.core.reset_BANG_.call(null,dctr,inst_12300);
var inst_12306 = cljs.core.seq.call(null,inst_12299__$1);
var inst_12307 = inst_12306;
var inst_12308 = null;
var inst_12309 = (0);
var inst_12310 = (0);
var state_12367__$1 = (function (){var statearr_12410 = state_12367;
(statearr_12410[(29)] = inst_12299__$1);

(statearr_12410[(20)] = inst_12307);

(statearr_12410[(10)] = inst_12310);

(statearr_12410[(11)] = inst_12308);

(statearr_12410[(30)] = inst_12301);

(statearr_12410[(21)] = inst_12309);

return statearr_12410;
})();
var statearr_12411_12480 = state_12367__$1;
(statearr_12411_12480[(2)] = null);

(statearr_12411_12480[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12368 === (28))){
var inst_12307 = (state_12367[(20)]);
var inst_12326 = (state_12367[(25)]);
var inst_12326__$1 = cljs.core.seq.call(null,inst_12307);
var state_12367__$1 = (function (){var statearr_12412 = state_12367;
(statearr_12412[(25)] = inst_12326__$1);

return statearr_12412;
})();
if(inst_12326__$1){
var statearr_12413_12481 = state_12367__$1;
(statearr_12413_12481[(1)] = (33));

} else {
var statearr_12414_12482 = state_12367__$1;
(statearr_12414_12482[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12368 === (25))){
var inst_12310 = (state_12367[(10)]);
var inst_12309 = (state_12367[(21)]);
var inst_12312 = (inst_12310 < inst_12309);
var inst_12313 = inst_12312;
var state_12367__$1 = state_12367;
if(cljs.core.truth_(inst_12313)){
var statearr_12415_12483 = state_12367__$1;
(statearr_12415_12483[(1)] = (27));

} else {
var statearr_12416_12484 = state_12367__$1;
(statearr_12416_12484[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12368 === (34))){
var state_12367__$1 = state_12367;
var statearr_12417_12485 = state_12367__$1;
(statearr_12417_12485[(2)] = null);

(statearr_12417_12485[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12368 === (17))){
var state_12367__$1 = state_12367;
var statearr_12418_12486 = state_12367__$1;
(statearr_12418_12486[(2)] = null);

(statearr_12418_12486[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12368 === (3))){
var inst_12365 = (state_12367[(2)]);
var state_12367__$1 = state_12367;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12367__$1,inst_12365);
} else {
if((state_val_12368 === (12))){
var inst_12294 = (state_12367[(2)]);
var state_12367__$1 = state_12367;
var statearr_12419_12487 = state_12367__$1;
(statearr_12419_12487[(2)] = inst_12294);

(statearr_12419_12487[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12368 === (2))){
var state_12367__$1 = state_12367;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12367__$1,(4),ch);
} else {
if((state_val_12368 === (23))){
var state_12367__$1 = state_12367;
var statearr_12420_12488 = state_12367__$1;
(statearr_12420_12488[(2)] = null);

(statearr_12420_12488[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12368 === (35))){
var inst_12349 = (state_12367[(2)]);
var state_12367__$1 = state_12367;
var statearr_12421_12489 = state_12367__$1;
(statearr_12421_12489[(2)] = inst_12349);

(statearr_12421_12489[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12368 === (19))){
var inst_12268 = (state_12367[(7)]);
var inst_12272 = cljs.core.chunk_first.call(null,inst_12268);
var inst_12273 = cljs.core.chunk_rest.call(null,inst_12268);
var inst_12274 = cljs.core.count.call(null,inst_12272);
var inst_12248 = inst_12273;
var inst_12249 = inst_12272;
var inst_12250 = inst_12274;
var inst_12251 = (0);
var state_12367__$1 = (function (){var statearr_12422 = state_12367;
(statearr_12422[(13)] = inst_12251);

(statearr_12422[(14)] = inst_12248);

(statearr_12422[(16)] = inst_12249);

(statearr_12422[(17)] = inst_12250);

return statearr_12422;
})();
var statearr_12423_12490 = state_12367__$1;
(statearr_12423_12490[(2)] = null);

(statearr_12423_12490[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12368 === (11))){
var inst_12268 = (state_12367[(7)]);
var inst_12248 = (state_12367[(14)]);
var inst_12268__$1 = cljs.core.seq.call(null,inst_12248);
var state_12367__$1 = (function (){var statearr_12424 = state_12367;
(statearr_12424[(7)] = inst_12268__$1);

return statearr_12424;
})();
if(inst_12268__$1){
var statearr_12425_12491 = state_12367__$1;
(statearr_12425_12491[(1)] = (16));

} else {
var statearr_12426_12492 = state_12367__$1;
(statearr_12426_12492[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12368 === (9))){
var inst_12296 = (state_12367[(2)]);
var state_12367__$1 = state_12367;
var statearr_12427_12493 = state_12367__$1;
(statearr_12427_12493[(2)] = inst_12296);

(statearr_12427_12493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12368 === (5))){
var inst_12246 = cljs.core.deref.call(null,cs);
var inst_12247 = cljs.core.seq.call(null,inst_12246);
var inst_12248 = inst_12247;
var inst_12249 = null;
var inst_12250 = (0);
var inst_12251 = (0);
var state_12367__$1 = (function (){var statearr_12428 = state_12367;
(statearr_12428[(13)] = inst_12251);

(statearr_12428[(14)] = inst_12248);

(statearr_12428[(16)] = inst_12249);

(statearr_12428[(17)] = inst_12250);

return statearr_12428;
})();
var statearr_12429_12494 = state_12367__$1;
(statearr_12429_12494[(2)] = null);

(statearr_12429_12494[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12368 === (14))){
var state_12367__$1 = state_12367;
var statearr_12430_12495 = state_12367__$1;
(statearr_12430_12495[(2)] = null);

(statearr_12430_12495[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12368 === (45))){
var inst_12357 = (state_12367[(2)]);
var state_12367__$1 = state_12367;
var statearr_12431_12496 = state_12367__$1;
(statearr_12431_12496[(2)] = inst_12357);

(statearr_12431_12496[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12368 === (26))){
var inst_12299 = (state_12367[(29)]);
var inst_12353 = (state_12367[(2)]);
var inst_12354 = cljs.core.seq.call(null,inst_12299);
var state_12367__$1 = (function (){var statearr_12432 = state_12367;
(statearr_12432[(31)] = inst_12353);

return statearr_12432;
})();
if(inst_12354){
var statearr_12433_12497 = state_12367__$1;
(statearr_12433_12497[(1)] = (42));

} else {
var statearr_12434_12498 = state_12367__$1;
(statearr_12434_12498[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12368 === (16))){
var inst_12268 = (state_12367[(7)]);
var inst_12270 = cljs.core.chunked_seq_QMARK_.call(null,inst_12268);
var state_12367__$1 = state_12367;
if(inst_12270){
var statearr_12435_12499 = state_12367__$1;
(statearr_12435_12499[(1)] = (19));

} else {
var statearr_12436_12500 = state_12367__$1;
(statearr_12436_12500[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12368 === (38))){
var inst_12346 = (state_12367[(2)]);
var state_12367__$1 = state_12367;
var statearr_12437_12501 = state_12367__$1;
(statearr_12437_12501[(2)] = inst_12346);

(statearr_12437_12501[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12368 === (30))){
var state_12367__$1 = state_12367;
var statearr_12438_12502 = state_12367__$1;
(statearr_12438_12502[(2)] = null);

(statearr_12438_12502[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12368 === (10))){
var inst_12251 = (state_12367[(13)]);
var inst_12249 = (state_12367[(16)]);
var inst_12257 = cljs.core._nth.call(null,inst_12249,inst_12251);
var inst_12258 = cljs.core.nth.call(null,inst_12257,(0),null);
var inst_12259 = cljs.core.nth.call(null,inst_12257,(1),null);
var state_12367__$1 = (function (){var statearr_12439 = state_12367;
(statearr_12439[(26)] = inst_12258);

return statearr_12439;
})();
if(cljs.core.truth_(inst_12259)){
var statearr_12440_12503 = state_12367__$1;
(statearr_12440_12503[(1)] = (13));

} else {
var statearr_12441_12504 = state_12367__$1;
(statearr_12441_12504[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12368 === (18))){
var inst_12292 = (state_12367[(2)]);
var state_12367__$1 = state_12367;
var statearr_12442_12505 = state_12367__$1;
(statearr_12442_12505[(2)] = inst_12292);

(statearr_12442_12505[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12368 === (42))){
var state_12367__$1 = state_12367;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12367__$1,(45),dchan);
} else {
if((state_val_12368 === (37))){
var inst_12239 = (state_12367[(9)]);
var inst_12326 = (state_12367[(25)]);
var inst_12335 = (state_12367[(23)]);
var inst_12335__$1 = cljs.core.first.call(null,inst_12326);
var inst_12336 = cljs.core.async.put_BANG_.call(null,inst_12335__$1,inst_12239,done);
var state_12367__$1 = (function (){var statearr_12443 = state_12367;
(statearr_12443[(23)] = inst_12335__$1);

return statearr_12443;
})();
if(cljs.core.truth_(inst_12336)){
var statearr_12444_12506 = state_12367__$1;
(statearr_12444_12506[(1)] = (39));

} else {
var statearr_12445_12507 = state_12367__$1;
(statearr_12445_12507[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12368 === (8))){
var inst_12251 = (state_12367[(13)]);
var inst_12250 = (state_12367[(17)]);
var inst_12253 = (inst_12251 < inst_12250);
var inst_12254 = inst_12253;
var state_12367__$1 = state_12367;
if(cljs.core.truth_(inst_12254)){
var statearr_12446_12508 = state_12367__$1;
(statearr_12446_12508[(1)] = (10));

} else {
var statearr_12447_12509 = state_12367__$1;
(statearr_12447_12509[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7650__auto___12455,cs,m,dchan,dctr,done))
;
return ((function (switch__7585__auto__,c__7650__auto___12455,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__7586__auto__ = null;
var cljs$core$async$mult_$_state_machine__7586__auto____0 = (function (){
var statearr_12451 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12451[(0)] = cljs$core$async$mult_$_state_machine__7586__auto__);

(statearr_12451[(1)] = (1));

return statearr_12451;
});
var cljs$core$async$mult_$_state_machine__7586__auto____1 = (function (state_12367){
while(true){
var ret_value__7587__auto__ = (function (){try{while(true){
var result__7588__auto__ = switch__7585__auto__.call(null,state_12367);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7588__auto__;
}
break;
}
}catch (e12452){if((e12452 instanceof Object)){
var ex__7589__auto__ = e12452;
var statearr_12453_12510 = state_12367;
(statearr_12453_12510[(5)] = ex__7589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12367);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12452;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12511 = state_12367;
state_12367 = G__12511;
continue;
} else {
return ret_value__7587__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__7586__auto__ = function(state_12367){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__7586__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__7586__auto____1.call(this,state_12367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__7586__auto____0;
cljs$core$async$mult_$_state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__7586__auto____1;
return cljs$core$async$mult_$_state_machine__7586__auto__;
})()
;})(switch__7585__auto__,c__7650__auto___12455,cs,m,dchan,dctr,done))
})();
var state__7652__auto__ = (function (){var statearr_12454 = f__7651__auto__.call(null);
(statearr_12454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7650__auto___12455);

return statearr_12454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7652__auto__);
});})(c__7650__auto___12455,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args12512 = [];
var len__5625__auto___12515 = arguments.length;
var i__5626__auto___12516 = (0);
while(true){
if((i__5626__auto___12516 < len__5625__auto___12515)){
args12512.push((arguments[i__5626__auto___12516]));

var G__12517 = (i__5626__auto___12516 + (1));
i__5626__auto___12516 = G__12517;
continue;
} else {
}
break;
}

var G__12514 = args12512.length;
switch (G__12514) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12512.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__5222__auto__ = (((m == null))?null:m);
var m__5223__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5222__auto__)]);
if(!((m__5223__auto__ == null))){
return m__5223__auto__.call(null,m,ch);
} else {
var m__5223__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__5223__auto____$1 == null))){
return m__5223__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__5222__auto__ = (((m == null))?null:m);
var m__5223__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5222__auto__)]);
if(!((m__5223__auto__ == null))){
return m__5223__auto__.call(null,m,ch);
} else {
var m__5223__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__5223__auto____$1 == null))){
return m__5223__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__5222__auto__ = (((m == null))?null:m);
var m__5223__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5222__auto__)]);
if(!((m__5223__auto__ == null))){
return m__5223__auto__.call(null,m);
} else {
var m__5223__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__5223__auto____$1 == null))){
return m__5223__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__5222__auto__ = (((m == null))?null:m);
var m__5223__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5222__auto__)]);
if(!((m__5223__auto__ == null))){
return m__5223__auto__.call(null,m,state_map);
} else {
var m__5223__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__5223__auto____$1 == null))){
return m__5223__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__5222__auto__ = (((m == null))?null:m);
var m__5223__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5222__auto__)]);
if(!((m__5223__auto__ == null))){
return m__5223__auto__.call(null,m,mode);
} else {
var m__5223__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__5223__auto____$1 == null))){
return m__5223__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5632__auto__ = [];
var len__5625__auto___12529 = arguments.length;
var i__5626__auto___12530 = (0);
while(true){
if((i__5626__auto___12530 < len__5625__auto___12529)){
args__5632__auto__.push((arguments[i__5626__auto___12530]));

var G__12531 = (i__5626__auto___12530 + (1));
i__5626__auto___12530 = G__12531;
continue;
} else {
}
break;
}

var argseq__5633__auto__ = ((((3) < args__5632__auto__.length))?(new cljs.core.IndexedSeq(args__5632__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5633__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__12523){
var map__12524 = p__12523;
var map__12524__$1 = ((((!((map__12524 == null)))?((((map__12524.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12524.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12524):map__12524);
var opts = map__12524__$1;
var statearr_12526_12532 = state;
(statearr_12526_12532[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__12524,map__12524__$1,opts){
return (function (val){
var statearr_12527_12533 = state;
(statearr_12527_12533[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__12524,map__12524__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_12528_12534 = state;
(statearr_12528_12534[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq12519){
var G__12520 = cljs.core.first.call(null,seq12519);
var seq12519__$1 = cljs.core.next.call(null,seq12519);
var G__12521 = cljs.core.first.call(null,seq12519__$1);
var seq12519__$2 = cljs.core.next.call(null,seq12519__$1);
var G__12522 = cljs.core.first.call(null,seq12519__$2);
var seq12519__$3 = cljs.core.next.call(null,seq12519__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12520,G__12521,G__12522,seq12519__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async12698 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12698 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12699){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta12699 = meta12699;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12698.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12700,meta12699__$1){
var self__ = this;
var _12700__$1 = this;
return (new cljs.core.async.t_cljs$core$async12698(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12699__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12698.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12700){
var self__ = this;
var _12700__$1 = this;
return self__.meta12699;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12698.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async12698.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12698.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async12698.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12698.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12698.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12698.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12698.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12698.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta12699","meta12699",842033213,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12698.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12698.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12698";

cljs.core.async.t_cljs$core$async12698.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5165__auto__,writer__5166__auto__,opt__5167__auto__){
return cljs.core._write.call(null,writer__5166__auto__,"cljs.core.async/t_cljs$core$async12698");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async12698 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async12698(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12699){
return (new cljs.core.async.t_cljs$core$async12698(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12699));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async12698(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7650__auto___12861 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7650__auto___12861,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7651__auto__ = (function (){var switch__7585__auto__ = ((function (c__7650__auto___12861,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12798){
var state_val_12799 = (state_12798[(1)]);
if((state_val_12799 === (7))){
var inst_12716 = (state_12798[(2)]);
var state_12798__$1 = state_12798;
var statearr_12800_12862 = state_12798__$1;
(statearr_12800_12862[(2)] = inst_12716);

(statearr_12800_12862[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12799 === (20))){
var inst_12728 = (state_12798[(7)]);
var state_12798__$1 = state_12798;
var statearr_12801_12863 = state_12798__$1;
(statearr_12801_12863[(2)] = inst_12728);

(statearr_12801_12863[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12799 === (27))){
var state_12798__$1 = state_12798;
var statearr_12802_12864 = state_12798__$1;
(statearr_12802_12864[(2)] = null);

(statearr_12802_12864[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12799 === (1))){
var inst_12704 = (state_12798[(8)]);
var inst_12704__$1 = calc_state.call(null);
var inst_12706 = (inst_12704__$1 == null);
var inst_12707 = cljs.core.not.call(null,inst_12706);
var state_12798__$1 = (function (){var statearr_12803 = state_12798;
(statearr_12803[(8)] = inst_12704__$1);

return statearr_12803;
})();
if(inst_12707){
var statearr_12804_12865 = state_12798__$1;
(statearr_12804_12865[(1)] = (2));

} else {
var statearr_12805_12866 = state_12798__$1;
(statearr_12805_12866[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12799 === (24))){
var inst_12758 = (state_12798[(9)]);
var inst_12751 = (state_12798[(10)]);
var inst_12772 = (state_12798[(11)]);
var inst_12772__$1 = inst_12751.call(null,inst_12758);
var state_12798__$1 = (function (){var statearr_12806 = state_12798;
(statearr_12806[(11)] = inst_12772__$1);

return statearr_12806;
})();
if(cljs.core.truth_(inst_12772__$1)){
var statearr_12807_12867 = state_12798__$1;
(statearr_12807_12867[(1)] = (29));

} else {
var statearr_12808_12868 = state_12798__$1;
(statearr_12808_12868[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12799 === (4))){
var inst_12719 = (state_12798[(2)]);
var state_12798__$1 = state_12798;
if(cljs.core.truth_(inst_12719)){
var statearr_12809_12869 = state_12798__$1;
(statearr_12809_12869[(1)] = (8));

} else {
var statearr_12810_12870 = state_12798__$1;
(statearr_12810_12870[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12799 === (15))){
var inst_12745 = (state_12798[(2)]);
var state_12798__$1 = state_12798;
if(cljs.core.truth_(inst_12745)){
var statearr_12811_12871 = state_12798__$1;
(statearr_12811_12871[(1)] = (19));

} else {
var statearr_12812_12872 = state_12798__$1;
(statearr_12812_12872[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12799 === (21))){
var inst_12750 = (state_12798[(12)]);
var inst_12750__$1 = (state_12798[(2)]);
var inst_12751 = cljs.core.get.call(null,inst_12750__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12752 = cljs.core.get.call(null,inst_12750__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12753 = cljs.core.get.call(null,inst_12750__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_12798__$1 = (function (){var statearr_12813 = state_12798;
(statearr_12813[(12)] = inst_12750__$1);

(statearr_12813[(13)] = inst_12752);

(statearr_12813[(10)] = inst_12751);

return statearr_12813;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_12798__$1,(22),inst_12753);
} else {
if((state_val_12799 === (31))){
var inst_12780 = (state_12798[(2)]);
var state_12798__$1 = state_12798;
if(cljs.core.truth_(inst_12780)){
var statearr_12814_12873 = state_12798__$1;
(statearr_12814_12873[(1)] = (32));

} else {
var statearr_12815_12874 = state_12798__$1;
(statearr_12815_12874[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12799 === (32))){
var inst_12757 = (state_12798[(14)]);
var state_12798__$1 = state_12798;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12798__$1,(35),out,inst_12757);
} else {
if((state_val_12799 === (33))){
var inst_12750 = (state_12798[(12)]);
var inst_12728 = inst_12750;
var state_12798__$1 = (function (){var statearr_12816 = state_12798;
(statearr_12816[(7)] = inst_12728);

return statearr_12816;
})();
var statearr_12817_12875 = state_12798__$1;
(statearr_12817_12875[(2)] = null);

(statearr_12817_12875[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12799 === (13))){
var inst_12728 = (state_12798[(7)]);
var inst_12735 = inst_12728.cljs$lang$protocol_mask$partition0$;
var inst_12736 = (inst_12735 & (64));
var inst_12737 = inst_12728.cljs$core$ISeq$;
var inst_12738 = (inst_12736) || (inst_12737);
var state_12798__$1 = state_12798;
if(cljs.core.truth_(inst_12738)){
var statearr_12818_12876 = state_12798__$1;
(statearr_12818_12876[(1)] = (16));

} else {
var statearr_12819_12877 = state_12798__$1;
(statearr_12819_12877[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12799 === (22))){
var inst_12757 = (state_12798[(14)]);
var inst_12758 = (state_12798[(9)]);
var inst_12756 = (state_12798[(2)]);
var inst_12757__$1 = cljs.core.nth.call(null,inst_12756,(0),null);
var inst_12758__$1 = cljs.core.nth.call(null,inst_12756,(1),null);
var inst_12759 = (inst_12757__$1 == null);
var inst_12760 = cljs.core._EQ_.call(null,inst_12758__$1,change);
var inst_12761 = (inst_12759) || (inst_12760);
var state_12798__$1 = (function (){var statearr_12820 = state_12798;
(statearr_12820[(14)] = inst_12757__$1);

(statearr_12820[(9)] = inst_12758__$1);

return statearr_12820;
})();
if(cljs.core.truth_(inst_12761)){
var statearr_12821_12878 = state_12798__$1;
(statearr_12821_12878[(1)] = (23));

} else {
var statearr_12822_12879 = state_12798__$1;
(statearr_12822_12879[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12799 === (36))){
var inst_12750 = (state_12798[(12)]);
var inst_12728 = inst_12750;
var state_12798__$1 = (function (){var statearr_12823 = state_12798;
(statearr_12823[(7)] = inst_12728);

return statearr_12823;
})();
var statearr_12824_12880 = state_12798__$1;
(statearr_12824_12880[(2)] = null);

(statearr_12824_12880[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12799 === (29))){
var inst_12772 = (state_12798[(11)]);
var state_12798__$1 = state_12798;
var statearr_12825_12881 = state_12798__$1;
(statearr_12825_12881[(2)] = inst_12772);

(statearr_12825_12881[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12799 === (6))){
var state_12798__$1 = state_12798;
var statearr_12826_12882 = state_12798__$1;
(statearr_12826_12882[(2)] = false);

(statearr_12826_12882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12799 === (28))){
var inst_12768 = (state_12798[(2)]);
var inst_12769 = calc_state.call(null);
var inst_12728 = inst_12769;
var state_12798__$1 = (function (){var statearr_12827 = state_12798;
(statearr_12827[(15)] = inst_12768);

(statearr_12827[(7)] = inst_12728);

return statearr_12827;
})();
var statearr_12828_12883 = state_12798__$1;
(statearr_12828_12883[(2)] = null);

(statearr_12828_12883[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12799 === (25))){
var inst_12794 = (state_12798[(2)]);
var state_12798__$1 = state_12798;
var statearr_12829_12884 = state_12798__$1;
(statearr_12829_12884[(2)] = inst_12794);

(statearr_12829_12884[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12799 === (34))){
var inst_12792 = (state_12798[(2)]);
var state_12798__$1 = state_12798;
var statearr_12830_12885 = state_12798__$1;
(statearr_12830_12885[(2)] = inst_12792);

(statearr_12830_12885[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12799 === (17))){
var state_12798__$1 = state_12798;
var statearr_12831_12886 = state_12798__$1;
(statearr_12831_12886[(2)] = false);

(statearr_12831_12886[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12799 === (3))){
var state_12798__$1 = state_12798;
var statearr_12832_12887 = state_12798__$1;
(statearr_12832_12887[(2)] = false);

(statearr_12832_12887[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12799 === (12))){
var inst_12796 = (state_12798[(2)]);
var state_12798__$1 = state_12798;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12798__$1,inst_12796);
} else {
if((state_val_12799 === (2))){
var inst_12704 = (state_12798[(8)]);
var inst_12709 = inst_12704.cljs$lang$protocol_mask$partition0$;
var inst_12710 = (inst_12709 & (64));
var inst_12711 = inst_12704.cljs$core$ISeq$;
var inst_12712 = (inst_12710) || (inst_12711);
var state_12798__$1 = state_12798;
if(cljs.core.truth_(inst_12712)){
var statearr_12833_12888 = state_12798__$1;
(statearr_12833_12888[(1)] = (5));

} else {
var statearr_12834_12889 = state_12798__$1;
(statearr_12834_12889[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12799 === (23))){
var inst_12757 = (state_12798[(14)]);
var inst_12763 = (inst_12757 == null);
var state_12798__$1 = state_12798;
if(cljs.core.truth_(inst_12763)){
var statearr_12835_12890 = state_12798__$1;
(statearr_12835_12890[(1)] = (26));

} else {
var statearr_12836_12891 = state_12798__$1;
(statearr_12836_12891[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12799 === (35))){
var inst_12783 = (state_12798[(2)]);
var state_12798__$1 = state_12798;
if(cljs.core.truth_(inst_12783)){
var statearr_12837_12892 = state_12798__$1;
(statearr_12837_12892[(1)] = (36));

} else {
var statearr_12838_12893 = state_12798__$1;
(statearr_12838_12893[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12799 === (19))){
var inst_12728 = (state_12798[(7)]);
var inst_12747 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12728);
var state_12798__$1 = state_12798;
var statearr_12839_12894 = state_12798__$1;
(statearr_12839_12894[(2)] = inst_12747);

(statearr_12839_12894[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12799 === (11))){
var inst_12728 = (state_12798[(7)]);
var inst_12732 = (inst_12728 == null);
var inst_12733 = cljs.core.not.call(null,inst_12732);
var state_12798__$1 = state_12798;
if(inst_12733){
var statearr_12840_12895 = state_12798__$1;
(statearr_12840_12895[(1)] = (13));

} else {
var statearr_12841_12896 = state_12798__$1;
(statearr_12841_12896[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12799 === (9))){
var inst_12704 = (state_12798[(8)]);
var state_12798__$1 = state_12798;
var statearr_12842_12897 = state_12798__$1;
(statearr_12842_12897[(2)] = inst_12704);

(statearr_12842_12897[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12799 === (5))){
var state_12798__$1 = state_12798;
var statearr_12843_12898 = state_12798__$1;
(statearr_12843_12898[(2)] = true);

(statearr_12843_12898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12799 === (14))){
var state_12798__$1 = state_12798;
var statearr_12844_12899 = state_12798__$1;
(statearr_12844_12899[(2)] = false);

(statearr_12844_12899[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12799 === (26))){
var inst_12758 = (state_12798[(9)]);
var inst_12765 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12758);
var state_12798__$1 = state_12798;
var statearr_12845_12900 = state_12798__$1;
(statearr_12845_12900[(2)] = inst_12765);

(statearr_12845_12900[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12799 === (16))){
var state_12798__$1 = state_12798;
var statearr_12846_12901 = state_12798__$1;
(statearr_12846_12901[(2)] = true);

(statearr_12846_12901[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12799 === (38))){
var inst_12788 = (state_12798[(2)]);
var state_12798__$1 = state_12798;
var statearr_12847_12902 = state_12798__$1;
(statearr_12847_12902[(2)] = inst_12788);

(statearr_12847_12902[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12799 === (30))){
var inst_12758 = (state_12798[(9)]);
var inst_12752 = (state_12798[(13)]);
var inst_12751 = (state_12798[(10)]);
var inst_12775 = cljs.core.empty_QMARK_.call(null,inst_12751);
var inst_12776 = inst_12752.call(null,inst_12758);
var inst_12777 = cljs.core.not.call(null,inst_12776);
var inst_12778 = (inst_12775) && (inst_12777);
var state_12798__$1 = state_12798;
var statearr_12848_12903 = state_12798__$1;
(statearr_12848_12903[(2)] = inst_12778);

(statearr_12848_12903[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12799 === (10))){
var inst_12704 = (state_12798[(8)]);
var inst_12724 = (state_12798[(2)]);
var inst_12725 = cljs.core.get.call(null,inst_12724,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12726 = cljs.core.get.call(null,inst_12724,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12727 = cljs.core.get.call(null,inst_12724,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_12728 = inst_12704;
var state_12798__$1 = (function (){var statearr_12849 = state_12798;
(statearr_12849[(16)] = inst_12725);

(statearr_12849[(7)] = inst_12728);

(statearr_12849[(17)] = inst_12726);

(statearr_12849[(18)] = inst_12727);

return statearr_12849;
})();
var statearr_12850_12904 = state_12798__$1;
(statearr_12850_12904[(2)] = null);

(statearr_12850_12904[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12799 === (18))){
var inst_12742 = (state_12798[(2)]);
var state_12798__$1 = state_12798;
var statearr_12851_12905 = state_12798__$1;
(statearr_12851_12905[(2)] = inst_12742);

(statearr_12851_12905[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12799 === (37))){
var state_12798__$1 = state_12798;
var statearr_12852_12906 = state_12798__$1;
(statearr_12852_12906[(2)] = null);

(statearr_12852_12906[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12799 === (8))){
var inst_12704 = (state_12798[(8)]);
var inst_12721 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12704);
var state_12798__$1 = state_12798;
var statearr_12853_12907 = state_12798__$1;
(statearr_12853_12907[(2)] = inst_12721);

(statearr_12853_12907[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7650__auto___12861,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__7585__auto__,c__7650__auto___12861,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__7586__auto__ = null;
var cljs$core$async$mix_$_state_machine__7586__auto____0 = (function (){
var statearr_12857 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12857[(0)] = cljs$core$async$mix_$_state_machine__7586__auto__);

(statearr_12857[(1)] = (1));

return statearr_12857;
});
var cljs$core$async$mix_$_state_machine__7586__auto____1 = (function (state_12798){
while(true){
var ret_value__7587__auto__ = (function (){try{while(true){
var result__7588__auto__ = switch__7585__auto__.call(null,state_12798);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7588__auto__;
}
break;
}
}catch (e12858){if((e12858 instanceof Object)){
var ex__7589__auto__ = e12858;
var statearr_12859_12908 = state_12798;
(statearr_12859_12908[(5)] = ex__7589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12798);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12858;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12909 = state_12798;
state_12798 = G__12909;
continue;
} else {
return ret_value__7587__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__7586__auto__ = function(state_12798){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__7586__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__7586__auto____1.call(this,state_12798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__7586__auto____0;
cljs$core$async$mix_$_state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__7586__auto____1;
return cljs$core$async$mix_$_state_machine__7586__auto__;
})()
;})(switch__7585__auto__,c__7650__auto___12861,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7652__auto__ = (function (){var statearr_12860 = f__7651__auto__.call(null);
(statearr_12860[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7650__auto___12861);

return statearr_12860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7652__auto__);
});})(c__7650__auto___12861,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__5222__auto__ = (((p == null))?null:p);
var m__5223__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5222__auto__)]);
if(!((m__5223__auto__ == null))){
return m__5223__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__5223__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__5223__auto____$1 == null))){
return m__5223__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__5222__auto__ = (((p == null))?null:p);
var m__5223__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5222__auto__)]);
if(!((m__5223__auto__ == null))){
return m__5223__auto__.call(null,p,v,ch);
} else {
var m__5223__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__5223__auto____$1 == null))){
return m__5223__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args12910 = [];
var len__5625__auto___12913 = arguments.length;
var i__5626__auto___12914 = (0);
while(true){
if((i__5626__auto___12914 < len__5625__auto___12913)){
args12910.push((arguments[i__5626__auto___12914]));

var G__12915 = (i__5626__auto___12914 + (1));
i__5626__auto___12914 = G__12915;
continue;
} else {
}
break;
}

var G__12912 = args12910.length;
switch (G__12912) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12910.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__5222__auto__ = (((p == null))?null:p);
var m__5223__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5222__auto__)]);
if(!((m__5223__auto__ == null))){
return m__5223__auto__.call(null,p);
} else {
var m__5223__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5223__auto____$1 == null))){
return m__5223__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__5222__auto__ = (((p == null))?null:p);
var m__5223__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5222__auto__)]);
if(!((m__5223__auto__ == null))){
return m__5223__auto__.call(null,p,v);
} else {
var m__5223__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5223__auto____$1 == null))){
return m__5223__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args12918 = [];
var len__5625__auto___13043 = arguments.length;
var i__5626__auto___13044 = (0);
while(true){
if((i__5626__auto___13044 < len__5625__auto___13043)){
args12918.push((arguments[i__5626__auto___13044]));

var G__13045 = (i__5626__auto___13044 + (1));
i__5626__auto___13044 = G__13045;
continue;
} else {
}
break;
}

var G__12920 = args12918.length;
switch (G__12920) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12918.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4567__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4567__auto__)){
return or__4567__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4567__auto__,mults){
return (function (p1__12917_SHARP_){
if(cljs.core.truth_(p1__12917_SHARP_.call(null,topic))){
return p1__12917_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__12917_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4567__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async12921 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12921 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta12922){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta12922 = meta12922;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12921.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12923,meta12922__$1){
var self__ = this;
var _12923__$1 = this;
return (new cljs.core.async.t_cljs$core$async12921(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta12922__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12921.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12923){
var self__ = this;
var _12923__$1 = this;
return self__.meta12922;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12921.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async12921.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12921.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async12921.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12921.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12921.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12921.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12921.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta12922","meta12922",-854430492,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async12921.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12921.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12921";

cljs.core.async.t_cljs$core$async12921.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5165__auto__,writer__5166__auto__,opt__5167__auto__){
return cljs.core._write.call(null,writer__5166__auto__,"cljs.core.async/t_cljs$core$async12921");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async12921 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async12921(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12922){
return (new cljs.core.async.t_cljs$core$async12921(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta12922));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async12921(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7650__auto___13047 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7650__auto___13047,mults,ensure_mult,p){
return (function (){
var f__7651__auto__ = (function (){var switch__7585__auto__ = ((function (c__7650__auto___13047,mults,ensure_mult,p){
return (function (state_12995){
var state_val_12996 = (state_12995[(1)]);
if((state_val_12996 === (7))){
var inst_12991 = (state_12995[(2)]);
var state_12995__$1 = state_12995;
var statearr_12997_13048 = state_12995__$1;
(statearr_12997_13048[(2)] = inst_12991);

(statearr_12997_13048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12996 === (20))){
var state_12995__$1 = state_12995;
var statearr_12998_13049 = state_12995__$1;
(statearr_12998_13049[(2)] = null);

(statearr_12998_13049[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12996 === (1))){
var state_12995__$1 = state_12995;
var statearr_12999_13050 = state_12995__$1;
(statearr_12999_13050[(2)] = null);

(statearr_12999_13050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12996 === (24))){
var inst_12974 = (state_12995[(7)]);
var inst_12983 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12974);
var state_12995__$1 = state_12995;
var statearr_13000_13051 = state_12995__$1;
(statearr_13000_13051[(2)] = inst_12983);

(statearr_13000_13051[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12996 === (4))){
var inst_12926 = (state_12995[(8)]);
var inst_12926__$1 = (state_12995[(2)]);
var inst_12927 = (inst_12926__$1 == null);
var state_12995__$1 = (function (){var statearr_13001 = state_12995;
(statearr_13001[(8)] = inst_12926__$1);

return statearr_13001;
})();
if(cljs.core.truth_(inst_12927)){
var statearr_13002_13052 = state_12995__$1;
(statearr_13002_13052[(1)] = (5));

} else {
var statearr_13003_13053 = state_12995__$1;
(statearr_13003_13053[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12996 === (15))){
var inst_12968 = (state_12995[(2)]);
var state_12995__$1 = state_12995;
var statearr_13004_13054 = state_12995__$1;
(statearr_13004_13054[(2)] = inst_12968);

(statearr_13004_13054[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12996 === (21))){
var inst_12988 = (state_12995[(2)]);
var state_12995__$1 = (function (){var statearr_13005 = state_12995;
(statearr_13005[(9)] = inst_12988);

return statearr_13005;
})();
var statearr_13006_13055 = state_12995__$1;
(statearr_13006_13055[(2)] = null);

(statearr_13006_13055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12996 === (13))){
var inst_12950 = (state_12995[(10)]);
var inst_12952 = cljs.core.chunked_seq_QMARK_.call(null,inst_12950);
var state_12995__$1 = state_12995;
if(inst_12952){
var statearr_13007_13056 = state_12995__$1;
(statearr_13007_13056[(1)] = (16));

} else {
var statearr_13008_13057 = state_12995__$1;
(statearr_13008_13057[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12996 === (22))){
var inst_12980 = (state_12995[(2)]);
var state_12995__$1 = state_12995;
if(cljs.core.truth_(inst_12980)){
var statearr_13009_13058 = state_12995__$1;
(statearr_13009_13058[(1)] = (23));

} else {
var statearr_13010_13059 = state_12995__$1;
(statearr_13010_13059[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12996 === (6))){
var inst_12926 = (state_12995[(8)]);
var inst_12976 = (state_12995[(11)]);
var inst_12974 = (state_12995[(7)]);
var inst_12974__$1 = topic_fn.call(null,inst_12926);
var inst_12975 = cljs.core.deref.call(null,mults);
var inst_12976__$1 = cljs.core.get.call(null,inst_12975,inst_12974__$1);
var state_12995__$1 = (function (){var statearr_13011 = state_12995;
(statearr_13011[(11)] = inst_12976__$1);

(statearr_13011[(7)] = inst_12974__$1);

return statearr_13011;
})();
if(cljs.core.truth_(inst_12976__$1)){
var statearr_13012_13060 = state_12995__$1;
(statearr_13012_13060[(1)] = (19));

} else {
var statearr_13013_13061 = state_12995__$1;
(statearr_13013_13061[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12996 === (25))){
var inst_12985 = (state_12995[(2)]);
var state_12995__$1 = state_12995;
var statearr_13014_13062 = state_12995__$1;
(statearr_13014_13062[(2)] = inst_12985);

(statearr_13014_13062[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12996 === (17))){
var inst_12950 = (state_12995[(10)]);
var inst_12959 = cljs.core.first.call(null,inst_12950);
var inst_12960 = cljs.core.async.muxch_STAR_.call(null,inst_12959);
var inst_12961 = cljs.core.async.close_BANG_.call(null,inst_12960);
var inst_12962 = cljs.core.next.call(null,inst_12950);
var inst_12936 = inst_12962;
var inst_12937 = null;
var inst_12938 = (0);
var inst_12939 = (0);
var state_12995__$1 = (function (){var statearr_13015 = state_12995;
(statearr_13015[(12)] = inst_12938);

(statearr_13015[(13)] = inst_12939);

(statearr_13015[(14)] = inst_12937);

(statearr_13015[(15)] = inst_12936);

(statearr_13015[(16)] = inst_12961);

return statearr_13015;
})();
var statearr_13016_13063 = state_12995__$1;
(statearr_13016_13063[(2)] = null);

(statearr_13016_13063[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12996 === (3))){
var inst_12993 = (state_12995[(2)]);
var state_12995__$1 = state_12995;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12995__$1,inst_12993);
} else {
if((state_val_12996 === (12))){
var inst_12970 = (state_12995[(2)]);
var state_12995__$1 = state_12995;
var statearr_13017_13064 = state_12995__$1;
(statearr_13017_13064[(2)] = inst_12970);

(statearr_13017_13064[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12996 === (2))){
var state_12995__$1 = state_12995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12995__$1,(4),ch);
} else {
if((state_val_12996 === (23))){
var state_12995__$1 = state_12995;
var statearr_13018_13065 = state_12995__$1;
(statearr_13018_13065[(2)] = null);

(statearr_13018_13065[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12996 === (19))){
var inst_12926 = (state_12995[(8)]);
var inst_12976 = (state_12995[(11)]);
var inst_12978 = cljs.core.async.muxch_STAR_.call(null,inst_12976);
var state_12995__$1 = state_12995;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12995__$1,(22),inst_12978,inst_12926);
} else {
if((state_val_12996 === (11))){
var inst_12950 = (state_12995[(10)]);
var inst_12936 = (state_12995[(15)]);
var inst_12950__$1 = cljs.core.seq.call(null,inst_12936);
var state_12995__$1 = (function (){var statearr_13019 = state_12995;
(statearr_13019[(10)] = inst_12950__$1);

return statearr_13019;
})();
if(inst_12950__$1){
var statearr_13020_13066 = state_12995__$1;
(statearr_13020_13066[(1)] = (13));

} else {
var statearr_13021_13067 = state_12995__$1;
(statearr_13021_13067[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12996 === (9))){
var inst_12972 = (state_12995[(2)]);
var state_12995__$1 = state_12995;
var statearr_13022_13068 = state_12995__$1;
(statearr_13022_13068[(2)] = inst_12972);

(statearr_13022_13068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12996 === (5))){
var inst_12933 = cljs.core.deref.call(null,mults);
var inst_12934 = cljs.core.vals.call(null,inst_12933);
var inst_12935 = cljs.core.seq.call(null,inst_12934);
var inst_12936 = inst_12935;
var inst_12937 = null;
var inst_12938 = (0);
var inst_12939 = (0);
var state_12995__$1 = (function (){var statearr_13023 = state_12995;
(statearr_13023[(12)] = inst_12938);

(statearr_13023[(13)] = inst_12939);

(statearr_13023[(14)] = inst_12937);

(statearr_13023[(15)] = inst_12936);

return statearr_13023;
})();
var statearr_13024_13069 = state_12995__$1;
(statearr_13024_13069[(2)] = null);

(statearr_13024_13069[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12996 === (14))){
var state_12995__$1 = state_12995;
var statearr_13028_13070 = state_12995__$1;
(statearr_13028_13070[(2)] = null);

(statearr_13028_13070[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12996 === (16))){
var inst_12950 = (state_12995[(10)]);
var inst_12954 = cljs.core.chunk_first.call(null,inst_12950);
var inst_12955 = cljs.core.chunk_rest.call(null,inst_12950);
var inst_12956 = cljs.core.count.call(null,inst_12954);
var inst_12936 = inst_12955;
var inst_12937 = inst_12954;
var inst_12938 = inst_12956;
var inst_12939 = (0);
var state_12995__$1 = (function (){var statearr_13029 = state_12995;
(statearr_13029[(12)] = inst_12938);

(statearr_13029[(13)] = inst_12939);

(statearr_13029[(14)] = inst_12937);

(statearr_13029[(15)] = inst_12936);

return statearr_13029;
})();
var statearr_13030_13071 = state_12995__$1;
(statearr_13030_13071[(2)] = null);

(statearr_13030_13071[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12996 === (10))){
var inst_12938 = (state_12995[(12)]);
var inst_12939 = (state_12995[(13)]);
var inst_12937 = (state_12995[(14)]);
var inst_12936 = (state_12995[(15)]);
var inst_12944 = cljs.core._nth.call(null,inst_12937,inst_12939);
var inst_12945 = cljs.core.async.muxch_STAR_.call(null,inst_12944);
var inst_12946 = cljs.core.async.close_BANG_.call(null,inst_12945);
var inst_12947 = (inst_12939 + (1));
var tmp13025 = inst_12938;
var tmp13026 = inst_12937;
var tmp13027 = inst_12936;
var inst_12936__$1 = tmp13027;
var inst_12937__$1 = tmp13026;
var inst_12938__$1 = tmp13025;
var inst_12939__$1 = inst_12947;
var state_12995__$1 = (function (){var statearr_13031 = state_12995;
(statearr_13031[(12)] = inst_12938__$1);

(statearr_13031[(13)] = inst_12939__$1);

(statearr_13031[(14)] = inst_12937__$1);

(statearr_13031[(15)] = inst_12936__$1);

(statearr_13031[(17)] = inst_12946);

return statearr_13031;
})();
var statearr_13032_13072 = state_12995__$1;
(statearr_13032_13072[(2)] = null);

(statearr_13032_13072[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12996 === (18))){
var inst_12965 = (state_12995[(2)]);
var state_12995__$1 = state_12995;
var statearr_13033_13073 = state_12995__$1;
(statearr_13033_13073[(2)] = inst_12965);

(statearr_13033_13073[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12996 === (8))){
var inst_12938 = (state_12995[(12)]);
var inst_12939 = (state_12995[(13)]);
var inst_12941 = (inst_12939 < inst_12938);
var inst_12942 = inst_12941;
var state_12995__$1 = state_12995;
if(cljs.core.truth_(inst_12942)){
var statearr_13034_13074 = state_12995__$1;
(statearr_13034_13074[(1)] = (10));

} else {
var statearr_13035_13075 = state_12995__$1;
(statearr_13035_13075[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7650__auto___13047,mults,ensure_mult,p))
;
return ((function (switch__7585__auto__,c__7650__auto___13047,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__7586__auto__ = null;
var cljs$core$async$state_machine__7586__auto____0 = (function (){
var statearr_13039 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13039[(0)] = cljs$core$async$state_machine__7586__auto__);

(statearr_13039[(1)] = (1));

return statearr_13039;
});
var cljs$core$async$state_machine__7586__auto____1 = (function (state_12995){
while(true){
var ret_value__7587__auto__ = (function (){try{while(true){
var result__7588__auto__ = switch__7585__auto__.call(null,state_12995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7588__auto__;
}
break;
}
}catch (e13040){if((e13040 instanceof Object)){
var ex__7589__auto__ = e13040;
var statearr_13041_13076 = state_12995;
(statearr_13041_13076[(5)] = ex__7589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13040;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13077 = state_12995;
state_12995 = G__13077;
continue;
} else {
return ret_value__7587__auto__;
}
break;
}
});
cljs$core$async$state_machine__7586__auto__ = function(state_12995){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7586__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7586__auto____1.call(this,state_12995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7586__auto____0;
cljs$core$async$state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7586__auto____1;
return cljs$core$async$state_machine__7586__auto__;
})()
;})(switch__7585__auto__,c__7650__auto___13047,mults,ensure_mult,p))
})();
var state__7652__auto__ = (function (){var statearr_13042 = f__7651__auto__.call(null);
(statearr_13042[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7650__auto___13047);

return statearr_13042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7652__auto__);
});})(c__7650__auto___13047,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args13078 = [];
var len__5625__auto___13081 = arguments.length;
var i__5626__auto___13082 = (0);
while(true){
if((i__5626__auto___13082 < len__5625__auto___13081)){
args13078.push((arguments[i__5626__auto___13082]));

var G__13083 = (i__5626__auto___13082 + (1));
i__5626__auto___13082 = G__13083;
continue;
} else {
}
break;
}

var G__13080 = args13078.length;
switch (G__13080) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13078.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args13085 = [];
var len__5625__auto___13088 = arguments.length;
var i__5626__auto___13089 = (0);
while(true){
if((i__5626__auto___13089 < len__5625__auto___13088)){
args13085.push((arguments[i__5626__auto___13089]));

var G__13090 = (i__5626__auto___13089 + (1));
i__5626__auto___13089 = G__13090;
continue;
} else {
}
break;
}

var G__13087 = args13085.length;
switch (G__13087) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13085.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args13092 = [];
var len__5625__auto___13163 = arguments.length;
var i__5626__auto___13164 = (0);
while(true){
if((i__5626__auto___13164 < len__5625__auto___13163)){
args13092.push((arguments[i__5626__auto___13164]));

var G__13165 = (i__5626__auto___13164 + (1));
i__5626__auto___13164 = G__13165;
continue;
} else {
}
break;
}

var G__13094 = args13092.length;
switch (G__13094) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13092.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__7650__auto___13167 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7650__auto___13167,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7651__auto__ = (function (){var switch__7585__auto__ = ((function (c__7650__auto___13167,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_13133){
var state_val_13134 = (state_13133[(1)]);
if((state_val_13134 === (7))){
var state_13133__$1 = state_13133;
var statearr_13135_13168 = state_13133__$1;
(statearr_13135_13168[(2)] = null);

(statearr_13135_13168[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13134 === (1))){
var state_13133__$1 = state_13133;
var statearr_13136_13169 = state_13133__$1;
(statearr_13136_13169[(2)] = null);

(statearr_13136_13169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13134 === (4))){
var inst_13097 = (state_13133[(7)]);
var inst_13099 = (inst_13097 < cnt);
var state_13133__$1 = state_13133;
if(cljs.core.truth_(inst_13099)){
var statearr_13137_13170 = state_13133__$1;
(statearr_13137_13170[(1)] = (6));

} else {
var statearr_13138_13171 = state_13133__$1;
(statearr_13138_13171[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13134 === (15))){
var inst_13129 = (state_13133[(2)]);
var state_13133__$1 = state_13133;
var statearr_13139_13172 = state_13133__$1;
(statearr_13139_13172[(2)] = inst_13129);

(statearr_13139_13172[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13134 === (13))){
var inst_13122 = cljs.core.async.close_BANG_.call(null,out);
var state_13133__$1 = state_13133;
var statearr_13140_13173 = state_13133__$1;
(statearr_13140_13173[(2)] = inst_13122);

(statearr_13140_13173[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13134 === (6))){
var state_13133__$1 = state_13133;
var statearr_13141_13174 = state_13133__$1;
(statearr_13141_13174[(2)] = null);

(statearr_13141_13174[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13134 === (3))){
var inst_13131 = (state_13133[(2)]);
var state_13133__$1 = state_13133;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13133__$1,inst_13131);
} else {
if((state_val_13134 === (12))){
var inst_13119 = (state_13133[(8)]);
var inst_13119__$1 = (state_13133[(2)]);
var inst_13120 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13119__$1);
var state_13133__$1 = (function (){var statearr_13142 = state_13133;
(statearr_13142[(8)] = inst_13119__$1);

return statearr_13142;
})();
if(cljs.core.truth_(inst_13120)){
var statearr_13143_13175 = state_13133__$1;
(statearr_13143_13175[(1)] = (13));

} else {
var statearr_13144_13176 = state_13133__$1;
(statearr_13144_13176[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13134 === (2))){
var inst_13096 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_13097 = (0);
var state_13133__$1 = (function (){var statearr_13145 = state_13133;
(statearr_13145[(9)] = inst_13096);

(statearr_13145[(7)] = inst_13097);

return statearr_13145;
})();
var statearr_13146_13177 = state_13133__$1;
(statearr_13146_13177[(2)] = null);

(statearr_13146_13177[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13134 === (11))){
var inst_13097 = (state_13133[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13133,(10),Object,null,(9));
var inst_13106 = chs__$1.call(null,inst_13097);
var inst_13107 = done.call(null,inst_13097);
var inst_13108 = cljs.core.async.take_BANG_.call(null,inst_13106,inst_13107);
var state_13133__$1 = state_13133;
var statearr_13147_13178 = state_13133__$1;
(statearr_13147_13178[(2)] = inst_13108);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13133__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13134 === (9))){
var inst_13097 = (state_13133[(7)]);
var inst_13110 = (state_13133[(2)]);
var inst_13111 = (inst_13097 + (1));
var inst_13097__$1 = inst_13111;
var state_13133__$1 = (function (){var statearr_13148 = state_13133;
(statearr_13148[(7)] = inst_13097__$1);

(statearr_13148[(10)] = inst_13110);

return statearr_13148;
})();
var statearr_13149_13179 = state_13133__$1;
(statearr_13149_13179[(2)] = null);

(statearr_13149_13179[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13134 === (5))){
var inst_13117 = (state_13133[(2)]);
var state_13133__$1 = (function (){var statearr_13150 = state_13133;
(statearr_13150[(11)] = inst_13117);

return statearr_13150;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13133__$1,(12),dchan);
} else {
if((state_val_13134 === (14))){
var inst_13119 = (state_13133[(8)]);
var inst_13124 = cljs.core.apply.call(null,f,inst_13119);
var state_13133__$1 = state_13133;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13133__$1,(16),out,inst_13124);
} else {
if((state_val_13134 === (16))){
var inst_13126 = (state_13133[(2)]);
var state_13133__$1 = (function (){var statearr_13151 = state_13133;
(statearr_13151[(12)] = inst_13126);

return statearr_13151;
})();
var statearr_13152_13180 = state_13133__$1;
(statearr_13152_13180[(2)] = null);

(statearr_13152_13180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13134 === (10))){
var inst_13101 = (state_13133[(2)]);
var inst_13102 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_13133__$1 = (function (){var statearr_13153 = state_13133;
(statearr_13153[(13)] = inst_13101);

return statearr_13153;
})();
var statearr_13154_13181 = state_13133__$1;
(statearr_13154_13181[(2)] = inst_13102);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13133__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13134 === (8))){
var inst_13115 = (state_13133[(2)]);
var state_13133__$1 = state_13133;
var statearr_13155_13182 = state_13133__$1;
(statearr_13155_13182[(2)] = inst_13115);

(statearr_13155_13182[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7650__auto___13167,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__7585__auto__,c__7650__auto___13167,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__7586__auto__ = null;
var cljs$core$async$state_machine__7586__auto____0 = (function (){
var statearr_13159 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13159[(0)] = cljs$core$async$state_machine__7586__auto__);

(statearr_13159[(1)] = (1));

return statearr_13159;
});
var cljs$core$async$state_machine__7586__auto____1 = (function (state_13133){
while(true){
var ret_value__7587__auto__ = (function (){try{while(true){
var result__7588__auto__ = switch__7585__auto__.call(null,state_13133);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7588__auto__;
}
break;
}
}catch (e13160){if((e13160 instanceof Object)){
var ex__7589__auto__ = e13160;
var statearr_13161_13183 = state_13133;
(statearr_13161_13183[(5)] = ex__7589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13133);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13184 = state_13133;
state_13133 = G__13184;
continue;
} else {
return ret_value__7587__auto__;
}
break;
}
});
cljs$core$async$state_machine__7586__auto__ = function(state_13133){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7586__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7586__auto____1.call(this,state_13133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7586__auto____0;
cljs$core$async$state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7586__auto____1;
return cljs$core$async$state_machine__7586__auto__;
})()
;})(switch__7585__auto__,c__7650__auto___13167,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7652__auto__ = (function (){var statearr_13162 = f__7651__auto__.call(null);
(statearr_13162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7650__auto___13167);

return statearr_13162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7652__auto__);
});})(c__7650__auto___13167,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args13186 = [];
var len__5625__auto___13242 = arguments.length;
var i__5626__auto___13243 = (0);
while(true){
if((i__5626__auto___13243 < len__5625__auto___13242)){
args13186.push((arguments[i__5626__auto___13243]));

var G__13244 = (i__5626__auto___13243 + (1));
i__5626__auto___13243 = G__13244;
continue;
} else {
}
break;
}

var G__13188 = args13186.length;
switch (G__13188) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13186.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7650__auto___13246 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7650__auto___13246,out){
return (function (){
var f__7651__auto__ = (function (){var switch__7585__auto__ = ((function (c__7650__auto___13246,out){
return (function (state_13218){
var state_val_13219 = (state_13218[(1)]);
if((state_val_13219 === (7))){
var inst_13197 = (state_13218[(7)]);
var inst_13198 = (state_13218[(8)]);
var inst_13197__$1 = (state_13218[(2)]);
var inst_13198__$1 = cljs.core.nth.call(null,inst_13197__$1,(0),null);
var inst_13199 = cljs.core.nth.call(null,inst_13197__$1,(1),null);
var inst_13200 = (inst_13198__$1 == null);
var state_13218__$1 = (function (){var statearr_13220 = state_13218;
(statearr_13220[(9)] = inst_13199);

(statearr_13220[(7)] = inst_13197__$1);

(statearr_13220[(8)] = inst_13198__$1);

return statearr_13220;
})();
if(cljs.core.truth_(inst_13200)){
var statearr_13221_13247 = state_13218__$1;
(statearr_13221_13247[(1)] = (8));

} else {
var statearr_13222_13248 = state_13218__$1;
(statearr_13222_13248[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13219 === (1))){
var inst_13189 = cljs.core.vec.call(null,chs);
var inst_13190 = inst_13189;
var state_13218__$1 = (function (){var statearr_13223 = state_13218;
(statearr_13223[(10)] = inst_13190);

return statearr_13223;
})();
var statearr_13224_13249 = state_13218__$1;
(statearr_13224_13249[(2)] = null);

(statearr_13224_13249[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13219 === (4))){
var inst_13190 = (state_13218[(10)]);
var state_13218__$1 = state_13218;
return cljs.core.async.ioc_alts_BANG_.call(null,state_13218__$1,(7),inst_13190);
} else {
if((state_val_13219 === (6))){
var inst_13214 = (state_13218[(2)]);
var state_13218__$1 = state_13218;
var statearr_13225_13250 = state_13218__$1;
(statearr_13225_13250[(2)] = inst_13214);

(statearr_13225_13250[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13219 === (3))){
var inst_13216 = (state_13218[(2)]);
var state_13218__$1 = state_13218;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13218__$1,inst_13216);
} else {
if((state_val_13219 === (2))){
var inst_13190 = (state_13218[(10)]);
var inst_13192 = cljs.core.count.call(null,inst_13190);
var inst_13193 = (inst_13192 > (0));
var state_13218__$1 = state_13218;
if(cljs.core.truth_(inst_13193)){
var statearr_13227_13251 = state_13218__$1;
(statearr_13227_13251[(1)] = (4));

} else {
var statearr_13228_13252 = state_13218__$1;
(statearr_13228_13252[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13219 === (11))){
var inst_13190 = (state_13218[(10)]);
var inst_13207 = (state_13218[(2)]);
var tmp13226 = inst_13190;
var inst_13190__$1 = tmp13226;
var state_13218__$1 = (function (){var statearr_13229 = state_13218;
(statearr_13229[(10)] = inst_13190__$1);

(statearr_13229[(11)] = inst_13207);

return statearr_13229;
})();
var statearr_13230_13253 = state_13218__$1;
(statearr_13230_13253[(2)] = null);

(statearr_13230_13253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13219 === (9))){
var inst_13198 = (state_13218[(8)]);
var state_13218__$1 = state_13218;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13218__$1,(11),out,inst_13198);
} else {
if((state_val_13219 === (5))){
var inst_13212 = cljs.core.async.close_BANG_.call(null,out);
var state_13218__$1 = state_13218;
var statearr_13231_13254 = state_13218__$1;
(statearr_13231_13254[(2)] = inst_13212);

(statearr_13231_13254[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13219 === (10))){
var inst_13210 = (state_13218[(2)]);
var state_13218__$1 = state_13218;
var statearr_13232_13255 = state_13218__$1;
(statearr_13232_13255[(2)] = inst_13210);

(statearr_13232_13255[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13219 === (8))){
var inst_13190 = (state_13218[(10)]);
var inst_13199 = (state_13218[(9)]);
var inst_13197 = (state_13218[(7)]);
var inst_13198 = (state_13218[(8)]);
var inst_13202 = (function (){var cs = inst_13190;
var vec__13195 = inst_13197;
var v = inst_13198;
var c = inst_13199;
return ((function (cs,vec__13195,v,c,inst_13190,inst_13199,inst_13197,inst_13198,state_val_13219,c__7650__auto___13246,out){
return (function (p1__13185_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__13185_SHARP_);
});
;})(cs,vec__13195,v,c,inst_13190,inst_13199,inst_13197,inst_13198,state_val_13219,c__7650__auto___13246,out))
})();
var inst_13203 = cljs.core.filterv.call(null,inst_13202,inst_13190);
var inst_13190__$1 = inst_13203;
var state_13218__$1 = (function (){var statearr_13233 = state_13218;
(statearr_13233[(10)] = inst_13190__$1);

return statearr_13233;
})();
var statearr_13234_13256 = state_13218__$1;
(statearr_13234_13256[(2)] = null);

(statearr_13234_13256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7650__auto___13246,out))
;
return ((function (switch__7585__auto__,c__7650__auto___13246,out){
return (function() {
var cljs$core$async$state_machine__7586__auto__ = null;
var cljs$core$async$state_machine__7586__auto____0 = (function (){
var statearr_13238 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13238[(0)] = cljs$core$async$state_machine__7586__auto__);

(statearr_13238[(1)] = (1));

return statearr_13238;
});
var cljs$core$async$state_machine__7586__auto____1 = (function (state_13218){
while(true){
var ret_value__7587__auto__ = (function (){try{while(true){
var result__7588__auto__ = switch__7585__auto__.call(null,state_13218);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7588__auto__;
}
break;
}
}catch (e13239){if((e13239 instanceof Object)){
var ex__7589__auto__ = e13239;
var statearr_13240_13257 = state_13218;
(statearr_13240_13257[(5)] = ex__7589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13218);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13239;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13258 = state_13218;
state_13218 = G__13258;
continue;
} else {
return ret_value__7587__auto__;
}
break;
}
});
cljs$core$async$state_machine__7586__auto__ = function(state_13218){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7586__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7586__auto____1.call(this,state_13218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7586__auto____0;
cljs$core$async$state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7586__auto____1;
return cljs$core$async$state_machine__7586__auto__;
})()
;})(switch__7585__auto__,c__7650__auto___13246,out))
})();
var state__7652__auto__ = (function (){var statearr_13241 = f__7651__auto__.call(null);
(statearr_13241[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7650__auto___13246);

return statearr_13241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7652__auto__);
});})(c__7650__auto___13246,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args13259 = [];
var len__5625__auto___13308 = arguments.length;
var i__5626__auto___13309 = (0);
while(true){
if((i__5626__auto___13309 < len__5625__auto___13308)){
args13259.push((arguments[i__5626__auto___13309]));

var G__13310 = (i__5626__auto___13309 + (1));
i__5626__auto___13309 = G__13310;
continue;
} else {
}
break;
}

var G__13261 = args13259.length;
switch (G__13261) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13259.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7650__auto___13312 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7650__auto___13312,out){
return (function (){
var f__7651__auto__ = (function (){var switch__7585__auto__ = ((function (c__7650__auto___13312,out){
return (function (state_13285){
var state_val_13286 = (state_13285[(1)]);
if((state_val_13286 === (7))){
var inst_13267 = (state_13285[(7)]);
var inst_13267__$1 = (state_13285[(2)]);
var inst_13268 = (inst_13267__$1 == null);
var inst_13269 = cljs.core.not.call(null,inst_13268);
var state_13285__$1 = (function (){var statearr_13287 = state_13285;
(statearr_13287[(7)] = inst_13267__$1);

return statearr_13287;
})();
if(inst_13269){
var statearr_13288_13313 = state_13285__$1;
(statearr_13288_13313[(1)] = (8));

} else {
var statearr_13289_13314 = state_13285__$1;
(statearr_13289_13314[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13286 === (1))){
var inst_13262 = (0);
var state_13285__$1 = (function (){var statearr_13290 = state_13285;
(statearr_13290[(8)] = inst_13262);

return statearr_13290;
})();
var statearr_13291_13315 = state_13285__$1;
(statearr_13291_13315[(2)] = null);

(statearr_13291_13315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13286 === (4))){
var state_13285__$1 = state_13285;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13285__$1,(7),ch);
} else {
if((state_val_13286 === (6))){
var inst_13280 = (state_13285[(2)]);
var state_13285__$1 = state_13285;
var statearr_13292_13316 = state_13285__$1;
(statearr_13292_13316[(2)] = inst_13280);

(statearr_13292_13316[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13286 === (3))){
var inst_13282 = (state_13285[(2)]);
var inst_13283 = cljs.core.async.close_BANG_.call(null,out);
var state_13285__$1 = (function (){var statearr_13293 = state_13285;
(statearr_13293[(9)] = inst_13282);

return statearr_13293;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13285__$1,inst_13283);
} else {
if((state_val_13286 === (2))){
var inst_13262 = (state_13285[(8)]);
var inst_13264 = (inst_13262 < n);
var state_13285__$1 = state_13285;
if(cljs.core.truth_(inst_13264)){
var statearr_13294_13317 = state_13285__$1;
(statearr_13294_13317[(1)] = (4));

} else {
var statearr_13295_13318 = state_13285__$1;
(statearr_13295_13318[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13286 === (11))){
var inst_13262 = (state_13285[(8)]);
var inst_13272 = (state_13285[(2)]);
var inst_13273 = (inst_13262 + (1));
var inst_13262__$1 = inst_13273;
var state_13285__$1 = (function (){var statearr_13296 = state_13285;
(statearr_13296[(10)] = inst_13272);

(statearr_13296[(8)] = inst_13262__$1);

return statearr_13296;
})();
var statearr_13297_13319 = state_13285__$1;
(statearr_13297_13319[(2)] = null);

(statearr_13297_13319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13286 === (9))){
var state_13285__$1 = state_13285;
var statearr_13298_13320 = state_13285__$1;
(statearr_13298_13320[(2)] = null);

(statearr_13298_13320[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13286 === (5))){
var state_13285__$1 = state_13285;
var statearr_13299_13321 = state_13285__$1;
(statearr_13299_13321[(2)] = null);

(statearr_13299_13321[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13286 === (10))){
var inst_13277 = (state_13285[(2)]);
var state_13285__$1 = state_13285;
var statearr_13300_13322 = state_13285__$1;
(statearr_13300_13322[(2)] = inst_13277);

(statearr_13300_13322[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13286 === (8))){
var inst_13267 = (state_13285[(7)]);
var state_13285__$1 = state_13285;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13285__$1,(11),out,inst_13267);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7650__auto___13312,out))
;
return ((function (switch__7585__auto__,c__7650__auto___13312,out){
return (function() {
var cljs$core$async$state_machine__7586__auto__ = null;
var cljs$core$async$state_machine__7586__auto____0 = (function (){
var statearr_13304 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13304[(0)] = cljs$core$async$state_machine__7586__auto__);

(statearr_13304[(1)] = (1));

return statearr_13304;
});
var cljs$core$async$state_machine__7586__auto____1 = (function (state_13285){
while(true){
var ret_value__7587__auto__ = (function (){try{while(true){
var result__7588__auto__ = switch__7585__auto__.call(null,state_13285);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7588__auto__;
}
break;
}
}catch (e13305){if((e13305 instanceof Object)){
var ex__7589__auto__ = e13305;
var statearr_13306_13323 = state_13285;
(statearr_13306_13323[(5)] = ex__7589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13285);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13305;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13324 = state_13285;
state_13285 = G__13324;
continue;
} else {
return ret_value__7587__auto__;
}
break;
}
});
cljs$core$async$state_machine__7586__auto__ = function(state_13285){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7586__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7586__auto____1.call(this,state_13285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7586__auto____0;
cljs$core$async$state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7586__auto____1;
return cljs$core$async$state_machine__7586__auto__;
})()
;})(switch__7585__auto__,c__7650__auto___13312,out))
})();
var state__7652__auto__ = (function (){var statearr_13307 = f__7651__auto__.call(null);
(statearr_13307[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7650__auto___13312);

return statearr_13307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7652__auto__);
});})(c__7650__auto___13312,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async13332 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13332 = (function (map_LT_,f,ch,meta13333){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta13333 = meta13333;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13332.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13334,meta13333__$1){
var self__ = this;
var _13334__$1 = this;
return (new cljs.core.async.t_cljs$core$async13332(self__.map_LT_,self__.f,self__.ch,meta13333__$1));
});

cljs.core.async.t_cljs$core$async13332.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13334){
var self__ = this;
var _13334__$1 = this;
return self__.meta13333;
});

cljs.core.async.t_cljs$core$async13332.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async13332.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13332.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13332.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async13332.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async13335 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13335 = (function (map_LT_,f,ch,meta13333,_,fn1,meta13336){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta13333 = meta13333;
this._ = _;
this.fn1 = fn1;
this.meta13336 = meta13336;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13335.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_13337,meta13336__$1){
var self__ = this;
var _13337__$1 = this;
return (new cljs.core.async.t_cljs$core$async13335(self__.map_LT_,self__.f,self__.ch,self__.meta13333,self__._,self__.fn1,meta13336__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async13335.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_13337){
var self__ = this;
var _13337__$1 = this;
return self__.meta13336;
});})(___$1))
;

cljs.core.async.t_cljs$core$async13335.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async13335.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async13335.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__13325_SHARP_){
return f1.call(null,(((p1__13325_SHARP_ == null))?null:self__.f.call(null,p1__13325_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async13335.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13333","meta13333",-587682553,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async13332","cljs.core.async/t_cljs$core$async13332",-145013494,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta13336","meta13336",-1608421275,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async13335.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13335.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13335";

cljs.core.async.t_cljs$core$async13335.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5165__auto__,writer__5166__auto__,opt__5167__auto__){
return cljs.core._write.call(null,writer__5166__auto__,"cljs.core.async/t_cljs$core$async13335");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async13335 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13335(map_LT___$1,f__$1,ch__$1,meta13333__$1,___$2,fn1__$1,meta13336){
return (new cljs.core.async.t_cljs$core$async13335(map_LT___$1,f__$1,ch__$1,meta13333__$1,___$2,fn1__$1,meta13336));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async13335(self__.map_LT_,self__.f,self__.ch,self__.meta13333,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4555__auto__ = ret;
if(cljs.core.truth_(and__4555__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4555__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async13332.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async13332.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async13332.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13333","meta13333",-587682553,null)], null);
});

cljs.core.async.t_cljs$core$async13332.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13332.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13332";

cljs.core.async.t_cljs$core$async13332.cljs$lang$ctorPrWriter = (function (this__5165__auto__,writer__5166__auto__,opt__5167__auto__){
return cljs.core._write.call(null,writer__5166__auto__,"cljs.core.async/t_cljs$core$async13332");
});

cljs.core.async.__GT_t_cljs$core$async13332 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13332(map_LT___$1,f__$1,ch__$1,meta13333){
return (new cljs.core.async.t_cljs$core$async13332(map_LT___$1,f__$1,ch__$1,meta13333));
});

}

return (new cljs.core.async.t_cljs$core$async13332(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async13341 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13341 = (function (map_GT_,f,ch,meta13342){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta13342 = meta13342;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13341.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13343,meta13342__$1){
var self__ = this;
var _13343__$1 = this;
return (new cljs.core.async.t_cljs$core$async13341(self__.map_GT_,self__.f,self__.ch,meta13342__$1));
});

cljs.core.async.t_cljs$core$async13341.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13343){
var self__ = this;
var _13343__$1 = this;
return self__.meta13342;
});

cljs.core.async.t_cljs$core$async13341.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async13341.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13341.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async13341.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async13341.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async13341.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async13341.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13342","meta13342",-964262732,null)], null);
});

cljs.core.async.t_cljs$core$async13341.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13341.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13341";

cljs.core.async.t_cljs$core$async13341.cljs$lang$ctorPrWriter = (function (this__5165__auto__,writer__5166__auto__,opt__5167__auto__){
return cljs.core._write.call(null,writer__5166__auto__,"cljs.core.async/t_cljs$core$async13341");
});

cljs.core.async.__GT_t_cljs$core$async13341 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async13341(map_GT___$1,f__$1,ch__$1,meta13342){
return (new cljs.core.async.t_cljs$core$async13341(map_GT___$1,f__$1,ch__$1,meta13342));
});

}

return (new cljs.core.async.t_cljs$core$async13341(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async13347 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13347 = (function (filter_GT_,p,ch,meta13348){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta13348 = meta13348;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13347.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13349,meta13348__$1){
var self__ = this;
var _13349__$1 = this;
return (new cljs.core.async.t_cljs$core$async13347(self__.filter_GT_,self__.p,self__.ch,meta13348__$1));
});

cljs.core.async.t_cljs$core$async13347.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13349){
var self__ = this;
var _13349__$1 = this;
return self__.meta13348;
});

cljs.core.async.t_cljs$core$async13347.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async13347.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13347.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13347.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async13347.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async13347.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async13347.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async13347.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13348","meta13348",1016672799,null)], null);
});

cljs.core.async.t_cljs$core$async13347.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13347.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13347";

cljs.core.async.t_cljs$core$async13347.cljs$lang$ctorPrWriter = (function (this__5165__auto__,writer__5166__auto__,opt__5167__auto__){
return cljs.core._write.call(null,writer__5166__auto__,"cljs.core.async/t_cljs$core$async13347");
});

cljs.core.async.__GT_t_cljs$core$async13347 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async13347(filter_GT___$1,p__$1,ch__$1,meta13348){
return (new cljs.core.async.t_cljs$core$async13347(filter_GT___$1,p__$1,ch__$1,meta13348));
});

}

return (new cljs.core.async.t_cljs$core$async13347(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args13350 = [];
var len__5625__auto___13394 = arguments.length;
var i__5626__auto___13395 = (0);
while(true){
if((i__5626__auto___13395 < len__5625__auto___13394)){
args13350.push((arguments[i__5626__auto___13395]));

var G__13396 = (i__5626__auto___13395 + (1));
i__5626__auto___13395 = G__13396;
continue;
} else {
}
break;
}

var G__13352 = args13350.length;
switch (G__13352) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13350.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7650__auto___13398 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7650__auto___13398,out){
return (function (){
var f__7651__auto__ = (function (){var switch__7585__auto__ = ((function (c__7650__auto___13398,out){
return (function (state_13373){
var state_val_13374 = (state_13373[(1)]);
if((state_val_13374 === (7))){
var inst_13369 = (state_13373[(2)]);
var state_13373__$1 = state_13373;
var statearr_13375_13399 = state_13373__$1;
(statearr_13375_13399[(2)] = inst_13369);

(statearr_13375_13399[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13374 === (1))){
var state_13373__$1 = state_13373;
var statearr_13376_13400 = state_13373__$1;
(statearr_13376_13400[(2)] = null);

(statearr_13376_13400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13374 === (4))){
var inst_13355 = (state_13373[(7)]);
var inst_13355__$1 = (state_13373[(2)]);
var inst_13356 = (inst_13355__$1 == null);
var state_13373__$1 = (function (){var statearr_13377 = state_13373;
(statearr_13377[(7)] = inst_13355__$1);

return statearr_13377;
})();
if(cljs.core.truth_(inst_13356)){
var statearr_13378_13401 = state_13373__$1;
(statearr_13378_13401[(1)] = (5));

} else {
var statearr_13379_13402 = state_13373__$1;
(statearr_13379_13402[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13374 === (6))){
var inst_13355 = (state_13373[(7)]);
var inst_13360 = p.call(null,inst_13355);
var state_13373__$1 = state_13373;
if(cljs.core.truth_(inst_13360)){
var statearr_13380_13403 = state_13373__$1;
(statearr_13380_13403[(1)] = (8));

} else {
var statearr_13381_13404 = state_13373__$1;
(statearr_13381_13404[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13374 === (3))){
var inst_13371 = (state_13373[(2)]);
var state_13373__$1 = state_13373;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13373__$1,inst_13371);
} else {
if((state_val_13374 === (2))){
var state_13373__$1 = state_13373;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13373__$1,(4),ch);
} else {
if((state_val_13374 === (11))){
var inst_13363 = (state_13373[(2)]);
var state_13373__$1 = state_13373;
var statearr_13382_13405 = state_13373__$1;
(statearr_13382_13405[(2)] = inst_13363);

(statearr_13382_13405[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13374 === (9))){
var state_13373__$1 = state_13373;
var statearr_13383_13406 = state_13373__$1;
(statearr_13383_13406[(2)] = null);

(statearr_13383_13406[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13374 === (5))){
var inst_13358 = cljs.core.async.close_BANG_.call(null,out);
var state_13373__$1 = state_13373;
var statearr_13384_13407 = state_13373__$1;
(statearr_13384_13407[(2)] = inst_13358);

(statearr_13384_13407[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13374 === (10))){
var inst_13366 = (state_13373[(2)]);
var state_13373__$1 = (function (){var statearr_13385 = state_13373;
(statearr_13385[(8)] = inst_13366);

return statearr_13385;
})();
var statearr_13386_13408 = state_13373__$1;
(statearr_13386_13408[(2)] = null);

(statearr_13386_13408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13374 === (8))){
var inst_13355 = (state_13373[(7)]);
var state_13373__$1 = state_13373;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13373__$1,(11),out,inst_13355);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7650__auto___13398,out))
;
return ((function (switch__7585__auto__,c__7650__auto___13398,out){
return (function() {
var cljs$core$async$state_machine__7586__auto__ = null;
var cljs$core$async$state_machine__7586__auto____0 = (function (){
var statearr_13390 = [null,null,null,null,null,null,null,null,null];
(statearr_13390[(0)] = cljs$core$async$state_machine__7586__auto__);

(statearr_13390[(1)] = (1));

return statearr_13390;
});
var cljs$core$async$state_machine__7586__auto____1 = (function (state_13373){
while(true){
var ret_value__7587__auto__ = (function (){try{while(true){
var result__7588__auto__ = switch__7585__auto__.call(null,state_13373);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7588__auto__;
}
break;
}
}catch (e13391){if((e13391 instanceof Object)){
var ex__7589__auto__ = e13391;
var statearr_13392_13409 = state_13373;
(statearr_13392_13409[(5)] = ex__7589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13373);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13391;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13410 = state_13373;
state_13373 = G__13410;
continue;
} else {
return ret_value__7587__auto__;
}
break;
}
});
cljs$core$async$state_machine__7586__auto__ = function(state_13373){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7586__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7586__auto____1.call(this,state_13373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7586__auto____0;
cljs$core$async$state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7586__auto____1;
return cljs$core$async$state_machine__7586__auto__;
})()
;})(switch__7585__auto__,c__7650__auto___13398,out))
})();
var state__7652__auto__ = (function (){var statearr_13393 = f__7651__auto__.call(null);
(statearr_13393[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7650__auto___13398);

return statearr_13393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7652__auto__);
});})(c__7650__auto___13398,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args13411 = [];
var len__5625__auto___13414 = arguments.length;
var i__5626__auto___13415 = (0);
while(true){
if((i__5626__auto___13415 < len__5625__auto___13414)){
args13411.push((arguments[i__5626__auto___13415]));

var G__13416 = (i__5626__auto___13415 + (1));
i__5626__auto___13415 = G__13416;
continue;
} else {
}
break;
}

var G__13413 = args13411.length;
switch (G__13413) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13411.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__7650__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7650__auto__){
return (function (){
var f__7651__auto__ = (function (){var switch__7585__auto__ = ((function (c__7650__auto__){
return (function (state_13583){
var state_val_13584 = (state_13583[(1)]);
if((state_val_13584 === (7))){
var inst_13579 = (state_13583[(2)]);
var state_13583__$1 = state_13583;
var statearr_13585_13626 = state_13583__$1;
(statearr_13585_13626[(2)] = inst_13579);

(statearr_13585_13626[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13584 === (20))){
var inst_13549 = (state_13583[(7)]);
var inst_13560 = (state_13583[(2)]);
var inst_13561 = cljs.core.next.call(null,inst_13549);
var inst_13535 = inst_13561;
var inst_13536 = null;
var inst_13537 = (0);
var inst_13538 = (0);
var state_13583__$1 = (function (){var statearr_13586 = state_13583;
(statearr_13586[(8)] = inst_13535);

(statearr_13586[(9)] = inst_13537);

(statearr_13586[(10)] = inst_13536);

(statearr_13586[(11)] = inst_13560);

(statearr_13586[(12)] = inst_13538);

return statearr_13586;
})();
var statearr_13587_13627 = state_13583__$1;
(statearr_13587_13627[(2)] = null);

(statearr_13587_13627[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13584 === (1))){
var state_13583__$1 = state_13583;
var statearr_13588_13628 = state_13583__$1;
(statearr_13588_13628[(2)] = null);

(statearr_13588_13628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13584 === (4))){
var inst_13524 = (state_13583[(13)]);
var inst_13524__$1 = (state_13583[(2)]);
var inst_13525 = (inst_13524__$1 == null);
var state_13583__$1 = (function (){var statearr_13589 = state_13583;
(statearr_13589[(13)] = inst_13524__$1);

return statearr_13589;
})();
if(cljs.core.truth_(inst_13525)){
var statearr_13590_13629 = state_13583__$1;
(statearr_13590_13629[(1)] = (5));

} else {
var statearr_13591_13630 = state_13583__$1;
(statearr_13591_13630[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13584 === (15))){
var state_13583__$1 = state_13583;
var statearr_13595_13631 = state_13583__$1;
(statearr_13595_13631[(2)] = null);

(statearr_13595_13631[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13584 === (21))){
var state_13583__$1 = state_13583;
var statearr_13596_13632 = state_13583__$1;
(statearr_13596_13632[(2)] = null);

(statearr_13596_13632[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13584 === (13))){
var inst_13535 = (state_13583[(8)]);
var inst_13537 = (state_13583[(9)]);
var inst_13536 = (state_13583[(10)]);
var inst_13538 = (state_13583[(12)]);
var inst_13545 = (state_13583[(2)]);
var inst_13546 = (inst_13538 + (1));
var tmp13592 = inst_13535;
var tmp13593 = inst_13537;
var tmp13594 = inst_13536;
var inst_13535__$1 = tmp13592;
var inst_13536__$1 = tmp13594;
var inst_13537__$1 = tmp13593;
var inst_13538__$1 = inst_13546;
var state_13583__$1 = (function (){var statearr_13597 = state_13583;
(statearr_13597[(8)] = inst_13535__$1);

(statearr_13597[(14)] = inst_13545);

(statearr_13597[(9)] = inst_13537__$1);

(statearr_13597[(10)] = inst_13536__$1);

(statearr_13597[(12)] = inst_13538__$1);

return statearr_13597;
})();
var statearr_13598_13633 = state_13583__$1;
(statearr_13598_13633[(2)] = null);

(statearr_13598_13633[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13584 === (22))){
var state_13583__$1 = state_13583;
var statearr_13599_13634 = state_13583__$1;
(statearr_13599_13634[(2)] = null);

(statearr_13599_13634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13584 === (6))){
var inst_13524 = (state_13583[(13)]);
var inst_13533 = f.call(null,inst_13524);
var inst_13534 = cljs.core.seq.call(null,inst_13533);
var inst_13535 = inst_13534;
var inst_13536 = null;
var inst_13537 = (0);
var inst_13538 = (0);
var state_13583__$1 = (function (){var statearr_13600 = state_13583;
(statearr_13600[(8)] = inst_13535);

(statearr_13600[(9)] = inst_13537);

(statearr_13600[(10)] = inst_13536);

(statearr_13600[(12)] = inst_13538);

return statearr_13600;
})();
var statearr_13601_13635 = state_13583__$1;
(statearr_13601_13635[(2)] = null);

(statearr_13601_13635[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13584 === (17))){
var inst_13549 = (state_13583[(7)]);
var inst_13553 = cljs.core.chunk_first.call(null,inst_13549);
var inst_13554 = cljs.core.chunk_rest.call(null,inst_13549);
var inst_13555 = cljs.core.count.call(null,inst_13553);
var inst_13535 = inst_13554;
var inst_13536 = inst_13553;
var inst_13537 = inst_13555;
var inst_13538 = (0);
var state_13583__$1 = (function (){var statearr_13602 = state_13583;
(statearr_13602[(8)] = inst_13535);

(statearr_13602[(9)] = inst_13537);

(statearr_13602[(10)] = inst_13536);

(statearr_13602[(12)] = inst_13538);

return statearr_13602;
})();
var statearr_13603_13636 = state_13583__$1;
(statearr_13603_13636[(2)] = null);

(statearr_13603_13636[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13584 === (3))){
var inst_13581 = (state_13583[(2)]);
var state_13583__$1 = state_13583;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13583__$1,inst_13581);
} else {
if((state_val_13584 === (12))){
var inst_13569 = (state_13583[(2)]);
var state_13583__$1 = state_13583;
var statearr_13604_13637 = state_13583__$1;
(statearr_13604_13637[(2)] = inst_13569);

(statearr_13604_13637[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13584 === (2))){
var state_13583__$1 = state_13583;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13583__$1,(4),in$);
} else {
if((state_val_13584 === (23))){
var inst_13577 = (state_13583[(2)]);
var state_13583__$1 = state_13583;
var statearr_13605_13638 = state_13583__$1;
(statearr_13605_13638[(2)] = inst_13577);

(statearr_13605_13638[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13584 === (19))){
var inst_13564 = (state_13583[(2)]);
var state_13583__$1 = state_13583;
var statearr_13606_13639 = state_13583__$1;
(statearr_13606_13639[(2)] = inst_13564);

(statearr_13606_13639[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13584 === (11))){
var inst_13535 = (state_13583[(8)]);
var inst_13549 = (state_13583[(7)]);
var inst_13549__$1 = cljs.core.seq.call(null,inst_13535);
var state_13583__$1 = (function (){var statearr_13607 = state_13583;
(statearr_13607[(7)] = inst_13549__$1);

return statearr_13607;
})();
if(inst_13549__$1){
var statearr_13608_13640 = state_13583__$1;
(statearr_13608_13640[(1)] = (14));

} else {
var statearr_13609_13641 = state_13583__$1;
(statearr_13609_13641[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13584 === (9))){
var inst_13571 = (state_13583[(2)]);
var inst_13572 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_13583__$1 = (function (){var statearr_13610 = state_13583;
(statearr_13610[(15)] = inst_13571);

return statearr_13610;
})();
if(cljs.core.truth_(inst_13572)){
var statearr_13611_13642 = state_13583__$1;
(statearr_13611_13642[(1)] = (21));

} else {
var statearr_13612_13643 = state_13583__$1;
(statearr_13612_13643[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13584 === (5))){
var inst_13527 = cljs.core.async.close_BANG_.call(null,out);
var state_13583__$1 = state_13583;
var statearr_13613_13644 = state_13583__$1;
(statearr_13613_13644[(2)] = inst_13527);

(statearr_13613_13644[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13584 === (14))){
var inst_13549 = (state_13583[(7)]);
var inst_13551 = cljs.core.chunked_seq_QMARK_.call(null,inst_13549);
var state_13583__$1 = state_13583;
if(inst_13551){
var statearr_13614_13645 = state_13583__$1;
(statearr_13614_13645[(1)] = (17));

} else {
var statearr_13615_13646 = state_13583__$1;
(statearr_13615_13646[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13584 === (16))){
var inst_13567 = (state_13583[(2)]);
var state_13583__$1 = state_13583;
var statearr_13616_13647 = state_13583__$1;
(statearr_13616_13647[(2)] = inst_13567);

(statearr_13616_13647[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13584 === (10))){
var inst_13536 = (state_13583[(10)]);
var inst_13538 = (state_13583[(12)]);
var inst_13543 = cljs.core._nth.call(null,inst_13536,inst_13538);
var state_13583__$1 = state_13583;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13583__$1,(13),out,inst_13543);
} else {
if((state_val_13584 === (18))){
var inst_13549 = (state_13583[(7)]);
var inst_13558 = cljs.core.first.call(null,inst_13549);
var state_13583__$1 = state_13583;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13583__$1,(20),out,inst_13558);
} else {
if((state_val_13584 === (8))){
var inst_13537 = (state_13583[(9)]);
var inst_13538 = (state_13583[(12)]);
var inst_13540 = (inst_13538 < inst_13537);
var inst_13541 = inst_13540;
var state_13583__$1 = state_13583;
if(cljs.core.truth_(inst_13541)){
var statearr_13617_13648 = state_13583__$1;
(statearr_13617_13648[(1)] = (10));

} else {
var statearr_13618_13649 = state_13583__$1;
(statearr_13618_13649[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7650__auto__))
;
return ((function (switch__7585__auto__,c__7650__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__7586__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__7586__auto____0 = (function (){
var statearr_13622 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13622[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__7586__auto__);

(statearr_13622[(1)] = (1));

return statearr_13622;
});
var cljs$core$async$mapcat_STAR__$_state_machine__7586__auto____1 = (function (state_13583){
while(true){
var ret_value__7587__auto__ = (function (){try{while(true){
var result__7588__auto__ = switch__7585__auto__.call(null,state_13583);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7588__auto__;
}
break;
}
}catch (e13623){if((e13623 instanceof Object)){
var ex__7589__auto__ = e13623;
var statearr_13624_13650 = state_13583;
(statearr_13624_13650[(5)] = ex__7589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13583);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13623;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13651 = state_13583;
state_13583 = G__13651;
continue;
} else {
return ret_value__7587__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__7586__auto__ = function(state_13583){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__7586__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__7586__auto____1.call(this,state_13583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__7586__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__7586__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__7586__auto__;
})()
;})(switch__7585__auto__,c__7650__auto__))
})();
var state__7652__auto__ = (function (){var statearr_13625 = f__7651__auto__.call(null);
(statearr_13625[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7650__auto__);

return statearr_13625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7652__auto__);
});})(c__7650__auto__))
);

return c__7650__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args13652 = [];
var len__5625__auto___13655 = arguments.length;
var i__5626__auto___13656 = (0);
while(true){
if((i__5626__auto___13656 < len__5625__auto___13655)){
args13652.push((arguments[i__5626__auto___13656]));

var G__13657 = (i__5626__auto___13656 + (1));
i__5626__auto___13656 = G__13657;
continue;
} else {
}
break;
}

var G__13654 = args13652.length;
switch (G__13654) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13652.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args13659 = [];
var len__5625__auto___13662 = arguments.length;
var i__5626__auto___13663 = (0);
while(true){
if((i__5626__auto___13663 < len__5625__auto___13662)){
args13659.push((arguments[i__5626__auto___13663]));

var G__13664 = (i__5626__auto___13663 + (1));
i__5626__auto___13663 = G__13664;
continue;
} else {
}
break;
}

var G__13661 = args13659.length;
switch (G__13661) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13659.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args13666 = [];
var len__5625__auto___13717 = arguments.length;
var i__5626__auto___13718 = (0);
while(true){
if((i__5626__auto___13718 < len__5625__auto___13717)){
args13666.push((arguments[i__5626__auto___13718]));

var G__13719 = (i__5626__auto___13718 + (1));
i__5626__auto___13718 = G__13719;
continue;
} else {
}
break;
}

var G__13668 = args13666.length;
switch (G__13668) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13666.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7650__auto___13721 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7650__auto___13721,out){
return (function (){
var f__7651__auto__ = (function (){var switch__7585__auto__ = ((function (c__7650__auto___13721,out){
return (function (state_13692){
var state_val_13693 = (state_13692[(1)]);
if((state_val_13693 === (7))){
var inst_13687 = (state_13692[(2)]);
var state_13692__$1 = state_13692;
var statearr_13694_13722 = state_13692__$1;
(statearr_13694_13722[(2)] = inst_13687);

(statearr_13694_13722[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13693 === (1))){
var inst_13669 = null;
var state_13692__$1 = (function (){var statearr_13695 = state_13692;
(statearr_13695[(7)] = inst_13669);

return statearr_13695;
})();
var statearr_13696_13723 = state_13692__$1;
(statearr_13696_13723[(2)] = null);

(statearr_13696_13723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13693 === (4))){
var inst_13672 = (state_13692[(8)]);
var inst_13672__$1 = (state_13692[(2)]);
var inst_13673 = (inst_13672__$1 == null);
var inst_13674 = cljs.core.not.call(null,inst_13673);
var state_13692__$1 = (function (){var statearr_13697 = state_13692;
(statearr_13697[(8)] = inst_13672__$1);

return statearr_13697;
})();
if(inst_13674){
var statearr_13698_13724 = state_13692__$1;
(statearr_13698_13724[(1)] = (5));

} else {
var statearr_13699_13725 = state_13692__$1;
(statearr_13699_13725[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13693 === (6))){
var state_13692__$1 = state_13692;
var statearr_13700_13726 = state_13692__$1;
(statearr_13700_13726[(2)] = null);

(statearr_13700_13726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13693 === (3))){
var inst_13689 = (state_13692[(2)]);
var inst_13690 = cljs.core.async.close_BANG_.call(null,out);
var state_13692__$1 = (function (){var statearr_13701 = state_13692;
(statearr_13701[(9)] = inst_13689);

return statearr_13701;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13692__$1,inst_13690);
} else {
if((state_val_13693 === (2))){
var state_13692__$1 = state_13692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13692__$1,(4),ch);
} else {
if((state_val_13693 === (11))){
var inst_13672 = (state_13692[(8)]);
var inst_13681 = (state_13692[(2)]);
var inst_13669 = inst_13672;
var state_13692__$1 = (function (){var statearr_13702 = state_13692;
(statearr_13702[(10)] = inst_13681);

(statearr_13702[(7)] = inst_13669);

return statearr_13702;
})();
var statearr_13703_13727 = state_13692__$1;
(statearr_13703_13727[(2)] = null);

(statearr_13703_13727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13693 === (9))){
var inst_13672 = (state_13692[(8)]);
var state_13692__$1 = state_13692;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13692__$1,(11),out,inst_13672);
} else {
if((state_val_13693 === (5))){
var inst_13672 = (state_13692[(8)]);
var inst_13669 = (state_13692[(7)]);
var inst_13676 = cljs.core._EQ_.call(null,inst_13672,inst_13669);
var state_13692__$1 = state_13692;
if(inst_13676){
var statearr_13705_13728 = state_13692__$1;
(statearr_13705_13728[(1)] = (8));

} else {
var statearr_13706_13729 = state_13692__$1;
(statearr_13706_13729[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13693 === (10))){
var inst_13684 = (state_13692[(2)]);
var state_13692__$1 = state_13692;
var statearr_13707_13730 = state_13692__$1;
(statearr_13707_13730[(2)] = inst_13684);

(statearr_13707_13730[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13693 === (8))){
var inst_13669 = (state_13692[(7)]);
var tmp13704 = inst_13669;
var inst_13669__$1 = tmp13704;
var state_13692__$1 = (function (){var statearr_13708 = state_13692;
(statearr_13708[(7)] = inst_13669__$1);

return statearr_13708;
})();
var statearr_13709_13731 = state_13692__$1;
(statearr_13709_13731[(2)] = null);

(statearr_13709_13731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7650__auto___13721,out))
;
return ((function (switch__7585__auto__,c__7650__auto___13721,out){
return (function() {
var cljs$core$async$state_machine__7586__auto__ = null;
var cljs$core$async$state_machine__7586__auto____0 = (function (){
var statearr_13713 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13713[(0)] = cljs$core$async$state_machine__7586__auto__);

(statearr_13713[(1)] = (1));

return statearr_13713;
});
var cljs$core$async$state_machine__7586__auto____1 = (function (state_13692){
while(true){
var ret_value__7587__auto__ = (function (){try{while(true){
var result__7588__auto__ = switch__7585__auto__.call(null,state_13692);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7588__auto__;
}
break;
}
}catch (e13714){if((e13714 instanceof Object)){
var ex__7589__auto__ = e13714;
var statearr_13715_13732 = state_13692;
(statearr_13715_13732[(5)] = ex__7589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13692);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13714;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13733 = state_13692;
state_13692 = G__13733;
continue;
} else {
return ret_value__7587__auto__;
}
break;
}
});
cljs$core$async$state_machine__7586__auto__ = function(state_13692){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7586__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7586__auto____1.call(this,state_13692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7586__auto____0;
cljs$core$async$state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7586__auto____1;
return cljs$core$async$state_machine__7586__auto__;
})()
;})(switch__7585__auto__,c__7650__auto___13721,out))
})();
var state__7652__auto__ = (function (){var statearr_13716 = f__7651__auto__.call(null);
(statearr_13716[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7650__auto___13721);

return statearr_13716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7652__auto__);
});})(c__7650__auto___13721,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args13734 = [];
var len__5625__auto___13804 = arguments.length;
var i__5626__auto___13805 = (0);
while(true){
if((i__5626__auto___13805 < len__5625__auto___13804)){
args13734.push((arguments[i__5626__auto___13805]));

var G__13806 = (i__5626__auto___13805 + (1));
i__5626__auto___13805 = G__13806;
continue;
} else {
}
break;
}

var G__13736 = args13734.length;
switch (G__13736) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13734.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7650__auto___13808 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7650__auto___13808,out){
return (function (){
var f__7651__auto__ = (function (){var switch__7585__auto__ = ((function (c__7650__auto___13808,out){
return (function (state_13774){
var state_val_13775 = (state_13774[(1)]);
if((state_val_13775 === (7))){
var inst_13770 = (state_13774[(2)]);
var state_13774__$1 = state_13774;
var statearr_13776_13809 = state_13774__$1;
(statearr_13776_13809[(2)] = inst_13770);

(statearr_13776_13809[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (1))){
var inst_13737 = (new Array(n));
var inst_13738 = inst_13737;
var inst_13739 = (0);
var state_13774__$1 = (function (){var statearr_13777 = state_13774;
(statearr_13777[(7)] = inst_13738);

(statearr_13777[(8)] = inst_13739);

return statearr_13777;
})();
var statearr_13778_13810 = state_13774__$1;
(statearr_13778_13810[(2)] = null);

(statearr_13778_13810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (4))){
var inst_13742 = (state_13774[(9)]);
var inst_13742__$1 = (state_13774[(2)]);
var inst_13743 = (inst_13742__$1 == null);
var inst_13744 = cljs.core.not.call(null,inst_13743);
var state_13774__$1 = (function (){var statearr_13779 = state_13774;
(statearr_13779[(9)] = inst_13742__$1);

return statearr_13779;
})();
if(inst_13744){
var statearr_13780_13811 = state_13774__$1;
(statearr_13780_13811[(1)] = (5));

} else {
var statearr_13781_13812 = state_13774__$1;
(statearr_13781_13812[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (15))){
var inst_13764 = (state_13774[(2)]);
var state_13774__$1 = state_13774;
var statearr_13782_13813 = state_13774__$1;
(statearr_13782_13813[(2)] = inst_13764);

(statearr_13782_13813[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (13))){
var state_13774__$1 = state_13774;
var statearr_13783_13814 = state_13774__$1;
(statearr_13783_13814[(2)] = null);

(statearr_13783_13814[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (6))){
var inst_13739 = (state_13774[(8)]);
var inst_13760 = (inst_13739 > (0));
var state_13774__$1 = state_13774;
if(cljs.core.truth_(inst_13760)){
var statearr_13784_13815 = state_13774__$1;
(statearr_13784_13815[(1)] = (12));

} else {
var statearr_13785_13816 = state_13774__$1;
(statearr_13785_13816[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (3))){
var inst_13772 = (state_13774[(2)]);
var state_13774__$1 = state_13774;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13774__$1,inst_13772);
} else {
if((state_val_13775 === (12))){
var inst_13738 = (state_13774[(7)]);
var inst_13762 = cljs.core.vec.call(null,inst_13738);
var state_13774__$1 = state_13774;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13774__$1,(15),out,inst_13762);
} else {
if((state_val_13775 === (2))){
var state_13774__$1 = state_13774;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13774__$1,(4),ch);
} else {
if((state_val_13775 === (11))){
var inst_13754 = (state_13774[(2)]);
var inst_13755 = (new Array(n));
var inst_13738 = inst_13755;
var inst_13739 = (0);
var state_13774__$1 = (function (){var statearr_13786 = state_13774;
(statearr_13786[(7)] = inst_13738);

(statearr_13786[(8)] = inst_13739);

(statearr_13786[(10)] = inst_13754);

return statearr_13786;
})();
var statearr_13787_13817 = state_13774__$1;
(statearr_13787_13817[(2)] = null);

(statearr_13787_13817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (9))){
var inst_13738 = (state_13774[(7)]);
var inst_13752 = cljs.core.vec.call(null,inst_13738);
var state_13774__$1 = state_13774;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13774__$1,(11),out,inst_13752);
} else {
if((state_val_13775 === (5))){
var inst_13738 = (state_13774[(7)]);
var inst_13747 = (state_13774[(11)]);
var inst_13742 = (state_13774[(9)]);
var inst_13739 = (state_13774[(8)]);
var inst_13746 = (inst_13738[inst_13739] = inst_13742);
var inst_13747__$1 = (inst_13739 + (1));
var inst_13748 = (inst_13747__$1 < n);
var state_13774__$1 = (function (){var statearr_13788 = state_13774;
(statearr_13788[(11)] = inst_13747__$1);

(statearr_13788[(12)] = inst_13746);

return statearr_13788;
})();
if(cljs.core.truth_(inst_13748)){
var statearr_13789_13818 = state_13774__$1;
(statearr_13789_13818[(1)] = (8));

} else {
var statearr_13790_13819 = state_13774__$1;
(statearr_13790_13819[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (14))){
var inst_13767 = (state_13774[(2)]);
var inst_13768 = cljs.core.async.close_BANG_.call(null,out);
var state_13774__$1 = (function (){var statearr_13792 = state_13774;
(statearr_13792[(13)] = inst_13767);

return statearr_13792;
})();
var statearr_13793_13820 = state_13774__$1;
(statearr_13793_13820[(2)] = inst_13768);

(statearr_13793_13820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (10))){
var inst_13758 = (state_13774[(2)]);
var state_13774__$1 = state_13774;
var statearr_13794_13821 = state_13774__$1;
(statearr_13794_13821[(2)] = inst_13758);

(statearr_13794_13821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13775 === (8))){
var inst_13738 = (state_13774[(7)]);
var inst_13747 = (state_13774[(11)]);
var tmp13791 = inst_13738;
var inst_13738__$1 = tmp13791;
var inst_13739 = inst_13747;
var state_13774__$1 = (function (){var statearr_13795 = state_13774;
(statearr_13795[(7)] = inst_13738__$1);

(statearr_13795[(8)] = inst_13739);

return statearr_13795;
})();
var statearr_13796_13822 = state_13774__$1;
(statearr_13796_13822[(2)] = null);

(statearr_13796_13822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7650__auto___13808,out))
;
return ((function (switch__7585__auto__,c__7650__auto___13808,out){
return (function() {
var cljs$core$async$state_machine__7586__auto__ = null;
var cljs$core$async$state_machine__7586__auto____0 = (function (){
var statearr_13800 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13800[(0)] = cljs$core$async$state_machine__7586__auto__);

(statearr_13800[(1)] = (1));

return statearr_13800;
});
var cljs$core$async$state_machine__7586__auto____1 = (function (state_13774){
while(true){
var ret_value__7587__auto__ = (function (){try{while(true){
var result__7588__auto__ = switch__7585__auto__.call(null,state_13774);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7588__auto__;
}
break;
}
}catch (e13801){if((e13801 instanceof Object)){
var ex__7589__auto__ = e13801;
var statearr_13802_13823 = state_13774;
(statearr_13802_13823[(5)] = ex__7589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13774);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13801;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13824 = state_13774;
state_13774 = G__13824;
continue;
} else {
return ret_value__7587__auto__;
}
break;
}
});
cljs$core$async$state_machine__7586__auto__ = function(state_13774){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7586__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7586__auto____1.call(this,state_13774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7586__auto____0;
cljs$core$async$state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7586__auto____1;
return cljs$core$async$state_machine__7586__auto__;
})()
;})(switch__7585__auto__,c__7650__auto___13808,out))
})();
var state__7652__auto__ = (function (){var statearr_13803 = f__7651__auto__.call(null);
(statearr_13803[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7650__auto___13808);

return statearr_13803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7652__auto__);
});})(c__7650__auto___13808,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args13825 = [];
var len__5625__auto___13899 = arguments.length;
var i__5626__auto___13900 = (0);
while(true){
if((i__5626__auto___13900 < len__5625__auto___13899)){
args13825.push((arguments[i__5626__auto___13900]));

var G__13901 = (i__5626__auto___13900 + (1));
i__5626__auto___13900 = G__13901;
continue;
} else {
}
break;
}

var G__13827 = args13825.length;
switch (G__13827) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13825.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7650__auto___13903 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7650__auto___13903,out){
return (function (){
var f__7651__auto__ = (function (){var switch__7585__auto__ = ((function (c__7650__auto___13903,out){
return (function (state_13869){
var state_val_13870 = (state_13869[(1)]);
if((state_val_13870 === (7))){
var inst_13865 = (state_13869[(2)]);
var state_13869__$1 = state_13869;
var statearr_13871_13904 = state_13869__$1;
(statearr_13871_13904[(2)] = inst_13865);

(statearr_13871_13904[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13870 === (1))){
var inst_13828 = [];
var inst_13829 = inst_13828;
var inst_13830 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_13869__$1 = (function (){var statearr_13872 = state_13869;
(statearr_13872[(7)] = inst_13830);

(statearr_13872[(8)] = inst_13829);

return statearr_13872;
})();
var statearr_13873_13905 = state_13869__$1;
(statearr_13873_13905[(2)] = null);

(statearr_13873_13905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13870 === (4))){
var inst_13833 = (state_13869[(9)]);
var inst_13833__$1 = (state_13869[(2)]);
var inst_13834 = (inst_13833__$1 == null);
var inst_13835 = cljs.core.not.call(null,inst_13834);
var state_13869__$1 = (function (){var statearr_13874 = state_13869;
(statearr_13874[(9)] = inst_13833__$1);

return statearr_13874;
})();
if(inst_13835){
var statearr_13875_13906 = state_13869__$1;
(statearr_13875_13906[(1)] = (5));

} else {
var statearr_13876_13907 = state_13869__$1;
(statearr_13876_13907[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13870 === (15))){
var inst_13859 = (state_13869[(2)]);
var state_13869__$1 = state_13869;
var statearr_13877_13908 = state_13869__$1;
(statearr_13877_13908[(2)] = inst_13859);

(statearr_13877_13908[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13870 === (13))){
var state_13869__$1 = state_13869;
var statearr_13878_13909 = state_13869__$1;
(statearr_13878_13909[(2)] = null);

(statearr_13878_13909[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13870 === (6))){
var inst_13829 = (state_13869[(8)]);
var inst_13854 = inst_13829.length;
var inst_13855 = (inst_13854 > (0));
var state_13869__$1 = state_13869;
if(cljs.core.truth_(inst_13855)){
var statearr_13879_13910 = state_13869__$1;
(statearr_13879_13910[(1)] = (12));

} else {
var statearr_13880_13911 = state_13869__$1;
(statearr_13880_13911[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13870 === (3))){
var inst_13867 = (state_13869[(2)]);
var state_13869__$1 = state_13869;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13869__$1,inst_13867);
} else {
if((state_val_13870 === (12))){
var inst_13829 = (state_13869[(8)]);
var inst_13857 = cljs.core.vec.call(null,inst_13829);
var state_13869__$1 = state_13869;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13869__$1,(15),out,inst_13857);
} else {
if((state_val_13870 === (2))){
var state_13869__$1 = state_13869;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13869__$1,(4),ch);
} else {
if((state_val_13870 === (11))){
var inst_13833 = (state_13869[(9)]);
var inst_13837 = (state_13869[(10)]);
var inst_13847 = (state_13869[(2)]);
var inst_13848 = [];
var inst_13849 = inst_13848.push(inst_13833);
var inst_13829 = inst_13848;
var inst_13830 = inst_13837;
var state_13869__$1 = (function (){var statearr_13881 = state_13869;
(statearr_13881[(7)] = inst_13830);

(statearr_13881[(11)] = inst_13847);

(statearr_13881[(12)] = inst_13849);

(statearr_13881[(8)] = inst_13829);

return statearr_13881;
})();
var statearr_13882_13912 = state_13869__$1;
(statearr_13882_13912[(2)] = null);

(statearr_13882_13912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13870 === (9))){
var inst_13829 = (state_13869[(8)]);
var inst_13845 = cljs.core.vec.call(null,inst_13829);
var state_13869__$1 = state_13869;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13869__$1,(11),out,inst_13845);
} else {
if((state_val_13870 === (5))){
var inst_13833 = (state_13869[(9)]);
var inst_13837 = (state_13869[(10)]);
var inst_13830 = (state_13869[(7)]);
var inst_13837__$1 = f.call(null,inst_13833);
var inst_13838 = cljs.core._EQ_.call(null,inst_13837__$1,inst_13830);
var inst_13839 = cljs.core.keyword_identical_QMARK_.call(null,inst_13830,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_13840 = (inst_13838) || (inst_13839);
var state_13869__$1 = (function (){var statearr_13883 = state_13869;
(statearr_13883[(10)] = inst_13837__$1);

return statearr_13883;
})();
if(cljs.core.truth_(inst_13840)){
var statearr_13884_13913 = state_13869__$1;
(statearr_13884_13913[(1)] = (8));

} else {
var statearr_13885_13914 = state_13869__$1;
(statearr_13885_13914[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13870 === (14))){
var inst_13862 = (state_13869[(2)]);
var inst_13863 = cljs.core.async.close_BANG_.call(null,out);
var state_13869__$1 = (function (){var statearr_13887 = state_13869;
(statearr_13887[(13)] = inst_13862);

return statearr_13887;
})();
var statearr_13888_13915 = state_13869__$1;
(statearr_13888_13915[(2)] = inst_13863);

(statearr_13888_13915[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13870 === (10))){
var inst_13852 = (state_13869[(2)]);
var state_13869__$1 = state_13869;
var statearr_13889_13916 = state_13869__$1;
(statearr_13889_13916[(2)] = inst_13852);

(statearr_13889_13916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13870 === (8))){
var inst_13833 = (state_13869[(9)]);
var inst_13837 = (state_13869[(10)]);
var inst_13829 = (state_13869[(8)]);
var inst_13842 = inst_13829.push(inst_13833);
var tmp13886 = inst_13829;
var inst_13829__$1 = tmp13886;
var inst_13830 = inst_13837;
var state_13869__$1 = (function (){var statearr_13890 = state_13869;
(statearr_13890[(7)] = inst_13830);

(statearr_13890[(8)] = inst_13829__$1);

(statearr_13890[(14)] = inst_13842);

return statearr_13890;
})();
var statearr_13891_13917 = state_13869__$1;
(statearr_13891_13917[(2)] = null);

(statearr_13891_13917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7650__auto___13903,out))
;
return ((function (switch__7585__auto__,c__7650__auto___13903,out){
return (function() {
var cljs$core$async$state_machine__7586__auto__ = null;
var cljs$core$async$state_machine__7586__auto____0 = (function (){
var statearr_13895 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13895[(0)] = cljs$core$async$state_machine__7586__auto__);

(statearr_13895[(1)] = (1));

return statearr_13895;
});
var cljs$core$async$state_machine__7586__auto____1 = (function (state_13869){
while(true){
var ret_value__7587__auto__ = (function (){try{while(true){
var result__7588__auto__ = switch__7585__auto__.call(null,state_13869);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7588__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7588__auto__;
}
break;
}
}catch (e13896){if((e13896 instanceof Object)){
var ex__7589__auto__ = e13896;
var statearr_13897_13918 = state_13869;
(statearr_13897_13918[(5)] = ex__7589__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13869);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13896;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7587__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13919 = state_13869;
state_13869 = G__13919;
continue;
} else {
return ret_value__7587__auto__;
}
break;
}
});
cljs$core$async$state_machine__7586__auto__ = function(state_13869){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7586__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7586__auto____1.call(this,state_13869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7586__auto____0;
cljs$core$async$state_machine__7586__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7586__auto____1;
return cljs$core$async$state_machine__7586__auto__;
})()
;})(switch__7585__auto__,c__7650__auto___13903,out))
})();
var state__7652__auto__ = (function (){var statearr_13898 = f__7651__auto__.call(null);
(statearr_13898[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7650__auto___13903);

return statearr_13898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7652__auto__);
});})(c__7650__auto___13903,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map