(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Lvw3:function(e,t,r){"use strict";r.r(t),r.d(t,"ProfileModule",(function(){return E}));var i=r("tyNb"),a=r("fXoL"),o=r("wZkO");let s=(()=>{class e{constructor(e){this.router=e,this.dashboardTitle="Your Profile"}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(a.Mb(i.b))},e.\u0275cmp=a.Gb({type:e,selectors:[["app-profile-dashboard"]],decls:6,vars:3,consts:[["mat-tab-nav-bar",""],["mat-tab-link","",3,"routerLink","active"]],template:function(e,t){1&e&&(a.Sb(0,"h1"),a.Ac(1),a.Rb(),a.Sb(2,"nav",0),a.Sb(3,"a",1),a.Ac(4,"Profile"),a.Rb(),a.Rb(),a.Nb(5,"router-outlet")),2&e&&(a.Bb(1),a.Bc(t.dashboardTitle),a.Bb(2),a.kc("routerLink","index")("active",t.router.url.endsWith("index")))},directives:[o.b,i.c,o.a,i.e],styles:[""]}),e})();var n=r("3Pt+"),c=r("FKr1"),l=r("wd/R");const u=r.n(l).a||l,d=new a.s("MAT_MOMENT_DATE_ADAPTER_OPTIONS",{providedIn:"root",factory:function(){return{useUtc:!1}}});function b(e,t){const r=Array(e);for(let i=0;i<e;i++)r[i]=t(i);return r}let f=(()=>{class e extends c.c{constructor(e,t){super(),this._options=t,this.setLocale(e||u.locale())}setLocale(e){super.setLocale(e);let t=u.localeData(e);this._localeData={firstDayOfWeek:t.firstDayOfWeek(),longMonths:t.months(),shortMonths:t.monthsShort(),dates:b(31,e=>this.createDate(2017,0,e+1).format("D")),longDaysOfWeek:t.weekdays(),shortDaysOfWeek:t.weekdaysShort(),narrowDaysOfWeek:t.weekdaysMin()}}getYear(e){return this.clone(e).year()}getMonth(e){return this.clone(e).month()}getDate(e){return this.clone(e).date()}getDayOfWeek(e){return this.clone(e).day()}getMonthNames(e){return"long"==e?this._localeData.longMonths:this._localeData.shortMonths}getDateNames(){return this._localeData.dates}getDayOfWeekNames(e){return"long"==e?this._localeData.longDaysOfWeek:"short"==e?this._localeData.shortDaysOfWeek:this._localeData.narrowDaysOfWeek}getYearName(e){return this.clone(e).format("YYYY")}getFirstDayOfWeek(){return this._localeData.firstDayOfWeek}getNumDaysInMonth(e){return this.clone(e).daysInMonth()}clone(e){return e.clone().locale(this.locale)}createDate(e,t,r){const i=this._createMoment({year:e,month:t,date:r}).locale(this.locale);return i.isValid(),i}today(){return this._createMoment().locale(this.locale)}parse(e,t){return e&&"string"==typeof e?this._createMoment(e,t,this.locale):e?this._createMoment(e).locale(this.locale):null}format(e,t){return e=this.clone(e),this.isValid(e),e.format(t)}addCalendarYears(e,t){return this.clone(e).add({years:t})}addCalendarMonths(e,t){return this.clone(e).add({months:t})}addCalendarDays(e,t){return this.clone(e).add({days:t})}toIso8601(e){return this.clone(e).format()}deserialize(e){let t;if(e instanceof Date)t=this._createMoment(e).locale(this.locale);else if(this.isDateInstance(e))return this.clone(e);if("string"==typeof e){if(!e)return null;t=this._createMoment(e,u.ISO_8601).locale(this.locale)}return t&&this.isValid(t)?this._createMoment(t).locale(this.locale):super.deserialize(e)}isDateInstance(e){return u.isMoment(e)}isValid(e){return this.clone(e).isValid()}invalid(){return u.invalid()}_createMoment(e,t,r){const{strict:i,useUtc:a}=this._options||{};return a?u.utc(e,t,r,i):u(e,t,r,i)}}return e.\u0275fac=function(t){return new(t||e)(a.Wb(c.f,8),a.Wb(d,8))},e.\u0275prov=a.Ib({token:e,factory:e.\u0275fac}),e})();const h={parse:{dateInput:"LL"},display:{dateInput:"D MMMM YYYY",monthYearLabel:"YYYY",dateA11yLabel:"LL",monthYearA11yLabel:"YYYY"}};var p=r("FH4G"),m=r("AytR"),g=r("tk/3"),y=r("1q3R");let v=(()=>{class e{constructor(e,t){this.http=e,this.authService=t,this.editProfile=(e,t)=>this.http.patch(`${m.a.backendUrl}/users/edit-profile/${e}`,{newData:t},{headers:this.authService.addAuthorizedHeader()})}}return e.\u0275fac=function(t){return new(t||e)(a.Wb(g.b),a.Wb(y.a))},e.\u0275prov=a.Ib({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var k=r("0IaG"),S=r("dNgK"),x=r("XiUz"),M=r("kmnG"),R=r("qFsG"),A=r("iadO"),P=r("ofXK"),B=r("bTqV");function O(e,t){1&e&&(a.Sb(0,"mat-error"),a.Ac(1," DoB is required "),a.Rb())}function w(e,t){1&e&&(a.Sb(0,"mat-error"),a.Ac(1," Job title is required "),a.Rb())}function D(e,t){1&e&&(a.Sb(0,"mat-error"),a.Ac(1," Address is required "),a.Rb())}let I=(()=>{class e{constructor(e,t,r,i,a){this.formBuilder=e,this.profileService=t,this.dialogRef=r,this.snackBar=i,this.authService=a}ngOnInit(){this.editProfileForm=this.formBuilder.group({jobTitle:[this.user.jobTitle,[n.s.required]],dateOfBirth:[null===this.user.dateOfBirth?null:new p.a(this.user.dateOfBirth).toDate(),[n.s.required]],address:[this.user.address,[n.s.required]]})}submit(){if(this.editProfileForm.valid){let e={jobTitle:this.editProfileForm.value.jobTitle,dateOfBirth:Object(p.b)(this.editProfileForm.value.dateOfBirth),address:this.editProfileForm.value.address};this.profileService.editProfile(this.user._id,e).subscribe(e=>{e.success?(this.authService.userSubject.next(e.user),this.snackBar.open("Profile edited successfully","",{panelClass:["success-snackbar"]}),this.dialogRef.close()):this.snackBar.open(e.msg,"",{panelClass:["error-snackbar"]})})}}}return e.\u0275fac=function(t){return new(t||e)(a.Mb(n.d),a.Mb(v),a.Mb(k.c),a.Mb(S.b),a.Mb(y.a))},e.\u0275cmp=a.Gb({type:e,selectors:[["app-edit-profile"]],inputs:{user:"user"},features:[a.Ab([{provide:c.c,useClass:f,deps:[c.f]},{provide:c.e,useValue:h}])],decls:25,vars:6,consts:[["fxLayoutAlign","center center"],["fxLayout","column","fxFlex","100%","fxFlex.gt-md","70%",3,"formGroup","ngSubmit"],["matInput","","formControlName","dateOfBirth",3,"matDatepicker"],["matSuffix","",3,"for"],["picker",""],[4,"ngIf"],["matInput","","formControlName","jobTitle","type","text"],["matInput","","formControlName","address","type","text"],["fxLayoutAlign","center"],["mat-raised-button","","color","primary","type","submit"]],template:function(e,t){if(1&e&&(a.Sb(0,"div",0),a.Sb(1,"form",1),a.ac("ngSubmit",(function(){return t.submit()})),a.Sb(2,"h2"),a.Ac(3,"Edit profile"),a.Rb(),a.Sb(4,"mat-form-field"),a.Sb(5,"mat-label"),a.Ac(6,"Date of birth"),a.Rb(),a.Nb(7,"input",2),a.Nb(8,"mat-datepicker-toggle",3),a.Nb(9,"mat-datepicker",null,4),a.zc(11,O,2,0,"mat-error",5),a.Rb(),a.Sb(12,"mat-form-field"),a.Sb(13,"mat-label"),a.Ac(14,"Job title"),a.Rb(),a.Nb(15,"input",6),a.zc(16,w,2,0,"mat-error",5),a.Rb(),a.Sb(17,"mat-form-field"),a.Sb(18,"mat-label"),a.Ac(19,"Address"),a.Rb(),a.Nb(20,"input",7),a.zc(21,D,2,0,"mat-error",5),a.Rb(),a.Sb(22,"div",8),a.Sb(23,"button",9),a.Ac(24,"Submit"),a.Rb(),a.Rb(),a.Rb(),a.Rb()),2&e){const e=a.pc(10);a.Bb(1),a.kc("formGroup",t.editProfileForm),a.Bb(6),a.kc("matDatepicker",e),a.Bb(1),a.kc("for",e),a.Bb(3),a.kc("ngIf",t.editProfileForm.get("dateOfBirth").hasError("required")),a.Bb(5),a.kc("ngIf",t.editProfileForm.get("jobTitle").hasError("required")),a.Bb(5),a.kc("ngIf",t.editProfileForm.get("address").hasError("required"))}},directives:[x.b,n.t,n.n,x.c,x.a,n.h,M.d,M.g,R.b,n.c,A.b,n.m,n.g,A.d,M.h,A.a,P.m,B.b,M.c],styles:[""]}),e})();var _=r("gx82"),L=r("NFeN");function T(e,t){if(1&e){const e=a.Tb();a.Sb(0,"a",10),a.ac("click",(function(){return a.rc(e),a.ec().uploadFile()})),a.Ac(1,"Upload"),a.Rb()}}function C(e,t){if(1&e){const e=a.Tb();a.Sb(0,"a",11),a.ac("click",(function(){return a.rc(e),a.ec().cancel()})),a.Ac(1,"Cancel"),a.Rb()}}function F(e,t){if(1&e&&(a.Sb(0,"div",12),a.Ac(1),a.Rb()),2&e){const e=a.ec();a.Bb(1),a.Bc(e.errorMessage)}}let N=(()=>{class e{constructor(e,t,r,i){this.imagesService=e,this.authService=t,this.snackBar=r,this.dialogRef=i,this.selectFile=e=>{if(!e.target.files[0]||0==e.target.files[0].length)return this.errorMessage="You must select an image",void setTimeout(()=>this.errorMessage="",2e3);if(null==e.target.files[0].type.match(/image\/*/))return this.errorMessage="Only images are supported",void setTimeout(()=>this.errorMessage="",2e3);if(e.target.files[0].size>1<<20)return this.errorMessage="File size must be less than 1MB",void setTimeout(()=>this.errorMessage="",2e3);this.fileToUpload=e.target.files[0];let t=new FileReader;t.readAsDataURL(this.fileToUpload),t.onload=()=>this.imageToUpload=t.result},this.uploadFile=()=>{this.imagesService.uploadProfilePicture(this.fileToUpload).subscribe(e=>{e.success?(this.authService.userSubject.next(e.user),this.snackBar.open("Profile picture edited successfully","",{panelClass:["success-snackbar"]}),this.dialogRef.close()):this.snackBar.open(e.msg,"",{panelClass:["error-snackbar"]})})},this.cancel=()=>this.dialogRef.close()}ngOnInit(){this.currentImageUrl=this.imagesService.getProfilePicture(this.user.profilePicUrl)}}return e.\u0275fac=function(t){return new(t||e)(a.Mb(_.a),a.Mb(y.a),a.Mb(S.b),a.Mb(k.c))},e.\u0275cmp=a.Gb({type:e,selectors:[["app-edit-profile-picture"]],inputs:{user:"user"},decls:14,vars:4,consts:[["fxLayout","column","fxLayoutAlign","center center","fxLayoutGap","20px"],[1,"container"],["alt","Profile pic",1,"profile-pic",3,"src"],["mat-mini-fab","","color","primary",1,"edit-icon",3,"click"],["type","file","accept","image/jpeg, image/png",2,"display","none",3,"change"],["inputFile",""],["fxLayout","row","fxLayoutGap","10px"],["mat-flat-button","","color","primary",3,"click",4,"ngIf"],["mat-stroked-button","","color","warn",3,"click",4,"ngIf"],["style","color: red",4,"ngIf"],["mat-flat-button","","color","primary",3,"click"],["mat-stroked-button","","color","warn",3,"click"],[2,"color","red"]],template:function(e,t){if(1&e){const e=a.Tb();a.Sb(0,"h2"),a.Ac(1,"Edit profile picture?"),a.Rb(),a.Sb(2,"div",0),a.Sb(3,"div",1),a.Nb(4,"img",2),a.Sb(5,"a",3),a.ac("click",(function(){return a.rc(e),a.pc(9).click()})),a.Sb(6,"mat-icon"),a.Ac(7,"edit"),a.Rb(),a.Rb(),a.Rb(),a.Sb(8,"input",4,5),a.ac("change",(function(e){return t.selectFile(e)})),a.Rb(),a.Sb(10,"div",6),a.zc(11,T,2,0,"a",7),a.zc(12,C,2,0,"a",8),a.Rb(),a.zc(13,F,2,1,"div",9),a.Rb()}2&e&&(a.Bb(4),a.kc("src",t.imageToUpload||t.currentImageUrl||"./assets/default_avatar.png",a.sc),a.Bb(7),a.kc("ngIf",t.imageToUpload),a.Bb(1),a.kc("ngIf",t.imageToUpload),a.Bb(1),a.kc("ngIf",t.errorMessage))},directives:[x.c,x.b,x.d,B.a,L.a,P.m],styles:[".profile-pic[_ngcontent-%COMP%]{width:200px;height:200px;display:block;background-color:#000;object-fit:cover;border-radius:50%}.container[_ngcontent-%COMP%]{position:relative}.edit-icon[_ngcontent-%COMP%]{position:absolute;bottom:0;right:0}"]}),e})();var Y=r("qUOr"),j=r("f0Cb");function U(e,t){if(1&e){const e=a.Tb();a.Sb(0,"div",12),a.Sb(1,"div"),a.Ac(2,"Your account has not been approved. Please contact your manager"),a.Rb(),a.Sb(3,"mat-icon",13),a.ac("click",(function(){return a.rc(e),a.ec(2).closeAlert()})),a.Ac(4,"close"),a.Rb(),a.Rb()}}function z(e,t){if(1&e){const e=a.Tb();a.Sb(0,"div",1),a.Sb(1,"div",2),a.Sb(2,"img",3),a.ac("click",(function(){return a.rc(e),a.ec().editProfilePicture()})),a.Rb(),a.Sb(3,"div",4),a.Sb(4,"div",5),a.Ac(5),a.Rb(),a.Sb(6,"div",6),a.Ac(7),a.Rb(),a.Rb(),a.Rb(),a.Nb(8,"mat-divider"),a.Sb(9,"div",7),a.Sb(10,"div",8),a.Sb(11,"mat-icon"),a.Ac(12,"email"),a.Rb(),a.Sb(13,"div"),a.Ac(14),a.Rb(),a.Rb(),a.Sb(15,"div",8),a.Sb(16,"mat-icon"),a.Ac(17,"cake"),a.Rb(),a.Sb(18,"div"),a.Ac(19),a.Rb(),a.Rb(),a.Sb(20,"div",8),a.Sb(21,"mat-icon"),a.Ac(22,"location_city"),a.Rb(),a.Sb(23,"div"),a.Ac(24),a.Rb(),a.Rb(),a.Sb(25,"div",9),a.Sb(26,"a",10),a.ac("click",(function(){return a.rc(e),a.ec().editProfile()})),a.Ac(27,"Edit Profile"),a.Rb(),a.Rb(),a.zc(28,U,5,0,"div",11),a.Rb(),a.Rb()}if(2&e){const e=a.ec();a.Bb(2),a.kc("src",e.imgsrc||"./assets/default_avatar.png",a.sc),a.Bb(3),a.Bc(e.user.name),a.Bb(2),a.Bc(e.user.jobTitle||e.user.role),a.Bb(7),a.Bc(e.user.email),a.Bb(5),a.Bc(e.dateOfBirthInputString),a.Bb(5),a.Bc(e.user.address||"Not set yet"),a.Bb(4),a.kc("ngIf",!e.user.approved&&e.showAlert)}}const W=[{path:"",component:s,children:[{path:"index",component:(()=>{class e{constructor(e,t,r){this.authService=e,this.imagesService=t,this.dialog=r,this.showAlert=!0,this.closeAlert=()=>{this.showAlert=!1},this.editProfile=()=>{this.dialog.open(I,{width:"500px"}).componentInstance.user=this.user},this.editProfilePicture=()=>{this.dialog.open(N,{width:"500px"}).componentInstance.user=this.user}}ngOnInit(){this.authService.userSubject.subscribe(e=>{this.user=e,e&&(this.dateOfBirthInputString=null===this.user.dateOfBirth?"Not set yet":new p.a(this.user.dateOfBirth).displayDate(),e.profilePicUrl&&(this.imgsrc=this.imagesService.getProfilePicture(e.profilePicUrl)))})}}return e.\u0275fac=function(t){return new(t||e)(a.Mb(y.a),a.Mb(_.a),a.Mb(k.a))},e.\u0275cmp=a.Gb({type:e,selectors:[["app-display-profile"]],decls:1,vars:1,consts:[["fxFlex","","class","p-40px",4,"appLoading"],["fxFlex","",1,"p-40px"],["fxLayout","row","fxLayoutGap","20px","fxLayoutAlign","start end",1,"mb-20px"],["alt","Profile pic",1,"profile-pic","clickable",3,"src","click"],["fxLayout","column"],[1,"name"],[1,"job-title"],["fxLayout","column","fxLayoutGap","30px",1,"pt-30px"],["fxLayout","row","fxLayoutGap","10px","fxLayoutAlign","start end"],["fxLayoutAlign","start"],["mat-raised-button","","color","primary",3,"click"],["class","alert mat-elevation-z8",4,"ngIf"],[1,"alert","mat-elevation-z8"],[1,"clickable",3,"click"]],template:function(e,t){1&e&&a.zc(0,z,29,7,"div",0),2&e&&a.kc("appLoading",!t.user)},directives:[Y.a,x.a,x.c,x.d,x.b,j.a,L.a,B.a,P.m],styles:[".profile-pic[_ngcontent-%COMP%]{width:120px;height:120px;object-fit:cover;background-color:#000;border-radius:50%}.name[_ngcontent-%COMP%]{font-size:40px;font-weight:700}.job-title[_ngcontent-%COMP%]{font-size:15px}.alert[_ngcontent-%COMP%]{background-color:rgba(240,67,54,.8);padding:20px;color:#fff;margin-bottom:15px;display:flex;flex-direction:row;justify-content:space-between;align-content:center}.clickable[_ngcontent-%COMP%]{cursor:pointer}.mb-20px[_ngcontent-%COMP%]{margin-bottom:20px}.pt-30px[_ngcontent-%COMP%]{padding-top:30px}.p-40px[_ngcontent-%COMP%]{padding:40px}"]}),e})()},{path:"",pathMatch:"full",redirectTo:"index"},{path:"**",component:r("QdL7").a}]}];let G=(()=>{class e{}return e.\u0275mod=a.Kb({type:e}),e.\u0275inj=a.Jb({factory:function(t){return new(t||e)},imports:[[i.d.forChild(W)],i.d]}),e})();var q=r("PCNd");let E=(()=>{class e{static forRoot(){return{ngModule:e}}}return e.\u0275mod=a.Kb({type:e}),e.\u0275inj=a.Jb({factory:function(t){return new(t||e)},imports:[[q.a.forRoot(),G]]}),e})()}}]);