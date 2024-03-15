(self.webpackChunkangular_storybook=self.webpackChunkangular_storybook||[]).push([[191],{"./src/app/components/radio/radio.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{U:()=>RadioComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var radio_componentngResource=__webpack_require__("./src/app/components/radio/radio.component.scss?ngResource"),radio_componentngResource_default=__webpack_require__.n(radio_componentngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let RadioComponent=class RadioComponent{};RadioComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"app-radio",standalone:!0,imports:[common.CommonModule],template:"<p>radio works!</p>\r\n",styles:[radio_componentngResource_default()]})],RadioComponent)},"./src/app/components/switch/switch.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{q:()=>SwitchComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var switch_componentngResource=__webpack_require__("./src/app/components/switch/switch.component.scss?ngResource"),switch_componentngResource_default=__webpack_require__.n(switch_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let SwitchComponent=class SwitchComponent{constructor(){this.isChecked=!1,this.isDisabled=!1,this.themeColor="primary",this.onChange=new core.EventEmitter}toggleSwitch(){this.isDisabled||(this.isChecked=!this.isChecked,this.onChange.emit(this.isChecked))}static#_=this.propDecorators={backgroundColor:[{type:core.Input}],isChecked:[{type:core.Input}],isDisabled:[{type:core.Input}],themeColor:[{type:core.Input}],onChange:[{type:core.Output}]}};SwitchComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"app-switch",template:'<div [style.background-color]="backgroundColor" class="switch-button" [class.is-disabled]="isDisabled"\r\n  (click)="toggleSwitch()">\r\n  <div class="thumb" [class.is-checked]="isChecked"></div>\r\n</div>\r\n',styles:[switch_componentngResource_default()]})],SwitchComponent)},"./src/app/components/textfield/textfield.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{x:()=>TextfieldComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var textfield_componentngResource=__webpack_require__("./src/app/components/textfield/textfield.component.scss?ngResource"),textfield_componentngResource_default=__webpack_require__.n(textfield_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let TextfieldComponent=class TextfieldComponent{};TextfieldComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"app-textfield",template:"<p>textfield works!</p>\n",styles:[textfield_componentngResource_default()]})],TextfieldComponent)},"./node_modules/@storybook/angular/dist/client/argsToTemplate.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.argsToTemplate=void 0,exports.argsToTemplate=function argsToTemplate(args,options={}){const includeSet=options.include?new Set(options.include):null,excludeSet=options.exclude?new Set(options.exclude):null;return Object.entries(args).filter((([key])=>void 0!==args[key])).filter((([key])=>includeSet?includeSet.has(key):!excludeSet||!excludeSet.has(key))).map((([key,value])=>"function"==typeof value?`(${key})="${key}($event)"`:`[${key}]="${key}"`)).join(" ")}},"./node_modules/@storybook/angular/dist/client/decorators.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.componentWrapperDecorator=exports.applicationConfig=exports.moduleMetadata=void 0;const ComputesTemplateFromComponent_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/ComputesTemplateFromComponent.js"),NgComponentAnalyzer_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/utils/NgComponentAnalyzer.js");exports.moduleMetadata=metadata=>storyFn=>{const story=storyFn(),storyMetadata=story.moduleMetadata||{};return metadata=metadata||{},{...story,moduleMetadata:{declarations:[...metadata.declarations||[],...storyMetadata.declarations||[]],entryComponents:[...metadata.entryComponents||[],...storyMetadata.entryComponents||[]],imports:[...metadata.imports||[],...storyMetadata.imports||[]],schemas:[...metadata.schemas||[],...storyMetadata.schemas||[]],providers:[...metadata.providers||[],...storyMetadata.providers||[]]}}},exports.applicationConfig=function applicationConfig(config){return storyFn=>{const story=storyFn(),storyConfig=story.applicationConfig;return{...story,applicationConfig:storyConfig||config?{...config,...storyConfig,providers:[...config?.providers||[],...storyConfig?.providers||[]]}:void 0}}};exports.componentWrapperDecorator=(element,props)=>(storyFn,storyContext)=>{const story=storyFn(),currentProps="function"==typeof props?props(storyContext):props,template=(0,NgComponentAnalyzer_1.isComponent)(element)?(0,ComputesTemplateFromComponent_1.computesTemplateFromComponent)(element,currentProps??{},story.template):element(story.template);return{...story,template,...currentProps||story.props?{props:{...currentProps,...story.props}}:{}}}},"./node_modules/@storybook/angular/dist/client/index.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.argsToTemplate=exports.applicationConfig=exports.componentWrapperDecorator=exports.moduleMetadata=void 0,__webpack_require__("./node_modules/@storybook/angular/dist/client/globals.js"),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);var decorators_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/decorators.js");Object.defineProperty(exports,"moduleMetadata",{enumerable:!0,get:function(){return decorators_1.moduleMetadata}}),Object.defineProperty(exports,"componentWrapperDecorator",{enumerable:!0,get:function(){return decorators_1.componentWrapperDecorator}}),Object.defineProperty(exports,"applicationConfig",{enumerable:!0,get:function(){return decorators_1.applicationConfig}});var argsToTemplate_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/argsToTemplate.js");Object.defineProperty(exports,"argsToTemplate",{enumerable:!0,get:function(){return argsToTemplate_1.argsToTemplate}})},"./node_modules/@storybook/angular/dist/client/public-types.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0})},"./node_modules/@storybook/angular/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var _client_index__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/client/index.js");__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"applicationConfig")&&__webpack_require__.d(__webpack_exports__,{applicationConfig:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.applicationConfig}}),__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"moduleMetadata")&&__webpack_require__.d(__webpack_exports__,{moduleMetadata:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata}})},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./src/stories/form-control.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{WithLabel:()=>WithLabel,__namedExportsOrder:()=>__namedExportsOrder,default:()=>form_control_stories});var textfield_component=__webpack_require__("./src/app/components/textfield/textfield.component.ts"),switch_component=__webpack_require__("./src/app/components/switch/switch.component.ts"),dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),radio_component=__webpack_require__("./src/app/components/radio/radio.component.ts"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var form_control_componentngResource=__webpack_require__("./src/app/components/form-control/form-control.component.scss?ngResource"),form_control_componentngResource_default=__webpack_require__.n(form_control_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let FormControlComponent=class FormControlComponent{constructor(){this.label="",this.maxLength=null,this.placement="top-left",this.isError=!1,this.errorMessage=null,this.isRequired=!1,this.onChange=new core.EventEmitter,this.childrenValue="",this.isSwitchComponent=!1}ngAfterContentInit(){this.formControlInput&&(this.isSwitchComponent="Switch"===this.formControlInput.name)}ngOnChanges(changes){}handleOnChange(event){const targetValue=event.target.value;this.maxLength&&targetValue.length>this.maxLength||(this.childrenValue=targetValue,this.onChange.emit(event))}static#_=this.propDecorators={label:[{type:core.Input}],maxLength:[{type:core.Input}],placement:[{type:core.Input}],isError:[{type:core.Input}],errorMessage:[{type:core.Input}],isRequired:[{type:core.Input}],backgroundColor:[{type:core.Input}],onChange:[{type:core.Output}],formControlInput:[{type:core.ContentChild,args:["formControlInput"]}]}};FormControlComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"app-form-control",template:'<div class="form-control" [class]="placement" *ngIf="label || maxLength">\r\n  <div class="form-control__label-wrapper">\r\n    <div class="form-control__label">\r\n      {{ label }}\r\n      <span *ngIf="isRequired" class="required-sign">*</span>\r\n    </div>\r\n    <div *ngIf="maxLength" class="max-length">{{ childrenValue?.length }} / {{ maxLength }}</div>\r\n  </div>\r\n  <ng-content></ng-content>\r\n  <div *ngIf="isError && errorMessage" class="error-message">{{ errorMessage }}</div>\r\n</div>\r\n',styles:[form_control_componentngResource_default()]})],FormControlComponent);const form_control_stories={title:"Data-Input-Components/FormControl",component:FormControlComponent,tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{},decorators:[(0,dist.moduleMetadata)({declarations:[textfield_component.x,radio_component.U,switch_component.q]})]},WithLabel={args:{label:"FormControl Label"}};WithLabel.parameters={...WithLabel.parameters,docs:{...WithLabel.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'FormControl Label'\n  }\n}",...WithLabel.parameters?.docs?.source}}};const __namedExportsOrder=["WithLabel"]},"./src/app/components/form-control/form-control.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".form-control {\n  display: inline-flex;\n}\n\n/* Add all placement styles similar to your React component here */\n.top-left {\n  flex-direction: column;\n}\n\n.error-message {\n  font-size: 14px;\n  margin-top: 4px;\n  color: red;\n}\n\n/* Continue with the rest of your CSS */",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/app/components/radio/radio.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/app/components/switch/switch.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/app/components/textfield/textfield.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);