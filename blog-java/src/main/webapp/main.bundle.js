webpackJsonp([1],{

/***/ "./src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src async recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#menu{\r\n    padding: 1.5rem 0 2rem 0;\r\n    background-color: #2A3132;\r\n    color:#fff;\r\n}\r\n#conteudo{\r\n    padding: 2.5rem 2em 2rem 2rem;\r\n    text-align: justify;\r\n}\r\n#menu-titulo{\r\n    padding: .5rem 1.5rem;\r\n}\r\n\r\n#menu-titulo h6{\r\n    color:#B0C4B1;\r\n}\r\n\r\n@media (max-width: 767px){\r\n    #menu-titulo{\r\n        text-align: center;\r\n    }\r\n}\r\n\r\n@media (min-width: 768px){\r\n    .sidebar{\r\n        position: fixed;\r\n        top: 0;\r\n        bottom: 0;\r\n        left: 0;\r\n        z-index: 1000;\r\n        overflow-x: hidden;\r\n        overflow-y: auto;\r\n    }\r\n\r\n    .sidebar{\r\n        padding-left: 0;\r\n        padding-right: 0;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-4 sidebar\" id=\"menu\">\n      <header>\n        <div id=\"menu-titulo\">\n          <h1>Code Maki</h1>\n          <h2><i>Aprendendo na Prática</i></h2>\n        </div>\n        <nav class=\"navbar navbar-inverse navbar-toggleable-sm\" id=\"menu-links\">\n          <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#menu-links-interno\">\n            <span class=\"navbar-toggler-icon\"></span>\n          </button>\n          <a class=\"navbar-brand hidden-md-up\" href=\"#\">menu</a>\n          <div class=\"navbar-collapse collapse\" id=\"menu-links-interno\">\n            <div class=\"navbar-nav\">\n              <a class=\"nav-item nav-link active\" href=\"#sobre-mim\">sobre</a>\n              <a class=\"nav-item nav-link\" href=\"#artigos\">artigos</a>\n              <a class=\"nav-item nav-link\" href=\"#contato\">contato</a>\n            </div>\n          </div>\n        </nav>\n      </header>\n    </div>\n    <div class=\"col-md-8 offset-md-4\" id=\"conteudo\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contato_contato_component__ = __webpack_require__("./src/app/contato/contato.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__artigo_artigo_component__ = __webpack_require__("./src/app/artigo/artigo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__routes__ = __webpack_require__("./src/app/routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__chat_chat_component__ = __webpack_require__("./src/app/chat/chat.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_4__contato_contato_component__["a" /* ContatoComponent */], __WEBPACK_IMPORTED_MODULE_7__artigo_artigo_component__["a" /* ArtigoComponent */], __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_10__chat_chat_component__["a" /* ChatComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["a" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__routes__["a" /* routes */]), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */]],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//função vazia
var fat1 = function () { };
var long1 = function () { };
//potencia
var fat2 = function (x) { return x * x; };
var long2 = function (x) { return x * x; };
//adicionar dois números
var fat3 = function (a, b) { return a + b; };
var long3 = function (a, b) { return a + b; };
function reverseArray(arg) {
    return arg.reverse();
}
console.log(reverseArray(['a', 'b', 'c']));
console.log(reverseArray([1, 2, 3]));
var Person = (function () {
    function Person() {
    }
    Person.prototype.run = function () {
        throw new Error("Method not implemented.");
    };
    return Person;
}());
var Robot = (function () {
    function Robot() {
    }
    Robot.prototype.run = function () {
        throw new Error("Method not implemented.");
    };
    return Robot;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/artigo/artigo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\npre{\r\n    background-color: #212121;\r\n    color:#fff;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/artigo/artigo.component.html":
/***/ (function(module, exports) {

module.exports = "<h2><a href=\"/\">home</a></h2>\n<article id=\"artigo\" class=\"row\">\n  <div class=\"col-md-12\">\n    <h1>{{artigo.titulo}}</h1>    \n    <h6>{{artigo.resumo}}</h6>\n      <div [innerHtml]=\"html\"></div>\n  </div>\n</article>\n\n"

/***/ }),

/***/ "./src/app/artigo/artigo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtigoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ArtigoComponent = (function () {
    function ArtigoComponent(activatedRoute, http, zone, sanitizer) {
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.zone = zone;
        this.sanitizer = sanitizer;
        this.html = "";
        this.artigo = new __WEBPACK_IMPORTED_MODULE_3__home_home_component__["b" /* Artigo */]();
    }
    ArtigoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            var id = params['id'];
            _this.http.get('/api/artigo/' + id)
                .subscribe(function (artigo) {
                _this.zone.run(function () {
                    _this.resultadoArtigo(artigo);
                });
            });
        });
    };
    ArtigoComponent.prototype.resultadoArtigo = function (artigo) {
        var _this = this;
        console.log(artigo);
        this.artigo = JSON.parse(artigo._body);
        this.http.get("assets/artigo" + this.artigo.id + ".html")
            .subscribe(function (file) {
            _this.zone.run(function () {
                _this.resultadoHtmlArtigo(file);
                __WEBPACK_IMPORTED_MODULE_4_jquery__["getScript"]('assets/artigo' + _this.artigo.id + '.js');
            });
        });
    };
    ArtigoComponent.prototype.resultadoHtmlArtigo = function (file) {
        this.html = this.sanitizer.bypassSecurityTrustHtml(file._body);
    };
    return ArtigoComponent;
}());
ArtigoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-artigo',
        template: __webpack_require__("./src/app/artigo/artigo.component.html"),
        styles: [__webpack_require__("./src/app/artigo/artigo.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* NgZone */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _d || Object])
], ArtigoComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=artigo.component.js.map

/***/ }),

/***/ "./src/app/chat/chat.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\n  <h3>aqui você pode interagir com as pessoas que estão no site</h3>\n<textarea [(ngModel)]=\"msg\" class=\"form-control\"></textarea>\n<button (click)=\"sendMessage()\" class=\"btn btn-primary\">enviar</button>\n{{status}}\n\n<div class=\"list-group\" *ngFor=\"let msg of msgsRecebidas;\">\n  <div class=\"list-group-item\">{{msg}}</div>\n</div>\n</div>\n\n<div class=\"list-group\" *ngFor=\"let usr of usuarios;\">\n  <div class=\"list-group-item\">{{usr.firstName}} {{usr.lastName}}</div>\n</div>\n"

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
/* unused harmony export User */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatComponent = (function () {
    function ChatComponent(http, zone) {
        this.http = http;
        this.zone = zone;
        this.msgsRecebidas = new Array();
        this.usuarios = new Array();
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        debugger;
        this.socket = new WebSocket('ws://localhost:3001');
        this.socket.onmessage = function (evt) {
            debugger;
            _this.msgsRecebidas.push(evt.data);
        };
    };
    ChatComponent.prototype.sendMessage = function () {
        debugger;
        if (!(this.socket.readyState === WebSocket.OPEN)) {
            status = "offline";
            return false;
        }
        status = "online";
        this.socket.send(this.msg);
    };
    return ChatComponent;
}());
ChatComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-chat',
        template: __webpack_require__("./src/app/chat/chat.component.html"),
        styles: [__webpack_require__("./src/app/chat/chat.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* NgZone */]) === "function" && _b || Object])
], ChatComponent);

var User = (function () {
    function User() {
        this.firstName = "";
        this.lastName = "";
    }
    return User;
}());

var _a, _b;
//# sourceMappingURL=chat.component.js.map

/***/ }),

