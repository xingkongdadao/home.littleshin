(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"6c1V":function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var i=n("mrSG"),o=n("1jKG"),r=n("fjz4"),a=n("7ErT"),s=n("ZZ/e"),l=n("CcnG"),u=n("A7o+"),c=function(){function t(t,e,n,i,o){this.shopsService=t,this.routerService=e,this.constantService=n,this.translateService=i,this.actionSheetController=o,this.shopList=[],this.scrollDisabled=!1,this.loading=!1,this.pageSize=20,this.pageIndex=1}return t.prototype.initShopListView=function(){this.pageIndex=1,this.shopList=[],this.loadData()},t.prototype.loadData=function(t){var e=this;this.loading=!0,setTimeout((function(){e.shopsService.getShopList(e.pageIndex).subscribe((function(n){e.pageIndex=e.pageIndex+1;for(var i=0,o=n.results;i<o.length;i++)e.shopList.push(o[i]);e.loading=!1,e.shopList.length===n.count&&(e.scrollDisabled=!0),t&&t.target.complete()}))}),500)},t.prototype.toShopList=function(t){this.routerService.toAdminGoodsInfoList().then()},t.prototype.toShopAdd=function(){this.routerService.toAdminShopAdd().then()},t.prototype.toShopEdit=function(t){this.selectShop=t,this.routerService.toAdminShopEdit(t.id).then()},t.prototype.doRefresh=function(t){var e=this;this.loading=!0,this.pageIndex=1,setTimeout((function(){e.shopsService.getShopList(e.pageIndex).subscribe((function(n){e.pageIndex=e.pageIndex+1,e.shopList=n.results,e.scrollDisabled=e.shopList.length===n.count,e.loading=!1,t.target.complete(),e.constantService.presentToast("\u5237\u65b0\u6210\u529f\uff01").then()}))}),200)},t.prototype.deleteShop=function(t){var e=this;this.shopsService.deleteShop(t.id).subscribe((function(n){e.shopList=e.shopList.filter((function(e){if(e!==t)return e})),e.constantService.presentToast(e.translateService.instant("admin-category-list.deleteSuccess")).then()}))},t.prototype.presentActionSheet=function(t){return i.b(this,void 0,void 0,(function(){var e=this;return i.e(this,(function(n){switch(n.label){case 0:return[4,this.actionSheetController.create({header:t.name+"("+t.name_vn+")",buttons:[{text:this.translateService.instant("admin-category-list.edit"),icon:"create",handler:function(){e.toShopEdit(t)}},{text:this.translateService.instant("admin-category-list.delete"),role:"destructive",icon:"trash",handler:function(){e.deleteShop(t)}},{text:this.translateService.instant("admin-category-list.cancel"),icon:"close",role:"cancel"}]})];case 1:return[4,n.sent().present()];case 2:return n.sent(),[2]}}))}))},t.ngInjectableDef=l.Sb({factory:function(){return new t(l.Tb(o.a),l.Tb(r.a),l.Tb(a.a),l.Tb(u.j),l.Tb(s.a))},token:t,providedIn:"root"}),t}()},aAsz:function(t,e,n){"use strict";n.r(e);var i=n("CcnG"),o=function(){return function(){}}(),r=n("pMnS"),a=n("oBZk"),s=n("ZZ/e"),l=n("Ip0R"),u=n("ZYCi"),c=n("fjz4"),d=function(){function t(t,e){this.routerService=t,this.translateService=e,this.appPages=[{title:this.translateService.instant("admin.personal"),url:this.routerService.personal,icon:"person"},{title:this.translateService.instant("admin.dashboard"),url:this.routerService.adminDashboard,icon:"home"},{title:this.translateService.instant("admin.goods-category-list"),url:this.routerService.adminGoodsCategoryList,icon:"list"},{title:this.translateService.instant("admin.goods-info-list"),url:this.routerService.adminGoodsInfoList,icon:"list"},{title:this.translateService.instant("admin.goods-sku-list"),url:this.routerService.adminGoodsSkuList,icon:"list"},{title:this.translateService.instant("admin.goods-in-list"),url:this.routerService.adminGoodsInList,icon:"list"},{title:this.translateService.instant("admin.goods-out-list"),url:this.routerService.adminGoodsOutList,icon:"list"},{title:this.translateService.instant("admin.shop-list"),url:this.routerService.adminShopList,icon:"list"},{title:this.translateService.instant("admin.city-list"),url:this.routerService.adminCityList,icon:"list"}]}return t.prototype.ngOnInit=function(){},t.prototype.toNavigate=function(t){this.routerService.toUrl(t).then()},t}(),h=n("A7o+"),g=i.rb({encapsulation:0,styles:[[""]],data:{}});function f(t){return i.Pb(0,[(t()(),i.tb(0,0,null,null,8,"ion-menu-toggle",[["auto-hide","false"]],null,null,null,a.ub,a.B)),i.sb(1,49152,null,0,s.T,[i.h,i.k,i.z],null,null),(t()(),i.tb(2,0,null,0,6,"ion-item",[],null,[[null,"click"]],(function(t,e,n){var i=!0;return"click"===e&&(i=!1!==t.component.toNavigate(t.context.$implicit.url)&&i),i}),a.pb,a.r)),i.sb(3,49152,null,0,s.I,[i.h,i.k,i.z],null,null),(t()(),i.tb(4,0,null,0,1,"ion-icon",[["slot","start"]],null,null,null,a.hb,a.n)),i.sb(5,49152,null,0,s.D,[i.h,i.k,i.z],{name:[0,"name"]},null),(t()(),i.tb(6,0,null,0,2,"ion-label",[],null,null,null,a.qb,a.w)),i.sb(7,49152,null,0,s.O,[i.h,i.k,i.z],null,null),(t()(),i.Nb(8,0,[" "," "]))],(function(t,e){t(e,5,0,e.context.$implicit.icon)}),(function(t,e){t(e,8,0,e.context.$implicit.title)}))}function p(t){return i.Pb(0,[(t()(),i.tb(0,0,null,null,18,"ion-split-pane",[["contentId","main-content"]],null,null,null,a.Fb,a.L)),i.sb(1,49152,null,0,s.ub,[i.h,i.k,i.z],{contentId:[0,"contentId"]},null),(t()(),i.tb(2,0,null,0,14,"ion-menu",[["contentId","main-content"],["type","overlay"]],null,null,null,a.vb,a.z)),i.sb(3,49152,null,0,s.R,[i.h,i.k,i.z],{contentId:[0,"contentId"],type:[1,"type"]},null),(t()(),i.tb(4,0,null,0,6,"ion-header",[],null,null,null,a.gb,a.m)),i.sb(5,49152,null,0,s.C,[i.h,i.k,i.z],null,null),(t()(),i.tb(6,0,null,0,4,"ion-toolbar",[],null,null,null,a.Nb,a.T)),i.sb(7,49152,null,0,s.Db,[i.h,i.k,i.z],null,null),(t()(),i.tb(8,0,null,0,2,"ion-title",[],null,null,null,a.Lb,a.R)),i.sb(9,49152,null,0,s.Bb,[i.h,i.k,i.z],null,null),(t()(),i.Nb(-1,0,["Menu"])),(t()(),i.tb(11,0,null,0,5,"ion-content",[],null,null,null,a.db,a.j)),i.sb(12,49152,null,0,s.v,[i.h,i.k,i.z],null,null),(t()(),i.tb(13,0,null,0,3,"ion-list",[],null,null,null,a.sb,a.x)),i.sb(14,49152,null,0,s.P,[i.h,i.k,i.z],null,null),(t()(),i.ib(16777216,null,0,1,null,f)),i.sb(16,278528,null,0,l.k,[i.O,i.L,i.s],{ngForOf:[0,"ngForOf"]},null),(t()(),i.tb(17,16777216,null,0,1,"ion-router-outlet",[["id","main-content"]],null,null,null,null,null)),i.sb(18,212992,null,0,s.jb,[u.b,i.O,i.j,[8,null],[8,null],s.d,s.Jb,l.h,i.k,u.m,i.z,u.a,[3,s.jb]],null,null)],(function(t,e){var n=e.component;t(e,1,0,"main-content"),t(e,3,0,"main-content","overlay"),t(e,16,0,n.appPages),t(e,18,0)}),null)}function b(t){return i.Pb(0,[(t()(),i.tb(0,0,null,null,1,"app-admin",[],null,null,null,p,g)),i.sb(1,114688,null,0,d,[c.a,h.j],null,null)],(function(t,e){t(e,1,0)}),null)}var v=i.pb("app-admin",d,b,{},{},[]),y=n("dnTq"),S=n("iw74"),m=function(){function t(t,e,n){this.storage=t,this.loginViewService=e,this.routerService=n}return t.prototype.canActivate=function(){var t=this;return this.storage.get("userInfo").then((function(e){return t.loginViewService.userInfo=e,!(!t.loginViewService.userInfo||!t.loginViewService.userInfo.is_staff)||(t.routerService.toLogin().then(),!1)}))},t.ngInjectableDef=i.Sb({factory:function(){return new t(i.Tb(S.b),i.Tb(y.a),i.Tb(c.a))},token:t,providedIn:"root"}),t}(),I=function(){function t(t,e,n){this.storage=t,this.loginViewService=e,this.routerService=n}return t.prototype.canActivate=function(){var t=this;return this.storage.get("userInfo").then((function(e){return t.loginViewService.userInfo=e,!(!t.loginViewService.userInfo||!t.loginViewService.userInfo.is_staff)||(t.routerService.toLogin().then(),!1)}))},t.ngInjectableDef=i.Sb({factory:function(){return new t(i.Tb(S.b),i.Tb(y.a),i.Tb(c.a))},token:t,providedIn:"root"}),t}(),C=function(){function t(t,e,n){this.storage=t,this.loginViewService=e,this.routerService=n}return t.prototype.canActivate=function(){var t=this;return this.storage.get("userInfo").then((function(e){return t.loginViewService.userInfo=e,!(!t.loginViewService.userInfo||!t.loginViewService.userInfo.is_staff)||(t.routerService.toLogin().then(),!1)}))},t.ngInjectableDef=i.Sb({factory:function(){return new t(i.Tb(S.b),i.Tb(y.a),i.Tb(c.a))},token:t,providedIn:"root"}),t}(),L=n("xWuP"),w=n("w8xc"),T=n("7ErT"),A=n("gIcY"),D=function(){function t(t,e){this.goodsCategoryService=t,this.fb=e}return t.prototype.initViewService=function(){this.initForm(),this.getCategoryList()},t.prototype.initForm=function(){this.formGroup=this.fb.group({name:["",A.o.required],name_vn:[""],code:[""],category_type:[],parent_category:[],is_tab:[!1],desc:[],category_picture:[]})},t.prototype.getCategoryList=function(){var t=this;this.goodsCategoryService.getGoodsCategoryList().subscribe((function(e){t.goodsCategoryList=e.results}))},t.prototype.onChange=function(t){if(t.target.files.length>0){var e=t.target.files[0];this.formGroup.get("category_picture").setValue(e)}},t.prototype.onSubmit=function(){var t=new FormData;t.append("name",this.formGroup.get("name").value),t.append("name_vn",this.formGroup.get("name_vn").value),t.append("code",this.formGroup.get("code").value),t.append("category_type",this.formGroup.get("category_type").value),t.append("parent_category",this.formGroup.get("parent_category").value),t.append("is_tab",this.formGroup.get("is_tab").value),t.append("desc",this.formGroup.get("desc").value),t.append("category_picture",this.formGroup.get("category_picture").value),this.goodsCategoryService.addGoodsCategory(t).subscribe((function(){console.log("\u6dfb\u52a0\u5546\u54c1\u7c7b\u522b\u6210\u529f")}))},t.ngInjectableDef=i.Sb({factory:function(){return new t(i.Tb(w.a),i.Tb(A.d))},token:t,providedIn:"root"}),t}(),x=n("6c1V"),G=n("1jKG"),P=n("fBKx"),V=n("kPFh"),k=function(){function t(){}return t.forChild=function(){return{ngModule:t,providers:[m,I,C,L.a,D,x.a,P.a]}},t}(),j=function(){function t(t,e,n){this.storage=t,this.loginViewService=e,this.routerService=n}return t.prototype.canActivate=function(){var t=this;return this.storage.get("userInfo").then((function(e){return t.loginViewService.userInfo=e,!(!t.loginViewService.userInfo||!t.loginViewService.userInfo.is_staff)||(t.routerService.toLogin().then(),!1)}))},t.ngInjectableDef=i.Sb({factory:function(){return new t(i.Tb(S.b),i.Tb(y.a),i.Tb(c.a))},token:t,providedIn:"root"}),t}(),F=function(){function t(t,e,n){this.storage=t,this.loginViewService=e,this.routerService=n}return t.prototype.canActivate=function(){var t=this;return this.storage.get("userInfo").then((function(e){return t.loginViewService.userInfo=e,!(!t.loginViewService.userInfo||!t.loginViewService.userInfo.is_staff)||(t.routerService.toLogin().then(),!1)}))},t.ngInjectableDef=i.Sb({factory:function(){return new t(i.Tb(S.b),i.Tb(y.a),i.Tb(c.a))},token:t,providedIn:"root"}),t}(),M=function(){function t(t,e,n){this.storage=t,this.loginViewService=e,this.routerService=n}return t.prototype.canActivate=function(){var t=this;return this.storage.get("userInfo").then((function(e){return t.loginViewService.userInfo=e,!(!t.loginViewService.userInfo||!t.loginViewService.userInfo.is_staff)||(t.routerService.toLogin().then(),!1)}))},t.ngInjectableDef=i.Sb({factory:function(){return new t(i.Tb(S.b),i.Tb(y.a),i.Tb(c.a))},token:t,providedIn:"root"}),t}(),_=function(){function t(t,e,n){this.storage=t,this.loginViewService=e,this.routerService=n}return t.prototype.canActivate=function(){var t=this;return this.storage.get("userInfo").then((function(e){return t.loginViewService.userInfo=e,!(!t.loginViewService.userInfo||!t.loginViewService.userInfo.is_staff)||(t.routerService.toLogin().then(),!1)}))},t.ngInjectableDef=i.Sb({factory:function(){return new t(i.Tb(S.b),i.Tb(y.a),i.Tb(c.a))},token:t,providedIn:"root"}),t}(),N=function(){function t(t,e,n){this.storage=t,this.loginViewService=e,this.routerService=n}return t.prototype.canActivate=function(){var t=this;return this.storage.get("userInfo").then((function(e){return t.loginViewService.userInfo=e,!(!t.loginViewService.userInfo||!t.loginViewService.userInfo.is_staff)||(t.routerService.toLogin().then(),!1)}))},t.ngInjectableDef=i.Sb({factory:function(){return new t(i.Tb(S.b),i.Tb(y.a),i.Tb(c.a))},token:t,providedIn:"root"}),t}(),z=function(){return n.e(30).then(n.bind(null,"ZIXW")).then((function(t){return t.DashboardPageModuleNgFactory}))},E=function(){return Promise.all([n.e(1),n.e(0),n.e(17)]).then(n.bind(null,"8FR7")).then((function(t){return t.AdminCategoryListPageModuleNgFactory}))},Z=function(){return Promise.all([n.e(1),n.e(23)]).then(n.bind(null,"ajhP")).then((function(t){return t.AdminGoodsInfoListPageModuleNgFactory}))},O=function(){return Promise.all([n.e(1),n.e(25)]).then(n.bind(null,"RbhX")).then((function(t){return t.AdminGoodsSkuListPageModuleNgFactory}))},q=function(){return Promise.all([n.e(1),n.e(22)]).then(n.bind(null,"L++q")).then((function(t){return t.AdminGoodsInListPageModuleNgFactory}))},R=function(){return Promise.all([n.e(1),n.e(24)]).then(n.bind(null,"+G94")).then((function(t){return t.AdminGoodsOutListPageModuleNgFactory}))},B=function(){return Promise.all([n.e(1),n.e(29)]).then(n.bind(null,"bMr1")).then((function(t){return t.AdminUsersListPageModuleNgFactory}))},K=function(){return Promise.all([n.e(1),n.e(0),n.e(15)]).then(n.bind(null,"T5oq")).then((function(t){return t.AdminCategoryAddPageModuleNgFactory}))},W=function(){return n.e(18).then(n.bind(null,"4wN7")).then((function(t){return t.AdminCategoryUpdatePageModuleNgFactory}))},J=function(){return Promise.all([n.e(1),n.e(0),n.e(16)]).then(n.bind(null,"7nlW")).then((function(t){return t.AdminCategoryEditPageModuleNgFactory}))},U=function(){return Promise.all([n.e(1),n.e(0),n.e(28)]).then(n.bind(null,"hM3s")).then((function(t){return t.AdminShopListPageModuleNgFactory}))},$=function(){return Promise.all([n.e(1),n.e(0),n.e(26)]).then(n.bind(null,"tNLE")).then((function(t){return t.AdminShopAddPageModuleNgFactory}))},X=function(){return Promise.all([n.e(1),n.e(0),n.e(27)]).then(n.bind(null,"/a9r")).then((function(t){return t.AdminShopEditPageModuleNgFactory}))},Y=function(){return Promise.all([n.e(1),n.e(0),n.e(21)]).then(n.bind(null,"8cMy")).then((function(t){return t.AdminCityListPageModuleNgFactory}))},H=function(){return Promise.all([n.e(1),n.e(0),n.e(19)]).then(n.bind(null,"OBze")).then((function(t){return t.AdminCityAddPageModuleNgFactory}))},Q=function(){return Promise.all([n.e(1),n.e(0),n.e(20)]).then(n.bind(null,"C08o")).then((function(t){return t.AdminCityEditPageModuleNgFactory}))},tt=function(){return function(){}}();n.d(e,"AdminModuleNgFactory",(function(){return et}));var et=i.qb(o,[],(function(t){return i.Cb([i.Db(512,i.j,i.bb,[[8,[r.a,v]],[3,i.j],i.x]),i.Db(4608,l.n,l.m,[i.u,[2,l.B]]),i.Db(4608,s.b,s.b,[i.z,i.g]),i.Db(4608,s.Ib,s.Ib,[s.b,i.j,i.q]),i.Db(4608,s.Mb,s.Mb,[s.b,i.j,i.q]),i.Db(4608,m,m,[S.b,y.a,c.a]),i.Db(4608,I,I,[S.b,y.a,c.a]),i.Db(4608,C,C,[S.b,y.a,c.a]),i.Db(4608,L.a,L.a,[w.a,c.a,T.a,h.j,s.a]),i.Db(4608,D,D,[w.a,A.d]),i.Db(4608,x.a,x.a,[G.a,c.a,T.a,h.j,s.a]),i.Db(4608,P.a,P.a,[V.a,c.a,T.a,h.j,s.a]),i.Db(1073742336,l.b,l.b,[]),i.Db(1073742336,s.Fb,s.Fb,[]),i.Db(1073742336,k,k,[]),i.Db(1073742336,u.o,u.o,[[2,u.t],[2,u.m]]),i.Db(1073742336,tt,tt,[]),i.Db(1073742336,o,o,[]),i.Db(1024,u.k,(function(){return[[{path:"",component:d,children:[{path:"",redirectTo:"dashboard",pathMatch:"full"},{path:"dashboard",loadChildren:z},{path:"admin-category-list",canActivate:[m],loadChildren:E},{path:"admin-goods-info-list",canActivate:[j],loadChildren:Z},{path:"admin-goods-sku-list",canActivate:[F],loadChildren:O},{path:"admin-goods-in-list",canActivate:[M],loadChildren:q},{path:"admin-goods-out-list",canActivate:[_],loadChildren:R},{path:"admin-users-list",canActivate:[N],loadChildren:B},{path:"admin-category-add",loadChildren:K},{path:"admin-category-update",loadChildren:W},{path:"admin-category-edit/:id",loadChildren:J},{path:"admin-shop-list",canActivate:[I],loadChildren:U},{path:"admin-shop-add",canActivate:[I],loadChildren:$},{path:"admin-shop-edit/:id",loadChildren:X},{path:"admin-city-list",canActivate:[C],loadChildren:Y},{path:"admin-city-add",loadChildren:H},{path:"admin-city-edit/:id",loadChildren:Q}]}]]}),[])])}))},fBKx:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var i=n("mrSG"),o=n("fjz4"),r=n("7ErT"),a=n("ZZ/e"),s=n("kPFh"),l=n("CcnG"),u=n("A7o+"),c=function(){function t(t,e,n,i,o){this.cityService=t,this.routerService=e,this.constantService=n,this.translateService=i,this.actionSheetController=o,this.cityList=[],this.scrollDisabled=!1,this.loading=!1,this.pageSize=20,this.pageIndex=1}return t.prototype.initCityListView=function(){this.pageIndex=1,this.cityList=[],this.loadData()},t.prototype.loadData=function(t){var e=this;this.loading=!0,setTimeout((function(){e.cityService.getCityList(e.pageIndex).subscribe((function(n){e.pageIndex=e.pageIndex+1;for(var i=0,o=n.results;i<o.length;i++)e.cityList.push(o[i]);e.loading=!1,e.cityList.length===n.count&&(e.scrollDisabled=!0),t&&t.target.complete()}))}),500)},t.prototype.toCityList=function(t){this.routerService.toAdminCityList().then()},t.prototype.toCityAdd=function(){this.routerService.toAdminCityAdd().then()},t.prototype.toCityEdit=function(t){this.selectCity=t,this.routerService.toAdminCityEdit(t.id).then()},t.prototype.doRefresh=function(t){var e=this;this.loading=!0,this.pageIndex=1,setTimeout((function(){e.cityService.getCityList(e.pageIndex).subscribe((function(n){e.pageIndex=e.pageIndex+1,e.cityList=n.results,e.scrollDisabled=e.cityList.length===n.count,e.loading=!1,t.target.complete(),e.constantService.presentToast("\u5237\u65b0\u6210\u529f\uff01").then()}))}),200)},t.prototype.deleteCity=function(t){var e=this;this.cityService.deleteCity(t.id).subscribe((function(){e.cityList=e.cityList.filter((function(e){if(e!==t)return e})),e.constantService.presentToast(e.translateService.instant("admin-category-list.deleteSuccess")).then()}))},t.prototype.presentActionSheet=function(t){return i.b(this,void 0,void 0,(function(){var e=this;return i.e(this,(function(n){switch(n.label){case 0:return[4,this.actionSheetController.create({header:t.name+"("+t.name+")",buttons:[{text:this.translateService.instant("admin-category-list.edit"),icon:"create",handler:function(){e.toCityEdit(t)}},{text:this.translateService.instant("admin-category-list.delete"),role:"destructive",icon:"trash",handler:function(){e.deleteCity(t)}},{text:this.translateService.instant("admin-category-list.cancel"),icon:"close",role:"cancel"}]})];case 1:return[4,n.sent().present()];case 2:return n.sent(),[2]}}))}))},t.ngInjectableDef=l.Sb({factory:function(){return new t(l.Tb(s.a),l.Tb(o.a),l.Tb(r.a),l.Tb(u.j),l.Tb(a.a))},token:t,providedIn:"root"}),t}()},xWuP:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var i=n("mrSG"),o=n("w8xc"),r=n("fjz4"),a=n("7ErT"),s=n("ZZ/e"),l=n("CcnG"),u=n("A7o+"),c=function(){function t(t,e,n,i,o){this.goodsCategoryService=t,this.routerService=e,this.constantService=n,this.translateService=i,this.actionSheetController=o,this.goodsCategoryList=[],this.scrollDisabled=!1,this.loading=!1,this.pageSize=20,this.pageIndex=1}return t.prototype.initAdminCategoryListView=function(){this.pageIndex=1,this.goodsCategoryList=[],this.loadData()},t.prototype.loadData=function(t){var e=this;this.loading=!0,setTimeout((function(){e.goodsCategoryService.getGoodsCategoryList(e.pageIndex).subscribe((function(n){e.pageIndex=e.pageIndex+1;for(var i=0,o=n.results;i<o.length;i++)e.goodsCategoryList.push(o[i]);e.loading=!1,e.goodsCategoryList.length===n.count&&(e.scrollDisabled=!0),t&&t.target.complete()}))}),500)},t.prototype.toGoodsInfoList=function(t){this.routerService.toAdminGoodsInfoList().then()},t.prototype.toCategoryAdd=function(){this.routerService.toAdminGoodsCategoryAdd().then()},t.prototype.toCategoryEdit=function(t){this.selectGoodsCategory=t,this.routerService.toAdminCategoryEdit(t.id).then()},t.prototype.doRefresh=function(t){var e=this;this.loading=!0,this.pageIndex=1,setTimeout((function(){e.goodsCategoryService.getGoodsCategoryList(e.pageIndex).subscribe((function(n){e.pageIndex=e.pageIndex+1,e.goodsCategoryList=n.results,e.scrollDisabled=e.goodsCategoryList.length===n.count,e.loading=!1,t.target.complete(),e.constantService.presentToast("\u5237\u65b0\u6210\u529f\uff01").then()}))}),200)},t.prototype.deleteGoodsCategory=function(t){var e=this;this.goodsCategoryService.deleteGoodsCategory(t.id).subscribe((function(n){e.goodsCategoryList=e.goodsCategoryList.filter((function(e){if(e!==t)return e})),e.constantService.presentToast(e.translateService.instant("admin-category-list.deleteSuccess")).then()}))},t.prototype.presentActionSheet=function(t){return i.b(this,void 0,void 0,(function(){var e=this;return i.e(this,(function(n){switch(n.label){case 0:return[4,this.actionSheetController.create({header:t.name+"("+t.name_vn+")",buttons:[{text:this.translateService.instant("admin-category-list.edit"),icon:"create",handler:function(){e.toCategoryEdit(t)}},{text:this.translateService.instant("admin-category-list.delete"),role:"destructive",icon:"trash",handler:function(){e.deleteGoodsCategory(t)}},{text:this.translateService.instant("admin-category-list.cancel"),icon:"close",role:"cancel"}]})];case 1:return[4,n.sent().present()];case 2:return n.sent(),[2]}}))}))},t.ngInjectableDef=l.Sb({factory:function(){return new t(l.Tb(o.a),l.Tb(r.a),l.Tb(a.a),l.Tb(u.j),l.Tb(s.a))},token:t,providedIn:"root"}),t}()}}]);