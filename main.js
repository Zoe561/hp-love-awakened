(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\zoe\Documents\GitHub\harry-potter-love-awakened\src\main.ts */"zUnb");


/***/ }),

/***/ "1AAn":
/*!**********************************************************************!*\
  !*** ./src/app/love-awakened/select-actor/select-actor.component.ts ***!
  \**********************************************************************/
/*! exports provided: SelectActorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectActorComponent", function() { return SelectActorComponent; });
/* harmony import */ var src_app_core_const_routing_path_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/const/routing-path.const */ "yOoi");
/* harmony import */ var src_app_core_enum_actor_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/enum/actor.enum */ "fhNi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class SelectActorComponent {
    constructor(router) {
        this.router = router;
        this.ROUTING_PATH = src_app_core_const_routing_path_const__WEBPACK_IMPORTED_MODULE_0__["ROUTING_PATH"];
        this.Actor = src_app_core_enum_actor_enum__WEBPACK_IMPORTED_MODULE_1__["Actor"];
    }
    ngOnInit() {
    }
    routerClick(type) {
        switch (type) {
            case src_app_core_enum_actor_enum__WEBPACK_IMPORTED_MODULE_1__["Actor"].als:
                this.router.navigate([src_app_core_const_routing_path_const__WEBPACK_IMPORTED_MODULE_0__["ROUTING_PATH"].ALYUSS]);
                break;
            case src_app_core_enum_actor_enum__WEBPACK_IMPORTED_MODULE_1__["Actor"].ci:
                this.router.navigate([src_app_core_const_routing_path_const__WEBPACK_IMPORTED_MODULE_0__["ROUTING_PATH"].CYRUS]);
                break;
            case src_app_core_enum_actor_enum__WEBPACK_IMPORTED_MODULE_1__["Actor"].lcl:
                this.router.navigate([src_app_core_const_routing_path_const__WEBPACK_IMPORTED_MODULE_0__["ROUTING_PATH"].LI_CJI_LI]);
                break;
            case src_app_core_enum_actor_enum__WEBPACK_IMPORTED_MODULE_1__["Actor"].lk:
                this.router.navigate([src_app_core_const_routing_path_const__WEBPACK_IMPORTED_MODULE_0__["ROUTING_PATH"].RHEIN]);
                break;
            case src_app_core_enum_actor_enum__WEBPACK_IMPORTED_MODULE_1__["Actor"].rg:
                this.router.navigate([src_app_core_const_routing_path_const__WEBPACK_IMPORTED_MODULE_0__["ROUTING_PATH"].RUOGU]);
                break;
            case src_app_core_enum_actor_enum__WEBPACK_IMPORTED_MODULE_1__["Actor"].ys:
                this.router.navigate([src_app_core_const_routing_path_const__WEBPACK_IMPORTED_MODULE_0__["ROUTING_PATH"].YEH_SYUN]);
                break;
            default:
                break;
        }
    }
}
SelectActorComponent.ɵfac = function SelectActorComponent_Factory(t) { return new (t || SelectActorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
SelectActorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SelectActorComponent, selectors: [["app-select-actor"]], decls: 11, vars: 0, consts: [[1, "bg"], [1, "img-bg"], [1, "actor-box"], [1, "d-flex", "justify-content-around", 2, "width", "1000px"], [1, "actor", "als", 3, "click"], [1, "actor", "ci", 3, "click"], [1, "actor", "lk", 3, "click"], [1, "actor", "lll", 3, "click"], [1, "actor", "rg", 3, "click"], [1, "actor", "ys", 3, "click"]], template: function SelectActorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SelectActorComponent_Template_div_click_4_listener() { return ctx.routerClick(ctx.Actor.als); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SelectActorComponent_Template_div_click_5_listener() { return ctx.routerClick(ctx.Actor.ci); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SelectActorComponent_Template_div_click_6_listener() { return ctx.routerClick(ctx.Actor.lk); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SelectActorComponent_Template_div_click_8_listener() { return ctx.routerClick(ctx.Actor.lcl); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SelectActorComponent_Template_div_click_9_listener() { return ctx.routerClick(ctx.Actor.rg); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SelectActorComponent_Template_div_click_10_listener() { return ctx.routerClick(ctx.Actor.ys); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, styles: [".img-bg[_ngcontent-%COMP%] {\n  background-image: url('book_1.jpg');\n  background-repeat: no-repeat;\n  width: 100vw;\n  height: 100vh;\n  background-attachment: fixed;\n  background-position: center;\n  background-size: contain;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.actor-box[_ngcontent-%COMP%] {\n  display: flex;\n  max-width: 80%;\n  height: 600px;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.actor-box[_ngcontent-%COMP%]   .actor[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 300px;\n  height: 300px;\n  cursor: pointer;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\n.actor-box[_ngcontent-%COMP%]   .actor.als[_ngcontent-%COMP%] {\n  background-image: url('ALS.png');\n}\n\n.actor-box[_ngcontent-%COMP%]   .actor.als[_ngcontent-%COMP%]:hover {\n  background-image: url('ALS_hover.png');\n}\n\n.actor-box[_ngcontent-%COMP%]   .actor.ci[_ngcontent-%COMP%] {\n  background-image: url('CI.png');\n}\n\n.actor-box[_ngcontent-%COMP%]   .actor.ci[_ngcontent-%COMP%]:hover {\n  background-image: url('CI_hover.png');\n}\n\n.actor-box[_ngcontent-%COMP%]   .actor.lk[_ngcontent-%COMP%] {\n  background-image: url('LK.png');\n}\n\n.actor-box[_ngcontent-%COMP%]   .actor.lk[_ngcontent-%COMP%]:hover {\n  background-image: url('LK_hover.png');\n}\n\n.actor-box[_ngcontent-%COMP%]   .actor.lll[_ngcontent-%COMP%] {\n  background-image: url('LLL.png');\n}\n\n.actor-box[_ngcontent-%COMP%]   .actor.lll[_ngcontent-%COMP%]:hover {\n  background-image: url('LLL_hover.png');\n}\n\n.actor-box[_ngcontent-%COMP%]   .actor.rg[_ngcontent-%COMP%] {\n  background-image: url('RG.png');\n}\n\n.actor-box[_ngcontent-%COMP%]   .actor.rg[_ngcontent-%COMP%]:hover {\n  background-image: url('RG_hover.png');\n}\n\n.actor-box[_ngcontent-%COMP%]   .actor.ys[_ngcontent-%COMP%] {\n  background-image: url('YS.png');\n}\n\n.actor-box[_ngcontent-%COMP%]   .actor.ys[_ngcontent-%COMP%]:hover {\n  background-image: url('YS_hover.png');\n}\n\n.actor-box[_ngcontent-%COMP%]   .actor[_ngcontent-%COMP%]:hover {\n  transition: 0.5s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzZWxlY3QtYWN0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxtQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUZGOztBQUtBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FBRkY7O0FBS0U7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7QUFISjs7QUFJSTtFQUNFLGdDQUFBO0FBRk47O0FBR007RUFDRSxzQ0FBQTtBQURSOztBQUtJO0VBQ0UsK0JBQUE7QUFITjs7QUFJTTtFQUNFLHFDQUFBO0FBRlI7O0FBTUk7RUFDRSwrQkFBQTtBQUpOOztBQUtNO0VBQ0UscUNBQUE7QUFIUjs7QUFPSTtFQUNFLGdDQUFBO0FBTE47O0FBTU07RUFDRSxzQ0FBQTtBQUpSOztBQVFJO0VBQ0UsK0JBQUE7QUFOTjs7QUFPTTtFQUNFLHFDQUFBO0FBTFI7O0FBU0k7RUFDRSwrQkFBQTtBQVBOOztBQVFNO0VBQ0UscUNBQUE7QUFOUjs7QUFXSTtFQUVFLGdCQUFBO0FBVk4iLCJmaWxlIjoic2VsZWN0LWFjdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnIHt9XHJcblxyXG5cclxuLmltZy1iZyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9iYWNrZ3JvdW5kL2Jvb2tfMS5qcGcpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmFjdG9yLWJveCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXgtd2lkdGg6IDgwJTtcclxuICBoZWlnaHQ6IDYwMHB4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcblxyXG4gIC5hY3RvciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgICYuYWxze1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2FjdG9yL0FMUy5wbmcpO1xyXG4gICAgICAmOmhvdmVye1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvYWN0b3IvQUxTX2hvdmVyLnBuZyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLmNpe1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2FjdG9yL0NJLnBuZyk7XHJcbiAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9hY3Rvci9DSV9ob3Zlci5wbmcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi5sa3tcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9hY3Rvci9MSy5wbmcpO1xyXG4gICAgICAmOmhvdmVye1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvYWN0b3IvTEtfaG92ZXIucG5nKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYubGxse1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2FjdG9yL0xMTC5wbmcpO1xyXG4gICAgICAmOmhvdmVye1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvYWN0b3IvTExMX2hvdmVyLnBuZyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLnJne1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2FjdG9yL1JHLnBuZyk7XHJcbiAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9hY3Rvci9SR19ob3Zlci5wbmcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi55c3tcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9hY3Rvci9ZUy5wbmcpO1xyXG4gICAgICAmOmhvdmVye1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvYWN0b3IvWVNfaG92ZXIucG5nKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgIC8vIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Bsg2":
/*!******************************************************************!*\
  !*** ./src/app/love-awakened/login-page/login-page.component.ts ***!
  \******************************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var src_app_core_const_routing_path_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/const/routing-path.const */ "yOoi");
/* harmony import */ var _modal_credits_modal_credits_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal/credits-modal/credits-modal.component */ "U1B9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_share_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/share/shared.service */ "kN4y");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");






class LoginPageComponent {
    constructor(sharedService, router, modalService) {
        this.sharedService = sharedService;
        this.router = router;
        this.modalService = modalService;
        this.ROUTING_PATH = src_app_core_const_routing_path_const__WEBPACK_IMPORTED_MODULE_0__["ROUTING_PATH"];
    }
    ngOnInit() {
    }
    routerClick(type) {
        this.router.navigate([src_app_core_const_routing_path_const__WEBPACK_IMPORTED_MODULE_0__["ROUTING_PATH"].CHOOSE_LOVER]);
    }
    openCredit() {
        this.modalService.open(_modal_credits_modal_credits_modal_component__WEBPACK_IMPORTED_MODULE_1__["CreditsModalComponent"], { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
            console.log('closed');
        }, (reason) => {
            console.log('dismissed');
        });
    }
}
LoginPageComponent.ɵfac = function LoginPageComponent_Factory(t) { return new (t || LoginPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_share_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"])); };
LoginPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginPageComponent, selectors: [["app-login-page"]], decls: 21, vars: 0, consts: [[1, "bg"], [1, "img-bg"], [1, "title"], [1, ""], [1, "menu", "backdrop-blur"], [1, "menu-item", 3, "click"], [1, "menu-item"]], template: function LoginPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u54C8\u5229\u6CE2\u7279");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\u9082\u9005\u89BA\u9192");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginPageComponent_Template_div_click_9_listener() { return ctx.routerClick("new"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\u65B0\u7684\u9082\u9005");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "\u8B80\u53D6\u9082\u9005");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "\u8A2D\u5B9A");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "CG\u56DE\u61B6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "\u96E2\u958B");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginPageComponent_Template_div_click_19_listener() { return ctx.openCredit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "\u88FD\u4F5C\u5718\u968A");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, styles: [".img-bg[_ngcontent-%COMP%] {\n  background-image: url('hufflepuff_lounge.png');\n  background-repeat: no-repeat;\n  width: 100vw;\n  height: 100vh;\n  background-attachment: fixed;\n  background-position: center;\n  background-size: contain;\n}\n.img-bg[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  position: absolute;\n  background: rgba(255, 255, 255, 0.5);\n  font-size: 64px;\n  top: 280px;\n  width: -moz-fit-content;\n  width: fit-content;\n  text-align: center;\n  left: 290px;\n  padding: 10px 20px;\n  font-weight: bolder;\n}\n.img-bg[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%] {\n  position: absolute;\n  color: #d9d16e;\n  text-shadow: 0 1px 5px black;\n  font-size: 45px;\n  font-weight: bolder;\n  top: 533px;\n  left: 141px;\n  letter-spacing: 8px;\n}\n.img-bg[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n  color: white;\n  width: 350px;\n  float: right;\n  padding: 20px 5px;\n  height: 100vh;\n  top: 130px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n}\n.img-bg[_ngcontent-%COMP%]   .menu.backdrop-blur[_ngcontent-%COMP%] {\n  -webkit-backdrop-filter: blur(5px);\n          backdrop-filter: blur(5px);\n}\n.img-bg[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%] {\n  font-size: 28px;\n  cursor: pointer;\n}\n.img-bg[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:hover {\n  color: white;\n  font-weight: bolder;\n  transition: 0.3s;\n  font-size: 29px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsOENBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0FBREY7QUFHRTtFQUNFLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBREo7QUFJRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUZKO0FBTUU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7QUFKSjtBQU1JO0VBQ0Usa0NBQUE7VUFBQSwwQkFBQTtBQUpOO0FBT0k7RUFDRSxlQUFBO0VBQ0EsZUFBQTtBQUxOO0FBT007RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFMUiIsImZpbGUiOiJsb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnIHt9XHJcblxyXG4uaW1nLWJnIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2JhY2tncm91bmQvaHVmZmxlcHVmZl9sb3VuZ2UucG5nKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuXHJcbiAgLnRpdGxlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuICAgIGZvbnQtc2l6ZTogNjRweDtcclxuICAgIHRvcDogMjgwcHg7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsZWZ0OiAyOTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgfVxyXG5cclxuICAuc3ViLXRpdGxlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbG9yOiByZ2IoMjE3IDIwOSAxMTApO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMXB4IDVweCBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICB0b3A6IDUzM3B4O1xyXG4gICAgbGVmdDogMTQxcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogOHB4O1xyXG4gIH1cclxuXHJcblxyXG4gIC5tZW51IHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBhZGRpbmc6IDIwcHggNXB4O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHRvcDogMTMwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG5cclxuICAgICYuYmFja2Ryb3AtYmx1ciB7XHJcbiAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xyXG4gICAgfVxyXG5cclxuICAgIC5tZW51LWl0ZW0ge1xyXG4gICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgICAgZm9udC1zaXplOiAyOXB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "JE77":
/*!********************************************!*\
  !*** ./src/app/core/const/device.const.ts ***!
  \********************************************/
/*! exports provided: DEVICE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEVICE", function() { return DEVICE; });
const DEVICE = {
    MOBILE: 'mobile',
    PAD: 'pad'
};


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/layout.component */ "uswQ");


class AppComponent {
    constructor() {
        this.title = 'harry-potter-love-awakened';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-layout");
    } }, directives: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_1__["LayoutComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "U1B9":
/*!*****************************************************************************************!*\
  !*** ./src/app/love-awakened/login-page/modal/credits-modal/credits-modal.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: CreditsModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditsModalComponent", function() { return CreditsModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");


class CreditsModalComponent {
    constructor(modal) {
        this.modal = modal;
    }
    ngOnInit() {
    }
}
CreditsModalComponent.ɵfac = function CreditsModalComponent_Factory(t) { return new (t || CreditsModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"])); };
CreditsModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreditsModalComponent, selectors: [["app-credits-modal"]], decls: 19, vars: 0, consts: [[1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "m-4"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"]], template: function CreditsModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u88FD\u4F5C\u5718\u968A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreditsModalComponent_Template_button_click_4_listener() { return ctx.modal.dismiss("Cross click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u4EBA\u7269\u7E6A\u88FD\uFF1A\u7433\u77B3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u7D20\u6750\u88FD\u4F5C\uFF1ALY ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u7D20\u6750\u63D0\u4F9B\uFF1A\u674E\u5E7B\u6A02");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u7DB2\u9801\uFF1A\u82E5\u66E0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u6B64\u70BA\u54C8\u5229\u6CE2\u7279\u9B54\u6CD5\u89BA\u9192\u884D\u751F\u4F5C\u54C1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreditsModalComponent_Template_button_click_17_listener() { return ctx.modal.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u95DC\u9589");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVkaXRzLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "UeEg":
/*!*****************************************************************************!*\
  !*** ./src/app/love-awakened/select-actor/lll-actor/lll-actor.component.ts ***!
  \*****************************************************************************/
/*! exports provided: LllActorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LllActorComponent", function() { return LllActorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LllActorComponent {
    constructor() { }
    ngOnInit() {
    }
}
LllActorComponent.ɵfac = function LllActorComponent_Factory(t) { return new (t || LllActorComponent)(); };
LllActorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LllActorComponent, selectors: [["app-lll-actor"]], decls: 2, vars: 0, consts: [[1, "bg"], [1, "img-bg"]], template: function LllActorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".img-bg[_ngcontent-%COMP%] {\n  background-image: url('LLL_cover.png');\n  background-repeat: no-repeat;\n  width: 100vw;\n  height: 100vh;\n  background-attachment: fixed;\n  background-position: center;\n  background-size: contain;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbGxsLWFjdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0NBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDSiIsImZpbGUiOiJsbGwtYWN0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLWJnIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvYWN0b3IvTExMX2NvdmVyLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH0iXX0= */"] });


/***/ }),

/***/ "VXXT":
/*!***************************************************************************!*\
  !*** ./src/app/love-awakened/select-actor/ci-actor/ci-actor.component.ts ***!
  \***************************************************************************/
/*! exports provided: CIActorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CIActorComponent", function() { return CIActorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CIActorComponent {
    constructor() { }
    ngOnInit() {
    }
}
CIActorComponent.ɵfac = function CIActorComponent_Factory(t) { return new (t || CIActorComponent)(); };
CIActorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CIActorComponent, selectors: [["app-ci-actor"]], decls: 2, vars: 0, consts: [[1, "bg"], [1, "img-bg"]], template: function CIActorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".img-bg[_ngcontent-%COMP%] {\n  background-image: url('CI_cover.png');\n  background-repeat: no-repeat;\n  width: 100vw;\n  height: 100vh;\n  background-attachment: fixed;\n  background-position: center;\n  background-size: contain;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY2ktYWN0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNKIiwiZmlsZSI6ImNpLWFjdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy1iZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2FjdG9yL0NJX2NvdmVyLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH0iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/layout.component */ "uswQ");
/* harmony import */ var _love_awakened_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./love-awakened/login-page/login-page.component */ "Bsg2");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loading/loading.component */ "f/hT");
/* harmony import */ var _love_awakened_select_actor_select_actor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./love-awakened/select-actor/select-actor.component */ "1AAn");
/* harmony import */ var _love_awakened_select_actor_ci_actor_ci_actor_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./love-awakened/select-actor/ci-actor/ci-actor.component */ "VXXT");
/* harmony import */ var _love_awakened_select_actor_lk_actor_lk_actor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./love-awakened/select-actor/lk-actor/lk-actor.component */ "pULb");
/* harmony import */ var _love_awakened_select_actor_als_actor_als_actor_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./love-awakened/select-actor/als-actor/als-actor.component */ "vB4w");
/* harmony import */ var _love_awakened_select_actor_lll_actor_lll_actor_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./love-awakened/select-actor/lll-actor/lll-actor.component */ "UeEg");
/* harmony import */ var _love_awakened_select_actor_rg_actor_rg_actor_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./love-awakened/select-actor/rg-actor/rg-actor.component */ "nIXL");
/* harmony import */ var _love_awakened_select_actor_ys_actor_ys_actor_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./love-awakened/select-actor/ys-actor/ys-actor.component */ "zyXD");
/* harmony import */ var _love_awakened_login_page_modal_credits_modal_credits_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./love-awakened/login-page/modal/credits-modal/credits-modal.component */ "U1B9");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "fXoL");
















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
        _love_awakened_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_4__["LoginPageComponent"],
        _loading_loading_component__WEBPACK_IMPORTED_MODULE_5__["LoadingComponent"],
        _love_awakened_select_actor_ci_actor_ci_actor_component__WEBPACK_IMPORTED_MODULE_7__["CIActorComponent"],
        _love_awakened_select_actor_lk_actor_lk_actor_component__WEBPACK_IMPORTED_MODULE_8__["LKActorComponent"],
        _love_awakened_select_actor_select_actor_component__WEBPACK_IMPORTED_MODULE_6__["SelectActorComponent"],
        _love_awakened_select_actor_als_actor_als_actor_component__WEBPACK_IMPORTED_MODULE_9__["AlsActorComponent"],
        _love_awakened_select_actor_lll_actor_lll_actor_component__WEBPACK_IMPORTED_MODULE_10__["LllActorComponent"],
        _love_awakened_select_actor_rg_actor_rg_actor_component__WEBPACK_IMPORTED_MODULE_11__["RgActorComponent"],
        _love_awakened_select_actor_ys_actor_ys_actor_component__WEBPACK_IMPORTED_MODULE_12__["YsActorComponent"],
        _love_awakened_login_page_modal_credits_modal_credits_modal_component__WEBPACK_IMPORTED_MODULE_13__["CreditsModalComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"]] }); })();


