(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21842a"],{c9db:function(e,t,n){"use strict";n.r(t);var c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("\n    test2\n    "),n("AInput"),n("AButton",{attrs:{type:"primary"},on:{click:e.clearCache}},[e._v("清理‘测试11’缓存")])],1)},o=[],l=n("0e98");const s=function(e,t){return l["a"].request({url:"articles",method:"get",params:e,cancelToken:t})};var a=n("bc3a"),i=n.n(a);const r=i.a.CancelToken,u=function(){this.globalCancel=null,this.globalToken=function(){return this.__token?this.__token:this.__token=new r(e=>this.globalCancel=e)},this.__list=new Map,this.cancel=function(e,t){if(null!=e&&"function"===typeof this.__list.get(e)){const n=this.__list.get(e)(t);return this.__list.delete(e),n}throw new Error("未声明对应的令牌 token")},this.token=function(e){if(null!=e)return new r(t=>this.__list.set(e,t));throw new Error("缺少令牌 token 标识")}};var h=u,_={name:"Test2",mounted(){const e=new h;s({},e.token(1)).then(e=>console.log(e)).catch(e=>console.log(e)),e.cancel(1,"canceled1"),setTimeout(()=>{s({},e.token("articles2")).then(e=>console.log(e)).catch(e=>console.log(e)),e.cancel("articles2","canceled2")},200)},methods:{clearCache(){this.$store.commit("app/clearAlive",{page:"Page11",alive:"Test1"})}}},k=_,p=n("2877"),w=Object(p["a"])(k,c,o,!1,null,"7984c20e",null);t["default"]=w.exports}}]);