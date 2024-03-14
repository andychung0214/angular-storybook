(self.webpackChunkangular_storybook=self.webpackChunkangular_storybook||[]).push([[806],{"./src/stories/button.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{r:()=>ButtonComponent});var tslib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_button_css_ngResource__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/button.css?ngResource"),_button_css_ngResource__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_button_css_ngResource__WEBPACK_IMPORTED_MODULE_0__),_angular_common__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let ButtonComponent=class ButtonComponent{constructor(){this.primary=!1,this.size="medium",this.label="Button",this.onClick=new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter}get classes(){const mode=this.primary?"storybook-button--primary":"storybook-button--secondary";return["storybook-button",`storybook-button--${this.size}`,mode]}static#_=this.propDecorators={primary:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}],backgroundColor:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}],size:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}],label:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Input}],onClick:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Output}]}};ButtonComponent=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({selector:"storybook-button",standalone:!0,imports:[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],template:' <button\n    type="button"\n    (click)="onClick.emit($event)"\n    [ngClass]="classes"\n    [ngStyle]="{ \'background-color\': backgroundColor }"\n  >\n    {{ label }}\n  </button>',styles:[_button_css_ngResource__WEBPACK_IMPORTED_MODULE_0___default()]})],ButtonComponent)},"./src/stories/header.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{G:()=>HeaderComponent});var tslib__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_header_css_ngResource__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/header.css?ngResource"),_header_css_ngResource__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_header_css_ngResource__WEBPACK_IMPORTED_MODULE_0__),_angular_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),_button_component__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/stories/button.component.ts");let HeaderComponent=class HeaderComponent{constructor(){this.user=null,this.onLogin=new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter,this.onLogout=new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter,this.onCreateAccount=new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter}static#_=this.propDecorators={user:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input}],onLogin:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Output}],onLogout:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Output}],onCreateAccount:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Output}]}};HeaderComponent=(0,tslib__WEBPACK_IMPORTED_MODULE_3__.gn)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({selector:"storybook-header",standalone:!0,imports:[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,_button_component__WEBPACK_IMPORTED_MODULE_1__.r],template:'<header>\n    <div class="storybook-header">\n      <div>\n        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">\n          <g fill="none" fillRule="evenodd">\n            <path\n              d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"\n              fill="#FFF"\n            />\n            <path\n              d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"\n              fill="#555AB9"\n            />\n            <path\n              d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"\n              fill="#91BAF8"\n            />\n          </g>\n        </svg>\n        <h1>Acme</h1>\n      </div>\n      <div>\n        <div *ngIf="user">\n          <span class="welcome">\n            Welcome, <b>{{ user.name }}</b\n            >!\n          </span>\n          <storybook-button\n            *ngIf="user"\n            size="small"\n            (onClick)="onLogout.emit($event)"\n            label="Log out"\n          ></storybook-button>\n        </div>\n        <div *ngIf="!user">\n          <storybook-button\n            *ngIf="!user"\n            size="small"\n            class="margin-left"\n            (onClick)="onLogin.emit($event)"\n            label="Log in"\n          ></storybook-button>\n          <storybook-button\n            *ngIf="!user"\n            size="small"\n            [primary]="true"\n            class="margin-left"\n            (onClick)="onCreateAccount.emit($event)"\n            label="Sign up"\n          ></storybook-button>\n        </div>\n      </div>\n    </div>\n  </header>',styles:[_header_css_ngResource__WEBPACK_IMPORTED_MODULE_0___default()]})],HeaderComponent)},"./src/stories/page.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LoggedIn:()=>LoggedIn,LoggedOut:()=>LoggedOut,__namedExportsOrder:()=>__namedExportsOrder,default:()=>page_stories});var asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),test_dist=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),pagengResource=__webpack_require__("./src/stories/page.css?ngResource"),pagengResource_default=__webpack_require__.n(pagengResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),header_component=__webpack_require__("./src/stories/header.component.ts");let PageComponent=class PageComponent{constructor(){this.user=null}doLogout(){this.user=null}doLogin(){this.user={name:"Jane Doe"}}doCreateAccount(){this.user={name:"Jane Doe"}}};PageComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"storybook-page",standalone:!0,imports:[common.CommonModule,header_component.G],template:'<article>\n    <storybook-header\n      [user]="user"\n      (onLogout)="doLogout()"\n      (onLogin)="doLogin()"\n      (onCreateAccount)="doCreateAccount()"\n    ></storybook-header>\n    <section class="storybook-page">\n      <h2>Pages in Storybook</h2>\n      <p>\n        We recommend building UIs with a\n        <a href="https://componentdriven.org" target="_blank" rel="noopener noreferrer">\n          <strong>component-driven</strong>\n        </a>\n        process starting with atomic components and ending with pages.\n      </p>\n      <p>\n        Render pages with mock data. This makes it easy to build and review page states without\n        needing to navigate to them in your app. Here are some handy patterns for managing page data\n        in Storybook:\n      </p>\n      <ul>\n        <li>\n          Use a higher-level connected component. Storybook helps you compose such data from the\n          "args" of child component stories\n        </li>\n        <li>\n          Assemble data in the page component from your services. You can mock these services out\n          using Storybook.\n        </li>\n      </ul>\n      <p>\n        Get a guided tutorial on component-driven development at\n        <a href="https://storybook.js.org/tutorials/" target="_blank" rel="noopener noreferrer">\n          Storybook tutorials\n        </a>\n        . Read more in the\n        <a href="https://storybook.js.org/docs" target="_blank" rel="noopener noreferrer"> docs </a>\n        .\n      </p>\n      <div class="tip-wrapper">\n        <span class="tip">Tip</span> Adjust the width of the canvas with the\n        <svg width="10" height="10" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">\n          <g fill="none" fillRule="evenodd">\n            <path\n              d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z"\n              id="a"\n              fill="#999"\n            />\n          </g>\n        </svg>\n        Viewports addon in the toolbar\n      </div>\n    </section>\n  </article>',styles:[pagengResource_default()]})],PageComponent);var animations=__webpack_require__("./node_modules/@angular/platform-browser/fesm2022/animations.mjs");const page_stories={title:"Example/Page",component:PageComponent,parameters:{layout:"fullscreen"},decorators:[(0,dist.applicationConfig)({providers:[(0,core.importProvidersFrom)(animations.BrowserAnimationsModule)]})]},LoggedOut={},LoggedIn={play:(_ref=(0,asyncToGenerator.Z)((function*({canvasElement}){const canvas=(0,test_dist.uh)(canvasElement),loginButton=canvas.getByRole("button",{name:/Log in/i});yield(0,test_dist.l_)(loginButton).toBeInTheDocument(),yield test_dist.mV.click(loginButton),yield(0,test_dist.l_)(loginButton).not.toBeInTheDocument();const logoutButton=canvas.getByRole("button",{name:/Log out/i});yield(0,test_dist.l_)(logoutButton).toBeInTheDocument()})),function play(_x){return _ref.apply(this,arguments)})};var _ref;LoggedOut.parameters={...LoggedOut.parameters,docs:{...LoggedOut.parameters?.docs,source:{originalSource:"{}",...LoggedOut.parameters?.docs?.source}}},LoggedIn.parameters={...LoggedIn.parameters,docs:{...LoggedIn.parameters?.docs,source:{originalSource:"{\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const loginButton = canvas.getByRole('button', {\n      name: /Log in/i\n    });\n    await expect(loginButton).toBeInTheDocument();\n    await userEvent.click(loginButton);\n    await expect(loginButton).not.toBeInTheDocument();\n    const logoutButton = canvas.getByRole('button', {\n      name: /Log out/i\n    });\n    await expect(logoutButton).toBeInTheDocument();\n  }\n}",...LoggedIn.parameters?.docs?.source}}};const __namedExportsOrder=["LoggedOut","LoggedIn"]},"./node_modules/@storybook/instrumenter/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/instrumenter/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/test/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/test/dist sync recursive",module.exports=webpackEmptyContext},"./src/stories/button.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".storybook-button {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-weight: 700;\n  border: 0;\n  border-radius: 3em;\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1;\n}\n.storybook-button--primary {\n  color: white;\n  background-color: #1ea7fd;\n}\n.storybook-button--secondary {\n  color: #333;\n  background-color: transparent;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n}\n.storybook-button--small {\n  font-size: 12px;\n  padding: 10px 16px;\n}\n.storybook-button--medium {\n  font-size: 14px;\n  padding: 11px 20px;\n}\n.storybook-button--large {\n  font-size: 16px;\n  padding: 12px 24px;\n}\n",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/stories/header.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".storybook-header {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 15px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.storybook-header svg {\n  display: inline-block;\n  vertical-align: top;\n}\n\n.storybook-header h1 {\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 1;\n  margin: 6px 0 6px 10px;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.storybook-header button + button {\n  margin-left: 10px;\n}\n\n.storybook-header .welcome {\n  color: #333;\n  font-size: 14px;\n  margin-right: 10px;\n}\n",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/stories/page.css?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".storybook-page {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 24px;\n  padding: 48px 20px;\n  margin: 0 auto;\n  max-width: 600px;\n  color: #333;\n}\n\n.storybook-page h2 {\n  font-weight: 700;\n  font-size: 32px;\n  line-height: 1;\n  margin: 0 0 4px;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.storybook-page p {\n  margin: 1em 0;\n}\n\n.storybook-page a {\n  text-decoration: none;\n  color: #1ea7fd;\n}\n\n.storybook-page ul {\n  padding-left: 30px;\n  margin: 1em 0;\n}\n\n.storybook-page li {\n  margin-bottom: 8px;\n}\n\n.storybook-page .tip {\n  display: inline-block;\n  border-radius: 1em;\n  font-size: 11px;\n  line-height: 12px;\n  font-weight: 700;\n  background: #e7fdd8;\n  color: #66bf3c;\n  padding: 4px 12px;\n  margin-right: 10px;\n  vertical-align: top;\n}\n\n.storybook-page .tip-wrapper {\n  font-size: 13px;\n  line-height: 20px;\n  margin-top: 40px;\n  margin-bottom: 40px;\n}\n\n.storybook-page .tip-wrapper svg {\n  display: inline-block;\n  height: 12px;\n  width: 12px;\n  margin-right: 4px;\n  vertical-align: top;\n  margin-top: 3px;\n}\n\n.storybook-page .tip-wrapper svg path {\n  fill: #1ea7fd;\n}\n",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);