/***/ }),

/***/ "f/hT":
/*!**********************************************!*\
  !*** ./src/app/loading/loading.component.ts ***!
  \**********************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LoadingComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoadingComponent.ɵfac = function LoadingComponent_Factory(t) { return new (t || LoadingComponent)(); };
LoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingComponent, selectors: [["app-loading"]], decls: 2, vars: 0, template: function LoadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "loading works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2FkaW5nLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "fhNi":
/*!*****************************************!*\
  !*** ./src/app/core/enum/actor.enum.ts ***!
  \*****************************************/
/*! exports provided: Actor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Actor", function() { return Actor; });
var Actor;
(function (Actor) {
    Actor[Actor["als"] = 0] = "als";
    Actor[Actor["ci"] = 1] = "ci";
    Actor[Actor["lcl"] = 2] = "lcl";
    Actor[Actor["lk"] = 3] = "lk";
    Actor[Actor["rg"] = 4] = "rg";
    Actor[Actor["ys"] = 5] = "ys";
})(Actor || (Actor = {}));


/***/ }),

/***/ "kN4y":
/*!*****************************************!*\
  !*** ./src/app/share/shared.service.ts ***!
  \*****************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SharedService {
    constructor() {
        this.userDeviceSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    set setUserDeviceSubject(value) {
        this.userDeviceSubject.next(value);
        this.userDevice = value;
    }
}
SharedService.ɵfac = function SharedService_Factory(t) { return new (t || SharedService)(); };
SharedService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SharedService, factory: SharedService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "nIXL":
/*!***************************************************************************!*\
  !*** ./src/app/love-awakened/select-actor/rg-actor/rg-actor.component.ts ***!
  \***************************************************************************/
