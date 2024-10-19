(self["webpackChunktest_ng7"] = self["webpackChunktest_ng7"] || []).push([["src_app_common-layout_common-layout_module_ts"],{

/***/ 8843:
/*!***************************************************************!*\
  !*** ./src/app/common-layout/common-layout-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommonLayoutRoutingModule: () => (/* binding */ CommonLayoutRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _components_shared_components_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/shared-components/home/home.component */ 7781);
/* harmony import */ var _components_shared_components_about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/shared-components/about/about.component */ 8373);
/* harmony import */ var _components_shared_components_contact_contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/shared-components/contact/contact.component */ 9300);
/* harmony import */ var _components_shared_components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/shared-components/login/login.component */ 5803);
/* harmony import */ var _components_shared_components_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/shared-components/register/register.component */ 35);
/* harmony import */ var _shared_components_layout_common_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared-components/layout/common-layout.component */ 6582);
/* harmony import */ var _components_shared_components_shop_shop_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/shared-components/shop/shop.component */ 6791);










const routes = [{
  path: '',
  component: _shared_components_layout_common_layout_component__WEBPACK_IMPORTED_MODULE_5__.CommonLayoutComponent,
  children: [{
    path: '',
    redirectTo: 'home',
    pathMatch: 'prefix'
  }, {
    path: 'home',
    component: _components_shared_components_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
  }, {
    path: 'about',
    component: _components_shared_components_about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent
  }, {
    path: 'contact',
    component: _components_shared_components_contact_contact_component__WEBPACK_IMPORTED_MODULE_2__.ContactComponent
  }, {
    path: 'product/:id',
    component: _components_shared_components_shop_shop_component__WEBPACK_IMPORTED_MODULE_6__.ShopComponent
  }, {
    path: 'login',
    component: _components_shared_components_login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent
  }, {
    path: 'register',
    component: _components_shared_components_register_register_component__WEBPACK_IMPORTED_MODULE_4__.RegisterComponent
  }]
}];
let CommonLayoutRoutingModule = class CommonLayoutRoutingModule {};
CommonLayoutRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
})], CommonLayoutRoutingModule);


/***/ }),

/***/ 7342:
/*!*******************************************************!*\
  !*** ./src/app/common-layout/common-layout.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommonLayoutModule: () => (/* binding */ CommonLayoutModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 5618);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 1916);
/* harmony import */ var _common_layout_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common-layout-routing.module */ 8843);
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared-components/header/header.component */ 2014);
/* harmony import */ var _components_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/component.module */ 9109);
/* harmony import */ var _shared_components_layout_common_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared-components/layout/common-layout.component */ 6582);
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared-components/footer/footer.component */ 3352);










let CommonLayoutModule = class CommonLayoutModule {};
CommonLayoutModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _common_layout_routing_module__WEBPACK_IMPORTED_MODULE_0__.CommonLayoutRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdownModule, _components_component_module__WEBPACK_IMPORTED_MODULE_2__.ComponentModule],
  declarations: [_shared_components_layout_common_layout_component__WEBPACK_IMPORTED_MODULE_3__.CommonLayoutComponent, _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent]
})], CommonLayoutModule);


/***/ }),

/***/ 3352:
/*!****************************************************************************!*\
  !*** ./src/app/common-layout/shared-components/footer/footer.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _footer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.component.html?ngResource */ 252);
/* harmony import */ var _footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component.scss?ngResource */ 7041);
/* harmony import */ var _footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);




let FooterComponent = class FooterComponent {};
FooterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-footer',
  template: _footer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], FooterComponent);


/***/ }),

/***/ 2014:
/*!****************************************************************************!*\
  !*** ./src/app/common-layout/shared-components/header/header.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.component.html?ngResource */ 4652);
/* harmony import */ var _header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.component.scss?ngResource */ 6697);
/* harmony import */ var _header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _shared_model_shopSubmenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/model/shopSubmenu */ 6037);





let HeaderComponent = class HeaderComponent {
  constructor() {
    this.shopSubmenuArr = _shared_model_shopSubmenu__WEBPACK_IMPORTED_MODULE_2__.ShopSubmenu;
  }
  ngOnInit() {}
  static #_ = this.ctorParameters = () => [];
};
HeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-header',
  template: _header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], HeaderComponent);


/***/ }),

/***/ 6582:
/*!***********************************************************************************!*\
  !*** ./src/app/common-layout/shared-components/layout/common-layout.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommonLayoutComponent: () => (/* binding */ CommonLayoutComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _common_layout_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common-layout.component.html?ngResource */ 1436);
/* harmony import */ var _common_layout_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common-layout.component.scss?ngResource */ 6253);
/* harmony import */ var _common_layout_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_common_layout_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);




let CommonLayoutComponent = class CommonLayoutComponent {
  constructor() {}
  ngOnInit() {}
  receiveCollapsed($event) {
    this.collapedSideBar = $event;
  }
  static #_ = this.ctorParameters = () => [];
};
CommonLayoutComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-common-layout',
  template: _common_layout_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_common_layout_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], CommonLayoutComponent);


/***/ }),

/***/ 5400:
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/ReplaySubject.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReplaySubject: () => (/* binding */ ReplaySubject)
/* harmony export */ });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subject */ 2513);
/* harmony import */ var _scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scheduler/dateTimestampProvider */ 6926);


class ReplaySubject extends _Subject__WEBPACK_IMPORTED_MODULE_0__.Subject {
  constructor(_bufferSize = Infinity, _windowTime = Infinity, _timestampProvider = _scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_1__.dateTimestampProvider) {
    super();
    this._bufferSize = _bufferSize;
    this._windowTime = _windowTime;
    this._timestampProvider = _timestampProvider;
    this._buffer = [];
    this._infiniteTimeWindow = true;
    this._infiniteTimeWindow = _windowTime === Infinity;
    this._bufferSize = Math.max(1, _bufferSize);
    this._windowTime = Math.max(1, _windowTime);
  }
  next(value) {
    const {
      isStopped,
      _buffer,
      _infiniteTimeWindow,
      _timestampProvider,
      _windowTime
    } = this;
    if (!isStopped) {
      _buffer.push(value);
      !_infiniteTimeWindow && _buffer.push(_timestampProvider.now() + _windowTime);
    }
    this._trimBuffer();
    super.next(value);
  }
  _subscribe(subscriber) {
    this._throwIfClosed();
    this._trimBuffer();
    const subscription = this._innerSubscribe(subscriber);
    const {
      _infiniteTimeWindow,
      _buffer
    } = this;
    const copy = _buffer.slice();
    for (let i = 0; i < copy.length && !subscriber.closed; i += _infiniteTimeWindow ? 1 : 2) {
      subscriber.next(copy[i]);
    }
    this._checkFinalizedStatuses(subscriber);
    return subscription;
  }
  _trimBuffer() {
    const {
      _bufferSize,
      _timestampProvider,
      _buffer,
      _infiniteTimeWindow
    } = this;
    const adjustedBufferSize = (_infiniteTimeWindow ? 1 : 2) * _bufferSize;
    _bufferSize < Infinity && adjustedBufferSize < _buffer.length && _buffer.splice(0, _buffer.length - adjustedBufferSize);
    if (!_infiniteTimeWindow) {
      const now = _timestampProvider.now();
      let last = 0;
      for (let i = 1; i < _buffer.length && _buffer[i] <= now; i += 2) {
        last = i;
      }
      last && _buffer.splice(0, last + 1);
    }
  }
}

/***/ }),

/***/ 1650:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/shareReplay.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shareReplay: () => (/* binding */ shareReplay)
/* harmony export */ });
/* harmony import */ var _ReplaySubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ReplaySubject */ 5400);
/* harmony import */ var _share__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./share */ 5584);


