(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"1trX":function(l,e,n){"use strict";n.r(e);var t=n("8Y7J");class a{}var i=n("pMnS"),s=n("iInd");class b{constructor(){this.display="grid",this.template="'image' 'title'",this.align="center",this.width="4rem"}}class o{constructor(l,e){this.elr=l,this.renderer=e,this.appGridItemImage="2rem"}ngOnInit(){this.setStyle("grid-area","image"),this.setStyle("width",this.appGridItemImage),this.setStyle("height",this.appGridItemImage),this.setStyle("object-fit","cover")}setStyle(l,e){this.renderer.setStyle(this.elr.nativeElement,l,e)}handleClick(l){console.log(l)}}class r{constructor(){this.appGridItemTitle="0.5rem",this.area="title",this.wrap="nowrap"}}var c=n("SVse");class u{constructor(){this.cols=8,this.displayCols=5,this.sliderMargin="0"}ngOnInit(){}get scrollable(){return this.cols>this.displayCols}get templateRows(){return"minmax(auto, max-content)"}get templateColumns(){return`repeat(${this.cols}, calc((100vw - ${.4*this.displayCols}rem) / ${this.displayCols}))`}handleScroll(l){this.sliderMargin=`0 ${100*l.target.scrollLeft/l.target.scrollWidth}%`}}var d=t.rb({encapsulation:0,styles:[[".container[_ngcontent-%COMP%]{background-color:#fff;padding:5px 0;overflow-x:auto;overflow-y:hidden;scroll-behavior:smooth;-webkit-overflow-scrolling:touch;display:grid;place-content:stretch;place-items:center;grid-gap:.4rem;grid-auto-flow:row}.underline[_ngcontent-%COMP%]{width:20%;height:2px;background-color:#f5f5f5;margin:0 auto}.underline[_ngcontent-%COMP%] > .highlight[_ngcontent-%COMP%]{width:50%;height:2px;background-color:#e02f29;padding:0}.container[_ngcontent-%COMP%]::-webkit-scrollbar{display:none!important}"]],data:{}});function p(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,4,"div",[["class","underline"]],null,null,null,null,null)),(l()(),t.tb(1,0,null,null,3,"div",[["class","highlight"]],null,null,null,null,null)),t.Kb(512,null,c.G,c.H,[t.k,t.s,t.D]),t.sb(3,278528,null,0,c.p,[c.G],{ngStyle:[0,"ngStyle"]},null),t.Ib(4,{margin:0})],function(l,e){var n=l(e,4,0,e.component.sliderMargin);l(e,3,0,n)},null)}function h(l){return t.Pb(2,[(l()(),t.tb(0,0,null,null,4,"div",[["class","container"]],null,[[null,"scroll"]],function(l,e,n){var t=!0;return"scroll"===e&&(t=!1!==l.component.handleScroll(n)&&t),t},null,null)),t.Kb(512,null,c.G,c.H,[t.k,t.s,t.D]),t.sb(2,278528,null,0,c.p,[c.G],{ngStyle:[0,"ngStyle"]},null),t.Ib(3,{"grid-template-rows":0,"grid-template-columns":1}),t.Eb(null,0),(l()(),t.ib(16777216,null,null,1,null,p)),t.sb(6,16384,null,0,c.m,[t.P,t.L],{ngIf:[0,"ngIf"]},null)],function(l,e){var n=e.component,t=l(e,3,0,n.templateRows,n.templateColumns);l(e,2,0,t),l(e,6,0,n.scrollable)},null)}class m{constructor(){this.tabSelected=new t.m,this.tabItems=[{title:"\u9996\u9875",icon:"/assets/tabs/home.png",link:"home/home",selectedIcon:"/assets/tabs/home_selected.png"},{title:"\u63a8\u8350",icon:"/assets/tabs/recommend.png",link:"home/recommend",selectedIcon:"/assets/tabs/recommend_selected.png"},{title:"\u5206\u7c7b",icon:"/assets/tabs/category.png",link:"home/search",selectedIcon:"/assets/tabs/category_selected.png"},{title:"\u804a\u5929",icon:"/assets/tabs/chat.png",link:"home/chat",selectedIcon:"/assets/tabs/chat_selected.png"},{title:"\u4e2a\u4eba\u4e2d\u5fc3",icon:"/assets/tabs/my.png",link:"home/my",selectedIcon:"/assets/tabs/my_selected.png"}],this.selectedIndex=0}ngOnInit(){}toggleSelected(l){this.selectedIndex=l,this.tabSelected.emit(this.tabItems[this.selectedIndex])}}var D=t.rb({encapsulation:0,styles:[["[_nghost-%COMP%]{width:100%;background-color:brown}"]],data:{}});function g(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,6,"span",[["appGridItem",""]],[[4,"display",null],[4,"grid-template-areas",null],[4,"place-items",null],[4,"width",null]],null,null,null,null)),t.sb(1,16384,null,0,b,[],null,null),(l()(),t.tb(2,0,null,null,1,"img",[["alt",""],["appGridItemImage","2rem"]],[[8,"src",4]],[[null,"click"]],function(l,e,n){var a=!0,i=l.component;return"click"===e&&(a=!1!==t.Fb(l,3).handleClick(n.target)&&a),"click"===e&&(a=!1!==i.toggleSelected(l.context.index)&&a),a},null,null)),t.sb(3,81920,null,0,o,[t.k,t.D],{appGridItemImage:[0,"appGridItemImage"]},null),(l()(),t.tb(4,0,null,null,2,"span",[["appGridItemTitle","0.6rem"],["class","title"]],[[4,"font-size",null],[4,"grid-area",null],[4,"white-space",null]],null,null,null,null)),t.sb(5,16384,null,0,r,[],{appGridItemTitle:[0,"appGridItemTitle"]},null),(l()(),t.Nb(6,null,["",""]))],function(l,e){l(e,3,0,"2rem"),l(e,5,0,"0.6rem")},function(l,e){var n=e.component;l(e,0,0,t.Fb(e,1).display,t.Fb(e,1).template,t.Fb(e,1).align,t.Fb(e,1).width),l(e,2,0,e.context.index===n.selectedIndex?e.context.$implicit.selectedIcon:e.context.$implicit.icon),l(e,4,0,t.Fb(e,5).appGridItemTitle,t.Fb(e,5).area,t.Fb(e,5).wrap),l(e,6,0,e.context.$implicit.title)})}function f(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,3,"app-horizontal-grid",[],null,null,null,h,d)),t.sb(1,114688,null,0,u,[],{cols:[0,"cols"],displayCols:[1,"displayCols"]},null),(l()(),t.ib(16777216,null,0,1,null,g)),t.sb(3,278528,null,0,c.l,[t.P,t.L,t.r],{ngForOf:[0,"ngForOf"]},null)],function(l,e){var n=e.component;l(e,1,0,5,5),l(e,3,0,n.tabItems)},null)}class I{constructor(l){this.router=l,this.selectedIndex=0}ngOnInit(){}handleTabSelect(l){this.router.navigateByUrl(l.link),console.log(l.link)}}var y=t.rb({encapsulation:0,styles:[["[_nghost-%COMP%]{width:100%;height:100%;display:flex;flex-direction:column;align-items:stretch}"]],data:{}});function S(l){return t.Pb(0,[(l()(),t.tb(0,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),t.sb(1,212992,null,0,s.q,[s.b,t.P,t.j,[8,null],t.h],null,null),(l()(),t.tb(2,0,null,null,1,"app-nav-footer",[],null,[[null,"tabSelected"]],function(l,e,n){var t=!0;return"tabSelected"===e&&(t=!1!==l.component.handleTabSelect(n)&&t),t},f,D)),t.sb(3,114688,null,0,m,[],{selectedIndex:[0,"selectedIndex"]},{tabSelected:"tabSelected"})],function(l,e){var n=e.component;l(e,1,0),l(e,3,0,n.selectedIndex)},null)}function v(l){return t.Pb(0,[(l()(),t.tb(0,0,null,null,1,"app-transfer-container",[],null,null,null,S,y)),t.sb(1,114688,null,0,I,[s.m],null,null)],function(l,e){l(e,1,0)},null)}var w=t.pb("app-transfer-container",I,v,{},{},[]),k=n("EdU/"),x=n("/Yna"),C=n("JRKe"),P=n("Ed4d"),z=n("8WaK"),F=n("QfCi"),G=n("CghO"),M=n("Sq/J"),O=n("s7LF"),T=n("5VGP"),N=n("QQfA"),H=n("IP0z"),_=n("POq0");const q={preload:!1},A=()=>Promise.all([n.e(1),n.e(15)]).then(n.bind(null,"rpzW")).then(l=>l.HomeModuleNgFactory),J={preload:!1},R=()=>n.e(18).then(n.bind(null,"eVUf")).then(l=>l.SearchModuleNgFactory),j={preload:!1},E=()=>n.e(16).then(n.bind(null,"Pb7w")).then(l=>l.MyModuleNgFactory),K={preload:!1},V=()=>n.e(17).then(n.bind(null,"4Gqv")).then(l=>l.RecommendModuleNgFactory);class Y{}var $=n("/HVE"),B=n("v1Dh"),Q=n("66zS"),W=n("5Izy"),L=n("yTpB"),X=n("zMNK"),Z=n("hOhj"),U=n("r19J"),ll=n("anqq"),el=n("IYs4"),nl=n("EcpC"),tl=n("GaVp"),al=n("/L1H"),il=n("phDe"),sl=n("rJp6"),bl=n("Rgb0"),ol=n("kS4m"),rl=n("mW00"),cl=n("jTf7"),ul=n("WPSl"),dl=n("YdS3"),pl=n("wQFA"),hl=n("px0D"),ml=n("3ZFI"),Dl=n("CYS+"),gl=n("oBm0"),fl=n("A7zk"),Il=n("YRt3"),yl=n("lAiz"),Sl=n("ce6n"),vl=n("SBNi"),wl=n("iC8E"),kl=n("7QIX"),xl=n("tYkK"),Cl=n("wf2+"),Pl=n("eCGT"),zl=n("nHXS"),Fl=n("fb/r"),Gl=n("zTFG"),Ml=n("JK0T"),Ol=n("JXeA"),Tl=n("NFMk"),Nl=n("0CZq"),Hl=n("qU0y"),_l=n("vZsH"),ql=n("W4B1"),Al=n("SHEi"),Jl=n("FPpa"),Rl=n("RVNi"),jl=n("NDed"),El=n("5A4h"),Kl=n("N2O2"),Vl=n("ozKM"),Yl=n("OvZZ"),$l=n("z+yo"),Bl=n("DQmg"),Ql=n("haRT"),Wl=n("1+nf"),Ll=n("XFzh"),Xl=n("p+Sl"),Zl=n("HhpN"),Ul=n("SN7N"),le=n("fwnu"),ee=n("VbP7"),ne=n("gaRz"),te=n("e15G"),ae=n("GHF9");n.d(e,"TransferModuleNgFactory",function(){return ie});var ie=t.qb(a,[],function(l){return t.Cb([t.Db(512,t.j,t.bb,[[8,[i.a,w,k.a,k.b,x.a,C.a,P.a,z.a,F.a,G.a,M.a]],[3,t.j],t.w]),t.Db(4608,c.o,c.n,[t.t,[2,c.J]]),t.Db(4608,O.y,O.y,[]),t.Db(5120,T.t,T.D,[c.e,[3,T.t]]),t.Db(4608,N.d,N.d,[N.k,N.f,t.j,N.i,N.g,t.q,t.y,c.e,H.b,[2,c.i]]),t.Db(5120,N.l,N.m,[N.d]),t.Db(4608,_.c,_.c,[]),t.Db(1073742336,c.c,c.c,[]),t.Db(1073742336,s.p,s.p,[[2,s.u],[2,s.m]]),t.Db(1073742336,Y,Y,[]),t.Db(1073742336,O.x,O.x,[]),t.Db(1073742336,O.k,O.k,[]),t.Db(1073742336,$.b,$.b,[]),t.Db(1073742336,B.a,B.a,[]),t.Db(1073742336,Q.b,Q.b,[]),t.Db(1073742336,T.j,T.j,[]),t.Db(1073742336,W.a,W.a,[]),t.Db(1073742336,L.a,L.a,[]),t.Db(1073742336,H.a,H.a,[]),t.Db(1073742336,X.f,X.f,[]),t.Db(1073742336,Z.g,Z.g,[]),t.Db(1073742336,N.h,N.h,[]),t.Db(1073742336,T.r,T.r,[]),t.Db(1073742336,U.a,U.a,[]),t.Db(1073742336,ll.a,ll.a,[]),t.Db(1073742336,el.a,el.a,[]),t.Db(1073742336,_.d,_.d,[]),t.Db(1073742336,nl.a,nl.a,[]),t.Db(1073742336,T.A,T.A,[]),t.Db(1073742336,tl.c,tl.c,[]),t.Db(1073742336,T.s,T.s,[]),t.Db(1073742336,al.c,al.c,[]),t.Db(1073742336,il.h,il.h,[]),t.Db(1073742336,il.a,il.a,[]),t.Db(1073742336,il.e,il.e,[]),t.Db(1073742336,sl.a,sl.a,[]),t.Db(1073742336,bl.b,bl.b,[]),t.Db(1073742336,ol.d,ol.d,[]),t.Db(1073742336,rl.c,rl.c,[]),t.Db(1073742336,cl.h,cl.h,[]),t.Db(1073742336,ul.a,ul.a,[]),t.Db(1073742336,dl.a,dl.a,[]),t.Db(1073742336,pl.d,pl.d,[]),t.Db(1073742336,hl.a,hl.a,[]),t.Db(1073742336,ml.a,ml.a,[]),t.Db(1073742336,Dl.c,Dl.c,[]),t.Db(1073742336,gl.a,gl.a,[]),t.Db(1073742336,fl.a,fl.a,[]),t.Db(1073742336,Il.a,Il.a,[]),t.Db(1073742336,yl.b,yl.b,[]),t.Db(1073742336,yl.a,yl.a,[]),t.Db(1073742336,Sl.a,Sl.a,[]),t.Db(1073742336,vl.a,vl.a,[]),t.Db(1073742336,wl.c,wl.c,[]),t.Db(1073742336,wl.b,wl.b,[]),t.Db(1073742336,kl.c,kl.c,[]),t.Db(1073742336,xl.b,xl.b,[]),t.Db(1073742336,Cl.a,Cl.a,[]),t.Db(1073742336,Pl.a,Pl.a,[]),t.Db(1073742336,zl.e,zl.e,[]),t.Db(1073742336,Fl.b,Fl.b,[]),t.Db(1073742336,Gl.a,Gl.a,[]),t.Db(1073742336,Ml.a,Ml.a,[]),t.Db(1073742336,Ol.g,Ol.g,[]),t.Db(1073742336,Ol.f,Ol.f,[]),t.Db(1073742336,Tl.g,Tl.g,[]),t.Db(1073742336,Tl.e,Tl.e,[]),t.Db(1073742336,Tl.f,Tl.f,[]),t.Db(1073742336,Nl.f,Nl.f,[]),t.Db(1073742336,Nl.e,Nl.e,[]),t.Db(1073742336,Hl.a,Hl.a,[]),t.Db(1073742336,_l.b,_l.b,[]),t.Db(1073742336,ql.b,ql.b,[]),t.Db(1073742336,Al.b,Al.b,[]),t.Db(1073742336,Jl.b,Jl.b,[]),t.Db(1073742336,Rl.a,Rl.a,[]),t.Db(1073742336,jl.a,jl.a,[]),t.Db(1073742336,El.a,El.a,[]),t.Db(1073742336,Kl.a,Kl.a,[]),t.Db(1073742336,Vl.a,Vl.a,[]),t.Db(1073742336,Yl.a,Yl.a,[]),t.Db(1073742336,$l.a,$l.a,[]),t.Db(1073742336,Bl.a,Bl.a,[]),t.Db(1073742336,Ql.b,Ql.b,[]),t.Db(1073742336,Wl.a,Wl.a,[]),t.Db(1073742336,Ll.a,Ll.a,[]),t.Db(1073742336,Xl.a,Xl.a,[]),t.Db(1073742336,T.v,T.v,[]),t.Db(1073742336,Zl.a,Zl.a,[]),t.Db(1073742336,Ul.a,Ul.a,[]),t.Db(1073742336,le.a,le.a,[]),t.Db(1073742336,T.m,T.m,[]),t.Db(1073742336,ee.a,ee.a,[]),t.Db(1073742336,ne.a,ne.a,[]),t.Db(1073742336,te.a,te.a,[]),t.Db(1073742336,ae.a,ae.a,[]),t.Db(1073742336,a,a,[]),t.Db(1024,s.k,function(){return[[{path:"",component:I,children:[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",data:q,loadChildren:A},{path:"search",data:J,loadChildren:R},{path:"my",data:j,loadChildren:E},{path:"recommend",data:K,loadChildren:V}]}]]},[]),t.Db(256,Ol.b,{nzAnimate:!0,nzDuration:3e3,nzMaxStack:7,nzPauseOnHover:!0,nzTop:24},[]),t.Db(256,Nl.b,{nzTop:"24px",nzBottom:"24px",nzPlacement:"topRight",nzDuration:4500,nzMaxStack:7,nzPauseOnHover:!0,nzAnimate:!0},[])])})}}]);