/*! exports provided: RgActorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RgActorComponent", function() { return RgActorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class RgActorComponent {
    constructor() { }
    ngOnInit() {
    }
}
RgActorComponent.ɵfac = function RgActorComponent_Factory(t) { return new (t || RgActorComponent)(); };
RgActorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RgActorComponent, selectors: [["app-rg-actor"]], decls: 2, vars: 0, consts: [[1, "bg"], [1, "img-bg"]], template: function RgActorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".img-bg[_ngcontent-%COMP%] {\n  background-image: url('Rg_cover.jpg');\n  background-repeat: no-repeat;\n  width: 100vw;\n  height: 100vh;\n  background-attachment: fixed;\n  background-position: center;\n  background-size: contain;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccmctYWN0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNKIiwiZmlsZSI6InJnLWFjdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy1iZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2FjdG9yL1JnX2NvdmVyLmpwZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH0iXX0= */"] });


/***/ }),

/***/ "pULb":
/*!***************************************************************************!*\
  !*** ./src/app/love-awakened/select-actor/lk-actor/lk-actor.component.ts ***!
  \***************************************************************************/
/*! exports provided: LKActorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LKActorComponent", function() { return LKActorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LKActorComponent {
    constructor() { }
    ngOnInit() {
    }
}
LKActorComponent.ɵfac = function LKActorComponent_Factory(t) { return new (t || LKActorComponent)(); };
LKActorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LKActorComponent, selectors: [["app-lk-actor"]], decls: 2, vars: 0, consts: [[1, "bg"], [1, "img-bg"]], template: function LKActorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".img-bg[_ngcontent-%COMP%] {\n  background-image: url('LK_cover.png');\n  background-repeat: no-repeat;\n  width: 100vw;\n  height: 100vh;\n  background-attachment: fixed;\n  background-position: center;\n  background-size: contain;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbGstYWN0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNKIiwiZmlsZSI6ImxrLWFjdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy1iZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2FjdG9yL0xLX2NvdmVyLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH0iXX0= */"] });


