(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["BasicLayout"],{"07a1":function(t,e,s){"use strict";var i=function(t,e){var s=e._c;return s("section",{class:{placeholder:e.props.isFixed}},[s("ALayoutFooter",{class:["footer",{"footer-fixed":e.props.isFixed}],style:{width:"calc(100% - "+(e.props.isFixed?e.props.offsetLeft:0)+"px)"}},[s("span",[e._v("Copyright © ")]),null!=e.props.start?s("span",[e._v(e._s(e.props.start)+" - ")]):e._e(),s("span",[e._v(e._s(e.props.current)+" ")]),s("span",[e._v(e._s(e.parent.$app.org)+" All Rights Reserved.")])])],1)},a=[],r={name:"Footer",props:{isFixed:Boolean,width:{type:Number,default:0},start:Number,current:{type:Number,default:(new Date).getFullYear()}}},l=r,n=(s("6c97"),s("2877")),o=Object(n["a"])(l,i,a,!0,null,"ce2e37ba",null);e["a"]=o.exports},"1a1a":function(t,e,s){var i=s("ded3"),a=s("4082");t.exports={functional:!0,render(t,e){const{_c:s,_v:r,data:l,children:n=[]}=e,{class:o,staticClass:c,style:u,staticStyle:h,attrs:d={}}=l,f=a(l,["class","staticClass","style","staticStyle","attrs"]);return s("svg",i({class:[o,c],style:[u,h],attrs:Object.assign({viewBox:"0 0 52 45",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},d)},f),n.concat([s("defs",[s("filter",{attrs:{x:"-9.4%",y:"-6.2%",width:"118.8%",height:"122.5%",filterUnits:"objectBoundingBox",id:"layout-light_svg__a"}},[s("feOffset",{attrs:{dy:"1",in:"SourceAlpha",result:"shadowOffsetOuter1"}}),s("feGaussianBlur",{attrs:{stdDeviation:"1",in:"shadowOffsetOuter1",result:"shadowBlurOuter1"}}),s("feColorMatrix",{attrs:{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0",in:"shadowBlurOuter1",result:"shadowMatrixOuter1"}}),s("feMerge",[s("feMergeNode",{attrs:{in:"shadowMatrixOuter1"}}),s("feMergeNode",{attrs:{in:"SourceGraphic"}})])]),s("filter",{attrs:{x:"-4.2%",y:"-2.5%",width:"108.3%",height:"110%",filterUnits:"objectBoundingBox",id:"layout-light_svg__c"}},[s("feOffset",{attrs:{dy:"1",in:"SourceAlpha",result:"shadowOffsetOuter1"}}),s("feGaussianBlur",{attrs:{stdDeviation:".5",in:"shadowOffsetOuter1",result:"shadowBlurOuter1"}}),s("feColorMatrix",{attrs:{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0",in:"shadowBlurOuter1"}})]),s("rect",{attrs:{id:"layout-light_svg__b",x:"0",y:"0",width:"48",height:"40",rx:"4"}})]),s("g",{attrs:{filter:"url(#layout-light_svg__a)",transform:"translate(2 1)",fill:"none","fill-rule":"evenodd"}},[s("mask",{attrs:{id:"layout-light_svg__d",fill:"#fff"}},[s("use",{attrs:{"xlink:href":"#layout-light_svg__b"}})]),s("use",{attrs:{fill:"#000",filter:"url(#layout-light_svg__c)","xlink:href":"#layout-light_svg__b"}}),s("use",{attrs:{fill:"#F0F2F5","xlink:href":"#layout-light_svg__b"}}),s("path",{attrs:{fill:"#FFF",mask:"url(#layout-light_svg__d)",d:"M0 0h16v44H0z"}}),s("path",{attrs:{fill:"#FFF",mask:"url(#layout-light_svg__d)",d:"M-1 0h49v10H-1z"}})])]))}}},"231b":function(t,e,s){var i=s("ded3"),a=s("4082");t.exports={functional:!0,render(t,e){const{_c:s,_v:r,data:l,children:n=[]}=e,{class:o,staticClass:c,style:u,staticStyle:h,attrs:d={}}=l,f=a(l,["class","staticClass","style","staticStyle","attrs"]);return s("svg",i({class:[o,c],style:[u,h],attrs:Object.assign({viewBox:"0 0 52 45",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},d)},f),n.concat([s("defs",[s("filter",{attrs:{x:"-9.4%",y:"-6.2%",width:"118.8%",height:"122.5%",filterUnits:"objectBoundingBox",id:"layout-vertical_svg__a"}},[s("feOffset",{attrs:{dy:"1",in:"SourceAlpha",result:"shadowOffsetOuter1"}}),s("feGaussianBlur",{attrs:{stdDeviation:"1",in:"shadowOffsetOuter1",result:"shadowBlurOuter1"}}),s("feColorMatrix",{attrs:{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0",in:"shadowBlurOuter1",result:"shadowMatrixOuter1"}}),s("feMerge",[s("feMergeNode",{attrs:{in:"shadowMatrixOuter1"}}),s("feMergeNode",{attrs:{in:"SourceGraphic"}})])]),s("filter",{attrs:{x:"-4.2%",y:"-2.5%",width:"108.3%",height:"110%",filterUnits:"objectBoundingBox",id:"layout-vertical_svg__c"}},[s("feOffset",{attrs:{dy:"1",in:"SourceAlpha",result:"shadowOffsetOuter1"}}),s("feGaussianBlur",{attrs:{stdDeviation:".5",in:"shadowOffsetOuter1",result:"shadowBlurOuter1"}}),s("feColorMatrix",{attrs:{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0",in:"shadowBlurOuter1"}})]),s("rect",{attrs:{id:"layout-vertical_svg__b",x:"0",y:"0",width:"48",height:"40",rx:"4"}})]),s("g",{attrs:{filter:"url(#layout-vertical_svg__a)",transform:"translate(2 1)",fill:"none","fill-rule":"evenodd"}},[s("mask",{attrs:{id:"layout-vertical_svg__d",fill:"#fff"}},[s("use",{attrs:{"xlink:href":"#layout-vertical_svg__b"}})]),s("use",{attrs:{fill:"#000",filter:"url(#layout-vertical_svg__c)","xlink:href":"#layout-vertical_svg__b"}}),s("use",{attrs:{fill:"#F0F2F5","xlink:href":"#layout-vertical_svg__b"}}),s("path",{attrs:{fill:"#FFF",mask:"url(#layout-vertical_svg__d)",d:"M-1 0h49v10H-1z"}}),s("path",{attrs:{fill:"#303648",mask:"url(#layout-vertical_svg__d)",d:"M0 0h16v44H0z"}})])]))}}},"3e59":function(t,e,s){"use strict";s.r(e),s.d(e,"NOOP",(function(){return Vt}));var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("ALayout",{staticClass:"container",class:t.isVertical?"vertical":"horizontal"},[s(t.layout.menuLayout,{tag:"Compontent",staticClass:"layout-sider layout-header",class:t.menuClass,attrs:{collapsible:"",breakpoint:"xl",theme:t.menuTheme,width:t.siderWidth},model:{value:t.collapsed,callback:function(e){t.collapsed=e},expression:"collapsed"}},[s("Logo",{attrs:{collapsed:t.collapsed,theme:t.menuTheme}}),s("Menu",{class:["menu-"+(t.isMenuRight?"right":"left"),"menu"],attrs:{"menu-data":t.menuList,"selected-keys":t.currentName,"open-keys":t.layout.openKeys,mode:t.layout.mode,theme:t.menuTheme},on:{click:t.navigate,openChange:t.changeOpenKeys}}),t.isVertical?t._e():s("HeaderToolBar",{attrs:{theme:t.menuTheme},on:{click:t.toggleSetting}})],1),s("ALayout",{staticClass:"layout-main",style:{marginLeft:t.layoutMainLeft+"px"}},[t.isVertical?s("ALayoutHeader",{staticClass:"layout-main-header",class:{"header-fixed":t.isFixedHeader},style:{paddingLeft:t.layoutMainHeaderLeft+"px"}},[s("div",{staticClass:"trigger v-icon-hover",on:{click:t.toggleCollapsed}},[s("AIcon",{attrs:{type:t.collapsed?"menu-unfold":"menu-fold"}})],1),t.isMobileDevice?t._e():s("Breadcrumb"),s("HeaderToolBar",{attrs:{theme:"light"},on:{click:t.toggleSetting}})],1):t._e(),s("ALayoutContent",{class:[{"content-fixed-top":t.isFixedHeader},"layout-main-content"]},[t.isVertical?t._e():s("div",{staticClass:"breadcrumb"},[s("Breadcrumb")],1),s("KeepAlive",{attrs:{include:t.getAlive("BasicLayout")}},[s("RouterView")],1)],1),s("div",{style:{marginLeft:t.routerLayout.offsetLeft+"px"}},[s("Footer",{attrs:{"offset-left":t.isVertical?t.siderWidth:0,start:2019}})],1)],1)],1),s("Setting",{model:{value:t.visibleOfSetting,callback:function(e){t.visibleOfSetting=e},expression:"visibleOfSetting"}}),s("BackTop")],1)},a=[],r=(s("2532"),s("ddb0"),s("5530")),l=s("2f62"),n=s("ba41"),o=s("fd4e"),c=s("a18c");const u=t=>{var e;const s=Object(c["b"])(),i=s.find(e=>e.key===t);return null!==(e=null===i||void 0===i?void 0:i.children)&&void 0!==e?e:[]},h={data(){return{screenTypeMixin:"xl",screenLevelMixin:6}},created(){this.breakpoints=[{minWidth:1600,type:"xxl",level:8},{minWidth:1400,type:"xl",level:7},{minWidth:1200,type:"xl",level:6},{minWidth:992,type:"lg",level:5},{minWidth:768,type:"md",level:3.8},{minWidth:576,type:"sm",level:2.8},{minWidth:0,type:"xs",level:0}],this.$_screen_change(),this.$_screen_change=Object(o["b"])(this.$_screen_change,160),window.addEventListener("resize",this.$_screen_change)},beforeDestroy(){window.removeEventListener("resize",this.$_screen_change)},methods:{$_screen_change(){const t=Math.min(window.screen.width,document.body.clientWidth);this.breakpoints.some(e=>e.minWidth<=t&&([this.screenTypeMixin,this.screenLevelMixin]=[e.type,e.level],this.$store.commit("app/setScreenType",e),!0))}}};var d=h,f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("AMenu",t._g(t._b({},"AMenu",t.$attrs,!1),t.$listeners),[t._l(t.menuData,(function(e){return[e.children?s("SubMenu",{key:e.key||e.name,attrs:{item:e}}):s("AMenuItem",{key:e.key||e.name},[e.icon?s("AIcon",{attrs:{type:e.icon}}):t._e(),s("span",[t._v(t._s(e.title))])],1)]}))],2)},g=[],p=function(t,e){var s=e._c;return s("ASubMenu",e._g({key:e.data.key,scopedSlots:e._u([{key:"title",fn:function(){return[e.props.item.icon?s("AIcon",{attrs:{type:e.props.item.icon}}):e._e(),s("span",[e._v(e._s(e.props.item.title))])]},proxy:!0}])},e.listeners),[e._l(e.props.item.children,(function(t){return[t.children?s("SubMenu",{key:t.key||t.name,attrs:{item:t}}):s("AMenuItem",{key:t.key||t.name},[t.icon?s("AIcon",{attrs:{type:t.icon}}):e._e(),s("span",[e._v(e._s(t.title))])],1)]}))],2)},v=[],m=s("2877"),y={},_=Object(m["a"])(y,p,v,!0,null,null,null),b=_.exports,O={components:{SubMenu:b},props:{menuData:{type:Array,required:!0}}},x=O,w=Object(m["a"])(x,f,g,!1,null,null,null),k=w.exports,S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{class:[t.isVertical?"logo-vertical":"logo-horizontal","logo-theme-"+t.theme]},[t.logoPath?t._m(0):t._e(),s("h1",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}],staticClass:"title"},[t._v(t._s(t.title))])])},M=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("img",{attrs:{src:t.logoPath,alt:"图标",height:"36",width:"36"}})}],C={name:"Logo",props:{collapsed:Boolean,theme:{type:String,validator:t=>["dark","light"].includes(t),default:"light"}},data(){return{title:this.$app.title.small}},computed:Object(l["e"])("app",{isVertical:t=>t.layout.isVertical}),watch:{collapsed(t){if(this.isVertical)return t?this.title=null:void setTimeout(()=>this.title=this.$app.title.small,168)}},created(){const t="";this.logoPath=this.$app.logoPath&&t+this.$app.logoPath}},F=C,A=(s("81ac"),Object(m["a"])(F,S,M,!1,null,"3f26153e",null)),j=A.exports,B=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header-tool",class:"header-tool-theme-"+t.theme},[s("FullScreen",{staticClass:"action"}),s("SettingAction",{staticClass:"action",on:{click:t.openSetting}}),s("UserMenu",{staticClass:"action"})],1)},L=[],V=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.showAction?s("ATooltip",{attrs:{title:t.isFullScreen?"退出全屏":"全屏"}},[s("div",{staticClass:"full-screen v-icon-hover",on:{click:t.handleToggle}},[s("AIcon",{staticClass:"icon",attrs:{type:t.isFullScreen?"fullscreen-exit":"fullscreen"}})],1)]):t._e()},$=[];const T=window.navigator.userAgent.toLowerCase(),D=T&&/msie|trident/.test(T),z=document.documentElement,H=[{enabled:document.fullscreenEnabled||document.fullscreen,listener:"fullscreenchange",exit:document.exitFullscreen,full:z.requestFullscreen},{enabled:document.mozFullScreen,listener:"mozfullscreenchange",exit:document.exitFullscreen||document.mozCancelFullScreen,full:z.requestFullscreen||z.mozRequestFullScreen},{enabled:document.webkitIsFullScreen,listener:"webkitfullscreenchange",exit:document.webkitCancelFullScreen,full:z.webkitRequestFullScreen}],K=H.find(t=>t.enabled);var N={name:"FullScreen",data(){return{showAction:!D&&K,isFullScreen:!1}},mounted(){this.showAction&&document.addEventListener(K.listener,this.changeFullScreen)},beforeDestroy(){this.showAction&&document.removeEventListener(K.listener,this.changeFullScreen)},methods:{handleToggle(){this.isFullScreen?K.exit.call(document):K.full.call(z)},changeFullScreen(){this.isFullScreen=!this.isFullScreen,this.$emit("change",this.isFullScreen)}}},E=N,I=(s("8d58"),Object(m["a"])(E,V,$,!1,null,"579f60a2",null)),G=I.exports,R=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},P=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ATooltip",{attrs:{title:"界面设置"}},[s("div",t._g({staticClass:"setting v-icon-hover"},t.$listeners),[s("AIcon",{staticClass:"icon",attrs:{type:"setting"}})],1)])}],W={name:"SettingAction"},U=W,q=(s("d82b"),Object(m["a"])(U,R,P,!1,null,"91970438",null)),Y=q.exports,J=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"user v-icon-hover"},[s("ADropdown",{scopedSlots:t._u([{key:"overlay",fn:function(){return[s("AMenu",{staticClass:"user-menu",on:{click:function(e){return t.dispatch(e.key)}}},[s("AMenuItem",{key:"logout"},[s("AIcon",{attrs:{type:"logout"}}),s("span",[t._v("退出登录")])],1)],1)]},proxy:!0}])},[s("div",[s("AAvatar",{staticClass:"user-avatar v-theme-bg",attrs:{alt:t.nickname,size:36,src:t.avatar}},[t._v(" "+t._s(t.nickname.slice(0,5))+" ")]),s("span",{staticClass:"user-nickname"},[t._v(t._s(t.nickname))])],1)])],1)},Q=[],X=s("c24f"),Z={name:"UserMenu",computed:Object(r["a"])({},Object(l["e"])("user",["avatar","nickname"])),methods:{dispatch(t){this[t]&&this[t]()},logout(){Object(X["c"])().then(()=>Object(c["c"])())}}},tt=Z,et=(s("9fee"),Object(m["a"])(tt,J,Q,!1,null,"0334b006",null)),st=et.exports,it={name:"HeaderToolBar",components:{SettingAction:Y,UserMenu:st,FullScreen:G},props:{theme:{type:String,validator:t=>["dark","light"].includes(t),default:"light"}},methods:{openSetting(){this.$emit("click","setting")}}},at=it,rt=(s("f8eb"),Object(m["a"])(at,B,L,!1,null,"0e26d27e",null)),lt=rt.exports,nt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ADrawer",{staticClass:"setting",attrs:{visible:t.visible,width:286,title:"界面设置"},on:{close:t.onClose}},[s("div",{staticClass:"setting-option-mb"},[s("h4",{staticClass:"setting-title"},[t._v("导航菜单风格")]),s("ATooltip",{attrs:{title:"暗色"}},[s("div",{staticClass:"setting-layout",on:{click:function(e){return t.toggle("menuTheme","dark")}}},[t._m(0),s("AIcon",{directives:[{name:"show",rawName:"v-show",value:"dark"===t.menuTheme,expression:"menuTheme === 'dark'"}],staticClass:"check-icon v-theme-color",attrs:{type:"check"}})],1)]),s("ATooltip",{attrs:{title:"亮色"}},[s("div",{staticClass:"setting-layout",on:{click:function(e){return t.toggle("menuTheme","light")}}},[t._m(1),s("AIcon",{directives:[{name:"show",rawName:"v-show",value:"light"===t.menuTheme,expression:"menuTheme === 'light'"}],staticClass:"check-icon v-theme-color",attrs:{type:"check"}})],1)])],1),s("div",[s("h4",{staticClass:"setting-title"},[t._v("导航菜单布局")]),s("ATooltip",{attrs:{title:"侧边菜单"}},[s("div",{staticClass:"setting-layout",on:{click:function(e){return t.toggle("isVertical",!0)}}},[t._m(2),s("AIcon",{directives:[{name:"show",rawName:"v-show",value:t.isVertical,expression:"isVertical"}],staticClass:"check-icon v-theme-color",attrs:{type:"check"}})],1)]),s("ATooltip",{attrs:{title:"顶部菜单"}},[s("div",{class:{"setting-layout":!0,"v-disabled":t.isMobileDevice},on:{click:function(e){!t.isMobileDevice&&t.toggle("isVertical",!1)}}},[t._m(3),s("AIcon",{directives:[{name:"show",rawName:"v-show",value:!t.isVertical,expression:"!isVertical"}],staticClass:"check-icon v-theme-color",attrs:{type:"check"}})],1)]),s("ADivider")],1),s("div",{staticClass:"setting-option-mb"},[s("span",{staticClass:"setting-title"},[t._v("固定导航栏")]),s("ASwitch",{staticClass:"setting-switch",attrs:{checked:t.isFixedHeader},on:{change:function(e){return t.toggle("isFixedHeader",e)}}})],1),s("div",{staticClass:"setting-option-mb"},[s("ATooltip",{attrs:{title:t.isVertical?null:"侧边菜单时可配置",placement:"left"}},[s("span",{staticClass:"setting-title"},[t._v("固定左侧菜单")]),s("ASwitch",{staticClass:"setting-switch",attrs:{checked:t.isFixedSider,disabled:!t.isVertical},on:{change:function(e){return t.toggle("isFixedSider",e)}}})],1)],1),s("div",[s("ATooltip",{attrs:{title:t.isVertical?"顶部菜单时可配置":null,placement:"left"}},[s("span",{staticClass:"setting-title"},[t._v("水平菜单靠右")]),s("ASwitch",{staticClass:"setting-switch",attrs:{checked:t.isMenuRight,disabled:t.isVertical},on:{change:function(e){return t.toggle("isMenuRight",e)}}})],1)],1)])},ot=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("LayoutDarkSVG",{staticClass:"setting-svg"})},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("LayoutLightSVG",{staticClass:"setting-svg"})},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("VerticalSVG",{staticClass:"setting-svg"})},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("HorizontalSVG",{staticClass:"setting-svg"})}],ct=s("1a1a"),ut=s.n(ct),ht=s("852f"),dt=s.n(ht),ft=s("231b"),gt=s.n(ft),pt=s("e6a6"),vt=s.n(pt),mt={name:"Setting",components:{LayoutLightSVG:ut.a,LayoutDarkSVG:dt.a,VerticalSVG:gt.a,HorizontalSVG:vt.a},model:{prop:"visible",event:"change"},props:{visible:Boolean},computed:Object(r["a"])(Object(r["a"])({},Object(l["e"])("app",{menuTheme:t=>t.layout.menuTheme,isVertical:t=>t.layout.isVertical,isFixedHeader:t=>t.layout.isFixedHeader,isFixedSider:t=>t.layout.isFixedSider,isMenuRight:t=>t.layout.isMenuRight,theme:t=>t.layout.theme})),Object(l["c"])("app",["isMobileDevice"])),methods:Object(r["a"])(Object(r["a"])({},Object(l["d"])("app",["setLayout"])),{},{toggle(t,e){void 0!==this[t]&&this[t]!==e&&this.setLayout({[t]:e})},onClose(){const t=["menuTheme","isVertical","isFixedHeader","isFixedSider","isMenuRight","theme"],e=t.reduce((t,e)=>Object(r["a"])(Object(r["a"])({},t),{},{[e]:this[e]}),{});this.$emit("change",!1),n["b"].set(n["a"].BASIC_LAYOUT,e)}})},yt=mt,_t=(s("5db1"),Object(m["a"])(yt,nt,ot,!1,null,"5064d5f4",null)),bt=_t.exports,Ot=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ABreadcrumb",{attrs:{routes:t.routes},scopedSlots:t._u([{key:"itemRender",fn:function(e){var i=e.route;return[t.isLast(i)?s("a",{staticClass:"link"},[t._v(t._s(i.breadcrumbName))]):s("RouterLink",{attrs:{to:{name:i.path}}},[t._v(t._s(i.breadcrumbName))])]}}])})},xt=[],wt={name:"Breadcrumb",data(){return{routes:[]}},watch:{"$route.name":{handler(t){this.routes=this.getRoutes(t)},immediate:!0}},beforeCreate(){const t=u(this.$app.mainName),e=t=>({path:t.key,breadcrumbName:t.title});this.menuList=Object(o["l"])(e,t)},created(){this.getRoutes=Object(o["a"])(this.getRoutes)},methods:{getRoutes(t){const e=Object(o["f"])(e=>e.path===t,this.menuList),s={path:t,breadcrumbName:this.$route.meta.title};return e.push(s),e},isLast(t){return this.routes[this.routes.length-1]===t}}},kt=wt,St=(s("4249"),Object(m["a"])(kt,Ot,xt,!1,null,"60a2caa5",null)),Mt=St.exports,Ct=s("07a1"),Ft=function(t,e){var s=e._c;return s("ABackTop",[s("div",{staticClass:"back-top"},[s("AIcon",{staticClass:"back-top-icon",attrs:{type:"up"}})],1)])},At=[],jt=(s("b5e2"),{}),Bt=Object(m["a"])(jt,Ft,At,!0,null,"3383bbe4",null),Lt=Bt.exports;const Vt=()=>{};var $t={name:"BasicLayout",components:{MenuDrawer:()=>s.e("MenuDrawer").then(s.bind(null,"2e02")),Menu:k,Logo:j,HeaderToolBar:lt,Setting:bt,Breadcrumb:Mt,Footer:Ct["a"],BackTop:Lt},mixins:[d],data(){return{currentName:[this.$route.name],collapsed:!1,visibleOfSetting:!1,vertical:{openKeys:[],mode:"inline",menuLayout:"ALayoutSider"},horizontal:{openKeys:[],mode:"horizontal",menuLayout:"ALayoutHeader"},cacheOpenKeys:[],cacheIsVertical:this.isVertical,isOpenKeysLock:!1}},computed:Object(r["a"])(Object(r["a"])(Object(r["a"])({},Object(l["e"])("app",{menuTheme:t=>t.layout.menuTheme,isVertical:t=>t.layout.isVertical,isFixedHeader:t=>t.layout.isFixedHeader,isFixedSider:t=>t.layout.isFixedSider,isMenuRight:t=>t.layout.isMenuRight})),Object(l["c"])("app",["getAlive","isMobileDevice"])),{},{layout(){return this.isVertical?this.vertical:this.horizontal},routerLayout(){var t;return null!==(t=this.$route.meta.layout)&&void 0!==t?t:{}},siderWidth(){const t=this.isMobileDevice?0:80,e=16*Math.max(this.screenLevelMixin,5)+120;return this.collapsed?t:e},layoutMainLeft(){const t=this.isVertical&&this.isFixedSider&&!this.isMobileDevice?this.siderWidth:0;return this.setConstrainedBox({mainOffsetLeft:t}),t},layoutMainHeaderLeft(){return this.isFixedHeader&&!this.isMobileDevice?this.siderWidth:0},menuClass(){const{isVertical:t,isFixedHeader:e,menuTheme:s}=this;return[{"header-fixed":e&&!t},{"sider-fixed":e&&t},"theme-"+s]}}),watch:{"$route.name":{handler(t){if(this.redirect(),this.currentName.splice(0,1,t),this.isOpenKeysLock)return this.isOpenKeysLock=!1;this.vertical.openKeys=this.getOpenKeys(t)},immediate:!0},collapsed(){[this.cacheOpenKeys,this.vertical.openKeys]=[this.vertical.openKeys,this.cacheOpenKeys]},isMobileDevice:{handler(t){t?(this.cacheIsVertical=this.isVertical,this.setLayout({isVertical:!0}),this.vertical.menuLayout="MenuDrawer",this.collapsed=!0):(this.setLayout({isVertical:this.cacheIsVertical}),this.vertical.menuLayout="ALayoutSider")},immediate:!0}},beforeCreate(){this.menuList=u(this.$app.mainName)},created(){this.setLayout(n["b"].get(n["a"].BASIC_LAYOUT)),this.getOpenKeys=Object(o["a"])(this.getOpenKeys),this.vertical.openKeys=this.getOpenKeys(this.$route.name)},methods:Object(r["a"])(Object(r["a"])({},Object(l["d"])("app",["setLayout","setConstrainedBox"])),{},{navigate({key:t}){this.$router.push({name:t}).catch(Vt).finally(()=>this.isOpenKeysLock=!0)},redirect(){const t=this.$route.name,e=this.menuList.find(e=>e.originalKey===t);e&&this.navigate({key:e.key})},getOpenKeys(t){const e=Object(o["f"])(e=>e.key===t,this.menuList).map(t=>t.key);return e.length?e:this.layout.openKeys},toggleCollapsed(){this.collapsed=!this.collapsed},toggleSetting(){this.visibleOfSetting=!0},changeOpenKeys(t){if(this.isVertical){const e=this.layout.openKeys;this.layout.openKeys=t.filter(t=>!e.includes(t))}else this.layout.openKeys=t}})},Tt=$t,Dt=(s("ae19"),Object(m["a"])(Tt,i,a,!1,null,"4f1e892a",null));e["default"]=Dt.exports},4082:function(t,e,s){var i=s("f0e4");function a(t,e){if(null==t)return{};var s,a,r=i(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)s=l[a],e.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(t,s)&&(r[s]=t[s])}return r}t.exports=a},4249:function(t,e,s){"use strict";var i=s("fd25"),a=s.n(i);a.a},"4f6a":function(t,e,s){},"5db1":function(t,e,s){"use strict";var i=s("d453"),a=s.n(i);a.a},"6c97":function(t,e,s){"use strict";var i=s("4f6a"),a=s.n(i);a.a},"6ca7":function(t,e,s){},"81ac":function(t,e,s){"use strict";var i=s("f33f"),a=s.n(i);a.a},"852f":function(t,e,s){var i=s("ded3"),a=s("4082");t.exports={functional:!0,render(t,e){const{_c:s,_v:r,data:l,children:n=[]}=e,{class:o,staticClass:c,style:u,staticStyle:h,attrs:d={}}=l,f=a(l,["class","staticClass","style","staticStyle","attrs"]);return s("svg",i({class:[o,c],style:[u,h],attrs:Object.assign({viewBox:"0 0 52 45",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},d)},f),n.concat([s("defs",[s("filter",{attrs:{x:"-9.4%",y:"-6.2%",width:"118.8%",height:"122.5%",filterUnits:"objectBoundingBox",id:"layout-dark_svg__a"}},[s("feOffset",{attrs:{dy:"1",in:"SourceAlpha",result:"shadowOffsetOuter1"}}),s("feGaussianBlur",{attrs:{stdDeviation:"1",in:"shadowOffsetOuter1",result:"shadowBlurOuter1"}}),s("feColorMatrix",{attrs:{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0",in:"shadowBlurOuter1",result:"shadowMatrixOuter1"}}),s("feMerge",[s("feMergeNode",{attrs:{in:"shadowMatrixOuter1"}}),s("feMergeNode",{attrs:{in:"SourceGraphic"}})])]),s("filter",{attrs:{x:"-4.2%",y:"-2.5%",width:"108.3%",height:"110%",filterUnits:"objectBoundingBox",id:"layout-dark_svg__c"}},[s("feOffset",{attrs:{dy:"1",in:"SourceAlpha",result:"shadowOffsetOuter1"}}),s("feGaussianBlur",{attrs:{stdDeviation:".5",in:"shadowOffsetOuter1",result:"shadowBlurOuter1"}}),s("feColorMatrix",{attrs:{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0",in:"shadowBlurOuter1"}})]),s("rect",{attrs:{id:"layout-dark_svg__b",x:"0",y:"0",width:"48",height:"40",rx:"4"}})]),s("g",{attrs:{filter:"url(#layout-dark_svg__a)",transform:"translate(2 1)",fill:"none","fill-rule":"evenodd"}},[s("mask",{attrs:{id:"layout-dark_svg__d",fill:"#fff"}},[s("use",{attrs:{"xlink:href":"#layout-dark_svg__b"}})]),s("use",{attrs:{fill:"#000",filter:"url(#layout-dark_svg__c)","xlink:href":"#layout-dark_svg__b"}}),s("use",{attrs:{fill:"#F0F2F5","xlink:href":"#layout-dark_svg__b"}}),s("path",{attrs:{fill:"#FFF",mask:"url(#layout-dark_svg__d)",d:"M-1 0h49v10H-1z"}}),s("path",{attrs:{fill:"#303648",mask:"url(#layout-dark_svg__d)",d:"M0 0h16v44H0z"}})])]))}}},"8d58":function(t,e,s){"use strict";var i=s("9e8e"),a=s.n(i);a.a},9523:function(t,e){function s(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}t.exports=s},"9e8e":function(t,e,s){},"9fee":function(t,e,s){"use strict";var i=s("a411"),a=s.n(i);a.a},a411:function(t,e,s){},ae19:function(t,e,s){"use strict";var i=s("6ca7"),a=s.n(i);a.a},b5e2:function(t,e,s){"use strict";var i=s("f808"),a=s.n(i);a.a},c69b:function(t,e,s){},d453:function(t,e,s){},d82b:function(t,e,s){"use strict";var i=s("c69b"),a=s.n(i);a.a},ded3:function(t,e,s){var i=s("9523");function a(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function r(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?a(Object(s),!0).forEach((function(e){i(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):a(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}t.exports=r},e093:function(t,e,s){},e6a6:function(t,e,s){var i=s("ded3"),a=s("4082");t.exports={functional:!0,render(t,e){const{_c:s,_v:r,data:l,children:n=[]}=e,{class:o,staticClass:c,style:u,staticStyle:h,attrs:d={}}=l,f=a(l,["class","staticClass","style","staticStyle","attrs"]);return s("svg",i({class:[o,c],style:[u,h],attrs:Object.assign({viewBox:"0 0 52 45",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},d)},f),n.concat([s("defs",[s("filter",{attrs:{x:"-9.4%",y:"-6.2%",width:"118.8%",height:"122.5%",filterUnits:"objectBoundingBox",id:"layout-horizontal_svg__a"}},[s("feOffset",{attrs:{dy:"1",in:"SourceAlpha",result:"shadowOffsetOuter1"}}),s("feGaussianBlur",{attrs:{stdDeviation:"1",in:"shadowOffsetOuter1",result:"shadowBlurOuter1"}}),s("feColorMatrix",{attrs:{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0",in:"shadowBlurOuter1",result:"shadowMatrixOuter1"}}),s("feMerge",[s("feMergeNode",{attrs:{in:"shadowMatrixOuter1"}}),s("feMergeNode",{attrs:{in:"SourceGraphic"}})])]),s("filter",{attrs:{x:"-4.2%",y:"-2.5%",width:"108.3%",height:"110%",filterUnits:"objectBoundingBox",id:"layout-horizontal_svg__c"}},[s("feOffset",{attrs:{dy:"1",in:"SourceAlpha",result:"shadowOffsetOuter1"}}),s("feGaussianBlur",{attrs:{stdDeviation:".5",in:"shadowOffsetOuter1",result:"shadowBlurOuter1"}}),s("feColorMatrix",{attrs:{values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0",in:"shadowBlurOuter1"}})]),s("rect",{attrs:{id:"layout-horizontal_svg__b",x:"0",y:"0",width:"48",height:"40",rx:"4"}})]),s("g",{attrs:{filter:"url(#layout-horizontal_svg__a)",transform:"translate(2 1)",fill:"none","fill-rule":"evenodd"}},[s("mask",{attrs:{id:"layout-horizontal_svg__d",fill:"#fff"}},[s("use",{attrs:{"xlink:href":"#layout-horizontal_svg__b"}})]),s("use",{attrs:{fill:"#000",filter:"url(#layout-horizontal_svg__c)","xlink:href":"#layout-horizontal_svg__b"}}),s("use",{attrs:{fill:"#F0F2F5","xlink:href":"#layout-horizontal_svg__b"}}),s("path",{attrs:{fill:"#303648",mask:"url(#layout-horizontal_svg__d)",d:"M-1 0h49v10H-1z"}})])]))}}},f0e4:function(t,e){function s(t,e){if(null==t)return{};var s,i,a={},r=Object.keys(t);for(i=0;i<r.length;i++)s=r[i],e.indexOf(s)>=0||(a[s]=t[s]);return a}t.exports=s},f33f:function(t,e,s){},f808:function(t,e,s){},f8eb:function(t,e,s){"use strict";var i=s("e093"),a=s.n(i);a.a},fd25:function(t,e,s){}}]);