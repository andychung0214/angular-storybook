(self.webpackChunkangular_storybook=self.webpackChunkangular_storybook||[]).push([[978],{"./node_modules/@storybook/angular/dist/client/argsToTemplate.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.argsToTemplate=void 0,exports.argsToTemplate=function argsToTemplate(args,options={}){const includeSet=options.include?new Set(options.include):null,excludeSet=options.exclude?new Set(options.exclude):null;return Object.entries(args).filter((([key])=>void 0!==args[key])).filter((([key])=>includeSet?includeSet.has(key):!excludeSet||!excludeSet.has(key))).map((([key,value])=>"function"==typeof value?`(${key})="${key}($event)"`:`[${key}]="${key}"`)).join(" ")}},"./node_modules/@storybook/angular/dist/client/decorators.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.componentWrapperDecorator=exports.applicationConfig=exports.moduleMetadata=void 0;const ComputesTemplateFromComponent_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/ComputesTemplateFromComponent.js"),NgComponentAnalyzer_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/utils/NgComponentAnalyzer.js");exports.moduleMetadata=metadata=>storyFn=>{const story=storyFn(),storyMetadata=story.moduleMetadata||{};return metadata=metadata||{},{...story,moduleMetadata:{declarations:[...metadata.declarations||[],...storyMetadata.declarations||[]],entryComponents:[...metadata.entryComponents||[],...storyMetadata.entryComponents||[]],imports:[...metadata.imports||[],...storyMetadata.imports||[]],schemas:[...metadata.schemas||[],...storyMetadata.schemas||[]],providers:[...metadata.providers||[],...storyMetadata.providers||[]]}}},exports.applicationConfig=function applicationConfig(config){return storyFn=>{const story=storyFn(),storyConfig=story.applicationConfig;return{...story,applicationConfig:storyConfig||config?{...config,...storyConfig,providers:[...config?.providers||[],...storyConfig?.providers||[]]}:void 0}}};exports.componentWrapperDecorator=(element,props)=>(storyFn,storyContext)=>{const story=storyFn(),currentProps="function"==typeof props?props(storyContext):props,template=(0,NgComponentAnalyzer_1.isComponent)(element)?(0,ComputesTemplateFromComponent_1.computesTemplateFromComponent)(element,currentProps??{},story.template):element(story.template);return{...story,template,...currentProps||story.props?{props:{...currentProps,...story.props}}:{}}}},"./node_modules/@storybook/angular/dist/client/index.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.argsToTemplate=exports.applicationConfig=exports.componentWrapperDecorator=exports.moduleMetadata=void 0,__webpack_require__("./node_modules/@storybook/angular/dist/client/globals.js"),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);var decorators_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/decorators.js");Object.defineProperty(exports,"moduleMetadata",{enumerable:!0,get:function(){return decorators_1.moduleMetadata}}),Object.defineProperty(exports,"componentWrapperDecorator",{enumerable:!0,get:function(){return decorators_1.componentWrapperDecorator}}),Object.defineProperty(exports,"applicationConfig",{enumerable:!0,get:function(){return decorators_1.applicationConfig}});var argsToTemplate_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/argsToTemplate.js");Object.defineProperty(exports,"argsToTemplate",{enumerable:!0,get:function(){return argsToTemplate_1.argsToTemplate}})},"./node_modules/@storybook/angular/dist/client/public-types.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0})},"./node_modules/@storybook/angular/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var _client_index__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/client/index.js");__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"applicationConfig")&&__webpack_require__.d(__webpack_exports__,{applicationConfig:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.applicationConfig}}),__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"moduleMetadata")&&__webpack_require__.d(__webpack_exports__,{moduleMetadata:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata}})},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./src/stories/breadcrumb.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithCustomNode:()=>WithCustomNode,WithCustomSeparator:()=>WithCustomSeparator,WithIcon:()=>WithIcon,WithMaxItems:()=>WithMaxItems,__namedExportsOrder:()=>__namedExportsOrder,default:()=>breadcrumb_stories});var dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),animations=__webpack_require__("./node_modules/@angular/platform-browser/fesm2022/animations.mjs"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var breadcrumb_item_componentngResource=__webpack_require__("./src/app/components/breadcrumb-item/breadcrumb-item.component.scss?ngResource"),breadcrumb_item_componentngResource_default=__webpack_require__.n(breadcrumb_item_componentngResource);let BreadcrumbItemComponent=class BreadcrumbItemComponent{constructor(){this.label=null,this.icon=null,this.to=null,this.navigate=new core.EventEmitter}handleClick(){this.to&&this.navigate.emit(this.to)}static#_=this.propDecorators={label:[{type:core.Input}],icon:[{type:core.Input}],to:[{type:core.Input}],navigate:[{type:core.Output}]}};BreadcrumbItemComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"app-breadcrumb-item",template:'<div class="styled-item" (click)="handleClick()" [class.clickable]="to">\n  <ng-container *ngIf="icon; else noIcon">\n    <span [ngClass]="icon"></span> \x3c!-- 如果 icon 是 Material Icons 名稱 --\x3e\n  </ng-container>\n  <ng-template #noIcon></ng-template>\n  <span>{{ label }}</span>\n</div>\n',styles:[breadcrumb_item_componentngResource_default()]})],BreadcrumbItemComponent);var breadcrumb_componentngResource=__webpack_require__("./src/app/components/breadcrumb/breadcrumb.component.scss?ngResource"),breadcrumb_componentngResource_default=__webpack_require__.n(breadcrumb_componentngResource);let BreadcrumbComponent=class BreadcrumbComponent{constructor(){this.routes=[],this.maxItems=8,this.separator=">"}static#_=this.propDecorators={routes:[{type:core.Input}],maxItems:[{type:core.Input}],separator:[{type:core.Input}]}};BreadcrumbComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"app-breadcrumb",template:'<nav aria-label="Breadcrumb" class="breadcrumb">\n  <ol>\n    <li>\n      <a href="../../../..">WAI-ARIA Authoring Practices Guide (APG)</a>\n    </li>\n    <li>\n      <a href="../../../">Patterns</a>\n    </li>\n    <li>\n      <a href="../../">Breadcrumb Pattern</a>\n    </li>\n    <li>\n      <a href="" aria-current="page">Breadcrumb Example</a>\n    </li>\n  </ol>\n</nav>\n',styles:[breadcrumb_componentngResource_default()]})],BreadcrumbComponent);var breadcrumbs_componentngResource=__webpack_require__("./src/app/components/breadcrumbs/breadcrumbs.component.scss?ngResource"),breadcrumbs_componentngResource_default=__webpack_require__.n(breadcrumbs_componentngResource);let BreadcrumbsComponent=class BreadcrumbsComponent{constructor(){this.maxItems=8,this.separator=">",this.isCollapse=!1}ngAfterContentInit(){this.isCollapse=this.maxItems<this.breadcrumbItems.length}static#_=this.propDecorators={maxItems:[{type:core.Input}],separator:[{type:core.Input}],breadcrumbItems:[{type:core.ContentChildren,args:[BreadcrumbItemComponent]}]}};BreadcrumbsComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"app-breadcrumbs",template:'<nav aria-label="Breadcrumb" class="breadcrumb">\n  <ol>\n    <li>\n      <a href="../../../..">WAI-ARIA Authoring Practices Guide (APG)</a>\n    </li>\n    <li>\n      <a href="../../../">Patterns</a>\n    </li>\n    <li>\n      <a href="../../">Breadcrumb Pattern</a>\n    </li>\n    <li>\n      <a href="" aria-current="page">Breadcrumb Example</a>\n    </li>\n  </ol>\n</nav>\n',styles:[breadcrumbs_componentngResource_default()]})],BreadcrumbsComponent);const breadcrumb_stories={title:"Nav-Components/Breadcrumb",component:BreadcrumbComponent,tags:["autodocs"],decorators:[(0,dist.moduleMetadata)({declarations:[BreadcrumbComponent,BreadcrumbsComponent,BreadcrumbItemComponent]}),(0,dist.applicationConfig)({providers:[(0,core.importProvidersFrom)(animations.BrowserAnimationsModule)]})]},Default={args:{}},WithIcon={args:{routes:[{label:"Home",to:"/"},{label:"Catalog",to:"/catalog"},{label:"Product",to:"/catalog/product"}],maxItems:3,separator:">"}},WithCustomSeparator={args:{routes:[{label:"Home",to:"/"},{label:"Catalog",to:"/catalog"},{label:"Product",to:"/catalog/product"}],maxItems:3,separator:">"}},WithMaxItems={args:{routes:[{label:"Home",to:"/"},{label:"Catalog",to:"/catalog"},{label:"Product",to:"/catalog/product"}],maxItems:3,separator:">"}},WithCustomNode={args:{routes:[{label:"Home",to:"/"},{label:"Catalog",to:"/catalog"},{label:"Product",to:"/catalog/product"}],maxItems:3,separator:">"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Default.parameters?.docs?.source}}},WithIcon.parameters={...WithIcon.parameters,docs:{...WithIcon.parameters?.docs,source:{originalSource:"{\n  args: {\n    routes: [{\n      label: 'Home',\n      to: '/'\n    }, {\n      label: 'Catalog',\n      to: '/catalog'\n    }, {\n      label: 'Product',\n      to: '/catalog/product'\n    }],\n    maxItems: 3,\n    separator: '>'\n  }\n}",...WithIcon.parameters?.docs?.source}}},WithCustomSeparator.parameters={...WithCustomSeparator.parameters,docs:{...WithCustomSeparator.parameters?.docs,source:{originalSource:"{\n  args: {\n    routes: [{\n      label: 'Home',\n      to: '/'\n    }, {\n      label: 'Catalog',\n      to: '/catalog'\n    }, {\n      label: 'Product',\n      to: '/catalog/product'\n    }],\n    maxItems: 3,\n    separator: '>'\n  }\n}",...WithCustomSeparator.parameters?.docs?.source}}},WithMaxItems.parameters={...WithMaxItems.parameters,docs:{...WithMaxItems.parameters?.docs,source:{originalSource:"{\n  args: {\n    routes: [{\n      label: 'Home',\n      to: '/'\n    }, {\n      label: 'Catalog',\n      to: '/catalog'\n    }, {\n      label: 'Product',\n      to: '/catalog/product'\n    }],\n    maxItems: 3,\n    separator: '>'\n  }\n}",...WithMaxItems.parameters?.docs?.source}}},WithCustomNode.parameters={...WithCustomNode.parameters,docs:{...WithCustomNode.parameters?.docs,source:{originalSource:"{\n  args: {\n    routes: [{\n      label: 'Home',\n      to: '/'\n    }, {\n      label: 'Catalog',\n      to: '/catalog'\n    }, {\n      label: 'Product',\n      to: '/catalog/product'\n    }],\n    maxItems: 3,\n    separator: '>'\n  }\n}",...WithCustomNode.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithIcon","WithCustomSeparator","WithMaxItems","WithCustomNode"]},"./src/app/components/breadcrumb-item/breadcrumb-item.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".styled-item {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n.styled-item.clickable {\n  cursor: pointer;\n}\n.styled-item > *:not(:first-child) {\n  margin-left: 4px;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/app/components/breadcrumb/breadcrumb.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,'nav.breadcrumb {\n  padding: 0.8em 1em;\n  border: 1px solid hsl(0, 0%, 90%);\n  border-radius: 4px;\n  background: hsl(300, 14%, 97%);\n}\n\nnav.breadcrumb ol {\n  margin: 0;\n  padding-left: 0;\n  list-style: none;\n}\n\nnav.breadcrumb li {\n  display: inline;\n}\n\nnav.breadcrumb li + li::before {\n  display: inline-block;\n  margin: 0 0.25em;\n  transform: rotate(15deg);\n  border-right: 0.1em solid currentcolor;\n  height: 0.8em;\n  content: "";\n}\n\nnav.breadcrumb [aria-current=page] {\n  color: #000;\n  font-weight: 700;\n  text-decoration: none;\n}',""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/app/components/breadcrumbs/breadcrumbs.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,'nav.breadcrumb {\n  padding: 0.8em 1em;\n  border: 1px solid hsl(0, 0%, 90%);\n  border-radius: 4px;\n  background: hsl(300, 14%, 97%);\n}\n\nnav.breadcrumb ol {\n  margin: 0;\n  padding-left: 0;\n  list-style: none;\n}\n\nnav.breadcrumb li {\n  display: inline;\n}\n\nnav.breadcrumb li + li::before {\n  display: inline-block;\n  margin: 0 0.25em;\n  transform: rotate(15deg);\n  border-right: 0.1em solid currentcolor;\n  height: 0.8em;\n  content: "";\n}\n\nnav.breadcrumb [aria-current=page] {\n  color: #000;\n  font-weight: 700;\n  text-decoration: none;\n}',""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);