/***/ }),

/***/ "uswQ":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _core_const_device_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/const/device.const */ "JE77");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _share_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../share/shared.service */ "kN4y");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





function LayoutComponent_section_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u4ED8\u8CBB\u4E5F\u4E0D\u80FD\u89E3\u9396\u7684\u624B\u6A5F\u677F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u50C5\u652F\u63F4 1024 \u4EE5\u4E0A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LayoutComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class LayoutComponent {
    constructor(sharedService) {
        this.sharedService = sharedService;
        /**
         * 是否已切換為 pad 以上的尺寸
         */
        this.isPad = true;
    }
    /**
     * 裝置
     */
    get DEVICE() { return _core_const_device_const__WEBPACK_IMPORTED_MODULE_0__["DEVICE"]; }
    ngOnInit() {
        this.initUserDevice(document.documentElement.clientWidth);
    }
    onResize(event) {
        const size = document.documentElement.clientWidth;
        this.detectScreenSize(size);
    }
    initUserDevice(size) {
        // 網頁版
        if (size >= 1024) {
            this.sharedService.setUserDeviceSubject = _core_const_device_const__WEBPACK_IMPORTED_MODULE_0__["DEVICE"].PAD;
            // 手機版
        }
        else if (size > 0 && size < 1024) {
            this.sharedService.setUserDeviceSubject = _core_const_device_const__WEBPACK_IMPORTED_MODULE_0__["DEVICE"].MOBILE;
        }
    }
    detectScreenSize(size) {
        // 網頁版
        if (size >= 1024) {
            if (!this.isPad) {
                this.sharedService.setUserDeviceSubject = _core_const_device_const__WEBPACK_IMPORTED_MODULE_0__["DEVICE"].PAD;
                this.isPad = true;
            }
            // 手機版
        }
        else if (size > 0 && size < 1024) {
            if (this.isPad) {
                this.sharedService.setUserDeviceSubject = _core_const_device_const__WEBPACK_IMPORTED_MODULE_0__["DEVICE"].MOBILE;
                this.isPad = false;
            }
        }
    }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_share_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"])); };
LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], hostBindings: function LayoutComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function LayoutComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, decls: 3, vars: 2, consts: [[1, "layout"], ["class", "mobile-desc-box", 4, "ngIf"], ["class", "game-room", 4, "ngIf"], [1, "mobile-desc-box"], [1, "mobile-desc"], [1, "game-room"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LayoutComponent_section_1_Template, 6, 0, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LayoutComponent_div_2_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.sharedService.userDevice === ctx.DEVICE.MOBILE);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.sharedService.userDevice === ctx.DEVICE.PAD);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: [".layout[_ngcontent-%COMP%] {\n  height: 100vh;\n  justify-content: center;\n  align-items: center;\n  background: radial-gradient(circle at center, #cea853, #684521);\n}\n\n.game-room[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n\n.mobile-desc-box[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  align-content: center;\n  align-items: center;\n}\n\n.mobile-desc-box[_ngcontent-%COMP%]   .mobile-desc[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n  font-size: 32px;\n  padding: 50px;\n  background: rgba(255, 255, 255, 0.5);\n  font-weight: bolder;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0RBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUNFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBRUMsb0NBQUE7RUFDQSxtQkFBQTtBQUFMIiwiZmlsZSI6ImxheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYXlvdXQge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IGNlbnRlciwgI2NlYTg1MywgIzY4NDUyMSk7XHJcbn1cclxuXHJcbi5nYW1lLXJvb20ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5tb2JpbGUtZGVzYy1ib3gge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAubW9iaWxlLWRlc2Mge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICBwYWRkaW5nOiA1MHB4O1xyXG4gICAgLy8gYmFja2Ryb3AtZmlsdGVyOiBzZXBpYSgxMDAlKTsgICBcclxuICAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LDI1NSwyNTUsLjUpO1xyXG4gICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgfVxyXG59Il19 */"] });


