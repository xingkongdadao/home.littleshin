(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{NHHH:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J"),o=u("K7eL"),e=u("mMk2"),i=u("ZZ/e"),r=u("dnTq");class s extends e.a{constructor(l,n,u,t,o,e){super(l,n),this.loading=l,this.toast=n,this.goodsInfoService=u,this.router=t,this.route=o,this.loginViewService=e,this.searchName="",this.searchCode="",this.searchCategory="",this.pageSize=20,this.pageIndex=1,this.scrollDisabled=!1}ngOnInit(){this.showLoading().then(),this.route.queryParams.subscribe(l=>{this.searchName=l.searchName?l.searchName:"",this.getGoodsInfoListFunc()})}getGoodsInfoListFunc(){this.goodsInfoService.getGoodsInfoList(this.pageIndex,this.pageSize,this.searchCode,this.searchName,this.searchCategory).subscribe(l=>{this.goodsInfoList=l.results,this.length=l.count,this.dismissLoading(),this.goodsInfoList.length===this.length&&(this.scrollDisabled=!0)})}loadData(l){console.log("\u52a0\u8f7d\u6570\u636e"),setTimeout(()=>{this.pageIndex=this.pageIndex+1,this.goodsInfoService.getGoodsInfoList(this.pageIndex,this.pageSize,this.searchCode,this.searchName,this.searchCategory).subscribe(l=>{for(const n of l.results)this.goodsInfoList.push(n);this.length=l.count,this.goodsInfoList.length===this.length&&(this.scrollDisabled=!0)}),l.target.complete()},500)}toProductDetail(l){this.router.navigate(["/goods-info-detail",l.id])}goSearchPage(){this.router.navigate(["/goods-info-search"])}}class b{}var a=u("pMnS"),c=u("TSSN"),h=u("oBZk"),d=u("SVse"),g=u("s7LF"),f=u("VDRc"),p=u("/q54"),m=u("iInd"),x=t.pb({encapsulation:0,styles:[[""]],data:{}});function I(l){return t.Nb(0,[(l()(),t.rb(0,0,null,null,3,"p",[["class","price"]],null,null,null,null,null)),(l()(),t.Lb(1,null,[""," :",""])),t.Fb(131072,c.i,[c.j,t.h]),t.Hb(3,4)],null,(function(l,n){var u=t.Mb(n,1,0,t.Db(n,2).transform("hot.price-wholesale")),o=t.Mb(n,1,1,l(n,3,0,t.Db(n.parent.parent,0),n.parent.context.$implicit.price_wholesale,"VND","symbol","1.0-0"));l(n,1,0,u,o)}))}function k(l){return t.Nb(0,[(l()(),t.rb(0,0,null,null,2,"p",[["class","price"]],null,null,null,null,null)),(l()(),t.Lb(1,null,["",""])),t.Fb(131072,c.i,[c.j,t.h])],null,(function(l,n){l(n,1,0,t.Mb(n,1,0,t.Db(n,2).transform("hot.loginSeePrice")))}))}function q(l){return t.Nb(0,[(l()(),t.rb(0,0,null,null,15,null,null,null,null,null,null,null)),(l()(),t.rb(1,0,null,null,14,"ion-card",[["class","welcome-card"],["style","width: 49%; max-width: 200px; margin: 1px"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.toProductDetail(l.context.$implicit)&&t),t}),h.W,h.f)),t.qb(2,49152,null,0,i.n,[t.h,t.k,t.x],null,null),(l()(),t.rb(3,0,null,0,2,"ion-thumbnail",[["slot","start"],["style","height: 150px; width: 100%;"]],null,null,null,h.Cb,h.M)),t.qb(4,49152,null,0,i.Ab,[t.h,t.k,t.x],null,null),(l()(),t.rb(5,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),t.rb(6,0,null,0,9,"ion-card-content",[],null,null,null,h.V,h.g)),t.qb(7,49152,null,0,i.o,[t.h,t.k,t.x],null,null),(l()(),t.rb(8,0,null,0,2,"div",[],null,null,null,null,null)),(l()(),t.rb(9,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Lb(10,null,["",""])),(l()(),t.rb(11,0,null,0,4,"div",[],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,I)),t.qb(13,16384,null,0,d.l,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.gb(16777216,null,null,1,null,k)),t.qb(15,16384,null,0,d.l,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,13,0,u.loginViewService.userInfo),l(n,15,0,!u.loginViewService.userInfo)}),(function(l,n){l(n,5,0,n.context.$implicit.goods_front_image_medium),l(n,10,0,n.context.$implicit.name)}))}function B(l){return t.Nb(0,[(l()(),t.rb(0,0,null,null,4,"div",[["class","endLineContainer"]],null,null,null,null,null)),(l()(),t.rb(1,0,null,null,3,"ion-label",[["class","endLine"]],null,null,null,h.mb,h.w)),t.qb(2,49152,null,0,i.O,[t.h,t.k,t.x],null,null),(l()(),t.Lb(3,0,["\u2014\u2014\u2014\u2014 "," \u2014\u2014\u2014\u2014"])),t.Fb(131072,c.i,[c.j,t.h])],null,(function(l,n){l(n,3,0,t.Mb(n,3,0,t.Db(n,4).transform("finished")))}))}function v(l){return t.Nb(0,[t.Fb(0,d.c,[t.s]),(l()(),t.rb(1,0,null,null,17,"ion-header",[],null,null,null,h.cb,h.m)),t.qb(2,49152,null,0,i.C,[t.h,t.k,t.x],null,null),(l()(),t.rb(3,0,null,0,15,"ion-toolbar",[["color","primary"]],null,null,null,h.Fb,h.P)),t.qb(4,49152,null,0,i.Db,[t.h,t.k,t.x],{color:[0,"color"]},null),(l()(),t.rb(5,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,h.U,h.e)),t.qb(6,49152,null,0,i.m,[t.h,t.k,t.x],null,null),(l()(),t.rb(7,0,null,0,2,"ion-back-button",[["style","padding-left: 8px"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==t.Db(l,9).onClick(u)&&o),o}),h.R,h.b)),t.qb(8,49152,null,0,i.h,[t.h,t.k,t.x],{text:[0,"text"]},null),t.qb(9,16384,null,0,i.i,[[2,i.jb],i.Jb],null,null),(l()(),t.rb(10,0,null,0,3,"ion-searchbar",[["style","padding-bottom: 0"]],null,[[null,"mousedown"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var o=!0,e=l.component;return"ionBlur"===n&&(o=!1!==t.Db(l,13)._handleBlurEvent(u.target)&&o),"ionChange"===n&&(o=!1!==t.Db(l,13)._handleInputEvent(u.target)&&o),"mousedown"===n&&(o=!1!==e.goSearchPage()&&o),o}),h.sb,h.C)),t.Ib(5120,null,g.h,(function(l){return[l]}),[i.Pb]),t.qb(12,49152,null,0,i.lb,[t.h,t.k,t.x],null,null),t.qb(13,16384,null,0,i.Pb,[t.k],null,null),(l()(),t.rb(14,0,null,0,4,"ion-buttons",[["slot","end"]],null,null,null,h.U,h.e)),t.qb(15,49152,null,0,i.m,[t.h,t.k,t.x],null,null),(l()(),t.rb(16,0,null,0,2,"ion-back-button",[["defaultHref","/home"],["icon","home"],["text",""]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==t.Db(l,18).onClick(u)&&o),o}),h.R,h.b)),t.qb(17,49152,null,0,i.h,[t.h,t.k,t.x],{defaultHref:[0,"defaultHref"],icon:[1,"icon"],text:[2,"text"]},null),t.qb(18,16384,null,0,i.i,[[2,i.jb],i.Jb],{defaultHref:[0,"defaultHref"]},null),(l()(),t.rb(19,0,null,null,12,"ion-content",[],null,null,null,h.Z,h.j)),t.qb(20,49152,null,0,i.v,[t.h,t.k,t.x],null,null),(l()(),t.rb(21,0,null,0,4,"div",[["fxLayout","row wrap"],["fxLayoutAlign","center center"]],null,null,null,null,null)),t.qb(22,671744,null,0,f.b,[t.k,p.i,[2,f.e],p.f],{fxLayout:[0,"fxLayout"]},null),t.qb(23,671744,null,0,f.a,[t.k,p.i,[2,f.d],p.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),(l()(),t.gb(16777216,null,null,1,null,q)),t.qb(25,278528,null,0,d.k,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),(l()(),t.rb(26,0,null,0,3,"ion-infinite-scroll",[["threshold","100px"]],null,[[null,"ionInfinite"]],(function(l,n,u){var t=!0;return"ionInfinite"===n&&(t=!1!==l.component.loadData(u)&&t),t}),h.fb,h.o)),t.qb(27,49152,null,0,i.F,[t.h,t.k,t.x],{disabled:[0,"disabled"],threshold:[1,"threshold"]},null),(l()(),t.rb(28,0,null,0,1,"ion-infinite-scroll-content",[["loadingSpinner","bubbles"],["loadingText","Loading more data..."]],null,null,null,h.eb,h.p)),t.qb(29,49152,null,0,i.G,[t.h,t.k,t.x],{loadingSpinner:[0,"loadingSpinner"],loadingText:[1,"loadingText"]},null),(l()(),t.gb(16777216,null,0,1,null,B)),t.qb(31,16384,null,0,d.l,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,4,0,"primary"),l(n,8,0,""),l(n,17,0,"/home","home",""),l(n,18,0,"/home"),l(n,22,0,"row wrap"),l(n,23,0,"center center"),l(n,25,0,u.goodsInfoList),l(n,27,0,u.scrollDisabled,"100px"),l(n,29,0,"bubbles","Loading more data..."),l(n,31,0,u.scrollDisabled)}),null)}function L(l){return t.Nb(0,[(l()(),t.rb(0,0,null,null,1,"app-goods-info-list",[],null,null,null,v,x)),t.qb(1,114688,null,0,s,[i.Hb,i.Qb,o.a,m.m,m.a,r.a],null,null)],(function(l,n){l(n,1,0)}),null)}var w=t.nb("app-goods-info-list",s,L,{},{},[]),D=u("IP0z"),y=u("ura0"),S=u("Nhcz"),N=u("u9T3"),C=u("MfXf"),M=u("kCW2");u.d(n,"GoodsInfoListPageModuleNgFactory",(function(){return F}));var F=t.ob(b,[],(function(l){return t.Ab([t.Bb(512,t.j,t.Z,[[8,[a.a,w]],[3,t.j],t.v]),t.Bb(4608,d.n,d.m,[t.s,[2,d.B]]),t.Bb(4608,g.q,g.q,[]),t.Bb(4608,g.d,g.d,[]),t.Bb(5120,t.b,(function(l,n){return[p.j(l,n)]}),[d.d,t.z]),t.Bb(4608,i.b,i.b,[t.x,t.g]),t.Bb(4608,i.Ib,i.Ib,[i.b,t.j,t.p]),t.Bb(4608,i.Mb,i.Mb,[i.b,t.j,t.p]),t.Bb(1073742336,d.b,d.b,[]),t.Bb(1073742336,c.g,c.g,[]),t.Bb(1073742336,g.p,g.p,[]),t.Bb(1073742336,g.g,g.g,[]),t.Bb(1073742336,g.n,g.n,[]),t.Bb(1073742336,p.c,p.c,[]),t.Bb(1073742336,D.a,D.a,[]),t.Bb(1073742336,f.c,f.c,[]),t.Bb(1073742336,y.c,y.c,[]),t.Bb(1073742336,S.a,S.a,[]),t.Bb(1073742336,N.a,N.a,[[2,p.g],t.z]),t.Bb(1073742336,C.a,C.a,[]),t.Bb(1073742336,i.Fb,i.Fb,[]),t.Bb(1073742336,M.a,M.a,[]),t.Bb(1073742336,m.o,m.o,[[2,m.t],[2,m.m]]),t.Bb(1073742336,b,b,[]),t.Bb(1024,m.k,(function(){return[[{path:"",component:s}]]}),[])])}))}}]);