function shareReplay(configOrBufferSize, windowTime, scheduler) {
  let bufferSize;
  let refCount = false;
  if (configOrBufferSize && typeof configOrBufferSize === 'object') {
    ({
      bufferSize = Infinity,
      windowTime = Infinity,
      refCount = false,
      scheduler
    } = configOrBufferSize);
  } else {
    bufferSize = configOrBufferSize !== null && configOrBufferSize !== void 0 ? configOrBufferSize : Infinity;
  }
  return (0,_share__WEBPACK_IMPORTED_MODULE_0__.share)({
    connector: () => new _ReplaySubject__WEBPACK_IMPORTED_MODULE_1__.ReplaySubject(bufferSize, windowTime, scheduler),
    resetOnError: true,
    resetOnComplete: false,
    resetOnRefCountZero: refCount
  });
}

/***/ }),

/***/ 7041:
/*!*****************************************************************************************!*\
  !*** ./src/app/common-layout/shared-components/footer/footer.component.scss?ngResource ***!
  \*****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*==================== 
	Footer 
====================== */
/* Main Footer */
footer .main-footer {
  padding: 20px 0;
  background: #252525;
}

footer ul {
  padding-left: 0;
  list-style: none;
}

/* Copy Right Footer */
.footer-copyright {
  background: #222;
  padding: 5px 0;
}

.footer-copyright .logo {
  display: inherit;
}

.footer-copyright nav {
  float: right;
  margin-top: 5px;
}

.footer-copyright nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.footer-copyright nav ul li {
  border-left: 1px solid #505050;
  display: inline-block;
  line-height: 12px;
  margin: 0;
  padding: 0 8px;
}

.footer-copyright nav ul li a {
  color: #969696;
}

.footer-copyright nav ul li:first-child {
  border: medium none;
  padding-left: 0;
}

.footer-copyright p {
  color: #969696;
  margin: 2px 0 0;
}

/* Footer Top */
.footer-top {
  background: #252525;
  padding-bottom: 30px;
  margin-bottom: 30px;
  border-bottom: 3px solid #222;
}

/* Footer transparent */
footer.transparent .footer-top, footer.transparent .main-footer {
  background: transparent;
}

footer.transparent .footer-copyright {
  background: none repeat scroll 0 0 rgba(0, 0, 0, 0.3);
}

/* Footer light */
footer.light .footer-top {
  background: #f9f9f9;
}

footer.light .main-footer {
  background: #f9f9f9;
}

footer.light .footer-copyright {
  background: none repeat scroll 0 0 rgba(255, 255, 255, 0.3);
}

/* Footer 4 */
.footer- .logo {
  display: inline-block;
}

/*==================== 
	Widgets 
====================== */
.widget {
  padding: 20px;
  margin-bottom: 40px;
}

.widget.widget-last {
  margin-bottom: 0px;
}

.widget.no-box {
  padding: 0;
  background-color: transparent;
  margin-bottom: 40px;
  box-shadow: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  -ms-box-shadow: none;
  -o-box-shadow: none;
}

.widget.subscribe p {
  margin-bottom: 18px;
}

.widget li a {
  color: #fff;
}

.widget li a:hover {
  color: #aaa;
  text-decoration: none;
}

.widget-title {
  margin-bottom: 20px;
}

.widget-title span {
  background: #839FAD none repeat scroll 0 0;
  display: block;
  height: 1px;
  margin-top: 25px;
  position: relative;
  width: 20%;
}

.widget-title span::after {
  background: inherit;
  content: "";
  height: inherit;
  position: absolute;
  top: -4px;
  width: 50%;
}

.widget-title.text-center span, .widget-title.text-center span::after {
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
}

.widget .badge {
  float: right;
  background: #7f7f7f;
}

.typo-light h1,
.typo-light h2,
.typo-light h3,
.typo-light h4,
.typo-light h5,
.typo-light h6,
.typo-light p,
.typo-light div,
.typo-light span,
.typo-light small {
  color: #fff;
}

ul.social-footer2 {
  margin: 0;
  padding: 0;
  width: auto;
}

ul.social-footer2 li {
  display: inline-block;
  padding: 0;
}

ul.social-footer2 li a:hover {
  background-color: #17a2b8;
}

ul.social-footer2 li a {
  display: block;
  height: 30px;
  width: 30px;
  text-align: center;
}

.btn {
  background-color: #17a2b8;
  color: #fff;
}

.btn:hover, .btn:focus, .btn.active {
  background: #4b92dc;
  color: #fff;
  -ms-box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  -o-box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  transition: all 250ms ease-in-out 0s;
}

.fa {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  background-color: #3e3e3e;
  color: #fff;
  padding: 9px;
  border-radius: 5px;
}

#subscribe-box .emailfield {
  margin: auto;
}

input[type=text] {
  background: rgba(255, 255, 255, 0.075);
  padding: 10px 15px;
  color: #aaa;
  border: 3px solid rgba(0, 0, 0, 0.1);
  font-size: 14px;
  margin-bottom: 16px;
  border-radius: 5px;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: 0.2s;
  text-align: center;
  width: 100%;
}

input.submitbutton.ripplelink {
  background: #17a2b8;
  border: 3px solid rgba(0, 0, 0, 0.1);
  color: #fff;
  border-color: #17a2b8;
  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2);
  transition-delay: 0s;
  width: 100%;
  font-size: 14px;
  /* font-weight: 700; */
  border: 0px solid;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 10px 15px;
  margin-bottom: 16px;
  border-radius: 5px;
}

