(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"x+MQ":function(e,t,a){"use strict";a.r(t),a.d(t,"ExpensesManagerModule",(function(){return Ee}));var i=a("tyNb"),n=a("QdL7"),s=a("+0xr"),r=a("M9IT"),o=a("R0Ic"),c=a("3Pt+"),l=function(e){return e.Kg="kg",e.Pcs="pcs",e.Gram="gram",e.Cc="cc",e.Ml="ml",e.Buah="buah",e}({}),u=a("fXoL"),d=a("1q3R"),b=a("tk/3"),p=a("AytR"),h=a("2Vo4");let m=(()=>{class e{constructor(e,t){this.httpClient=e,this.authService=t,this.refreshSubject=new h.a(null),this.addExpense=e=>this.httpClient.post(p.a.backendUrl+"/expenses/add-expense",e,{headers:this.authService.addAuthorizedHeader()}),this.editExpense=(e,t)=>this.httpClient.patch(`${p.a.backendUrl}/expenses/edit-expense/${t}`,{expense:e},{headers:this.authService.addAuthorizedHeader()}),this.getAllExpenses=()=>this.httpClient.get(p.a.backendUrl+"/expenses/get-all-expenses",{headers:this.authService.addAuthorizedHeader()}),this.deleteExpense=e=>this.httpClient.delete(`${p.a.backendUrl}/expenses/delete-expense/${e}`,{headers:this.authService.addAuthorizedHeader()}),this.getDailyExpensesInDateRange=(e,t)=>this.httpClient.get(p.a.backendUrl+"/expenses/get-daily-expenses-in-range",{headers:this.authService.addAuthorizedHeader(),params:(new b.e).set("startDate",e.toUTCString()).set("endDate",t.toUTCString())}),this.findAllDistinctItems=(e,t)=>this.httpClient.get(p.a.backendUrl+"/expenses/find-all-distinct-items",{headers:this.authService.addAuthorizedHeader(),params:(new b.e).set("startDate",e.toUTCString()).set("endDate",t.toUTCString())}),this.getExpensesByItem=(e,t,a)=>this.httpClient.get(`${p.a.backendUrl}/expenses/get-expenses-by-item/${e}`,{headers:this.authService.addAuthorizedHeader(),params:(new b.e).set("startDate",t.toUTCString()).set("endDate",a.toUTCString())})}toggleRefresh(){this.refreshSubject.next(null)}}return e.\u0275fac=function(t){return new(t||e)(u.Wb(b.b),u.Wb(d.a))},e.\u0275prov=u.Ib({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var f=a("dNgK"),g=a("0IaG");let x=(()=>{class e{constructor(){this.onAmountChange=(e,t)=>{"amount"==t&&(e.value.pricePerUnit?e.patchValue({totalPrice:e.value.amount*e.value.pricePerUnit}):e.value.totalPrice&&e.patchValue({pricePerUnit:Math.round(e.value.totalPrice/e.value.amount)}))},this.onPricePerUnitChange=(e,t)=>{"pricePerUnit"===t&&e.patchValue({totalPrice:e.value.pricePerUnit*e.value.amount})},this.onTotalPriceChange=(e,t)=>{"totalPrice"===t&&e.value.amount&&e.patchValue({pricePerUnit:Math.round(e.value.totalPrice/e.value.amount)})}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=u.Ib({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var S=a("XiUz"),v=a("kmnG"),D=a("qFsG"),k=a("ofXK"),C=a("d3UM"),R=a("bTqV"),y=a("FKr1");function A(e,t){1&e&&(u.Sb(0,"mat-error"),u.Ac(1," Item is required "),u.Rb())}function w(e,t){1&e&&(u.Sb(0,"mat-error"),u.Ac(1," Supplier is required "),u.Rb())}function P(e,t){1&e&&(u.Sb(0,"mat-error"),u.Ac(1," Amount is required "),u.Rb())}function B(e,t){if(1&e&&(u.Sb(0,"mat-option",15),u.Ac(1),u.Rb()),2&e){const e=t.$implicit;u.kc("value",e),u.Bb(1),u.Cc(" ",e," ")}}function M(e,t){1&e&&(u.Sb(0,"mat-error"),u.Ac(1," Price per unit is required "),u.Rb())}function F(e,t){1&e&&(u.Sb(0,"mat-error"),u.Ac(1," Total price is required "),u.Rb())}let I=(()=>{class e{constructor(e,t,a,i,n,s){this.formBuilder=e,this.authService=t,this.expensesService=a,this.snackBar=i,this.dialogRef=n,this.priceCalculatorService=s,this.onAmountChange=()=>this.priceCalculatorService.onAmountChange(this.expensesForm,this.lastChanged),this.onPricePerUnitChange=()=>this.priceCalculatorService.onPricePerUnitChange(this.expensesForm,this.lastChanged),this.onTotalPriceChange=()=>this.priceCalculatorService.onTotalPriceChange(this.expensesForm,this.lastChanged)}get unitsOfMeasurement(){return Object.values(l)}ngOnInit(){this.authService.userSubject.subscribe(e=>this.loggedInUser=e),this.expensesForm=this.formBuilder.group({item:[this.expense.item,[c.s.required]],supplier:[this.expense.supplier,[c.s.required]],amount:[this.expense.amount,[c.s.required]],unit:[this.expense.unit,[c.s.required]],pricePerUnit:[this.expense.pricePerUnit,[c.s.required]],totalPrice:[this.expense.totalPrice,[c.s.required]]})}changeLastChanged(e){this.lastChanged=e}submit(){this.expensesForm.valid&&this.expensesService.editExpense({item:this.expensesForm.value.item,supplier:this.expensesForm.value.supplier,amount:this.expensesForm.value.amount,unit:this.expensesForm.value.unit,pricePerUnit:this.expensesForm.value.pricePerUnit,totalPrice:this.expensesForm.value.totalPrice,dateOfExpense:this.expense.dateOfExpense,submittedBy:this.loggedInUser.name},this.expense._id).subscribe(e=>{this.snackBar.open(e.msg,"",{panelClass:[e.success?"success-snackbar":"error-snackbar"]}),this.expensesService.toggleRefresh(),this.dialogRef.close()},()=>{this.snackBar.open("Something wrong has happened","",{panelClass:["error-snackbar"]})})}}return e.\u0275fac=function(t){return new(t||e)(u.Mb(c.d),u.Mb(d.a),u.Mb(m),u.Mb(f.b),u.Mb(g.c),u.Mb(x))},e.\u0275cmp=u.Gb({type:e,selectors:[["app-edit-expense-form"]],inputs:{expense:"expense",_id:"_id"},decls:37,vars:7,consts:[["fxFill","","fxLayoutAlign","center center"],["fxLayout","column","fxFlex","100%","fxFlex.gt-md","70%","autocomplete","off",3,"formGroup","ngSubmit"],["matInput","","formControlName","item","type","text"],[4,"ngIf"],["matInput","","formControlName","supplier","type","text"],["fxLayout","row","fxLayoutGap","15px"],["fxFlex",""],["matInput","","formControlName","amount","type","number",3,"focus","ngModelChange"],[1,"auto-width"],["formControlName","unit"],[3,"value",4,"ngFor","ngForOf"],["matInput","","formControlName","pricePerUnit","type","number",3,"focus","ngModelChange"],["matInput","","formControlName","totalPrice","type","number",3,"focus","ngModelChange"],["fxLayoutAlign","center"],["mat-raised-button","","color","primary","type","submit"],[3,"value"]],template:function(e,t){1&e&&(u.Sb(0,"div",0),u.Sb(1,"form",1),u.ac("ngSubmit",(function(){return t.submit()})),u.Sb(2,"h2"),u.Ac(3,"Edit expense"),u.Rb(),u.Sb(4,"mat-form-field"),u.Sb(5,"mat-label"),u.Ac(6,"Item"),u.Rb(),u.Nb(7,"input",2),u.zc(8,A,2,0,"mat-error",3),u.Rb(),u.Sb(9,"mat-form-field"),u.Sb(10,"mat-label"),u.Ac(11,"Supplier"),u.Rb(),u.Nb(12,"input",4),u.zc(13,w,2,0,"mat-error",3),u.Rb(),u.Sb(14,"div",5),u.Sb(15,"mat-form-field",6),u.Sb(16,"mat-label"),u.Ac(17,"Amount"),u.Rb(),u.Sb(18,"input",7),u.ac("focus",(function(){return t.changeLastChanged("amount")}))("ngModelChange",(function(){return t.onAmountChange()})),u.Rb(),u.zc(19,P,2,0,"mat-error",3),u.Rb(),u.Sb(20,"div",8),u.Sb(21,"mat-form-field"),u.Sb(22,"mat-select",9),u.zc(23,B,2,2,"mat-option",10),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Sb(24,"mat-form-field"),u.Sb(25,"mat-label"),u.Ac(26,"Price per unit"),u.Rb(),u.Sb(27,"input",11),u.ac("focus",(function(){return t.changeLastChanged("pricePerUnit")}))("ngModelChange",(function(){return t.onPricePerUnitChange()})),u.Rb(),u.zc(28,M,2,0,"mat-error",3),u.Rb(),u.Sb(29,"mat-form-field"),u.Sb(30,"mat-label"),u.Ac(31,"Total price"),u.Rb(),u.Sb(32,"input",12),u.ac("focus",(function(){return t.changeLastChanged("totalPrice")}))("ngModelChange",(function(){return t.onTotalPriceChange()})),u.Rb(),u.zc(33,F,2,0,"mat-error",3),u.Rb(),u.Sb(34,"div",13),u.Sb(35,"button",14),u.Ac(36,"Submit"),u.Rb(),u.Rb(),u.Rb(),u.Rb()),2&e&&(u.Bb(1),u.kc("formGroup",t.expensesForm),u.Bb(7),u.kc("ngIf",t.expensesForm.get("item").hasError("required")),u.Bb(5),u.kc("ngIf",t.expensesForm.get("supplier").hasError("required")),u.Bb(6),u.kc("ngIf",t.expensesForm.get("amount").hasError("required")),u.Bb(4),u.kc("ngForOf",t.unitsOfMeasurement),u.Bb(5),u.kc("ngIf",t.expensesForm.get("pricePerUnit").hasError("required")),u.Bb(5),u.kc("ngIf",t.expensesForm.get("totalPrice").hasError("required")))},directives:[S.e,S.b,c.t,c.n,S.c,S.a,c.h,v.d,v.g,D.b,c.c,c.m,c.g,k.m,S.d,c.q,C.a,k.l,R.b,v.c,y.o],styles:[".auto-width .mat-form-field,   .auto-width .mat-form-field-infix{width:auto!important}  .auto-width .mat-select-value{max-width:100%;width:auto}"]}),e})(),L=(()=>{class e{constructor(e,t,a){this.dialogRef=e,this.expensesService=t,this.snackBar=a}ngOnInit(){}goBack(){this.dialogRef.close()}confirmDelete(){this.expensesService.deleteExpense(this._id).subscribe(e=>{e.success?(this.snackBar.open("Expense deleted successfully","",{panelClass:["success-snackbar"]}),this.expensesService.toggleRefresh(),this.dialogRef.close()):this.snackBar.open(e.msg,"",{panelClass:["error-snackbar"]})})}}return e.\u0275fac=function(t){return new(t||e)(u.Mb(g.c),u.Mb(m),u.Mb(f.b))},e.\u0275cmp=u.Gb({type:e,selectors:[["app-delete-expense-form"]],inputs:{_id:"_id"},decls:10,vars:0,consts:[[2,"color","red"],["fxLayout","row","fxLayoutGap","4px","fxLayoutAlign","end end"],["mat-stroked-button","","color","primary",3,"click"],["mat-raised-button","","color","warn",3,"click"]],template:function(e,t){1&e&&(u.Sb(0,"div"),u.Sb(1,"h2"),u.Ac(2,"Delete this entry?"),u.Rb(),u.Sb(3,"div",0),u.Ac(4,"This action cannot be undone"),u.Rb(),u.Sb(5,"div",1),u.Sb(6,"button",2),u.ac("click",(function(){return t.goBack()})),u.Ac(7,"Back"),u.Rb(),u.Sb(8,"button",3),u.ac("click",(function(){return t.confirmDelete()})),u.Ac(9,"Delete"),u.Rb(),u.Rb(),u.Rb())},directives:[S.c,S.d,S.b,R.b],styles:[""]}),e})();var E=a("2pJz");let T=(()=>{class e{constructor(){this.ticksInADay=864e5,this.now=()=>new Date,this.today=()=>this.removeTime(new Date),this.addDays=(e,t)=>new Date(e.getTime()+t*this.ticksInADay),this.removeTime=e=>new Date(e.setHours(0,0,0))}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=u.Ib({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var z=a("qUOr"),U=a("NFeN"),O=a("Qu3c");let N=(()=>{class e{transform(e,...t){return"Rp "+new k.f("en-US").transform(e,"")}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=u.Lb({name:"rupiah",type:e,pure:!0}),e})();function q(e,t){1&e&&(u.Sb(0,"th",20),u.Ac(1," Date"),u.Rb())}function j(e,t){if(1&e&&(u.Sb(0,"td",21),u.Ac(1),u.fc(2,"date"),u.Rb()),2&e){const e=t.$implicit;u.Bb(1),u.Bc(u.hc(2,1,e.dateOfExpense,"d MMMM yyyy, HH:mm"))}}function G(e,t){1&e&&(u.Sb(0,"th",20),u.Ac(1," Item"),u.Rb())}function _(e,t){if(1&e&&(u.Sb(0,"td",21),u.Ac(1),u.Rb()),2&e){const e=t.$implicit;u.Bb(1),u.Bc(e.item)}}function W(e,t){1&e&&(u.Sb(0,"th",20),u.Ac(1," Supplier"),u.Rb())}function $(e,t){if(1&e&&(u.Sb(0,"td",21),u.Ac(1),u.Rb()),2&e){const e=t.$implicit;u.Bb(1),u.Bc(e.supplier)}}function H(e,t){1&e&&(u.Sb(0,"th",20),u.Ac(1," Amount"),u.Rb())}function Q(e,t){if(1&e&&(u.Sb(0,"td",21),u.Ac(1),u.Rb()),2&e){const e=t.$implicit;u.Bb(1),u.Dc("",e.amount," ",e.unit,"")}}function V(e,t){1&e&&(u.Sb(0,"th",20),u.Ac(1," Price/Unit"),u.Rb())}function K(e,t){if(1&e&&(u.Sb(0,"td",21),u.Ac(1),u.fc(2,"rupiah"),u.Rb()),2&e){const e=t.$implicit;u.Bb(1),u.Bc(u.gc(2,1,e.pricePerUnit))}}function J(e,t){1&e&&(u.Sb(0,"th",20),u.Ac(1," Total Price"),u.Rb())}function X(e,t){if(1&e&&(u.Sb(0,"td",21),u.Ac(1),u.fc(2,"rupiah"),u.Rb()),2&e){const e=t.$implicit;u.Bb(1),u.Bc(u.gc(2,1,e.totalPrice))}}function Z(e,t){1&e&&(u.Sb(0,"th",20),u.Ac(1," Submitted by"),u.Rb())}function Y(e,t){if(1&e&&(u.Sb(0,"td",21),u.Ac(1),u.Rb()),2&e){const e=t.$implicit;u.Bb(1),u.Bc(e.submittedBy)}}function ee(e,t){if(1&e){const e=u.Tb();u.Sb(0,"td",21),u.Sb(1,"div",22),u.Sb(2,"div",23),u.Sb(3,"div",24),u.Ac(4),u.Rb(),u.Sb(5,"div"),u.Ac(6),u.Rb(),u.Rb(),u.Sb(7,"div",25),u.Sb(8,"button",26),u.ac("click",(function(){u.rc(e);const a=t.$implicit;return u.ec(2).openEditExpenseFormDialog(a)})),u.Sb(9,"mat-icon"),u.Ac(10,"edit"),u.Rb(),u.Rb(),u.Sb(11,"div",27),u.Sb(12,"button",28),u.ac("click",(function(){u.rc(e);const a=t.$implicit;return u.ec(2).openDeleteExpenseFormDialog(a._id)})),u.Sb(13,"mat-icon"),u.Ac(14,"delete"),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb()}if(2&e){const e=t.$implicit,a=u.ec(2);u.Cb("colspan",a.displayedColumns.length),u.Bb(1),u.kc("@detailExpand",e==a.expandedRow?"expanded":"collapsed"),u.Bb(3),u.Cc("Expense ID: ",e._id,""),u.Bb(2),u.Cc("Invoice ID: ",null==e.invoice_id?"No invoice ID":e.invoice_id,""),u.Bb(5),u.kc("matTooltipDisabled",a.isAuthorizedToDelete)("matTooltipPosition","below"),u.Bb(1),u.kc("disabled",!a.isAuthorizedToDelete)}}function te(e,t){1&e&&u.Nb(0,"tr",29)}function ae(e,t){if(1&e){const e=u.Tb();u.Sb(0,"tr",30),u.ac("click",(function(){u.rc(e);const a=t.$implicit,i=u.ec(2);return i.expandedRow=i.expandedRow===a?null:a})),u.Rb()}}function ie(e,t){1&e&&u.Nb(0,"tr",31)}function ne(e,t){if(1&e&&(u.Sb(0,"tr",32),u.Sb(1,"td",33),u.Ac(2,"No data"),u.Rb(),u.Rb()),2&e){const e=u.ec(2);u.Bb(1),u.kc("colSpan",e.displayedColumns.length)}}const se=function(){return["expandedDetail"]};function re(e,t){if(1&e&&(u.Sb(0,"table",5),u.Qb(1,6),u.zc(2,q,2,0,"th",7),u.zc(3,j,3,4,"td",8),u.Pb(),u.Qb(4,9),u.zc(5,G,2,0,"th",7),u.zc(6,_,2,1,"td",8),u.Pb(),u.Qb(7,10),u.zc(8,W,2,0,"th",7),u.zc(9,$,2,1,"td",8),u.Pb(),u.Qb(10,11),u.zc(11,H,2,0,"th",7),u.zc(12,Q,2,2,"td",8),u.Pb(),u.Qb(13,12),u.zc(14,V,2,0,"th",7),u.zc(15,K,3,3,"td",8),u.Pb(),u.Qb(16,13),u.zc(17,J,2,0,"th",7),u.zc(18,X,3,3,"td",8),u.Pb(),u.Qb(19,14),u.zc(20,Z,2,0,"th",7),u.zc(21,Y,2,1,"td",8),u.Pb(),u.Qb(22,15),u.zc(23,ee,15,7,"td",8),u.Pb(),u.zc(24,te,1,0,"tr",16),u.zc(25,ae,1,0,"tr",17),u.zc(26,ie,1,0,"tr",18),u.zc(27,ne,3,1,"tr",19),u.Rb()),2&e){const e=u.ec();u.kc("dataSource",e.dataSource),u.Bb(24),u.kc("matHeaderRowDef",e.displayedColumns),u.Bb(1),u.kc("matRowDefColumns",e.displayedColumns),u.Bb(1),u.kc("matRowDefColumns",u.lc(4,se))}}const oe=function(){return[5,10]};let ce=(()=>{class e{constructor(e,t,a,i){this.expensesService=e,this.authService=t,this.dialog=a,this.dateService=i,this.displayedColumns=["date","item","supplier","amount","pricePerUnit","totalPrice","submittedBy"],this.populateDataSourceWithExpenses=()=>{this.expensesService.getAllExpenses().subscribe(e=>{this.dataSource=new s.l(e.expenses),this.dataSource.paginator=this.paginator,this.lastUpdated=this.dateService.now()})}}ngOnInit(){this.populateDataSourceWithExpenses(),this.authService.userSubject.subscribe(e=>{e&&(this.isAuthorizedToDelete=this.authService.getUserRole()!==E.a.Employee)}),this.expensesService.refreshSubject.subscribe(()=>this.populateDataSourceWithExpenses())}openEditExpenseFormDialog(e){let t=this.dialog.open(I,{width:"500px"});t.componentInstance.expense=e,t.afterClosed().subscribe(this.populateDataSourceWithExpenses)}openDeleteExpenseFormDialog(e){let t=this.dialog.open(L,{width:"500px"});t.componentInstance._id=e,t.afterClosed().subscribe(this.populateDataSourceWithExpenses)}}return e.\u0275fac=function(t){return new(t||e)(u.Mb(m),u.Mb(d.a),u.Mb(g.a),u.Mb(T))},e.\u0275cmp=u.Gb({type:e,selectors:[["app-list-of-expenses"]],viewQuery:function(e,t){var a;1&e&&u.vc(r.a,!0),2&e&&u.oc(a=u.bc())&&(t.paginator=a.first)},decls:7,vars:8,consts:[["fxFlex","","fxLayout","column"],["mat-table","","multiTemplateDataRows","",3,"dataSource",4,"appLoading"],["fxLayout","row","fxLayoutAlign","space-between center"],[1,"mat-h3"],[3,"pageSizeOptions","pageSize"],["mat-table","","multiTemplateDataRows","",3,"dataSource"],["matColumnDef","date"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","item"],["matColumnDef","supplier"],["matColumnDef","amount"],["matColumnDef","pricePerUnit"],["matColumnDef","totalPrice"],["matColumnDef","submittedBy"],["matColumnDef","expandedDetail"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","","class","clickable",3,"click",4,"matRowDef","matRowDefColumns"],["mat-row","","class","hidden-row",4,"matRowDef","matRowDefColumns"],["class","mat-row",4,"matNoDataRow"],["mat-header-cell",""],["mat-cell",""],["fxLayout","row","fxLayoutAlign","space-evenly center",1,"expanded-row"],[1,"expanded-detail"],[2,"margin-bottom","5px"],["fxLayout","row"],["mat-mini-fab","","color","primary","aria-label","Edit",2,"margin-right","4px",3,"click"],["matTooltip","Must be a manager or above to delete",3,"matTooltipDisabled","matTooltipPosition"],["mat-mini-fab","","color","warn","aria-label","Delete",3,"disabled","click"],["mat-header-row",""],["mat-row","",1,"clickable",3,"click"],["mat-row","",1,"hidden-row"],[1,"mat-row"],[1,"mat-cell",3,"colSpan"]],template:function(e,t){1&e&&(u.Sb(0,"div",0),u.zc(1,re,28,5,"table",1),u.Sb(2,"div",2),u.Sb(3,"h5",3),u.Ac(4),u.fc(5,"date"),u.Rb(),u.Nb(6,"mat-paginator",4),u.Rb(),u.Rb()),2&e&&(u.Bb(1),u.kc("appLoading",void 0===t.dataSource||0===t.dataSource.data.length),u.Bb(3),u.Cc("Last updated: ",u.hc(5,4,t.lastUpdated,"short"),""),u.Bb(2),u.kc("pageSizeOptions",u.lc(7,oe))("pageSize",10))},directives:[S.a,S.c,z.a,S.b,r.a,s.k,s.c,s.e,s.b,s.g,s.j,s.h,s.d,s.a,R.b,U.a,O.a,s.f,s.i],pipes:[k.e,N],styles:["table[_ngcontent-%COMP%]{width:100%}.mat-form-field[_ngcontent-%COMP%]{font-size:14px;width:100%}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{width:auto}.mat-cell[_ngcontent-%COMP%]{text-align:left}.clickable[_ngcontent-%COMP%]{cursor:pointer}.hidden-row[_ngcontent-%COMP%]{height:0}.expanded-row[_ngcontent-%COMP%]{overflow:hidden}.expanded-detail[_ngcontent-%COMP%]{padding:10px 0;margin:50px 0}"],data:{animation:[Object(o.n)("detailExpand",[Object(o.k)("collapsed",Object(o.l)({height:"0px",minHeight:"0"})),Object(o.k)("expanded",Object(o.l)({height:"*"})),Object(o.m)("expanded <=> collapsed",Object(o.e)("225ms cubic-bezier(0.4, 0.0, 0.2, 1)"))])]}}),e})();function le(e,t){1&e&&(u.Sb(0,"mat-error"),u.Ac(1," Item is required "),u.Rb())}function ue(e,t){1&e&&(u.Sb(0,"mat-error"),u.Ac(1," Supplier is required "),u.Rb())}function de(e,t){1&e&&(u.Sb(0,"mat-error"),u.Ac(1," Amount is required "),u.Rb())}function be(e,t){if(1&e&&(u.Sb(0,"mat-option",15),u.Ac(1),u.Rb()),2&e){const e=t.$implicit;u.kc("value",e),u.Bb(1),u.Cc(" ",e," ")}}function pe(e,t){1&e&&(u.Sb(0,"mat-error"),u.Ac(1," Price per unit is required "),u.Rb())}function he(e,t){1&e&&(u.Sb(0,"mat-error"),u.Ac(1," Total price is required "),u.Rb())}let me=(()=>{class e{constructor(e,t,a,i,n,s){this.formBuilder=e,this.authService=t,this.expensesService=a,this.snackBar=i,this.dialogRef=n,this.priceCalculatorService=s,this.expensesForm=this.formBuilder.group({item:[void 0,[c.s.required]],supplier:[void 0,[c.s.required]],amount:[void 0,[c.s.required]],unit:[l.Kg],pricePerUnit:[void 0,[c.s.required]],totalPrice:[void 0,[c.s.required]]}),this.onAmountChange=()=>this.priceCalculatorService.onAmountChange(this.expensesForm,this.lastChanged),this.onPricePerUnitChange=()=>this.priceCalculatorService.onPricePerUnitChange(this.expensesForm,this.lastChanged),this.onTotalPriceChange=()=>this.priceCalculatorService.onTotalPriceChange(this.expensesForm,this.lastChanged)}get unitsOfMeasurement(){return Object.values(l)}ngOnInit(){this.authService.userSubject.subscribe(e=>this.loggedInUser=e)}changeLastChanged(e){this.lastChanged=e}submit(){if(this.expensesForm.valid){let e={item:this.expensesForm.value.item,supplier:this.expensesForm.value.supplier,amount:this.expensesForm.value.amount,unit:this.expensesForm.value.unit,pricePerUnit:this.expensesForm.value.pricePerUnit,totalPrice:this.expensesForm.value.totalPrice,dateOfExpense:new Date,submittedBy:this.loggedInUser.name};this.expensesService.addExpense(e).subscribe(e=>{this.snackBar.open(e.msg,"",{panelClass:[e.success?"success-snackbar":"error-snackbar"]}),this.expensesService.toggleRefresh(),this.dialogRef.close()})}}}return e.\u0275fac=function(t){return new(t||e)(u.Mb(c.d),u.Mb(d.a),u.Mb(m),u.Mb(f.b),u.Mb(g.c),u.Mb(x))},e.\u0275cmp=u.Gb({type:e,selectors:[["app-add-expense-form"]],decls:37,vars:7,consts:[["fxFill","","fxLayoutAlign","center center"],["fxLayout","column","fxFlex","100%","fxFlex.gt-md","70%","autocomplete","off",3,"formGroup","ngSubmit"],["matInput","","formControlName","item","type","text"],[4,"ngIf"],["matInput","","formControlName","supplier","type","text"],["fxLayout","row","fxLayoutGap","15px"],["fxFlex",""],["matInput","","formControlName","amount","type","number",3,"focus","ngModelChange"],[1,"auto-width"],["formControlName","unit"],[3,"value",4,"ngFor","ngForOf"],["matInput","","formControlName","pricePerUnit","type","number",3,"focus","ngModelChange"],["matInput","","formControlName","totalPrice","type","number",3,"focus","ngModelChange"],["fxLayoutAlign","center"],["mat-raised-button","","color","primary","type","submit"],[3,"value"]],template:function(e,t){1&e&&(u.Sb(0,"div",0),u.Sb(1,"form",1),u.ac("ngSubmit",(function(){return t.submit()})),u.Sb(2,"h2"),u.Ac(3,"Add a new expense"),u.Rb(),u.Sb(4,"mat-form-field"),u.Sb(5,"mat-label"),u.Ac(6,"Item"),u.Rb(),u.Nb(7,"input",2),u.zc(8,le,2,0,"mat-error",3),u.Rb(),u.Sb(9,"mat-form-field"),u.Sb(10,"mat-label"),u.Ac(11,"Supplier"),u.Rb(),u.Nb(12,"input",4),u.zc(13,ue,2,0,"mat-error",3),u.Rb(),u.Sb(14,"div",5),u.Sb(15,"mat-form-field",6),u.Sb(16,"mat-label"),u.Ac(17,"Amount"),u.Rb(),u.Sb(18,"input",7),u.ac("focus",(function(){return t.changeLastChanged("amount")}))("ngModelChange",(function(){return t.onAmountChange()})),u.Rb(),u.zc(19,de,2,0,"mat-error",3),u.Rb(),u.Sb(20,"div",8),u.Sb(21,"mat-form-field"),u.Sb(22,"mat-select",9),u.zc(23,be,2,2,"mat-option",10),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Sb(24,"mat-form-field"),u.Sb(25,"mat-label"),u.Ac(26,"Price per unit"),u.Rb(),u.Sb(27,"input",11),u.ac("focus",(function(){return t.changeLastChanged("pricePerUnit")}))("ngModelChange",(function(){return t.onPricePerUnitChange()})),u.Rb(),u.zc(28,pe,2,0,"mat-error",3),u.Rb(),u.Sb(29,"mat-form-field"),u.Sb(30,"mat-label"),u.Ac(31,"Total price"),u.Rb(),u.Sb(32,"input",12),u.ac("focus",(function(){return t.changeLastChanged("totalPrice")}))("ngModelChange",(function(){return t.onTotalPriceChange()})),u.Rb(),u.zc(33,he,2,0,"mat-error",3),u.Rb(),u.Sb(34,"div",13),u.Sb(35,"button",14),u.Ac(36,"Submit"),u.Rb(),u.Rb(),u.Rb(),u.Rb()),2&e&&(u.Bb(1),u.kc("formGroup",t.expensesForm),u.Bb(7),u.kc("ngIf",t.expensesForm.get("item").hasError("required")),u.Bb(5),u.kc("ngIf",t.expensesForm.get("supplier").hasError("required")),u.Bb(6),u.kc("ngIf",t.expensesForm.get("amount").hasError("required")),u.Bb(4),u.kc("ngForOf",t.unitsOfMeasurement),u.Bb(5),u.kc("ngIf",t.expensesForm.get("pricePerUnit").hasError("required")),u.Bb(5),u.kc("ngIf",t.expensesForm.get("totalPrice").hasError("required")))},directives:[S.e,S.b,c.t,c.n,S.c,S.a,c.h,v.d,v.g,D.b,c.c,c.m,c.g,k.m,S.d,c.q,C.a,k.l,R.b,v.c,y.o],styles:[".auto-width .mat-form-field,   .auto-width .mat-form-field-infix{width:auto!important}  .auto-width .mat-select-value{max-width:100%;width:auto}"]}),e})();var fe=a("wZkO");let ge=(()=>{class e{constructor(e,t){this.dialog=e,this.router=t,this.dashboardTitle="Expenses Manager"}openAddExpenseFormDialog(){this.dialog.open(me,{width:"500px"})}}return e.\u0275fac=function(t){return new(t||e)(u.Mb(g.a),u.Mb(i.b))},e.\u0275cmp=u.Gb({type:e,selectors:[["app-dashboard"]],decls:13,vars:5,consts:[["mat-button","","color","primary",3,"click"],["aria-label","Add",2,"margin-right","5px"],[1,"mat-h3",2,"display","inline"],["mat-tab-nav-bar",""],["mat-tab-link","",3,"routerLink","active"]],template:function(e,t){1&e&&(u.Sb(0,"h1"),u.Ac(1),u.Rb(),u.Sb(2,"button",0),u.ac("click",(function(){return t.openAddExpenseFormDialog()})),u.Sb(3,"mat-icon",1),u.Ac(4,"library_add"),u.Rb(),u.Sb(5,"div",2),u.Ac(6,"Add a new expense"),u.Rb(),u.Rb(),u.Sb(7,"nav",3),u.Sb(8,"a",4),u.Ac(9,"List of Expenses"),u.Rb(),u.Sb(10,"a",4),u.Ac(11,"Charts"),u.Rb(),u.Rb(),u.Nb(12,"router-outlet")),2&e&&(u.Bb(1),u.Bc(t.dashboardTitle),u.Bb(7),u.kc("routerLink","list-of-expenses")("active",t.router.url.endsWith("list-of-expenses")),u.Bb(2),u.kc("routerLink","charts")("active",t.router.url.endsWith("charts")))},directives:[R.b,U.a,fe.b,i.c,fe.a,i.e],styles:[""]}),e})();var xe=function(e){return e[e.ThisWeek=0]="ThisWeek",e[e.ThisMonth=1]="ThisMonth",e[e.Custom=2]="Custom",e}({}),Se=a("QibW"),ve=a("iadO");let De=(()=>{class e{constructor(e,t){this.formBuilder=e,this.dateService=t,this.startDateEmitter=new u.o,this.endDateEmitter=new u.o,this.today=this.dateService.today(),this.lastWeek=this.dateService.addDays(this.today,-7),this.lastMonth=this.dateService.addDays(this.today,-30),this.datePickerForm=this.formBuilder.group({mode:[xe.ThisWeek],startDate:[{value:this.lastWeek,disabled:!0}],endDate:[{value:this.today,disabled:!0}]}),this.emitStartDateInput=()=>{this.startDateEmitter.emit(this.datePickerForm.get("startDate").value)},this.emitEndDateInput=()=>{this.endDateEmitter.emit(this.datePickerForm.get("endDate").value)}}get datepickerMode(){return xe}ngOnInit(){this.emitStartDateInput(),this.emitEndDateInput()}updateDateRangeAndToggleFormDisable(){switch(this.datePickerForm.get("mode").value){case xe.ThisWeek:this.datePickerForm.patchValue({startDate:this.lastWeek,endDate:this.today}),this.datePickerForm.controls.startDate.disable(),this.datePickerForm.controls.endDate.disable();break;case xe.ThisMonth:this.datePickerForm.patchValue({startDate:this.lastMonth,endDate:this.today}),this.datePickerForm.controls.startDate.disable(),this.datePickerForm.controls.endDate.disable();break;case xe.Custom:this.datePickerForm.controls.startDate.enable(),this.datePickerForm.controls.endDate.enable()}}}return e.\u0275fac=function(t){return new(t||e)(u.Mb(c.d),u.Mb(T))},e.\u0275cmp=u.Gb({type:e,selectors:[["app-datepicker"]],outputs:{startDateEmitter:"startDateEmitter",endDateEmitter:"endDateEmitter"},decls:24,vars:9,consts:[["fxLayout","column"],[3,"formGroup"],["formControlName","mode","aria-label","Select an option","fxLayout","row","fxLayoutGap","10px",2,"margin-left","5px",3,"ngModelChange"],[3,"checked","value"],[3,"value"],["fxLayout","row","fxLayoutAlign","space-evenly"],["matInput","","formControlName","startDate",3,"matDatepicker","ngModelChange"],["matSuffix","",3,"for"],["startDatePicker",""],["matInput","","formControlName","endDate",3,"matDatepicker","ngModelChange"],["endDatePicker",""]],template:function(e,t){if(1&e&&(u.Sb(0,"div",0),u.Sb(1,"form",1),u.Sb(2,"mat-radio-group",2),u.ac("ngModelChange",(function(){return t.updateDateRangeAndToggleFormDisable()})),u.Sb(3,"mat-radio-button",3),u.Ac(4,"This week "),u.Rb(),u.Sb(5,"mat-radio-button",4),u.Ac(6,"This month"),u.Rb(),u.Sb(7,"mat-radio-button",4),u.Ac(8,"Custom"),u.Rb(),u.Rb(),u.Sb(9,"div",5),u.Sb(10,"mat-form-field"),u.Sb(11,"mat-label"),u.Ac(12,"Start date"),u.Rb(),u.Sb(13,"input",6),u.ac("ngModelChange",(function(){return t.emitStartDateInput()})),u.Rb(),u.Nb(14,"mat-datepicker-toggle",7),u.Nb(15,"mat-datepicker",null,8),u.Rb(),u.Sb(17,"mat-form-field"),u.Sb(18,"mat-label"),u.Ac(19,"End date"),u.Rb(),u.Sb(20,"input",9),u.ac("ngModelChange",(function(){return t.emitEndDateInput()})),u.Rb(),u.Nb(21,"mat-datepicker-toggle",7),u.Nb(22,"mat-datepicker",null,10),u.Rb(),u.Rb(),u.Rb(),u.Rb()),2&e){const e=u.pc(16),a=u.pc(23);u.Bb(1),u.kc("formGroup",t.datePickerForm),u.Bb(2),u.kc("checked",t.datePickerForm.get("mode").value===t.datepickerMode.ThisWeek)("value",t.datepickerMode.ThisWeek),u.Bb(2),u.kc("value",t.datepickerMode.ThisMonth),u.Bb(2),u.kc("value",t.datepickerMode.Custom),u.Bb(6),u.kc("matDatepicker",e),u.Bb(1),u.kc("for",e),u.Bb(6),u.kc("matDatepicker",a),u.Bb(1),u.kc("for",a)}},directives:[S.c,c.t,c.n,c.h,Se.b,c.m,c.g,S.d,Se.a,S.b,v.d,v.g,D.b,c.c,ve.b,ve.d,v.h,ve.a],styles:[""]}),e})();var ke=a("LPYB");const Ce=function(){return{borderColor:"black",backgroundColor:"rgba(0,0,0,0)"}},Re=function(e){return[e]};function ye(e,t){if(1&e&&u.Nb(0,"canvas",5),2&e){const e=u.ec(2);u.kc("datasets",e.chartData)("labels",e.chartLabels)("options",e.chartOptions)("colors",u.mc(6,Re,u.lc(5,Ce)))("legend",!1)}}function Ae(e,t){if(1&e&&(u.Sb(0,"div",3),u.zc(1,ye,1,8,"canvas",4),u.Rb()),2&e){const e=u.ec();u.Bb(1),u.kc("ngIf",e.chartData)}}let we=(()=>{class e{constructor(e,t,a){this.expensesService=e,this.dateService=t,this.snackBar=a,this.expensesData=[],this.chartOptions={responsive:!0,scales:{xAxes:[{scaleLabel:{labelString:"Date",display:!0},ticks:{maxTicksLimit:10}}],yAxes:[{scaleLabel:{labelString:"Amount spent",display:!0},ticks:{maxTicksLimit:10,callback:function(e){return(new N).transform(e).toString()}}}]}},this.isLoading=!1,this.listenToStartDate=e=>{this.startDate=e,void 0!==this.endDate&&this.updateChartData()},this.listenToEndDate=e=>{this.endDate=e,void 0!==this.startDate&&this.updateChartData()},this.updateChartData=()=>{this.isLoading||(this.isLoading=!0,this.expensesService.getDailyExpensesInDateRange(this.startDate,this.endDate).subscribe(e=>{e.success?(this.expensesData=e.expenses.sort((e,t)=>new Date(e.date).getTime()-new Date(t.date).getTime()),this.chartData=[{data:this.expensesData.map(e=>e.expense)}],this.chartLabels=this.expensesData.map(e=>new Date(e.date).toLocaleDateString("en-GB"))):this.snackBar.open(e.msg,"",{panelClass:["error-snackbar"]}),this.isLoading=!1}))},this.startDate=this.dateService.addDays(this.dateService.today(),-7),this.endDate=this.dateService.today()}ngOnInit(){this.expensesService.refreshSubject.subscribe(this.updateChartData)}}return e.\u0275fac=function(t){return new(t||e)(u.Mb(m),u.Mb(T),u.Mb(f.b))},e.\u0275cmp=u.Gb({type:e,selectors:[["app-daily-expenses-line-chart"]],decls:3,vars:1,consts:[["fxFlex","","fxLayout","column"],[3,"startDateEmitter","endDateEmitter"],["fxFlex","","fxLayoutAlign","center center",4,"appLoading"],["fxFlex","","fxLayoutAlign","center center"],["baseChart","","chartType","line",3,"datasets","labels","options","colors","legend",4,"ngIf"],["baseChart","","chartType","line",3,"datasets","labels","options","colors","legend"]],template:function(e,t){1&e&&(u.Sb(0,"div",0),u.Sb(1,"app-datepicker",1),u.ac("startDateEmitter",(function(e){return t.listenToStartDate(e)}))("endDateEmitter",(function(e){return t.listenToEndDate(e)})),u.Rb(),u.zc(2,Ae,2,1,"div",2),u.Rb()),2&e&&(u.Bb(2),u.kc("appLoading",t.isLoading))},directives:[S.a,S.c,De,z.a,S.b,k.m,ke.a],styles:[""]}),e})();function Pe(e,t){if(1&e&&u.Nb(0,"canvas",5),2&e){const e=u.ec(2);u.kc("datasets",e.chartData)("labels",e.chartLabels)("options",e.chartOptions)("legend",!1)}}function Be(e,t){if(1&e&&(u.Sb(0,"div",3),u.zc(1,Pe,1,4,"canvas",4),u.Rb()),2&e){const e=u.ec();u.Bb(1),u.kc("ngIf",e.chartData)}}let Me=(()=>{class e{constructor(e,t,a){this.expensesService=e,this.snackBar=t,this.dateService=a,this.expensesData=[],this.datasetSubject=new h.a(this.expensesData),this.chartData=[{data:this.expensesData.map(e=>e.expense)}],this.chartLabels=this.expensesData.map(e=>e.item),this.chartOptions={responsive:!0,scales:{xAxes:[{scaleLabel:{labelString:"Item",display:!0}}],yAxes:[{scaleLabel:{labelString:"Amount spent",display:!0},ticks:{beginAtZero:!0,maxTicksLimit:10,callback:e=>(new N).transform(e)}}]}},this.listenToStartDate=e=>{this.startDate=e,this.updateChartData()},this.listenToEndDate=e=>{this.endDate=e,this.updateChartData()},this.isLoading=!1,this.updateChartData=()=>{this.isLoading||(this.isLoading=!0,this.expensesData=[],this.expensesService.findAllDistinctItems(this.startDate,this.endDate).subscribe(e=>{e.success?(0===e.items.length&&this.datasetSubject.next(this.expensesData),e.items.forEach(this.updateItemData),this.isLoading=!1):(this.snackBar.open(e.msg,"",{panelClass:["error-snackbar"]}),this.datasetSubject.next(this.expensesData),this.isLoading=!1)}))},this.updateItemData=e=>{this.expensesService.getExpensesByItem(e,this.startDate,this.endDate).subscribe(t=>{if(t.success){let a=this.expensesData.map(e=>e.item).indexOf(e);-1==a?this.expensesData.push({item:e,expense:t.expense}):this.expensesData[a].expense!=t.expense&&(this.expensesData[a].expense=t.expense)}else this.snackBar.open(t.msg,"",{panelClass:["error-snackbar"]});this.datasetSubject.next(this.expensesData)})},this.startDate=this.dateService.addDays(this.dateService.today(),-7),this.endDate=this.dateService.today()}ngOnInit(){this.datasetSubject.asObservable().subscribe(()=>{this.chartData=[{data:this.expensesData.map(e=>e.expense),backgroundColor:this.expensesData.map(e=>e.expense>1e6?"rgba(200,0,0,0.3)":"rgba(34,139,34,0.3)")}],this.chartLabels=this.expensesData.map(e=>e.item)}),this.expensesService.refreshSubject.subscribe(this.updateChartData)}}return e.\u0275fac=function(t){return new(t||e)(u.Mb(m),u.Mb(f.b),u.Mb(T))},e.\u0275cmp=u.Gb({type:e,selectors:[["app-expenses-by-item"]],decls:3,vars:1,consts:[["fxFlex","","fxLayout","column"],[3,"startDateEmitter","endDateEmitter"],["fxFlex","","fxLayoutAlign","center center",4,"appLoading"],["fxFlex","","fxLayoutAlign","center center"],["baseChart","","chartType","bar",3,"datasets","labels","options","legend",4,"ngIf"],["baseChart","","chartType","bar",3,"datasets","labels","options","legend"]],template:function(e,t){1&e&&(u.Sb(0,"div",0),u.Sb(1,"app-datepicker",1),u.ac("startDateEmitter",(function(e){return t.listenToStartDate(e)}))("endDateEmitter",(function(e){return t.listenToEndDate(e)})),u.Rb(),u.zc(2,Be,2,1,"div",2),u.Rb()),2&e&&(u.Bb(2),u.kc("appLoading",t.isLoading))},directives:[S.a,S.c,De,z.a,S.b,k.m,ke.a],styles:[""]}),e})();const Fe=[{path:"",component:ge,children:[{path:"list-of-expenses",component:ce},{path:"charts",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u.Gb({type:e,selectors:[["app-expenses-charts"]],decls:2,vars:0,consts:[[2,"width","40vw"]],template:function(e,t){1&e&&(u.Nb(0,"app-daily-expenses-line-chart",0),u.Nb(1,"app-expenses-by-item",0))},directives:[we,Me],styles:[""]}),e})()},{path:"",pathMatch:"full",redirectTo:"list-of-expenses"},{path:"**",component:n.a}]}];let Ie=(()=>{class e{}return e.\u0275mod=u.Kb({type:e}),e.\u0275inj=u.Jb({factory:function(t){return new(t||e)},imports:[[i.d.forChild(Fe)],i.d]}),e})();var Le=a("PCNd");let Ee=(()=>{class e{static forRoot(){return{ngModule:e}}}return e.\u0275mod=u.Kb({type:e}),e.\u0275inj=u.Jb({factory:function(t){return new(t||e)},imports:[[Le.a.forRoot(),Ie]]}),e})()}}]);