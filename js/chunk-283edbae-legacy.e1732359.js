(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-283edbae"],{aa2a:function(e,a,n){"use strict";n.d(a,"a",(function(){return o})),n.d(a,"b",(function(){return d}));n("fb6a"),n("d3b7");var r=n("a14c");function o(e,a){return r["b"].get("articles",{params:e,cancelToken:a})}var t=[{key:"15",name:"John Brown",age:32,address:"New York No. 1 Lake Park"},{key:"21",name:"Joe Black",age:42,address:"London No. 1 Lake Park"},{key:"8",name:"Jim Green",age:32,address:"Sidney No. 1 Lake Park"},{key:"13",name:"Jim Red",age:32,address:"London No. 2 Lake Park"},{key:"62",name:"Jim Red",age:32,address:"New York No. 2 Lake Park"},{key:"48",name:"Jim Red",age:32,address:"London No. 3 Lake Park"},{key:"23",name:"Jim Red",age:32,address:"London No. 4 Lake Park"},{key:"34",name:"Jim Red",age:32,address:"London No. 5 Lake Park"},{key:"51",name:"Jim Red",age:32,address:"London No. 6 Lake Park"}];function d(e){var a=(e.page-1)*e.pageSize;return Promise.resolve({data:t.slice(a,a+e.pageSize),meta:{total:t.length}})}},c9db:function(e,a,n){"use strict";n.r(a);var r=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",[e._v(" test2 "),n("AInput"),n("AButton",{attrs:{type:"primary"},on:{click:e.clearCache}},[e._v("清理‘测试11’缓存")])],1)},o=[],t=n("aa2a"),d=n("a14c"),s=new d["a"],c={name:"Test2",mounted:function(){var e="articles",a=s.create(e);Object(t["a"])({},a),s.abort(e,"has aborted")},methods:{clearCache:function(){this.$store.commit("app/clearAlive",{page:"Page11",alive:"Test1"})}}},i=c,k=n("2877"),m=Object(k["a"])(i,r,o,!1,null,null,null);a["default"]=m.exports}}]);