/***/ }),

/***/ "vB4w":
/*!*****************************************************************************!*\
  !*** ./src/app/love-awakened/select-actor/als-actor/als-actor.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AlsActorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlsActorComponent", function() { return AlsActorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AlsActorComponent {
    constructor() { }
    ngOnInit() {
    }
}
AlsActorComponent.ɵfac = function AlsActorComponent_Factory(t) { return new (t || AlsActorComponent)(); };
AlsActorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlsActorComponent, selectors: [["app-als-actor"]], decls: 2, vars: 0, consts: [[1, "bg"], [1, "img-bg"]], template: function AlsActorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".img-bg[_ngcontent-%COMP%] {\n  background-image: url('ALS_cover.png');\n  background-repeat: no-repeat;\n  width: 100vw;\n  height: 100vh;\n  background-attachment: fixed;\n  background-position: center;\n  background-size: contain;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYWxzLWFjdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0NBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDSiIsImZpbGUiOiJhbHMtYWN0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLWJnIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvYWN0b3IvQUxTX2NvdmVyLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH0iXX0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_const_routing_path_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/const/routing-path.const */ "yOoi");
/* harmony import */ var _love_awakened_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./love-awakened/login-page/login-page.component */ "Bsg2");
/* harmony import */ var _love_awakened_select_actor_als_actor_als_actor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./love-awakened/select-actor/als-actor/als-actor.component */ "vB4w");
/* harmony import */ var _love_awakened_select_actor_ci_actor_ci_actor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./love-awakened/select-actor/ci-actor/ci-actor.component */ "VXXT");
/* harmony import */ var _love_awakened_select_actor_lk_actor_lk_actor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./love-awakened/select-actor/lk-actor/lk-actor.component */ "pULb");
/* harmony import */ var _love_awakened_select_actor_lll_actor_lll_actor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./love-awakened/select-actor/lll-actor/lll-actor.component */ "UeEg");
/* harmony import */ var _love_awakened_select_actor_rg_actor_rg_actor_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./love-awakened/select-actor/rg-actor/rg-actor.component */ "nIXL");
/* harmony import */ var _love_awakened_select_actor_select_actor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./love-awakened/select-actor/select-actor.component */ "1AAn");
/* harmony import */ var _love_awakened_select_actor_ys_actor_ys_actor_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./love-awakened/select-actor/ys-actor/ys-actor.component */ "zyXD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");












