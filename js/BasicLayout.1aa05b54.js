(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["BasicLayout"],{"07a1":function(e,t,n){"use strict";var i=function(e,t){var n=t._c;return n("div",{class:{placeholder:t.props.isFixed}},[n("footer",{class:["footer",{"footer-fixed":t.props.isFixed}],style:{width:"calc(100% - "+(t.props.isFixed?t.props.width:0)+"px)"}},[n("ALayoutFooter",[t._v("\n            Copyright © 2018\n            "+t._s(t.props.nowYear>2018?" - "+t.props.nowYear:null)+" "+t._s(t.parent.$app.org)+"\n            All Rights Reserved\n        ")])],1)])},s=[],r={name:"Footer",props:{isFixed:{type:Boolean,default:!1},width:{type:Number,default:0},nowYear:{type:Number,default:(new Date).getFullYear()}}},a=r,l=(n("5de2"),n("2877")),o=Object(l["a"])(a,i,s,!0,null,"4eb02306",null);t["a"]=o.exports},"168c":function(e,t,n){"use strict";var i=n("8d97"),s=n.n(i);s.a},"1dde":function(e,t,n){"use strict";var i=n("b3d2"),s=n.n(i);s.a},"230a":function(e,t,n){"use strict";var i=n("eeba"),s=n.n(i);s.a},"3e59":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("ALayout",{staticClass:"container",class:e.isVertical?"vertical":"horizontal"},[n(e.layout.menuLayout,{tag:"compontent",staticClass:"layout-sider layout-header",class:{"header-fixed":!e.isVertical&&e.isFixedHeader,"sider-fixed":e.isVertical&&e.isFixedSider,"menu-theme-light":"light"===e.menuTheme,"menu-right":e.isMenuRight},attrs:{collapsible:"",breakpoint:"xl",theme:e.menuTheme,width:e.siderWidth},model:{value:e.collapsed,callback:function(t){e.collapsed=t},expression:"collapsed"}},[n("Logo",{attrs:{collapsed:e.collapsed,theme:e.menuTheme}}),n("VMenu",{staticClass:"menu",attrs:{"menu-data":e.menuList,"selected-keys":e.currentName,"open-keys":e.layout.openKeys,mode:e.layout.mode,theme:e.menuTheme},on:{"update:openKeys":function(t){return e.$set(e.layout,"openKeys",t)},"update:open-keys":function(t){return e.$set(e.layout,"openKeys",t)},click:e.pushRouter}}),e.isVertical?e._e():n("div",{staticClass:"header-tool"},[n("FullScreen"),n("SettingBtn",{on:{click:e.toggleSetting}}),n("UserMenu")],1)],1),n("ALayout",{staticClass:"layout-main",style:{marginLeft:e.layoutMainLeft+"px"}},[e.isVertical?n("ALayoutHeader",{staticClass:"layout-main-header",class:{"header-fixed":e.isFixedHeader},style:{paddingLeft:e.layoutMainHeaderLeft+"px"}},[n("div",{staticClass:"trigger v-icon-hover",on:{click:e.toggleCollapsed}},[n("AIcon",{attrs:{type:e.collapsed?"menu-unfold":"menu-fold"}})],1),e.isMobileDevice?e._e():n("Breadcrumb"),n("div",{staticClass:"header-tool"},[n("FullScreen"),n("SettingBtn",{on:{click:e.toggleSetting}}),n("UserMenu")],1)],1):e._e(),n("ALayoutContent",{class:[{"content-fixed-top":e.isFixedHeader},"layout-main-content"]},[e.isVertical?e._e():n("div",{staticClass:"horizontal-breadcrumb"},[n("Breadcrumb")],1),n("KeepAlive",{attrs:{include:e.getAlive("BasicLayout")}},[n("RouterView")],1)],1),n("Footer",{attrs:{width:e.isVertical?e.siderWidth:0}})],1)],1),e.showSetting?n("Setting",{model:{value:e.showSetting,callback:function(t){e.showSetting=t},expression:"showSetting"}}):e._e(),n("BackTop")],1)},s=[],r=n("2f62");const a={data(){return{screenTypeMixin:"xl",screenLevelMixin:6}},created(){this.breakpoints=[{minWidth:1600,type:"xxl",level:8},{minWidth:1400,type:"xl",level:7},{minWidth:1200,type:"xl",level:6},{minWidth:992,type:"lg",level:5},{minWidth:768,type:"md",level:3.8},{minWidth:576,type:"sm",level:2.8},{minWidth:0,type:"xs",level:0}],this.$_screen_change(),this.$_screen_change=this.$util.throttle(this.$_screen_change,170,!0),window.addEventListener("resize",this.$_screen_change)},beforeDestroy(){window.removeEventListener("resize",this.$_screen_change)},methods:{$_screen_change(){const e=Math.min(window.screen.width,document.body.clientWidth);this.breakpoints.some(t=>{if(t.minWidth<=e){var n=[t.type,t.level];return this.screenTypeMixin=n[0],this.screenLevelMixin=n[1],this.$store.commit("app/setScreenType",t),!0}return!1})}}};var l=a,o=n("56dc"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:[e.isVertical?"vertical":"horizontal",e.theme]},[e.$app.logoPath?e._m(0):e._e(),n("h1",{directives:[{name:"show",rawName:"v-show",value:e.title,expression:"title"}]},[e._v(e._s(e.title))])])},u=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("img",{staticClass:"logo",attrs:{src:e.publicPath+e.$app.logoPath,alt:"图标",height:"36",width:"36"}})}],h={name:"Logo",props:{collapsed:Boolean,theme:{type:String,validator:e=>["dark","light"].includes(e)}},data(){return{title:this.$app.title.small,publicPath:""}},computed:Object(r["e"])("app",{isVertical:e=>e.layout.isVertical}),watch:{collapsed(e){this.isVertical&&e?this.title=null:setTimeout(()=>this.title=this.$app.title.small,168)}}},d=h,p=(n("230a"),n("2877")),m=Object(p["a"])(d,c,u,!1,null,"b7319466",null),y=m.exports,f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"user v-icon-hover"},[n("ADropdown",{scopedSlots:e._u([{key:"overlay",fn:function(){return[n("AMenu",{staticClass:"user-menu"},[n("AMenuItem",[n("AIcon",{attrs:{type:"user"}}),e._v("\n                    个人设置\n                ")],1),n("AMenuDivider"),n("AMenuItem",{on:{click:e.logout}},[n("AIcon",{attrs:{type:"logout"}}),e._v("\n                    退出登录\n                ")],1)],1)]},proxy:!0}])},[n("div",[n("AAvatar",{staticClass:"user-avatar v-theme-bg",attrs:{size:36,src:e.avatar,alt:e.nickName.slice(0,3)}},[e._v("\n                "+e._s(e.nickName.slice(0,5))+"\n            ")]),n("span",{staticClass:"user-nickname"},[e._v(e._s(e.nickName))])],1)])],1)},b=[];function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.forEach(function(t){g(e,t,n[t])})}return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w={name:"UserMenu",computed:v({},Object(r["e"])("user",["avatar","nickName"])),methods:v({},Object(r["d"])("user",["setToken"]),{logout(){this.setToken(),this.$router.replace({name:this.$app.loginName})}})},_=w,O=(n("99e5"),Object(p["a"])(_,f,b,!1,null,"77796a2c",null)),x=O.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.showFullScreenBtn?n("div",{staticClass:"full-screen v-icon-hover",on:{click:e.handleToggle}},[e._t("default",[n("ATooltip",{attrs:{title:e.isFullScreen?"退出全屏":"全屏"}},[n("div",[n("AIcon",{staticClass:"full-screen-icon",attrs:{type:e.isFullScreen?"fullscreen-exit":"fullscreen"}})],1)])],{isFullScreen:e.isFullScreen})],2):e._e()},F=[],L={name:"FullScreen",data(){return{showFullScreenBtn:!0,isFullScreen:!1}},mounted(){if(this.showFullScreenBtn=window.navigator.userAgent.search("MSIE")<0,!this.showFullScreenBtn)return!1;const e=document.documentElement,t=[{event:"fullscreen",listener:"fullscreenchange",exit:document.exitFullscreen,full:e.requestFullscreen},{event:"mozFullScreen",listener:"mozfullscreenchange",exit:document.exitFullscreen||document.mozCancelFullScreen,full:e.requestFullscreen||e.mozRequestFullScreen},{event:"webkitIsFullScreen",listener:"webkitfullscreenchange",exit:document.webkitCancelFullScreen,full:e.webkitRequestFullScreen}];this.$nextTick(()=>{this.browser=t.find(e=>void 0!==document[e.event]),this.browser?(this.showFullScreenBtn=!0,this.isFullScreen=!!document[this.browser.event],this.$emit("change",this.isFullScreen),document.addEventListener(this.browser.listener,this.bindScreenToggle)):this.showFullScreenBtn=!1})},beforeDestroy(){this.browser&&document.removeEventListener(this.browser.listener,this.bindScreenToggle)},methods:{handleToggle(){this.isFullScreen?this.browser.exit.call(document):this.browser.full.call(document.documentElement)},bindScreenToggle(){this.isFullScreen=!!document[this.browser.event],this.$emit("change",this.isFullScreen)}}},k=L,$=(n("ba79"),Object(p["a"])(k,S,F,!1,null,"340a72d8",null)),A=$.exports,M=function(e,t){var n=t._c;return n("ATooltip",{attrs:{title:"界面设置"}},[n("div",t._g({staticClass:"setting v-icon-hover"},t.listeners),[n("AIcon",{staticClass:"setting-icon",attrs:{type:"setting"}})],1)])},j=[],C=(n("d012"),{}),K=Object(p["a"])(C,M,j,!0,null,"078ba905",null),T=K.exports,V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ABreadcrumb",{staticClass:"breadcrumb",attrs:{routes:e.routes},scopedSlots:e._u([{key:"itemRender",fn:function(t){var i=t.route;return[e.routes.indexOf(i)===e.routes.length-1?n("a",[e._v("\n            "+e._s(i.meta.title)+"\n        ")]):n("RouterLink",{attrs:{to:i}},[e._v("\n            "+e._s(i.meta.title)+"\n        ")])]}}])})},B=[];function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.forEach(function(t){D(e,t,n[t])})}return e}function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E={name:"Breadcrumb",data(){return{routes:[]}},watch:{"$route.name":{handler(){this.routes=[],this.findOpenRoute(this.$router.options.routes)},immediate:!0}},methods:{findOpenRoute(e){return e.some(e=>{return this.routes.push(P({},e,{path:e.name})),e.name===this.$route.name||(!(!Array.isArray(e.children)||!this.findOpenRoute(e.children))||(this.routes.pop(),!1))})}}},R=E,I=(n("1dde"),Object(p["a"])(R,V,B,!1,null,"db6a18da",null)),W=I.exports,z=n("07a1"),N=function(e,t){var n=t._c;return n("ABackTop",[n("div",{staticClass:"back-top"},[n("AIcon",{staticClass:"back-top-icon",attrs:{type:"up"}})],1)])},H=[],q=(n("168c"),{}),U=Object(p["a"])(q,N,H,!0,null,"7fea3aa2",null),Y=U.exports;function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.forEach(function(t){G(e,t,n[t])})}return e}function G(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const Q=e=>Array.isArray(e)&&e.filter(e=>!(e.meta&&e.meta.hideInMenu));var X={name:"BasicLayout",components:{MenuDrawer:()=>n.e("MenuDrawer").then(n.bind(null,"2e02")),Setting:()=>n.e("Setting").then(n.bind(null,"a3ba")),Logo:y,SettingBtn:T,UserMenu:x,FullScreen:A,Breadcrumb:W,Footer:z["a"],BackTop:Y},mixins:[l,o["a"]],data(){return{menuList:[],currentName:[this.$route.name],collapsed:!1,showSetting:!1,vertical:{openKeys:[],mode:"inline",menuLayout:"ALayoutSider"},horizontal:{openKeys:[],mode:"horizontal",menuLayout:"ALayoutHeader"},cacheOpenKeys:[],cacheIsVertical:this.isVertical,isOpenKeysLock:!1}},computed:J({},Object(r["e"])("app",{menuTheme:e=>e.layout.menuTheme,isVertical:e=>e.layout.isVertical,isFixedHeader:e=>e.layout.isFixedHeader,isFixedSider:e=>e.layout.isFixedSider,isMenuRight:e=>e.layout.isMenuRight}),Object(r["c"])("app",["getAlive","isMobileDevice"]),{layout(){return this.isVertical?this.vertical:this.horizontal},siderWidth(){const e=this.isMobileDevice?0:80,t=16*Math.max(this.screenLevelMixin,5)+120;return this.collapsed?e:t},layoutMainLeft(){return this.isVertical&&this.isFixedSider&&!this.isMobileDevice?this.siderWidth:0},layoutMainHeaderLeft(){return this.isFixedHeader&&!this.isMobileDevice?this.siderWidth:0}}),watch:{"$route.name":{handler(e){if(this.currentName.splice(0,1,e),this.isOpenKeysLock)return this.isOpenKeysLock=!1;this.vertical.openKeys=this.getOpenKeys(e)}},collapsed(){var e=[this.vertical.openKeys,this.cacheOpenKeys];this.cacheOpenKeys=e[0],this.vertical.openKeys=e[1]},isMobileDevice:{handler(e){e?(this.cacheIsVertical=this.isVertical,this.setLayout({isVertical:!0}),this.vertical.menuLayout="MenuDrawer",this.collapsed=!0):(this.setLayout({isVertical:this.cacheIsVertical}),this.vertical.menuLayout="ALayoutSider")},immediate:!0}},created(){this.setLayout(this.$db.get("layout")),this.setMenuList(),this.getOpenKeys=this.$util.cached(this.getOpenKeys),this.vertical.openKeys=this.getOpenKeys(this.$route.name)},methods:J({},Object(r["d"])("app",["setLayout"]),{pushRouter(e){let t=e.key;this.$router.push({name:t}),this.isOpenKeysLock=!0},setMenuList(){const e=this.$router.options.routes.find(e=>e.name===this.$app.mainName);e&&Array.isArray(e.children)&&(this.menuList=this.getMenu(e.children))},getMenu(e){return e.map(e=>{let t=J({},e.meta||{},{key:e.name});const n=Q(e.children);return n&&n.length&&(t.children=this.getMenu(n),1===t.children.length&&(t=t.children[0])),t})},getOpenKeys(e){const t=[];return this.findOpenKeys(t,e,this.menuList),t.length?t:this.vertical.openKeys},findOpenKeys(e,t,n){return n.some(n=>{return n.key===t||(e.push(n.key),Array.isArray(n.children)?this.findOpenKeys(e,t,n.children):(e.pop(),!1))})},toggleCollapsed(){this.collapsed=!this.collapsed},toggleSetting(){this.showSetting=!0}})},Z=X,ee=(n("ac10"),Object(p["a"])(Z,i,s,!1,null,"7ce8d37e",null));t["default"]=ee.exports},"56dc":function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"b",function(){return a});var i=n("2f62");function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.forEach(function(t){r(e,t,n[t])})}return e}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const a=[{text:"薄暮",name:"dust-red",variables:{"@primary-color":"#f5222d"}},{text:"金盏花",name:"alendula-gold",variables:{"@primary-color":"#faad14"}},{text:"极光绿",name:"polar-green",variables:{"@primary-color":"#52C41A"}},{text:"明青",name:"cyan",variables:{"@primary-color":"#13C2C2"}},{text:"拂晓蓝",name:"daybreak-blue",variables:{"@primary-color":"#1890FF"}},{text:"酱紫",name:"golden-purple",variables:{"@primary-color":"#722ED1"}}],l={computed:s({},Object(i["e"])("app",{theme:e=>e.layout.theme})),watch:{theme:{handler(e,t){this.$_theme_updateTheme(e,t)}}},created(){this.$_theme_updateTheme=this.$util.throttle(this.$_theme_updateTheme,1200,!0),this.$_theme_init(),this.$_theme_updateClass(this.theme)},methods:s({},Object(i["d"])("app",["setLayout"]),{$_theme_init(){const e=this.$db.get("layout",{}).theme;this.setLayout({theme:e})},$_theme_updateTheme(e){const t=a.find(t=>t.name===e);(t||window.less)&&window.less.modifyVars(t.variables).then(()=>this.$_theme_updateClass(e)).catch(()=>this.$message.error("主题更换失败！"))},$_theme_updateClass(e){a.forEach(e=>document.body.classList.remove(e.name)),document.body.classList.add(e)}})}},"5de2":function(e,t,n){"use strict";var i=n("64f3"),s=n.n(i);s.a},"64f3":function(e,t,n){},"8d97":function(e,t,n){},"99e5":function(e,t,n){"use strict";var i=n("fd9f"),s=n.n(i);s.a},ac10:function(e,t,n){"use strict";var i=n("ecab"),s=n.n(i);s.a},b3d2:function(e,t,n){},b75a:function(e,t,n){},ba79:function(e,t,n){"use strict";var i=n("bc10"),s=n.n(i);s.a},bc10:function(e,t,n){},d012:function(e,t,n){"use strict";var i=n("b75a"),s=n.n(i);s.a},ecab:function(e,t,n){},eeba:function(e,t,n){},fd9f:function(e,t,n){}}]);