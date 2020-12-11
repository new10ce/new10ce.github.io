(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Projects\Client_Project\Arpit_PhotoCrop\photoeditor\src\main.ts */"zUnb");


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 2, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "home works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


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

/***/ "FqCQ":
/*!****************************************************!*\
  !*** ./src/app/adjustment/adjustment.component.ts ***!
  \****************************************************/
/*! exports provided: AdjustmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdjustmentComponent", function() { return AdjustmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AdjustmentComponent {
    constructor() { }
    ngOnInit() {
    }
}
AdjustmentComponent.ɵfac = function AdjustmentComponent_Factory(t) { return new (t || AdjustmentComponent)(); };
AdjustmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdjustmentComponent, selectors: [["app-adjustment"]], decls: 2, vars: 0, template: function AdjustmentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "adjustment works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGp1c3RtZW50LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdjustmentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-adjustment',
                templateUrl: './adjustment.component.html',
                styleUrls: ['./adjustment.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "J33w":
/*!****************************************************!*\
  !*** ./src/app/crop-photo/crop-photo.component.ts ***!
  \****************************************************/
/*! exports provided: CropPhotoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CropPhotoComponent", function() { return CropPhotoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var cropperjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cropperjs */ "urRO");
/* harmony import */ var cropperjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cropperjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







const _c0 = ["image"];
function CropPhotoComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u00A0\u00A0\u00AB Back\u00A0\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CropPhotoComponent_div_3_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.cropImage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u00A0\u00A0Next \u00BB\u00A0\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.imageSource, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CropPhotoComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Uploading photo... Please wait. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CropPhotoComponent {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.waiting_panel = false;
        this.browse_panel = true;
        this.onUploadFinished = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.imageBlobUrl = null;
        // public cropImage = () => {
        //   var url = 'http://nutanusadadiya-001-site1.dtempurl.com/api/upload/GetCroppedData';
        //   var headers = new HttpHeaders({
        //     'Content-Type': 'application/json; charset=utf-8',
        //   });
        //   this.cropperData['fileName'] = this.fileName;
        //   var body = JSON.stringify(this.cropperData);
        //   this.http.post(url, body, { headers: headers }).subscribe((event) => {
        //     // if (event.type === HttpEventType.UploadProgress) {
        //     //   this.browse_panel = false;
        //     //   this.waiting_panel = true;
        //     // } else if (event.type === HttpEventType.Response) {
        //     //   this.router.navigate(['/adjustment']);
        //     // }
        //   });
        // };
        this.cropImage = () => {
            var canvas; // some canvas with an image
            var url = this.canvas.toDataURL();
            var blobBin = atob(url.split(',')[1]);
            var array = [];
            for (var i = 0; i < blobBin.length; i++) {
                array.push(blobBin.charCodeAt(i));
            }
            var file = new Blob([new Uint8Array(array)], { type: 'image/png' });
            var formData = new FormData();
            alert('sdfsdf');
            formData.append('file', file, 'nutan.jpg');
            this.http
                .post('https://' + 'cors-anywhere.herokuapp.com/' +
                'http://nutanusadadiya-001-site1.dtempurl.com/api/upload/GetCroppedData', formData, {
                reportProgress: true,
                observe: 'events',
            })
                .subscribe((event) => {
                if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].UploadProgress) {
                    this.browse_panel = false;
                    this.waiting_panel = true;
                }
                else if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].Response) {
                    this.router.navigate(['/adjustment']);
                }
            });
        };
        this.imageSource = localStorage.getItem('croppedImage');
        this.imageDestination = '';
        this.fileName = this.imageSource.replace(/^.*[\\\/]/, '');
    }
    ngAfterViewInit() {
        this.cropper = new cropperjs__WEBPACK_IMPORTED_MODULE_2___default.a(this.imageElement.nativeElement, {
            zoomable: false,
            scalable: false,
            aspectRatio: 1,
            crop: () => {
                this.canvas = this.cropper.getCroppedCanvas();
                this.imageDestination = this.canvas.toDataURL('image/png');
                this.cropperData = this.cropper.getData();
            },
        });
    }
    ngOnInit() { }
}
CropPhotoComponent.ɵfac = function CropPhotoComponent_Factory(t) { return new (t || CropPhotoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
CropPhotoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CropPhotoComponent, selectors: [["app-crop-photo"]], viewQuery: function CropPhotoComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.imageElement = _t.first);
    } }, outputs: { onUploadFinished: "onUploadFinished" }, decls: 5, vars: 2, consts: [[1, "main-section"], [1, "container"], [1, "row"], ["id", "photo-browse-layer", "class", "col-md-12 col-lg-12", 4, "ngIf"], ["id", "waiting-layer", "class", "container", "style", "width: 100%; height: 220px", 4, "ngIf"], ["id", "photo-browse-layer", 1, "col-md-12", "col-lg-12"], [1, "col-md-12"], [1, "img-container"], ["crossorigin", "", 3, "src"], ["image", ""], [1, "col-6", "col-sm-6", "col-md-6", "col-lg-6", "mt-4"], ["href", "./", "role", "button", 1, "btn", "btn-outline-primary", "pull-left"], ["id", "btnNext", "type", "button", 1, "btn", "btn-primary", "pull-right", 3, "click"], ["id", "waiting-layer", 1, "container", 2, "width", "100%", "height", "220px"], [1, "row", "text-center"], [1, "col-lg-12", "my-5"], ["alt", "", "border", "0", "src", "https://d2phdgmkbm5x8b.cloudfront.net/img/wait3.gif", "width", "300", "height", "24"]], template: function CropPhotoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CropPhotoComponent_div_3_Template, 13, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CropPhotoComponent_div_4_Template, 7, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.browse_panel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.waiting_panel);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".btn[_ngcontent-%COMP%] {\r\n  padding-left: .75rem;\r\n  padding-right: .75rem;\r\n}\r\n\r\nlabel.btn[_ngcontent-%COMP%] {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.d-flex[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%] {\r\n  flex: 1;\r\n}\r\n\r\n.carbonads[_ngcontent-%COMP%] {\r\n  border-radius: .25rem;\r\n  border: 1px solid #ccc;\r\n  font-size: .875rem;\r\n  overflow: hidden;\r\n  padding: 1rem;\r\n}\r\n\r\n.carbon-wrap[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n}\r\n\r\n.carbon-img[_ngcontent-%COMP%] {\r\n  clear: left;\r\n  display: block;\r\n  float: left;\r\n}\r\n\r\n.carbon-text[_ngcontent-%COMP%], .carbon-poweredby[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin-left: 140px;\r\n}\r\n\r\n.carbon-text[_ngcontent-%COMP%], .carbon-text[_ngcontent-%COMP%]:hover, .carbon-text[_ngcontent-%COMP%]:focus {\r\n  color: #fff;\r\n  text-decoration: none;\r\n}\r\n\r\n.carbon-poweredby[_ngcontent-%COMP%], .carbon-poweredby[_ngcontent-%COMP%]:hover, .carbon-poweredby[_ngcontent-%COMP%]:focus {\r\n  color: #ddd;\r\n  text-decoration: none;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .carbonads[_ngcontent-%COMP%] {\r\n    float: right;\r\n    margin-bottom: -1rem;\r\n    margin-top: -1rem;\r\n    max-width: 360px;\r\n  }\r\n}\r\n\r\n.footer[_ngcontent-%COMP%] {\r\n  font-size: .875rem;\r\n  overflow: hidden;\r\n}\r\n\r\n.heart[_ngcontent-%COMP%] {\r\n  color: #ddd;\r\n  display: block;\r\n  height: 2rem;\r\n  line-height: 2rem;\r\n  margin-bottom: 0;\r\n  margin-top: 1rem;\r\n  position: relative;\r\n  text-align: center;\r\n  width: 100%;\r\n}\r\n\r\n.heart[_ngcontent-%COMP%]:hover {\r\n  color: #ff4136;\r\n}\r\n\r\n.heart[_ngcontent-%COMP%]::before {\r\n  border-top: 1px solid #eee;\r\n  content: \" \";\r\n  display: block;\r\n  height: 0;\r\n  left: 0;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 50%;\r\n}\r\n\r\n.heart[_ngcontent-%COMP%]::after {\r\n  background-color: #fff;\r\n  content: \"\u00E2\u2122\u00A5\";\r\n  padding-left: .5rem;\r\n  padding-right: .5rem;\r\n  position: relative;\r\n  z-index: 1;\r\n}\r\n\r\n.img-container[_ngcontent-%COMP%], .img-preview[_ngcontent-%COMP%] {\r\n  background-color: #f7f7f7;\r\n  text-align: center;\r\n  width: 100%;\r\n}\r\n\r\n.img-container[_ngcontent-%COMP%] {\r\n  margin-bottom: 1rem;\r\n  max-height: 497px;\r\n  min-height: 200px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .img-container[_ngcontent-%COMP%] {\r\n    min-height: 497px;\r\n  }\r\n}\r\n\r\n.img-container[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\r\n  max-width: 100%;\r\n}\r\n\r\n.docs-preview[_ngcontent-%COMP%] {\r\n  margin-right: -1rem;\r\n}\r\n\r\n.img-preview[_ngcontent-%COMP%] {\r\n  float: left;\r\n  margin-bottom: .5rem;\r\n  margin-right: .5rem;\r\n  overflow: hidden;\r\n}\r\n\r\n.img-preview[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\r\n  max-width: 100%;\r\n}\r\n\r\n.preview-lg[_ngcontent-%COMP%] {\r\n  height: 9rem;\r\n  width: 16rem;\r\n}\r\n\r\n.preview-md[_ngcontent-%COMP%] {\r\n  height: 4.5rem;\r\n  width: 8rem;\r\n}\r\n\r\n.preview-sm[_ngcontent-%COMP%] {\r\n  height: 2.25rem;\r\n  width: 4rem;\r\n}\r\n\r\n.preview-xs[_ngcontent-%COMP%] {\r\n  height: 1.125rem;\r\n  margin-right: 0;\r\n  width: 2rem;\r\n}\r\n\r\n.docs-data[_ngcontent-%COMP%]    > .input-group[_ngcontent-%COMP%] {\r\n  margin-bottom: .5rem;\r\n}\r\n\r\n.docs-data[_ngcontent-%COMP%]   .input-group-prepend[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\r\n  min-width: 4rem;\r\n}\r\n\r\n.docs-data[_ngcontent-%COMP%]   .input-group-append[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%] {\r\n  min-width: 3rem;\r\n}\r\n\r\n.docs-buttons[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%], .docs-buttons[_ngcontent-%COMP%]    > .btn-group[_ngcontent-%COMP%], .docs-buttons[_ngcontent-%COMP%]    > .form-control[_ngcontent-%COMP%] {\r\n  margin-bottom: .5rem;\r\n  margin-right: .25rem;\r\n}\r\n\r\n.docs-toggles[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%], .docs-toggles[_ngcontent-%COMP%]    > .btn-group[_ngcontent-%COMP%], .docs-toggles[_ngcontent-%COMP%]    > .dropdown[_ngcontent-%COMP%] {\r\n  margin-bottom: .5rem;\r\n}\r\n\r\n.docs-tooltip[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin: -.5rem -.75rem;\r\n  padding: .5rem .75rem;\r\n}\r\n\r\n.docs-tooltip[_ngcontent-%COMP%]    > .icon[_ngcontent-%COMP%] {\r\n  margin: 0 -.25rem;\r\n  vertical-align: top;\r\n}\r\n\r\n.tooltip-inner[_ngcontent-%COMP%] {\r\n  white-space: normal;\r\n}\r\n\r\n.btn-upload[_ngcontent-%COMP%]   .tooltip-inner[_ngcontent-%COMP%], .btn-toggle[_ngcontent-%COMP%]   .tooltip-inner[_ngcontent-%COMP%] {\r\n  white-space: nowrap;\r\n}\r\n\r\n.btn-toggle[_ngcontent-%COMP%] {\r\n  padding: .5rem;\r\n}\r\n\r\n.btn-toggle[_ngcontent-%COMP%]    > .docs-tooltip[_ngcontent-%COMP%] {\r\n  margin: -.5rem;\r\n  padding: .5rem;\r\n}\r\n\r\n@media (max-width: 400px) {\r\n  .btn-group-crop[_ngcontent-%COMP%] {\r\n    margin-right: -1rem!important;\r\n  }\r\n\r\n  .btn-group-crop[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%] {\r\n    padding-left: .5rem;\r\n    padding-right: .5rem;\r\n  }\r\n\r\n  .btn-group-crop[_ngcontent-%COMP%]   .docs-tooltip[_ngcontent-%COMP%] {\r\n    margin-left: -.5rem;\r\n    margin-right: -.5rem;\r\n    padding-left: .5rem;\r\n    padding-right: .5rem;\r\n  }\r\n}\r\n\r\n.docs-options[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n.docs-options[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\r\n  font-size: .875rem;\r\n  padding: .125rem 1rem;\r\n}\r\n\r\n.docs-options[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n\r\n.docs-cropped[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n.docs-cropped[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%], .docs-cropped[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]    > canvas[_ngcontent-%COMP%] {\r\n  max-width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyb3AtcGhvdG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFvQjtFQUNwQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7O0VBRUUsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTs7O0VBR0UsV0FBVztFQUNYLHFCQUFxQjtBQUN2Qjs7QUFFQTs7O0VBR0UsV0FBVztFQUNYLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWixjQUFjO0VBQ2QsU0FBUztFQUNULE9BQU87RUFDUCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFFBQVE7QUFDVjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBOztFQUVFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBOzs7RUFHRSxvQkFBb0I7RUFDcEIsb0JBQW9CO0FBQ3RCOztBQUVBOzs7RUFHRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0U7SUFDRSw2QkFBNkI7RUFDL0I7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsb0JBQW9CO0VBQ3RCO0FBQ0Y7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxlQUFlO0FBQ2pCIiwiZmlsZSI6ImNyb3AtcGhvdG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4ge1xyXG4gIHBhZGRpbmctbGVmdDogLjc1cmVtO1xyXG4gIHBhZGRpbmctcmlnaHQ6IC43NXJlbTtcclxufVxyXG5cclxubGFiZWwuYnRuIHtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4uZC1mbGV4ID4gLmJ0biB7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLmNhcmJvbmFkcyB7XHJcbiAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgZm9udC1zaXplOiAuODc1cmVtO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcGFkZGluZzogMXJlbTtcclxufVxyXG5cclxuLmNhcmJvbi13cmFwIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uY2FyYm9uLWltZyB7XHJcbiAgY2xlYXI6IGxlZnQ7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5jYXJib24tdGV4dCxcclxuLmNhcmJvbi1wb3dlcmVkYnkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiAxNDBweDtcclxufVxyXG5cclxuLmNhcmJvbi10ZXh0LFxyXG4uY2FyYm9uLXRleHQ6aG92ZXIsXHJcbi5jYXJib24tdGV4dDpmb2N1cyB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uY2FyYm9uLXBvd2VyZWRieSxcclxuLmNhcmJvbi1wb3dlcmVkYnk6aG92ZXIsXHJcbi5jYXJib24tcG93ZXJlZGJ5OmZvY3VzIHtcclxuICBjb2xvcjogI2RkZDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5jYXJib25hZHMge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTFyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAtMXJlbTtcclxuICAgIG1heC13aWR0aDogMzYwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uZm9vdGVyIHtcclxuICBmb250LXNpemU6IC44NzVyZW07XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmhlYXJ0IHtcclxuICBjb2xvcjogI2RkZDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDJyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDJyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5oZWFydDpob3ZlciB7XHJcbiAgY29sb3I6ICNmZjQxMzY7XHJcbn1cclxuXHJcbi5oZWFydDo6YmVmb3JlIHtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcclxuICBjb250ZW50OiBcIiBcIjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDA7XHJcbiAgbGVmdDogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiA1MCU7XHJcbn1cclxuXHJcbi5oZWFydDo6YWZ0ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgY29udGVudDogXCLDouKEosKlXCI7XHJcbiAgcGFkZGluZy1sZWZ0OiAuNXJlbTtcclxuICBwYWRkaW5nLXJpZ2h0OiAuNXJlbTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLmltZy1jb250YWluZXIsXHJcbi5pbWctcHJldmlldyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5pbWctY29udGFpbmVyIHtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIG1heC1oZWlnaHQ6IDQ5N3B4O1xyXG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAuaW1nLWNvbnRhaW5lciB7XHJcbiAgICBtaW4taGVpZ2h0OiA0OTdweDtcclxuICB9XHJcbn1cclxuXHJcbi5pbWctY29udGFpbmVyID4gaW1nIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5kb2NzLXByZXZpZXcge1xyXG4gIG1hcmdpbi1yaWdodDogLTFyZW07XHJcbn1cclxuXHJcbi5pbWctcHJldmlldyB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogLjVyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAuNXJlbTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uaW1nLXByZXZpZXcgPiBpbWcge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnByZXZpZXctbGcge1xyXG4gIGhlaWdodDogOXJlbTtcclxuICB3aWR0aDogMTZyZW07XHJcbn1cclxuXHJcbi5wcmV2aWV3LW1kIHtcclxuICBoZWlnaHQ6IDQuNXJlbTtcclxuICB3aWR0aDogOHJlbTtcclxufVxyXG5cclxuLnByZXZpZXctc20ge1xyXG4gIGhlaWdodDogMi4yNXJlbTtcclxuICB3aWR0aDogNHJlbTtcclxufVxyXG5cclxuLnByZXZpZXcteHMge1xyXG4gIGhlaWdodDogMS4xMjVyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gIHdpZHRoOiAycmVtO1xyXG59XHJcblxyXG4uZG9jcy1kYXRhID4gLmlucHV0LWdyb3VwIHtcclxuICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcclxufVxyXG5cclxuLmRvY3MtZGF0YSAuaW5wdXQtZ3JvdXAtcHJlcGVuZCAuaW5wdXQtZ3JvdXAtdGV4dCB7XHJcbiAgbWluLXdpZHRoOiA0cmVtO1xyXG59XHJcblxyXG4uZG9jcy1kYXRhIC5pbnB1dC1ncm91cC1hcHBlbmQgLmlucHV0LWdyb3VwLXRleHQge1xyXG4gIG1pbi13aWR0aDogM3JlbTtcclxufVxyXG5cclxuLmRvY3MtYnV0dG9ucyA+IC5idG4sXHJcbi5kb2NzLWJ1dHRvbnMgPiAuYnRuLWdyb3VwLFxyXG4uZG9jcy1idXR0b25zID4gLmZvcm0tY29udHJvbCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogLjVyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAuMjVyZW07XHJcbn1cclxuXHJcbi5kb2NzLXRvZ2dsZXMgPiAuYnRuLFxyXG4uZG9jcy10b2dnbGVzID4gLmJ0bi1ncm91cCxcclxuLmRvY3MtdG9nZ2xlcyA+IC5kcm9wZG93biB7XHJcbiAgbWFyZ2luLWJvdHRvbTogLjVyZW07XHJcbn1cclxuXHJcbi5kb2NzLXRvb2x0aXAge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogLS41cmVtIC0uNzVyZW07XHJcbiAgcGFkZGluZzogLjVyZW0gLjc1cmVtO1xyXG59XHJcblxyXG4uZG9jcy10b29sdGlwID4gLmljb24ge1xyXG4gIG1hcmdpbjogMCAtLjI1cmVtO1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbn1cclxuXHJcbi50b29sdGlwLWlubmVyIHtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG59XHJcblxyXG4uYnRuLXVwbG9hZCAudG9vbHRpcC1pbm5lcixcclxuLmJ0bi10b2dnbGUgLnRvb2x0aXAtaW5uZXIge1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbi5idG4tdG9nZ2xlIHtcclxuICBwYWRkaW5nOiAuNXJlbTtcclxufVxyXG5cclxuLmJ0bi10b2dnbGUgPiAuZG9jcy10b29sdGlwIHtcclxuICBtYXJnaW46IC0uNXJlbTtcclxuICBwYWRkaW5nOiAuNXJlbTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgLmJ0bi1ncm91cC1jcm9wIHtcclxuICAgIG1hcmdpbi1yaWdodDogLTFyZW0haW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmJ0bi1ncm91cC1jcm9wID4gLmJ0biB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IC41cmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogLjVyZW07XHJcbiAgfVxyXG5cclxuICAuYnRuLWdyb3VwLWNyb3AgLmRvY3MtdG9vbHRpcCB7XHJcbiAgICBtYXJnaW4tbGVmdDogLS41cmVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtLjVyZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IC41cmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogLjVyZW07XHJcbiAgfVxyXG59XHJcblxyXG4uZG9jcy1vcHRpb25zIC5kcm9wZG93bi1tZW51IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmRvY3Mtb3B0aW9ucyAuZHJvcGRvd24tbWVudSA+IGxpIHtcclxuICBmb250LXNpemU6IC44NzVyZW07XHJcbiAgcGFkZGluZzogLjEyNXJlbSAxcmVtO1xyXG59XHJcblxyXG4uZG9jcy1vcHRpb25zIC5kcm9wZG93bi1tZW51IC5mb3JtLWNoZWNrLWxhYmVsIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmRvY3MtY3JvcHBlZCAubW9kYWwtYm9keSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZG9jcy1jcm9wcGVkIC5tb2RhbC1ib2R5ID4gaW1nLFxyXG4uZG9jcy1jcm9wcGVkIC5tb2RhbC1ib2R5ID4gY2FudmFzIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CropPhotoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-crop-photo',
                templateUrl: './crop-photo.component.html',
                styleUrls: ['./crop-photo.component.css'],
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, { onUploadFinished: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], imageElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['image', { static: false }]
        }] }); })();


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
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation/navigation.component */ "k5x5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");