const routes = [
    {
        path: _core_const_routing_path_const__WEBPACK_IMPORTED_MODULE_1__["ROUTING_PATH"].ALYUSS,
        component: _love_awakened_select_actor_als_actor_als_actor_component__WEBPACK_IMPORTED_MODULE_3__["AlsActorComponent"],
    },
    {
        path: _core_const_routing_path_const__WEBPACK_IMPORTED_MODULE_1__["ROUTING_PATH"].CYRUS,
        component: _love_awakened_select_actor_ci_actor_ci_actor_component__WEBPACK_IMPORTED_MODULE_4__["CIActorComponent"],
    },
    {
        path: _core_const_routing_path_const__WEBPACK_IMPORTED_MODULE_1__["ROUTING_PATH"].RHEIN,
        component: _love_awakened_select_actor_lk_actor_lk_actor_component__WEBPACK_IMPORTED_MODULE_5__["LKActorComponent"],
    },
    {
        path: _core_const_routing_path_const__WEBPACK_IMPORTED_MODULE_1__["ROUTING_PATH"].LI_CJI_LI,
        component: _love_awakened_select_actor_lll_actor_lll_actor_component__WEBPACK_IMPORTED_MODULE_6__["LllActorComponent"],
    },
    {
        path: _core_const_routing_path_const__WEBPACK_IMPORTED_MODULE_1__["ROUTING_PATH"].RUOGU,
        component: _love_awakened_select_actor_rg_actor_rg_actor_component__WEBPACK_IMPORTED_MODULE_7__["RgActorComponent"],
    },
    {
        path: _core_const_routing_path_const__WEBPACK_IMPORTED_MODULE_1__["ROUTING_PATH"].YEH_SYUN,
        component: _love_awakened_select_actor_ys_actor_ys_actor_component__WEBPACK_IMPORTED_MODULE_9__["YsActorComponent"],
    },
    {
        path: _core_const_routing_path_const__WEBPACK_IMPORTED_MODULE_1__["ROUTING_PATH"].CHOOSE_LOVER,
        component: _love_awakened_select_actor_select_actor_component__WEBPACK_IMPORTED_MODULE_8__["SelectActorComponent"],
    },
    {
        path: _core_const_routing_path_const__WEBPACK_IMPORTED_MODULE_1__["ROUTING_PATH"].LOGIN,
        component: _love_awakened_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_2__["LoginPageComponent"],
    },
    {
        path: '',
        component: _love_awakened_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_2__["LoginPageComponent"],
    },
    {
        path: '**',
        component: _love_awakened_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_2__["LoginPageComponent"],
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "yOoi":
/*!**************************************************!*\
  !*** ./src/app/core/const/routing-path.const.ts ***!
  \**************************************************/
/*! exports provided: ROUTING_PATH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTING_PATH", function() { return ROUTING_PATH; });
const ROUTING_PATH = {
    /**
     * 登入頁
     */
    LOGIN: 'menu',
    /**
     * 選擇角色
     */
    CHOOSE_LOVER: 'choose-lover',
    /**
     * 阿留士
     */
    ALYUSS: 'alyuss',
    /**
     * 西勒斯
     */
    CYRUS: 'cyrus',
    /**
     * 萊茵
     */
    RHEIN: 'rhein',
    /**
     * 李麒樂
     */
    LI_CJI_LI: 'li-chi-le',
    /**
     * 若谷
     */
    RUOGU: 'ruogu',
    /**
     * 葉巡
     */
    YEH_SYUN: 'yeh-syun',
};


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zyXD":
/*!***************************************************************************!*\
  !*** ./src/app/love-awakened/select-actor/ys-actor/ys-actor.component.ts ***!
  \***************************************************************************/
/*! exports provided: YsActorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YsActorComponent", function() { return YsActorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class YsActorComponent {
    constructor() { }
    ngOnInit() {
    }
}
YsActorComponent.ɵfac = function YsActorComponent_Factory(t) { return new (t || YsActorComponent)(); };
YsActorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: YsActorComponent, selectors: [["app-ys-actor"]], decls: 2, vars: 0, consts: [[1, "bg"], [1, "img-bg"]], template: function YsActorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".img-bg[_ngcontent-%COMP%] {\n  background-image: url('YS_cover.png');\n  background-repeat: no-repeat;\n  width: 100vw;\n  height: 100vh;\n  background-attachment: fixed;\n  background-position: center;\n  background-size: contain;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxceXMtYWN0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNKIiwiZmlsZSI6InlzLWFjdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy1iZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2FjdG9yL1lTX2NvdmVyLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH0iXX0= */"] });


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map