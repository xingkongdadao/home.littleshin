(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{hm6C:function(l,n,t){"use strict";t.r(n);var o=t("8Y7J"),u=t("ZZ/e"),i=t("K7eL"),e=t("mMk2"),s=t("GKSc"),r=t("jXwS");class d extends e.a{constructor(l,n,t,o,u,i){super(l,n),this.loading=l,this.toast=n,this.goodsInfoService=t,this.goodsSkuService=o,this.goodsBannerService=u,this.router=i,this.goodsBannerIncludeGoodsInfoList=[],this.goodsSkuList=[],this.scrollDisabled=!1,this.pageSize=20,this.pageIndex=1,this.loadEnd=!1,this.slidesList=[]}ngOnInit(){for(let l=1;l<=3;l++)this.slidesList.push({pic:"assets/slide0"+l+".png",url:""});this.getGoodsBannerList(),this.getGoodsSkuListFunc()}loadData(l){setTimeout(()=>{this.getGoodsSkuListFunc(l)},500)}getGoodsSkuListFunc(l){this.showLoading().then(),this.goodsSkuService.getGoodsSkuIncludeInfoList(this.pageIndex,this.pageSize).pipe().subscribe(n=>{this.goodsSkuList=this.goodsSkuList.concat(n.results),this.length=n.count,this.goodsSkuList.length<n.count?(this.pageIndex=this.pageIndex+1,this.scrollDisabled=!1):(this.loadEnd=!0,this.scrollDisabled=!0),this.dismissLoading(),l&&l.target.complete()},n=>{console.log("\u52a0\u8f7d\u6570\u636e\u51fa\u9519"),console.log(n.error),this.scrollDisabled=!1,this.dismissLoading(),l&&l.target.complete()})}goSearchPage(){this.router.navigate(["/goods-info-search"])}getGoodsBannerList(){this.goodsBannerService.getGoodsBannerIncludeGoodsInfoList().subscribe(l=>{this.goodsBannerIncludeGoodsInfoList=l.results})}slideToGoodsDetail(l){this.router.navigate(["/goods-info-detail",l]).then()}goGoodsDetail(l){this.router.navigate(["/goods-info-detail",l.goods.id]).then()}}class c{}var a=t("pMnS"),b=t("oBZk"),g=t("TSSN"),h=t("SVse"),p=t("s7LF");class f{constructor(){this.goodsBannerList=[],this.sendGoods=new o.m,this.slidesOpts={speed:400,autoplay:{delay:2e3},loop:!0}}ngOnInit(){}slideTouchEnd(l){l.target.startAutoplay()}slideClicked(l){console.log("\u70b9\u51fb\u8f6e\u64ad\u56fe"),this.sendGoods.emit(l.goods.id)}}var m=o.pb({encapsulation:0,styles:[["ion-slide[_ngcontent-%COMP%]{width:100%;height:150px;overflow:hidden}ion-slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}"]],data:{}});function L(l){return o.Lb(0,[(l()(),o.rb(0,0,null,null,2,"ion-slide",[],null,[[null,"click"]],(function(l,n,t){var o=!0;return"click"===n&&(o=!1!==l.component.slideClicked(l.context.$implicit)&&o),o}),b.cb,b.x)),o.qb(1,49152,null,0,u.qb,[o.h,o.k,o.x],null,null),(l()(),o.rb(2,0,null,0,0,"img",[["alt",""]],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,2,0,n.context.$implicit.goods.goods_front_image_large)}))}function k(l){return o.Lb(0,[(l()(),o.rb(0,0,null,null,3,"ion-slides",[["pager","true"]],null,[[null,"ionSlideTouchEnd"]],(function(l,n,t){var o=!0;return"ionSlideTouchEnd"===n&&(o=!1!==l.component.slideTouchEnd(t)&&o),o}),b.db,b.y)),o.qb(1,49152,[["slide2",4]],0,u.rb,[o.h,o.k,o.x],{options:[0,"options"],pager:[1,"pager"]},null),(l()(),o.gb(16777216,null,0,1,null,L)),o.qb(3,278528,null,0,h.i,[o.M,o.J,o.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var t=n.component;l(n,1,0,t.slidesOpts,"true"),l(n,3,0,t.goodsBannerList)}),null)}class v{constructor(){this.hotList=[],this.hotListWidth=400}ngOnInit(){for(let l=1;l<=7;l++)this.hotList.push({pic:"assets/0"+l+".jpg",title:"\u7b2c"+l+"\u4e2a"});this.hotListWidth=9*this.hotList.length+"rem"}}var x=o.pb({encapsulation:0,styles:[[".hot-list[_ngcontent-%COMP%]{width:100%;height:10rem;overflow-x:auto;overflow-y:hidden}.hot-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:8rem;height:10rem;float:left;margin-left:1rem}.hot-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:7rem;height:7rem}.hot-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding:.4rem;text-align:center}"]],data:{}});function _(l){return o.Lb(0,[(l()(),o.rb(0,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),o.rb(1,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),o.rb(2,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),o.Jb(3,null,["",""]))],null,(function(l,n){l(n,1,0,n.context.$implicit.pic),l(n,3,0,n.context.$implicit.title)}))}function S(l){return o.Lb(0,[(l()(),o.rb(0,0,null,null,6,"div",[["class","hot-list"]],null,null,null,null,null)),(l()(),o.rb(1,0,null,null,5,"ul",[["class","clearfix"]],null,null,null,null,null)),o.Gb(512,null,h.w,h.x,[o.k,o.r,o.B]),o.qb(3,278528,null,0,h.m,[h.w],{ngStyle:[0,"ngStyle"]},null),o.Fb(4,{width:0}),(l()(),o.gb(16777216,null,null,1,null,_)),o.qb(6,278528,null,0,h.i,[o.M,o.J,o.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var t=n.component,o=l(n,4,0,t.hotListWidth);l(n,3,0,o),l(n,6,0,t.hotList)}),null)}class I{constructor(){this.goodsSkuIncludeInfoList=[],this.sendGoods=new o.m,this.size=4}ngOnInit(){}goGoodsDetail(l){this.sendGoods.emit(l)}}var C=o.pb({encapsulation:0,styles:[[".plist[_ngcontent-%COMP%]   .plist_inner[_ngcontent-%COMP%]{padding:.5rem;border:.05rem solid #eee}.plist[_ngcontent-%COMP%]   .plist_inner[_ngcontent-%COMP%]   .plist_title[_ngcontent-%COMP%]{height:3.8rem;overflow:hidden;line-height:1.8}"]],data:{}});function O(l){return o.Lb(0,[(l()(),o.rb(0,0,null,null,7,"ion-col",[["size","6"]],null,[[null,"click"]],(function(l,n,t){var o=!0;return"click"===n&&(o=!1!==l.component.goGoodsDetail(l.context.$implicit)&&o),o}),b.M,b.h)),o.qb(1,49152,null,0,u.t,[o.h,o.k,o.x],{size:[0,"size"]},null),(l()(),o.rb(2,0,null,0,5,"div",[["class","plist_inner"]],null,null,null,null,null)),(l()(),o.rb(3,0,null,null,0,"img",[],[[8,"src",4],[8,"alt",0]],null,null,null,null)),(l()(),o.rb(4,0,null,null,1,"div",[["class","plist_title"]],null,null,null,null,null)),(l()(),o.Jb(5,null,["",""])),(l()(),o.rb(6,0,null,null,1,"p",[["class","price"]],null,null,null,null,null)),(l()(),o.Jb(7,null,["\u20ab",""]))],(function(l,n){l(n,1,0,n.component.size)}),(function(l,n){l(n,3,0,n.context.$implicit.goods_front_image_medium,n.context.$implicit.goods.name_vn),l(n,5,0,n.context.$implicit.goods.name_vn),l(n,7,0,n.context.$implicit.goods.price_current)}))}function G(l){return o.Lb(0,[(l()(),o.rb(0,0,null,null,6,"div",[["class","plist"]],null,null,null,null,null)),(l()(),o.rb(1,0,null,null,5,"ion-grid",[],null,null,null,b.P,b.k)),o.qb(2,49152,null,0,u.A,[o.h,o.k,o.x],null,null),(l()(),o.rb(3,0,null,0,3,"ion-row",[],null,null,null,b.ab,b.v)),o.qb(4,49152,null,0,u.jb,[o.h,o.k,o.x],null,null),(l()(),o.gb(16777216,null,0,1,null,O)),o.qb(6,278528,null,0,h.i,[o.M,o.J,o.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,6,0,n.component.goodsSkuIncludeInfoList)}),null)}var M=t("iInd"),A=o.pb({encapsulation:0,styles:[['.h_title[_ngcontent-%COMP%]{padding:1rem .5rem;font-size:1.4rem}.h_title[_ngcontent-%COMP%]::before{display:inline-block;border-left:3px solid #f53d3d;height:14px;width:1px;content:"";top:2px;position:relative}']],data:{}});function w(l){return o.Lb(0,[(l()(),o.rb(0,0,null,null,3,"ion-label",[["class","endLine"]],null,null,null,b.Y,b.t)),o.qb(1,49152,null,0,u.N,[o.h,o.k,o.x],null,null),(l()(),o.Jb(2,0,["\u2014\u2014\u2014\u2014 "," \u2014\u2014\u2014\u2014"])),o.Eb(131072,g.i,[g.j,o.h])],null,(function(l,n){l(n,2,0,o.Kb(n,2,0,o.Cb(n,3).transform("finished")))}))}function q(l){return o.Lb(0,[(l()(),o.rb(0,0,null,null,2,"div",[["class","endLineContainer"]],null,null,null,null,null)),(l()(),o.gb(16777216,null,null,1,null,w)),o.qb(2,16384,null,0,h.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,2,0,n.component.loadEnd)}),null)}function P(l){return o.Lb(0,[(l()(),o.rb(0,0,null,null,10,"ion-header",[],null,null,null,b.Q,b.l)),o.qb(1,49152,null,0,u.B,[o.h,o.k,o.x],null,null),(l()(),o.rb(2,0,null,0,8,"ion-toolbar",[],null,null,null,b.jb,b.E)),o.qb(3,49152,null,0,u.Cb,[o.h,o.k,o.x],null,null),(l()(),o.rb(4,0,null,0,4,"div",[],null,null,null,null,null)),(l()(),o.rb(5,0,null,null,3,"ion-searchbar",[["style","padding-bottom: 0"]],null,[[null,"mousedown"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,t){var u=!0,i=l.component;return"ionBlur"===n&&(u=!1!==o.Cb(l,8)._handleBlurEvent(t.target)&&u),"ionChange"===n&&(u=!1!==o.Cb(l,8)._handleInputEvent(t.target)&&u),"mousedown"===n&&(u=!1!==i.goSearchPage()&&u),u}),b.bb,b.w)),o.Gb(5120,null,p.c,(function(l){return[l]}),[u.Nb]),o.qb(7,49152,null,0,u.kb,[o.h,o.k,o.x],null,null),o.qb(8,16384,null,0,u.Nb,[o.k],null,null),(l()(),o.rb(9,0,null,0,1,"ion-title",[],null,null,null,b.ib,b.D)),o.qb(10,49152,null,0,u.Ab,[o.h,o.k,o.x],null,null),(l()(),o.rb(11,0,null,null,22,"ion-content",[],null,null,null,b.N,b.i)),o.qb(12,49152,null,0,u.u,[o.h,o.k,o.x],null,null),(l()(),o.rb(13,0,null,0,1,"app-my-slides",[],null,[[null,"sendGoods"]],(function(l,n,t){var o=!0;return"sendGoods"===n&&(o=!1!==l.component.slideToGoodsDetail(t)&&o),o}),k,m)),o.qb(14,114688,null,0,f,[],{goodsBannerList:[0,"goodsBannerList"]},{sendGoods:"sendGoods"}),(l()(),o.rb(15,0,null,0,2,"div",[["class","h_title"]],null,null,null,null,null)),(l()(),o.Jb(16,null,[" "," "])),o.Eb(131072,g.i,[g.j,o.h]),(l()(),o.rb(18,0,null,0,1,"app-my-horizontal-scroll",[],null,null,null,S,x)),o.qb(19,114688,null,0,v,[],null,null),(l()(),o.rb(20,0,null,0,2,"h2",[["style","font-size: 24px; text-align: center;"]],null,null,null,null,null)),(l()(),o.Jb(21,null,["",""])),o.Eb(131072,g.i,[g.j,o.h]),(l()(),o.rb(23,0,null,0,2,"div",[["class","h_title"]],null,null,null,null,null)),(l()(),o.Jb(24,null,[" "," "])),o.Eb(131072,g.i,[g.j,o.h]),(l()(),o.rb(26,0,null,0,1,"app-goods-sku-cards",[],null,[[null,"sendGoods"]],(function(l,n,t){var o=!0;return"sendGoods"===n&&(o=!1!==l.component.goGoodsDetail(t)&&o),o}),G,C)),o.qb(27,114688,null,0,I,[],{goodsSkuIncludeInfoList:[0,"goodsSkuIncludeInfoList"],size:[1,"size"]},{sendGoods:"sendGoods"}),(l()(),o.rb(28,0,null,0,3,"ion-infinite-scroll",[["threshold","100px"]],null,[[null,"ionInfinite"]],(function(l,n,t){var o=!0;return"ionInfinite"===n&&(o=!1!==l.component.loadData(t)&&o),o}),b.U,b.o)),o.qb(29,49152,[["infinite",4]],0,u.E,[o.h,o.k,o.x],{disabled:[0,"disabled"],threshold:[1,"threshold"]},null),(l()(),o.rb(30,0,null,0,1,"ion-infinite-scroll-content",[["loadingSpinner","bubbles"],["loadingText","Loading more data..."]],null,null,null,b.T,b.p)),o.qb(31,49152,null,0,u.F,[o.h,o.k,o.x],{loadingSpinner:[0,"loadingSpinner"],loadingText:[1,"loadingText"]},null),(l()(),o.gb(16777216,null,0,1,null,q)),o.qb(33,16384,null,0,h.j,[o.M,o.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var t=n.component;l(n,14,0,t.goodsBannerIncludeGoodsInfoList),l(n,19,0),l(n,27,0,t.goodsSkuList,6),l(n,29,0,t.scrollDisabled,"100px"),l(n,31,0,"bubbles","Loading more data..."),l(n,33,0,t.scrollDisabled)}),(function(l,n){l(n,16,0,o.Kb(n,16,0,o.Cb(n,17).transform("hot.guessYouLike"))),l(n,21,0,o.Kb(n,21,0,o.Cb(n,22).transform("hot.recommend"))),l(n,24,0,o.Kb(n,24,0,o.Cb(n,25).transform("hot.recommend")))}))}function z(l){return o.Lb(0,[(l()(),o.rb(0,0,null,null,1,"app-hot-show-sku",[],null,null,null,P,A)),o.qb(1,114688,null,0,d,[u.Gb,u.Ob,i.a,s.a,r.a,M.m],null,null)],(function(l,n){l(n,1,0)}),null)}var B=o.nb("app-hot-show-sku",d,z,{},{},[]),y=t("/q54"),E=t("IP0z"),D=t("VDRc"),j=t("ura0"),J=t("Nhcz"),F=t("u9T3"),T=t("MfXf"),$=t("kCW2");class N{}class K{}class W{}t.d(n,"HotShowSkuPageModuleNgFactory",(function(){return Z}));var Z=o.ob(c,[],(function(l){return o.zb([o.Ab(512,o.j,o.Z,[[8,[a.a,B]],[3,o.j],o.v]),o.Ab(4608,h.l,h.k,[o.s,[2,h.z]]),o.Ab(4608,p.i,p.i,[]),o.Ab(4608,p.a,p.a,[]),o.Ab(5120,o.b,(function(l,n){return[y.j(l,n)]}),[h.c,o.z]),o.Ab(4608,u.a,u.a,[o.x,o.g]),o.Ab(4608,u.Ib,u.Ib,[u.a,o.j,o.p]),o.Ab(4608,u.Lb,u.Lb,[u.a,o.j,o.p]),o.Ab(1073742336,h.b,h.b,[]),o.Ab(1073742336,g.g,g.g,[]),o.Ab(1073742336,p.h,p.h,[]),o.Ab(1073742336,p.b,p.b,[]),o.Ab(1073742336,p.g,p.g,[]),o.Ab(1073742336,y.c,y.c,[]),o.Ab(1073742336,E.a,E.a,[]),o.Ab(1073742336,D.c,D.c,[]),o.Ab(1073742336,j.b,j.b,[]),o.Ab(1073742336,J.a,J.a,[]),o.Ab(1073742336,F.a,F.a,[[2,y.g],o.z]),o.Ab(1073742336,T.a,T.a,[]),o.Ab(1073742336,u.Eb,u.Eb,[]),o.Ab(1073742336,$.a,$.a,[]),o.Ab(1073742336,N,N,[]),o.Ab(1073742336,K,K,[]),o.Ab(1073742336,W,W,[]),o.Ab(1073742336,M.o,M.o,[[2,M.t],[2,M.m]]),o.Ab(1073742336,c,c,[]),o.Ab(1024,M.k,(function(){return[[{path:"",component:d}]]}),[])])}))}}]);