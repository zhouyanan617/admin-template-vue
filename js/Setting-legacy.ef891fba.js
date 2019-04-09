(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Setting"],{"1d7b":function(t,e,s){"use strict";var i=s("e3c2"),r=s.n(i);r.a},a3ba:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ADrawer",{staticClass:"setting",attrs:{visible:t.visible,width:286,title:"界面设置"},on:{close:t.onClose}},[s("div",{staticClass:"setting-option-mb"},[s("h4",{staticClass:"setting-title"},[t._v("导航菜单风格")]),s("ATooltip",{attrs:{title:"暗色"}},[s("div",{staticClass:"setting-layout",on:{click:function(e){return t.toggle("menuTheme","dark")}}},[t._m(0),s("AIcon",{directives:[{name:"show",rawName:"v-show",value:"dark"===t.menuTheme,expression:"menuTheme === 'dark'"}],staticClass:"check-icon v-theme-color",attrs:{type:"check"}})],1)]),s("ATooltip",{attrs:{title:"亮色"}},[s("div",{staticClass:"setting-layout",on:{click:function(e){return t.toggle("menuTheme","light")}}},[t._m(1),s("AIcon",{directives:[{name:"show",rawName:"v-show",value:"light"===t.menuTheme,expression:"menuTheme === 'light'"}],staticClass:"check-icon v-theme-color",attrs:{type:"check"}})],1)])],1),s("div",[s("h4",{staticClass:"setting-title"},[t._v("导航菜单布局")]),s("ATooltip",{attrs:{title:"侧边菜单"}},[s("div",{staticClass:"setting-layout",on:{click:function(e){return t.toggle("isVertical",!0)}}},[t._m(2),s("AIcon",{directives:[{name:"show",rawName:"v-show",value:t.isVertical,expression:"isVertical"}],staticClass:"check-icon v-theme-color",attrs:{type:"check"}})],1)]),s("ATooltip",{attrs:{title:"顶部菜单"}},[s("div",{class:{"setting-layout":!0,"v-disabled":t.isMobileDevice},on:{click:function(e){!t.isMobileDevice&&t.toggle("isVertical",!1)}}},[t._m(3),s("AIcon",{directives:[{name:"show",rawName:"v-show",value:!t.isVertical,expression:"!isVertical"}],staticClass:"check-icon v-theme-color",attrs:{type:"check"}})],1)]),s("ADivider")],1),t.themeList?s("div",{staticClass:"setting-option-mb"},[s("h4",{staticClass:"setting-title"},[t._v("主题风格")]),s("ul",{staticClass:"setting-theme v-to-zero"},[t._l(t.themeList,function(e){return[s("ATooltip",{key:e.name,attrs:{title:e.text}},[s("li",{staticClass:"v-to-zero v-pointer v-center",style:{backgroundColor:e.variables["@primary-color"]},on:{click:function(s){return t.toggle("theme",e.name)}}},[s("AIcon",{directives:[{name:"show",rawName:"v-show",value:t.theme===e.name,expression:"theme === item.name"}],staticClass:"check-icon",attrs:{type:"check"}})],1)])]})],2),s("ADivider")],1):t._e(),s("div",{staticClass:"setting-option-mb"},[s("span",{staticClass:"setting-title"},[t._v("固定导航栏")]),s("ASwitch",{staticClass:"setting-switch",attrs:{checked:t.isFixedHeader},on:{change:function(e){return t.toggle("isFixedHeader",e)}}})],1),s("div",{staticClass:"setting-option-mb"},[s("ATooltip",{attrs:{title:t.isVertical?null:"侧边菜单时可配置",placement:"left"}},[s("span",{staticClass:"setting-title"},[t._v("固定左侧菜单")]),s("ASwitch",{staticClass:"setting-switch",attrs:{checked:t.isFixedSider,disabled:!t.isVertical},on:{change:function(e){return t.toggle("isFixedSider",e)}}})],1)],1),s("div",[s("ATooltip",{attrs:{title:t.isVertical?"顶部菜单时可配置":null,placement:"left"}},[s("span",{staticClass:"setting-title"},[t._v("水平菜单靠右")]),s("ASwitch",{staticClass:"setting-switch",attrs:{checked:t.isMenuRight,disabled:t.isVertical},on:{change:function(e){return t.toggle("isMenuRight",e)}}})],1)],1)])},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("DarkMenuSvg",{staticClass:"setting-svg"})},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("LightMenuSvg",{staticClass:"setting-svg"})},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("VerticalSvg",{staticClass:"setting-svg"})},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("HorizontalSvg",{staticClass:"setting-svg"})}],a=s("2f62"),l={functional:!0,render(t,e){const{_c:s,_v:i,data:r,children:a=[]}=e,{class:l,staticClass:n,style:o,staticStyle:u,attrs:c={},...h}=r;return s("svg",{class:[l,n],style:[o,u],attrs:Object.assign({viewBox:"0 0 52 45",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},c),...h},a.concat([s("defs",[s("filter",{attrs:{x:"-9.4%",y:"-6.2%",width:"118.8%",height:"122.5%",filterUnits:"objectBoundingBox",id:"lightMenu_svg__a"}},[s("feOffset",{attrs:{dy:"1",in:"SourceAlpha",result:"shadowOffsetOuter1"}}),s("feGaussianBlur",{attrs:{stdDeviation:"1",in:"shadowOffsetOuter1",result:"shadowBlurOuter1"}}),s("feColorMatrix",{attrs:{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0",in:"shadowBlurOuter1",result:"shadowMatrixOuter1"}}),s("feMerge",[s("feMergeNode",{attrs:{in:"shadowMatrixOuter1"}}),s("feMergeNode",{attrs:{in:"SourceGraphic"}})])]),s("rect",{attrs:{id:"lightMenu_svg__b",x:"0",y:"0",width:"48",height:"40",rx:"4"}}),s("filter",{attrs:{x:"-4.2%",y:"-2.5%",width:"108.3%",height:"110%",filterUnits:"objectBoundingBox",id:"lightMenu_svg__c"}},[s("feOffset",{attrs:{dy:"1",in:"SourceAlpha",result:"shadowOffsetOuter1"}}),s("feGaussianBlur",{attrs:{stdDeviation:".5",in:"shadowOffsetOuter1",result:"shadowBlurOuter1"}}),s("feColorMatrix",{attrs:{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0",in:"shadowBlurOuter1"}})])]),s("g",{attrs:{filter:"url(#lightMenu_svg__a)",transform:"translate(2 1)",fill:"none","fill-rule":"evenodd"}},[s("mask",{attrs:{id:"lightMenu_svg__d",fill:"#fff"}},[s("use",{attrs:{"xlink:href":"#lightMenu_svg__b"}})]),s("use",{attrs:{fill:"#000",filter:"url(#lightMenu_svg__c)","xlink:href":"#lightMenu_svg__b"}}),s("use",{attrs:{fill:"#F0F2F5","xlink:href":"#lightMenu_svg__b"}}),s("path",{attrs:{fill:"#FFF",mask:"url(#lightMenu_svg__d)",d:"M0 0h16v44H0z"}}),s("path",{attrs:{fill:"#FFF",mask:"url(#lightMenu_svg__d)",d:"M-1 0h49v10H-1z"}})])]))}},n={functional:!0,render(t,e){const{_c:s,_v:i,data:r,children:a=[]}=e,{class:l,staticClass:n,style:o,staticStyle:u,attrs:c={},...h}=r;return s("svg",{class:[l,n],style:[o,u],attrs:Object.assign({viewBox:"0 0 52 45",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},c),...h},a.concat([s("defs",[s("filter",{attrs:{x:"-9.4%",y:"-6.2%",width:"118.8%",height:"122.5%",filterUnits:"objectBoundingBox",id:"darkMenu_svg__a"}},[s("feOffset",{attrs:{dy:"1",in:"SourceAlpha",result:"shadowOffsetOuter1"}}),s("feGaussianBlur",{attrs:{stdDeviation:"1",in:"shadowOffsetOuter1",result:"shadowBlurOuter1"}}),s("feColorMatrix",{attrs:{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0",in:"shadowBlurOuter1",result:"shadowMatrixOuter1"}}),s("feMerge",[s("feMergeNode",{attrs:{in:"shadowMatrixOuter1"}}),s("feMergeNode",{attrs:{in:"SourceGraphic"}})])]),s("rect",{attrs:{id:"darkMenu_svg__b",x:"0",y:"0",width:"48",height:"40",rx:"4"}}),s("filter",{attrs:{x:"-4.2%",y:"-2.5%",width:"108.3%",height:"110%",filterUnits:"objectBoundingBox",id:"darkMenu_svg__c"}},[s("feOffset",{attrs:{dy:"1",in:"SourceAlpha",result:"shadowOffsetOuter1"}}),s("feGaussianBlur",{attrs:{stdDeviation:".5",in:"shadowOffsetOuter1",result:"shadowBlurOuter1"}}),s("feColorMatrix",{attrs:{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0",in:"shadowBlurOuter1"}})])]),s("g",{attrs:{filter:"url(#darkMenu_svg__a)",transform:"translate(2 1)",fill:"none","fill-rule":"evenodd"}},[s("mask",{attrs:{id:"darkMenu_svg__d",fill:"#fff"}},[s("use",{attrs:{"xlink:href":"#darkMenu_svg__b"}})]),s("use",{attrs:{fill:"#000",filter:"url(#darkMenu_svg__c)","xlink:href":"#darkMenu_svg__b"}}),s("use",{attrs:{fill:"#F0F2F5","xlink:href":"#darkMenu_svg__b"}}),s("path",{attrs:{fill:"#FFF",mask:"url(#darkMenu_svg__d)",d:"M-1 0h49v10H-1z"}}),s("path",{attrs:{fill:"#303648",mask:"url(#darkMenu_svg__d)",d:"M0 0h16v44H0z"}})])]))}},o={functional:!0,render(t,e){const{_c:s,_v:i,data:r,children:a=[]}=e,{class:l,staticClass:n,style:o,staticStyle:u,attrs:c={},...h}=r;return s("svg",{class:[l,n],style:[o,u],attrs:Object.assign({viewBox:"0 0 52 45",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},c),...h},a.concat([s("defs",[s("filter",{attrs:{x:"-9.4%",y:"-6.2%",width:"118.8%",height:"122.5%",filterUnits:"objectBoundingBox",id:"vertical_svg__a"}},[s("feOffset",{attrs:{dy:"1",in:"SourceAlpha",result:"shadowOffsetOuter1"}}),s("feGaussianBlur",{attrs:{stdDeviation:"1",in:"shadowOffsetOuter1",result:"shadowBlurOuter1"}}),s("feColorMatrix",{attrs:{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0",in:"shadowBlurOuter1",result:"shadowMatrixOuter1"}}),s("feMerge",[s("feMergeNode",{attrs:{in:"shadowMatrixOuter1"}}),s("feMergeNode",{attrs:{in:"SourceGraphic"}})])]),s("rect",{attrs:{id:"vertical_svg__b",x:"0",y:"0",width:"48",height:"40",rx:"4"}}),s("filter",{attrs:{x:"-4.2%",y:"-2.5%",width:"108.3%",height:"110%",filterUnits:"objectBoundingBox",id:"vertical_svg__c"}},[s("feOffset",{attrs:{dy:"1",in:"SourceAlpha",result:"shadowOffsetOuter1"}}),s("feGaussianBlur",{attrs:{stdDeviation:".5",in:"shadowOffsetOuter1",result:"shadowBlurOuter1"}}),s("feColorMatrix",{attrs:{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0",in:"shadowBlurOuter1"}})])]),s("g",{attrs:{filter:"url(#vertical_svg__a)",transform:"translate(2 1)",fill:"none","fill-rule":"evenodd"}},[s("mask",{attrs:{id:"vertical_svg__d",fill:"#fff"}},[s("use",{attrs:{"xlink:href":"#vertical_svg__b"}})]),s("use",{attrs:{fill:"#000",filter:"url(#vertical_svg__c)","xlink:href":"#vertical_svg__b"}}),s("use",{attrs:{fill:"#F0F2F5","xlink:href":"#vertical_svg__b"}}),s("path",{attrs:{fill:"#FFF",mask:"url(#vertical_svg__d)",d:"M-1 0h49v10H-1z"}}),s("path",{attrs:{fill:"#303648",mask:"url(#vertical_svg__d)",d:"M0 0h16v44H0z"}})])]))}},u={functional:!0,render(t,e){const{_c:s,_v:i,data:r,children:a=[]}=e,{class:l,staticClass:n,style:o,staticStyle:u,attrs:c={},...h}=r;return s("svg",{class:[l,n],style:[o,u],attrs:Object.assign({viewBox:"0 0 52 45",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},c),...h},a.concat([s("defs",[s("filter",{attrs:{x:"-9.4%",y:"-6.2%",width:"118.8%",height:"122.5%",filterUnits:"objectBoundingBox",id:"horizontal_svg__a"}},[s("feOffset",{attrs:{dy:"1",in:"SourceAlpha",result:"shadowOffsetOuter1"}}),s("feGaussianBlur",{attrs:{stdDeviation:"1",in:"shadowOffsetOuter1",result:"shadowBlurOuter1"}}),s("feColorMatrix",{attrs:{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0",in:"shadowBlurOuter1",result:"shadowMatrixOuter1"}}),s("feMerge",[s("feMergeNode",{attrs:{in:"shadowMatrixOuter1"}}),s("feMergeNode",{attrs:{in:"SourceGraphic"}})])]),s("rect",{attrs:{id:"horizontal_svg__b",x:"0",y:"0",width:"48",height:"40",rx:"4"}}),s("filter",{attrs:{x:"-4.2%",y:"-2.5%",width:"108.3%",height:"110%",filterUnits:"objectBoundingBox",id:"horizontal_svg__c"}},[s("feOffset",{attrs:{dy:"1",in:"SourceAlpha",result:"shadowOffsetOuter1"}}),s("feGaussianBlur",{attrs:{stdDeviation:".5",in:"shadowOffsetOuter1",result:"shadowBlurOuter1"}}),s("feColorMatrix",{attrs:{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0",in:"shadowBlurOuter1"}})])]),s("g",{attrs:{filter:"url(#horizontal_svg__a)",transform:"translate(2 1)",fill:"none","fill-rule":"evenodd"}},[s("mask",{attrs:{id:"horizontal_svg__d",fill:"#fff"}},[s("use",{attrs:{"xlink:href":"#horizontal_svg__b"}})]),s("use",{attrs:{fill:"#000",filter:"url(#horizontal_svg__c)","xlink:href":"#horizontal_svg__b"}}),s("use",{attrs:{fill:"#F0F2F5","xlink:href":"#horizontal_svg__b"}}),s("path",{attrs:{fill:"#303648",mask:"url(#horizontal_svg__d)",d:"M-1 0h49v10H-1z"}})])]))}},c=s("56dc");function h(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{},i=Object.keys(s);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(s).filter(function(t){return Object.getOwnPropertyDescriptor(s,t).enumerable}))),i.forEach(function(e){f(t,e,s[e])})}return t}function f(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var d={name:"Setting",components:{LightMenuSvg:l,DarkMenuSvg:n,VerticalSvg:o,HorizontalSvg:u},model:{prop:"visible",event:"change"},props:{visible:Boolean},computed:h({},Object(a["e"])("app",{menuTheme:function(t){return t.layout.menuTheme},isVertical:function(t){return t.layout.isVertical},isFixedHeader:function(t){return t.layout.isFixedHeader},isFixedSider:function(t){return t.layout.isFixedSider},isMenuRight:function(t){return t.layout.isMenuRight},theme:function(t){return t.layout.theme}}),Object(a["c"])("app",["isMobileDevice"])),created:function(){this.setThemeList()},methods:h({},Object(a["d"])("app",["setLayout"]),{toggle:function(t,e){void 0!==this[t]&&this[t]!==e&&this.setLayout(f({},t,e))},onClose:function(){var t=this,e=["menuTheme","isVertical","isFixedHeader","isFixedSider","isMenuRight","theme"],s=e.reduce(function(e,s){return h({},e,f({},s,t[s]))},{});this.$emit("change",!1),this.$db.set("layout",s)},setThemeList:function(){try{this.themeList=c["b"]}catch(t){this.themeList=!1}}})},g=d,v=(s("1d7b"),s("2877")),_=Object(v["a"])(g,i,r,!1,null,"17160f50",null);e["default"]=_.exports},e3c2:function(t,e,s){}}]);