class AppComponent {
    constructor() { }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "container-fluid"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_1__["NavigationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _upload_photo_upload_photo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./upload-photo/upload-photo.component */ "nkfZ");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navigation/navigation.component */ "k5x5");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _crop_photo_crop_photo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./crop-photo/crop-photo.component */ "J33w");
/* harmony import */ var _adjustment_adjustment_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./adjustment/adjustment.component */ "FqCQ");
/* harmony import */ var _select_photo_select_photo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./select-photo/select-photo.component */ "mNYO");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "9vUh");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _upload_photo_upload_photo_component__WEBPACK_IMPORTED_MODULE_5__["UploadPhotoComponent"],
        _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__["NavigationComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
        _crop_photo_crop_photo_component__WEBPACK_IMPORTED_MODULE_8__["CropPhotoComponent"],
        _adjustment_adjustment_component__WEBPACK_IMPORTED_MODULE_9__["AdjustmentComponent"],
        _select_photo_select_photo_component__WEBPACK_IMPORTED_MODULE_10__["SelectPhotoComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _upload_photo_upload_photo_component__WEBPACK_IMPORTED_MODULE_5__["UploadPhotoComponent"],
                    _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__["NavigationComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                    _crop_photo_crop_photo_component__WEBPACK_IMPORTED_MODULE_8__["CropPhotoComponent"],
                    _adjustment_adjustment_component__WEBPACK_IMPORTED_MODULE_9__["AdjustmentComponent"],
                    _select_photo_select_photo_component__WEBPACK_IMPORTED_MODULE_10__["SelectPhotoComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 136, vars: 0, consts: [[1, "py-5", "bg-dark"], [1, "container"], [1, "row"], [1, "col-lg-12", "h-100", "text-center", "text-lg-left", "text-light", "my-auto"], ["href", "/how-to/make-argentina-passport-visa-photo-online.php", 1, "btn", "btn-outline-primary", "mr-3", "mb-3"], ["href", "/how-to/make-australia-passport-visa-photo-online.php", 1, "btn", "btn-outline-primary", "mr-3", "mb-3"], ["href", "/how-to/make-belgium-passport-visa-photo-online.php", 1, "btn", "btn-outline-primary", "mr-3", "mb-3"], ["href", "/how-to/make-brazil-passport-visa-photo-online.php", 1, "btn", "btn-outline-primary", "mr-3", "mb-3"], ["href", "/how-to/make-canada-passport-visa-photo-online.php", 1, "btn", "btn-outline-primary", "mr-3", "mb-3"], ["href", "/how-to/make-china-passport-visa-photo-online.php", 1, "btn", "btn-outline-primary", "mr-3", "mb-3"], ["href", "/how-to/make-czech-republic-passport-visa-photo-online.php", 1, "btn", "btn-outline-primary", "mr-3", "mb-3"], ["href", "/how-to/make-denmark-passport-visa-photo-online.php", 1, "btn", "btn-outline-primary", "mr-3", "mb-3"], ["href", "/how-to/make-finland-passport-visa-photo-online.php", 1, "btn", "btn-outline-primary", "mr-3", "mb-3"], ["href", "/how-to/make-france-passport-visa-photo-online.php", 1, "btn", "btn-outline-primary", "mr-3", "mb-3"], ["href", "/how-to/make-germany-passport-visa-photo-online.php", 1, "btn", "btn-outline-primary", "mr-3", "mb-3"], ["href", "/how-to/make-ghana-passport-visa-photo-online.php", 1, "btn", "btn-outline-primary", "mr-3", "mb-3"], ["href", "/how-to/make-greece-passport-visa-photo-online.php", 1, "btn", "btn-outline-primary", "mr-3", "mb-3"], ["href", "/how-to/make-hong-kong-passport-visa-photo-online.php", 1, "btn", "btn-outline-primary", "mr-3", "mb-3"], ["href", "/how-to/make-india-passport-visa-photo-online.php", 1, "btn", "btn-outline-primary", "mr-3", "mb-3"], ["href", "/how-to/make-indonesia-passport-visa-photo-online.php", 1, "btn", "btn-outline-primary", "mr-3", "mb-3"], ["href", "/how-to/make-ireland-passport-visa-photo-online.php", 1, "btn", "btn-outline-primary", "mr-3", "mb-3"], ["href", "/how-to/make-israel-passport-visa-photo-online.php", 1, "btn", "btn-outline-primary", "mr-3", "mb-3"], ["href", "/how-to/make-italy-passport-visa-photo-online.php", 1, "btn", "btn-outline-primary", "mr-3", "mb-3"], ["href", "/how-to/make-japan-passport-visa-photo-online.php", 1, "btn", "btn-outline-primary", "mr-3", "mb-3"], ["href", "/how-to/make-kenya-passport-visa-photo-online.php", 1, "btn", "btn-outline-primary", "mr-3", "mb-3"], ["href", "/how-to/make-korea-passport-visa-photo-online.php", 1, "btn", "btn-outline-primary", "mr-3", "mb-3"], ["href", "/how-to/make-malaysia-passport-visa-photo-online.php", 1, "btn", "btn-outline-primary", "mr-3", "mb-3"], ["href", "/how-to/make-mexico-passport-visa-photo-online.php", 1, "btn", "btn-outline-primary", "mr-3", "mb-3"], ["href", "/how-to/make-netherlands-passport-visa-photo-online.php", 1, "btn", "btn-outline-primary", "mr-3", "mb-3"], ["href", "/how-to/make-new-zealand-passport-visa-photo-online.php", 1, "btn", "btn-outline-primary", "mr-3", "mb-3"], ["href", "/how-to/make-nigeria-passport-visa-photo-online.php", 1, "btn", "btn-outline-primary", "mr-3", "mb-3"], ["href", "/how-to/make-norway-passport-visa-photo-online.php", 1, "btn", "btn-outline-primary", "mr-3", "mb-3"], ["href", "/how-to/make-pakistan-passport-visa-photo-online.php", 1, "btn", "btn-outline-primary", "mr-3", "mb-3"], ["href", "/how-to/make-philippines-passport-visa-photo-online.php", 1, "btn", "btn-outline-primary", "mr-3", "mb-3"], ["href", "/how-to/make-poland-passport-visa-photo-online.php", 1, "btn", "btn-outline-primary", "mr-3", "mb-3"], ["href", "/how-to/make-portugal-passport-visa-photo-online.php", 1, "btn", "btn-outline-primary", "mr-3", "mb-3"], ["href", "/how-to/make-russia-passport-visa-photo-online.php", 1, "btn", "btn-outline-primary", "mr-3", "mb-3"], ["href", "/how-to/make-schengen-passport-visa-photo-online.php", 1, "btn", "btn-outline-primary", "mr-3", "mb-3"], ["href", "/how-to/make-singapore-passport-visa-photo-online.php", 1, "btn", "btn-outline-primary", "mr-3", "mb-3"], ["href", "/how-to/make-south-africa-passport-visa-photo-online.php", 1, "btn", "btn-outline-primary", "mr-3", "mb-3"], ["href", "/how-to/make-spain-passport-visa-photo-online.php", 1, "btn", "btn-outline-primary", "mr-3", "mb-3"], ["href", "/how-to/make-sweden-passport-visa-photo-online.php", 1, "btn", "btn-outline-primary", "mr-3", "mb-3"], ["href", "/how-to/make-switzerland-passport-visa-photo-online.php", 1, "btn", "btn-outline-primary", "mr-3", "mb-3"], ["href", "/how-to/make-taiwan-passport-visa-photo-online.php", 1, "btn", "btn-outline-primary", "mr-3", "mb-3"], ["href", "/how-to/make-tanzania-passport-visa-photo-online.php", 1, "btn", "btn-outline-primary", "mr-3", "mb-3"], ["href", "/how-to/make-thailand-passport-visa-photo-online.php", 1, "btn", "btn-outline-primary", "mr-3", "mb-3"], ["href", "/how-to/make-turkey-passport-visa-photo-online.php", 1, "btn", "btn-outline-primary", "mr-3", "mb-3"], ["href", "/how-to/make-united-kingdom-passport-visa-photo-online.php", 1, "btn", "btn-outline-primary", "mr-3", "mb-3"], ["href", "/how-to/make-us-passport-visa-photo-online.php", 1, "btn", "btn-outline-primary", "mr-3", "mb-3"], ["href", "/how-to/make-vietnam-passport-visa-photo-online.php", 1, "btn", "btn-outline-primary", "mr-3", "mb-3"], [1, "col-lg-9", "h-100", "text-center", "text-lg-left", "text-light", "my-auto"], [1, "list-inline", "mb-2"], [1, "list-inline-item"], ["href", "/requirements.php", 1, "text-light"], ["href", "/how-to/take-a-passport-photo-at-home.php", 1, "text-light"], ["href", "/languages.php", 1, "text-light"], ["href", "/about.php", 1, "text-light"], ["href", "/contact.php", 1, "text-light"], ["href", "/privacy.php", 1, "text-light"], [1, "text-muted", "small", "mb-4", "mb-lg-0"], [1, "col-lg-3", "h-100", "text-center", "text-lg-right", "my-auto"], [1, "list-inline", "mb-0"], [1, "list-inline-item", "mr-3"], ["href", "https://www.facebook.com/phototool/"], [1, "fa", "fa-facebook", "fa-2x", "fa-fw", "text-light"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Argentina");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Australia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Belgium");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Brazil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Canada");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "China");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Czech Republic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Denmark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Finland");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "France");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Germany");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Ghana");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Greece");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Hong Kong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "India");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Indonesia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Ireland");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Israel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Italy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Japan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Kenya");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Korea");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Malaysia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Mexico");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Netherlands");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "New Zealand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Nigeria");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Norway");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Pakistan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Philippines");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Poland");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Portugal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Russia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Schengen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Singapore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "South Africa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Spain");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Sweden");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Switzerland");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Taiwan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Tanzania");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Thailand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Turkey");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "United Kingdom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "USA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Vietnam");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "ul", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "li", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "a", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Requirements");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "li", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "\u22C5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "li", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Photographer's guide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "li", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "\u22C5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "li", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "a", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Other languages");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "li", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "\u22C5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "li", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "li", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "\u22C5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "li", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "li", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "\u22C5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "li", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "p", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, " \u00A9 2020-2022 PhotoTool. All Rights Reserved. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "ul", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "li", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "a", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "i", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "k5x5":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class NavigationComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavigationComponent.ɵfac = function NavigationComponent_Factory(t) { return new (t || NavigationComponent)(); };
NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavigationComponent, selectors: [["app-navigation"]], decls: 24, vars: 0, consts: [["id", "mainNav", 1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light", "static-top"], [1, "container"], ["href", "/", 1, "navbar-brand", "js-scroll-trigger"], ["alt", "phototool", "height", "32", "src", "https://d2phdgmkbm5x8b.cloudfront.net/img/logo.png", "width", "190"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarResponsive", "aria-controls", "navbarResponsive", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler", "navbar-toggler-right"], [1, "fa", "fa-bars"], ["id", "navbarResponsive", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "text-uppercase", "ml-auto"], [1, "nav-item"], ["routerLink", "", 1, "nav-link"], ["routerLink", "upload-photo", 1, "nav-link"], ["routerLink", "crop-photo", 1, "nav-link"], ["routerLink", "adjustment", 1, "nav-link"], ["routerLink", "select-photo", 1, "nav-link"]], template: function NavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Menu ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Make Photo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Crop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Adjustment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Download");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navigation',
                templateUrl: './navigation.component.html',
                styleUrls: ['./navigation.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "mNYO":
/*!********************************************************!*\
  !*** ./src/app/select-photo/select-photo.component.ts ***!
  \********************************************************/
/*! exports provided: SelectPhotoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectPhotoComponent", function() { return SelectPhotoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SelectPhotoComponent {
    constructor() {
        this.imageSource = 'assets/how-it-works_n.png';
        this.imageDestination = '';
    }
    ngOnInit() {
    }
}
SelectPhotoComponent.ɵfac = function SelectPhotoComponent_Factory(t) { return new (t || SelectPhotoComponent)(); };
SelectPhotoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelectPhotoComponent, selectors: [["app-select-photo"]], decls: 29, vars: 0, consts: [[1, "main-section"], [1, "container"], [1, "row"], [1, "col-md-12", "col-lg-9", "col-xl-7", "mx-auto"], ["src", "upload/20201130000125235_1732406683.jpg", "width", "600", "height", "400", 1, "img-fluid", 2, "border", "1px solid #888888"], ["href", "select-printable-photo.php", "role", "button", 1, "btn", "btn-lg", "btn-primary", "center-block", "btn-block"], ["src", "upload/20201130000125235_1732406683_thumbnail.jpg", 1, "img-fluid", 2, "border", "1px solid #888888"], ["href", "select-digital-photo.php", "role", "button", 1, "btn", "btn-lg", "btn-primary", "center-block", "btn-block"], [1, "col-md-6", "col-lg-6"], ["href", "adjustment.php", "role", "button", 1, "btn", "btn-outline-primary", "pull-left"]], template: function SelectPhotoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Printable photo on 4x6\" (10x15cm) photo paper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Download printable photo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Single digital photo for online submission");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Download single digital photo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u00A0\u00A0\u00AB Back\u00A0\u00A0\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWxlY3QtcGhvdG8uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectPhotoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-select-photo',
                templateUrl: './select-photo.component.html',
                styleUrls: ['./select-photo.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "nkfZ":
/*!********************************************************!*\
  !*** ./src/app/upload-photo/upload-photo.component.ts ***!
  \********************************************************/
/*! exports provided: UploadPhotoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadPhotoComponent", function() { return UploadPhotoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");






function UploadPhotoComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " The photo file size should be smaller that 10MB and the photo dimension should be smaller than 4000 x 3000 pixels. Only .jpg or .jpeg files are accepted. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Please select your photo:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Browse... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UploadPhotoComponent_div_7_Template_input_change_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.uploadFile(_r2.files); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Tips for taking the perfect passport photo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u00A0\u00A0\u00AB Back\u00A0\u00A0\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UploadPhotoComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Uploading photo... Please wait. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class UploadPhotoComponent {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.waiting_panel = false;
        this.browse_panel = true;
        this.onUploadFinished = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.uploadFile = (files) => {
            if (files.length === 0) {
                return;
            }
            let fileToUpload = files[0];
            const formData = new FormData();
            formData.append('file', fileToUpload, fileToUpload.name);
            this.http
                .post('https://' + 'cors-anywhere.herokuapp.com/' + 'http://nutanusadadiya-001-site1.dtempurl.com/api/upload', formData, {
                reportProgress: true,
                observe: 'events',
            })
                .subscribe((event) => {
                if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].UploadProgress) {
                    this.browse_panel = false;
                    this.waiting_panel = true;
                }
                else if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].Response) {
                    localStorage.setItem('croppedImage', 'https://' + 'cors-anywhere.herokuapp.com/' + 'http://nutanusadadiya-001-site1.dtempurl.com/resources/images/' + fileToUpload.name);
                    this.router.navigate(['/crop-photo']);
                }
            });
        };
    }
}
UploadPhotoComponent.ɵfac = function UploadPhotoComponent_Factory(t) { return new (t || UploadPhotoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
UploadPhotoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UploadPhotoComponent, selectors: [["app-upload-photo"]], outputs: { onUploadFinished: "onUploadFinished" }, decls: 9, vars: 2, consts: [[1, "main-section"], [1, "container"], [1, "row"], [1, "col-lg-12"], ["id", "photo-browse-layer", "class", "col-md-12 col-lg-12", 4, "ngIf"], ["id", "waiting-layer", "class", "container", "style", "width: 100%; height: 220px", 4, "ngIf"], ["id", "photo-browse-layer", 1, "col-md-12", "col-lg-12"], [1, "alert", "alert-info"], ["alt", "How idPhotoDIY works", "height", "200", "src", "https://d2phdgmkbm5x8b.cloudfront.net/img/how-it-works_n.png", "width", "900", 1, "img-fluid"], [1, "btn", "btn-lg", "btn-block", "btn-primary"], ["type", "file", "accept", ".jpg,.jpeg", "name", "file", "id", "file", 2, "display", "none", 3, "change"], ["file", ""], ["href", "how-to/take-a-passport-photo-at-home.php", "target", "_blank"], [1, "col-6", "col-sm-6", "col-md-6", "col-lg-6"], ["href", "./", "role", "button", 1, "btn", "btn-outline-primary", "pull-left"], ["id", "waiting-layer", 1, "container", 2, "width", "100%", "height", "220px"], [1, "row", "text-center"], [1, "col-lg-12", "my-5"], ["alt", "", "border", "0", "src", "https://d2phdgmkbm5x8b.cloudfront.net/img/wait3.gif", "width", "300", "height", "24"]], template: function UploadPhotoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Upload photo for United States Passport");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, UploadPhotoComponent_div_7_Template, 27, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UploadPhotoComponent_div_8_Template, 7, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.browse_panel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.waiting_panel);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGxvYWQtcGhvdG8uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UploadPhotoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-upload-photo',
                templateUrl: './upload-photo.component.html',
                styleUrls: ['./upload-photo.component.css'],
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, { onUploadFinished: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _adjustment_adjustment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adjustment/adjustment.component */ "FqCQ");
/* harmony import */ var _crop_photo_crop_photo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crop-photo/crop-photo.component */ "J33w");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _select_photo_select_photo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./select-photo/select-photo.component */ "mNYO");
/* harmony import */ var _upload_photo_upload_photo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./upload-photo/upload-photo.component */ "nkfZ");









const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'upload-photo', component: _upload_photo_upload_photo_component__WEBPACK_IMPORTED_MODULE_6__["UploadPhotoComponent"] },
    { path: 'crop-photo', component: _crop_photo_crop_photo_component__WEBPACK_IMPORTED_MODULE_3__["CropPhotoComponent"] },
    { path: 'adjustment', component: _adjustment_adjustment_component__WEBPACK_IMPORTED_MODULE_2__["AdjustmentComponent"] },
    { path: 'select-photo', component: _select_photo_select_photo_component__WEBPACK_IMPORTED_MODULE_5__["SelectPhotoComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
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

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map