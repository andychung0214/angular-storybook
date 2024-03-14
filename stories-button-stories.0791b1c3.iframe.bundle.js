(self.webpackChunkangular_storybook=self.webpackChunkangular_storybook||[]).push([[322],{"./src/stories/button.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{r:()=>ButtonComponent});var tslib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_button_css_ngResource__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/button.css?ngResource"),_button_css_ngResource__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_button_css_ngResource__WEBPACK_IMPORTED_MODULE_0__),_angular_common__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let ButtonComponent=class ButtonComponent{constructor(){this.primary=!1,this.size="medium",this.label="Button",this.onClick=new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter}get classes(){const mode=this.primary?"storybook-button--primary":"storybook-button--secondary";return["storybook-button",`storybook-button--${this.size}`,mode]}static#_=this.propDecorators={primary:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}],backgroundColor:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}],size:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}],label:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}],onClick:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Output}]}};ButtonComponent=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({selector:"storybook-button",standalone:!0,imports:[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],template:' <button\n    type="button"\n    (click)="onClick.emit($event)"\n    [ngClass]="classes"\n    [ngStyle]="{ \'background-color\': backgroundColor }"\n  >\n    {{ label }}\n  </button>',styles:[_button_css_ngResource__WEBPACK_IMPORTED_MODULE_0___default()]})],ButtonComponent)},"./src/stories/button.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Large:()=>Large,Primary:()=>Primary,Secondary:()=>Secondary,Small:()=>Small,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_storybook_test__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs"),_button_component__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/button.component.ts"),_angular_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@angular/platform-browser/fesm2022/animations.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"Data-Input-Components/Button",component:_button_component__WEBPACK_IMPORTED_MODULE_2__.r,tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.fn)()},decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.applicationConfig)({providers:[(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.importProvidersFrom)(_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__.BrowserAnimationsModule)]})]},Primary={args:{primary:!0,label:"Button"}},Secondary={args:{label:"Button"}},Large={args:{size:"large",label:"Button"}},Small={args:{size:"small",label:"Button"}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {\n    primary: true,\n    label: 'Button'\n  }\n}",...Primary.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Button'\n  }\n}",...Secondary.parameters?.docs?.source}}},Large.parameters={...Large.parameters,docs:{...Large.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'large',\n    label: 'Button'\n  }\n}",...Large.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:"{\n  args: {\n    size: 'small',\n    label: 'Button'\n  }\n}",...Small.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","Secondary","Large","Small"]},"./node_modules/@storybook/instrumenter/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/instrumenter/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/test/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/test/dist sync recursive",module.exports=webpackEmptyContext},"./src/stories/button.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".storybook-button {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-weight: 700;\n  border: 0;\n  border-radius: 3em;\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1;\n}\n.storybook-button--primary {\n  color: white;\n  background-color: #1ea7fd;\n}\n.storybook-button--secondary {\n  color: #333;\n  background-color: transparent;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n}\n.storybook-button--small {\n  font-size: 12px;\n  padding: 10px 16px;\n}\n.storybook-button--medium {\n  font-size: 14px;\n  padding: 11px 20px;\n}\n.storybook-button--large {\n  font-size: 16px;\n  padding: 12px 24px;\n}\n",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);