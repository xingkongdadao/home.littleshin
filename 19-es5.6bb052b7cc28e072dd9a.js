(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{CISS:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),o=u("K7eL"),i=function(){function l(l,n,u){this.goodsInfoService=l,this.router=n,this.route=u,this.searchName="",this.searchCode="",this.searchCategory="",this.pageSize=20,this.pageIndex=1,this.scrollDisabled=!1}return l.prototype.ngOnInit=function(){var l=this;this.route.queryParams.subscribe((function(n){l.searchName=n.searchName?n.searchName:"",l.getGoodsInfoListFunc()}))},l.prototype.getGoodsInfoListFunc=function(){var l=this;this.goodsInfoService.getGoodsInfoList(this.pageIndex,this.pageSize,this.searchCode,this.searchName,this.searchCategory).subscribe((function(n){l.goodsInfoList=n.results,l.length=n.count,l.goodsInfoList.length===l.length&&(l.scrollDisabled=!0)}))},l.prototype.loadData=function(l){var n=this;console.log("\u52a0\u8f7d\u6570\u636e"),setTimeout((function(){n.pageIndex=n.pageIndex+1,n.goodsInfoService.getGoodsInfoList(n.pageIndex,n.pageSize,n.searchCode,n.searchName,n.searchCategory).subscribe((function(l){for(var u=0,t=l.results;u<t.length;u++)n.goodsInfoList.push(t[u]);n.length=l.count,n.goodsInfoList.length===n.length&&(n.scrollDisabled=!0)})),l.target.complete()}),500)},l.prototype.toProductDetail=function(l){this.router.navigate(["/goods-info-detail",l.id])},l.prototype.goSearchPage=function(){this.router.navigate(["/goods-info-search"])},l}(),e=function(){return function(){}}(),b=u("pMnS"),r=u("oBZk"),a=u("ZZ/e"),s=u("ZYCi"),c=u("Ip0R"),h=u("21Lb"),d=u("OzfB"),g=u("gIcY"),f=t.rb({encapsulation:0,styles:[[""]],data:{}});function p(l){return t.Kb(0,[(l()(),t.tb(0,0,null,null,15,null,null,null,null,null,null,null)),(l()(),t.tb(1,0,null,null,14,"ion-card",[["class","welcome-card"],["style","width: 49%; max-width: 200px; margin: 1px"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.toProductDetail(l.context.$implicit)&&t),t}),r.M,r.f)),t.sb(2,49152,null,0,a.l,[t.h,t.k,t.z],null,null),(l()(),t.tb(3,0,null,0,2,"ion-thumbnail",[["slot","start"],["style","height: 150px; width: 100%;"]],null,null,null,r.ib,r.C)),t.sb(4,49152,null,0,a.yb,[t.h,t.k,t.z],null,null),(l()(),t.tb(5,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),t.tb(6,0,null,0,9,"ion-card-content",[],null,null,null,r.L,r.g)),t.sb(7,49152,null,0,a.m,[t.h,t.k,t.z],null,null),(l()(),t.tb(8,0,null,0,2,"div",[],null,null,null,null,null)),(l()(),t.tb(9,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Jb(10,null,["",""])),(l()(),t.tb(11,0,null,0,4,"div",[],null,null,null,null,null)),(l()(),t.tb(12,0,null,null,1,"label",[["style","color:red"]],null,null,null,null,null)),(l()(),t.Jb(13,null,["\xa5",""])),(l()(),t.tb(14,0,null,null,1,"s",[["style","color: #999999; margin-left: 10px"]],null,null,null,null,null)),(l()(),t.Jb(15,null,["",""]))],null,(function(l,n){l(n,5,0,n.context.$implicit.goods_front_image_medium),l(n,10,0,n.context.$implicit.name),l(n,13,0,n.context.$implicit.price_current),l(n,15,0,n.context.$implicit.price_original)}))}function m(l){return t.Kb(0,[(l()(),t.tb(0,0,null,null,16,"ion-item",[["detail",""],["fxLayout","column"],["style","--min-height : 100px"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==t.Eb(l,2).onClick()&&o),"click"===n&&(o=!1!==t.Eb(l,4).onClick(u)&&o),o}),r.Y,r.p)),t.sb(1,49152,null,0,a.G,[t.h,t.k,t.z],{detail:[0,"detail"]},null),t.sb(2,16384,null,0,s.n,[s.m,s.a,[8,null],t.D,t.k],{routerLink:[0,"routerLink"]},null),t.Fb(3,2),t.sb(4,737280,null,0,a.Lb,[c.g,a.Hb,t.k,s.m,[2,s.n]],null,null),t.sb(5,671744,null,0,h.b,[t.k,d.i,[2,h.e],d.f],{fxLayout:[0,"fxLayout"]},null),(l()(),t.tb(6,0,null,0,2,"ion-thumbnail",[["slot","start"],["style","height: 80px; width: 80px;"]],null,null,null,r.ib,r.C)),t.sb(7,49152,null,0,a.yb,[t.h,t.k,t.z],null,null),(l()(),t.tb(8,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),t.tb(9,0,null,0,7,"ion-label",[],null,null,null,r.Z,r.t)),t.sb(10,49152,null,0,a.M,[t.h,t.k,t.z],null,null),(l()(),t.Jb(11,0,[""," "])),(l()(),t.tb(12,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.tb(13,0,null,0,1,"label",[["style","color:red"]],null,null,null,null,null)),(l()(),t.Jb(14,null,["\xa5",""])),(l()(),t.tb(15,0,null,0,1,"s",[["style","color: #999999; margin-left: 10px"]],null,null,null,null,null)),(l()(),t.Jb(16,null,["",""]))],(function(l,n){l(n,1,0,"");var u=l(n,3,0,"/goods-info-detail",n.context.$implicit.id);l(n,2,0,u),l(n,4,0),l(n,5,0,"column")}),(function(l,n){l(n,8,0,n.context.$implicit.goods_front_image_medium),l(n,11,0,n.context.$implicit.name),l(n,14,0,n.context.$implicit.price_current),l(n,16,0,n.context.$implicit.price_original)}))}function k(l){return t.Kb(0,[(l()(),t.tb(0,0,null,null,14,"ion-header",[],null,null,null,r.Q,r.k)),t.sb(1,49152,null,0,a.A,[t.h,t.k,t.z],null,null),(l()(),t.tb(2,0,null,0,12,"ion-toolbar",[],null,null,null,r.lb,r.F)),t.sb(3,49152,null,0,a.Bb,[t.h,t.k,t.z],null,null),(l()(),t.tb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,r.K,r.e)),t.sb(5,49152,null,0,a.k,[t.h,t.k,t.z],null,null),(l()(),t.tb(6,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==t.Eb(l,8).onClick(u)&&o),o}),r.H,r.b)),t.sb(7,49152,null,0,a.f,[t.h,t.k,t.z],null,null),t.sb(8,16384,null,0,a.g,[[2,a.hb],a.Hb],null,null),(l()(),t.tb(9,0,null,0,5,"ion-title",[],null,null,null,r.jb,r.D)),t.sb(10,49152,null,0,a.zb,[t.h,t.k,t.z],null,null),(l()(),t.tb(11,0,null,0,3,"ion-searchbar",[],null,[[null,"mouseenter"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var o=!0,i=l.component;return"ionBlur"===n&&(o=!1!==t.Eb(l,14)._handleBlurEvent(u.target)&&o),"ionChange"===n&&(o=!1!==t.Eb(l,14)._handleInputEvent(u.target)&&o),"mouseenter"===n&&(o=!1!==i.goSearchPage()&&o),o}),r.cb,r.w)),t.Gb(5120,null,g.c,(function(l){return[l]}),[a.Mb]),t.sb(13,49152,null,0,a.jb,[t.h,t.k,t.z],null,null),t.sb(14,16384,null,0,a.Mb,[t.k],null,null),(l()(),t.tb(15,0,null,null,14,"ion-content",[],null,null,null,r.P,r.j)),t.sb(16,49152,null,0,a.t,[t.h,t.k,t.z],null,null),(l()(),t.tb(17,0,null,0,4,"div",[["fxLayout","row wrap"],["fxLayoutAlign","center center"]],null,null,null,null,null)),t.sb(18,671744,null,0,h.b,[t.k,d.i,[2,h.e],d.f],{fxLayout:[0,"fxLayout"]},null),t.sb(19,671744,null,0,h.a,[t.k,d.i,[2,h.d],d.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),(l()(),t.ib(16777216,null,null,1,null,p)),t.sb(21,278528,null,0,c.i,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.tb(22,0,null,0,3,"ion-list",[],null,null,null,r.ab,r.u)),t.sb(23,49152,null,0,a.N,[t.h,t.k,t.z],null,null),(l()(),t.ib(16777216,null,0,1,null,m)),t.sb(25,278528,null,0,c.i,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.tb(26,0,null,0,3,"ion-infinite-scroll",[["threshold","100px"]],null,[[null,"ionInfinite"]],(function(l,n,u){var t=!0;return"ionInfinite"===n&&(t=!1!==l.component.loadData(u)&&t),t}),r.T,r.m)),t.sb(27,49152,null,0,a.D,[t.h,t.k,t.z],{disabled:[0,"disabled"],threshold:[1,"threshold"]},null),(l()(),t.tb(28,0,null,0,1,"ion-infinite-scroll-content",[["loadingSpinner","bubbles"],["loadingText","Loading more data..."]],null,null,null,r.S,r.n)),t.sb(29,49152,null,0,a.E,[t.h,t.k,t.z],{loadingSpinner:[0,"loadingSpinner"],loadingText:[1,"loadingText"]},null)],(function(l,n){var u=n.component;l(n,18,0,"row wrap"),l(n,19,0,"center center"),l(n,21,0,u.goodsInfoList),l(n,25,0,u.goodsInfoList),l(n,27,0,u.scrollDisabled,"100px"),l(n,29,0,"bubbles","Loading more data...")}),null)}function C(l){return t.Kb(0,[(l()(),t.tb(0,0,null,null,1,"app-goods-info-list",[],null,null,null,k,f)),t.sb(1,114688,null,0,i,[o.a,s.m,s.a],null,null)],(function(l,n){l(n,1,0)}),null)}var x=t.pb("app-goods-info-list",i,C,{},{},[]),y=u("Fzqc"),L=u("hUWP"),I=u("3pJQ"),v=u("V9q+"),z=u("MfXf"),w=u("kCW2");u.d(n,"GoodsInfoListPageModuleNgFactory",(function(){return S}));var S=t.qb(e,[],(function(l){return t.Bb([t.Cb(512,t.j,t.bb,[[8,[b.a,x]],[3,t.j],t.x]),t.Cb(4608,c.l,c.k,[t.u,[2,c.x]]),t.Cb(4608,g.f,g.f,[]),t.Cb(4608,g.a,g.a,[]),t.Cb(5120,t.b,(function(l,n){return[d.j(l,n)]}),[c.c,t.B]),t.Cb(4608,a.a,a.a,[t.z,t.g]),t.Cb(4608,a.Gb,a.Gb,[a.a,t.j,t.q]),t.Cb(4608,a.Jb,a.Jb,[a.a,t.j,t.q]),t.Cb(1073742336,c.b,c.b,[]),t.Cb(1073742336,g.e,g.e,[]),t.Cb(1073742336,g.b,g.b,[]),t.Cb(1073742336,g.d,g.d,[]),t.Cb(1073742336,d.c,d.c,[]),t.Cb(1073742336,y.a,y.a,[]),t.Cb(1073742336,h.c,h.c,[]),t.Cb(1073742336,L.a,L.a,[]),t.Cb(1073742336,I.a,I.a,[]),t.Cb(1073742336,v.a,v.a,[[2,d.g],t.B]),t.Cb(1073742336,z.a,z.a,[]),t.Cb(1073742336,a.Db,a.Db,[]),t.Cb(1073742336,w.a,w.a,[]),t.Cb(1073742336,s.o,s.o,[[2,s.t],[2,s.m]]),t.Cb(1073742336,e,e,[]),t.Cb(1024,s.k,(function(){return[[{path:"",component:i}]]}),[])])}))}}]);