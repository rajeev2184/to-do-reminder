import './polyfills.server.mjs';
import{A as oe,B as H,C as h,D as E,E as u,F as L,G as se,H as ae,I as le,J as $,K as w,M as ue,R as de,T as ce,U as he,V as W,X as fe,Y as pe,Z as ge,a as J,aa as me,b as Q,c as ee,d as k,e as T,f as p,g as D,ga as _e,h as b,i as G,j as g,k as te,l as ie,m as A,n as M,o as ne,p as j,q as F,r as m,s,t as R,u as v,v as B,w as U,x as re,y as a,z as l}from"./chunk-ERGAZJJZ.mjs";import{a as c,b as f}from"./chunk-VVCT4QZE.mjs";var Fe=(()=>{class t{constructor(i,n){this._renderer=i,this._elementRef=n,this.onChange=r=>{},this.onTouched=()=>{}}setProperty(i,n){this._renderer.setProperty(this._elementRef.nativeElement,i,n)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}static{this.\u0275fac=function(n){return new(n||t)(s(R),s(j))}}static{this.\u0275dir=g({type:t})}}return t})(),Le=(()=>{class t extends Fe{static{this.\u0275fac=(()=>{let i;return function(r){return(i||(i=ne(t)))(r||t)}})()}static{this.\u0275dir=g({type:t,features:[v]})}}return t})(),Ee=new p("");var $e={provide:Ee,useExisting:k(()=>N),multi:!0};function We(){let t=W()?W().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var qe=new p(""),N=(()=>{class t extends Fe{constructor(i,n,r){super(i,n),this._compositionMode=r,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!We())}writeValue(i){let n=i??"";this.setProperty("value",n)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}static{this.\u0275fac=function(n){return new(n||t)(s(R),s(j),s(qe,8))}}static{this.\u0275dir=g({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){n&1&&h("input",function(d){return r._handleInput(d.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(d){return r._compositionEnd(d.target.value)})},features:[$([$e]),v]})}}return t})();var ze=new p(""),Ze=new p("");function we(t){return t!=null}function Ie(t){return ue(t)?J(t):t}function Se(t){let e={};return t.forEach(i=>{e=i!=null?c(c({},e),i):e}),Object.keys(e).length===0?null:e}function xe(t,e){return e.map(i=>i(t))}function Xe(t){return!t.validate}function Ne(t){return t.map(e=>Xe(e)?e:i=>e.validate(i))}function Ye(t){if(!t)return null;let e=t.filter(we);return e.length==0?null:function(i){return Se(xe(i,e))}}function Oe(t){return t!=null?Ye(Ne(t)):null}function Ke(t){if(!t)return null;let e=t.filter(we);return e.length==0?null:function(i){let n=xe(i,e).map(Ie);return ee(n).pipe(Q(Se))}}function Pe(t){return t!=null?Ke(Ne(t)):null}function ve(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function Je(t){return t._rawValidators}function Qe(t){return t._rawAsyncValidators}function q(t){return t?Array.isArray(t)?t:[t]:[]}function S(t,e){return Array.isArray(t)?t.includes(e):t===e}function ye(t,e){let i=q(e);return q(t).forEach(r=>{S(i,r)||i.push(r)}),i}function Ce(t,e){return q(e).filter(i=>!S(t,i))}var x=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Oe(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Pe(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,i){return this.control?this.control.hasError(e,i):!1}getError(e,i){return this.control?this.control.getError(e,i):null}},z=class extends x{get formDirective(){return null}get path(){return null}},V=class extends x{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},Z=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},et={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},$t=f(c({},et),{"[class.ng-submitted]":"isSubmitted"}),ke=(()=>{class t extends Z{constructor(i){super(i)}static{this.\u0275fac=function(n){return new(n||t)(s(V,2))}}static{this.\u0275dir=g({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){n&2&&re("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[v]})}}return t})();var y="VALID",I="INVALID",_="PENDING",C="DISABLED";function tt(t){return(O(t)?t.validators:t)||null}function it(t){return Array.isArray(t)?Oe(t):t||null}function nt(t,e){return(O(e)?e.asyncValidators:t)||null}function rt(t){return Array.isArray(t)?Pe(t):t||null}function O(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}var X=class{constructor(e,i){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(i)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===y}get invalid(){return this.status===I}get pending(){return this.status==_}get disabled(){return this.status===C}get enabled(){return this.status!==C}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(ye(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(ye(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Ce(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Ce(e,this._rawAsyncValidators))}hasValidator(e){return S(this._rawValidators,e)}hasAsyncValidator(e){return S(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(i=>{i.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=_,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=C,this.errors=null,this._forEachChild(n=>{n.disable(f(c({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(f(c({},e),{skipPristineCheck:i})),this._onDisabledChange.forEach(n=>n(!0))}enable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=y,this._forEachChild(n=>{n.enable(f(c({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(f(c({},e),{skipPristineCheck:i})),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===y||this.status===_)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(i=>i._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?C:y}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=_,this._hasOwnPendingAsyncValidator=!0;let i=Ie(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(n=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(n,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,i={}){this.errors=e,this._updateControlsErrors(i.emitEvent!==!1)}get(e){let i=e;return i==null||(Array.isArray(i)||(i=i.split(".")),i.length===0)?null:i.reduce((n,r)=>n&&n._find(r),this)}getError(e,i){let n=i?this.get(i):this;return n&&n.errors?n.errors[e]:null}hasError(e,i){return!!this.getError(e,i)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new F,this.statusChanges=new F}_calculateStatus(){return this._allControlsDisabled()?C:this.errors?I:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(_)?_:this._anyControlsHaveStatus(I)?I:y}_anyControlsHaveStatus(e){return this._anyControls(i=>i.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){O(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let i=this._parent&&this._parent.dirty;return!e&&!!i&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=it(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=rt(this._rawAsyncValidators)}};var Te=new p("CallSetDisabledState",{providedIn:"root",factory:()=>Y}),Y="always";function ot(t,e){return[...e.path,t]}function st(t,e,i=Y){lt(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||i==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),ut(t,e),ct(t,e),dt(t,e),at(t,e)}function Ve(t,e){t.forEach(i=>{i.registerOnValidatorChange&&i.registerOnValidatorChange(e)})}function at(t,e){if(e.valueAccessor.setDisabledState){let i=n=>{e.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(i),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(i)})}}function lt(t,e){let i=Je(t);e.validator!==null?t.setValidators(ve(i,e.validator)):typeof i=="function"&&t.setValidators([i]);let n=Qe(t);e.asyncValidator!==null?t.setAsyncValidators(ve(n,e.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let r=()=>t.updateValueAndValidity();Ve(e._rawValidators,r),Ve(e._rawAsyncValidators,r)}function ut(t,e){e.valueAccessor.registerOnChange(i=>{t._pendingValue=i,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&Ge(t,e)})}function dt(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&Ge(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function Ge(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function ct(t,e){let i=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};t.registerOnChange(i),e._registerOnDestroy(()=>{t._unregisterOnChange(i)})}function ht(t,e){if(!t.hasOwnProperty("model"))return!1;let i=t.model;return i.isFirstChange()?!0:!Object.is(e,i.currentValue)}function ft(t){return Object.getPrototypeOf(t.constructor)===Le}function pt(t,e){if(!e)return null;Array.isArray(e);let i,n,r;return e.forEach(o=>{o.constructor===N?i=o:ft(o)?n=o:r=o}),r||n||i||null}function De(t,e){let i=t.indexOf(e);i>-1&&t.splice(i,1)}function be(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var gt=class extends X{constructor(e=null,i,n){super(tt(i),nt(n,i)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(i),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),O(i)&&(i.nonNullable||i.initialValueIsDefault)&&(be(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,i={}){this.value=this._pendingValue=e,this._onChange.length&&i.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,i.emitViewToModelChange!==!1)),this.updateValueAndValidity(i)}patchValue(e,i={}){this.setValue(e,i)}reset(e=this.defaultValue,i={}){this._applyFormState(e),this.markAsPristine(i),this.markAsUntouched(i),this.setValue(this.value,i),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){De(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){De(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){be(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var mt={provide:V,useExisting:k(()=>K)},Ae=Promise.resolve(),K=(()=>{class t extends V{constructor(i,n,r,o,d,He){super(),this._changeDetectorRef=d,this.callSetDisabledState=He,this.control=new gt,this._registered=!1,this.name="",this.update=new F,this._parent=i,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=pt(this,o)}ngOnChanges(i){if(this._checkForErrors(),!this._registered||"name"in i){if(this._registered&&(this._checkName(),this.formDirective)){let n=i.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in i&&this._updateDisabled(i),ht(i,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){st(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(i){Ae.then(()=>{this.control.setValue(i,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(i){let n=i.isDisabled.currentValue,r=n!==0&&ce(n);Ae.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(i){return this._parent?ot(i,this._parent):[i]}static{this.\u0275fac=function(n){return new(n||t)(s(z,9),s(ze,10),s(Ze,10),s(Ee,10),s(de,8),s(Te,8))}}static{this.\u0275dir=g({type:t,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[D.None,"disabled","isDisabled"],model:[D.None,"ngModel","model"],options:[D.None,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[$([mt]),v,ie]})}}return t})();var _t=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275mod=G({type:t})}static{this.\u0275inj=T({})}}return t})();var P=(()=>{class t{static withConfig(i){return{ngModule:t,providers:[{provide:Te,useValue:i.callSetDisabledState??Y}]}}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275mod=G({type:t})}static{this.\u0275inj=T({imports:[_t]})}}return t})();function yt(t,e){if(t&1){let i=H();a(0,"div",8)(1,"span"),u(2),l(),a(3,"div",9)(4,"button",10),h("click",function(){let r=A(i).$implicit,o=E();return M(o.completeActivity(r))}),u(5,"Complete"),l(),a(6,"button",11),h("click",function(){let r=A(i).$implicit,o=E();return M(o.deleteActivity(r))}),u(7,"Delete"),l()()()}if(t&2){let i=e.$implicit;m(2),L(i)}}function Ct(t,e){if(t&1){let i=H();a(0,"div",8)(1,"span"),u(2),l(),a(3,"button",11),h("click",function(){let r=A(i).$implicit,o=E();return M(o.deleteCompletedActivity(r))}),u(4,"Delete"),l()()}if(t&2){let i=e.$implicit;m(2),L(i)}}var je=(()=>{class t{constructor(){this.newActivity="",this.activeActivities=[],this.completedActivities=[]}addActivity(){this.newActivity.trim()&&(this.activeActivities.push(this.newActivity),this.newActivity="")}completeActivity(i){this.activeActivities=this.activeActivities.filter(n=>n!==i),this.completedActivities.push(i)}deleteActivity(i){this.activeActivities=this.activeActivities.filter(n=>n!==i)}deleteCompletedActivity(i){this.completedActivities=this.completedActivities.filter(n=>n!==i)}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=b({type:t,selectors:[["app-todo"]],standalone:!0,features:[w],decls:17,vars:3,consts:[[1,"container"],[1,"add-activity"],["type","text","placeholder","Add new activity...",3,"ngModelChange","ngModel"],[1,"add-btn",3,"click"],[1,"section"],[1,"activities"],["class","activity-item",4,"ngFor","ngForOf"],[1,"section","completed-section"],[1,"activity-item"],[1,"activity-buttons"],[1,"complete-btn",3,"click"],[1,"delete-btn",3,"click"]],template:function(n,r){n&1&&(a(0,"div",0)(1,"h1"),u(2,"To-Do List"),l(),a(3,"div",1)(4,"input",2),le("ngModelChange",function(d){return ae(r.newActivity,d)||(r.newActivity=d),d}),l(),a(5,"button",3),h("click",function(){return r.addActivity()}),u(6,"Add"),l()(),a(7,"div",4)(8,"h2"),u(9,"Active Activities"),l(),a(10,"div",5),B(11,yt,8,1,"div",6),l()(),a(12,"div",7)(13,"h2"),u(14,"Completed Activities"),l(),a(15,"div",5),B(16,Ct,5,1,"div",6),l()()()),n&2&&(m(4),se("ngModel",r.newActivity),m(7),U("ngForOf",r.activeActivities),m(5),U("ngForOf",r.completedActivities))},dependencies:[P,N,ke,K,pe,fe],styles:[".container[_ngcontent-%COMP%]{width:60%;margin:0 auto;font-family:Arial,sans-serif}h1[_ngcontent-%COMP%]{text-align:center;font-size:3rem;font-weight:700;margin-bottom:20px}.add-activity[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-bottom:20px}input[_ngcontent-%COMP%]{padding:10px;font-size:1rem;width:50%;border:1px solid #ccc;border-radius:4px;margin-right:10px}button.add-btn[_ngcontent-%COMP%]{padding:10px 20px;font-size:1rem;background-color:#007bff;color:#fff;border:none;border-radius:4px;cursor:pointer}.section[_ngcontent-%COMP%]{background-color:#f9f9f9;border:1px solid #e0e0e0;border-radius:10px;padding:20px;margin-bottom:30px;box-shadow:0 4px 8px #0000001a}.section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:2rem;font-weight:700;border-bottom:2px solid #007bff;padding-bottom:10px;margin-bottom:20px;text-align:left}.activities[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px}.activity-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:10px;background-color:#fff;border-radius:6px;box-shadow:0 2px 4px #0000000d;font-size:1.2rem}.activity-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{flex-grow:1}.activity-buttons[_ngcontent-%COMP%]{display:flex;gap:10px}button.complete-btn[_ngcontent-%COMP%], button.delete-btn[_ngcontent-%COMP%]{padding:8px 15px;font-size:1rem;background-color:#007bff;color:#fff;border:none;border-radius:4px;cursor:pointer}button.complete-btn[_ngcontent-%COMP%]{background-color:#28a745}button.delete-btn[_ngcontent-%COMP%]{background-color:#dc3545}.completed-section[_ngcontent-%COMP%]{background-color:#fff8e1}.completed-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#ff9800;border-bottom:2px solid #ff9800}"]})}}return t})();var Re=(()=>{class t{constructor(){this.title="todo-list-app"}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=b({type:t,selectors:[["app-root"]],standalone:!0,features:[w],decls:1,vars:0,template:function(n,r){n&1&&oe(0,"app-todo")},dependencies:[je]})}}return t})();var Be={providers:[_e([]),te(P)]};var Vt={providers:[me()]},Ue=he(Be,Vt);var Dt=()=>ge(Re,Ue),di=Dt;export{di as a};