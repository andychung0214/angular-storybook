(self.webpackChunkangular_storybook=self.webpackChunkangular_storybook||[]).push([[933],{"./node_modules/@storybook/angular/dist/client/argsToTemplate.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.argsToTemplate=void 0,exports.argsToTemplate=function argsToTemplate(args,options={}){const includeSet=options.include?new Set(options.include):null,excludeSet=options.exclude?new Set(options.exclude):null;return Object.entries(args).filter((([key])=>void 0!==args[key])).filter((([key])=>includeSet?includeSet.has(key):!excludeSet||!excludeSet.has(key))).map((([key,value])=>"function"==typeof value?`(${key})="${key}($event)"`:`[${key}]="${key}"`)).join(" ")}},"./node_modules/@storybook/angular/dist/client/decorators.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.componentWrapperDecorator=exports.applicationConfig=exports.moduleMetadata=void 0;const ComputesTemplateFromComponent_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/ComputesTemplateFromComponent.js"),NgComponentAnalyzer_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/angular-beta/utils/NgComponentAnalyzer.js");exports.moduleMetadata=metadata=>storyFn=>{const story=storyFn(),storyMetadata=story.moduleMetadata||{};return metadata=metadata||{},{...story,moduleMetadata:{declarations:[...metadata.declarations||[],...storyMetadata.declarations||[]],entryComponents:[...metadata.entryComponents||[],...storyMetadata.entryComponents||[]],imports:[...metadata.imports||[],...storyMetadata.imports||[]],schemas:[...metadata.schemas||[],...storyMetadata.schemas||[]],providers:[...metadata.providers||[],...storyMetadata.providers||[]]}}},exports.applicationConfig=function applicationConfig(config){return storyFn=>{const story=storyFn(),storyConfig=story.applicationConfig;return{...story,applicationConfig:storyConfig||config?{...config,...storyConfig,providers:[...config?.providers||[],...storyConfig?.providers||[]]}:void 0}}};exports.componentWrapperDecorator=(element,props)=>(storyFn,storyContext)=>{const story=storyFn(),currentProps="function"==typeof props?props(storyContext):props,template=(0,NgComponentAnalyzer_1.isComponent)(element)?(0,ComputesTemplateFromComponent_1.computesTemplateFromComponent)(element,currentProps??{},story.template):element(story.template);return{...story,template,...currentProps||story.props?{props:{...currentProps,...story.props}}:{}}}},"./node_modules/@storybook/angular/dist/client/index.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)};Object.defineProperty(exports,"__esModule",{value:!0}),exports.argsToTemplate=exports.applicationConfig=exports.componentWrapperDecorator=exports.moduleMetadata=void 0,__webpack_require__("./node_modules/@storybook/angular/dist/client/globals.js"),__exportStar(__webpack_require__("./node_modules/@storybook/angular/dist/client/public-types.js"),exports);var decorators_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/decorators.js");Object.defineProperty(exports,"moduleMetadata",{enumerable:!0,get:function(){return decorators_1.moduleMetadata}}),Object.defineProperty(exports,"componentWrapperDecorator",{enumerable:!0,get:function(){return decorators_1.componentWrapperDecorator}}),Object.defineProperty(exports,"applicationConfig",{enumerable:!0,get:function(){return decorators_1.applicationConfig}});var argsToTemplate_1=__webpack_require__("./node_modules/@storybook/angular/dist/client/argsToTemplate.js");Object.defineProperty(exports,"argsToTemplate",{enumerable:!0,get:function(){return argsToTemplate_1.argsToTemplate}})},"./node_modules/@storybook/angular/dist/client/public-types.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0})},"./node_modules/@storybook/angular/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var _client_index__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/client/index.js");__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"applicationConfig")&&__webpack_require__.d(__webpack_exports__,{applicationConfig:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.applicationConfig}}),__webpack_require__.o(_client_index__WEBPACK_IMPORTED_MODULE_0__,"moduleMetadata")&&__webpack_require__.d(__webpack_exports__,{moduleMetadata:function(){return _client_index__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata}})},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./src/stories/table.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AntdStyledTable:()=>AntdStyledTable,CustomContent:()=>CustomContent,Default:()=>Default,StickyColumn:()=>StickyColumn,__namedExportsOrder:()=>__namedExportsOrder,default:()=>table_stories});var dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),animations=__webpack_require__("./node_modules/@angular/platform-browser/fesm2022/animations.mjs"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var table_componentngResource=__webpack_require__("./src/app/components/table/table.component.scss?ngResource"),table_componentngResource_default=__webpack_require__.n(table_componentngResource);let TableComponent=class TableComponent{constructor(){this.columns=[],this.dataSource=[],this.tableClass=""}static#_=this.propDecorators={columns:[{type:core.Input}],dataSource:[{type:core.Input}],tableClass:[{type:core.Input}]}};TableComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"app-table",template:'<div class="table-wrapper">\n  <table [class]="tableClass">\n    <thead>\n      <tr>\n        <ng-container *ngFor="let column of columns">\n          <th [style]="{\'width.px\': column.width}" [class.fixed]="column.fixed">\n            {{ column.title }}\n          </th>\n        </ng-container>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor="let data of dataSource">\n        <ng-container *ngFor="let column of columns">\n          <td [class.fixed]="column.fixed">\n            {{ column.render ? column.render(data[column.dataIndex]) : data[column.dataIndex] }}\n          </td>\n        </ng-container>\n      </tr>\n    </tbody>\n  </table>\n</div>\n',styles:[table_componentngResource_default()]})],TableComponent);const columns=[{key:"id",title:"ID",dataIndex:"id",width:100},{key:"name",title:"Name",dataIndex:"name",width:200},{key:"age",title:"Age",dataIndex:"age",width:100,fixed:!0},{key:"address",title:"Address",dataIndex:"address",width:100,fixed:!0}],dataSource=[{id:1,name:"John Brown",age:32,address:"\tNew York No. 1 Lake Park"},{id:2,name:"Jim Green",age:42,address:"London No. 1 Lake Park"},{id:3,name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park"}],table_stories={title:"Data-Display-Components/Table",component:TableComponent,tags:["autodocs"],decorators:[(0,dist.moduleMetadata)({declarations:[TableComponent]}),(0,dist.applicationConfig)({providers:[(0,core.importProvidersFrom)(animations.BrowserAnimationsModule)]})]},Default={args:{columns,dataSource,tableClass:"styled-table"}},AntdStyledTable={args:{columns,dataSource,tableClass:"styledTable"}},StickyColumn={args:{...columns.map(((column,index)=>0===index?{...column,fixed:!0}:column)),dataSource,tableClass:"stickyLeftStyle"}},CustomContent={args:{columns:[...columns,{title:"操作",dataIndex:"actions",key:"actions",render:()=>'<button themeColor="secondary">\n            <span>刪除</span>\n          </button>'}],dataSource}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    columns,\n    dataSource,\n    tableClass: 'styled-table'\n  }\n}",...Default.parameters?.docs?.source}}},AntdStyledTable.parameters={...AntdStyledTable.parameters,docs:{...AntdStyledTable.parameters?.docs,source:{originalSource:"{\n  args: {\n    columns,\n    dataSource,\n    tableClass: 'styledTable'\n  }\n}",...AntdStyledTable.parameters?.docs?.source}}},StickyColumn.parameters={...StickyColumn.parameters,docs:{...StickyColumn.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...columns.map((column, index) => {\n      if (index === 0) {\n        return {\n          ...column,\n          fixed: true\n        };\n      }\n      return column;\n    }),\n    dataSource,\n    tableClass: 'stickyLeftStyle'\n  }\n}",...StickyColumn.parameters?.docs?.source}}},CustomContent.parameters={...CustomContent.parameters,docs:{...CustomContent.parameters?.docs,source:{originalSource:"{\n  args: {\n    columns: [...columns, {\n      title: '操作',\n      dataIndex: 'actions',\n      key: 'actions',\n      render: () => `<button themeColor=\"secondary\">\n            <span>刪除</span>\n          </button>`\n    }],\n    dataSource\n  }\n}",...CustomContent.parameters?.docs?.source}}};const __namedExportsOrder=["Default","AntdStyledTable","StickyColumn","CustomContent"]},"./src/app/components/table/table.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,'.table-wrapper {\n  width: 100%;\n  overflow: auto;\n}\n\n.styled-table {\n  border-collapse: collapse;\n}\n.styled-table th, .styled-table td {\n  border: 1px solid #000;\n  box-sizing: border-box;\n}\n.styled-table th.fixed, .styled-table td.fixed {\n  position: sticky;\n  left: 0px;\n  z-index: 2;\n}\n.styled-table th.fixed:after, .styled-table td.fixed:after {\n  content: "";\n  position: absolute;\n  right: 0px;\n  top: 0px;\n  width: 30px;\n  height: 100%;\n  box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, 0.1490196078);\n  transform: translateX(100%);\n}\n\n.styledTable {\n  border-collapse: collapse;\n  background-color: gold;\n  width: 100%;\n}\n.styledTable * {\n  border: 1px solid #000;\n  box-sizing: border-box;\n}\n\n.stickyLeftStyle {\n  position: sticky;\n  left: 0px;\n  z-index: 2;\n}\n.stickyLeftStyle:after {\n  content: "";\n  position: absolute;\n  right: 0px;\n  top: 0px;\n  width: 30px;\n  height: 100%;\n  box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, 0.1490196078);\n  transform: translateX(100%);\n}',""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);