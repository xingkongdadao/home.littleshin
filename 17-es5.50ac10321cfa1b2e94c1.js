(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{hm6C:function(n,l,t){"use strict";t.r(l);var o=t("CcnG"),u=t("mrSG"),i=t("ZZ/e"),e=t("K7eL"),s=t("mMk2"),r=t("GKSc"),c=t("jXwS"),d=function(n){function l(l,t,o,u,i,e){var s=n.call(this,l,t)||this;return s.loading=l,s.toast=t,s.goodsInfoService=o,s.goodsSkuService=u,s.goodsBannerService=i,s.router=e,s.goodsBannerIncludeGoodsInfoList=[],s.goodsSkuList=[],s.scrollDisabled=!1,s.pageSize=20,s.pageIndex=1,s.loadEnd=!1,s.slidesList=[],s}return u.d(l,n),l.prototype.ngOnInit=function(){for(var n=1;n<=3;n++)this.slidesList.push({pic:"assets/slide0"+n+".png",url:""});this.getGoodsBannerList(),this.getGoodsSkuListFunc()},l.prototype.loadData=function(n){var l=this;setTimeout((function(){l.getGoodsSkuListFunc(n)}),500)},l.prototype.getGoodsSkuListFunc=function(n){var l=this;this.showLoading().then(),this.goodsSkuService.getGoodsSkuIncludeInfoList(this.pageIndex,this.pageSize).pipe().subscribe((function(t){l.goodsSkuList=l.goodsSkuList.concat(t.results),l.length=t.count,l.goodsSkuList.length<t.count?(l.pageIndex=l.pageIndex+1,l.scrollDisabled=!1):(l.loadEnd=!0,l.scrollDisabled=!0),l.dismissLoading(),n&&n.target.complete()}),(function(t){console.log("\u52a0\u8f7d\u6570\u636e\u51fa\u9519"),console.log(t.error),l.scrollDisabled=!1,l.dismissLoading(),n&&n.target.complete()}))},l.prototype.goSearchPage=function(){this.router.navigate(["/goods-info-search"])},l.prototype.getGoodsBannerList=function(){var n=this;this.goodsBannerService.getGoodsBannerIncludeGoodsInfoList().subscribe((function(l){n.goodsBannerIncludeGoodsInfoList=l.results}))},l.prototype.slideToGoodsDetail=function(n){this.router.navigate(["/goods-info-detail",n]).then()},l.prototype.goGoodsDetail=function(n){this.router.navigate(["/goods-info-detail",n.goods.id]).then()},l}(s.a),a=function(){return function(){}}(),b=t("pMnS"),g=t("oBZk"),h=t("A7o+"),p=t("Ip0R"),f=t("gIcY"),m=function(){function n(){this.goodsBannerList=[],this.sendGoods=new o.m,this.slidesOpts={speed:400,autoplay:{delay:2e3},loop:!0}}return n.prototype.ngOnInit=function(){},n.prototype.slideTouchEnd=function(n){n.target.startAutoplay()},n.prototype.slideClicked=function(n){console.log("\u70b9\u51fb\u8f6e\u64ad\u56fe"),this.sendGoods.emit(n.goods.id)},n}(),C=o.rb({encapsulation:0,styles:[["ion-slide[_ngcontent-%COMP%]{width:100%;height:150px;overflow:hidden}ion-slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}"]],data:{}});function L(n){return o.Nb(0,[(n()(),o.tb(0,0,null,null,2,"ion-slide",[],null,[[null,"click"]],(function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.slideClicked(n.context.$implicit)&&o),o}),g.cb,g.x)),o.sb(1,49152,null,0,i.qb,[o.h,o.k,o.z],null,null),(n()(),o.tb(2,0,null,0,0,"img",[["alt",""]],[[8,"src",4]],null,null,null,null))],null,(function(n,l){n(l,2,0,l.context.$implicit.goods.goods_front_image_large)}))}function k(n){return o.Nb(0,[(n()(),o.tb(0,0,null,null,3,"ion-slides",[["pager","true"]],null,[[null,"ionSlideTouchEnd"]],(function(n,l,t){var o=!0;return"ionSlideTouchEnd"===l&&(o=!1!==n.component.slideTouchEnd(t)&&o),o}),g.db,g.y)),o.sb(1,49152,[["slide2",4]],0,i.rb,[o.h,o.k,o.z],{options:[0,"options"],pager:[1,"pager"]},null),(n()(),o.ib(16777216,null,0,1,null,L)),o.sb(3,278528,null,0,p.i,[o.O,o.L,o.s],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){var t=l.component;n(l,1,0,t.slidesOpts,"true"),n(l,3,0,t.goodsBannerList)}),null)}var v=function(){function n(){this.hotList=[],this.hotListWidth=400}return n.prototype.ngOnInit=function(){for(var n=1;n<=7;n++)this.hotList.push({pic:"assets/0"+n+".jpg",title:"\u7b2c"+n+"\u4e2a"});this.hotListWidth=9*this.hotList.length+"rem"},n}(),_=o.rb({encapsulation:0,styles:[[".hot-list[_ngcontent-%COMP%]{width:100%;height:10rem;overflow-x:auto;overflow-y:hidden}.hot-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:8rem;height:10rem;float:left;margin-left:1rem}.hot-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:7rem;height:7rem}.hot-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding:.4rem;text-align:center}"]],data:{}});function O(n){return o.Nb(0,[(n()(),o.tb(0,0,null,null,3,"li",[],null,null,null,null,null)),(n()(),o.tb(1,0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null)),(n()(),o.tb(2,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),o.Lb(3,null,["",""]))],null,(function(n,l){n(l,1,0,l.context.$implicit.pic),n(l,3,0,l.context.$implicit.title)}))}function I(n){return o.Nb(0,[(n()(),o.tb(0,0,null,null,6,"div",[["class","hot-list"]],null,null,null,null,null)),(n()(),o.tb(1,0,null,null,5,"ul",[["class","clearfix"]],null,null,null,null,null)),o.Ib(512,null,p.w,p.x,[o.k,o.t,o.D]),o.sb(3,278528,null,0,p.m,[p.w],{ngStyle:[0,"ngStyle"]},null),o.Hb(4,{width:0}),(n()(),o.ib(16777216,null,null,1,null,O)),o.sb(6,278528,null,0,p.i,[o.O,o.L,o.s],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){var t=l.component,o=n(l,4,0,t.hotListWidth);n(l,3,0,o),n(l,6,0,t.hotList)}),null)}var G=function(){function n(){this.goodsSkuIncludeInfoList=[],this.sendGoods=new o.m,this.size=4}return n.prototype.ngOnInit=function(){},n.prototype.goGoodsDetail=function(n){this.sendGoods.emit(n)},n}(),S=o.rb({encapsulation:0,styles:[[".plist[_ngcontent-%COMP%]   .plist_inner[_ngcontent-%COMP%]{padding:.5rem;border:.05rem solid #eee}.plist[_ngcontent-%COMP%]   .plist_inner[_ngcontent-%COMP%]   .plist_title[_ngcontent-%COMP%]{height:3.8rem;overflow:hidden;line-height:1.8}"]],data:{}});function x(n){return o.Nb(0,[(n()(),o.tb(0,0,null,null,7,"ion-col",[["size","6"]],null,[[null,"click"]],(function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.goGoodsDetail(n.context.$implicit)&&o),o}),g.M,g.h)),o.sb(1,49152,null,0,i.t,[o.h,o.k,o.z],{size:[0,"size"]},null),(n()(),o.tb(2,0,null,0,5,"div",[["class","plist_inner"]],null,null,null,null,null)),(n()(),o.tb(3,0,null,null,0,"img",[],[[8,"src",4],[8,"alt",0]],null,null,null,null)),(n()(),o.tb(4,0,null,null,1,"div",[["class","plist_title"]],null,null,null,null,null)),(n()(),o.Lb(5,null,["",""])),(n()(),o.tb(6,0,null,null,1,"p",[["class","price"]],null,null,null,null,null)),(n()(),o.Lb(7,null,["\u20ab",""]))],(function(n,l){n(l,1,0,l.component.size)}),(function(n,l){n(l,3,0,l.context.$implicit.goods_front_image_medium,l.context.$implicit.goods.name_vn),n(l,5,0,l.context.$implicit.goods.name_vn),n(l,7,0,l.context.$implicit.goods.price_current)}))}function M(n){return o.Nb(0,[(n()(),o.tb(0,0,null,null,6,"div",[["class","plist"]],null,null,null,null,null)),(n()(),o.tb(1,0,null,null,5,"ion-grid",[],null,null,null,g.P,g.k)),o.sb(2,49152,null,0,i.A,[o.h,o.k,o.z],null,null),(n()(),o.tb(3,0,null,0,3,"ion-row",[],null,null,null,g.ab,g.v)),o.sb(4,49152,null,0,i.jb,[o.h,o.k,o.z],null,null),(n()(),o.ib(16777216,null,0,1,null,x)),o.sb(6,278528,null,0,p.i,[o.O,o.L,o.s],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){n(l,6,0,l.component.goodsSkuIncludeInfoList)}),null)}var w=t("ZYCi"),y=o.rb({encapsulation:0,styles:[['.h_title[_ngcontent-%COMP%]{padding:1rem .5rem;font-size:1.4rem}.h_title[_ngcontent-%COMP%]::before{display:inline-block;border-left:3px solid #f53d3d;height:14px;width:1px;content:"";top:2px;position:relative}']],data:{}});function z(n){return o.Nb(0,[(n()(),o.tb(0,0,null,null,3,"ion-label",[["class","endLine"]],null,null,null,g.Y,g.t)),o.sb(1,49152,null,0,i.N,[o.h,o.k,o.z],null,null),(n()(),o.Lb(2,0,["\u2014\u2014\u2014\u2014 "," \u2014\u2014\u2014\u2014"])),o.Gb(131072,h.i,[h.j,o.h])],null,(function(n,l){n(l,2,0,o.Mb(l,2,0,o.Eb(l,3).transform("finished")))}))}function P(n){return o.Nb(0,[(n()(),o.tb(0,0,null,null,2,"div",[["class","endLineContainer"]],null,null,null,null,null)),(n()(),o.ib(16777216,null,null,1,null,z)),o.sb(2,16384,null,0,p.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null)],(function(n,l){n(l,2,0,l.component.loadEnd)}),null)}function B(n){return o.Nb(0,[(n()(),o.tb(0,0,null,null,10,"ion-header",[],null,null,null,g.Q,g.l)),o.sb(1,49152,null,0,i.B,[o.h,o.k,o.z],null,null),(n()(),o.tb(2,0,null,0,8,"ion-toolbar",[],null,null,null,g.jb,g.E)),o.sb(3,49152,null,0,i.Cb,[o.h,o.k,o.z],null,null),(n()(),o.tb(4,0,null,0,4,"div",[],null,null,null,null,null)),(n()(),o.tb(5,0,null,null,3,"ion-searchbar",[["style","padding-bottom: 0"]],null,[[null,"mousedown"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,t){var u=!0,i=n.component;return"ionBlur"===l&&(u=!1!==o.Eb(n,8)._handleBlurEvent(t.target)&&u),"ionChange"===l&&(u=!1!==o.Eb(n,8)._handleInputEvent(t.target)&&u),"mousedown"===l&&(u=!1!==i.goSearchPage()&&u),u}),g.bb,g.w)),o.Ib(5120,null,f.c,(function(n){return[n]}),[i.Nb]),o.sb(7,49152,null,0,i.kb,[o.h,o.k,o.z],null,null),o.sb(8,16384,null,0,i.Nb,[o.k],null,null),(n()(),o.tb(9,0,null,0,1,"ion-title",[],null,null,null,g.ib,g.D)),o.sb(10,49152,null,0,i.Ab,[o.h,o.k,o.z],null,null),(n()(),o.tb(11,0,null,null,22,"ion-content",[],null,null,null,g.N,g.i)),o.sb(12,49152,null,0,i.u,[o.h,o.k,o.z],null,null),(n()(),o.tb(13,0,null,0,1,"app-my-slides",[],null,[[null,"sendGoods"]],(function(n,l,t){var o=!0;return"sendGoods"===l&&(o=!1!==n.component.slideToGoodsDetail(t)&&o),o}),k,C)),o.sb(14,114688,null,0,m,[],{goodsBannerList:[0,"goodsBannerList"]},{sendGoods:"sendGoods"}),(n()(),o.tb(15,0,null,0,2,"div",[["class","h_title"]],null,null,null,null,null)),(n()(),o.Lb(16,null,[" "," "])),o.Gb(131072,h.i,[h.j,o.h]),(n()(),o.tb(18,0,null,0,1,"app-my-horizontal-scroll",[],null,null,null,I,_)),o.sb(19,114688,null,0,v,[],null,null),(n()(),o.tb(20,0,null,0,2,"h2",[["style","font-size: 24px; text-align: center;"]],null,null,null,null,null)),(n()(),o.Lb(21,null,["",""])),o.Gb(131072,h.i,[h.j,o.h]),(n()(),o.tb(23,0,null,0,2,"div",[["class","h_title"]],null,null,null,null,null)),(n()(),o.Lb(24,null,[" "," "])),o.Gb(131072,h.i,[h.j,o.h]),(n()(),o.tb(26,0,null,0,1,"app-goods-sku-cards",[],null,[[null,"sendGoods"]],(function(n,l,t){var o=!0;return"sendGoods"===l&&(o=!1!==n.component.goGoodsDetail(t)&&o),o}),M,S)),o.sb(27,114688,null,0,G,[],{goodsSkuIncludeInfoList:[0,"goodsSkuIncludeInfoList"],size:[1,"size"]},{sendGoods:"sendGoods"}),(n()(),o.tb(28,0,null,0,3,"ion-infinite-scroll",[["threshold","100px"]],null,[[null,"ionInfinite"]],(function(n,l,t){var o=!0;return"ionInfinite"===l&&(o=!1!==n.component.loadData(t)&&o),o}),g.U,g.o)),o.sb(29,49152,[["infinite",4]],0,i.E,[o.h,o.k,o.z],{disabled:[0,"disabled"],threshold:[1,"threshold"]},null),(n()(),o.tb(30,0,null,0,1,"ion-infinite-scroll-content",[["loadingSpinner","bubbles"],["loadingText","Loading more data..."]],null,null,null,g.T,g.p)),o.sb(31,49152,null,0,i.F,[o.h,o.k,o.z],{loadingSpinner:[0,"loadingSpinner"],loadingText:[1,"loadingText"]},null),(n()(),o.ib(16777216,null,0,1,null,P)),o.sb(33,16384,null,0,p.j,[o.O,o.L],{ngIf:[0,"ngIf"]},null)],(function(n,l){var t=l.component;n(l,14,0,t.goodsBannerIncludeGoodsInfoList),n(l,19,0),n(l,27,0,t.goodsSkuList,6),n(l,29,0,t.scrollDisabled,"100px"),n(l,31,0,"bubbles","Loading more data..."),n(l,33,0,t.scrollDisabled)}),(function(n,l){n(l,16,0,o.Mb(l,16,0,o.Eb(l,17).transform("hot.guessYouLike"))),n(l,21,0,o.Mb(l,21,0,o.Eb(l,22).transform("hot.recommend"))),n(l,24,0,o.Mb(l,24,0,o.Eb(l,25).transform("hot.recommend")))}))}function E(n){return o.Nb(0,[(n()(),o.tb(0,0,null,null,1,"app-hot-show-sku",[],null,null,null,B,y)),o.sb(1,114688,null,0,d,[i.Gb,i.Ob,e.a,r.a,c.a,w.m],null,null)],(function(n,l){n(l,1,0)}),null)}var D=o.pb("app-hot-show-sku",d,E,{},{},[]),j=t("OzfB"),N=t("Fzqc"),F=t("21Lb"),T=t("hUWP"),$=t("3pJQ"),q=t("V9q+"),W=t("MfXf"),A=t("kCW2"),Y=function(){return function(){}}(),Z=function(){return function(){}}(),J=function(){return function(){}}();t.d(l,"HotShowSkuPageModuleNgFactory",(function(){return H}));var H=o.qb(a,[],(function(n){return o.Bb([o.Cb(512,o.j,o.bb,[[8,[b.a,D]],[3,o.j],o.x]),o.Cb(4608,p.l,p.k,[o.u,[2,p.z]]),o.Cb(4608,f.i,f.i,[]),o.Cb(4608,f.a,f.a,[]),o.Cb(5120,o.b,(function(n,l){return[j.j(n,l)]}),[p.c,o.B]),o.Cb(4608,i.a,i.a,[o.z,o.g]),o.Cb(4608,i.Ib,i.Ib,[i.a,o.j,o.q]),o.Cb(4608,i.Lb,i.Lb,[i.a,o.j,o.q]),o.Cb(1073742336,p.b,p.b,[]),o.Cb(1073742336,h.g,h.g,[]),o.Cb(1073742336,f.h,f.h,[]),o.Cb(1073742336,f.b,f.b,[]),o.Cb(1073742336,f.g,f.g,[]),o.Cb(1073742336,j.c,j.c,[]),o.Cb(1073742336,N.a,N.a,[]),o.Cb(1073742336,F.c,F.c,[]),o.Cb(1073742336,T.b,T.b,[]),o.Cb(1073742336,$.a,$.a,[]),o.Cb(1073742336,q.a,q.a,[[2,j.g],o.B]),o.Cb(1073742336,W.a,W.a,[]),o.Cb(1073742336,i.Eb,i.Eb,[]),o.Cb(1073742336,A.a,A.a,[]),o.Cb(1073742336,Y,Y,[]),o.Cb(1073742336,Z,Z,[]),o.Cb(1073742336,J,J,[]),o.Cb(1073742336,w.o,w.o,[[2,w.t],[2,w.m]]),o.Cb(1073742336,a,a,[]),o.Cb(1024,w.k,(function(){return[[{path:"",component:d}]]}),[])])}))}}]);