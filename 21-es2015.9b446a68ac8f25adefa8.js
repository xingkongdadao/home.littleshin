(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{hm6C:function(n,l,o){"use strict";o.r(l);var t=o("8Y7J"),e=o("ZZ/e"),u=o("K7eL"),i=o("mMk2"),s=o("GKSc"),r=o("jXwS"),d=o("fjz4");class c extends i.a{constructor(n,l,o,t,e,u){super(n,l),this.loading=n,this.toast=l,this.goodsInfoService=o,this.goodsSkuService=t,this.goodsBannerService=e,this.routerService=u,this.goodsBannerIncludeGoodsInfoList=[],this.goodsSkuList=[],this.scrollDisabled=!1,this.pageSize=20,this.pageIndex=1,this.loadEnd=!1}ngOnInit(){this.getGoodsBannerList(),this.getGoodsSkuListFunc()}loadData(n){setTimeout(()=>{this.getGoodsSkuListFunc(n)},500)}getGoodsSkuListFunc(n){this.showLoading().then(),this.goodsSkuService.getSkuIncludeInfoListUniqueColor(this.pageIndex,this.pageSize).subscribe(l=>{this.goodsSkuList=this.goodsSkuList.concat(l.results),this.length=l.count,this.goodsSkuList.length<l.count?(this.pageIndex=this.pageIndex+1,this.scrollDisabled=!1):(this.loadEnd=!0,this.scrollDisabled=!0),this.dismissLoading(),n&&n.target.complete()},l=>{console.log("\u52a0\u8f7d\u6570\u636e\u51fa\u9519"),console.log(l.error),this.scrollDisabled=!1,this.dismissLoading(),n&&n.target.complete()})}goSearchPage(){this.routerService.toGoodsInfoSearch().then()}getGoodsBannerList(){this.goodsBannerService.getGoodsBannerIncludeGoodsInfoList().subscribe(n=>{this.goodsBannerIncludeGoodsInfoList=n.results})}slideToGoodsDetail(n){this.routerService.toGoodsInfoDetail(n).then()}goGoodsDetail(n){this.routerService.toGoodsInfoDetail(n.goods.id).then()}}class a{}var b=o("pMnS"),g=o("oBZk"),h=o("TSSN"),p=o("SVse"),f=o("s7LF");class m{constructor(){this.goodsBannerList=[],this.sendGoods=new t.m,this.slidesOpts={speed:400,autoplay:{delay:2e3},loop:!0}}ngOnInit(){}slideTouchEnd(n){n.target.startAutoplay()}slideClicked(n){console.log("\u70b9\u51fb\u8f6e\u64ad\u56fe"),this.sendGoods.emit(n.goods.id)}}var k=t.pb({encapsulation:0,styles:[["ion-slide[_ngcontent-%COMP%]{width:100%;height:150px;overflow:hidden}ion-slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}"]],data:{}});function B(n){return t.Nb(0,[(n()(),t.rb(0,0,null,null,2,"ion-slide",[],null,[[null,"click"]],(function(n,l,o){var t=!0;return"click"===l&&(t=!1!==n.component.slideClicked(n.context.$implicit)&&t),t}),g.nb,g.C)),t.qb(1,49152,null,0,e.qb,[t.h,t.k,t.x],null,null),(n()(),t.rb(2,0,null,0,0,"img",[["alt",""]],[[8,"src",4]],null,null,null,null))],null,(function(n,l){n(l,2,0,l.context.$implicit.goods.goods_front_image_large)}))}function v(n){return t.Nb(0,[(n()(),t.rb(0,0,null,null,3,"ion-slides",[["pager","true"]],null,[[null,"ionSlideTouchEnd"]],(function(n,l,o){var t=!0;return"ionSlideTouchEnd"===l&&(t=!1!==n.component.slideTouchEnd(o)&&t),t}),g.ob,g.D)),t.qb(1,49152,[["slide2",4]],0,e.rb,[t.h,t.k,t.x],{options:[0,"options"],pager:[1,"pager"]},null),(n()(),t.gb(16777216,null,0,1,null,B)),t.qb(3,278528,null,0,p.k,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){var o=l.component;n(l,1,0,o.slidesOpts,"true"),n(l,3,0,o.goodsBannerList)}),null)}class S{constructor(){this.goodsSkuIncludeInfoList=[],this.sendGoods=new t.m,this.size=4}ngOnInit(){}goGoodsDetail(n){this.sendGoods.emit(n)}}var I=t.pb({encapsulation:0,styles:[[".plist[_ngcontent-%COMP%]   .plist_inner[_ngcontent-%COMP%]{padding:.5rem;border:.05rem solid #eee;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center}.plist[_ngcontent-%COMP%]   .plist_inner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .plist_title[_ngcontent-%COMP%]{height:3.8rem;overflow:hidden;line-height:1.8}"]],data:{}});function x(n){return t.Nb(0,[(n()(),t.rb(0,0,null,null,9,"ion-col",[["size","6"]],null,[[null,"click"]],(function(n,l,o){var t=!0;return"click"===l&&(t=!1!==n.component.goGoodsDetail(n.context.$implicit)&&t),t}),g.T,g.i)),t.qb(1,49152,null,0,e.t,[t.h,t.k,t.x],{size:[0,"size"]},null),(n()(),t.rb(2,0,null,0,7,"div",[["class","plist_inner"]],null,null,null,null,null)),(n()(),t.rb(3,0,null,null,6,"div",[],null,null,null,null,null)),(n()(),t.rb(4,0,null,null,0,"img",[],[[8,"src",4],[8,"alt",0]],null,null,null,null)),(n()(),t.rb(5,0,null,null,1,"div",[["class","plist_title"]],null,null,null,null,null)),(n()(),t.Lb(6,null,["",""])),(n()(),t.rb(7,0,null,null,2,"p",[["class","price"]],null,null,null,null,null)),(n()(),t.Lb(8,null,["",""])),t.Hb(9,4)],(function(n,l){n(l,1,0,l.component.size)}),(function(n,l){n(l,4,0,l.context.$implicit.goods_front_image_medium,l.context.$implicit.goods.name_vn),n(l,6,0,l.context.$implicit.goods.name_vn);var o=t.Mb(l,8,0,n(l,9,0,t.Db(l.parent,0),l.context.$implicit.goods.price_current,"VND","symbol","1.0-0"));n(l,8,0,o)}))}function L(n){return t.Nb(0,[t.Fb(0,p.c,[t.s]),(n()(),t.rb(1,0,null,null,6,"div",[["class","plist"]],null,null,null,null,null)),(n()(),t.rb(2,0,null,null,5,"ion-grid",[],null,null,null,g.W,g.l)),t.qb(3,49152,null,0,e.A,[t.h,t.k,t.x],null,null),(n()(),t.rb(4,0,null,0,3,"ion-row",[],null,null,null,g.lb,g.A)),t.qb(5,49152,null,0,e.jb,[t.h,t.k,t.x],null,null),(n()(),t.gb(16777216,null,0,1,null,x)),t.qb(7,278528,null,0,p.k,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){n(l,7,0,l.component.goodsSkuIncludeInfoList)}),null)}var G=t.pb({encapsulation:0,styles:[['.h_title[_ngcontent-%COMP%]{padding:1rem .5rem;font-size:1.4rem}.h_title[_ngcontent-%COMP%]::before{display:inline-block;border-left:3px solid #f53d3d;height:14px;width:1px;content:"";top:2px;position:relative}']],data:{}});function _(n){return t.Nb(0,[(n()(),t.rb(0,0,null,null,3,"ion-label",[["class","endLine"]],null,null,null,g.ib,g.x)),t.qb(1,49152,null,0,e.N,[t.h,t.k,t.x],null,null),(n()(),t.Lb(2,0,["\u2014\u2014\u2014\u2014 "," \u2014\u2014\u2014\u2014"])),t.Fb(131072,h.i,[h.j,t.h])],null,(function(n,l){n(l,2,0,t.Mb(l,2,0,t.Db(l,3).transform("finished")))}))}function q(n){return t.Nb(0,[(n()(),t.rb(0,0,null,null,2,"div",[["class","endLineContainer"]],null,null,null,null,null)),(n()(),t.gb(16777216,null,null,1,null,_)),t.qb(2,16384,null,0,p.l,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],(function(n,l){n(l,2,0,l.component.loadEnd)}),null)}function D(n){return t.Nb(0,[(n()(),t.rb(0,0,null,null,10,"ion-header",[],null,null,null,g.X,g.m)),t.qb(1,49152,null,0,e.B,[t.h,t.k,t.x],null,null),(n()(),t.rb(2,0,null,0,8,"ion-toolbar",[],null,null,null,g.vb,g.K)),t.qb(3,49152,null,0,e.Cb,[t.h,t.k,t.x],null,null),(n()(),t.rb(4,0,null,0,4,"div",[],null,null,null,null,null)),(n()(),t.rb(5,0,null,null,3,"ion-searchbar",[["style","padding-bottom: 0"]],null,[[null,"mousedown"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,o){var e=!0,u=n.component;return"ionBlur"===l&&(e=!1!==t.Db(n,8)._handleBlurEvent(o.target)&&e),"ionChange"===l&&(e=!1!==t.Db(n,8)._handleInputEvent(o.target)&&e),"mousedown"===l&&(e=!1!==u.goSearchPage()&&e),e}),g.mb,g.B)),t.Ib(5120,null,f.e,(function(n){return[n]}),[e.Ob]),t.qb(7,49152,null,0,e.kb,[t.h,t.k,t.x],null,null),t.qb(8,16384,null,0,e.Ob,[t.k],null,null),(n()(),t.rb(9,0,null,0,1,"ion-title",[],null,null,null,g.ub,g.J)),t.qb(10,49152,null,0,e.Ab,[t.h,t.k,t.x],null,null),(n()(),t.rb(11,0,null,null,15,"ion-content",[],null,null,null,g.U,g.j)),t.qb(12,49152,null,0,e.u,[t.h,t.k,t.x],null,null),(n()(),t.rb(13,0,null,0,1,"app-my-slides",[],null,[[null,"sendGoods"]],(function(n,l,o){var t=!0;return"sendGoods"===l&&(t=!1!==n.component.slideToGoodsDetail(o)&&t),t}),v,k)),t.qb(14,114688,null,0,m,[],{goodsBannerList:[0,"goodsBannerList"]},{sendGoods:"sendGoods"}),(n()(),t.rb(15,0,null,0,2,"div",[["class","h_title"]],null,null,null,null,null)),(n()(),t.Lb(16,null,[" "," "])),t.Fb(131072,h.i,[h.j,t.h]),(n()(),t.rb(18,0,null,0,1,"app-goods-sku-cards",[],null,[[null,"sendGoods"]],(function(n,l,o){var t=!0;return"sendGoods"===l&&(t=!1!==n.component.goGoodsDetail(o)&&t),t}),L,I)),t.qb(19,114688,null,0,S,[],{goodsSkuIncludeInfoList:[0,"goodsSkuIncludeInfoList"],size:[1,"size"]},{sendGoods:"sendGoods"}),(n()(),t.rb(20,0,null,0,4,"ion-infinite-scroll",[["threshold","100px"]],null,[[null,"ionInfinite"]],(function(n,l,o){var t=!0;return"ionInfinite"===l&&(t=!1!==n.component.loadData(o)&&t),t}),g.bb,g.p)),t.qb(21,49152,[["infinite",4]],0,e.E,[t.h,t.k,t.x],{disabled:[0,"disabled"],threshold:[1,"threshold"]},null),(n()(),t.rb(22,0,null,0,2,"ion-infinite-scroll-content",[["loadingSpinner","bubbles"]],null,null,null,g.ab,g.q)),t.qb(23,49152,null,0,e.F,[t.h,t.k,t.x],{loadingSpinner:[0,"loadingSpinner"],loadingText:[1,"loadingText"]},null),t.Fb(131072,h.i,[h.j,t.h]),(n()(),t.gb(16777216,null,0,1,null,q)),t.qb(26,16384,null,0,p.l,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],(function(n,l){var o=l.component;n(l,14,0,o.goodsBannerIncludeGoodsInfoList),n(l,19,0,o.goodsSkuList,6),n(l,21,0,o.scrollDisabled,"100px"),n(l,23,0,"bubbles",t.vb(1,"",t.Mb(l,23,1,t.Db(l,24).transform("loading")),"")),n(l,26,0,o.scrollDisabled)}),(function(n,l){n(l,16,0,t.Mb(l,16,0,t.Db(l,17).transform("hot.recommend")))}))}function M(n){return t.Nb(0,[(n()(),t.rb(0,0,null,null,1,"app-hot-show-sku",[],null,null,null,D,G)),t.qb(1,114688,null,0,c,[e.Gb,e.Pb,u.a,s.a,r.a,d.a],null,null)],(function(n,l){n(l,1,0)}),null)}var w=t.nb("app-hot-show-sku",c,M,{},{},[]),O=o("/q54"),C=o("IP0z"),P=o("VDRc"),j=o("ura0"),z=o("Nhcz"),y=o("u9T3"),F=o("MfXf"),N=o("kCW2");class E{}class T{}class J{}var $=o("iInd");o.d(l,"HotShowSkuPageModuleNgFactory",(function(){return A}));var A=t.ob(a,[],(function(n){return t.Ab([t.Bb(512,t.j,t.Z,[[8,[b.a,w]],[3,t.j],t.v]),t.Bb(4608,p.n,p.m,[t.s,[2,p.B]]),t.Bb(4608,f.l,f.l,[]),t.Bb(4608,f.c,f.c,[]),t.Bb(5120,t.b,(function(n,l){return[O.j(n,l)]}),[p.d,t.z]),t.Bb(4608,e.a,e.a,[t.x,t.g]),t.Bb(4608,e.Ib,e.Ib,[e.a,t.j,t.p]),t.Bb(4608,e.Mb,e.Mb,[e.a,t.j,t.p]),t.Bb(1073742336,p.b,p.b,[]),t.Bb(1073742336,h.g,h.g,[]),t.Bb(1073742336,f.k,f.k,[]),t.Bb(1073742336,f.d,f.d,[]),t.Bb(1073742336,f.j,f.j,[]),t.Bb(1073742336,O.c,O.c,[]),t.Bb(1073742336,C.a,C.a,[]),t.Bb(1073742336,P.c,P.c,[]),t.Bb(1073742336,j.b,j.b,[]),t.Bb(1073742336,z.a,z.a,[]),t.Bb(1073742336,y.a,y.a,[[2,O.g],t.z]),t.Bb(1073742336,F.a,F.a,[]),t.Bb(1073742336,e.Eb,e.Eb,[]),t.Bb(1073742336,N.a,N.a,[]),t.Bb(1073742336,E,E,[]),t.Bb(1073742336,T,T,[]),t.Bb(1073742336,J,J,[]),t.Bb(1073742336,$.o,$.o,[[2,$.t],[2,$.m]]),t.Bb(1073742336,a,a,[]),t.Bb(1024,$.k,(function(){return[[{path:"",component:c}]]}),[])])}))}}]);