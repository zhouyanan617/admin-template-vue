(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Test"],{"4b71":function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ACard",[t("img",{directives:[{name:"preview-img",rawName:"v-preview-img"}],attrs:{src:"https://cn.vuejs.org/images/logo.png",width:"100",height:"100",alt:"logo"}}),t("VTable",{attrs:{"selected-keys":e.selectedKeys,"row-key":"key",columns:e.columns,http:e.getTableData,"page-size":4,current:2,"is-xlsx":""},on:{"update:selectedKeys":function(a){e.selectedKeys=a},"update:selected-keys":function(a){e.selectedKeys=a}},scopedSlots:e._u([{key:"name",fn:function(a){var n=a.value;return[t("ATag",{staticClass:"v-cell-tag"},[e._v(e._s(n))])]}}])})],1)},s=[],r=t("aa2a"),o=t("fd4e"),d={name:"Test",data:function(){return{columns:[{title:"Name",key:"name"},{title:"Age",key:"age"},{title:"Address",key:"address"}],selectedKeys:[]}},created:function(){var e=this;Object(o["h"])(5e3).then((function(){return e.selectedKeys.push("21","13","62","23")}))},methods:{getTableData:r["b"]}},i=d,c=t("2877"),l=Object(c["a"])(i,n,s,!1,null,null,null);a["default"]=l.exports},aa2a:function(e,a,t){"use strict";t.d(a,"a",(function(){return s})),t.d(a,"b",(function(){return o}));t("fb6a"),t("d3b7");var n=t("0e98");function s(e,a){return n["a"].request({url:"articles",method:"get",params:e,cancelToken:a})}var r=[{key:"15",name:"John Brown",age:32,address:"New York No. 1 Lake Park"},{key:"21",name:"Joe Black",age:42,address:"London No. 1 Lake Park"},{key:"8",name:"Jim Green",age:32,address:"Sidney No. 1 Lake Park"},{key:"13",name:"Jim Red",age:32,address:"London No. 2 Lake Park"},{key:"62",name:"Jim Red",age:32,address:"New York No. 2 Lake Park"},{key:"48",name:"Jim Red",age:32,address:"London No. 3 Lake Park"},{key:"23",name:"Jim Red",age:32,address:"London No. 4 Lake Park"},{key:"34",name:"Jim Red",age:32,address:"London No. 5 Lake Park"},{key:"51",name:"Jim Red",age:32,address:"London No. 6 Lake Park"}];function o(e){var a=(e.page-1)*e.pageSize;return Promise.resolve({data:r.slice(a,a+e.pageSize),meta:{total:r.length}})}}}]);