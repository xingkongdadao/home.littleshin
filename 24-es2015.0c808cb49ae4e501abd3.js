(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{CISS:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J"),i=u("K7eL"),o=u("mMk2"),e=u("ZZ/e");class r extends o.a{constructor(l,n,u,t,i){super(l,n),this.loading=l,this.toast=n,this.goodsInfoService=u,this.router=t,this.route=i,this.searchName="",this.searchCode="",this.searchCategory="",this.pageSize=20,this.pageIndex=1,this.scrollDisabled=!1}ngOnInit(){this.showLoading().then(),this.route.queryParams.subscribe(l=>{this.searchName=l.searchName?l.searchName:"",this.getGoodsInfoListFunc()})}getGoodsInfoListFunc(){this.goodsInfoService.getGoodsInfoList(this.pageIndex,this.pageSize,this.searchCode,this.searchName,this.searchCategory).subscribe(l=>{this.goodsInfoList=l.results,this.length=l.count,this.dismissLoading(),this.goodsInfoList.length===this.length&&(this.scrollDisabled=!0)})}loadData(l){console.log("\u52a0\u8f7d\u6570\u636e"),setTimeout(()=>{this.pageIndex=this.pageIndex+1,this.goodsInfoService.getGoodsInfoList(this.pageIndex,this.pageSize,this.searchCode,this.searchName,this.searchCategory).subscribe(l=>{for(const n of l.results)this.goodsInfoList.push(n);this.length=l.count,this.goodsInfoList.length===this.length&&(this.scrollDisabled=!0)}),l.target.complete()},500)}toProductDetail(l){this.router.navigate(["/goods-info-detail",l.id])}goSearchPage(){this.router.navigate(["/goods-info-search"])}}class b{}var a=u("pMnS"),s=u("oBZk"),c=u("iInd"),h=u("SVse"),d=u("VDRc"),g=u("/q54"),f=u("TSSN"),p=u("s7LF"),m=t.pb({encapsulation:0,styles:[[""]],data:{}});function x(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,15,null,null,null,null,null,null,null)),(l()(),t.rb(1,0,null,null,14,"ion-card",[["class","welcome-card"],["style","width: 49%; max-width: 200px; margin: 1px"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.toProductDetail(l.context.$implicit)&&t),t}),s.G,s.e)),t.qb(2,49152,null,0,e.l,[t.h,t.k,t.x],null,null),(l()(),t.rb(3,0,null,0,2,"ion-thumbnail",[["slot","start"],["style","height: 150px; width: 100%;"]],null,null,null,s.Z,s.y)),t.qb(4,49152,null,0,e.yb,[t.h,t.k,t.x],null,null),(l()(),t.rb(5,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),t.rb(6,0,null,0,9,"ion-card-content",[],null,null,null,s.F,s.f)),t.qb(7,49152,null,0,e.m,[t.h,t.k,t.x],null,null),(l()(),t.rb(8,0,null,0,2,"div",[],null,null,null,null,null)),(l()(),t.rb(9,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Ib(10,null,["",""])),(l()(),t.rb(11,0,null,0,4,"div",[],null,null,null,null,null)),(l()(),t.rb(12,0,null,null,1,"label",[["style","color:red"]],null,null,null,null,null)),(l()(),t.Ib(13,null,["\xa5",""])),(l()(),t.rb(14,0,null,null,1,"s",[["style","color: #999999; margin-left: 10px"]],null,null,null,null,null)),(l()(),t.Ib(15,null,["",""]))],null,(function(l,n){l(n,5,0,n.context.$implicit.goods_front_image_medium),l(n,10,0,n.context.$implicit.name),l(n,13,0,n.context.$implicit.price_current),l(n,15,0,n.context.$implicit.price_original)}))}function k(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,16,"ion-item",[["detail",""],["fxLayout","column"],["style","--min-height : 100px"]],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==t.Cb(l,2).onClick()&&i),"click"===n&&(i=!1!==t.Cb(l,4).onClick(u)&&i),i}),s.Q,s.p)),t.qb(1,49152,null,0,e.G,[t.h,t.k,t.x],{detail:[0,"detail"]},null),t.qb(2,16384,null,0,c.n,[c.m,c.a,[8,null],t.B,t.k],{routerLink:[0,"routerLink"]},null),t.Db(3,2),t.qb(4,737280,null,0,e.Lb,[h.g,e.Ib,t.k,c.m,[2,c.n]],null,null),t.qb(5,671744,null,0,d.b,[t.k,g.i,[2,d.e],g.f],{fxLayout:[0,"fxLayout"]},null),(l()(),t.rb(6,0,null,0,2,"ion-thumbnail",[["slot","start"],["style","height: 80px; width: 80px;"]],null,null,null,s.Z,s.y)),t.qb(7,49152,null,0,e.yb,[t.h,t.k,t.x],null,null),(l()(),t.rb(8,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),t.rb(9,0,null,0,7,"ion-label",[],null,null,null,s.R,s.q)),t.qb(10,49152,null,0,e.M,[t.h,t.k,t.x],null,null),(l()(),t.Ib(11,0,[""," "])),(l()(),t.rb(12,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.rb(13,0,null,0,1,"label",[["style","color:red"]],null,null,null,null,null)),(l()(),t.Ib(14,null,["\xa5",""])),(l()(),t.rb(15,0,null,0,1,"s",[["style","color: #999999; margin-left: 10px"]],null,null,null,null,null)),(l()(),t.Ib(16,null,["",""]))],(function(l,n){l(n,1,0,"");var u=l(n,3,0,"/goods-info-detail",n.context.$implicit.id);l(n,2,0,u),l(n,4,0),l(n,5,0,"column")}),(function(l,n){l(n,8,0,n.context.$implicit.goods_front_image_medium),l(n,11,0,n.context.$implicit.name),l(n,14,0,n.context.$implicit.price_current),l(n,16,0,n.context.$implicit.price_original)}))}function I(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,4,"div",[["class","endLineContainer"]],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,3,"ion-label",[["class","endLine"]],null,null,null,s.R,s.q)),t.qb(2,49152,null,0,e.M,[t.h,t.k,t.x],null,null),(l()(),t.Ib(3,0,["\u2014\u2014\u2014\u2014 "," \u2014\u2014\u2014\u2014"])),t.Eb(131072,f.i,[f.j,t.h])],null,(function(l,n){l(n,3,0,t.Jb(n,3,0,t.Cb(n,4).transform("finished")))}))}function q(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,17,"ion-header",[],null,null,null,s.K,s.j)),t.qb(1,49152,null,0,e.A,[t.h,t.k,t.x],null,null),(l()(),t.rb(2,0,null,0,15,"ion-toolbar",[["color","primary"]],null,null,null,s.bb,s.A)),t.qb(3,49152,null,0,e.Bb,[t.h,t.k,t.x],{color:[0,"color"]},null),(l()(),t.rb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,s.E,s.d)),t.qb(5,49152,null,0,e.k,[t.h,t.k,t.x],null,null),(l()(),t.rb(6,0,null,0,2,"ion-back-button",[["style","padding-left: 8px"]],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==t.Cb(l,8).onClick(u)&&i),i}),s.C,s.b)),t.qb(7,49152,null,0,e.f,[t.h,t.k,t.x],{text:[0,"text"]},null),t.qb(8,16384,null,0,e.g,[[2,e.hb],e.Ib],null,null),(l()(),t.rb(9,0,null,0,3,"ion-searchbar",[["style","padding-bottom: 0"]],null,[[null,"mousedown"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var i=!0,o=l.component;return"ionBlur"===n&&(i=!1!==t.Cb(l,12)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==t.Cb(l,12)._handleInputEvent(u.target)&&i),"mousedown"===n&&(i=!1!==o.goSearchPage()&&i),i}),s.T,s.s)),t.Fb(5120,null,p.c,(function(l){return[l]}),[e.Mb]),t.qb(11,49152,null,0,e.jb,[t.h,t.k,t.x],null,null),t.qb(12,16384,null,0,e.Mb,[t.k],null,null),(l()(),t.rb(13,0,null,0,4,"ion-buttons",[["slot","end"]],null,null,null,s.E,s.d)),t.qb(14,49152,null,0,e.k,[t.h,t.k,t.x],null,null),(l()(),t.rb(15,0,null,0,2,"ion-back-button",[["defaultHref","/home"],["icon","home"],["text",""]],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==t.Cb(l,17).onClick(u)&&i),i}),s.C,s.b)),t.qb(16,49152,null,0,e.f,[t.h,t.k,t.x],{defaultHref:[0,"defaultHref"],icon:[1,"icon"],text:[2,"text"]},null),t.qb(17,16384,null,0,e.g,[[2,e.hb],e.Ib],{defaultHref:[0,"defaultHref"]},null),(l()(),t.rb(18,0,null,null,16,"ion-content",[],null,null,null,s.I,s.h)),t.qb(19,49152,null,0,e.t,[t.h,t.k,t.x],null,null),(l()(),t.rb(20,0,null,0,4,"div",[["fxLayout","row wrap"],["fxLayoutAlign","center center"]],null,null,null,null,null)),t.qb(21,671744,null,0,d.b,[t.k,g.i,[2,d.e],g.f],{fxLayout:[0,"fxLayout"]},null),t.qb(22,671744,null,0,d.a,[t.k,g.i,[2,d.d],g.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),(l()(),t.gb(16777216,null,null,1,null,x)),t.qb(24,278528,null,0,h.i,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),(l()(),t.rb(25,0,null,0,3,"ion-list",[],null,null,null,s.S,s.r)),t.qb(26,49152,null,0,e.N,[t.h,t.k,t.x],null,null),(l()(),t.gb(16777216,null,0,1,null,k)),t.qb(28,278528,null,0,h.i,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),(l()(),t.rb(29,0,null,0,3,"ion-infinite-scroll",[["threshold","100px"]],null,[[null,"ionInfinite"]],(function(l,n,u){var t=!0;return"ionInfinite"===n&&(t=!1!==l.component.loadData(u)&&t),t}),s.O,s.m)),t.qb(30,49152,null,0,e.D,[t.h,t.k,t.x],{disabled:[0,"disabled"],threshold:[1,"threshold"]},null),(l()(),t.rb(31,0,null,0,1,"ion-infinite-scroll-content",[["loadingSpinner","bubbles"],["loadingText","Loading more data..."]],null,null,null,s.N,s.n)),t.qb(32,49152,null,0,e.E,[t.h,t.k,t.x],{loadingSpinner:[0,"loadingSpinner"],loadingText:[1,"loadingText"]},null),(l()(),t.gb(16777216,null,0,1,null,I)),t.qb(34,16384,null,0,h.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,3,0,"primary"),l(n,7,0,""),l(n,16,0,"/home","home",""),l(n,17,0,"/home"),l(n,21,0,"row wrap"),l(n,22,0,"center center"),l(n,24,0,u.goodsInfoList),l(n,28,0,u.goodsInfoList),l(n,30,0,u.scrollDisabled,"100px"),l(n,32,0,"bubbles","Loading more data..."),l(n,34,0,u.scrollDisabled)}),null)}function y(l){return t.Kb(0,[(l()(),t.rb(0,0,null,null,1,"app-goods-info-list",[],null,null,null,q,m)),t.qb(1,114688,null,0,r,[e.Fb,e.Nb,i.a,c.m,c.a],null,null)],(function(l,n){l(n,1,0)}),null)}var L=t.nb("app-goods-info-list",r,y,{},{},[]),A=u("IP0z"),v=u("ura0"),C=u("Nhcz"),w=u("u9T3"),S=u("MfXf"),D=u("kCW2");u.d(n,"GoodsInfoListPageModuleNgFactory",(function(){return N}));var N=t.ob(b,[],(function(l){return t.zb([t.Ab(512,t.j,t.Z,[[8,[a.a,L]],[3,t.j],t.v]),t.Ab(4608,h.l,h.k,[t.s,[2,h.z]]),t.Ab(4608,p.i,p.i,[]),t.Ab(4608,p.a,p.a,[]),t.Ab(5120,t.b,(function(l,n){return[g.j(l,n)]}),[h.c,t.z]),t.Ab(4608,e.a,e.a,[t.x,t.g]),t.Ab(4608,e.Hb,e.Hb,[e.a,t.j,t.p]),t.Ab(4608,e.Kb,e.Kb,[e.a,t.j,t.p]),t.Ab(1073742336,h.b,h.b,[]),t.Ab(1073742336,f.g,f.g,[]),t.Ab(1073742336,p.h,p.h,[]),t.Ab(1073742336,p.b,p.b,[]),t.Ab(1073742336,p.g,p.g,[]),t.Ab(1073742336,g.c,g.c,[]),t.Ab(1073742336,A.a,A.a,[]),t.Ab(1073742336,d.c,d.c,[]),t.Ab(1073742336,v.b,v.b,[]),t.Ab(1073742336,C.a,C.a,[]),t.Ab(1073742336,w.a,w.a,[[2,g.g],t.z]),t.Ab(1073742336,S.a,S.a,[]),t.Ab(1073742336,e.Db,e.Db,[]),t.Ab(1073742336,D.a,D.a,[]),t.Ab(1073742336,c.o,c.o,[[2,c.t],[2,c.m]]),t.Ab(1073742336,b,b,[]),t.Ab(1024,c.k,(function(){return[[{path:"",component:r}]]}),[])])}))}}]);