(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"J+vA":function(l,n,u){"use strict";u.r(n);var o=u("8Y7J"),i=u("mrSG"),t=u("K7eL"),s=u("ZZ/e"),e=u("GKSc");class b{constructor(l,n){this.modalCtrl=l,this.goodsSkuService=n}ngOnInit(){this.getGoodsSkuListByGoodsInfoId(this.goodsInfo)}getGoodsSkuListByGoodsInfoId(l){this.goodsSkuService.getGoodsSkuList(1,20,"","","",l.id,"").pipe().subscribe(l=>{this.goodsSkuListByGoodsInfo=l.results})}close(){return i.b(this,void 0,void 0,(function*(){console.log("dismiss"),this.modalCtrl.dismiss({dismissed:!0})}))}}var r=u("iSPB"),c=u("mMk2");class d extends c.a{constructor(l,n,u,o,i,t,s){super(l,n),this.loading=l,this.toast=n,this.activeRoute=u,this.goodsInfoService=o,this.modalController=i,this.goodsImagesService=t,this.goodsSkuService=s,this.slidesOpts={initialSlide:0,slidesPerView:1,speed:400,autoplay:!0}}ngOnInit(){this.activeRoute.params.subscribe(l=>{this.goodsInfoId=l.id,this.getGoodInfoById(this.goodsInfoId),this.getGoodsInfoImagesById(this.goodsInfoId),this.getGoodsSkuListByGoodsInfoId(this.goodsInfoId),console.log("\u5546\u54c1\u4fe1\u606fID"+this.goodsInfoId)})}getGoodInfoById(l){this.showLoading().then(),this.goodsInfoService.getGoodsInfoById(l).subscribe(l=>{this.goodInfo=l},l=>{console.log(l)})}getGoodsInfoImagesById(l){this.goodsImagesService.getGoodsImagesList(1,20,l).subscribe(l=>{console.log(l),this.goodsInfoImages=l.results,setTimeout(()=>{this.dismissLoading()},1e3)},l=>{this.dismissLoading()})}getGoodsSkuListByGoodsInfoId(l){this.goodsSkuService.getGoodsSkuList(1,20,"","","",l,"").pipe().subscribe(l=>{this.goodsSkuListByGoodsInfo=l.results})}showModalSku(){return i.b(this,void 0,void 0,(function*(){console.log("\u6253\u5f00sku modal");const l=yield this.modalController.create({component:b,cssClass:"my-custom-modal-css",componentProps:{value:123,goodsInfo:this.goodInfo}});yield l.present(),l.onDidDismiss().then(l=>{console.log(l.data.dismissed)})}))}}class a{}var g=u("pMnS"),h=u("oBZk"),f=u("SVse"),k=u("TSSN"),m=u("VDRc"),p=u("/q54"),I=u("iInd"),x=o.pb({encapsulation:0,styles:[[".container[_ngcontent-%COMP%]{height:100%;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;align-content:stretch;touch-action:none}"]],data:{}});function q(l){return o.Lb(0,[(l()(),o.rb(0,0,null,null,3,"ion-slide",[],null,null,null,h.U,h.t)),o.qb(1,49152,null,0,s.pb,[o.h,o.k,o.x],null,null),(l()(),o.rb(2,0,null,0,1,"div",[],null,null,null,null,null)),(l()(),o.rb(3,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,3,0,n.context.$implicit.image)}))}function y(l){return o.Lb(0,[(l()(),o.rb(0,0,null,null,3,"ion-slide",[],null,null,null,h.U,h.t)),o.qb(1,49152,null,0,s.pb,[o.h,o.k,o.x],null,null),(l()(),o.rb(2,0,null,0,1,"div",[],null,null,null,null,null)),(l()(),o.rb(3,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,3,0,n.component.goodInfo.goods_front_image)}))}function v(l){return o.Lb(0,[(l()(),o.rb(0,0,null,null,30,"div",[],null,null,null,null,null)),(l()(),o.rb(1,0,null,null,6,"div",[],null,null,null,null,null)),(l()(),o.rb(2,0,null,null,5,"ion-slides",[["pager","true"]],null,null,null,h.V,h.u)),o.qb(3,49152,null,0,s.qb,[o.h,o.k,o.x],{options:[0,"options"],pager:[1,"pager"]},null),(l()(),o.gb(16777216,null,0,1,null,q)),o.qb(5,278528,null,0,f.i,[o.M,o.J,o.q],{ngForOf:[0,"ngForOf"]},null),(l()(),o.gb(16777216,null,0,1,null,y)),o.qb(7,16384,null,0,f.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(l()(),o.rb(8,0,null,null,0,"div",[["style","height:12px; background-color:#f7f7f7"]],null,null,null,null,null)),(l()(),o.rb(9,0,null,null,8,"div",[],null,null,null,null,null)),(l()(),o.rb(10,0,null,null,7,"ion-label",[["style","padding: 15px;display: block;"]],null,null,null,h.R,h.q)),o.qb(11,49152,null,0,s.M,[o.h,o.k,o.x],null,null),(l()(),o.Jb(12,0,[""," "])),(l()(),o.rb(13,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),o.rb(14,0,null,0,1,"label",[["style","color:red"]],null,null,null,null,null)),(l()(),o.Jb(15,null,["\u20ab",""])),(l()(),o.rb(16,0,null,0,1,"s",[["style","margin-left:10px"]],null,null,null,null,null)),(l()(),o.Jb(17,null,["",""])),(l()(),o.rb(18,0,null,null,0,"div",[["style","height:2px; background-color:#f7f7f7"]],null,null,null,null,null)),(l()(),o.rb(19,0,null,null,10,"div",[],null,null,null,null,null)),(l()(),o.rb(20,0,null,null,9,"ion-item",[["detail",""],["lines","none"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.showModalSku()&&o),o}),h.Q,h.p)),o.qb(21,49152,null,0,s.G,[o.h,o.k,o.x],{detail:[0,"detail"],lines:[1,"lines"]},null),(l()(),o.rb(22,0,null,0,3,"ion-col",[["size","3"]],null,null,null,h.H,h.g)),o.qb(23,49152,null,0,s.s,[o.h,o.k,o.x],{size:[0,"size"]},null),(l()(),o.Jb(24,0,["",""])),o.Eb(131072,k.i,[k.j,o.h]),(l()(),o.rb(26,0,null,0,3,"ion-col",[["size","6"],["style","color:#cccccc; text-align: left;"]],null,null,null,h.H,h.g)),o.qb(27,49152,null,0,s.s,[o.h,o.k,o.x],{size:[0,"size"]},null),(l()(),o.Jb(28,0,["","sku"])),o.Eb(131072,k.i,[k.j,o.h]),(l()(),o.rb(30,0,null,null,0,"div",[["style","height:2px; background-color:#f7f7f7"]],null,null,null,null,null))],(function(l,n){var u=n.component;l(n,3,0,u.slidesOpts,"true"),l(n,5,0,u.goodsInfoImages),l(n,7,0,u.goodsInfoImages),l(n,21,0,"","none"),l(n,23,0,"3"),l(n,27,0,"6")}),(function(l,n){var u=n.component;l(n,12,0,u.goodInfo.name_vn),l(n,15,0,u.goodInfo.price_current),l(n,17,0,u.goodInfo.price_original),l(n,24,0,o.Kb(n,24,0,o.Cb(n,25).transform("goods-info-detail.\u8bf7\u9009\u62e9"))),l(n,28,0,o.Kb(n,28,0,o.Cb(n,29).transform("goods-info-detail.choice")))}))}function L(l){return o.Lb(0,[(l()(),o.rb(0,0,null,null,11,"ion-item",[["detail",""],["fxLayout","column"],["style","--min-height : 100px; margin: 0; padding: 0"]],null,null,null,h.Q,h.p)),o.qb(1,49152,null,0,s.G,[o.h,o.k,o.x],{detail:[0,"detail"]},null),o.qb(2,671744,null,0,m.b,[o.k,p.i,[2,m.e],p.f],{fxLayout:[0,"fxLayout"]},null),(l()(),o.rb(3,0,null,0,2,"ion-thumbnail",[["slot","start"],["style","height: 150px; width: 150px;"]],null,null,null,h.Z,h.y)),o.qb(4,49152,null,0,s.yb,[o.h,o.k,o.x],null,null),(l()(),o.rb(5,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),o.rb(6,0,null,0,5,"ion-label",[],null,null,null,h.R,h.q)),o.qb(7,49152,null,0,s.M,[o.h,o.k,o.x],null,null),(l()(),o.rb(8,0,null,0,1,"div",[],null,null,null,null,null)),(l()(),o.Jb(9,null,["color\uff1a",""])),(l()(),o.rb(10,0,null,0,1,"div",[],null,null,null,null,null)),(l()(),o.Jb(11,null,["size\uff1a",""]))],(function(l,n){l(n,1,0,""),l(n,2,0,"column")}),(function(l,n){l(n,5,0,n.context.$implicit.goods_front_image_medium),l(n,9,0,n.context.$implicit.color_vn),l(n,11,0,n.context.$implicit.size)}))}function S(l){return o.Lb(0,[(l()(),o.rb(0,0,null,null,18,"ion-header",[],null,null,null,h.K,h.j)),o.qb(1,49152,null,0,s.A,[o.h,o.k,o.x],null,null),(l()(),o.rb(2,0,null,0,16,"ion-toolbar",[],null,null,null,h.bb,h.A)),o.qb(3,49152,null,0,s.Bb,[o.h,o.k,o.x],null,null),(l()(),o.rb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,h.E,h.d)),o.qb(5,49152,null,0,s.k,[o.h,o.k,o.x],null,null),(l()(),o.rb(6,0,null,0,2,"ion-back-button",[["style","padding-left: 8px"]],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==o.Cb(l,8).onClick(u)&&i),i}),h.C,h.b)),o.qb(7,49152,null,0,s.f,[o.h,o.k,o.x],{text:[0,"text"]},null),o.qb(8,16384,null,0,s.g,[[2,s.hb],s.Ib],null,null),(l()(),o.rb(9,0,null,0,2,"ion-title",[],null,null,null,h.ab,h.z)),o.qb(10,49152,null,0,s.zb,[o.h,o.k,o.x],null,null),(l()(),o.Jb(11,0,["",""])),(l()(),o.rb(12,0,null,0,6,"ion-buttons",[["id","notification-button"],["slot","end"],["style","padding :8px"]],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==o.Cb(l,14).onClick()&&i),"click"===n&&(i=!1!==o.Cb(l,16).onClick(u)&&i),i}),h.E,h.d)),o.qb(13,49152,null,0,s.k,[o.h,o.k,o.x],null,null),o.qb(14,16384,null,0,I.n,[I.m,I.a,[8,null],o.B,o.k],{routerLink:[0,"routerLink"]},null),o.Db(15,1),o.qb(16,737280,null,0,s.Lb,[f.g,s.Ib,o.k,I.m,[2,I.n]],null,null),(l()(),o.rb(17,0,null,0,1,"ion-icon",[["name","home"],["style","font-size: 24px !important;"]],null,null,null,h.L,h.k)),o.qb(18,49152,null,0,s.B,[o.h,o.k,o.x],{name:[0,"name"]},null),(l()(),o.rb(19,0,null,null,9,"ion-content",[],null,null,null,h.I,h.h)),o.qb(20,49152,null,0,s.t,[o.h,o.k,o.x],null,null),(l()(),o.gb(16777216,null,0,1,null,v)),o.qb(22,16384,null,0,f.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null),(l()(),o.rb(23,0,null,0,5,"div",[["id","html_content"]],null,null,null,null,null)),(l()(),o.rb(24,0,null,null,4,null,null,null,null,null,null,null)),(l()(),o.rb(25,0,null,null,3,"ion-list",[["style","margin: 0; padding: 0"]],null,null,null,h.S,h.r)),o.qb(26,49152,null,0,s.N,[o.h,o.k,o.x],null,null),(l()(),o.gb(16777216,null,0,1,null,L)),o.qb(28,278528,null,0,f.i,[o.M,o.J,o.q],{ngForOf:[0,"ngForOf"]},null),(l()(),o.rb(29,0,null,null,17,"ion-footer",[],null,null,null,h.J,h.i)),o.qb(30,49152,null,0,s.y,[o.h,o.k,o.x],null,null),(l()(),o.rb(31,0,null,0,15,"ion-toolbar",[["class","container"]],null,null,null,h.bb,h.A)),o.qb(32,49152,null,0,s.Bb,[o.h,o.k,o.x],null,null),(l()(),o.rb(33,0,null,0,3,"ion-button",[["slot","start"]],null,null,null,h.D,h.c)),o.qb(34,49152,null,0,s.j,[o.h,o.k,o.x],null,null),(l()(),o.rb(35,0,null,0,1,"ion-icon",[["name","heart-empty"],["size","big"]],null,null,null,h.L,h.k)),o.qb(36,49152,null,0,s.B,[o.h,o.k,o.x],{name:[0,"name"],size:[1,"size"]},null),(l()(),o.rb(37,0,null,0,5,"ion-button",[["slot","end"]],null,null,null,h.D,h.c)),o.qb(38,49152,null,0,s.j,[o.h,o.k,o.x],null,null),(l()(),o.rb(39,0,null,0,3,"ion-button",[["slot","end"],["style","background: darkred"]],null,null,null,h.D,h.c)),o.qb(40,49152,null,0,s.j,[o.h,o.k,o.x],null,null),(l()(),o.Jb(41,0,["",""])),o.Eb(131072,k.i,[k.j,o.h]),(l()(),o.rb(43,0,null,0,3,"ion-button",[["slot","end"],["style","background: darkred"]],null,null,null,h.D,h.c)),o.qb(44,49152,null,0,s.j,[o.h,o.k,o.x],null,null),(l()(),o.Jb(45,0,["",""])),o.Eb(131072,k.i,[k.j,o.h])],(function(l,n){var u=n.component;l(n,7,0,"");var o=l(n,15,0,"/home");l(n,14,0,o),l(n,16,0),l(n,18,0,"home"),l(n,22,0,u.goodInfo),l(n,28,0,u.goodsSkuListByGoodsInfo),l(n,36,0,"heart-empty","big")}),(function(l,n){var u=n.component;l(n,11,0,null==u.goodInfo?null:u.goodInfo.name_vn),l(n,41,0,o.Kb(n,41,0,o.Cb(n,42).transform("goods-info-detail.cart"))),l(n,45,0,o.Kb(n,45,0,o.Cb(n,46).transform("goods-info-detail.buy")))}))}function A(l){return o.Lb(0,[(l()(),o.rb(0,0,null,null,1,"app-goods-info-detail",[],null,null,null,S,x)),o.qb(1,114688,null,0,d,[s.Fb,s.Nb,I.a,t.a,s.Hb,r.a,e.a],null,null)],(function(l,n){l(n,1,0)}),null)}var G=o.nb("app-goods-info-detail",d,A,{},{},[]),B=o.pb({encapsulation:0,styles:[["sc-ion-modal-ios-h[_ngcontent-%COMP%]   sc-ion-modal-ios-s[_ngcontent-%COMP%]   modal[_ngcontent-%COMP%]   modal-ios[_ngcontent-%COMP%]   hydrated[_ngcontent-%COMP%]   show-modal[_ngcontent-%COMP%]{opacity:.2}"]],data:{}});function C(l){return o.Lb(0,[(l()(),o.rb(0,0,null,null,4,"ion-item",[],null,null,null,h.Q,h.p)),o.qb(1,49152,null,0,s.G,[o.h,o.k,o.x],null,null),(l()(),o.rb(2,0,null,0,2,"ion-thumbnail",[],null,null,null,h.Z,h.y)),o.qb(3,49152,null,0,s.yb,[o.h,o.k,o.x],null,null),(l()(),o.rb(4,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,4,0,n.context.$implicit.goods_front_image_medium)}))}function z(l){return o.Lb(0,[(l()(),o.rb(0,0,null,null,7,"ion-header",[],null,null,null,h.K,h.j)),o.qb(1,49152,null,0,s.A,[o.h,o.k,o.x],null,null),(l()(),o.rb(2,0,null,0,5,"ion-toolbar",[],null,null,null,h.bb,h.A)),o.qb(3,49152,null,0,s.Bb,[o.h,o.k,o.x],null,null),(l()(),o.rb(4,0,null,0,3,"ion-buttons",[["slot","end"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.close()&&o),o}),h.E,h.d)),o.qb(5,49152,null,0,s.k,[o.h,o.k,o.x],null,null),(l()(),o.rb(6,0,null,0,1,"ion-icon",[["name","close"],["slot","icon-only"]],null,null,null,h.L,h.k)),o.qb(7,49152,null,0,s.B,[o.h,o.k,o.x],{name:[0,"name"]},null),(l()(),o.rb(8,0,null,null,6,"ion-content",[],null,null,null,h.I,h.h)),o.qb(9,49152,null,0,s.t,[o.h,o.k,o.x],null,null),(l()(),o.rb(10,0,null,0,4,"div",[],null,null,null,null,null)),(l()(),o.rb(11,0,null,null,3,"ion-list",[],null,null,null,h.S,h.r)),o.qb(12,49152,null,0,s.N,[o.h,o.k,o.x],null,null),(l()(),o.gb(16777216,null,0,1,null,C)),o.qb(14,278528,null,0,f.i,[o.M,o.J,o.q],{ngForOf:[0,"ngForOf"]},null),(l()(),o.rb(15,0,null,null,7,"ion-footer",[],null,null,null,h.J,h.i)),o.qb(16,49152,null,0,s.y,[o.h,o.k,o.x],null,null),(l()(),o.rb(17,0,null,0,5,"ion-toolbar",[],null,null,null,h.bb,h.A)),o.qb(18,49152,null,0,s.Bb,[o.h,o.k,o.x],null,null),(l()(),o.rb(19,0,null,0,3,"ion-buttons",[["slot","end"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.close()&&o),o}),h.E,h.d)),o.qb(20,49152,null,0,s.k,[o.h,o.k,o.x],null,null),(l()(),o.rb(21,0,null,0,1,"ion-icon",[["name","close"],["slot","icon-only"]],null,null,null,h.L,h.k)),o.qb(22,49152,null,0,s.B,[o.h,o.k,o.x],{name:[0,"name"]},null)],(function(l,n){var u=n.component;l(n,7,0,"close"),l(n,14,0,u.goodsSkuListByGoodsInfo),l(n,22,0,"close")}),null)}function J(l){return o.Lb(0,[(l()(),o.rb(0,0,null,null,1,"app-sku-page",[],null,null,null,z,B)),o.qb(1,114688,null,0,b,[s.Hb,e.a],null,null)],(function(l,n){l(n,1,0)}),null)}var _=o.nb("app-sku-page",b,J,{value:"value",goodsInfo:"goodsInfo"},{},[]),M=u("s7LF"),j=u("IP0z"),O=u("ura0"),w=u("Nhcz"),D=u("u9T3"),P=u("MfXf"),K=u("kCW2");u.d(n,"GoodsInfoDetailPageModuleNgFactory",(function(){return F}));var F=o.ob(a,[],(function(l){return o.zb([o.Ab(512,o.j,o.Z,[[8,[g.a,G,_]],[3,o.j],o.v]),o.Ab(4608,f.l,f.k,[o.s,[2,f.z]]),o.Ab(4608,M.i,M.i,[]),o.Ab(4608,M.a,M.a,[]),o.Ab(5120,o.b,(function(l,n){return[p.j(l,n)]}),[f.c,o.z]),o.Ab(4608,s.a,s.a,[o.x,o.g]),o.Ab(4608,s.Hb,s.Hb,[s.a,o.j,o.p]),o.Ab(4608,s.Kb,s.Kb,[s.a,o.j,o.p]),o.Ab(1073742336,f.b,f.b,[]),o.Ab(1073742336,k.g,k.g,[]),o.Ab(1073742336,M.h,M.h,[]),o.Ab(1073742336,M.b,M.b,[]),o.Ab(1073742336,M.g,M.g,[]),o.Ab(1073742336,p.c,p.c,[]),o.Ab(1073742336,j.a,j.a,[]),o.Ab(1073742336,m.c,m.c,[]),o.Ab(1073742336,O.b,O.b,[]),o.Ab(1073742336,w.a,w.a,[]),o.Ab(1073742336,D.a,D.a,[[2,p.g],o.z]),o.Ab(1073742336,P.a,P.a,[]),o.Ab(1073742336,s.Db,s.Db,[]),o.Ab(1073742336,K.a,K.a,[]),o.Ab(1073742336,I.o,I.o,[[2,I.t],[2,I.m]]),o.Ab(1073742336,a,a,[]),o.Ab(1024,I.k,(function(){return[[{path:"",component:d}]]}),[])])}))}}]);