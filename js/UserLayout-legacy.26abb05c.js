(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["UserLayout"],{"0578":function(e,t,r){"use strict";var n=r("4913"),a=r.n(n);a.a},"07a1":function(e,t,r){"use strict";var n=function(e,t){var r=t._c;return r("div",{class:{placeholder:t.props.isFixed}},[r("footer",{class:["footer",{"footer-fixed":t.props.isFixed}],style:{width:"calc(100% - "+(t.props.isFixed?t.props.width:0)+"px)"}},[r("ALayoutFooter",[t._v("\n            Copyright © 2018\n            "+t._s(t.props.nowYear>2018?" - "+t.props.nowYear:null)+" "+t._s(t.parent.$app.org)+"\n            All Rights Reserved\n        ")])],1)])},a=[],o={name:"Footer",props:{isFixed:{type:Boolean,default:!1},width:{type:Number,default:0},nowYear:{type:Number,default:(new Date).getFullYear()}}},i=o,s=(r("5de2"),r("2877")),u=Object(s["a"])(i,n,a,!0,null,"4eb02306",null);t["a"]=u.exports},"11f8":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ALayout",{staticClass:"container"},[r("ALayoutContent",[r("RouterView")],1),r("Footer")],1)},a=[],o=r("07a1"),i=r("56dc"),s={name:"UserLayout",components:{Footer:o["a"]},mixins:[i["a"]]},u=s,c=(r("0578"),r("2877")),l=Object(c["a"])(u,n,a,!1,null,"342045ba",null);t["default"]=l.exports},4913:function(e,t,r){},"56dc":function(e,t,r){"use strict";r.d(t,"a",function(){return s}),r.d(t,"b",function(){return i});var n=r("2f62");function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){o(e,t,r[t])})}return e}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var i=[{text:"薄暮",name:"dust-red",variables:{"@primary-color":"#f5222d"}},{text:"金盏花",name:"alendula-gold",variables:{"@primary-color":"#faad14"}},{text:"极光绿",name:"polar-green",variables:{"@primary-color":"#52C41A"}},{text:"明青",name:"cyan",variables:{"@primary-color":"#13C2C2"}},{text:"拂晓蓝",name:"daybreak-blue",variables:{"@primary-color":"#1890FF"}},{text:"酱紫",name:"golden-purple",variables:{"@primary-color":"#722ED1"}}],s={computed:a({},Object(n["e"])("app",{theme:function(e){return e.layout.theme}})),watch:{theme:{handler:function(e,t){this.$_theme_updateTheme(e,t)}}},created:function(){this.$_theme_updateTheme=this.$util.throttle(this.$_theme_updateTheme,1200,!0),this.$_theme_init(),this.$_theme_updateClass(this.theme)},methods:a({},Object(n["d"])("app",["setLayout"]),{$_theme_init:function(){var e=this.$db.get("layout",{}).theme;this.setLayout({theme:e})},$_theme_updateTheme:function(e){var t=this,r=i.find(function(t){return t.name===e});(r||window.less)&&window.less.modifyVars(r.variables).then(function(){return t.$_theme_updateClass(e)}).catch(function(){return t.$message.error("主题更换失败！")})},$_theme_updateClass:function(e){i.forEach(function(e){return document.body.classList.remove(e.name)}),document.body.classList.add(e)}})}},"5de2":function(e,t,r){"use strict";var n=r("64f3"),a=r.n(n);a.a},"64f3":function(e,t,r){}}]);