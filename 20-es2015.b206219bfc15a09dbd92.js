(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{CISS:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J"),i=u("K7eL");class o{constructor(l,n,u){this.goodsInfoService=l,this.router=n,this.route=u,this.searchName="",this.searchCode="",this.searchCategory="",this.pageSize=20,this.pageIndex=1,this.scrollDisabled=!1}ngOnInit(){this.route.queryParams.subscribe(l=>{this.searchName=l.searchName?l.searchName:"",this.getGoodsInfoListFunc()})}getGoodsInfoListFunc(){this.goodsInfoService.getGoodsInfoList(this.pageIndex,this.pageSize,this.searchCode,this.searchName,this.searchCategory).subscribe(l=>{this.goodsInfoList=l.results,this.length=l.count,this.goodsInfoList.length===this.length&&(this.scrollDisabled=!0)})}loadData(l){console.log("\u52a0\u8f7d\u6570\u636e"),setTimeout(()=>{this.pageIndex=this.pageIndex+1,this.goodsInfoService.getGoodsInfoList(this.pageIndex,this.pageSize,this.searchCode,this.searchName,this.searchCategory).subscribe(l=>{for(const n of l.results)this.goodsInfoList.push(n);this.length=l.count,this.goodsInfoList.length===this.length&&(this.scrollDisabled=!0)}),l.target.complete()},500)}toProductDetail(l){this.router.navigate(["/goods-info-detail",l.id])}goSearchPage(){this.router.navigate(["/goods-info-search"])}}class e{}var r=u("pMnS"),a=u("oBZk"),s=u("ZZ/e"),b=u("iInd"),c=u("SVse"),h=u("VDRc"),d=u("/q54"),g=u("s7LF"),f=t.pb({encapsulation:0,styles:[[""]],data:{}});function p(l){return t.Ib(0,[(l()(),t.rb(0,0,null,null,15,null,null,null,null,null,null,null)),(l()(),t.rb(1,0,null,null,14,"ion-card",[["class","welcome-card"],["style","width: 49%; max-width: 200px; margin: 1px"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.toProductDetail(l.context.$implicit)&&t),t}),a.F,a.f)),t.qb(2,49152,null,0,s.k,[t.h,t.k,t.x],null,null),(l()(),t.rb(3,0,null,0,2,"ion-thumbnail",[["slot","start"],["style","height: 150px; width: 100%;"]],null,null,null,a.V,a.w)),t.qb(4,49152,null,0,s.xb,[t.h,t.k,t.x],null,null),(l()(),t.rb(5,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),t.rb(6,0,null,0,9,"ion-card-content",[],null,null,null,a.E,a.g)),t.qb(7,49152,null,0,s.l,[t.h,t.k,t.x],null,null),(l()(),t.rb(8,0,null,0,2,"div",[],null,null,null,null,null)),(l()(),t.rb(9,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Hb(10,null,["",""])),(l()(),t.rb(11,0,null,0,4,"div",[],null,null,null,null,null)),(l()(),t.rb(12,0,null,null,1,"label",[["style","color:red"]],null,null,null,null,null)),(l()(),t.Hb(13,null,["\xa5",""])),(l()(),t.rb(14,0,null,null,1,"s",[["style","color: #999999; margin-left: 10px"]],null,null,null,null,null)),(l()(),t.Hb(15,null,["",""]))],null,(function(l,n){l(n,5,0,n.context.$implicit.goods_front_image_medium),l(n,10,0,n.context.$implicit.name),l(n,13,0,n.context.$implicit.price_current),l(n,15,0,n.context.$implicit.price_original)}))}function x(l){return t.Ib(0,[(l()(),t.rb(0,0,null,null,16,"ion-item",[["detail",""],["fxLayout","column"],["style","--min-height : 100px"]],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==t.Cb(l,2).onClick()&&i),"click"===n&&(i=!1!==t.Cb(l,4).onClick(u)&&i),i}),a.M,a.n)),t.qb(1,49152,null,0,s.F,[t.h,t.k,t.x],{detail:[0,"detail"]},null),t.qb(2,16384,null,0,b.n,[b.m,b.a,[8,null],t.B,t.k],{routerLink:[0,"routerLink"]},null),t.Db(3,2),t.qb(4,737280,null,0,s.Jb,[c.g,s.Gb,t.k,b.m,[2,b.n]],null,null),t.qb(5,671744,null,0,h.b,[t.k,d.i,[2,h.e],d.f],{fxLayout:[0,"fxLayout"]},null),(l()(),t.rb(6,0,null,0,2,"ion-thumbnail",[["slot","start"],["style","height: 80px; width: 80px;"]],null,null,null,a.V,a.w)),t.qb(7,49152,null,0,s.xb,[t.h,t.k,t.x],null,null),(l()(),t.rb(8,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),t.rb(9,0,null,0,7,"ion-label",[],null,null,null,a.N,a.o)),t.qb(10,49152,null,0,s.L,[t.h,t.k,t.x],null,null),(l()(),t.Hb(11,0,[""," "])),(l()(),t.rb(12,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.rb(13,0,null,0,1,"label",[["style","color:red"]],null,null,null,null,null)),(l()(),t.Hb(14,null,["\xa5",""])),(l()(),t.rb(15,0,null,0,1,"s",[["style","color: #999999; margin-left: 10px"]],null,null,null,null,null)),(l()(),t.Hb(16,null,["",""]))],(function(l,n){l(n,1,0,"");var u=l(n,3,0,"/goods-info-detail",n.context.$implicit.id);l(n,2,0,u),l(n,4,0),l(n,5,0,"column")}),(function(l,n){l(n,8,0,n.context.$implicit.goods_front_image_medium),l(n,11,0,n.context.$implicit.name),l(n,14,0,n.context.$implicit.price_current),l(n,16,0,n.context.$implicit.price_original)}))}function m(l){return t.Ib(0,[(l()(),t.rb(0,0,null,null,14,"ion-header",[],null,null,null,a.I,a.j)),t.qb(1,49152,null,0,s.z,[t.h,t.k,t.x],null,null),(l()(),t.rb(2,0,null,0,12,"ion-toolbar",[["color","primary"]],null,null,null,a.X,a.y)),t.qb(3,49152,null,0,s.Ab,[t.h,t.k,t.x],{color:[0,"color"]},null),(l()(),t.rb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,a.D,a.e)),t.qb(5,49152,null,0,s.j,[t.h,t.k,t.x],null,null),(l()(),t.rb(6,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==t.Cb(l,8).onClick(u)&&i),i}),a.A,a.b)),t.qb(7,49152,null,0,s.e,[t.h,t.k,t.x],null,null),t.qb(8,16384,null,0,s.f,[[2,s.gb],s.Gb],null,null),(l()(),t.rb(9,0,null,0,5,"ion-title",[],null,null,null,a.W,a.x)),t.qb(10,49152,null,0,s.yb,[t.h,t.k,t.x],null,null),(l()(),t.rb(11,0,null,0,3,"ion-searchbar",[],null,[[null,"mouseenter"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var i=!0,o=l.component;return"ionBlur"===n&&(i=!1!==t.Cb(l,14)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==t.Cb(l,14)._handleInputEvent(u.target)&&i),"mouseenter"===n&&(i=!1!==o.goSearchPage()&&i),i}),a.P,a.q)),t.Eb(5120,null,g.c,(function(l){return[l]}),[s.Kb]),t.qb(13,49152,null,0,s.ib,[t.h,t.k,t.x],null,null),t.qb(14,16384,null,0,s.Kb,[t.k],null,null),(l()(),t.rb(15,0,null,null,14,"ion-content",[],null,null,null,a.H,a.i)),t.qb(16,49152,null,0,s.s,[t.h,t.k,t.x],null,null),(l()(),t.rb(17,0,null,0,4,"div",[["fxLayout","row wrap"],["fxLayoutAlign","center center"]],null,null,null,null,null)),t.qb(18,671744,null,0,h.b,[t.k,d.i,[2,h.e],d.f],{fxLayout:[0,"fxLayout"]},null),t.qb(19,671744,null,0,h.a,[t.k,d.i,[2,h.d],d.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),(l()(),t.gb(16777216,null,null,1,null,p)),t.qb(21,278528,null,0,c.i,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),(l()(),t.rb(22,0,null,0,3,"ion-list",[],null,null,null,a.O,a.p)),t.qb(23,49152,null,0,s.M,[t.h,t.k,t.x],null,null),(l()(),t.gb(16777216,null,0,1,null,x)),t.qb(25,278528,null,0,c.i,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),(l()(),t.rb(26,0,null,0,3,"ion-infinite-scroll",[["threshold","100px"]],null,[[null,"ionInfinite"]],(function(l,n,u){var t=!0;return"ionInfinite"===n&&(t=!1!==l.component.loadData(u)&&t),t}),a.L,a.l)),t.qb(27,49152,null,0,s.C,[t.h,t.k,t.x],{disabled:[0,"disabled"],threshold:[1,"threshold"]},null),(l()(),t.rb(28,0,null,0,1,"ion-infinite-scroll-content",[["loadingSpinner","bubbles"],["loadingText","Loading more data..."]],null,null,null,a.K,a.m)),t.qb(29,49152,null,0,s.D,[t.h,t.k,t.x],{loadingSpinner:[0,"loadingSpinner"],loadingText:[1,"loadingText"]},null)],(function(l,n){var u=n.component;l(n,3,0,"primary"),l(n,18,0,"row wrap"),l(n,19,0,"center center"),l(n,21,0,u.goodsInfoList),l(n,25,0,u.goodsInfoList),l(n,27,0,u.scrollDisabled,"100px"),l(n,29,0,"bubbles","Loading more data...")}),null)}function k(l){return t.Ib(0,[(l()(),t.rb(0,0,null,null,1,"app-goods-info-list",[],null,null,null,m,f)),t.qb(1,114688,null,0,o,[i.a,b.m,b.a],null,null)],(function(l,n){l(n,1,0)}),null)}var I=t.nb("app-goods-info-list",o,k,{},{},[]),q=u("IP0z"),A=u("ura0"),L=u("Nhcz"),y=u("u9T3"),v=u("MfXf"),C=u("kCW2");u.d(n,"GoodsInfoListPageModuleNgFactory",(function(){return w}));var w=t.ob(e,[],(function(l){return t.zb([t.Ab(512,t.j,t.Z,[[8,[r.a,I]],[3,t.j],t.v]),t.Ab(4608,c.l,c.k,[t.s,[2,c.z]]),t.Ab(4608,g.f,g.f,[]),t.Ab(4608,g.a,g.a,[]),t.Ab(5120,t.b,(function(l,n){return[d.j(l,n)]}),[c.c,t.z]),t.Ab(4608,s.a,s.a,[t.x,t.g]),t.Ab(4608,s.Fb,s.Fb,[s.a,t.j,t.p]),t.Ab(4608,s.Ib,s.Ib,[s.a,t.j,t.p]),t.Ab(1073742336,c.b,c.b,[]),t.Ab(1073742336,g.e,g.e,[]),t.Ab(1073742336,g.b,g.b,[]),t.Ab(1073742336,g.d,g.d,[]),t.Ab(1073742336,d.c,d.c,[]),t.Ab(1073742336,q.a,q.a,[]),t.Ab(1073742336,h.c,h.c,[]),t.Ab(1073742336,A.a,A.a,[]),t.Ab(1073742336,L.a,L.a,[]),t.Ab(1073742336,y.a,y.a,[[2,d.g],t.z]),t.Ab(1073742336,v.a,v.a,[]),t.Ab(1073742336,s.Cb,s.Cb,[]),t.Ab(1073742336,C.a,C.a,[]),t.Ab(1073742336,b.o,b.o,[[2,b.t],[2,b.m]]),t.Ab(1073742336,e,e,[]),t.Ab(1024,b.k,(function(){return[[{path:"",component:o}]]}),[])])}))}}]);