(self.webpackChunkangular_storybook=self.webpackChunkangular_storybook||[]).push([[730],{"./node_modules/@storybook/angular/dist/client/argsToTemplate.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.argsToTemplate=void 0,exports.argsToTemplate=function argsToTemplate(args,options={}){const includeSet=options.include?new Set(options.include):null,excludeSet=options.exclude?new Set(options.exclude):null;return Object.entries(args).filter((([key])=>void 0!==args[key])).filter((([key])=>includeSet?includeSet.has(key):!excludeSet||!excludeSet.has(key))).map((([key,value])=>"function"==typeof value?`(${key})="${key}($event)"`:`[${key}]="${key}"`)).join(" ")}},"./node_modules/@storybook/angular/dist/client/decorators.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.componentWrapperDecorator=exports.applicationConfig=exports.moduleMetadata=void 0;const ComputesTemplateFromComponent_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/ComputesTemplateFromComponent.js"),NgComponentAnalyzer_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/utils/NgComponentAnalyzer.js");exports.moduleMetadata=metadata=>storyFn=>{const story=storyFn(),storyMetadata=story.moduleMetadata||{};return metadata=metadata||{},{...story,moduleMetadata:{declarations:[...metadata.declarations||[],...storyMetadata.declarations||[]],entryComponents:[...metadata.entryComponents||[],...storyMetadata.entryComponents||[]],imports:[...metadata.imports||[],...storyMetadata.imports||[]],schemas:[...metadata.schemas||[],...storyMetadata.schemas||[]],providers:[...metadata.providers||[],...storyMetadata.providers||[]]}}},exports.applicationConfig=function applicationConfig(config){return storyFn=>{const story=storyFn(),storyConfig=story.applicationConfig;return{...story,applicationConfig:storyConfig||config?{...config,...storyConfig,providers:[...config?.providers||[],...storyConfig?.providers||[]]}:void 0}}};exports.componentWrapperDecorator=(element,props)=>(storyFn,storyContext)=>{const story=storyFn(),currentProps="function"==typeof props?props(storyContext):props,template=(0,NgComponentAnalyzer_1.isComponent)(element)?(0,ComputesTemplateFromComponent_1.computesTemplateFromComponent)(element,currentProps??{},story.template):element(story.template);return{...story,template,...currentProps||story.props?{props:{...currentProps,...story.props}}:{}}}},"./node_modules/@storybook/angular/dist/client/index.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.argsToTemplate=exports.applicationConfig=exports.componentWrapperDecorator=exports.moduleMetadata=void 0,__webpack_require__("./node_modules/@storybook/angular/dist/client/globals.js"),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);var decorators_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/decorators.js");Object.defineProperty(exports,"moduleMetadata",{enumerable:!0,get:function(){return decorators_1.moduleMetadata}}),Object.defineProperty(exports,"componentWrapperDecorator",{enumerable:!0,get:function(){return decorators_1.componentWrapperDecorator}}),Object.defineProperty(exports,"applicationConfig",{enumerable:!0,get:function(){return decorators_1.applicationConfig}});var argsToTemplate_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/argsToTemplate.js");Object.defineProperty(exports,"argsToTemplate",{enumerable:!0,get:function(){return argsToTemplate_1.argsToTemplate}})},"./node_modules/@storybook/angular/dist/client/public-types.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0})},"./node_modules/@storybook/angular/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var _client_index__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/client/index.js");__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"applicationConfig")&&__webpack_require__.d(__webpack_exports__,{applicationConfig:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.applicationConfig}}),__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"moduleMetadata")&&__webpack_require__.d(__webpack_exports__,{moduleMetadata:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata}})},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./src/stories/toast.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>toast_stories});var dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),animations=__webpack_require__("./node_modules/@angular/platform-browser/fesm2022/animations.mjs"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var toast_componentngResource=__webpack_require__("./src/app/components/toast/toast.component.scss?ngResource"),toast_componentngResource_default=__webpack_require__.n(toast_componentngResource);var toast_container_componentngResource=__webpack_require__("./src/app/components/toast-container/toast-container.component.scss?ngResource"),toast_container_componentngResource_default=__webpack_require__.n(toast_container_componentngResource);let ToastContainerComponent=class ToastContainerComponent{};ToastContainerComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"app-toast-container",template:"<p>toast-container works!</p>\n",styles:[toast_container_componentngResource_default()]})],ToastContainerComponent);let ToastService=class ToastService{constructor(appRef,componentFactoryResolver,injector){this.appRef=appRef,this.componentFactoryResolver=componentFactoryResolver,this.injector=injector,this.toastContainerRef=null}createToastContainer(){if(this.toastContainerRef)return;const componentRef=this.componentFactoryResolver.resolveComponentFactory(ToastContainerComponent).create(this.injector);this.appRef.attachView(componentRef.hostView);const domElem=componentRef.hostView.rootNodes[0];document.body.appendChild(domElem),this.toastContainerRef=componentRef}showToast(message,type,duration=3e3){this.createToastContainer(),this.toastContainerRef&&this.toastContainerRef.instance.addToast(message,type,duration)}removeToast(toastComponent){this.toastContainerRef?.instance.removeToast(toastComponent)}static#_=this.ctorParameters=()=>[{type:core.ApplicationRef},{type:core.ComponentFactoryResolver},{type:core.Injector}]};ToastService=(0,tslib_es6.gn)([(0,core.Injectable)({providedIn:"root"})],ToastService);let ToastComponent=class ToastComponent{constructor(toastService){this.toastService=toastService,this.content=null,this.type="info",this.duration=3e3}ngOnInit(){}ngOnDestroy(){console.log("Toast destroyed")}static#_=this.ctorParameters=()=>[{type:ToastService}];static#_2=this.propDecorators={content:[{type:core.Input}],type:[{type:core.Input}],duration:[{type:core.Input}]}};ToastComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"app-toast",template:'<link rel="preconnect" href="https://fonts.googleapis.com">\n<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">\n<div class="notification">\n  <div class="notification__body">\n    <img src="assets/check-circle.svg" alt="Success" class="notification__icon">\n    Your account has been created! &#128640;\n  </div>\n  <div class="notification__progress"></div>\n</div>\n',styles:[toast_componentngResource_default()]})],ToastComponent);const toast_stories={title:"Feedback-Components/Toast",component:ToastComponent,tags:["autodocs"],decorators:[(0,dist.applicationConfig)({providers:[(0,core.importProvidersFrom)(animations.BrowserAnimationsModule)]})]},Default={args:{}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./src/app/components/toast-container/toast-container.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/app/components/toast/toast.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,':root {\n  --notification-background: #313e2c;\n  --notification-primary: #aaec8a;\n  --background: #FAF9FF;\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: "Poppins", sans-serif;\n  height: 100vh;\n  background-color: var(--background);\n}\n\n.notification {\n  position: absolute;\n  width: max-content;\n  left: 0;\n  right: 0;\n  bottom: 1.5rem;\n  margin-left: auto;\n  margin-right: auto;\n  border-radius: 0.375rem;\n  background-color: var(--notification-background);\n  color: var(--notification-primary);\n  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.1);\n  transform: translateY(1.875rem);\n  opacity: 0;\n  visibility: hidden;\n  animation: fade-in 3s linear;\n}\n\n.notification__icon {\n  height: 1.625rem;\n  width: 1.625rem;\n  margin-right: 0.25rem;\n}\n\n.notification__body {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 1rem 0.5rem;\n}\n\n.notification__progress {\n  position: absolute;\n  left: 0.25rem;\n  bottom: 0.25rem;\n  width: calc(100% - 0.5rem);\n  height: 0.2rem;\n  transform: scaleX(0);\n  transform-origin: left;\n  background: linear-gradient(to right, var(--notification-background), var(--notification-primary));\n  border-radius: inherit;\n  animation: progress 2.5s 0.3s linear;\n}\n\n@keyframes fade-in {\n  5% {\n    opacity: 1;\n    visibility: visible;\n    transform: translateY(0);\n  }\n  95% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes progress {\n  to {\n    transform: scaleX(1);\n  }\n}',""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);