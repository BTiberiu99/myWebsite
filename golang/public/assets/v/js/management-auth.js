(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{b2c5:function(r,e,t){"use strict";t.r(e);var o=function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("q-page",{staticClass:"window-height window-width row justify-center items-center",staticStyle:{background:"linear-gradient(#8274C5, #5A4A9F)"}},[t("div",{staticClass:"column q-pa-lg"},[t("div",{staticClass:"row"},[t("q-card",{staticClass:"shadow-24",staticStyle:{width:"300px",height:"650px"},attrs:{square:""}},[t("q-card-section",{staticClass:"bg-deep-purple-7"},[t("h4",{staticClass:"text-h5 text-white q-my-md"},[r._v("Company & Co")]),t("div",{staticClass:"absolute-bottom-right q-pr-md",staticStyle:{transform:"translateY(50%)"}},[t("q-btn",{attrs:{fab:"",icon:"add",color:"purple-4"}})],1)]),t("q-card-section",[t("q-form",{ref:"elFormLogin",staticClass:"q-px-sm q-pt-xl",attrs:{greedy:""}},[t("q-input",{attrs:{square:"",clearable:"",type:"email",label:"Email",error:Boolean(r.formLoginErrors.email).valueOf(),"error-message":r.formLoginErrors.email,rules:r.formLoginRules.email},scopedSlots:r._u([{key:"prepend",fn:function(){return[t("q-icon",{attrs:{name:"email"}})]},proxy:!0}]),model:{value:r.formLogin.email,callback:function(e){r.$set(r.formLogin,"email",e)},expression:"formLogin.email"}}),t("q-input",{attrs:{square:"",clearable:"",type:"password",label:"Password",error:Boolean(r.formLoginErrors.password).valueOf(),"error-message":r.formLoginErrors.password,rules:r.formLoginRules.password},scopedSlots:r._u([{key:"prepend",fn:function(){return[t("q-icon",{attrs:{name:"lock"}})]},proxy:!0}]),model:{value:r.formLogin.password,callback:function(e){r.$set(r.formLogin,"password",e)},expression:"formLogin.password"}})],1)],1),t("q-card-section",[t("div",{staticClass:"text-center q-pa-md q-gutter-md"},[t("q-btn",{attrs:{round:"",color:"indigo-7",disabled:r.isLoading}},[t("q-icon",{attrs:{name:"fab fa-facebook-f",size:"1.2rem"}})],1),t("q-btn",{attrs:{round:"",color:"red-8",disabled:r.isLoading}},[t("q-icon",{attrs:{name:"fab fa-google",size:"1.2rem"}})],1)],1)]),t("q-card-actions",{staticClass:"q-px-lg"},[t("q-btn",{staticClass:"full-width text-white",attrs:{unelevated:"",size:"lg",color:"purple-4",label:"Sign In",loading:r.isLoading,disabled:r.isLoading},on:{click:r.login}})],1),t("q-card-section",{staticClass:"text-center q-pa-sm"},[t("p",{staticClass:"text-grey-6"},[r._v("Forgot your password?")])])],1)],1)]),t("div",{staticClass:"column q-pa-lg"},[t("div",{staticClass:"row"},[t("q-card",{staticClass:"shadow-24",staticStyle:{width:"300px",height:"650px"},attrs:{square:""}},[t("q-card-section",{staticClass:"bg-deep-purple-7"},[t("h4",{staticClass:"text-h5 text-white q-my-md"},[r._v("Registration")]),t("div",{staticClass:"absolute-bottom-right q-pr-md",staticStyle:{transform:"translateY(50%)"}},[t("q-btn",{attrs:{fab:"",icon:"close",color:"purple-4"}})],1)]),t("q-card-section",[t("q-form",{ref:"elForm",staticClass:"q-px-sm q-pt-xl q-pb-lg",attrs:{greedy:""}},[t("q-input",{attrs:{square:"",clearable:"",type:"email",label:"Email",error:Boolean(r.formErrors.email).valueOf(),"error-message":r.formErrors.email,rules:r.formRules.email},scopedSlots:r._u([{key:"prepend",fn:function(){return[t("q-icon",{attrs:{name:"email"}})]},proxy:!0}]),model:{value:r.form.email,callback:function(e){r.$set(r.form,"email",e)},expression:"form.email"}}),t("q-input",{attrs:{square:"",clearable:"",type:"name",label:"Name",error:Boolean(r.formErrors.name).valueOf(),"error-message":r.formErrors.name,rules:r.formRules.name},scopedSlots:r._u([{key:"prepend",fn:function(){return[t("q-icon",{attrs:{name:"person"}})]},proxy:!0}]),model:{value:r.form.name,callback:function(e){r.$set(r.form,"name",e)},expression:"form.name"}}),t("q-input",{attrs:{square:"",clearable:"",type:"surname",label:"Surname",error:Boolean(r.formErrors.surname).valueOf(),"error-message":r.formErrors.surname,rules:r.formRules.surname},scopedSlots:r._u([{key:"prepend",fn:function(){return[t("q-icon",{attrs:{name:"person"}})]},proxy:!0}]),model:{value:r.form.surname,callback:function(e){r.$set(r.form,"surname",e)},expression:"form.surname"}}),t("q-input",{attrs:{square:"",clearable:"",type:"password",label:"Password",error:Boolean(r.formErrors.password).valueOf(),"error-message":r.formErrors.password,rules:r.formRules.password},scopedSlots:r._u([{key:"prepend",fn:function(){return[t("q-icon",{attrs:{name:"lock"}})]},proxy:!0}]),model:{value:r.form.password,callback:function(e){r.$set(r.form,"password",e)},expression:"form.password"}}),t("q-input",{attrs:{square:"",clearable:"",type:"password",label:"Password Confirmation",error:Boolean(r.formErrors.password_confirmation).valueOf(),"error-message":r.formErrors.password_confirmation,rules:r.formRules.password_confirmation(r.form,"password")},scopedSlots:r._u([{key:"prepend",fn:function(){return[t("q-icon",{attrs:{name:"lock"}})]},proxy:!0}]),model:{value:r.form.password_confirmation,callback:function(e){r.$set(r.form,"password_confirmation",e)},expression:"form.password_confirmation"}})],1)],1),t("q-card-actions",{staticClass:"q-px-lg"},[t("q-btn",{staticClass:"full-width text-white",attrs:{unelevated:"",size:"lg",color:"purple-4",label:"Get Started",loading:r.isLoading,disabled:r.isLoading},on:{click:r.register}})],1)],1)],1)])])},a=[],s=t("750b"),n=t("0613"),i=function(){return i=Object.assign||function(r){for(var e,t=1,o=arguments.length;t<o;t++)for(var a in e=arguments[t],e)Object.prototype.hasOwnProperty.call(e,a)&&(r[a]=e[a]);return r},i.apply(this,arguments)},l=function(r,e,t,o){function a(r){return r instanceof t?r:new t((function(e){e(r)}))}return new(t||(t=Promise))((function(t,s){function n(r){try{l(o.next(r))}catch(e){s(e)}}function i(r){try{l(o["throw"](r))}catch(e){s(e)}}function l(r){r.done?t(r.value):a(r.value).then(n,i)}l((o=o.apply(r,e||[])).next())}))},c=function(r,e){var t,o,a,s,n={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return s={next:i(0),throw:i(1),return:i(2)},"function"===typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function i(r){return function(e){return l([r,e])}}function l(s){if(t)throw new TypeError("Generator is already executing.");while(n)try{if(t=1,o&&(a=2&s[0]?o["return"]:s[0]?o["throw"]||((a=o["return"])&&a.call(o),0):o.next)&&!(a=a.call(o,s[1])).done)return a;switch(o=0,a&&(s=[2&s[0],a.value]),s[0]){case 0:case 1:a=s;break;case 4:return n.label++,{value:s[1],done:!1};case 5:n.label++,o=s[1],s=[0];continue;case 7:s=n.ops.pop(),n.trys.pop();continue;default:if(a=n.trys,!(a=a.length>0&&a[a.length-1])&&(6===s[0]||2===s[0])){n=0;continue}if(3===s[0]&&(!a||s[1]>a[0]&&s[1]<a[3])){n.label=s[1];break}if(6===s[0]&&n.label<a[1]){n.label=a[1],a=s;break}if(a&&n.label<a[2]){n.label=a[2],n.ops.push(s);break}a[2]&&n.ops.pop(),n.trys.pop();continue}s=e.call(r,n)}catch(i){s=[6,i],o=0}finally{t=a=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}},u=Object(n["a"])("user").mapMutations,m={email:"",name:"",surname:"",password:"",password_confirmation:""},f={email:"",password:""},p={email:[function(r){return/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(r)||"The email is invalid"}],name:[function(r){return r.length>3||"Name minimum length is 3"}],surname:[function(r){return r.length>3||"Surname minimum length is 3"}],password:[function(r){return/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})/.test(r)||"The password is not strong enough"}],password_confirmation:function(r,e){return[function(t){return t===r[e]||"Password does not match confirmation"}]}},d=Object(s["c"])({name:"Login",setup:function(r,e){var t=this,o=Object(s["e"])({isLoading:!1,form:i({},m),formRules:p,formErrors:i({},m),formLogin:i({},f),formLoginErrors:i({},f),formLoginRules:{email:p.email,password:p.password}}),a=Object(s["f"])(null),n=Object(s["f"])(null),d=e.root,g=d.axios,b=d.$utils,w=d.$router,h=u(["SET_USER"]).SET_USER,q=function(){b.request({vm:o,call:function(){return l(t,void 0,void 0,(function(){var r;return c(this,(function(e){switch(e.label){case 0:return r=!a.value,r?[3,2]:[4,a.value.validate()];case 1:r=!e.sent(),e.label=2;case 2:return r?[2]:[4,g.post("/api/users",o.form)];case 3:return e.sent().data,o.formErrors=i({},m),w.push({path:"/dashboard"}),[2]}}))}))}})},v=function(){b.request({vm:o,call:function(){return l(t,void 0,void 0,(function(){var r,e;return c(this,(function(t){switch(t.label){case 0:return r=!n.value,r?[3,2]:[4,n.value.validate()];case 1:r=!t.sent(),t.label=2;case 2:return r?[2]:[4,g.post("/api/login",o.formLogin)];case 3:return e=t.sent().data,"undefined"!==typeof e&&h(e.data),o.formLoginErrors=i({},f),w.push({path:"/dashboard"}),[2]}}))}))}})};return i({login:v,register:q,elForm:a,elFormLogin:n},Object(s["g"])(o))}}),g=d,b=t("2877"),w=Object(b["a"])(g,o,a,!1,null,null,null);e["default"]=w.exports}}]);