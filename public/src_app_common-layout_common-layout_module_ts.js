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
}`, "",{"version":3,"sources":["webpack://./src/app/common-layout/shared-components/footer/footer.component.scss"],"names":[],"mappings":"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","sourcesContent":["/*==================== \r\n\tFooter \r\n====================== */\r\n\r\n/* Main Footer */\r\nfooter .main-footer{\tpadding: 20px 0;\tbackground: #252525;}\r\nfooter ul{\tpadding-left: 0;\tlist-style: none;}\r\n\r\n/* Copy Right Footer */\r\n.footer-copyright {\tbackground: #222;\tpadding: 5px 0;}\r\n.footer-copyright .logo {    display: inherit;}\r\n.footer-copyright nav {    float: right;    margin-top: 5px;}\r\n.footer-copyright nav ul {\tlist-style: none;\tmargin: 0;\tpadding: 0;}\r\n.footer-copyright nav ul li {\tborder-left: 1px solid #505050;\tdisplay: inline-block;\tline-height: 12px;\tmargin: 0;\tpadding: 0 8px;}\r\n.footer-copyright nav ul li a{\tcolor: #969696;}\r\n.footer-copyright nav ul li:first-child {\tborder: medium none;\tpadding-left: 0;}\r\n.footer-copyright p {\tcolor: #969696;\tmargin: 2px 0 0;}\r\n\r\n/* Footer Top */\r\n.footer-top{\tbackground: #252525;\tpadding-bottom: 30px;\tmargin-bottom: 30px;\tborder-bottom: 3px solid #222;}\r\n\r\n/* Footer transparent */\r\nfooter.transparent .footer-top, footer.transparent .main-footer{\tbackground: transparent;}\r\nfooter.transparent .footer-copyright{\tbackground: none repeat scroll 0 0 rgba(0, 0, 0, 0.3) ;}\r\n\r\n/* Footer light */\r\nfooter.light .footer-top{\tbackground: #f9f9f9;}\r\nfooter.light .main-footer{\tbackground: #f9f9f9;}\r\nfooter.light .footer-copyright{\tbackground: none repeat scroll 0 0 rgba(255, 255, 255, 0.3) ;}\r\n\r\n/* Footer 4 */\r\n.footer- .logo {    display: inline-block;}\r\n\r\n/*==================== \r\n\tWidgets \r\n====================== */\r\n.widget{\tpadding: 20px;\tmargin-bottom: 40px;}\r\n.widget.widget-last{\tmargin-bottom: 0px;}\r\n.widget.no-box{\tpadding: 0;\tbackground-color: transparent;\tmargin-bottom: 40px;\r\n\tbox-shadow: none; -webkit-box-shadow: none; -moz-box-shadow: none; -ms-box-shadow: none; -o-box-shadow: none;}\r\n.widget.subscribe p{\tmargin-bottom: 18px;}\r\n.widget li a{\tcolor: #fff;}\r\n.widget li a:hover{\tcolor: #aaa;text-decoration: none;}\r\n.widget-title {margin-bottom: 20px;}\r\n.widget-title span {background: #839FAD none repeat scroll 0 0;display: block; height: 1px;margin-top: 25px;position: relative;width: 20%;}\r\n.widget-title span::after {background: inherit;content: \"\";height: inherit;    position: absolute;top: -4px;width: 50%;}\r\n.widget-title.text-center span,.widget-title.text-center span::after {margin-left: auto;margin-right:auto;left: 0;right: 0;}\r\n.widget .badge{\tfloat: right;\tbackground: #7f7f7f;}\r\n\r\n.typo-light h1, \r\n.typo-light h2, \r\n.typo-light h3, \r\n.typo-light h4, \r\n.typo-light h5, \r\n.typo-light h6,\r\n.typo-light p,\r\n.typo-light div,\r\n.typo-light span,\r\n.typo-light small{\tcolor: #fff;}\r\n\r\nul.social-footer2 {\tmargin: 0;padding: 0;\twidth: auto;}\r\nul.social-footer2 li {display: inline-block;padding: 0;}\r\nul.social-footer2 li a:hover {background-color:#17a2b8 ;}\r\nul.social-footer2 li a {display: block;\theight:30px;width: 30px;text-align: center;}\r\n.btn{background-color: #17a2b8 ; color:#fff;}\r\n.btn:hover, .btn:focus, .btn.active {background: #4b92dc;color: #fff;\r\n-webkit-box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);\r\n-moz-box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);\r\n-ms-box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);\r\n-o-box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);\r\nbox-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);\r\n-webkit-transition: all 250ms ease-in-out 0s;\r\n-moz-transition: all 250ms ease-in-out 0s;\r\n-ms-transition: all 250ms ease-in-out 0s;\r\n-o-transition: all 250ms ease-in-out 0s;\r\ntransition: all 250ms ease-in-out 0s;\r\n\r\n}\r\n\r\n.fa {\r\n    display: inline-block;\r\n    font: normal normal normal 14px/1 FontAwesome;\r\n    background-color: #3e3e3e;\r\n    color: #fff;\r\n    padding: 9px;\r\n    border-radius: 5px;\r\n}\r\n\r\n#subscribe-box .emailfield {\r\n    margin: auto;\r\n}\r\n\r\ninput[type=\"text\"] {\r\n    background: rgba(255,255,255,0.075);\r\n    padding: 10px 15px;\r\n    color: #aaa;\r\n    border: 3px solid rgba(0,0,0,0.1);\r\n    font-size: 14px;\r\n    margin-bottom: 16px;\r\n    border-radius: 5px;\r\n    transition: all 0.2s cubic-bezier(0.4,0,0.2,1);\r\n    transition-delay: 0.2s;\r\n    text-align: center;\r\n    width: 100%;\r\n}\r\n\r\ninput.submitbutton.ripplelink {\r\n    background: #17a2b8 ;\r\n    border: 3px solid rgba(0,0,0,0.1);\r\n    color: #fff;\r\n    border-color: #17a2b8 ;\r\n    box-shadow: 0 8px 17px 0 rgba(0,0,0,0.2);\r\n    transition-delay: 0s;\r\n    width: 100%;\r\n    font-size: 14px;\r\n    /* font-weight: 700; */\r\n    border: 0px solid;\r\n    transition: all 0.2s cubic-bezier(0.4,0,0.2,1);\r\n    padding: 10px 15px;\r\n    margin-bottom: 16px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.thumb-content ::before {\r\n    content: \"\\f190\";\r\n    font-family: FontAwesome;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    text-decoration: inherit;\r\n    margin-left: 5px;\r\n    color: #ffffff;\r\n}\r\n\r\n"],"sourceRoot":""}]);
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

/***/ })

}]);
//# sourceMappingURL=src_app_common-layout_common-layout_module_ts.js.map