.thumb-content ::before {
  content: "\\f190";
  font-family: FontAwesome;
  font-style: normal;
  font-weight: normal;
  text-decoration: inherit;
  margin-left: 5px;
  color: #ffffff;
}`, "",{"version":3,"sources":["webpack://./src/app/common-layout/shared-components/footer/footer.component.scss"],"names":[],"mappings":"AAAA;;wBAAA;AAIA,gBAAA;AACA;EAAqB,eAAA;EAAiB,mBAAA;AAEtC;;AADA;EAAW,eAAA;EAAiB,gBAAA;AAM5B;;AAJA,sBAAA;AACA;EAAoB,gBAAA;EAAkB,cAAA;AAStC;;AARA;EAA6B,gBAAA;AAY7B;;AAXA;EAA2B,YAAA;EAAiB,eAAA;AAgB5C;;AAfA;EAA2B,gBAAA;EAAkB,SAAA;EAAW,UAAA;AAqBxD;;AApBA;EAA8B,8BAAA;EAAgC,qBAAA;EAAuB,iBAAA;EAAmB,SAAA;EAAW,cAAA;AA4BnH;;AA3BA;EAA+B,cAAA;AA+B/B;;AA9BA;EAA0C,mBAAA;EAAqB,eAAA;AAmC/D;;AAlCA;EAAsB,cAAA;EAAgB,eAAA;AAuCtC;;AArCA,eAAA;AACA;EAAa,mBAAA;EAAqB,oBAAA;EAAsB,mBAAA;EAAqB,6BAAA;AA4C7E;;AA1CA,uBAAA;AACA;EAAiE,uBAAA;AA8CjE;;AA7CA;EAAsC,qDAAA;AAiDtC;;AA/CA,iBAAA;AACA;EAA0B,mBAAA;AAmD1B;;AAlDA;EAA2B,mBAAA;AAsD3B;;AArDA;EAAgC,2DAAA;AAyDhC;;AAvDA,aAAA;AACA;EAAoB,qBAAA;AA2DpB;;AAzDA;;wBAAA;AAGA;EAAS,aAAA;EAAe,mBAAA;AA8DxB;;AA7DA;EAAqB,kBAAA;AAiErB;;AAhEA;EAAgB,UAAA;EAAY,6BAAA;EAA+B,mBAAA;EAC1D,gBAAA;EAAkB,wBAAA;EAA0B,qBAAA;EAAuB,oBAAA;EAAsB,mBAAA;AA0E1F;;AAzEA;EAAqB,mBAAA;AA6ErB;;AA5EA;EAAc,WAAA;AAgFd;;AA/EA;EAAoB,WAAA;EAAY,qBAAA;AAoFhC;;AAnFA;EAAe,mBAAA;AAuFf;;AAtFA;EAAoB,0CAAA;EAA2C,cAAA;EAAgB,WAAA;EAAY,gBAAA;EAAiB,kBAAA;EAAmB,UAAA;AA+F/H;;AA9FA;EAA2B,mBAAA;EAAoB,WAAA;EAAY,eAAA;EAAoB,kBAAA;EAAmB,SAAA;EAAU,UAAA;AAuG5G;;AAtGA;EAAsE,iBAAA;EAAkB,kBAAA;EAAkB,OAAA;EAAQ,QAAA;AA6GlH;;AA5GA;EAAgB,YAAA;EAAc,mBAAA;AAiH9B;;AA/GA;;;;;;;;;;EASmB,WAAA;AAmHnB;;AAjHA;EAAoB,SAAA;EAAU,UAAA;EAAY,WAAA;AAuH1C;;AAtHA;EAAsB,qBAAA;EAAsB,UAAA;AA2H5C;;AA1HA;EAA8B,yBAAA;AA8H9B;;AA7HA;EAAwB,cAAA;EAAgB,YAAA;EAAY,WAAA;EAAY,kBAAA;AAoIhE;;AAnIA;EAAK,yBAAA;EAA4B,WAAA;AAwIjC;;AAvIA;EAAqC,mBAAA;EAAoB,WAAA;EAGzD,8CAAA;EACA,6CAAA;EACA,0CAAA;EAKA,oCAAA;AA4IA;;AAxIA;EACI,qBAAA;EACA,6CAAA;EACA,yBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;AA2IJ;;AAxIA;EACI,YAAA;AA2IJ;;AAxIA;EACI,sCAAA;EACA,kBAAA;EACA,WAAA;EACA,oCAAA;EACA,eAAA;EACA,mBAAA;EACA,kBAAA;EACA,iDAAA;EACA,sBAAA;EACA,kBAAA;EACA,WAAA;AA2IJ;;AAxIA;EACI,mBAAA;EACA,oCAAA;EACA,WAAA;EACA,qBAAA;EACA,2CAAA;EACA,oBAAA;EACA,WAAA;EACA,eAAA;EACA,sBAAA;EACA,iBAAA;EACA,iDAAA;EACA,kBAAA;EACA,mBAAA;EACA,kBAAA;AA2IJ;;AAxIA;EACI,gBAAA;EACA,wBAAA;EACA,kBAAA;EACA,mBAAA;EACA,wBAAA;EACA,gBAAA;EACA,cAAA;AA2IJ","sourcesContent":["/*==================== \r\n\tFooter \r\n====================== */\r\n\r\n/* Main Footer */\r\nfooter .main-footer{\tpadding: 20px 0;\tbackground: #252525;}\r\nfooter ul{\tpadding-left: 0;\tlist-style: none;}\r\n\r\n/* Copy Right Footer */\r\n.footer-copyright {\tbackground: #222;\tpadding: 5px 0;}\r\n.footer-copyright .logo {    display: inherit;}\r\n.footer-copyright nav {    float: right;    margin-top: 5px;}\r\n.footer-copyright nav ul {\tlist-style: none;\tmargin: 0;\tpadding: 0;}\r\n.footer-copyright nav ul li {\tborder-left: 1px solid #505050;\tdisplay: inline-block;\tline-height: 12px;\tmargin: 0;\tpadding: 0 8px;}\r\n.footer-copyright nav ul li a{\tcolor: #969696;}\r\n.footer-copyright nav ul li:first-child {\tborder: medium none;\tpadding-left: 0;}\r\n.footer-copyright p {\tcolor: #969696;\tmargin: 2px 0 0;}\r\n\r\n/* Footer Top */\r\n.footer-top{\tbackground: #252525;\tpadding-bottom: 30px;\tmargin-bottom: 30px;\tborder-bottom: 3px solid #222;}\r\n\r\n/* Footer transparent */\r\nfooter.transparent .footer-top, footer.transparent .main-footer{\tbackground: transparent;}\r\nfooter.transparent .footer-copyright{\tbackground: none repeat scroll 0 0 rgba(0, 0, 0, 0.3) ;}\r\n\r\n/* Footer light */\r\nfooter.light .footer-top{\tbackground: #f9f9f9;}\r\nfooter.light .main-footer{\tbackground: #f9f9f9;}\r\nfooter.light .footer-copyright{\tbackground: none repeat scroll 0 0 rgba(255, 255, 255, 0.3) ;}\r\n\r\n/* Footer 4 */\r\n.footer- .logo {    display: inline-block;}\r\n\r\n/*==================== \r\n\tWidgets \r\n====================== */\r\n.widget{\tpadding: 20px;\tmargin-bottom: 40px;}\r\n.widget.widget-last{\tmargin-bottom: 0px;}\r\n.widget.no-box{\tpadding: 0;\tbackground-color: transparent;\tmargin-bottom: 40px;\r\n\tbox-shadow: none; -webkit-box-shadow: none; -moz-box-shadow: none; -ms-box-shadow: none; -o-box-shadow: none;}\r\n.widget.subscribe p{\tmargin-bottom: 18px;}\r\n.widget li a{\tcolor: #fff;}\r\n.widget li a:hover{\tcolor: #aaa;text-decoration: none;}\r\n.widget-title {margin-bottom: 20px;}\r\n.widget-title span {background: #839FAD none repeat scroll 0 0;display: block; height: 1px;margin-top: 25px;position: relative;width: 20%;}\r\n.widget-title span::after {background: inherit;content: \"\";height: inherit;    position: absolute;top: -4px;width: 50%;}\r\n.widget-title.text-center span,.widget-title.text-center span::after {margin-left: auto;margin-right:auto;left: 0;right: 0;}\r\n.widget .badge{\tfloat: right;\tbackground: #7f7f7f;}\r\n\r\n.typo-light h1, \r\n.typo-light h2, \r\n.typo-light h3, \r\n.typo-light h4, \r\n.typo-light h5, \r\n.typo-light h6,\r\n.typo-light p,\r\n.typo-light div,\r\n.typo-light span,\r\n.typo-light small{\tcolor: #fff;}\r\n\r\nul.social-footer2 {\tmargin: 0;padding: 0;\twidth: auto;}\r\nul.social-footer2 li {display: inline-block;padding: 0;}\r\nul.social-footer2 li a:hover {background-color:#17a2b8 ;}\r\nul.social-footer2 li a {display: block;\theight:30px;width: 30px;text-align: center;}\r\n.btn{background-color: #17a2b8 ; color:#fff;}\r\n.btn:hover, .btn:focus, .btn.active {background: #4b92dc;color: #fff;\r\n-webkit-box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);\r\n-moz-box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);\r\n-ms-box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);\r\n-o-box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);\r\nbox-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);\r\n-webkit-transition: all 250ms ease-in-out 0s;\r\n-moz-transition: all 250ms ease-in-out 0s;\r\n-ms-transition: all 250ms ease-in-out 0s;\r\n-o-transition: all 250ms ease-in-out 0s;\r\ntransition: all 250ms ease-in-out 0s;\r\n\r\n}\r\n\r\n.fa {\r\n    display: inline-block;\r\n    font: normal normal normal 14px/1 FontAwesome;\r\n    background-color: #3e3e3e;\r\n    color: #fff;\r\n    padding: 9px;\r\n    border-radius: 5px;\r\n}\r\n\r\n#subscribe-box .emailfield {\r\n    margin: auto;\r\n}\r\n\r\ninput[type=\"text\"] {\r\n    background: rgba(255,255,255,0.075);\r\n    padding: 10px 15px;\r\n    color: #aaa;\r\n    border: 3px solid rgba(0,0,0,0.1);\r\n    font-size: 14px;\r\n    margin-bottom: 16px;\r\n    border-radius: 5px;\r\n    transition: all 0.2s cubic-bezier(0.4,0,0.2,1);\r\n    transition-delay: 0.2s;\r\n    text-align: center;\r\n    width: 100%;\r\n}\r\n\r\ninput.submitbutton.ripplelink {\r\n    background: #17a2b8 ;\r\n    border: 3px solid rgba(0,0,0,0.1);\r\n    color: #fff;\r\n    border-color: #17a2b8 ;\r\n    box-shadow: 0 8px 17px 0 rgba(0,0,0,0.2);\r\n    transition-delay: 0s;\r\n    width: 100%;\r\n    font-size: 14px;\r\n    /* font-weight: 700; */\r\n    border: 0px solid;\r\n    transition: all 0.2s cubic-bezier(0.4,0,0.2,1);\r\n    padding: 10px 15px;\r\n    margin-bottom: 16px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.thumb-content ::before {\r\n    content: \"\\f190\";\r\n    font-family: FontAwesome;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    text-decoration: inherit;\r\n    margin-left: 5px;\r\n    color: #ffffff;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 6697:
/*!*****************************************************************************************!*\
  !*** ./src/app/common-layout/shared-components/header/header.component.scss?ngResource ***!
  \*****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 6253:
/*!************************************************************************************************!*\
  !*** ./src/app/common-layout/shared-components/layout/common-layout.component.scss?ngResource ***!
  \************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 2487);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 1386);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 252:
/*!*****************************************************************************************!*\
  !*** ./src/app/common-layout/shared-components/footer/footer.component.html?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<footer id=\"footer\" class=\"footer-1\">\n    <div class=\"main-footer widgets-dark typo-light\">\n        <div class=\"container\">\n            <div class=\"row\">\n\n                <div class=\"col-xs-12 col-sm-6 col-md-3\">\n                    <div class=\"widget subscribe no-box\">\n                        <h5 class=\"widget-title\">Bansal Handicrafts<span></span></h5>\n                        <p>We are the manufacturer of Agate & Semiprecious Stone Slabs and its Articles based in Delhi, India. \n                            We can make slabs for many products like dining table, coffee table, side table, kitchen counter, bathroom counter, \n                            wall panel and many more.</p>\n                    </div>\n                </div>\n\n\n                <div class=\"col-xs-12 col-sm-6 col-md-3\">\n                    <div class=\"widget no-box\">\n                        <h5 class=\"widget-title\">Quick Links<span></span></h5>\n                        <ul class=\"thumbnail-widget\">\n                            <li>\n                                <div class=\"thumb-content\"><a href=\"#.\">&nbsp;Home</a></div>\n                            </li>\n                            <li>\n                                <div class=\"thumb-content\"><a href=\"#.\">&nbsp;About</a></div>\n                            </li>\n                            <li>\n                                <div class=\"thumb-content\"><a href=\"#.\">&nbsp;Contact</a></div>\n                            </li>\n                            \n                        </ul>\n                    </div>\n                </div>\n\n\n\n                <div class=\"col-xs-12 col-sm-6 col-md-3\">\n                    <div class=\"widget no-box\">\n                        <h5 class=\"widget-title\">Follow up<span></span></h5>\n                        <a href=\"#\" class=\"mx-1\"> <i class=\"fa fa-facebook\"> </i> </a>\n                        <a href=\"#\"  class=\"mx-1\"> <i class=\"fa fa-instagram\"> </i> </a>\n                        <a href=\"#\"  class=\"mx-1\"> <i class=\"fa fa-youtube\"> </i> </a>\n                    </div>\n                </div>\n                <br>\n                <br>\n\n\n                <div class=\"col-xs-12 col-sm-6 col-md-3\">\n                    <div class=\"widget no-box\">                        \n                            <h6><b> Contact us:</b></h6>\n                            <p><b>Devendar Bansal (Office):</b>+91 9810190287</p>\n                            <p><b>Aman Bansal:</b>+91 8700806736</p>\n                            <p><b>Email at:</b> devendarbansal@gmail.com, bansalhandicrafts11@gmail.com</p>\n                            <small> <b><i>We provide 24/7 assistance</i></b></small>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n\n        <div class=\"footer-copyright\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-12 text-center\">\n                        <p>Copyright BansalHandicrafts © 2021. All rights reserved.</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</footer>";

/***/ }),

/***/ 4652:
/*!*****************************************************************************************!*\
  !*** ./src/app/common-layout/shared-components/header/header.component.html?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<nav id=\"navbar_top\" class=\"navbar navbar-expand-lg navbar-light\">\r\n    <div class=\"container-fluid\">\r\n      <a class=\"navbar-brand\"><img src=\"/assets/img/bansal-logo.png\"  class=\"d-inline-block align-top\" alt=\"\" loading=\"lazy\">\r\n      </a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n        <ul class=\"navbar-nav ml-auto\">\r\n          <li class=\"nav-item active\">\r\n            <a class=\"nav-link\" routerLink=\"/\">Home</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLink=\"/about\">About</a>\r\n          </li>\r\n          <li class=\"nav-item dropdown\">\r\n            <a class=\"nav-link dropdown-toggle\" role=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n              Shop\r\n            </a>\r\n            <ul class=\"dropdown-menu navbar-expand-lg\" style=\"height: 400px; overflow-y: scroll;\">\r\n              <li *ngFor=\"let item of shopSubmenuArr\">\r\n                <a class=\"nav-link\" routerLink=\"/product/{{item.id}}\">{{item.label}}</a>\r\n              </li>\r\n            </ul>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\">Exhibition</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\">Projects</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLink=\"/contact\">Contact</a>\r\n          </li>\r\n          \r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLink=\"/login\">Login</a>\r\n          </li>\r\n        </ul>\r\n        \r\n      </div>\r\n    </div>\r\n  </nav>";

/***/ }),

/***/ 1436:
/*!************************************************************************************************!*\
  !*** ./src/app/common-layout/shared-components/layout/common-layout.component.html?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"wrapper\" style=\"overflow: hidden\">\n    <app-header></app-header>\n    <section class=\"main-container\">\n    <router-outlet></router-outlet> \n    </section>\n    <app-footer></app-footer>\n</div>\n\n";

/***/ }),

/***/ 1916:
/*!**************************************************************************!*\
  !*** ./node_modules/@ngx-translate/core/fesm2020/ngx-translate-core.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_LANGUAGE: () => (/* binding */ DEFAULT_LANGUAGE),
/* harmony export */   FakeMissingTranslationHandler: () => (/* binding */ FakeMissingTranslationHandler),
/* harmony export */   MissingTranslationHandler: () => (/* binding */ MissingTranslationHandler),
/* harmony export */   TranslateCompiler: () => (/* binding */ TranslateCompiler),
/* harmony export */   TranslateDefaultParser: () => (/* binding */ TranslateDefaultParser),
/* harmony export */   TranslateDirective: () => (/* binding */ TranslateDirective),
/* harmony export */   TranslateFakeCompiler: () => (/* binding */ TranslateFakeCompiler),
/* harmony export */   TranslateFakeLoader: () => (/* binding */ TranslateFakeLoader),
/* harmony export */   TranslateLoader: () => (/* binding */ TranslateLoader),
/* harmony export */   TranslateModule: () => (/* binding */ TranslateModule),
/* harmony export */   TranslateParser: () => (/* binding */ TranslateParser),
/* harmony export */   TranslatePipe: () => (/* binding */ TranslatePipe),
/* harmony export */   TranslateService: () => (/* binding */ TranslateService),
/* harmony export */   TranslateStore: () => (/* binding */ TranslateStore),
/* harmony export */   USE_DEFAULT_LANG: () => (/* binding */ USE_DEFAULT_LANG),
/* harmony export */   USE_EXTEND: () => (/* binding */ USE_EXTEND),
/* harmony export */   USE_STORE: () => (/* binding */ USE_STORE)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2568);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 4300);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 9644);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 3558);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 1527);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 1650);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9736);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 9877);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 1891);




class TranslateLoader {}
/**
 * This loader is just a placeholder that does nothing, in case you don't need a loader at all
 */
class TranslateFakeLoader extends TranslateLoader {
  getTranslation(lang) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)({});
  }
}
TranslateFakeLoader.ɵfac = /* @__PURE__ */function () {
  let ɵTranslateFakeLoader_BaseFactory;
  return function TranslateFakeLoader_Factory(t) {
    return (ɵTranslateFakeLoader_BaseFactory || (ɵTranslateFakeLoader_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](TranslateFakeLoader)))(t || TranslateFakeLoader);
  };
}();
TranslateFakeLoader.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: TranslateFakeLoader,
  factory: TranslateFakeLoader.ɵfac
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TranslateFakeLoader, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], null, null);
})();
class MissingTranslationHandler {}
/**
 * This handler is just a placeholder that does nothing, in case you don't need a missing translation handler at all
 */
class FakeMissingTranslationHandler {
  handle(params) {
    return params.key;
  }
}
FakeMissingTranslationHandler.ɵfac = function FakeMissingTranslationHandler_Factory(t) {
  return new (t || FakeMissingTranslationHandler)();
};
FakeMissingTranslationHandler.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: FakeMissingTranslationHandler,
  factory: FakeMissingTranslationHandler.ɵfac
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FakeMissingTranslationHandler, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], null, null);
})();

/* tslint:disable */
/**
 * Determines if two objects or two values are equivalent.
 *
 * Two objects or values are considered equivalent if at least one of the following is true:
 *
 * * Both objects or values pass `===` comparison.
 * * Both objects or values are of the same type and all of their properties are equal by
 *   comparing them with `equals`.
 *
 * @param o1 Object or value to compare.
 * @param o2 Object or value to compare.
 * @returns true if arguments are equal.
 */
function equals(o1, o2) {
  if (o1 === o2) return true;
  if (o1 === null || o2 === null) return false;
  if (o1 !== o1 && o2 !== o2) return true; // NaN === NaN
  let t1 = typeof o1,
    t2 = typeof o2,
    length,
    key,
    keySet;
  if (t1 == t2 && t1 == 'object') {
    if (Array.isArray(o1)) {
      if (!Array.isArray(o2)) return false;
      if ((length = o1.length) == o2.length) {
        for (key = 0; key < length; key++) {
          if (!equals(o1[key], o2[key])) return false;
        }
        return true;
      }
    } else {
      if (Array.isArray(o2)) {
        return false;
      }
      keySet = Object.create(null);
      for (key in o1) {
        if (!equals(o1[key], o2[key])) {
          return false;
        }
        keySet[key] = true;
      }
      for (key in o2) {
        if (!(key in keySet) && typeof o2[key] !== 'undefined') {
          return false;
        }
      }
      return true;
    }
  }
  return false;
}
/* tslint:enable */
function isDefined(value) {
  return typeof value !== 'undefined' && value !== null;
}
function isObject(item) {
  return item && typeof item === 'object' && !Array.isArray(item);
}
function mergeDeep(target, source) {
  let output = Object.assign({}, target);
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach(key => {
      if (isObject(source[key])) {
        if (!(key in target)) {
          Object.assign(output, {
            [key]: source[key]
          });
        } else {
          output[key] = mergeDeep(target[key], source[key]);
        }
      } else {
        Object.assign(output, {
          [key]: source[key]
        });
      }
    });
  }
  return output;
}
class TranslateParser {}
class TranslateDefaultParser extends TranslateParser {
  constructor() {
    super(...arguments);
    this.templateMatcher = /{{\s?([^{}\s]*)\s?}}/g;
  }
  interpolate(expr, params) {
    let result;
    if (typeof expr === 'string') {
      result = this.interpolateString(expr, params);
    } else if (typeof expr === 'function') {
      result = this.interpolateFunction(expr, params);
    } else {
      // this should not happen, but an unrelated TranslateService test depends on it
      result = expr;
    }
    return result;
  }
  getValue(target, key) {
    let keys = typeof key === 'string' ? key.split('.') : [key];
    key = '';
    do {
      key += keys.shift();
      if (isDefined(target) && isDefined(target[key]) && (typeof target[key] === 'object' || !keys.length)) {
        target = target[key];
        key = '';
      } else if (!keys.length) {
        target = undefined;
      } else {
        key += '.';
      }
    } while (keys.length);
    return target;
  }
  interpolateFunction(fn, params) {
    return fn(params);
  }
  interpolateString(expr, params) {
    if (!params) {
      return expr;
    }
    return expr.replace(this.templateMatcher, (substring, b) => {
      let r = this.getValue(params, b);
      return isDefined(r) ? r : substring;
    });
  }
}
TranslateDefaultParser.ɵfac = /* @__PURE__ */function () {
  let ɵTranslateDefaultParser_BaseFactory;
  return function TranslateDefaultParser_Factory(t) {
    return (ɵTranslateDefaultParser_BaseFactory || (ɵTranslateDefaultParser_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](TranslateDefaultParser)))(t || TranslateDefaultParser);
  };
}();
TranslateDefaultParser.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: TranslateDefaultParser,
  factory: TranslateDefaultParser.ɵfac
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TranslateDefaultParser, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], null, null);
})();
class TranslateCompiler {}
/**
 * This compiler is just a placeholder that does nothing, in case you don't need a compiler at all
 */
class TranslateFakeCompiler extends TranslateCompiler {
  compile(value, lang) {
    return value;
  }
  compileTranslations(translations, lang) {
    return translations;
  }
}
TranslateFakeCompiler.ɵfac = /* @__PURE__ */function () {
  let ɵTranslateFakeCompiler_BaseFactory;
  return function TranslateFakeCompiler_Factory(t) {
    return (ɵTranslateFakeCompiler_BaseFactory || (ɵTranslateFakeCompiler_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](TranslateFakeCompiler)))(t || TranslateFakeCompiler);
  };
}();
TranslateFakeCompiler.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: TranslateFakeCompiler,
  factory: TranslateFakeCompiler.ɵfac
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TranslateFakeCompiler, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], null, null);
})();
class TranslateStore {
  constructor() {
    /**
     * The lang currently used
     */
    this.currentLang = this.defaultLang;
    /**
     * a list of translations per lang
     */
    this.translations = {};
    /**
     * an array of langs
     */
    this.langs = [];
    /**
     * An EventEmitter to listen to translation change events
     * onTranslationChange.subscribe((params: TranslationChangeEvent) => {
       *     // do something
       * });
     */
    this.onTranslationChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * An EventEmitter to listen to lang change events
     * onLangChange.subscribe((params: LangChangeEvent) => {
       *     // do something
       * });
     */
    this.onLangChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    /**
     * An EventEmitter to listen to default lang change events
     * onDefaultLangChange.subscribe((params: DefaultLangChangeEvent) => {
       *     // do something
       * });
     */
    this.onDefaultLangChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
  }
}
const USE_STORE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('USE_STORE');
const USE_DEFAULT_LANG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('USE_DEFAULT_LANG');
const DEFAULT_LANGUAGE = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('DEFAULT_LANGUAGE');
const USE_EXTEND = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('USE_EXTEND');
class TranslateService {
  /**
   *
   * @param store an instance of the store (that is supposed to be unique)
   * @param currentLoader An instance of the loader currently used
   * @param compiler An instance of the compiler currently used
   * @param parser An instance of the parser currently used
   * @param missingTranslationHandler A handler for missing translations.
   * @param useDefaultLang whether we should use default language translation when current language translation is missing.
   * @param isolate whether this service should use the store or not
   * @param extend To make a child module extend (and use) translations from parent modules.
   * @param defaultLanguage Set the default language using configuration
   */
  constructor(store, currentLoader, compiler, parser, missingTranslationHandler, useDefaultLang = true, isolate = false, extend = false, defaultLanguage) {
    this.store = store;
    this.currentLoader = currentLoader;
    this.compiler = compiler;
    this.parser = parser;
    this.missingTranslationHandler = missingTranslationHandler;
    this.useDefaultLang = useDefaultLang;
    this.isolate = isolate;
    this.extend = extend;
    this.pending = false;
    this._onTranslationChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this._onLangChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this._onDefaultLangChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this._langs = [];
    this._translations = {};
    this._translationRequests = {};
    /** set the default language from configuration */
    if (defaultLanguage) {
      this.setDefaultLang(defaultLanguage);
    }
  }
  /**
   * An EventEmitter to listen to translation change events
   * onTranslationChange.subscribe((params: TranslationChangeEvent) => {
     *     // do something
     * });
   */
  get onTranslationChange() {
    return this.isolate ? this._onTranslationChange : this.store.onTranslationChange;
  }
  /**
   * An EventEmitter to listen to lang change events
   * onLangChange.subscribe((params: LangChangeEvent) => {
     *     // do something
     * });
   */
  get onLangChange() {
    return this.isolate ? this._onLangChange : this.store.onLangChange;
  }
  /**
   * An EventEmitter to listen to default lang change events
   * onDefaultLangChange.subscribe((params: DefaultLangChangeEvent) => {
     *     // do something
     * });
   */
  get onDefaultLangChange() {
    return this.isolate ? this._onDefaultLangChange : this.store.onDefaultLangChange;
  }
  /**
   * The default lang to fallback when translations are missing on the current lang
   */
  get defaultLang() {
    return this.isolate ? this._defaultLang : this.store.defaultLang;
  }
  set defaultLang(defaultLang) {
    if (this.isolate) {
      this._defaultLang = defaultLang;
    } else {
      this.store.defaultLang = defaultLang;
    }
  }
  /**
   * The lang currently used
   */
  get currentLang() {
    return this.isolate ? this._currentLang : this.store.currentLang;
  }
  set currentLang(currentLang) {
    if (this.isolate) {
      this._currentLang = currentLang;
    } else {
      this.store.currentLang = currentLang;
    }
  }
  /**
   * an array of langs
   */
  get langs() {
    return this.isolate ? this._langs : this.store.langs;
  }
  set langs(langs) {
    if (this.isolate) {
      this._langs = langs;
    } else {
      this.store.langs = langs;
    }
  }
  /**
   * a list of translations per lang
   */
  get translations() {
    return this.isolate ? this._translations : this.store.translations;
  }
  set translations(translations) {
    if (this.isolate) {
      this._translations = translations;
    } else {
      this.store.translations = translations;
    }
  }
  /**
   * Sets the default language to use as a fallback
   */
  setDefaultLang(lang) {
    if (lang === this.defaultLang) {
      return;
    }
    let pending = this.retrieveTranslations(lang);
    if (typeof pending !== "undefined") {
      // on init set the defaultLang immediately
      if (this.defaultLang == null) {
        this.defaultLang = lang;
      }
      pending.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1)).subscribe(res => {
        this.changeDefaultLang(lang);
      });
    } else {
      // we already have this language
      this.changeDefaultLang(lang);
    }
  }
  /**
   * Gets the default language used
   */
  getDefaultLang() {
    return this.defaultLang;
  }
  /**
   * Changes the lang currently used
   */
  use(lang) {
    // don't change the language if the language given is already selected
    if (lang === this.currentLang) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(this.translations[lang]);
    }
    let pending = this.retrieveTranslations(lang);
    if (typeof pending !== "undefined") {
      // on init set the currentLang immediately
      if (!this.currentLang) {
        this.currentLang = lang;
      }
      pending.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1)).subscribe(res => {
        this.changeLang(lang);
      });
      return pending;
    } else {
      // we have this language, return an Observable
      this.changeLang(lang);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(this.translations[lang]);
    }
  }
  /**
   * Retrieves the given translations
   */
  retrieveTranslations(lang) {
    let pending;
    // if this language is unavailable or extend is true, ask for it
    if (typeof this.translations[lang] === "undefined" || this.extend) {
      this._translationRequests[lang] = this._translationRequests[lang] || this.getTranslation(lang);
      pending = this._translationRequests[lang];
    }
    return pending;
  }
  /**
   * Gets an object of translations for a given language with the current loader
   * and passes it through the compiler
   */
  getTranslation(lang) {
    this.pending = true;
    const loadingTranslations = this.currentLoader.getTranslation(lang).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.shareReplay)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1));
    this.loadingTranslations = loadingTranslations.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(res => this.compiler.compileTranslations(res, lang)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.shareReplay)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1));
    this.loadingTranslations.subscribe({
      next: res => {
        this.translations[lang] = this.extend && this.translations[lang] ? {
          ...res,
          ...this.translations[lang]
        } : res;
        this.updateLangs();
        this.pending = false;
      },
      error: err => {
        this.pending = false;
      }
    });
    return loadingTranslations;
  }
  /**
   * Manually sets an object of translations for a given language
   * after passing it through the compiler
   */
  setTranslation(lang, translations, shouldMerge = false) {
    translations = this.compiler.compileTranslations(translations, lang);
    if ((shouldMerge || this.extend) && this.translations[lang]) {
      this.translations[lang] = mergeDeep(this.translations[lang], translations);
    } else {
      this.translations[lang] = translations;
    }
    this.updateLangs();
    this.onTranslationChange.emit({
      lang: lang,
      translations: this.translations[lang]
    });
  }
  /**
   * Returns an array of currently available langs
   */
  getLangs() {
    return this.langs;
  }
  /**
   * Add available langs
   */
  addLangs(langs) {
    langs.forEach(lang => {
      if (this.langs.indexOf(lang) === -1) {
        this.langs.push(lang);
      }
    });
  }
  /**
   * Update the list of available langs
   */
  updateLangs() {
    this.addLangs(Object.keys(this.translations));
  }
  /**
   * Returns the parsed result of the translations
   */
  getParsedResult(translations, key, interpolateParams) {
    let res;
    if (key instanceof Array) {
      let result = {},
        observables = false;
      for (let k of key) {
        result[k] = this.getParsedResult(translations, k, interpolateParams);
        if ((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.isObservable)(result[k])) {
          observables = true;
        }
      }
      if (observables) {
        const sources = key.map(k => (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.isObservable)(result[k]) ? result[k] : (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(result[k]));
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.forkJoin)(sources).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(arr => {
          let obj = {};
          arr.forEach((value, index) => {
            obj[key[index]] = value;
          });
          return obj;
        }));
      }
      return result;
    }
    if (translations) {
      res = this.parser.interpolate(this.parser.getValue(translations, key), interpolateParams);
    }
    if (typeof res === "undefined" && this.defaultLang != null && this.defaultLang !== this.currentLang && this.useDefaultLang) {
      res = this.parser.interpolate(this.parser.getValue(this.translations[this.defaultLang], key), interpolateParams);
    }
    if (typeof res === "undefined") {
      let params = {
        key,
        translateService: this
      };
      if (typeof interpolateParams !== 'undefined') {
        params.interpolateParams = interpolateParams;
      }
      res = this.missingTranslationHandler.handle(params);
    }
    return typeof res !== "undefined" ? res : key;
  }
  /**
   * Gets the translated value of a key (or an array of keys)
   * @returns the translated key, or an object of translated keys
   */
  get(key, interpolateParams) {
    if (!isDefined(key) || !key.length) {
      throw new Error(`Parameter "key" required`);
    }
    // check if we are loading a new translation to use
    if (this.pending) {
      return this.loadingTranslations.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.concatMap)(res => {
        res = this.getParsedResult(res, key, interpolateParams);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.isObservable)(res) ? res : (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(res);
      }));
    } else {
      let res = this.getParsedResult(this.translations[this.currentLang], key, interpolateParams);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.isObservable)(res) ? res : (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(res);
    }
  }
  /**
   * Returns a stream of translated values of a key (or an array of keys) which updates
   * whenever the translation changes.
   * @returns A stream of the translated key, or an object of translated keys
   */
  getStreamOnTranslationChange(key, interpolateParams) {
    if (!isDefined(key) || !key.length) {
      throw new Error(`Parameter "key" required`);
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.concat)((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.defer)(() => this.get(key, interpolateParams)), this.onTranslationChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)(event => {
      const res = this.getParsedResult(event.translations, key, interpolateParams);
      if (typeof res.subscribe === 'function') {
        return res;
      } else {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(res);
      }
    })));
  }
  /**
   * Returns a stream of translated values of a key (or an array of keys) which updates
   * whenever the language changes.
   * @returns A stream of the translated key, or an object of translated keys
   */
  stream(key, interpolateParams) {
    if (!isDefined(key) || !key.length) {
      throw new Error(`Parameter "key" required`);
    }
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.concat)((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.defer)(() => this.get(key, interpolateParams)), this.onLangChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)(event => {
      const res = this.getParsedResult(event.translations, key, interpolateParams);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.isObservable)(res) ? res : (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(res);
    })));
  }
  /**
   * Returns a translation instantly from the internal state of loaded translation.
   * All rules regarding the current language, the preferred language of even fallback languages will be used except any promise handling.
   */
  instant(key, interpolateParams) {
    if (!isDefined(key) || !key.length) {
      throw new Error(`Parameter "key" required`);
    }
    let res = this.getParsedResult(this.translations[this.currentLang], key, interpolateParams);
    if ((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.isObservable)(res)) {
      if (key instanceof Array) {
        let obj = {};
        key.forEach((value, index) => {
          obj[key[index]] = key[index];
        });
        return obj;
      }
      return key;
    } else {
      return res;
    }
  }
  /**
   * Sets the translated value of a key, after compiling it
   */
  set(key, value, lang = this.currentLang) {
    this.translations[lang][key] = this.compiler.compile(value, lang);
    this.updateLangs();
    this.onTranslationChange.emit({
      lang: lang,
      translations: this.translations[lang]
    });
  }
  /**
   * Changes the current lang
   */
  changeLang(lang) {
    this.currentLang = lang;
    this.onLangChange.emit({
      lang: lang,
      translations: this.translations[lang]
    });
    // if there is no default lang, use the one that we just set
    if (this.defaultLang == null) {
      this.changeDefaultLang(lang);
    }
  }
  /**
   * Changes the default lang
   */
  changeDefaultLang(lang) {
    this.defaultLang = lang;
    this.onDefaultLangChange.emit({
      lang: lang,
      translations: this.translations[lang]
    });
  }
  /**
   * Allows to reload the lang file from the file
   */
  reloadLang(lang) {
    this.resetLang(lang);
    return this.getTranslation(lang);
  }
  /**
   * Deletes inner translation
   */
  resetLang(lang) {
    this._translationRequests[lang] = undefined;
    this.translations[lang] = undefined;
  }
  /**
   * Returns the language code name from the browser, e.g. "de"
   */
  getBrowserLang() {
    if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
      return undefined;
    }
    let browserLang = window.navigator.languages ? window.navigator.languages[0] : null;
    browserLang = browserLang || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;
    if (typeof browserLang === 'undefined') {
      return undefined;
    }
    if (browserLang.indexOf('-') !== -1) {
      browserLang = browserLang.split('-')[0];
    }
    if (browserLang.indexOf('_') !== -1) {
      browserLang = browserLang.split('_')[0];
    }
    return browserLang;
  }
  /**
   * Returns the culture language code name from the browser, e.g. "de-DE"
   */
  getBrowserCultureLang() {
    if (typeof window === 'undefined' || typeof window.navigator === 'undefined') {
      return undefined;
    }
    let browserCultureLang = window.navigator.languages ? window.navigator.languages[0] : null;
    browserCultureLang = browserCultureLang || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;
    return browserCultureLang;
  }
}
TranslateService.ɵfac = function TranslateService_Factory(t) {
  return new (t || TranslateService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](TranslateStore), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](TranslateLoader), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](TranslateCompiler), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](TranslateParser), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](MissingTranslationHandler), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](USE_DEFAULT_LANG), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](USE_STORE), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](USE_EXTEND), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](DEFAULT_LANGUAGE));
};
TranslateService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: TranslateService,
  factory: TranslateService.ɵfac
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TranslateService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }], function () {
    return [{
      type: TranslateStore
    }, {
      type: TranslateLoader
    }, {
      type: TranslateCompiler
    }, {
      type: TranslateParser
    }, {
      type: MissingTranslationHandler
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [USE_DEFAULT_LANG]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [USE_STORE]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [USE_EXTEND]
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [DEFAULT_LANGUAGE]
      }]
    }];
  }, null);
})();
class TranslateDirective {
  constructor(translateService, element, _ref) {
    this.translateService = translateService;
    this.element = element;
    this._ref = _ref;
    // subscribe to onTranslationChange event, in case the translations of the current lang change
    if (!this.onTranslationChangeSub) {
      this.onTranslationChangeSub = this.translateService.onTranslationChange.subscribe(event => {
        if (event.lang === this.translateService.currentLang) {
          this.checkNodes(true, event.translations);
        }
      });
    }
    // subscribe to onLangChange event, in case the language changes
    if (!this.onLangChangeSub) {
      this.onLangChangeSub = this.translateService.onLangChange.subscribe(event => {
        this.checkNodes(true, event.translations);
      });
    }
    // subscribe to onDefaultLangChange event, in case the default language changes
    if (!this.onDefaultLangChangeSub) {
      this.onDefaultLangChangeSub = this.translateService.onDefaultLangChange.subscribe(event => {
        this.checkNodes(true);
      });
    }
  }
  set translate(key) {
    if (key) {
      this.key = key;
      this.checkNodes();
    }
  }
  set translateParams(params) {
    if (!equals(this.currentParams, params)) {
      this.currentParams = params;
      this.checkNodes(true);
    }
  }
  ngAfterViewChecked() {
    this.checkNodes();
  }
  checkNodes(forceUpdate = false, translations) {
    let nodes = this.element.nativeElement.childNodes;
    // if the element is empty
    if (!nodes.length) {
      // we add the key as content
      this.setContent(this.element.nativeElement, this.key);
      nodes = this.element.nativeElement.childNodes;
    }
    for (let i = 0; i < nodes.length; ++i) {
      let node = nodes[i];
      if (node.nodeType === 3) {
        // node type 3 is a text node
        let key;
        if (forceUpdate) {
          node.lastKey = null;
        }
        if (isDefined(node.lookupKey)) {
          key = node.lookupKey;
        } else if (this.key) {
          key = this.key;
        } else {
          let content = this.getContent(node);
          let trimmedContent = content.trim();
          if (trimmedContent.length) {
            node.lookupKey = trimmedContent;
            // we want to use the content as a key, not the translation value
            if (content !== node.currentValue) {
              key = trimmedContent;
              // the content was changed from the user, we'll use it as a reference if needed
              node.originalContent = content || node.originalContent;
            } else if (node.originalContent) {
              // the content seems ok, but the lang has changed
              // the current content is the translation, not the key, use the last real content as key
              key = node.originalContent.trim();
            } else if (content !== node.currentValue) {
              // we want to use the content as a key, not the translation value
              key = trimmedContent;
              // the content was changed from the user, we'll use it as a reference if needed
              node.originalContent = content || node.originalContent;
            }
          }
        }
        this.updateValue(key, node, translations);
      }
    }
  }
  updateValue(key, node, translations) {
    if (key) {
      if (node.lastKey === key && this.lastParams === this.currentParams) {
        return;
      }
      this.lastParams = this.currentParams;
      let onTranslation = res => {
        if (res !== key) {
          node.lastKey = key;
        }
        if (!node.originalContent) {
          node.originalContent = this.getContent(node);
        }
        node.currentValue = isDefined(res) ? res : node.originalContent || key;
        // we replace in the original content to preserve spaces that we might have trimmed
        this.setContent(node, this.key ? node.currentValue : node.originalContent.replace(key, node.currentValue));
        this._ref.markForCheck();
      };
      if (isDefined(translations)) {
        let res = this.translateService.getParsedResult(translations, key, this.currentParams);
        if ((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.isObservable)(res)) {
          res.subscribe({
            next: onTranslation
          });
        } else {
          onTranslation(res);
        }
      } else {
        this.translateService.get(key, this.currentParams).subscribe(onTranslation);
      }
    }
  }
  getContent(node) {
    return isDefined(node.textContent) ? node.textContent : node.data;
  }
  setContent(node, content) {
    if (isDefined(node.textContent)) {
      node.textContent = content;
    } else {
      node.data = content;
    }
  }
  ngOnDestroy() {
    if (this.onLangChangeSub) {
      this.onLangChangeSub.unsubscribe();
    }
    if (this.onDefaultLangChangeSub) {
      this.onDefaultLangChangeSub.unsubscribe();
    }
    if (this.onTranslationChangeSub) {
      this.onTranslationChangeSub.unsubscribe();
    }
  }
}
TranslateDirective.ɵfac = function TranslateDirective_Factory(t) {
  return new (t || TranslateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef));
};
TranslateDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
  type: TranslateDirective,
  selectors: [["", "translate", ""], ["", "ngx-translate", ""]],
  inputs: {
    translate: "translate",
    translateParams: "translateParams"
  }
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TranslateDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      selector: '[translate],[ngx-translate]'
    }]
  }], function () {
    return [{
      type: TranslateService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef
    }];
  }, {
    translate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    translateParams: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }]
  });
})();
class TranslatePipe {
  constructor(translate, _ref) {
    this.translate = translate;
    this._ref = _ref;
    this.value = '';
    this.lastKey = null;
    this.lastParams = [];
  }
  updateValue(key, interpolateParams, translations) {
    let onTranslation = res => {
      this.value = res !== undefined ? res : key;
      this.lastKey = key;
      this._ref.markForCheck();
    };
    if (translations) {
      let res = this.translate.getParsedResult(translations, key, interpolateParams);
      if ((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.isObservable)(res.subscribe)) {
        res.subscribe(onTranslation);
      } else {
        onTranslation(res);
      }
    }
    this.translate.get(key, interpolateParams).subscribe(onTranslation);
  }
  transform(query, ...args) {
    if (!query || !query.length) {
      return query;
    }
    // if we ask another time for the same key, return the last value
    if (equals(query, this.lastKey) && equals(args, this.lastParams)) {
      return this.value;
    }
    let interpolateParams = undefined;
    if (isDefined(args[0]) && args.length) {
      if (typeof args[0] === 'string' && args[0].length) {
        // we accept objects written in the template such as {n:1}, {'n':1}, {n:'v'}
        // which is why we might need to change it to real JSON objects such as {"n":1} or {"n":"v"}
        let validArgs = args[0].replace(/(\')?([a-zA-Z0-9_]+)(\')?(\s)?:/g, '"$2":').replace(/:(\s)?(\')(.*?)(\')/g, ':"$3"');
        try {
          interpolateParams = JSON.parse(validArgs);
        } catch (e) {
          throw new SyntaxError(`Wrong parameter in TranslatePipe. Expected a valid Object, received: ${args[0]}`);
        }
      } else if (typeof args[0] === 'object' && !Array.isArray(args[0])) {
        interpolateParams = args[0];
      }
    }
    // store the query, in case it changes
    this.lastKey = query;
    // store the params, in case they change
    this.lastParams = args;
    // set the value
    this.updateValue(query, interpolateParams);
    // if there is a subscription to onLangChange, clean it
    this._dispose();
    // subscribe to onTranslationChange event, in case the translations change
    if (!this.onTranslationChange) {
      this.onTranslationChange = this.translate.onTranslationChange.subscribe(event => {
        if (this.lastKey && event.lang === this.translate.currentLang) {
          this.lastKey = null;
          this.updateValue(query, interpolateParams, event.translations);
        }
      });
    }
    // subscribe to onLangChange event, in case the language changes
    if (!this.onLangChange) {
      this.onLangChange = this.translate.onLangChange.subscribe(event => {
        if (this.lastKey) {
          this.lastKey = null; // we want to make sure it doesn't return the same value until it's been updated
          this.updateValue(query, interpolateParams, event.translations);
        }
      });
    }
    // subscribe to onDefaultLangChange event, in case the default language changes
    if (!this.onDefaultLangChange) {
      this.onDefaultLangChange = this.translate.onDefaultLangChange.subscribe(() => {
        if (this.lastKey) {
          this.lastKey = null; // we want to make sure it doesn't return the same value until it's been updated
          this.updateValue(query, interpolateParams);
        }
      });
    }
    return this.value;
  }
  /**
   * Clean any existing subscription to change events
   */
  _dispose() {
    if (typeof this.onTranslationChange !== 'undefined') {
      this.onTranslationChange.unsubscribe();
      this.onTranslationChange = undefined;
    }
    if (typeof this.onLangChange !== 'undefined') {
      this.onLangChange.unsubscribe();
      this.onLangChange = undefined;
    }
    if (typeof this.onDefaultLangChange !== 'undefined') {
      this.onDefaultLangChange.unsubscribe();
      this.onDefaultLangChange = undefined;
    }
  }
  ngOnDestroy() {
    this._dispose();
  }
}
TranslatePipe.ɵfac = function TranslatePipe_Factory(t) {
  return new (t || TranslatePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](TranslateService, 16), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef, 16));
};
TranslatePipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
  name: "translate",
  type: TranslatePipe,
  pure: false
});
TranslatePipe.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: TranslatePipe,
  factory: TranslatePipe.ɵfac
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TranslatePipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Pipe,
    args: [{
      name: 'translate',
      pure: false // required to update the value when the promise is resolved
    }]
  }], function () {
    return [{
      type: TranslateService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef
    }];
  }, null);
})();
class TranslateModule {
  /**
   * Use this method in your root module to provide the TranslateService
   */
  static forRoot(config = {}) {
    return {
      ngModule: TranslateModule,
      providers: [config.loader || {
        provide: TranslateLoader,
        useClass: TranslateFakeLoader
      }, config.compiler || {
        provide: TranslateCompiler,
        useClass: TranslateFakeCompiler
      }, config.parser || {
        provide: TranslateParser,
        useClass: TranslateDefaultParser
      }, config.missingTranslationHandler || {
        provide: MissingTranslationHandler,
        useClass: FakeMissingTranslationHandler
      }, TranslateStore, {
        provide: USE_STORE,
        useValue: config.isolate
      }, {
        provide: USE_DEFAULT_LANG,
        useValue: config.useDefaultLang
      }, {
        provide: USE_EXTEND,
        useValue: config.extend
      }, {
        provide: DEFAULT_LANGUAGE,
        useValue: config.defaultLanguage
      }, TranslateService]
    };
  }
  /**
   * Use this method in your other (non root) modules to import the directive/pipe
   */
  static forChild(config = {}) {
    return {
      ngModule: TranslateModule,
      providers: [config.loader || {
        provide: TranslateLoader,
        useClass: TranslateFakeLoader
      }, config.compiler || {
        provide: TranslateCompiler,
        useClass: TranslateFakeCompiler
      }, config.parser || {
        provide: TranslateParser,
        useClass: TranslateDefaultParser
      }, config.missingTranslationHandler || {
        provide: MissingTranslationHandler,
        useClass: FakeMissingTranslationHandler
      }, {
        provide: USE_STORE,
        useValue: config.isolate
      }, {
        provide: USE_DEFAULT_LANG,
        useValue: config.useDefaultLang
      }, {
        provide: USE_EXTEND,
        useValue: config.extend
      }, {
        provide: DEFAULT_LANGUAGE,
        useValue: config.defaultLanguage
      }, TranslateService]
    };
  }
}
TranslateModule.ɵfac = function TranslateModule_Factory(t) {
  return new (t || TranslateModule)();
};
TranslateModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: TranslateModule,
  declarations: [TranslatePipe, TranslateDirective],
  exports: [TranslatePipe, TranslateDirective]
});
TranslateModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TranslateModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      declarations: [TranslatePipe, TranslateDirective],
      exports: [TranslatePipe, TranslateDirective]
    }]
  }], null, null);
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_common-layout_common-layout_module_ts.js.map