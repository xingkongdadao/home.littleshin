(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{hm6C:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),o=u("mrSG"),i=u("ZZ/e"),e=u("K7eL"),b=u("mMk2"),r=u("GKSc"),a=function(l){function n(n,u,t,o,i){var e=l.call(this,n,u)||this;return e.loading=n,e.toast=u,e.goodsInfoService=t,e.goodsSkuService=o,e.router=i,e.goodsSkuList=[],e.scrollDisabled=!1,e.pageSize=20,e.pageIndex=1,e.showType="card",e.loadEnd=!1,e}return o.d(n,l),n.prototype.ngOnInit=function(){this.showLoading().then(),this.getGoodsSkuListFunc()},n.prototype.loadData=function(l){var n=this;setTimeout((function(){n.getGoodsSkuListFunc(),l.target.complete()}),500)},n.prototype.getGoodsSkuListFunc=function(){var l=this;this.scrollDisabled=!0,this.goodsSkuService.getGoodsSkuIncludeInfoList(this.pageIndex,this.pageSize).pipe().subscribe((function(n){for(var u=0,t=n.results;u<t.length;u++)l.goodsSkuList.push(t[u]);l.length=n.count,l.goodsSkuList.length<n.count?(l.pageIndex=l.pageIndex+1,l.scrollDisabled=!1):l.loadEnd=!0,l.dismissLoading()}),(function(n){console.log("\u52a0\u8f7d\u6570\u636e\u51fa\u9519"),console.log(n),l.scrollDisabled=!1,l.dismissLoading()}))},n.prototype.toProductDetail=function(l){this.router.navigate(["/goods-info-detail",l.id])},n.prototype.goSearchPage=function(){this.router.navigate(["/goods-info-search"])},n}(b.a),s=function(){return function(){}}(),c=u("pMnS"),d=u("oBZk"),g=u("ZYCi"),h=u("Ip0R"),p=u("21Lb"),f=u("OzfB"),m=u("A7o+"),k=u("gIcY"),x=t.rb({encapsulation:0,styles:[[""]],data:{}});function C(l){return t.Mb(0,[(l()(),t.tb(0,0,null,null,16,"ion-item",[["detail",""],["fxLayout","column"],["style","--min-height : 100px; margin: 0; padding: 0"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==t.Eb(l,2).onClick()&&o),"click"===n&&(o=!1!==t.Eb(l,4).onClick(u)&&o),o}),d.Q,d.p)),t.sb(1,49152,null,0,i.G,[t.h,t.k,t.z],{detail:[0,"detail"]},null),t.sb(2,16384,null,0,g.n,[g.m,g.a,[8,null],t.D,t.k],{routerLink:[0,"routerLink"]},null),t.Fb(3,2),t.sb(4,737280,null,0,i.Lb,[h.g,i.Ib,t.k,g.m,[2,g.n]],null,null),t.sb(5,671744,null,0,p.b,[t.k,f.i,[2,p.e],f.f],{fxLayout:[0,"fxLayout"]},null),(l()(),t.tb(6,0,null,0,2,"ion-thumbnail",[["slot","start"],["style","height: 150px; width: 150px;"]],null,null,null,d.Z,d.y)),t.sb(7,49152,null,0,i.yb,[t.h,t.k,t.z],null,null),(l()(),t.tb(8,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),t.tb(9,0,null,0,7,"ion-label",[],null,null,null,d.R,d.q)),t.sb(10,49152,null,0,i.M,[t.h,t.k,t.z],null,null),(l()(),t.Kb(11,0,[""," "])),(l()(),t.tb(12,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.tb(13,0,null,0,1,"label",[["style","color:red"]],null,null,null,null,null)),(l()(),t.Kb(14,null,["\u20ab",""])),(l()(),t.tb(15,0,null,0,1,"s",[["style","color: #999999; margin-left: 10px"]],null,null,null,null,null)),(l()(),t.Kb(16,null,["",""]))],(function(l,n){l(n,1,0,"");var u=l(n,3,0,"/goods-info-detail",n.context.$implicit.goods.id);l(n,2,0,u),l(n,4,0),l(n,5,0,"column")}),(function(l,n){l(n,8,0,n.context.$implicit.goods_front_image_medium),l(n,11,0,n.context.$implicit.sku_name),l(n,14,0,n.context.$implicit.price_current),l(n,16,0,n.context.$implicit.price_original)}))}function L(l){return t.Mb(0,[(l()(),t.tb(0,0,null,null,4,"div",[],null,null,null,null,null)),(l()(),t.tb(1,0,null,null,3,"ion-list",[["style","margin: 0; padding: 0"]],null,null,null,d.S,d.r)),t.sb(2,49152,null,0,i.N,[t.h,t.k,t.z],null,null),(l()(),t.ib(16777216,null,0,1,null,C)),t.sb(4,278528,null,0,h.i,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,4,0,n.component.goodsSkuList)}),null)}function y(l){return t.Mb(0,[(l()(),t.tb(0,0,null,null,15,null,null,null,null,null,null,null)),(l()(),t.tb(1,0,null,null,14,"ion-card",[["class","welcome-card"],["style","width: 49%; max-width: 200px; margin: 1px"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.toProductDetail(l.context.$implicit.goods)&&t),t}),d.G,d.e)),t.sb(2,49152,null,0,i.l,[t.h,t.k,t.z],null,null),(l()(),t.tb(3,0,null,0,2,"ion-thumbnail",[["slot","start"],["style","height: 150px; width: 100%;"]],null,null,null,d.Z,d.y)),t.sb(4,49152,null,0,i.yb,[t.h,t.k,t.z],null,null),(l()(),t.tb(5,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),t.tb(6,0,null,0,9,"ion-card-content",[],null,null,null,d.F,d.f)),t.sb(7,49152,null,0,i.m,[t.h,t.k,t.z],null,null),(l()(),t.tb(8,0,null,0,2,"div",[],null,null,null,null,null)),(l()(),t.tb(9,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Kb(10,null,["",""])),(l()(),t.tb(11,0,null,0,4,"div",[],null,null,null,null,null)),(l()(),t.tb(12,0,null,null,1,"label",[["style","color:red"]],null,null,null,null,null)),(l()(),t.Kb(13,null,["\u20ab",""])),(l()(),t.tb(14,0,null,null,1,"s",[["style","color: #999999; margin-left: 10px"]],null,null,null,null,null)),(l()(),t.Kb(15,null,["\u20ab",""]))],null,(function(l,n){l(n,5,0,n.context.$implicit.goods_front_image_medium),l(n,10,0,n.context.$implicit.goods.name_vn),l(n,13,0,n.context.$implicit.goods.price_current),l(n,15,0,n.context.$implicit.goods.price_original)}))}function S(l){return t.Mb(0,[(l()(),t.tb(0,0,null,null,5,"div",[],null,null,null,null,null)),(l()(),t.tb(1,0,null,null,4,"div",[["fxLayout","row wrap"],["fxLayoutAlign","center center"]],null,null,null,null,null)),t.sb(2,671744,null,0,p.b,[t.k,f.i,[2,p.e],f.f],{fxLayout:[0,"fxLayout"]},null),t.sb(3,671744,null,0,p.a,[t.k,f.i,[2,p.d],f.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),(l()(),t.ib(16777216,null,null,1,null,y)),t.sb(5,278528,null,0,h.i,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=n.component;l(n,2,0,"row wrap"),l(n,3,0,"center center"),l(n,5,0,u.goodsSkuList)}),null)}function v(l){return t.Mb(0,[(l()(),t.tb(0,0,null,null,3,"ion-label",[["class","endLine"]],null,null,null,d.R,d.q)),t.sb(1,49152,null,0,i.M,[t.h,t.k,t.z],null,null),(l()(),t.Kb(2,0,["\u2014\u2014\u2014\u2014 "," \u2014\u2014\u2014\u2014"])),t.Gb(131072,m.i,[m.j,t.h])],null,(function(l,n){l(n,2,0,t.Lb(n,2,0,t.Eb(n,3).transform("finished")))}))}function w(l){return t.Mb(0,[(l()(),t.tb(0,0,null,null,2,"div",[["class","endLineContainer"]],null,null,null,null,null)),(l()(),t.ib(16777216,null,null,1,null,v)),t.sb(2,16384,null,0,h.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,2,0,n.component.loadEnd)}),null)}function z(l){return t.Mb(0,[(l()(),t.tb(0,0,null,null,10,"ion-header",[],null,null,null,d.K,d.j)),t.sb(1,49152,null,0,i.A,[t.h,t.k,t.z],null,null),(l()(),t.tb(2,0,null,0,8,"ion-toolbar",[["color","primary"]],null,null,null,d.bb,d.A)),t.sb(3,49152,null,0,i.Bb,[t.h,t.k,t.z],{color:[0,"color"]},null),(l()(),t.tb(4,0,null,0,4,"div",[],null,null,null,null,null)),(l()(),t.tb(5,0,null,null,3,"ion-searchbar",[["style","padding-bottom: 0"]],null,[[null,"mousedown"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var o=!0,i=l.component;return"ionBlur"===n&&(o=!1!==t.Eb(l,8)._handleBlurEvent(u.target)&&o),"ionChange"===n&&(o=!1!==t.Eb(l,8)._handleInputEvent(u.target)&&o),"mousedown"===n&&(o=!1!==i.goSearchPage()&&o),o}),d.T,d.s)),t.Hb(5120,null,k.c,(function(l){return[l]}),[i.Mb]),t.sb(7,49152,null,0,i.jb,[t.h,t.k,t.z],null,null),t.sb(8,16384,null,0,i.Mb,[t.k],null,null),(l()(),t.tb(9,0,null,0,1,"ion-title",[],null,null,null,d.ab,d.z)),t.sb(10,49152,null,0,i.zb,[t.h,t.k,t.z],null,null),(l()(),t.tb(11,0,null,null,16,"ion-content",[],null,null,null,d.I,d.h)),t.sb(12,49152,null,0,i.t,[t.h,t.k,t.z],null,null),(l()(),t.tb(13,0,null,0,2,"h2",[["style","font-size: 24px; text-align: center;"]],null,null,null,null,null)),(l()(),t.Kb(14,null,["",""])),t.Gb(131072,m.i,[m.j,t.h]),(l()(),t.tb(16,0,null,0,5,"div",[],null,null,null,null,null)),t.sb(17,16384,null,0,h.n,[],{ngSwitch:[0,"ngSwitch"]},null),(l()(),t.ib(16777216,null,null,1,null,L)),t.sb(19,278528,null,0,h.o,[t.O,t.L,h.n],{ngSwitchCase:[0,"ngSwitchCase"]},null),(l()(),t.ib(16777216,null,null,1,null,S)),t.sb(21,278528,null,0,h.o,[t.O,t.L,h.n],{ngSwitchCase:[0,"ngSwitchCase"]},null),(l()(),t.tb(22,0,null,0,3,"ion-infinite-scroll",[["threshold","100px"]],null,[[null,"ionInfinite"]],(function(l,n,u){var t=!0;return"ionInfinite"===n&&(t=!1!==l.component.loadData(u)&&t),t}),d.O,d.m)),t.sb(23,49152,null,0,i.D,[t.h,t.k,t.z],{disabled:[0,"disabled"],threshold:[1,"threshold"]},null),(l()(),t.tb(24,0,null,0,1,"ion-infinite-scroll-content",[["loadingSpinner","bubbles"],["loadingText","Loading more data..."]],null,null,null,d.N,d.n)),t.sb(25,49152,null,0,i.E,[t.h,t.k,t.z],{loadingSpinner:[0,"loadingSpinner"],loadingText:[1,"loadingText"]},null),(l()(),t.ib(16777216,null,0,1,null,w)),t.sb(27,16384,null,0,h.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,3,0,"primary"),l(n,17,0,u.showType),l(n,19,0,"list"),l(n,21,0,"card"),l(n,23,0,u.scrollDisabled,"100px"),l(n,25,0,"bubbles","Loading more data..."),l(n,27,0,u.scrollDisabled)}),(function(l,n){l(n,14,0,t.Lb(n,14,0,t.Eb(n,15).transform("hot.recommend")))}))}function I(l){return t.Mb(0,[(l()(),t.tb(0,0,null,null,1,"app-hot-show-sku",[],null,null,null,z,x)),t.sb(1,114688,null,0,a,[i.Fb,i.Nb,e.a,r.a,g.m],null,null)],(function(l,n){l(n,1,0)}),null)}var M=t.pb("app-hot-show-sku",a,I,{},{},[]),D=u("Fzqc"),_=u("hUWP"),K=u("3pJQ"),O=u("V9q+"),E=u("MfXf"),F=u("kCW2");u.d(n,"HotShowSkuPageModuleNgFactory",(function(){return j}));var j=t.qb(s,[],(function(l){return t.Bb([t.Cb(512,t.j,t.bb,[[8,[c.a,M]],[3,t.j],t.x]),t.Cb(4608,h.l,h.k,[t.u,[2,h.z]]),t.Cb(4608,k.i,k.i,[]),t.Cb(4608,k.a,k.a,[]),t.Cb(5120,t.b,(function(l,n){return[f.j(l,n)]}),[h.c,t.B]),t.Cb(4608,i.a,i.a,[t.z,t.g]),t.Cb(4608,i.Hb,i.Hb,[i.a,t.j,t.q]),t.Cb(4608,i.Kb,i.Kb,[i.a,t.j,t.q]),t.Cb(1073742336,h.b,h.b,[]),t.Cb(1073742336,m.g,m.g,[]),t.Cb(1073742336,k.h,k.h,[]),t.Cb(1073742336,k.b,k.b,[]),t.Cb(1073742336,k.g,k.g,[]),t.Cb(1073742336,f.c,f.c,[]),t.Cb(1073742336,D.a,D.a,[]),t.Cb(1073742336,p.c,p.c,[]),t.Cb(1073742336,_.b,_.b,[]),t.Cb(1073742336,K.a,K.a,[]),t.Cb(1073742336,O.a,O.a,[[2,f.g],t.B]),t.Cb(1073742336,E.a,E.a,[]),t.Cb(1073742336,i.Db,i.Db,[]),t.Cb(1073742336,F.a,F.a,[]),t.Cb(1073742336,g.o,g.o,[[2,g.t],[2,g.m]]),t.Cb(1073742336,s,s,[]),t.Cb(1024,g.k,(function(){return[[{path:"",component:a}]]}),[])])}))}}]);