/***/ "./src/app/contato/contato.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/contato/contato.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"p-3\"></div>\n<section id=\"contato\" class=\"row\">\n  <div class=\"col-sm-12\">\n    <div class=\"card\">\n      <div class=\"card-block\">\n        <h1 class=\"card-title\">Contato</h1>\n        <p class=\"card-text\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper ut quam imperdiet conubia egestas sodales nullam:\n          Id mauris neque senectus penatibus senectus cras, sociosqu per in? Felis hendrerit hac lacus</p>\n        <form [formGroup]=\"contatoForm\" (ngSubmit)=\"onSubmit()\">\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" formControlName=\"nome\" placeholder=\"nome\" required>\n          </div>\n          <div class=\"form-group\">\n            <input type=\"email\" class=\"form-control\" formControlName=\"email\" placeholder=\"e-mail\" required>\n          </div>\n          <div class=\"form-group\">\n            <textarea class=\"form-control\" formControlName=\"texto\" rows=\"3\" placeholder=\"deixe um comentário\" \n            required minlength=\"5\" maxlength=\"100\"></textarea>\n          </div>\n          <div *ngFor=\"let err of listaErros;\">\n            <div class=\"alert alert-danger\">{{err.texto}}</div>\n          </div>\n          <div *ngFor=\"let err of listaResultado;\">\n            <div [ngClass]=\"{'alert-success' : err.sucesso, 'alert-danger': !err.sucesso}\" \n            class=\"alert\">{{err.texto}}</div>\n          </div>\n          <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/contato/contato.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__emailvalidator__ = __webpack_require__("./src/app/emailvalidator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContatoComponent; });
/* unused harmony export Resultado */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContatoComponent = (function () {
    function ContatoComponent(fb, http, zone) {
        this.fb = fb;
        this.http = http;
        this.zone = zone;
        this.falha = { sucesso: false, texto: "Problemas no envio do formulário de contato!" };
        this.listaErros = [];
        this.listaResultado = [];
        this.mensagensErro = { 'nome': { 'required': 'favor preencher o nome' },
            'email': { 'required': 'favor preencher o email',
                'emailIsValid': 'o formato do email preenchido está incorreto' },
            'texto': { 'required': 'favor preencher o texto',
                'minlength': 'você precisa informar um texto com no mínimo 5 caracteres',
                'maxlength': 'o limite do texto é de 100 caracteres' } };
    }
    ContatoComponent.prototype.ngOnInit = function () { this.buildForm(); };
    ContatoComponent.prototype.buildForm = function () {
        var _this = this;
        this.contatoForm = this.fb.group({
            'nome': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]],
            'email': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__emailvalidator__["a" /* EmailValidator */].emailIsValid]],
            'texto': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(100)]]
        });
        this.contatoForm.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
    };
    ContatoComponent.prototype.onValueChanged = function (data) {
        if (!this.contatoForm)
            return;
        this.listaErros = [];
        if (!this.contatoForm.pristine && this.listaResultado.length > 0)
            this.listaResultado = [];
        for (var field in this.contatoForm.controls) {
            var control = this.contatoForm.get(field);
            if (control && control.dirty && !control.valid) {
                for (var error in control.errors) {
                    this.listaErros.push({ sucesso: false,
                        texto: this.mensagensErro[field][error] });
                }
            }
        }
    };
    ContatoComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.contatoForm.valid) {
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
            var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
            this.http.post('api/contato', JSON.stringify(this.contatoForm.value), options)
                .map(this.mapeiaResultado)
                .subscribe(function (resultado) {
                _this.zone.run(function () {
                    _this.resultadoEnvioContato(resultado);
                });
            });
        }
    };
    ContatoComponent.prototype.mapeiaResultado = function (res) { return res.json(); };
    ContatoComponent.prototype.resultadoEnvioContato = function (res) {
        var sucesso = { sucesso: true,
            texto: "Contato enviado com sucesso!" };
        this.listaResultado = [];
        if (res.success) {
            this.listaResultado.push(sucesso);
            this.contatoForm.markAsPristine();
            this.contatoForm.reset();
        }
        else {
            this.listaResultado.push(this.falha);
        }
    };
    return ContatoComponent;
}());
ContatoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-contato',
        template: __webpack_require__("./src/app/contato/contato.component.html"),
        styles: [__webpack_require__("./src/app/contato/contato.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* NgZone */]) === "function" && _c || Object])
], ContatoComponent);

