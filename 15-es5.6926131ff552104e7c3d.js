(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"6Ayl":function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),o=function(){return function(){}}(),i=u("pMnS"),e=u("oBZk"),r=u("ZZ/e"),a=u("ZYCi"),b=u("Ip0R"),c=u("21Lb"),s=u("OzfB"),d=u("gIcY"),g=u("mrSG"),h=u("K7eL"),f=function(l){function n(n,u,t,o){var i=l.call(this,n,u)||this;return i.loading=n,i.toast=u,i.goodsInfoService=t,i.router=o,i.searchName="",i.searchCode="",i.searchCategory="",i.scrollDisabled=!1,i.pageSize=20,i.pageIndex=1,i.showType="card",i}return g.d(n,l),n.prototype.ngOnInit=function(){this.getGoodsInfoListFunc()},n.prototype.getGoodsInfoListFunc=function(){var l=this;this.showLoading().then(),this.goodsInfoService.getGoodsInfoList(this.pageIndex,this.pageSize,this.searchCode,this.searchName,this.searchCategory).subscribe((function(n){l.goodsInfoList=n.results,l.length=n.count,l.dismissLoading(),l.goodsInfoList.length===l.length&&(l.scrollDisabled=!0)}))},n.prototype.loadData=function(l){var n=this;setTimeout((function(){n.pageIndex=n.pageIndex+1,n.goodsInfoService.getGoodsInfoList(n.pageIndex,n.pageSize,n.searchCode,n.searchName,n.searchCategory).subscribe((function(l){for(var u=0,t=l.results;u<t.length;u++)n.goodsInfoList.push(t[u]);n.length=l.count,n.goodsInfoList.length===n.length&&(n.scrollDisabled=!0)})),l.target.complete()}),500)},n.prototype.toProductDetail=function(l){this.router.navigate(["/goods-info-detail",l.id])},n.prototype.goSearchPage=function(){this.router.navigate(["/goods-info-search"])},n}(u("mMk2").a),p=t.rb({encapsulation:0,styles:[[""]],data:{}});function m(l){return t.Kb(0,[(l()(),t.tb(0,0,null,null,16,"ion-item",[["detail",""],["fxLayout","column"],["style","--min-height : 100px; margin: 0; padding: 0"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==t.Eb(l,2).onClick()&&o),"click"===n&&(o=!1!==t.Eb(l,4).onClick(u)&&o),o}),e.M,e.n)),t.sb(1,49152,null,0,r.G,[t.h,t.k,t.z],{detail:[0,"detail"]},null),t.sb(2,16384,null,0,a.n,[a.m,a.a,[8,null],t.D,t.k],{routerLink:[0,"routerLink"]},null),t.Fb(3,2),t.sb(4,737280,null,0,r.Lb,[b.g,r.Ib,t.k,a.m,[2,a.n]],null,null),t.sb(5,671744,null,0,c.b,[t.k,s.i,[2,c.e],s.f],{fxLayout:[0,"fxLayout"]},null),(l()(),t.tb(6,0,null,0,2,"ion-thumbnail",[["slot","start"],["style","height: 150px; width: 150px;"]],null,null,null,e.V,e.w)),t.sb(7,49152,null,0,r.yb,[t.h,t.k,t.z],null,null),(l()(),t.tb(8,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),t.tb(9,0,null,0,7,"ion-label",[],null,null,null,e.N,e.o)),t.sb(10,49152,null,0,r.M,[t.h,t.k,t.z],null,null),(l()(),t.Jb(11,0,[""," "])),(l()(),t.tb(12,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.tb(13,0,null,0,1,"label",[["style","color:red"]],null,null,null,null,null)),(l()(),t.Jb(14,null,["\u20ab",""])),(l()(),t.tb(15,0,null,0,1,"s",[["style","color: #999999; margin-left: 10px"]],null,null,null,null,null)),(l()(),t.Jb(16,null,["",""]))],(function(l,n){l(n,1,0,"");var u=l(n,3,0,"/goods-info-detail",n.context.$implicit.id);l(n,2,0,u),l(n,4,0),l(n,5,0,"column")}),(function(l,n){l(n,8,0,n.context.$implicit.goods_front_image_medium),l(n,11,0,n.context.$implicit.name),l(n,14,0,n.context.$implicit.price_current),l(n,16,0,n.context.$implicit.price_original)}))}function C(l){return t.Kb(0,[(l()(),t.tb(0,0,null,null,4,"div",[],null,null,null,null,null)),(l()(),t.tb(1,0,null,null,3,"ion-list",[["style","margin: 0; padding: 0"]],null,null,null,e.O,e.p)),t.sb(2,49152,null,0,r.N,[t.h,t.k,t.z],null,null),(l()(),t.ib(16777216,null,0,1,null,m)),t.sb(4,278528,null,0,b.i,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,4,0,n.component.goodsInfoList)}),null)}function x(l){return t.Kb(0,[(l()(),t.tb(0,0,null,null,15,null,null,null,null,null,null,null)),(l()(),t.tb(1,0,null,null,14,"ion-card",[["class","welcome-card"],["style","width: 49%; max-width: 200px; margin: 1px"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.toProductDetail(l.context.$implicit)&&t),t}),e.F,e.f)),t.sb(2,49152,null,0,r.l,[t.h,t.k,t.z],null,null),(l()(),t.tb(3,0,null,0,2,"ion-thumbnail",[["slot","start"],["style","height: 150px; width: 100%;"]],null,null,null,e.V,e.w)),t.sb(4,49152,null,0,r.yb,[t.h,t.k,t.z],null,null),(l()(),t.tb(5,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),t.tb(6,0,null,0,9,"ion-card-content",[],null,null,null,e.E,e.g)),t.sb(7,49152,null,0,r.m,[t.h,t.k,t.z],null,null),(l()(),t.tb(8,0,null,0,2,"div",[],null,null,null,null,null)),(l()(),t.tb(9,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Jb(10,null,["",""])),(l()(),t.tb(11,0,null,0,4,"div",[],null,null,null,null,null)),(l()(),t.tb(12,0,null,null,1,"label",[["style","color:red"]],null,null,null,null,null)),(l()(),t.Jb(13,null,["\u20ab",""])),(l()(),t.tb(14,0,null,null,1,"s",[["style","color: #999999; margin-left: 10px"]],null,null,null,null,null)),(l()(),t.Jb(15,null,["\u20ab",""]))],null,(function(l,n){l(n,5,0,n.context.$implicit.goods_front_image_medium),l(n,10,0,n.context.$implicit.name),l(n,13,0,n.context.$implicit.price_current),l(n,15,0,n.context.$implicit.price_original)}))}function y(l){return t.Kb(0,[(l()(),t.tb(0,0,null,null,5,"div",[],null,null,null,null,null)),(l()(),t.tb(1,0,null,null,4,"div",[["fxLayout","row wrap"],["fxLayoutAlign","center center"]],null,null,null,null,null)),t.sb(2,671744,null,0,c.b,[t.k,s.i,[2,c.e],s.f],{fxLayout:[0,"fxLayout"]},null),t.sb(3,671744,null,0,c.a,[t.k,s.i,[2,c.d],s.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),(l()(),t.ib(16777216,null,null,1,null,x)),t.sb(5,278528,null,0,b.i,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=n.component;l(n,2,0,"row wrap"),l(n,3,0,"center center"),l(n,5,0,u.goodsInfoList)}),null)}function k(l){return t.Kb(0,[(l()(),t.tb(0,0,null,null,3,"div",[["class","endLineContainer"]],null,null,null,null,null)),(l()(),t.tb(1,0,null,null,2,"ion-label",[["class","endLine"]],null,null,null,e.N,e.o)),t.sb(2,49152,null,0,r.M,[t.h,t.k,t.z],null,null),(l()(),t.Jb(-1,0,["\u2014\u2014\u2014\u2014 \u6211\u662f\u6709\u5e95\u7ebf\u7684 \u2014\u2014\u2014\u2014"]))],null,null)}function L(l){return t.Kb(0,[(l()(),t.tb(0,0,null,null,10,"ion-header",[],null,null,null,e.I,e.j)),t.sb(1,49152,null,0,r.A,[t.h,t.k,t.z],null,null),(l()(),t.tb(2,0,null,0,8,"ion-toolbar",[["color","primary"]],null,null,null,e.X,e.y)),t.sb(3,49152,null,0,r.Bb,[t.h,t.k,t.z],{color:[0,"color"]},null),(l()(),t.tb(4,0,null,0,4,"div",[],null,null,null,null,null)),(l()(),t.tb(5,0,null,null,3,"ion-searchbar",[["style","padding-bottom: 0"]],null,[[null,"mousedown"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var o=!0,i=l.component;return"ionBlur"===n&&(o=!1!==t.Eb(l,8)._handleBlurEvent(u.target)&&o),"ionChange"===n&&(o=!1!==t.Eb(l,8)._handleInputEvent(u.target)&&o),"mousedown"===n&&(o=!1!==i.goSearchPage()&&o),o}),e.P,e.q)),t.Gb(5120,null,d.c,(function(l){return[l]}),[r.Mb]),t.sb(7,49152,null,0,r.jb,[t.h,t.k,t.z],null,null),t.sb(8,16384,null,0,r.Mb,[t.k],null,null),(l()(),t.tb(9,0,null,0,1,"ion-title",[],null,null,null,e.W,e.x)),t.sb(10,49152,null,0,r.zb,[t.h,t.k,t.z],null,null),(l()(),t.tb(11,0,null,null,15,"ion-content",[],null,null,null,e.H,e.i)),t.sb(12,49152,null,0,r.t,[t.h,t.k,t.z],null,null),(l()(),t.tb(13,0,null,0,1,"h2",[["style","font-size: 24px; text-align: center;"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["\u70ed\u95e8\u63a8\u8350"])),(l()(),t.tb(15,0,null,0,5,"div",[],null,null,null,null,null)),t.sb(16,16384,null,0,b.n,[],{ngSwitch:[0,"ngSwitch"]},null),(l()(),t.ib(16777216,null,null,1,null,C)),t.sb(18,278528,null,0,b.o,[t.O,t.L,b.n],{ngSwitchCase:[0,"ngSwitchCase"]},null),(l()(),t.ib(16777216,null,null,1,null,y)),t.sb(20,278528,null,0,b.o,[t.O,t.L,b.n],{ngSwitchCase:[0,"ngSwitchCase"]},null),(l()(),t.tb(21,0,null,0,3,"ion-infinite-scroll",[["threshold","100px"]],null,[[null,"ionInfinite"]],(function(l,n,u){var t=!0;return"ionInfinite"===n&&(t=!1!==l.component.loadData(u)&&t),t}),e.L,e.l)),t.sb(22,49152,null,0,r.D,[t.h,t.k,t.z],{disabled:[0,"disabled"],threshold:[1,"threshold"]},null),(l()(),t.tb(23,0,null,0,1,"ion-infinite-scroll-content",[["loadingSpinner","bubbles"],["loadingText","Loading more data..."]],null,null,null,e.K,e.m)),t.sb(24,49152,null,0,r.E,[t.h,t.k,t.z],{loadingSpinner:[0,"loadingSpinner"],loadingText:[1,"loadingText"]},null),(l()(),t.ib(16777216,null,0,1,null,k)),t.sb(26,16384,null,0,b.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,3,0,"primary"),l(n,16,0,u.showType),l(n,18,0,"list"),l(n,20,0,"card"),l(n,22,0,u.scrollDisabled,"100px"),l(n,24,0,"bubbles","Loading more data..."),l(n,26,0,u.scrollDisabled)}),null)}function v(l){return t.Kb(0,[(l()(),t.tb(0,0,null,null,1,"app-hot",[],null,null,null,L,p)),t.sb(1,114688,null,0,f,[r.Fb,r.Nb,h.a,a.m],null,null)],(function(l,n){l(n,1,0)}),null)}var w=t.pb("app-hot",f,v,{},{},[]),I=u("Fzqc"),z=u("hUWP"),S=u("3pJQ"),D=u("V9q+"),O=u("MfXf"),_=u("kCW2"),F=function(){return function(){}}();u.d(n,"HotModuleNgFactory",(function(){return J}));var J=t.qb(o,[],(function(l){return t.Bb([t.Cb(512,t.j,t.bb,[[8,[i.a,w]],[3,t.j],t.x]),t.Cb(4608,b.l,b.k,[t.u,[2,b.z]]),t.Cb(4608,d.f,d.f,[]),t.Cb(4608,d.a,d.a,[]),t.Cb(5120,t.b,(function(l,n){return[s.j(l,n)]}),[b.c,t.B]),t.Cb(4608,r.a,r.a,[t.z,t.g]),t.Cb(4608,r.Hb,r.Hb,[r.a,t.j,t.q]),t.Cb(4608,r.Kb,r.Kb,[r.a,t.j,t.q]),t.Cb(1073742336,b.b,b.b,[]),t.Cb(1073742336,d.e,d.e,[]),t.Cb(1073742336,d.b,d.b,[]),t.Cb(1073742336,d.d,d.d,[]),t.Cb(1073742336,s.c,s.c,[]),t.Cb(1073742336,I.a,I.a,[]),t.Cb(1073742336,c.c,c.c,[]),t.Cb(1073742336,z.b,z.b,[]),t.Cb(1073742336,S.a,S.a,[]),t.Cb(1073742336,D.a,D.a,[[2,s.g],t.B]),t.Cb(1073742336,O.a,O.a,[]),t.Cb(1073742336,r.Db,r.Db,[]),t.Cb(1073742336,_.a,_.a,[]),t.Cb(1073742336,a.o,a.o,[[2,a.t],[2,a.m]]),t.Cb(1073742336,F,F,[]),t.Cb(1073742336,o,o,[]),t.Cb(1024,a.k,(function(){return[[{path:"",component:f}]]}),[])])}))}}]);