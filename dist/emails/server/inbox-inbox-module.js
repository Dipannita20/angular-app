exports.ids=[0],exports.modules={"5gel":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"InboxModule",(function(){return InboxModule}));var common=__webpack_require__("ofXK"),fesm2015_forms=__webpack_require__("3Pt+"),router=__webpack_require__("tyNb"),core=__webpack_require__("fXoL"),auth_service=__webpack_require__("qXBG"),http=__webpack_require__("tk/3");class EmailService{constructor(http){this.http=http,this.rootUrl="https://api.angular-email.com/"}getEmails(){return this.http.get(this.rootUrl+"emails")}getEmail(id){return this.http.get(`${this.rootUrl}emails/${id}`)}sendEmail(email){return this.http.post(this.rootUrl+"emails",email)}}EmailService.\u0275fac=function EmailService_Factory(t){return new(t||EmailService)(core.Pc(http.c))},EmailService.\u0275prov=core.Cc({token:EmailService,factory:EmailService.\u0275fac,providedIn:"root"});const _c0=[[["","modalTitle",""]],"*",[["","modalFooter",""]]];class modal_component_ModalComponent{constructor(el){this.el=el,this.dismiss=new core.w}ngOnInit(){document.body.appendChild(this.el.nativeElement)}ngOnDestroy(){this.el.nativeElement.remove()}onDismissClick(){this.dismiss.emit()}}modal_component_ModalComponent.\u0275fac=function ModalComponent_Factory(t){return new(t||modal_component_ModalComponent)(core.Gc(core.u))},modal_component_ModalComponent.\u0275cmp=core.Ac({type:modal_component_ModalComponent,selectors:[["app-modal"]],outputs:{dismiss:"dismiss"},ngContentSelectors:["[modalTitle]","*","[modalFooter]"],decls:12,vars:0,consts:[[1,"ui","dimer","visible","active",3,"click"],[1,"ui","modal","visible","active",3,"click"],[1,"close","icon",3,"click"],[1,"header"],[1,"content"],[1,"actions","actions-degault"],[1,"ui","button","primay",3,"click"],[1,"actions"]],template:function ModalComponent_Template(rf,ctx){1&rf&&(core.Yc(_c0),core.Lc(0,"div",0),core.Sc("click",(function ModalComponent_Template_div_click_0_listener(){return ctx.onDismissClick()})),core.Lc(1,"div",1),core.Sc("click",(function ModalComponent_Template_div_click_1_listener($event){return $event.stopPropagation()})),core.Lc(2,"i",2),core.Sc("click",(function ModalComponent_Template_i_click_2_listener(){return ctx.onDismissClick()})),core.Kc(),core.Lc(3,"div",3),core.Xc(4),core.Kc(),core.Lc(5,"div",4),core.Xc(6,1),core.Kc(),core.Lc(7,"div",5),core.Lc(8,"button",6),core.Sc("click",(function ModalComponent_Template_button_click_8_listener(){return ctx.onDismissClick()})),core.hd(9,"Ok"),core.Kc(),core.Kc(),core.Lc(10,"div",7),core.Xc(11,2),core.Kc(),core.Kc(),core.Kc())},styles:[".actions[_ngcontent-%COMP%]:default, .actions[_ngcontent-%COMP%]:empty{display:none}.actions[_ngcontent-%COMP%]:empty + .actions[_ngcontent-%COMP%]:default{display:block}"]});var input_component=__webpack_require__("9odQ");class email_form_component_EmailFormComponent{constructor(){this.emailSubmit=new core.w}ngOnInit(){const{subject:subject,from:from,to:to,text:text}=this.email;this.emailForm=new fesm2015_forms.d({to:new fesm2015_forms.b(to,[fesm2015_forms.i.required,fesm2015_forms.i.email]),from:new fesm2015_forms.b({value:from,disabled:!0},[fesm2015_forms.i.required]),subject:new fesm2015_forms.b(subject,[fesm2015_forms.i.required]),text:new fesm2015_forms.b(text)})}onSubmit(){this.emailForm.invalid||this.emailSubmit.emit(this.emailForm.value)}}function EmailCreateComponent_app_modal_2_Template(rf,ctx){if(1&rf){const _r2=core.Mc();core.Lc(0,"app-modal",2),core.Sc("dismiss",(function EmailCreateComponent_app_modal_2_Template_app_modal_dismiss_0_listener(){core.cd(_r2);return core.Uc().showModal=!1})),core.Lc(1,"div",3),core.hd(2,"Compose"),core.Kc(),core.Lc(3,"app-email-form",4),core.Sc("emailSubmit",(function EmailCreateComponent_app_modal_2_Template_app_email_form_emailSubmit_3_listener($event){core.cd(_r2);return core.Uc().onSubmit($event)})),core.Kc(),core.Kc()}if(2&rf){const ctx_r0=core.Uc();core.wc(3),core.Zc("email",ctx_r0.email)}}email_form_component_EmailFormComponent.\u0275fac=function EmailFormComponent_Factory(t){return new(t||email_form_component_EmailFormComponent)},email_form_component_EmailFormComponent.\u0275cmp=core.Ac({type:email_form_component_EmailFormComponent,selectors:[["app-email-form"]],inputs:{email:"email"},outputs:{emailSubmit:"emailSubmit"},decls:7,vars:5,consts:[[1,"ui","form",3,"formGroup","ngSubmit"],["inputType","email","label","To",3,"control"],["inputType","email","label","From",3,"control"],["inputType","text","label","Subject",3,"control"],["controlType","textarea","label","Content",3,"control"],[1,"ui","button","primary"]],template:function EmailFormComponent_Template(rf,ctx){1&rf&&(core.Lc(0,"form",0),core.Sc("ngSubmit",(function EmailFormComponent_Template_form_ngSubmit_0_listener(){return ctx.onSubmit()})),core.Hc(1,"app-input",1),core.Hc(2,"app-input",2),core.Hc(3,"app-input",3),core.Hc(4,"app-input",4),core.Lc(5,"button",5),core.hd(6,"Send"),core.Kc(),core.Kc()),2&rf&&(core.Zc("formGroup",ctx.emailForm),core.wc(1),core.Zc("control",ctx.emailForm.get("to")),core.wc(1),core.Zc("control",ctx.emailForm.get("from")),core.wc(1),core.Zc("control",ctx.emailForm.get("subject")),core.wc(1),core.Zc("control",ctx.emailForm.get("text")))},directives:[fesm2015_forms.j,fesm2015_forms.g,fesm2015_forms.e,input_component.a],styles:[""]});class EmailCreateComponent{constructor(authService,emailService){this.authService=authService,this.emailService=emailService,this.showModal=!1,this.email={id:"",to:"",subject:"",html:"",text:"",from:authService.username+"@angular-email.com"}}ngOnInit(){}onSubmit(email){console.log(email),this.emailService.sendEmail(email).subscribe(()=>{this.showModal=!1})}}function EmailIndexComponent_div_1_Template(rf,ctx){if(1&rf&&(core.Lc(0,"div",2),core.Lc(1,"a",3),core.Lc(2,"div",4),core.Lc(3,"div",5),core.hd(4),core.Kc(),core.Lc(5,"p"),core.hd(6),core.Kc(),core.Kc(),core.Kc(),core.Kc()),2&rf){const email_r1=ctx.$implicit;core.wc(1),core.Zc("routerLink",email_r1.id),core.wc(3),core.id(email_r1.subject),core.wc(2),core.id(email_r1.from)}}EmailCreateComponent.\u0275fac=function EmailCreateComponent_Factory(t){return new(t||EmailCreateComponent)(core.Gc(auth_service.a),core.Gc(EmailService))},EmailCreateComponent.\u0275cmp=core.Ac({type:EmailCreateComponent,selectors:[["app-email-create"]],decls:3,vars:1,consts:[[1,"ui","button","inverted","primary","fluid",3,"click"],[3,"dismiss",4,"ngIf"],[3,"dismiss"],["modalTitle",""],[3,"email","emailSubmit"]],template:function EmailCreateComponent_Template(rf,ctx){1&rf&&(core.Lc(0,"button",0),core.Sc("click",(function EmailCreateComponent_Template_button_click_0_listener(){return ctx.showModal=!0})),core.hd(1,"Compose"),core.Kc(),core.gd(2,EmailCreateComponent_app_modal_2_Template,4,1,"app-modal",1)),2&rf&&(core.wc(2),core.Zc("ngIf",ctx.showModal))},directives:[common.j,modal_component_ModalComponent,email_form_component_EmailFormComponent],styles:[""]});class EmailIndexComponent{constructor(emailService){this.emailService=emailService,this.emails=[]}ngOnInit(){this.emailService.getEmails().subscribe(emails=>{this.emails=emails})}}EmailIndexComponent.\u0275fac=function EmailIndexComponent_Factory(t){return new(t||EmailIndexComponent)(core.Gc(EmailService))},EmailIndexComponent.\u0275cmp=core.Ac({type:EmailIndexComponent,selectors:[["app-email-index"]],decls:2,vars:1,consts:[[1,"ui","celled","list"],["classs","item",4,"ngFor","ngForOf"],["classs","item"],["routerLinkActive","active",3,"routerLink"],[1,"content"],[1,"header","trim"]],template:function EmailIndexComponent_Template(rf,ctx){1&rf&&(core.Lc(0,"div",0),core.gd(1,EmailIndexComponent_div_1_Template,7,3,"div",1),core.Kc()),2&rf&&(core.wc(1),core.Zc("ngForOf",ctx.emails))},directives:[common.i,router.d,router.c],styles:['.item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000}a.active[_ngcontent-%COMP%]{display:flex;justify-content:flex;align-items:center}a.active[_ngcontent-%COMP%]:before{content:">";font-size:20px;margin-right:10pc}.trim[_ngcontent-%COMP%]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;width:100%}']});class HomeComponent{constructor(){}ngOnInit(){}}HomeComponent.\u0275fac=function HomeComponent_Factory(t){return new(t||HomeComponent)},HomeComponent.\u0275cmp=core.Ac({type:HomeComponent,selectors:[["app-home"]],decls:6,vars:0,consts:[[1,"ui","grid","stackable"],[1,"five","wide","column"],[1,"eleven","wide","column"]],template:function HomeComponent_Template(rf,ctx){1&rf&&(core.Lc(0,"div",0),core.Lc(1,"div",1),core.Hc(2,"app-email-create"),core.Hc(3,"app-email-index"),core.Kc(),core.Lc(4,"div",2),core.Hc(5,"router-outlet"),core.Kc(),core.Kc())},directives:[EmailCreateComponent,EmailIndexComponent,router.f],styles:[""]});class PlaceholderComponent{constructor(){}ngOnInit(){}}PlaceholderComponent.\u0275fac=function PlaceholderComponent_Factory(t){return new(t||PlaceholderComponent)},PlaceholderComponent.\u0275cmp=core.Ac({type:PlaceholderComponent,selectors:[["app-placeholder"]],decls:4,vars:0,consts:[[1,"ui","placeholder","segment"],[1,"ui","icon","header"],[1,"envelope","outlibe","icon"]],template:function PlaceholderComponent_Template(rf,ctx){1&rf&&(core.Lc(0,"div",0),core.Lc(1,"div",1),core.Hc(2,"i",2),core.hd(3," Select an email to get started "),core.Kc(),core.Kc())},styles:[""]});class EmailReplyComponent{constructor(){}ngOnInit(){}}EmailReplyComponent.\u0275fac=function EmailReplyComponent_Factory(t){return new(t||EmailReplyComponent)},EmailReplyComponent.\u0275cmp=core.Ac({type:EmailReplyComponent,selectors:[["app-email-reply"]],decls:2,vars:0,template:function EmailReplyComponent_Template(rf,ctx){1&rf&&(core.Lc(0,"p"),core.hd(1,"email-reply works!"),core.Kc())},styles:[""]});class EmailShowComponent{constructor(route,emailService){this.route=route,this.emailService=emailService,this.email=route.snapshot.data.email,this.route.data.subscribe(({email:email})=>{this.email=email})}ngOnInit(){}}EmailShowComponent.\u0275fac=function EmailShowComponent_Factory(t){return new(t||EmailShowComponent)(core.Gc(router.a),core.Gc(EmailService))},EmailShowComponent.\u0275cmp=core.Ac({type:EmailShowComponent,selectors:[["app-email-show"]],decls:15,vars:4,consts:[[1,"header"],[1,"ui","divider"],[3,"innerHTML"]],template:function EmailShowComponent_Template(rf,ctx){1&rf&&(core.Lc(0,"div",0),core.Lc(1,"div"),core.Lc(2,"h3"),core.hd(3),core.Kc(),core.Lc(4,"div"),core.hd(5," From: "),core.Lc(6,"i"),core.hd(7),core.Kc(),core.Kc(),core.Lc(8,"div"),core.hd(9," To: "),core.Lc(10,"i"),core.hd(11),core.Kc(),core.Kc(),core.Kc(),core.Hc(12,"app-email-reply"),core.Kc(),core.Hc(13,"div",1),core.Hc(14,"div",2)),2&rf&&(core.wc(3),core.jd("",ctx.email.subject," "),core.wc(4),core.id(ctx.email.from),core.wc(4),core.id(ctx.email.to),core.wc(3),core.Zc("innerHTML",ctx.email.html,core.dd))},directives:[EmailReplyComponent],styles:[""]});var catchError=__webpack_require__("JIr8"),empty=__webpack_require__("EY2u");class email_resolver_service_EmailResolverService{constructor(emailService,router){this.emailService=emailService,this.router=router}resolve(route){const{id:id}=route.params;return this.emailService.getEmail(id).pipe(Object(catchError.a)(err=>(this.router.navigateByUrl("/inbox/not-found"),empty.a)))}}email_resolver_service_EmailResolverService.\u0275fac=function EmailResolverService_Factory(t){return new(t||email_resolver_service_EmailResolverService)(core.Pc(EmailService),core.Pc(router.b))},email_resolver_service_EmailResolverService.\u0275prov=core.Cc({token:email_resolver_service_EmailResolverService,factory:email_resolver_service_EmailResolverService.\u0275fac,providedIn:"root"});class NotFoundComponent{constructor(){}ngOnInit(){}}NotFoundComponent.\u0275fac=function NotFoundComponent_Factory(t){return new(t||NotFoundComponent)},NotFoundComponent.\u0275cmp=core.Ac({type:NotFoundComponent,selectors:[["app-not-found"]],decls:4,vars:0,consts:[[1,"ui","placeholder","segment"],[1,"ui","icon","header"],[1,"search","outlibe","icon"]],template:function NotFoundComponent_Template(rf,ctx){1&rf&&(core.Lc(0,"div",0),core.Lc(1,"div",1),core.Hc(2,"i",2),core.hd(3," Email not found "),core.Kc(),core.Kc())},styles:[""]});const routes=[{path:"",component:HomeComponent,children:[{path:"not-found",component:NotFoundComponent},{path:":id",component:EmailShowComponent,resolve:{email:email_resolver_service_EmailResolverService}},{path:"",component:PlaceholderComponent}]}];class InboxRoutingModule{}InboxRoutingModule.\u0275mod=core.Ec({type:InboxRoutingModule}),InboxRoutingModule.\u0275inj=core.Dc({factory:function InboxRoutingModule_Factory(t){return new(t||InboxRoutingModule)},imports:[[router.e.forChild(routes)],router.e]});var shared_module=__webpack_require__("PCNd");class InboxModule{}InboxModule.\u0275mod=core.Ec({type:InboxModule}),InboxModule.\u0275inj=core.Dc({factory:function InboxModule_Factory(t){return new(t||InboxModule)},imports:[[common.c,InboxRoutingModule,shared_module.a,fesm2015_forms.h]]})}};