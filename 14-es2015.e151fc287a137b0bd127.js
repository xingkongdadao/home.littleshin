(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"6c1V":function(t,e,i){"use strict";i.d(e,"a",(function(){return h}));var n=i("mrSG"),o=i("1jKG"),s=i("fjz4"),r=i("7ErT"),a=i("ZZ/e"),l=i("8Y7J"),c=i("TSSN");let h=(()=>{class t{constructor(t,e,i,n,o){this.shopsService=t,this.routerService=e,this.constantService=i,this.translateService=n,this.actionSheetController=o,this.shopList=[],this.scrollDisabled=!1,this.loading=!1,this.pageSize=20,this.pageIndex=1}initShopListView(){this.pageIndex=1,this.shopList=[],this.loadData()}loadData(t){this.loading=!0,setTimeout(()=>{this.shopsService.getShopList(this.pageIndex).subscribe(e=>{this.pageIndex=this.pageIndex+1;for(const t of e.results)this.shopList.push(t);this.loading=!1,this.shopList.length===e.count&&(this.scrollDisabled=!0),t&&t.target.complete()})},500)}toShopList(t){this.routerService.toAdminGoodsInfoList().then()}toShopAdd(){this.routerService.toAdminShopAdd().then()}toShopEdit(t){this.selectShop=t,this.routerService.toAdminShopEdit(t.id).then()}doRefresh(t){this.loading=!0,this.pageIndex=1,setTimeout(()=>{this.shopsService.getShopList(this.pageIndex).subscribe(e=>{this.pageIndex=this.pageIndex+1,this.shopList=e.results,this.scrollDisabled=this.shopList.length===e.count,this.loading=!1,t.target.complete(),this.constantService.presentToast("\u5237\u65b0\u6210\u529f\uff01").then()})},200)}deleteShop(t){this.shopsService.deleteShop(t.id).subscribe(e=>{this.shopList=this.shopList.filter(e=>{if(e!==t)return e}),this.constantService.presentToast(this.translateService.instant("admin-category-list.deleteSuccess")).then()})}presentActionSheet(t){return n.b(this,void 0,void 0,(function*(){const e=yield this.actionSheetController.create({header:t.name+"("+t.name_vn+")",buttons:[{text:this.translateService.instant("admin-category-list.edit"),icon:"create",handler:()=>{this.toShopEdit(t)}},{text:this.translateService.instant("admin-category-list.delete"),role:"destructive",icon:"trash",handler:()=>{this.deleteShop(t)}},{text:this.translateService.instant("admin-category-list.cancel"),icon:"close",role:"cancel"}]});yield e.present()}))}}return t.ngInjectableDef=l.Qb({factory:function(){return new t(l.Rb(o.a),l.Rb(s.a),l.Rb(r.a),l.Rb(c.j),l.Rb(a.a))},token:t,providedIn:"root"}),t})()},aAsz:function(t,e,i){"use strict";i.r(e);var n=i("8Y7J");class o{}var s=i("pMnS"),r=i("oBZk"),a=i("ZZ/e"),l=i("TSSN"),c=i("SVse"),h=i("iInd"),d=i("fjz4");class u{constructor(t,e){this.routerService=t,this.translateService=e,this.appPages=[{title:this.translateService.instant("admin.personal"),url:this.routerService.personal,icon:"person"},{title:this.translateService.instant("admin.dashboard"),url:this.routerService.adminDashboard,icon:"home"},{title:this.translateService.instant("admin.goods-category-list"),url:this.routerService.adminGoodsCategoryList,icon:"list"},{title:this.translateService.instant("admin.goods-info-list"),url:this.routerService.adminGoodsInfoList,icon:"list"},{title:this.translateService.instant("admin.goods-sku-list"),url:this.routerService.adminGoodsSkuList,icon:"list"},{title:this.translateService.instant("admin.goods-in-list"),url:this.routerService.adminGoodsInList,icon:"list"},{title:this.translateService.instant("admin.goods-out-list"),url:this.routerService.adminGoodsOutList,icon:"list"},{title:this.translateService.instant("admin.shop-list"),url:this.routerService.adminShopList,icon:"list"},{title:this.translateService.instant("admin.city-list"),url:this.routerService.adminCityList,icon:"list"}]}ngOnInit(){}toNavigate(t){this.routerService.toUrl(t).then()}}var g=n.pb({encapsulation:0,styles:[[""]],data:{}});function b(t){return n.Nb(0,[(t()(),n.rb(0,0,null,null,8,"ion-menu-toggle",[["auto-hide","false"]],null,null,null,r.ub,r.B)),n.qb(1,49152,null,0,a.T,[n.h,n.k,n.x],null,null),(t()(),n.rb(2,0,null,0,6,"ion-item",[],null,[[null,"click"]],(function(t,e,i){var n=!0;return"click"===e&&(n=!1!==t.component.toNavigate(t.context.$implicit.url)&&n),n}),r.pb,r.r)),n.qb(3,49152,null,0,a.I,[n.h,n.k,n.x],null,null),(t()(),n.rb(4,0,null,0,1,"ion-icon",[["slot","start"]],null,null,null,r.hb,r.n)),n.qb(5,49152,null,0,a.D,[n.h,n.k,n.x],{name:[0,"name"]},null),(t()(),n.rb(6,0,null,0,2,"ion-label",[],null,null,null,r.qb,r.w)),n.qb(7,49152,null,0,a.O,[n.h,n.k,n.x],null,null),(t()(),n.Lb(8,0,[" "," "]))],(function(t,e){t(e,5,0,e.context.$implicit.icon)}),(function(t,e){t(e,8,0,e.context.$implicit.title)}))}function v(t){return n.Nb(0,[(t()(),n.rb(0,0,null,null,19,"ion-split-pane",[["contentId","main-content"]],null,null,null,r.Fb,r.L)),n.qb(1,49152,null,0,a.ub,[n.h,n.k,n.x],{contentId:[0,"contentId"]},null),(t()(),n.rb(2,0,null,0,15,"ion-menu",[["contentId","main-content"],["type","overlay"]],null,null,null,r.vb,r.z)),n.qb(3,49152,null,0,a.R,[n.h,n.k,n.x],{contentId:[0,"contentId"],type:[1,"type"]},null),(t()(),n.rb(4,0,null,0,7,"ion-header",[],null,null,null,r.gb,r.m)),n.qb(5,49152,null,0,a.C,[n.h,n.k,n.x],null,null),(t()(),n.rb(6,0,null,0,5,"ion-toolbar",[],null,null,null,r.Nb,r.T)),n.qb(7,49152,null,0,a.Db,[n.h,n.k,n.x],null,null),(t()(),n.rb(8,0,null,0,3,"ion-title",[],null,null,null,r.Lb,r.R)),n.qb(9,49152,null,0,a.Bb,[n.h,n.k,n.x],null,null),(t()(),n.Lb(10,0,["",""])),n.Fb(131072,l.i,[l.j,n.h]),(t()(),n.rb(12,0,null,0,5,"ion-content",[],null,null,null,r.db,r.j)),n.qb(13,49152,null,0,a.v,[n.h,n.k,n.x],null,null),(t()(),n.rb(14,0,null,0,3,"ion-list",[],null,null,null,r.sb,r.x)),n.qb(15,49152,null,0,a.P,[n.h,n.k,n.x],null,null),(t()(),n.gb(16777216,null,0,1,null,b)),n.qb(17,278528,null,0,c.k,[n.M,n.J,n.q],{ngForOf:[0,"ngForOf"]},null),(t()(),n.rb(18,16777216,null,0,1,"ion-router-outlet",[["id","main-content"]],null,null,null,null,null)),n.qb(19,212992,null,0,a.jb,[h.b,n.M,n.j,[8,null],[8,null],a.d,a.Jb,c.h,n.k,h.m,n.x,h.a,[3,a.jb]],null,null)],(function(t,e){var i=e.component;t(e,1,0,"main-content"),t(e,3,0,"main-content","overlay"),t(e,17,0,i.appPages),t(e,19,0)}),(function(t,e){t(e,10,0,n.Mb(e,10,0,n.Db(e,11).transform("admin.menu")))}))}function p(t){return n.Nb(0,[(t()(),n.rb(0,0,null,null,1,"app-admin",[],null,null,null,v,g)),n.qb(1,114688,null,0,u,[d.a,l.j],null,null)],(function(t,e){t(e,1,0)}),null)}var S=n.nb("app-admin",u,p,{},{},[]),f=i("s7LF"),m=i("/q54"),y=i("dnTq"),I=i("xgBC");let C=(()=>{class t{constructor(t,e,i){this.storage=t,this.loginViewService=e,this.routerService=i}canActivate(){return this.storage.get("userInfo").then(t=>(this.loginViewService.userInfo=t,!(!this.loginViewService.userInfo||!this.loginViewService.userInfo.is_staff)||(this.routerService.toLogin().then(),!1)))}}return t.ngInjectableDef=n.Qb({factory:function(){return new t(n.Rb(I.b),n.Rb(y.a),n.Rb(d.a))},token:t,providedIn:"root"}),t})(),L=(()=>{class t{constructor(t,e,i){this.storage=t,this.loginViewService=e,this.routerService=i}canActivate(){return this.storage.get("userInfo").then(t=>(this.loginViewService.userInfo=t,!(!this.loginViewService.userInfo||!this.loginViewService.userInfo.is_staff)||(this.routerService.toLogin().then(),!1)))}}return t.ngInjectableDef=n.Qb({factory:function(){return new t(n.Rb(I.b),n.Rb(y.a),n.Rb(d.a))},token:t,providedIn:"root"}),t})(),x=(()=>{class t{constructor(t,e,i){this.storage=t,this.loginViewService=e,this.routerService=i}canActivate(){return this.storage.get("userInfo").then(t=>(this.loginViewService.userInfo=t,!(!this.loginViewService.userInfo||!this.loginViewService.userInfo.is_staff)||(this.routerService.toLogin().then(),!1)))}}return t.ngInjectableDef=n.Qb({factory:function(){return new t(n.Rb(I.b),n.Rb(y.a),n.Rb(d.a))},token:t,providedIn:"root"}),t})();var w=i("xWuP"),A=i("w8xc"),R=i("7ErT");let B=(()=>{class t{constructor(t,e){this.goodsCategoryService=t,this.fb=e}initViewService(){this.initForm(),this.getCategoryList()}initForm(){this.formGroup=this.fb.group({name:["",f.o.required],name_vn:[""],code:[""],category_type:[],parent_category:[],is_tab:[!1],desc:[],category_picture:[]})}getCategoryList(){this.goodsCategoryService.getGoodsCategoryList().subscribe(t=>{this.goodsCategoryList=t.results})}onChange(t){if(t.target.files.length>0){const e=t.target.files[0];this.formGroup.get("category_picture").setValue(e)}}onSubmit(){const t=new FormData;t.append("name",this.formGroup.get("name").value),t.append("name_vn",this.formGroup.get("name_vn").value),t.append("code",this.formGroup.get("code").value),t.append("category_type",this.formGroup.get("category_type").value),t.append("parent_category",this.formGroup.get("parent_category").value),t.append("is_tab",this.formGroup.get("is_tab").value),t.append("desc",this.formGroup.get("desc").value),t.append("category_picture",this.formGroup.get("category_picture").value),this.goodsCategoryService.addGoodsCategory(t).subscribe(()=>{console.log("\u6dfb\u52a0\u5546\u54c1\u7c7b\u522b\u6210\u529f")})}}return t.ngInjectableDef=n.Qb({factory:function(){return new t(n.Rb(A.a),n.Rb(f.d))},token:t,providedIn:"root"}),t})();var V=i("6c1V"),k=i("1jKG"),G=i("fBKx"),j=i("kPFh"),D=i("IP0z"),P=i("VDRc"),F=i("ura0"),N=i("Nhcz"),M=i("u9T3"),T=i("MfXf"),_=i("kCW2");class q{static forChild(){return{ngModule:q,providers:[C,L,x,w.a,B,V.a,G.a]}}}let E=(()=>{class t{constructor(t,e,i){this.storage=t,this.loginViewService=e,this.routerService=i}canActivate(){return this.storage.get("userInfo").then(t=>(this.loginViewService.userInfo=t,!(!this.loginViewService.userInfo||!this.loginViewService.userInfo.is_staff)||(this.routerService.toLogin().then(),!1)))}}return t.ngInjectableDef=n.Qb({factory:function(){return new t(n.Rb(I.b),n.Rb(y.a),n.Rb(d.a))},token:t,providedIn:"root"}),t})(),z=(()=>{class t{constructor(t,e,i){this.storage=t,this.loginViewService=e,this.routerService=i}canActivate(){return this.storage.get("userInfo").then(t=>(this.loginViewService.userInfo=t,!(!this.loginViewService.userInfo||!this.loginViewService.userInfo.is_staff)||(this.routerService.toLogin().then(),!1)))}}return t.ngInjectableDef=n.Qb({factory:function(){return new t(n.Rb(I.b),n.Rb(y.a),n.Rb(d.a))},token:t,providedIn:"root"}),t})(),Q=(()=>{class t{constructor(t,e,i){this.storage=t,this.loginViewService=e,this.routerService=i}canActivate(){return this.storage.get("userInfo").then(t=>(this.loginViewService.userInfo=t,!(!this.loginViewService.userInfo||!this.loginViewService.userInfo.is_staff)||(this.routerService.toLogin().then(),!1)))}}return t.ngInjectableDef=n.Qb({factory:function(){return new t(n.Rb(I.b),n.Rb(y.a),n.Rb(d.a))},token:t,providedIn:"root"}),t})(),Z=(()=>{class t{constructor(t,e,i){this.storage=t,this.loginViewService=e,this.routerService=i}canActivate(){return this.storage.get("userInfo").then(t=>(this.loginViewService.userInfo=t,!(!this.loginViewService.userInfo||!this.loginViewService.userInfo.is_staff)||(this.routerService.toLogin().then(),!1)))}}return t.ngInjectableDef=n.Qb({factory:function(){return new t(n.Rb(I.b),n.Rb(y.a),n.Rb(d.a))},token:t,providedIn:"root"}),t})(),J=(()=>{class t{constructor(t,e,i){this.storage=t,this.loginViewService=e,this.routerService=i}canActivate(){return this.storage.get("userInfo").then(t=>(this.loginViewService.userInfo=t,!(!this.loginViewService.userInfo||!this.loginViewService.userInfo.is_staff)||(this.routerService.toLogin().then(),!1)))}}return t.ngInjectableDef=n.Qb({factory:function(){return new t(n.Rb(I.b),n.Rb(y.a),n.Rb(d.a))},token:t,providedIn:"root"}),t})();const O=()=>i.e(30).then(i.bind(null,"ZIXW")).then(t=>t.DashboardPageModuleNgFactory),W=()=>Promise.all([i.e(0),i.e(17)]).then(i.bind(null,"8FR7")).then(t=>t.AdminCategoryListPageModuleNgFactory),K=()=>i.e(23).then(i.bind(null,"ajhP")).then(t=>t.AdminGoodsInfoListPageModuleNgFactory),Y=()=>i.e(25).then(i.bind(null,"RbhX")).then(t=>t.AdminGoodsSkuListPageModuleNgFactory),U=()=>i.e(22).then(i.bind(null,"L++q")).then(t=>t.AdminGoodsInListPageModuleNgFactory),X=()=>i.e(24).then(i.bind(null,"+G94")).then(t=>t.AdminGoodsOutListPageModuleNgFactory),$=()=>i.e(29).then(i.bind(null,"bMr1")).then(t=>t.AdminUsersListPageModuleNgFactory),H=()=>Promise.all([i.e(0),i.e(15)]).then(i.bind(null,"T5oq")).then(t=>t.AdminCategoryAddPageModuleNgFactory),tt=()=>i.e(18).then(i.bind(null,"4wN7")).then(t=>t.AdminCategoryUpdatePageModuleNgFactory),et=()=>Promise.all([i.e(0),i.e(16)]).then(i.bind(null,"7nlW")).then(t=>t.AdminCategoryEditPageModuleNgFactory),it=()=>Promise.all([i.e(0),i.e(28)]).then(i.bind(null,"hM3s")).then(t=>t.AdminShopListPageModuleNgFactory),nt=()=>Promise.all([i.e(0),i.e(26)]).then(i.bind(null,"tNLE")).then(t=>t.AdminShopAddPageModuleNgFactory),ot=()=>Promise.all([i.e(0),i.e(27)]).then(i.bind(null,"/a9r")).then(t=>t.AdminShopEditPageModuleNgFactory),st=()=>Promise.all([i.e(0),i.e(21)]).then(i.bind(null,"8cMy")).then(t=>t.AdminCityListPageModuleNgFactory),rt=()=>Promise.all([i.e(0),i.e(19)]).then(i.bind(null,"OBze")).then(t=>t.AdminCityAddPageModuleNgFactory),at=()=>Promise.all([i.e(0),i.e(20)]).then(i.bind(null,"C08o")).then(t=>t.AdminCityEditPageModuleNgFactory);class lt{}i.d(e,"AdminModuleNgFactory",(function(){return ct}));var ct=n.ob(o,[],(function(t){return n.Ab([n.Bb(512,n.j,n.Z,[[8,[s.a,S]],[3,n.j],n.v]),n.Bb(4608,c.n,c.m,[n.s,[2,c.B]]),n.Bb(4608,f.q,f.q,[]),n.Bb(4608,f.d,f.d,[]),n.Bb(5120,n.b,(function(t,e){return[m.j(t,e)]}),[c.d,n.z]),n.Bb(4608,a.b,a.b,[n.x,n.g]),n.Bb(4608,a.Ib,a.Ib,[a.b,n.j,n.p]),n.Bb(4608,a.Mb,a.Mb,[a.b,n.j,n.p]),n.Bb(4608,C,C,[I.b,y.a,d.a]),n.Bb(4608,L,L,[I.b,y.a,d.a]),n.Bb(4608,x,x,[I.b,y.a,d.a]),n.Bb(4608,w.a,w.a,[A.a,d.a,R.a,l.j,a.a]),n.Bb(4608,B,B,[A.a,f.d]),n.Bb(4608,V.a,V.a,[k.a,d.a,R.a,l.j,a.a]),n.Bb(4608,G.a,G.a,[j.a,d.a,R.a,l.j,a.a]),n.Bb(1073742336,c.b,c.b,[]),n.Bb(1073742336,l.g,l.g,[]),n.Bb(1073742336,f.p,f.p,[]),n.Bb(1073742336,f.g,f.g,[]),n.Bb(1073742336,f.n,f.n,[]),n.Bb(1073742336,m.c,m.c,[]),n.Bb(1073742336,D.a,D.a,[]),n.Bb(1073742336,P.c,P.c,[]),n.Bb(1073742336,F.c,F.c,[]),n.Bb(1073742336,N.a,N.a,[]),n.Bb(1073742336,M.a,M.a,[[2,m.g],n.z]),n.Bb(1073742336,T.a,T.a,[]),n.Bb(1073742336,a.Fb,a.Fb,[]),n.Bb(1073742336,_.a,_.a,[]),n.Bb(1073742336,q,q,[]),n.Bb(1073742336,h.o,h.o,[[2,h.t],[2,h.m]]),n.Bb(1073742336,lt,lt,[]),n.Bb(1073742336,o,o,[]),n.Bb(1024,h.k,(function(){return[[{path:"",component:u,children:[{path:"",redirectTo:"dashboard",pathMatch:"full"},{path:"dashboard",loadChildren:O},{path:"admin-category-list",canActivate:[C],loadChildren:W},{path:"admin-goods-info-list",canActivate:[E],loadChildren:K},{path:"admin-goods-sku-list",canActivate:[z],loadChildren:Y},{path:"admin-goods-in-list",canActivate:[Q],loadChildren:U},{path:"admin-goods-out-list",canActivate:[Z],loadChildren:X},{path:"admin-users-list",canActivate:[J],loadChildren:$},{path:"admin-category-add",loadChildren:H},{path:"admin-category-update",loadChildren:tt},{path:"admin-category-edit/:id",loadChildren:et},{path:"admin-shop-list",canActivate:[L],loadChildren:it},{path:"admin-shop-add",canActivate:[L],loadChildren:nt},{path:"admin-shop-edit/:id",loadChildren:ot},{path:"admin-city-list",canActivate:[x],loadChildren:st},{path:"admin-city-add",loadChildren:rt},{path:"admin-city-edit/:id",loadChildren:at}]}]]}),[])])}))},fBKx:function(t,e,i){"use strict";i.d(e,"a",(function(){return h}));var n=i("mrSG"),o=i("fjz4"),s=i("7ErT"),r=i("ZZ/e"),a=i("kPFh"),l=i("8Y7J"),c=i("TSSN");let h=(()=>{class t{constructor(t,e,i,n,o){this.cityService=t,this.routerService=e,this.constantService=i,this.translateService=n,this.actionSheetController=o,this.cityList=[],this.scrollDisabled=!1,this.loading=!1,this.pageSize=20,this.pageIndex=1}initCityListView(){this.pageIndex=1,this.cityList=[],this.loadData()}loadData(t){this.loading=!0,setTimeout(()=>{this.cityService.getCityList(this.pageIndex).subscribe(e=>{this.pageIndex=this.pageIndex+1;for(const t of e.results)this.cityList.push(t);this.loading=!1,this.cityList.length===e.count&&(this.scrollDisabled=!0),t&&t.target.complete()})},500)}toCityList(t){this.routerService.toAdminCityList().then()}toCityAdd(){this.routerService.toAdminCityAdd().then()}toCityEdit(t){this.selectCity=t,this.routerService.toAdminCityEdit(t.id).then()}doRefresh(t){this.loading=!0,this.pageIndex=1,setTimeout(()=>{this.cityService.getCityList(this.pageIndex).subscribe(e=>{this.pageIndex=this.pageIndex+1,this.cityList=e.results,this.scrollDisabled=this.cityList.length===e.count,this.loading=!1,t.target.complete(),this.constantService.presentToast("\u5237\u65b0\u6210\u529f\uff01").then()})},200)}deleteCity(t){this.cityService.deleteCity(t.id).subscribe(()=>{this.cityList=this.cityList.filter(e=>{if(e!==t)return e}),this.constantService.presentToast(this.translateService.instant("admin-category-list.deleteSuccess")).then()})}presentActionSheet(t){return n.b(this,void 0,void 0,(function*(){const e=yield this.actionSheetController.create({header:t.name+"("+t.name+")",buttons:[{text:this.translateService.instant("admin-category-list.edit"),icon:"create",handler:()=>{this.toCityEdit(t)}},{text:this.translateService.instant("admin-category-list.delete"),role:"destructive",icon:"trash",handler:()=>{this.deleteCity(t)}},{text:this.translateService.instant("admin-category-list.cancel"),icon:"close",role:"cancel"}]});yield e.present()}))}}return t.ngInjectableDef=l.Qb({factory:function(){return new t(l.Rb(a.a),l.Rb(o.a),l.Rb(s.a),l.Rb(c.j),l.Rb(r.a))},token:t,providedIn:"root"}),t})()},xWuP:function(t,e,i){"use strict";i.d(e,"a",(function(){return h}));var n=i("mrSG"),o=i("w8xc"),s=i("fjz4"),r=i("7ErT"),a=i("ZZ/e"),l=i("8Y7J"),c=i("TSSN");let h=(()=>{class t{constructor(t,e,i,n,o){this.goodsCategoryService=t,this.routerService=e,this.constantService=i,this.translateService=n,this.actionSheetController=o,this.goodsCategoryList=[],this.scrollDisabled=!1,this.loading=!1,this.pageSize=20,this.pageIndex=1}initAdminCategoryListView(){this.pageIndex=1,this.goodsCategoryList=[],this.loadData()}loadData(t){this.loading=!0,setTimeout(()=>{this.goodsCategoryService.getGoodsCategoryList(this.pageIndex).subscribe(e=>{this.pageIndex=this.pageIndex+1;for(const t of e.results)this.goodsCategoryList.push(t);this.loading=!1,this.goodsCategoryList.length===e.count&&(this.scrollDisabled=!0),t&&t.target.complete()})},500)}toGoodsInfoList(t){this.routerService.toAdminGoodsInfoList().then()}toCategoryAdd(){this.routerService.toAdminGoodsCategoryAdd().then()}toCategoryEdit(t){this.selectGoodsCategory=t,this.routerService.toAdminCategoryEdit(t.id).then()}doRefresh(t){this.loading=!0,this.pageIndex=1,setTimeout(()=>{this.goodsCategoryService.getGoodsCategoryList(this.pageIndex).subscribe(e=>{this.pageIndex=this.pageIndex+1,this.goodsCategoryList=e.results,this.scrollDisabled=this.goodsCategoryList.length===e.count,this.loading=!1,t.target.complete(),this.constantService.presentToast("\u5237\u65b0\u6210\u529f\uff01").then()})},200)}deleteGoodsCategory(t){this.goodsCategoryService.deleteGoodsCategory(t.id).subscribe(e=>{this.goodsCategoryList=this.goodsCategoryList.filter(e=>{if(e!==t)return e}),this.constantService.presentToast(this.translateService.instant("admin-category-list.deleteSuccess")).then()})}presentActionSheet(t){return n.b(this,void 0,void 0,(function*(){const e=yield this.actionSheetController.create({header:t.name+"("+t.name_vn+")",buttons:[{text:this.translateService.instant("admin-category-list.edit"),icon:"create",handler:()=>{this.toCategoryEdit(t)}},{text:this.translateService.instant("admin-category-list.delete"),role:"destructive",icon:"trash",handler:()=>{this.deleteGoodsCategory(t)}},{text:this.translateService.instant("admin-category-list.cancel"),icon:"close",role:"cancel"}]});yield e.present()}))}}return t.ngInjectableDef=l.Qb({factory:function(){return new t(l.Rb(o.a),l.Rb(s.a),l.Rb(r.a),l.Rb(c.j),l.Rb(a.a))},token:t,providedIn:"root"}),t})()}}]);