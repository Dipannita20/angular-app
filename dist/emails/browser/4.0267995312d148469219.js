(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"5gel":function(t,e,i){"use strict";i.r(e),i.d(e,"InboxModule",(function(){return T}));var n=i("ofXK"),o=i("3Pt+"),c=i("tyNb"),s=i("fXoL"),r=i("qXBG"),a=i("tk/3");let l=(()=>{class t{constructor(t){this.http=t,this.rootUrl="https://api.angular-email.com/"}getEmails(){return this.http.get(this.rootUrl+"emails")}getEmail(t){return this.http.get(`${this.rootUrl}emails/${t}`)}sendEmail(t){return this.http.post(this.rootUrl+"emails",t)}}return t.\u0275fac=function(e){return new(e||t)(s.Qb(a.b))},t.\u0275prov=s.Db({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const b=[[["","modalTitle",""]],"*",[["","modalFooter",""]]],m=["[modalTitle]","*","[modalFooter]"];let u=(()=>{class t{constructor(t){this.el=t,this.dismiss=new s.n}ngOnInit(){document.body.appendChild(this.el.nativeElement)}ngOnDestroy(){this.el.nativeElement.remove()}onDismissClick(){this.dismiss.emit()}}return t.\u0275fac=function(e){return new(e||t)(s.Hb(s.l))},t.\u0275cmp=s.Bb({type:t,selectors:[["app-modal"]],outputs:{dismiss:"dismiss"},ngContentSelectors:m,decls:12,vars:0,consts:[[1,"ui","dimer","visible","active",3,"click"],[1,"ui","modal","visible","active",3,"click"],[1,"close","icon",3,"click"],[1,"header"],[1,"content"],[1,"actions","actions-degault"],[1,"ui","button","primay",3,"click"],[1,"actions"]],template:function(t,e){1&t&&(s.Zb(b),s.Mb(0,"div",0),s.Tb("click",(function(){return e.onDismissClick()})),s.Mb(1,"div",1),s.Tb("click",(function(t){return t.stopPropagation()})),s.Mb(2,"i",2),s.Tb("click",(function(){return e.onDismissClick()})),s.Lb(),s.Mb(3,"div",3),s.Yb(4),s.Lb(),s.Mb(5,"div",4),s.Yb(6,1),s.Lb(),s.Mb(7,"div",5),s.Mb(8,"button",6),s.Tb("click",(function(){return e.onDismissClick()})),s.ic(9,"Ok"),s.Lb(),s.Lb(),s.Mb(10,"div",7),s.Yb(11,2),s.Lb(),s.Lb(),s.Lb())},styles:[".actions[_ngcontent-%COMP%]:default, .actions[_ngcontent-%COMP%]:empty{display:none}.actions[_ngcontent-%COMP%]:empty + .actions[_ngcontent-%COMP%]:default{display:block}"]}),t})();var p=i("9odQ");let d=(()=>{class t{constructor(){this.emailSubmit=new s.n}ngOnInit(){const{subject:t,from:e,to:i,text:n}=this.email;this.emailForm=new o.d({to:new o.b(i,[o.i.required,o.i.email]),from:new o.b({value:e,disabled:!0},[o.i.required]),subject:new o.b(t,[o.i.required]),text:new o.b(n)})}onSubmit(){this.emailForm.invalid||this.emailSubmit.emit(this.emailForm.value)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Bb({type:t,selectors:[["app-email-form"]],inputs:{email:"email"},outputs:{emailSubmit:"emailSubmit"},decls:7,vars:5,consts:[[1,"ui","form",3,"formGroup","ngSubmit"],["inputType","email","label","To",3,"control"],["inputType","email","label","From",3,"control"],["inputType","text","label","Subject",3,"control"],["controlType","textarea","label","Content",3,"control"],[1,"ui","button","primary"]],template:function(t,e){1&t&&(s.Mb(0,"form",0),s.Tb("ngSubmit",(function(){return e.onSubmit()})),s.Ib(1,"app-input",1),s.Ib(2,"app-input",2),s.Ib(3,"app-input",3),s.Ib(4,"app-input",4),s.Mb(5,"button",5),s.ic(6,"Send"),s.Lb(),s.Lb()),2&t&&(s.ac("formGroup",e.emailForm),s.xb(1),s.ac("control",e.emailForm.get("to")),s.xb(1),s.ac("control",e.emailForm.get("from")),s.xb(1),s.ac("control",e.emailForm.get("subject")),s.xb(1),s.ac("control",e.emailForm.get("text")))},directives:[o.j,o.g,o.e,p.a],styles:[""]}),t})();function f(t,e){if(1&t){const t=s.Nb();s.Mb(0,"app-modal",2),s.Tb("dismiss",(function(){return s.dc(t),s.Vb().showModal=!1})),s.Mb(1,"div",3),s.ic(2,"Compose"),s.Lb(),s.Mb(3,"app-email-form",4),s.Tb("emailSubmit",(function(e){return s.dc(t),s.Vb().onSubmit(e)})),s.Lb(),s.Lb()}if(2&t){const t=s.Vb();s.xb(3),s.ac("email",t.email)}}let h=(()=>{class t{constructor(t,e){this.authService=t,this.emailService=e,this.showModal=!1,this.email={id:"",to:"",subject:"",html:"",text:"",from:t.username+"@angular-email.com"}}ngOnInit(){}onSubmit(t){console.log(t),this.emailService.sendEmail(t).subscribe(()=>{this.showModal=!1})}}return t.\u0275fac=function(e){return new(e||t)(s.Hb(r.a),s.Hb(l))},t.\u0275cmp=s.Bb({type:t,selectors:[["app-email-create"]],decls:3,vars:1,consts:[[1,"ui","button","inverted","primary","fluid",3,"click"],[3,"dismiss",4,"ngIf"],[3,"dismiss"],["modalTitle",""],[3,"email","emailSubmit"]],template:function(t,e){1&t&&(s.Mb(0,"button",0),s.Tb("click",(function(){return e.showModal=!0})),s.ic(1,"Compose"),s.Lb(),s.hc(2,f,4,1,"app-modal",1)),2&t&&(s.xb(2),s.ac("ngIf",e.showModal))},directives:[n.j,u,d],styles:[""]}),t})();function v(t,e){if(1&t&&(s.Mb(0,"div",2),s.Mb(1,"a",3),s.Mb(2,"div",4),s.Mb(3,"div",5),s.ic(4),s.Lb(),s.Mb(5,"p"),s.ic(6),s.Lb(),s.Lb(),s.Lb(),s.Lb()),2&t){const t=e.$implicit;s.xb(1),s.ac("routerLink",t.id),s.xb(3),s.jc(t.subject),s.xb(2),s.jc(t.from)}}let g=(()=>{class t{constructor(t){this.emailService=t,this.emails=[]}ngOnInit(){this.emailService.getEmails().subscribe(t=>{this.emails=t})}}return t.\u0275fac=function(e){return new(e||t)(s.Hb(l))},t.\u0275cmp=s.Bb({type:t,selectors:[["app-email-index"]],decls:2,vars:1,consts:[[1,"ui","celled","list"],["classs","item",4,"ngFor","ngForOf"],["classs","item"],["routerLinkActive","active",3,"routerLink"],[1,"content"],[1,"header","trim"]],template:function(t,e){1&t&&(s.Mb(0,"div",0),s.hc(1,v,7,3,"div",1),s.Lb()),2&t&&(s.xb(1),s.ac("ngForOf",e.emails))},directives:[n.i,c.d,c.c],styles:['.item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000}a.active[_ngcontent-%COMP%]{display:flex;justify-content:flex;align-items:center}a.active[_ngcontent-%COMP%]:before{content:">";font-size:20px;margin-right:10pc}.trim[_ngcontent-%COMP%]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;width:100%}']}),t})(),M=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Bb({type:t,selectors:[["app-home"]],decls:6,vars:0,consts:[[1,"ui","grid","stackable"],[1,"five","wide","column"],[1,"eleven","wide","column"]],template:function(t,e){1&t&&(s.Mb(0,"div",0),s.Mb(1,"div",1),s.Ib(2,"app-email-create"),s.Ib(3,"app-email-index"),s.Lb(),s.Mb(4,"div",2),s.Ib(5,"router-outlet"),s.Lb(),s.Lb())},directives:[h,g,c.f],styles:[""]}),t})(),y=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Bb({type:t,selectors:[["app-placeholder"]],decls:4,vars:0,consts:[[1,"ui","placeholder","segment"],[1,"ui","icon","header"],[1,"envelope","outlibe","icon"]],template:function(t,e){1&t&&(s.Mb(0,"div",0),s.Mb(1,"div",1),s.Ib(2,"i",2),s.ic(3," Select an email to get started "),s.Lb(),s.Lb())},styles:[""]}),t})(),L=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Bb({type:t,selectors:[["app-email-reply"]],decls:2,vars:0,template:function(t,e){1&t&&(s.Mb(0,"p"),s.ic(1,"email-reply works!"),s.Lb())},styles:[""]}),t})(),w=(()=>{class t{constructor(t,e){this.route=t,this.emailService=e,this.email=t.snapshot.data.email,this.route.data.subscribe(({email:t})=>{this.email=t})}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(s.Hb(c.a),s.Hb(l))},t.\u0275cmp=s.Bb({type:t,selectors:[["app-email-show"]],decls:15,vars:4,consts:[[1,"header"],[1,"ui","divider"],[3,"innerHTML"]],template:function(t,e){1&t&&(s.Mb(0,"div",0),s.Mb(1,"div"),s.Mb(2,"h3"),s.ic(3),s.Lb(),s.Mb(4,"div"),s.ic(5," From: "),s.Mb(6,"i"),s.ic(7),s.Lb(),s.Lb(),s.Mb(8,"div"),s.ic(9," To: "),s.Mb(10,"i"),s.ic(11),s.Lb(),s.Lb(),s.Lb(),s.Ib(12,"app-email-reply"),s.Lb(),s.Ib(13,"div",1),s.Ib(14,"div",2)),2&t&&(s.xb(3),s.kc("",e.email.subject," "),s.xb(4),s.jc(e.email.from),s.xb(4),s.jc(e.email.to),s.xb(3),s.ac("innerHTML",e.email.html,s.ec))},directives:[L],styles:[""]}),t})();var x=i("JIr8"),k=i("EY2u");let I=(()=>{class t{constructor(t,e){this.emailService=t,this.router=e}resolve(t){const{id:e}=t.params;return this.emailService.getEmail(e).pipe(Object(x.a)(t=>(this.router.navigateByUrl("/inbox/not-found"),k.a)))}}return t.\u0275fac=function(e){return new(e||t)(s.Qb(l),s.Qb(c.b))},t.\u0275prov=s.Db({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const S=[{path:"",component:M,children:[{path:"not-found",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Bb({type:t,selectors:[["app-not-found"]],decls:4,vars:0,consts:[[1,"ui","placeholder","segment"],[1,"ui","icon","header"],[1,"search","outlibe","icon"]],template:function(t,e){1&t&&(s.Mb(0,"div",0),s.Mb(1,"div",1),s.Ib(2,"i",2),s.ic(3," Email not found "),s.Lb(),s.Lb())},styles:[""]}),t})()},{path:":id",component:w,resolve:{email:I}},{path:"",component:y}]}];let O=(()=>{class t{}return t.\u0275mod=s.Fb({type:t}),t.\u0275inj=s.Eb({factory:function(e){return new(e||t)},imports:[[c.e.forChild(S)],c.e]}),t})();var C=i("PCNd");let T=(()=>{class t{}return t.\u0275mod=s.Fb({type:t}),t.\u0275inj=s.Eb({factory:function(e){return new(e||t)},imports:[[n.c,O,C.a,o.h]]}),t})()}}]);