var Resultado = (function () {
    function Resultado() {
    }
    return Resultado;
}());

var _a, _b, _c;
//# sourceMappingURL=contato.component.js.map

/***/ }),

/***/ "./src/app/emailvalidator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailValidator; });
var EmailValidator = (function () {
    function EmailValidator() {
    }
    EmailValidator.emailIsValid = function (control) {
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        return EMAIL_REGEXP.test(control.value) ? null : {
            emailIsValid: {
                valid: false
            }
        };
    };
    return EmailValidator;
}());

//# sourceMappingURL=emailvalidator.js.map

/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "      <article id=\"sobre-mim\" class=\"row\">\n        <div class=\"col-md-12\">\n          <h1>Sobre mim</h1>\n          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper ut quam imperdiet conubia egestas sodales nullam:\n            Id mauris neque senectus penatibus senectus cras, sociosqu per in? Felis hendrerit hac lacus</div>\n        </div>\n      </article>\n      <section id=\"artigos\" class=\"row\">\n        <div class=\"col-md-6\" *ngFor=\"let artigo of artigos;\">\n          <div class=\"p-3\"></div>\n          <article class=\"card artigo\">\n            <div class=\"card-block\">\n              <h2 class=\"card-title\">{{artigo.titulo}}</h2>\n              <p class=\"card-text\">{{artigo.resumo}}</p>\n              <a class=\"btn btn-primary\" [routerLink]=\"['/artigo', artigo.id]\">ler mais</a>\n            </div>\n          </article>\n        </div>\n      </section>\n      <app-contato></app-contato>\n      <app-chat></app-chat>      \n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Artigo; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(http, zone) {
        this.http = http;
        this.zone = zone;
        this.artigos = new Array();
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/blog/api/artigos')
            .subscribe(function (artigos) {
            _this.zone.run(function () {
                _this.resultadoArtigos(artigos);
            });
        });
    };
    HomeComponent.prototype.resultadoArtigos = function (artigos) {
        this.artigos = JSON.parse(artigos._body);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("./src/app/home/home.component.html"),
        styles: [__webpack_require__("./src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* NgZone */]) === "function" && _b || Object])
], HomeComponent);

var Artigo = (function () {
    function Artigo() {
    }
    return Artigo;
}());

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "./src/app/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_artigo_artigo_component__ = __webpack_require__("./src/app/artigo/artigo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });


var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1_app_home_home_component__["a" /* HomeComponent */] },
    { path: ':prefix', component: __WEBPACK_IMPORTED_MODULE_1_app_home_home_component__["a" /* HomeComponent */] },
    {
        path: 'artigo/:id',
        component: __WEBPACK_IMPORTED_MODULE_0_app_artigo_artigo_component__["a" /* ArtigoComponent */]
    }
];
//# sourceMappingURL=routes.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map