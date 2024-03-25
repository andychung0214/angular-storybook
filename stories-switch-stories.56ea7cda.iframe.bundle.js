(self.webpackChunkangular_storybook=self.webpackChunkangular_storybook||[]).push([[391],{"./src/app/components/switch/switch.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{q:()=>SwitchComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var switch_componentngResource=__webpack_require__("./src/app/components/switch/switch.component.scss?ngResource"),switch_componentngResource_default=__webpack_require__.n(switch_componentngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),icon=__webpack_require__("./node_modules/@angular/material/fesm2022/icon.mjs");let SwitchComponent=class SwitchComponent{constructor(){this.isChecked=!1,this.isDisabled=!1,this.size="default",this.themeColor="primary",this.checkedChildren="",this.unCheckedChildren="",this.onChange=new core.EventEmitter}get switchWidth(){return"small"===this.size?40:60}get thumbSize(){return"small"===this.size?12:18}get switchColor(){return this.isChecked?"green":"#ccc"}toggleSwitch(){this.isDisabled||(this.isChecked=!this.isChecked,this.onChange.emit(this.isChecked))}static#_=this.propDecorators={isChecked:[{type:core.Input}],isDisabled:[{type:core.Input}],size:[{type:core.Input}],themeColor:[{type:core.Input}],checkedChildren:[{type:core.Input}],unCheckedChildren:[{type:core.Input}],onChange:[{type:core.Output}]}};SwitchComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"app-switch",template:'\x3c!-- <div class="switch-button" [style]="{\'width.px\': switchWidth, \'background-color\': switchColor}" (click)="toggleSwitch()">\r\n      <div class="thumb" [style]="{\'left.px\': isChecked ? switchWidth - thumbSize : 0}"></div>\r\n      <div class="label" [style]="{\'padding.px\': thumbSize / 3}">\r\n        {{ isChecked ? checkedChildren : unCheckedChildren }}\r\n      </div>\r\n    </div> --\x3e\r\n\r\n\x3c!-- app-switch.component.html --\x3e\r\n<div class="switch-container" [class.checked]="isChecked" (click)="toggleSwitch()" [style]="{\'background-color\': themeColor} ">\r\n  <div class="switch-icon">\r\n    \x3c!-- 條件顯示 icon，這裡以 done 為例 --\x3e\r\n    <mat-icon *ngIf="isChecked">done</mat-icon>\r\n    <mat-icon *ngIf="!isChecked">close</mat-icon>\r\n  </div>\r\n  <div class="switch-button"></div>\r\n</div>\r\n',standalone:!0,imports:[common.CommonModule,icon.Ps],styles:[switch_componentngResource_default()]})],SwitchComponent)},"./src/stories/switch.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomColor:()=>CustomColor,Default:()=>Default,DisabledSwitch:()=>DisabledSwitch,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_storybook_test__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@angular/platform-browser/fesm2022/animations.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"Data-Input-Components/Switch",component:__webpack_require__("./src/app/components/switch/switch.component.ts").q,tags:["autodocs"],argTypes:{themeColor:{control:"color"}},args:{onChange:(0,_storybook_test__WEBPACK_IMPORTED_MODULE_1__.fn)()},decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.applicationConfig)({providers:[(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.importProvidersFrom)(_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__.BrowserAnimationsModule)]})]},Default={args:{isChecked:!1,isDisabled:!1,size:"default",themeColor:"primary",checkedChildren:"開",unCheckedChildren:"關"}},CustomColor={args:{isChecked:!1,isDisabled:!1,size:"default",themeColor:"gold",checkedChildren:"On",unCheckedChildren:"Off"}},DisabledSwitch={args:{isChecked:!1,isDisabled:!0,size:"default",themeColor:"primary",checkedChildren:"On",unCheckedChildren:"Off"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    isChecked: false,\n    isDisabled: false,\n    size: 'default',\n    themeColor: 'primary',\n    checkedChildren: '開',\n    unCheckedChildren: '關'\n  }\n}",...Default.parameters?.docs?.source}}},CustomColor.parameters={...CustomColor.parameters,docs:{...CustomColor.parameters?.docs,source:{originalSource:"{\n  args: {\n    isChecked: false,\n    isDisabled: false,\n    size: 'default',\n    themeColor: 'gold',\n    checkedChildren: 'On',\n    unCheckedChildren: 'Off'\n  }\n}",...CustomColor.parameters?.docs?.source}}},DisabledSwitch.parameters={...DisabledSwitch.parameters,docs:{...DisabledSwitch.parameters?.docs,source:{originalSource:"{\n  args: {\n    isChecked: false,\n    isDisabled: true,\n    size: 'default',\n    themeColor: 'primary',\n    checkedChildren: 'On',\n    unCheckedChildren: 'Off'\n  }\n}",...DisabledSwitch.parameters?.docs?.source}}};const __namedExportsOrder=["Default","CustomColor","DisabledSwitch"]},"./node_modules/@storybook/instrumenter/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/instrumenter/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/test/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/test/dist sync recursive",module.exports=webpackEmptyContext},"./src/app/components/switch/switch.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,'@charset "UTF-8";\n.switch-button {\n  height: 20px;\n  display: inline-flex;\n  align-items: center;\n  border-radius: 50px;\n  position: relative;\n  cursor: pointer;\n  box-sizing: content-box;\n}\n\n.thumb {\n  width: 20px;\n  height: 20px;\n  background-color: #FFF;\n  border-radius: 50%;\n  position: absolute;\n  transition: left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n}\n\n.label {\n  position: absolute;\n  font-size: 14px;\n  white-space: nowrap;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.transitionStyle {\n  transition: left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, right 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n}\n\n/* app-switch.component.css */\n.switch-container {\n  display: inline-flex;\n  align-items: center;\n  cursor: pointer;\n  position: relative;\n  width: 60px; /* 滑動按鈕的寬度 */\n  height: 24px; /* 滑動按鈕的高度 */\n  background-color: #ccc; /* 未選中時的背景顏色 */\n  border-radius: 12px; /* 圓角 */\n  transition: background-color 0.3s ease;\n}\n\n.switch-container.checked {\n  background-color: #4caf50; /* 選中時的背景顏色 */\n}\n\n.switch-icon {\n  position: absolute;\n  color: white; /* icon 顏色 */\n  transition: transform 0.3s ease;\n}\n\n.switch-container.checked .switch-icon {\n  transform: translateX(36px); /* 根據滑動按鈕的寬度調整 */\n}\n\n.switch-button {\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  width: 20px; /* 滑塊的大小 */\n  height: 20px;\n  background-color: white;\n  border-radius: 50%;\n  transition: transform 0.3s ease;\n}\n\n.switch-container.checked .switch-button {\n  transform: translateX(36px); /* 滑塊移動的距離 */\n}\n\nmat-icon {\n  -webkit-user-select: none;\n          user-select: none;\n  pointer-events: none;\n}',""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);