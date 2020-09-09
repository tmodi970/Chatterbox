webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "html,\r\nbody {\r\n  height: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_user_list_user_list_component__ = __webpack_require__("./src/app/components/user-list/user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_feed_feed_component__ = __webpack_require__("./src/app/components/feed/feed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_send_send_component__ = __webpack_require__("./src/app/components/send/send.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_chatroom_chatroom_component__ = __webpack_require__("./src/app/components/chatroom/chatroom.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_feed_header_feed_header_component__ = __webpack_require__("./src/app/components/feed-header/feed-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_peer_chat_peer_chat_component__ = __webpack_require__("./src/app/components/peer-chat/peer-chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_welcome_welcome_component__ = __webpack_require__("./src/app/components/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_search_search_component__ = __webpack_require__("./src/app/components/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_friend_requests_friend_requests_component__ = __webpack_require__("./src/app/components/friend-requests/friend-requests.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_popup_popup_component__ = __webpack_require__("./src/app/components/popup/popup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_loading_loading_component__ = __webpack_require__("./src/app/components/loading/loading.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_current_user_current_user_component__ = __webpack_require__("./src/app/components/current-user/current-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_flash_message_flash_message_component__ = __webpack_require__("./src/app/components/flash-message/flash-message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_chat_service__ = __webpack_require__("./src/app/services/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_websocket_service__ = __webpack_require__("./src/app/services/websocket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_popup_service__ = __webpack_require__("./src/app/services/popup.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Modules.





// Components.














// Services.




var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__components_chatroom_chatroom_component__["a" /* ChatroomComponent */] },
    { path: 'peer', component: __WEBPACK_IMPORTED_MODULE_11__components_peer_chat_peer_chat_component__["a" /* PeerChatComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_user_list_user_list_component__["a" /* UserListComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_feed_feed_component__["a" /* FeedComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_send_send_component__["a" /* SendComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_chatroom_chatroom_component__["a" /* ChatroomComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_feed_header_feed_header_component__["a" /* FeedHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_peer_chat_peer_chat_component__["a" /* PeerChatComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_welcome_welcome_component__["a" /* WelcomeComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_friend_requests_friend_requests_component__["a" /* FriendRequestsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_popup_popup_component__["a" /* PopupComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_loading_loading_component__["a" /* LoadingComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_current_user_current_user_component__["a" /* CurrentUserComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_flash_message_flash_message_component__["a" /* FlashMessageComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_19__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_20__services_chat_service__["a" /* ChatService */], __WEBPACK_IMPORTED_MODULE_21__services_websocket_service__["a" /* WebsocketService */], __WEBPACK_IMPORTED_MODULE_22__services_popup_service__["a" /* PopupService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/chatroom/chatroom.component.css":
/***/ (function(module, exports) {

module.exports = ".loading {\r\n  height: 100vh;\r\n  background-color: rgb(248, 246, 248);\r\n}\r\n\r\n.current-user {\r\n  background-color: #8e44ad;\r\n  height: 100px;\r\n}\r\n\r\n.error,\r\n.info {\r\n  position: absolute;\r\n  width: 100%\r\n}\r\n\r\n.search {\r\n  background-color: rgb(72, 21, 78);\r\n  height: 65px;\r\n}\r\n\r\n.friend-requests {\r\n  background-color: rgb(72, 21, 78);\r\n  height: 70px;\r\n}\r\n\r\n.user-list {\r\n  background-color: rgb(72, 21, 78);\r\n  position: absolute;\r\n  bottom: 0;\r\n  top: 235px;\r\n  width: 100%;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.welcome {\r\n  background-color: rgb(248, 246, 248);\r\n  height: 100vh;\r\n  padding: 20px;\r\n  position: relative;\r\n}\r\n\r\n.feed-header {\r\n  background-color: white;\r\n  height: 70px;\r\n}\r\n\r\n.feed {\r\n  background-color: rgb(247, 208, 253);\r\n  overflow-y: scroll;\r\n  position: absolute;\r\n  bottom: 40px;\r\n  top: 70px;\r\n  width: 100%\r\n}\r\n\r\n.send {\r\n  background-color: white;\r\n  height: 40px;\r\n  position: fixed;\r\n  bottom: 0px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/chatroom/chatroom.component.html":
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!loading\">\r\n  <div class=\"loading\">\r\n    <app-loading></app-loading>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"!loading\">\r\n  <div *ngIf=\"calling || dialing\">\r\n    <app-popup></app-popup>\r\n  </div>\r\n\r\n  <div *ngIf=\"flashMessage.type !== null\">\r\n    <app-flash-message></app-flash-message>\r\n  </div>\r\n\r\n  <div class=\"columns is-gapless\">\r\n    <div class=\"column is-one-third\">\r\n      <div class=\"current-user\">\r\n        <app-current-user></app-current-user>\r\n      </div>\r\n      <div class=\"search\">\r\n        <app-search></app-search>\r\n      </div>\r\n      <div class=\"friend-requests\">\r\n        <app-friend-requests></app-friend-requests>\r\n      </div>\r\n      <div class=\"user-list\">\r\n        <app-user-list></app-user-list>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"column right\">\r\n      <div [style.display]=\"displayWelcome\">\r\n        <div class=\"welcome\">\r\n          <app-welcome></app-welcome>\r\n        </div>\r\n      </div>\r\n\r\n      <div [style.display]=\"displayChatComponents\">\r\n        <div class=\"feed-header\">\r\n          <app-feed-header></app-feed-header>\r\n        </div>\r\n\r\n        <div class=\"feed\">\r\n          <app-feed></app-feed>\r\n        </div>\r\n\r\n        <div class=\"send\">\r\n          <app-send></app-send>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/chatroom/chatroom.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatroomComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_websocket_service__ = __webpack_require__("./src/app/services/websocket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_chat_service__ = __webpack_require__("./src/app/services/chat.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatroomComponent = /** @class */ (function () {
    function ChatroomComponent(websocketService, chatService) {
        this.websocketService = websocketService;
        this.chatService = chatService;
        this.loading = true;
    }
    ChatroomComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.websocketService.connect();
        this.socket = this.websocketService.socket;
        this.chatService.calling.subscribe(function (calling) { return _this.calling = calling; });
        this.chatService.dialing.subscribe(function (dialing) { return _this.dialing = dialing; });
        this.chatService.flashMessage.subscribe(function (flashMessage) { return _this.flashMessage = flashMessage; });
        // Checks if the welcome message should be displayed.
        this.chatService.activeUserItem.subscribe(function (activeUserItem) {
            if (activeUserItem.id === null) {
                _this.displayWelcome = 'block';
                _this.displayChatComponents = 'none';
            }
            else {
                _this.displayWelcome = 'none';
                _this.displayChatComponents = 'block';
            }
            _this.loading = false;
        });
        // Friend request feedback.
        this.socket.on('friendResponseServer', function (data) {
            if (data.type === 'success') {
                _this.chatService.changeFlashMessage({ type: 'info', message: data.message, color: 'success' });
                _this.chatService.changeState("friendList");
            }
            if (data.type === 'error') {
                _this.chatService.changeFlashMessage({ type: 'info', message: data.message, color: 'warning' });
            }
        });
        this.socket.on('messageResponseServer', function (data) {
            _this.chatService.changeFlashMessage({ type: 'info', message: data.message, color: 'warning' });
        });
    };
    ChatroomComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-chatroom',
            template: __webpack_require__("./src/app/components/chatroom/chatroom.component.html"),
            styles: [__webpack_require__("./src/app/components/chatroom/chatroom.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_websocket_service__["a" /* WebsocketService */], __WEBPACK_IMPORTED_MODULE_2__services_chat_service__["a" /* ChatService */]])
    ], ChatroomComponent);
    return ChatroomComponent;
}());



/***/ }),

/***/ "./src/app/components/current-user/current-user.component.css":
/***/ (function(module, exports) {

module.exports = ":host div {\r\n  margin-left: 12px;\r\n  padding-top: 10px;\r\n}\r\n\r\n:host img {\r\n  height: 80px;\r\n  margin-right: 20px;\r\n  border-radius: 100%;\r\n  float: left;\r\n  clear: both;\r\n}\r\n\r\n:host .name {\r\n  padding-top: 10px;\r\n  color: white;\r\n  font-size: 25px;\r\n  font-weight: 900;\r\n  display: block;\r\n}\r\n\r\n:host .select {\r\n  margin-top: -30px;\r\n  margin-left: -7px;\r\n  font-size: 18px;\r\n}\r\n\r\n:host .select select {\r\n  background-color: transparent;\r\n  border: none;\r\n  color: white;\r\n  margin-top: -15px;\r\n}\r\n\r\n:host .select:after {\r\n  margin-right: 1.5vw;\r\n  margin-top: -7px;\r\n}\r\n\r\n:host .status {\r\n  height: 20px;\r\n  width: 20px;\r\n  border-radius: 100%;\r\n  display: inline-block;\r\n  position: absolute;\r\n  margin-top: 55px;\r\n  margin-left: -40px;\r\n}\r\n\r\n.online {\r\n  background-color: rgb(4, 214, 134);\r\n}\r\n\r\n.offline {\r\n  background-color: rgb(255, 255, 255);\r\n}\r\n\r\n.away {\r\n  background-color: rgb(243, 247, 3);\r\n}\r\n\r\n.busy {\r\n  background-color: rgb(247, 6, 6);\r\n}\r\n\r\n:host button {\r\n  height: 70px;\r\n  width: 70px;\r\n  margin: 15px;\r\n  margin-top: -63px;\r\n  border-radius: 100%;\r\n  float: right;\r\n}\r\n\r\n:host button span {\r\n  font-size: 43px;\r\n}\r\n\r\nselect option {\r\n  background-color: #8e44ad;\r\n}\r\n\r\nselect:active,\r\nselect:focus {\r\n  -webkit-box-shadow: none;\r\n          box-shadow: none;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/current-user/current-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <img src=\"{{currentUser.avatar}}\">\r\n  <span class=\"status\" [ngClass]=\"{'online' : currentUser.status === 'online', 'offline' : currentUser.status === 'offline', 'away' : currentUser.status === 'away', 'busy' : currentUser.status === 'busy'}\"></span>\r\n  <span class=\"name\">{{currentUser.fullName}}</span>\r\n  <br>\r\n</div>\r\n\r\n<div class=\"select\">\r\n  <select #status (input)=\"changeStatus(status.value)\">\r\n    <option value=\"online\" selected>online</option>\r\n    <option value=\"away\">away</option>\r\n    <option value=\"busy\">busy</option>\r\n    <option value=\"offline\">offline</option>\r\n    <hr>\r\n    <option value=\"signout\">sign out</option>\r\n  </select>\r\n</div>\r\n\r\n<button class=\"button is-primary\" (click)=\"toggleAudio()\">\r\n  <span class=\"icon is-small\">\r\n    <i [ngClass]=\"{'ion-md-volume-high' : allowAudio, 'ion-md-volume-off' : !allowAudio}\"></i>\r\n  </span>\r\n</button>\r\n"

/***/ }),

/***/ "./src/app/components/current-user/current-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_websocket_service__ = __webpack_require__("./src/app/services/websocket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_chat_service__ = __webpack_require__("./src/app/services/chat.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CurrentUserComponent = /** @class */ (function () {
    function CurrentUserComponent(userService, websocketService, chatService) {
        this.userService = userService;
        this.websocketService = websocketService;
        this.chatService = chatService;
        this.BASE_URL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].BASE_URL;
    }
    CurrentUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socket = this.websocketService.socket;
        this.chatService.audio.subscribe(function (audio) { return _this.allowAudio = audio; });
        this.userService.currentUser.subscribe(function (currentUser) { return _this.currentUser = currentUser; });
        this.userService.getCurrentUser().subscribe(function (user) {
            _this.currentUser = user;
            _this.socket.emit('newUser', user);
        });
        this.socket.on('updateCurrentUserStatus', function (status) { return _this.currentUser.status = status; });
    };
    CurrentUserComponent.prototype.changeStatus = function (status) {
        if (status === 'signout') {
            window.location.href = this.BASE_URL + "/signout";
        }
        else {
            this.socket.emit('updateStatus', status);
        }
    };
    CurrentUserComponent.prototype.toggleAudio = function () {
        this.chatService.changeAudio(!this.allowAudio);
    };
    CurrentUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-current-user',
            template: __webpack_require__("./src/app/components/current-user/current-user.component.html"),
            styles: [__webpack_require__("./src/app/components/current-user/current-user.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__services_websocket_service__["a" /* WebsocketService */],
            __WEBPACK_IMPORTED_MODULE_4__services_chat_service__["a" /* ChatService */]])
    ], CurrentUserComponent);
    return CurrentUserComponent;
}());



/***/ }),

/***/ "./src/app/components/feed-header/feed-header.component.css":
/***/ (function(module, exports) {

module.exports = ":host {\r\n  margin: 0px;\r\n  padding: 0px;\r\n}\r\n\r\n:host h1 {\r\n  font-size: 30px;\r\n  margin: 10px;\r\n}\r\n\r\n:host .navbar {\r\n  background-color: white;\r\n}\r\n\r\n:host .title {\r\n  margin-top: 20px;\r\n}\r\n\r\n:host button {\r\n  height: 60px;\r\n  width: 60px;\r\n  margin-right: 20px;\r\n  font-size: 25px;\r\n  border-radius: 100%;\r\n  margin-top: -2px;\r\n}\r\n\r\n:host .trash {\r\n  margin-right: 35px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/feed-header/feed-header.component.html":
/***/ (function(module, exports) {

module.exports = "<audio #audio loop></audio>\r\n\r\n<div *ngIf=\"!calling && !dialing\">\r\n  <nav class=\"navbar\" role=\"navigation\" aria-label=\"main navigation\">\r\n    <div class=\"navbar-brand\">\r\n      <h1 class=\"title is-4\">{{activeUserItem.fullName}}</h1>\r\n    </div>\r\n\r\n    <div class=\"navbar-menu\">\r\n      <div class=\"navbar-end\">\r\n        <div class=\"navbar-item\">\r\n          <button class=\"button is-primary\" (click)=\"startVideoCall(activeUserItem.id)\">\r\n            <span class=\"icon is-small\">\r\n              <i class=\"ion-md-videocam\"></i>\r\n            </span>\r\n          </button>\r\n\r\n          <button class=\"button is-primary\" (click)=\"startVoiceCall(activeUserItem.id)\">\r\n            <span class=\"icon is-small\">\r\n              <i class=\"ion-md-call\"></i>\r\n            </span>\r\n          </button>\r\n\r\n          <button class=\"button is-danger trash\" (click)=\"removeFriend(activeUserItem.id)\">\r\n            <span class=\"icon is-small\">\r\n              <i class=\"ion-md-trash\"></i>\r\n            </span>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</div>\r\n\r\n<div *ngIf=\"calling\">\r\n  <nav class=\"navbar\" role=\"navigation\" aria-label=\"main navigation\">\r\n    <div class=\"navbar-brand\">\r\n      <h1 class=\"title is-4\">Incoming {{callInformation.callType}} call from {{callInformation.caller}}...</h1>\r\n    </div>\r\n  </nav>\r\n</div>\r\n\r\n<div *ngIf=\"dialing\">\r\n  <nav class=\"navbar\" role=\"navigation\" aria-label=\"main navigation\">\r\n    <div class=\"navbar-brand\">\r\n      <h1 class=\"title is-4\">Making a {{dialInformation.dialType}} call to {{dialInformation.receiver}}...</h1>\r\n    </div>\r\n  </nav>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/feed-header/feed-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_chat_service__ = __webpack_require__("./src/app/services/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_websocket_service__ = __webpack_require__("./src/app/services/websocket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_popup_service__ = __webpack_require__("./src/app/services/popup.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_simple_peer__ = __webpack_require__("./node_modules/simple-peer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_simple_peer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_simple_peer__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FeedHeaderComponent = /** @class */ (function () {
    function FeedHeaderComponent(chatService, websocketService, router, popupService) {
        this.chatService = chatService;
        this.websocketService = websocketService;
        this.router = router;
        this.popupService = popupService;
    }
    FeedHeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socket = this.websocketService.socket;
        this.chatService.activeUserItem.subscribe(function (activeUserItem) { return _this.activeUserItem = activeUserItem; });
        this.chatService.calling.subscribe(function (calling) { return _this.calling = calling; });
        this.chatService.dialing.subscribe(function (dialing) { return _this.dialing = dialing; });
        this.popupService.answerCall.subscribe(function (type) { if (type && _this.data) {
            _this.answerCall();
        } });
        this.popupService.hangUp.subscribe(function (type) { if (type && _this.data) {
            _this.hangUp();
        } });
        this.popupService.cancelCall.subscribe(function (type) { if (type && _this.dialInformation) {
            _this.cancelCall();
        } });
        this.chatService.friends.subscribe(function (friends) { return _this.friends = friends; });
        this.chatService.audio.subscribe(function (audio) { return _this.allowAudio = audio; });
        try {
            // Signals the remote peer.
            this.socket.on('newSignal', function (data) {
                if (data.type === 'offer') {
                    _this.startAudio('ringing');
                    _this.chatService.changeCalling(true);
                    _this.data = data;
                    _this.callInformation = { caller: data.caller, callType: data.chatType };
                    _this.chatService.changeCallInformation(_this.callInformation);
                }
                else {
                    _this.peer.signal(data.peerId);
                }
            });
        }
        catch (err) {
            this.chatService.changeFlashMessage({ type: 'error', message: 'An error occured when trying to establish a connection, please try again...', color: 'warning' });
            this.newError();
        }
        this.socket.on('callError', function () { return _this.resetCallState(); });
        this.socket.on('hangUp', function () { return _this.resetCallState(); });
        this.socket.on('cancelCall', function () { return _this.resetCallState(); });
        this.socket.on('answered', function () { return _this.answered = true; });
    };
    FeedHeaderComponent.prototype.removeFriend = function (id) {
        this.socket.emit('removeFriend', id);
    };
    FeedHeaderComponent.prototype.startVideoCall = function (id) {
        this.setupCall('video');
        this.createPeer({ audio: true, video: true }, id, 'offer', 'video', null);
    };
    FeedHeaderComponent.prototype.startVoiceCall = function (id) {
        this.setupCall('voice');
        this.createPeer({ audio: true, video: false }, id, 'offer', 'voice', null);
    };
    FeedHeaderComponent.prototype.setupCall = function (type) {
        var _this = this;
        this.dialInformation = { id: this.activeUserItem.id, receiver: this.activeUserItem.fullName, dialType: type };
        this.chatService.changeDialInformation(this.dialInformation);
        this.chatService.changeDialing(true);
        this.startAudio('dialing');
        this.timeout = setTimeout(function () { if (_this.answered !== true) {
            _this.cancelCall();
        } }, 10000);
    };
    FeedHeaderComponent.prototype.startAudio = function (name) {
        if (this.allowAudio) {
            this.audio.nativeElement.src = "../../../assets/sounds/" + name + ".mp3";
            this.audio.nativeElement.play();
        }
    };
    FeedHeaderComponent.prototype.stopAudio = function () {
        this.audio.nativeElement.pause();
    };
    FeedHeaderComponent.prototype.answerCall = function () {
        var _this = this;
        this.socket.emit('answered', this.data.id);
        this.chatService.changeActiveUserItem(this.friends.filter(function (x) { return x.id === _this.data.id; })[0]);
        this.chatService.changeActiveConversation(this.friends.filter(function (x) { return x.id === _this.data.id; })[0].id);
        if (this.data.chatType === 'video') {
            this.createPeer({ audio: true, video: true }, this.data.id, 'answer', null, this.data.peerId);
        }
        if (this.data.chatType !== 'video') {
            this.createPeer({ audio: true, video: false }, this.data.id, 'answer', null, this.data.peerId);
        }
    };
    FeedHeaderComponent.prototype.cancelCall = function () {
        this.resetCallState();
        this.socket.emit('cancelCall', this.dialInformation.id);
    };
    FeedHeaderComponent.prototype.hangUp = function () {
        this.resetCallState();
        this.socket.emit('hangUp', this.data.id);
    };
    FeedHeaderComponent.prototype.newError = function () {
        this.resetCallState();
        if (this.data) {
            this.socket.emit('callError', this.data.id);
        }
    };
    // Turns of the camera and closes popup.
    FeedHeaderComponent.prototype.resetCallState = function () {
        if (this.localStream) {
            this.localStream.getTracks().forEach(function (x) { return x.stop(); });
        }
        clearTimeout(this.timeout);
        this.chatService.changeDialing(false);
        this.chatService.changeCalling(false);
        this.stopAudio();
    };
    FeedHeaderComponent.prototype.createPeer = function (options, receiver, type, chatType, peerId) {
        var _this = this;
        try {
            var peerx_1;
            var init_1;
            type === 'offer' ? init_1 = true : init_1 = false;
            navigator.mediaDevices.getUserMedia({ video: options.video, audio: options.audio })
                .then(function (stream) {
                _this.localStream = stream;
                peerx_1 = new __WEBPACK_IMPORTED_MODULE_5_simple_peer__({
                    initiator: init_1,
                    trickle: false,
                    stream: stream,
                    objectMode: true,
                    reconnectTimer: 250,
                    config: {
                        iceServers: [{
                                urls: 'stun:numb.viagenie.ca',
                                username: 'rasmus.falk@live.se',
                                credential: 'M581Z6DzR97BPSQltlbvq2jGXwObjoZB'
                            },
                            {
                                urls: 'turn:numb.viagenie.ca',
                                username: 'rasmus.falk@live.se',
                                credential: 'M581Z6DzR97BPSQltlbvq2jGXwObjoZB'
                            }
                        ]
                    }
                });
                peerx_1.on('error', function (err) {
                    _this.chatService.changeFlashMessage({ type: 'error', message: 'An error occured when trying to establish a connection, please try again...', color: 'warning' });
                    _this.newError();
                });
                peerx_1.on('connect', function () {
                    _this.chatService.changeCalling(false);
                    _this.chatService.changeDialing(false);
                    _this.stopAudio();
                    _this.chatService.changePeer(_this.peer);
                    _this.popupService.hangUpEvent(false);
                    _this.popupService.answerCallEvent(false);
                    _this.popupService.cancelCallEvent(false);
                    _this.router.navigate(['peer']);
                });
                peerx_1.on('signal', function (data) {
                    _this.peerId = data;
                    _this.socket.emit('sendSignal', { id: receiver, peerId: data, chatType: chatType, type: type });
                });
                peerx_1.on('stream', function (stream) {
                    _this.chatService.changeStream(stream);
                    _this.chatService.changeLocalStream(_this.localStream);
                });
                peerx_1.on('close', function () {
                    if (_this.localStream) {
                        _this.localStream.getTracks().forEach(function (x) { return x.stop(); });
                    }
                    _this.router.navigate(['']);
                });
            })
                .catch(function (err) {
                _this.chatService.changeFlashMessage({ type: 'error', message: 'There was an error when trying to use your camera/microphone', color: 'warning' });
                _this.newError();
            });
            // Waits until the webRTC-ID has been created. 
            setTimeout(function () {
                _this.peer = peerx_1;
                if (_this.peer) {
                    type === 'answer' ? _this.peer.signal(peerId) : null;
                }
            }, 5000);
        }
        catch (err) {
            this.chatService.changeFlashMessage({ type: 'error', message: 'An error occured when trying to establish a connection, please try again...', color: 'warning' });
            this.newError();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('audio'),
        __metadata("design:type", Object)
    ], FeedHeaderComponent.prototype, "audio", void 0);
    FeedHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-feed-header',
            template: __webpack_require__("./src/app/components/feed-header/feed-header.component.html"),
            styles: [__webpack_require__("./src/app/components/feed-header/feed-header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_chat_service__["a" /* ChatService */],
            __WEBPACK_IMPORTED_MODULE_2__services_websocket_service__["a" /* WebsocketService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_popup_service__["a" /* PopupService */]])
    ], FeedHeaderComponent);
    return FeedHeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/feed/feed.component.css":
/***/ (function(module, exports) {

module.exports = ":host {\r\n  margin: 0px;\r\n  padding: 0px;\r\n}\r\n\r\n:host .message {\r\n  width: 30%;\r\n  word-wrap: break-word;\r\n  clear: both;\r\n  font-size: 16px;\r\n  word-break: break-all;\r\n  position: relative;\r\n  padding: 10px;\r\n  border-radius: 7px;\r\n  z-index: 0;\r\n  margin: 10px;\r\n}\r\n\r\n:host .peer {\r\n  background-color: rgb(205, 17, 226);\r\n  float: left;\r\n  margin-left: 2vw\r\n}\r\n\r\n:host .you {\r\n  background-color: white;\r\n  float: right;\r\n  margin-right: 35.3vw;\r\n}\r\n\r\n:host .peer:before {\r\n  left: -5px;\r\n  background-color: rgb(205, 17, 226);\r\n}\r\n\r\n:host .you:before {\r\n  right: -5px;\r\n  background-color: white;\r\n}\r\n\r\n:host .message:before {\r\n  position: absolute;\r\n  display: block;\r\n  width: 30px;\r\n  height: 26px;\r\n  top: 9px;\r\n  content: \"\";\r\n  -webkit-transform: rotate(29deg) skew(-25deg);\r\n          transform: rotate(29deg) skew(-25deg);\r\n  z-index: -100;\r\n}\r\n\r\n:host ul {\r\n  padding-top: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/feed/feed.component.html":
/***/ (function(module, exports) {

module.exports = "<ul>\r\n  <li *ngFor=\"let message of activeConversation\">\r\n    <div *ngIf=\"message.sender === 'you'\">\r\n      <div class=\"message you\">\r\n        <p>{{message.message}}</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"message.sender !== 'you'\">\r\n      <div class=\"message peer\">\r\n        <p class=\"has-text-white\">{{message.message}}</p>\r\n      </div>\r\n    </div>\r\n  </li>\r\n</ul>\r\n"

/***/ }),

/***/ "./src/app/components/feed/feed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_websocket_service__ = __webpack_require__("./src/app/services/websocket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_chat_service__ = __webpack_require__("./src/app/services/chat.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FeedComponent = /** @class */ (function () {
    function FeedComponent(websocketService, chatService) {
        this.websocketService = websocketService;
        this.chatService = chatService;
        this.conversations = [];
    }
    FeedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socket = this.websocketService.socket;
        this.chatService.activeUserItem.subscribe(function (activeUserItem) { return _this.activeUserItem = activeUserItem; });
        this.chatService.activeConversation.subscribe(function (id) { return _this.activeConversation = _this.conversations[id]; });
        this.chatService.conversations.subscribe(function (conversations) { return _this.conversations = conversations; });
        this.chatService.getConversations().subscribe(function (conversations) {
            _this.conversations = conversations;
            if (_this.activeUserItem.id !== null) {
                _this.activeConversation = _this.conversations[_this.activeUserItem.id];
            }
        });
        // Stores the conversations on the client.
        this.socket.on('newMessage', function (data) {
            if (_this.conversations[data.id]) {
                _this.conversations[data.id].push({ message: data.message, sender: data.name });
            }
            else {
                _this.conversations[data.id] = [];
                _this.conversations[data.id].push({ message: data.message, sender: data.name });
                _this.activeUserItem.id === data.id ? _this.activeConversation = _this.conversations[data.id] : null;
            }
        });
    };
    FeedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-feed',
            template: __webpack_require__("./src/app/components/feed/feed.component.html"),
            styles: [__webpack_require__("./src/app/components/feed/feed.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_websocket_service__["a" /* WebsocketService */], __WEBPACK_IMPORTED_MODULE_2__services_chat_service__["a" /* ChatService */]])
    ], FeedComponent);
    return FeedComponent;
}());



/***/ }),

/***/ "./src/app/components/flash-message/flash-message.component.css":
/***/ (function(module, exports) {

module.exports = ":host .notification {\r\n  z-index: 100;\r\n  position: absolute;\r\n  width: 100%;\r\n  text-align: center;\r\n  font-size: 16px;\r\n}\r\n\r\n:host p {\r\n  display: inline-block;\r\n}\r\n\r\n:host button {\r\n  background-color: transparent;\r\n  height: 50px;\r\n  padding: 0px;\r\n  float: right;\r\n  font-size: 50px;\r\n  clear: both;\r\n  margin-top: -28px;\r\n  margin-left: 10px;\r\n}\r\n\r\n:host button:hover {\r\n  color: rgb(205, 17, 226);\r\n  background-color: transparent;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/flash-message/flash-message.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"flashMessage.type !== 'retry'\">\r\n  <div class=\"notification is-{{flashMessage.color}}\">\r\n    {{flashMessage.message}}\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"flashMessage.type === 'retry'\">\r\n  <div class=\"notification is-{{flashMessage.color}}\">\r\n    <p>{{flashMessage.message}}\r\n      <button class=\"button is-primary\" (click)=\"retry()\">\r\n        <span class=\"icon is-small\">\r\n          <i class=\"ion-md-refresh\"></i>\r\n        </span>\r\n      </button>\r\n    </p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/flash-message/flash-message.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlashMessageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_chat_service__ = __webpack_require__("./src/app/services/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FlashMessageComponent = /** @class */ (function () {
    function FlashMessageComponent(chatService, userService) {
        this.chatService = chatService;
        this.userService = userService;
    }
    FlashMessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chatService.flashMessage.subscribe(function (flashMessage) {
            _this.flashMessage = flashMessage;
            if (flashMessage.type === 'info' || flashMessage.type === 'error') {
                setTimeout(function () { _this.chatService.changeFlashMessage({ type: null, message: null, color: null }); }, 5000);
            }
        });
    };
    // Loads specific resources again.
    FlashMessageComponent.prototype.retry = function () {
        var _this = this;
        if (this.flashMessage.dataType === 'current-user') {
            this.userService.getCurrentUser().subscribe(function (currentUser) {
                _this.userService.changeCurrentUser(currentUser);
            });
        }
        if (this.flashMessage.dataType === 'friends') {
            this.chatService.getFriends().subscribe(function (friends) {
                _this.chatService.changeFriends(friends);
            });
        }
        if (this.flashMessage.dataType === 'conversations') {
            this.chatService.getConversations().subscribe(function (conversations) {
                _this.chatService.changeConversations(conversations);
            });
        }
        this.chatService.changeFlashMessage({ type: null, message: null, color: null, dataType: null });
    };
    FlashMessageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-flash-message',
            template: __webpack_require__("./src/app/components/flash-message/flash-message.component.html"),
            styles: [__webpack_require__("./src/app/components/flash-message/flash-message.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_chat_service__["a" /* ChatService */], __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]])
    ], FlashMessageComponent);
    return FlashMessageComponent;
}());



/***/ }),

/***/ "./src/app/components/friend-requests/friend-requests.component.css":
/***/ (function(module, exports) {

module.exports = ":host button {\r\n  height: 40px;\r\n  width: 31vw;\r\n  margin-left: 1vw;\r\n  margin-top: 9px;\r\n}\r\n\r\n:host .notificationDot {\r\n  height: 20px;\r\n  width: 20px;\r\n  border-radius: 100%;\r\n  display: inline-block;\r\n  position: absolute;\r\n  margin-top: 19px;\r\n  margin-left: -40px;\r\n  background-color: rgb(205, 17, 226);\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/friend-requests/friend-requests.component.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"button is-primary\" (click)=\"viewFriendRequests()\">Friend requests</button>\r\n<span [ngClass]=\"{'notificationDot' : notification}\"></span>\r\n"

/***/ }),

/***/ "./src/app/components/friend-requests/friend-requests.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendRequestsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_websocket_service__ = __webpack_require__("./src/app/services/websocket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_chat_service__ = __webpack_require__("./src/app/services/chat.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FriendRequestsComponent = /** @class */ (function () {
    function FriendRequestsComponent(websocketService, chatService) {
        this.websocketService = websocketService;
        this.chatService = chatService;
    }
    FriendRequestsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socket = this.websocketService.socket;
        this.chatService.state.subscribe(function (state) { return _this.state = state; });
        this.socket.on('newRequest', function () {
            _this.chatService.getFriendRequests().subscribe(function (friendRequests) {
                _this.chatService.changeFriendRequestUsers(friendRequests);
                if (_this.state !== "friendRequest") {
                    _this.notification = true;
                    _this.chatService.changeFlashMessage({ type: 'info', message: 'You have a new friend request!', color: 'info' });
                }
            });
        });
        this.socket.on('acceptRequest', function () {
            _this.chatService.getFriends().subscribe(function (friends) {
                _this.chatService.changeFriends(friends);
            });
        });
    };
    FriendRequestsComponent.prototype.viewFriendRequests = function () {
        var _this = this;
        this.chatService.getFriendRequests().subscribe(function (data) {
            _this.chatService.changeFriendRequestUsers(data);
            _this.chatService.changeState("friendRequest");
            _this.notification = false;
        });
    };
    FriendRequestsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-friend-requests',
            template: __webpack_require__("./src/app/components/friend-requests/friend-requests.component.html"),
            styles: [__webpack_require__("./src/app/components/friend-requests/friend-requests.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_websocket_service__["a" /* WebsocketService */], __WEBPACK_IMPORTED_MODULE_2__services_chat_service__["a" /* ChatService */]])
    ], FriendRequestsComponent);
    return FriendRequestsComponent;
}());



/***/ }),

/***/ "./src/app/components/loading/loading.component.css":
/***/ (function(module, exports) {

module.exports = ".loading:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  height: 100px;\r\n  width: 100px;\r\n  margin-top: -50px;\r\n  margin-left: -50px;\r\n  border-radius: 50%;\r\n  border: 7px solid rgb(145, 145, 145);\r\n  border-top-color: rgb(205, 17, 226);\r\n  -webkit-animation: spinner 0.8s linear infinite;\r\n          animation: spinner 0.8s linear infinite;\r\n}\r\n\r\n@-webkit-keyframes spinner {\r\n  to {\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n@keyframes spinner {\r\n  to {\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg);\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/loading/loading.component.html":
/***/ (function(module, exports) {

module.exports = "<p class=\"loading\"></p>\r\n"

/***/ }),

/***/ "./src/app/components/loading/loading.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
    }
    LoadingComponent.prototype.ngOnInit = function () { };
    LoadingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-loading',
            template: __webpack_require__("./src/app/components/loading/loading.component.html"),
            styles: [__webpack_require__("./src/app/components/loading/loading.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/components/peer-chat/peer-chat.component.css":
/***/ (function(module, exports) {

module.exports = ":host .background {\r\n  height: 100vh;\r\n  overflow-y: hidden;\r\n}\r\n\r\n:host .peer {\r\n  height: 100%;\r\n}\r\n\r\n:host .you {\r\n  position: absolute;\r\n  height: 40vh;\r\n  top: 0;\r\n  right: 0;\r\n}\r\n\r\n:host .background {\r\n  background-color: rgb(248, 246, 248);\r\n}\r\n\r\n:host .buttons {\r\n  position: absolute;\r\n  bottom: 30px;\r\n  margin: 0 auto;\r\n  width: 100%;\r\n  display: block\r\n}\r\n\r\n:host button {\r\n  height: 70px;\r\n  width: 70px;\r\n  margin: 15px;\r\n  font-size: 30px;\r\n  border-radius: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/peer-chat/peer-chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!loading\">\r\n  <div class=\"loading\">\r\n    <app-loading></app-loading>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"has-text-centered background\" #chat hidden>\r\n  <video class=\"peer\" #peerVideo poster=\"../../../assets/images/poster.png\"></video>\r\n  <video class=\"you\" #localVideo poster=\"../../../assets/images/poster.png\"></video>\r\n\r\n  <div class=\"buttons\">\r\n    <button class=\"button\" [ngClass]=\"{'is-primary' : clickMic, 'is-default' : !clickMic}\" (click)=\"toggleMicrophone()\" #mic>\r\n      <span class=\"icon is-small\">\r\n        <i class=\"ion-md-mic\"></i>\r\n      </span>\r\n    </button>\r\n\r\n    <button class=\"button\" [ngClass]=\"{'is-primary' : clickVid, 'is-default' : !clickVid}\" (click)=\"toggleCamera()\" #video>\r\n      <span class=\"icon is-small\">\r\n        <i class=\"ion-md-videocam\"></i>\r\n      </span>\r\n    </button>\r\n\r\n    <button class=\"button is-danger\" (click)=\"endCall()\" #end>\r\n      <span class=\"icon is-small\">\r\n        <i class=\"ion-md-call\"></i>\r\n      </span>\r\n    </button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/peer-chat/peer-chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeerChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_chat_service__ = __webpack_require__("./src/app/services/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PeerChatComponent = /** @class */ (function () {
    function PeerChatComponent(chatService, router, zone) {
        this.chatService = chatService;
        this.router = router;
        this.zone = zone;
        this.loading = true;
        this.clickMic = true;
        this.clickVid = true;
    }
    PeerChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chatService.localStream.subscribe(function (stream) {
            if (!_this.hasPlayedLocal) {
                _this.localStream = stream;
                _this.chatComponents.nativeElement.hidden = false;
                _this.loading = false;
                _this.getCallType();
                _this.localVideo.nativeElement.srcObject = stream;
                _this.localVideo.nativeElement.play();
                _this.hasPlayedLocal = true;
            }
        });
        this.chatService.stream.subscribe(function (stream) {
            if (!_this.hasPlayedPeer) {
                _this.stream = stream;
                _this.chatService.peer.subscribe(function (peer) {
                    _this.peer = peer;
                    _this.peerVideo.nativeElement.srcObject = stream;
                    _this.peerVideo.nativeElement.play()
                        .then(function () { return _this.hasPlayedPeer = true; })
                        .catch(function (err) {
                        _this.hasPlayedPeer = false;
                        _this.peer.destroy();
                        _this.chatService.changeFlashMessage({ type: 'error', message: 'There was an error with the stream, please try again...', color: 'warning' });
                    });
                });
            }
        });
    };
    PeerChatComponent.prototype.endCall = function () {
        this.peer.destroy();
    };
    PeerChatComponent.prototype.toggleCamera = function () {
        this.localStream.getVideoTracks().forEach(function (x) { return x.enabled = !x.enabled; });
        this.clickVid = !this.clickVid;
        this.zone.run(function () { });
    };
    PeerChatComponent.prototype.toggleMicrophone = function () {
        this.localStream.getAudioTracks().forEach(function (x) { return x.enabled = !x.enabled; });
        this.clickMic = !this.clickMic;
        this.zone.run(function () { });
    };
    PeerChatComponent.prototype.getCallType = function () {
        var tracks = this.localStream.getTracks().filter(function (x) { return x.kind === 'video'; });
        if (tracks.length > 0) {
            this.chatType = 'video';
        }
        else {
            this.chatType = 'voice';
            this.localVideo.nativeElement.style.display = 'none';
            this.videoBtn.nativeElement.style.display = 'none';
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('localVideo'),
        __metadata("design:type", Object)
    ], PeerChatComponent.prototype, "localVideo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('peerVideo'),
        __metadata("design:type", Object)
    ], PeerChatComponent.prototype, "peerVideo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('mic'),
        __metadata("design:type", Object)
    ], PeerChatComponent.prototype, "micBtn", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('video'),
        __metadata("design:type", Object)
    ], PeerChatComponent.prototype, "videoBtn", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('end'),
        __metadata("design:type", Object)
    ], PeerChatComponent.prototype, "endCallBtn", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('chat'),
        __metadata("design:type", Object)
    ], PeerChatComponent.prototype, "chatComponents", void 0);
    PeerChatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-peer-chat',
            template: __webpack_require__("./src/app/components/peer-chat/peer-chat.component.html"),
            styles: [__webpack_require__("./src/app/components/peer-chat/peer-chat.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_chat_service__["a" /* ChatService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */]])
    ], PeerChatComponent);
    return PeerChatComponent;
}());



/***/ }),

/***/ "./src/app/components/popup/popup.component.css":
/***/ (function(module, exports) {

module.exports = ":host .card {\r\n  width: 70vw;\r\n  position: absolute;\r\n  z-index: 200;\r\n  margin-top: 20vh;\r\n  display: block;\r\n  left: 50%;\r\n  margin-left: -35%;\r\n  -webkit-box-shadow: 14px 14px 39px -3px rgba(0, 0, 0, 0.75);\r\n          box-shadow: 14px 14px 39px -3px rgba(0, 0, 0, 0.75);\r\n}\r\n\r\n:host h1 {\r\n  padding: 20px;\r\n}\r\n\r\n:host .card-header {\r\n  background-color: rgb(205, 17, 226);\r\n}\r\n\r\n:host button {\r\n  margin: 10px;\r\n  font-size: 20px;\r\n  width: 95%;\r\n}\r\n\r\n:host .card-content {\r\n  padding: 0px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/popup/popup.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"calling\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <h1 class=\"subtitle is-4 has-text-white\">Incoming {{callInformation.callType}} call from {{callInformation.caller}}...</h1>\r\n    </div>\r\n    <div class=\"card-content has-text-centered\">\r\n      <button class=\"button is-success\" (click)=\"answerCall()\" #answerBtn>Answer</button>\r\n      <button class=\"button is-danger\" (click)=\"hangUp()\" #hangUpBtn>Hang up</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"dialing\">\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      <h1 class=\"subtitle is-4 has-text-white\">Making a {{dialInformation.dialType}} call to {{dialInformation.receiver}}...</h1>\r\n    </div>\r\n    <div class=\"card-content has-text-centered\">\r\n      <button class=\"button is-danger\" (click)=\"cancelCall()\" #cancelBtn>Cancel</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/popup/popup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_popup_service__ = __webpack_require__("./src/app/services/popup.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_chat_service__ = __webpack_require__("./src/app/services/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_websocket_service__ = __webpack_require__("./src/app/services/websocket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PopupComponent = /** @class */ (function () {
    function PopupComponent(popupService, chatService, websocketService) {
        this.popupService = popupService;
        this.chatService = chatService;
        this.websocketService = websocketService;
    }
    PopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socket = this.websocketService.socket;
        this.chatService.callInformation.subscribe(function (callInformation) { return _this.callInformation = callInformation; });
        this.chatService.dialInformation.subscribe(function (dialInformation) { return _this.dialInformation = dialInformation; });
        this.chatService.calling.subscribe(function (calling) { return _this.calling = calling; });
        this.chatService.dialing.subscribe(function (dialing) { return _this.dialing = dialing; });
        this.socket.on('answered', function () { if (_this.cancelBtn) {
            _this.cancelBtn.nativeElement.disabled = true;
        } });
    };
    PopupComponent.prototype.answerCall = function () {
        this.answerBtn.nativeElement.disabled = true;
        this.hangUpBtn.nativeElement.disabled = true;
        this.popupService.answerCallEvent(true);
    };
    PopupComponent.prototype.hangUp = function () {
        this.popupService.hangUpEvent(true);
    };
    PopupComponent.prototype.cancelCall = function () {
        this.popupService.cancelCallEvent(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('answerBtn'),
        __metadata("design:type", Object)
    ], PopupComponent.prototype, "answerBtn", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('hangUpBtn'),
        __metadata("design:type", Object)
    ], PopupComponent.prototype, "hangUpBtn", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('cancelBtn'),
        __metadata("design:type", Object)
    ], PopupComponent.prototype, "cancelBtn", void 0);
    PopupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-popup',
            template: __webpack_require__("./src/app/components/popup/popup.component.html"),
            styles: [__webpack_require__("./src/app/components/popup/popup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_popup_service__["a" /* PopupService */],
            __WEBPACK_IMPORTED_MODULE_2__services_chat_service__["a" /* ChatService */],
            __WEBPACK_IMPORTED_MODULE_3__services_websocket_service__["a" /* WebsocketService */]])
    ], PopupComponent);
    return PopupComponent;
}());



/***/ }),

/***/ "./src/app/components/search/search.component.css":
/***/ (function(module, exports) {

module.exports = ":host .field {\r\n  padding-top: 13px;\r\n  width: 31vw;\r\n  margin-left: 1vw;\r\n}\r\n\r\n:host input {\r\n  height: 40px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"field\">\r\n  <p class=\"control has-icons-left\">\r\n    <input class=\"input\" type=\"text\" placeholder=\"Search for a user...\" #query (input)=\"search(query.value)\">\r\n    <span class=\"icon is-small is-left\">\r\n      <i class=\"ion-md-search\"></i>\r\n    </span>\r\n  </p>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_chat_service__ = __webpack_require__("./src/app/services/chat.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchComponent = /** @class */ (function () {
    function SearchComponent(userService, chatService) {
        this.userService = userService;
        this.chatService = chatService;
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chatService.state.subscribe(function (state) { if (state !== 'search') {
            _this.input.nativeElement.value = '';
        } });
    };
    SearchComponent.prototype.search = function (query) {
        var _this = this;
        if (query !== "") {
            this.userService.getUsersByQuery(query).subscribe(function (users) {
                _this.chatService.changeState("search");
                _this.chatService.changeSearchUsers(users);
            });
        }
        else {
            this.chatService.changeState('friendList');
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('query'),
        __metadata("design:type", Object)
    ], SearchComponent.prototype, "input", void 0);
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search',
            template: __webpack_require__("./src/app/components/search/search.component.html"),
            styles: [__webpack_require__("./src/app/components/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__services_chat_service__["a" /* ChatService */]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/components/send/send.component.css":
/***/ (function(module, exports) {

module.exports = ":host {\r\n  margin: 0px;\r\n  padding: 0px;\r\n}\r\n\r\n:host input {\r\n  height: 40px;\r\n  width: 52vw;\r\n}\r\n\r\n:host .emojis {\r\n  height: 40px;\r\n  width: 5vw;\r\n}\r\n\r\n:host .send {\r\n  height: 40px;\r\n  width: 10vw;\r\n}\r\n\r\n:host button i {\r\n  font-size: 25px;\r\n}\r\n\r\n:host .emojiPopup {\r\n  position: absolute;\r\n  text-align: center;\r\n  display: block;\r\n  width: 60%;\r\n  bottom: 75px;\r\n  margin-left: 10px;\r\n  border-radius: 7px;\r\n  background-color: #8e44ad;\r\n}\r\n\r\n:host .emojiPopup:focus {\r\n  outline: none;\r\n}\r\n\r\n:host .emojiPopup:before {\r\n  background-color: #8e44ad;\r\n  position: absolute;\r\n  display: block;\r\n  margin-left: 10px;\r\n  width: 30px;\r\n  height: 26px;\r\n  bottom: -9px;\r\n  content: \"\";\r\n  -webkit-transform: rotate(29deg) skew(-25deg);\r\n          transform: rotate(29deg) skew(-25deg);\r\n  z-index: -100;\r\n}\r\n\r\n:host ul li {\r\n  display: inline;\r\n  font-size: 30px;\r\n  padding: 7px;\r\n}\r\n\r\n:host ul li:hover {\r\n  opacity: 0.7;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/send/send.component.html":
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!showEmojis\">\r\n  <div class=\"emojiPopup\" (focusout)=\"removeFocus()\" #popup tabindex=\"20\">\r\n    <ul>\r\n      <li *ngFor=\"let emoji of emojis; let x = index\">\r\n        <a [innerHtml]=\"emoji.code\" (click)=\"addEmoji(x)\"></a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"field has-addons\">\r\n  <div class=\"control\">\r\n    <button type=\"btn\" class=\"button is-primary emojis\" (click)=\"viewEmojis()\">\r\n      <span class=\"icon is-small\">\r\n        <i class=\"ion-md-happy\"></i>\r\n      </span>\r\n    </button>\r\n  </div>\r\n  <div class=\"control\">\r\n    <input type=\"text\" placeholder=\"Enter message...\" class=\"input\" #message (input)=\"toggleSendBtn()\">\r\n  </div>\r\n  <div class=\"control\">\r\n    <button #sendBtn disabled type=\"btn\" class=\"button is-primary send\" (click)=\"sendMessage(message.value, activeUserItem.id)\">\r\n      <span class=\"icon is-small\">\r\n        <i class=\"ion-md-send\"></i>\r\n      </span>\r\n    </button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/send/send.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_websocket_service__ = __webpack_require__("./src/app/services/websocket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_chat_service__ = __webpack_require__("./src/app/services/chat.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SendComponent = /** @class */ (function () {
    function SendComponent(websocketService, chatService) {
        this.websocketService = websocketService;
        this.chatService = chatService;
        this.showEmojis = false;
        this.focused = false;
        this.emojis = [
            { code: '&#x1F642', text: ':smile:' }, { code: '&#x1F600', text: ':happy:' }, { code: '&#x1F60E', text: ':cool:' },
            { code: '&#x1F62E', text: ':surprised:' }, { code: '&#x1F61B', text: ':cheeky:' }, { code: '&#x1F918', text: ':horns:' },
            { code: '&#x1F914', text: ':thinking:' }, { code: '&#x1F60A', text: ':blush:' }, { code: '&#x1F602', text: ':joy:' },
            { code: '&#x1F610', text: ':neutral:' }, { code: '&#x1F631', text: ':scream:' }, { code: '&#x1F621', text: ':rage:' },
            { code: '&#x1F634', text: ':sleeping:' }, { code: '&#x1F607', text: ':halo:' }, { code: '&#x1F440', text: ':eyes:' },
            { code: '&#x1F912', text: ':sick:' }, { code: '&#x1F643', text: ':silly:' }, { code: '&#x1F615', text: ':confused:' },
            { code: '&#x1F62C', text: ':grimacing:' }, { code: '&#x1F611', text: ':expressionless:' }, { code: '&#x1F910', text: ':zipper:' },
            { code: '&#x1F629', text: ':weary:' }, { code: '&#x1F633', text: ':flushed:' }, { code: '&#x1F44D', text: ':thumbsup:' }
        ];
    }
    SendComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socket = this.websocketService.socket;
        this.chatService.activeUserItem.subscribe(function (activeUserItem) { return _this.activeUserItem = activeUserItem; });
    };
    SendComponent.prototype.sendMessage = function (message, id) {
        this.socket.emit('sendMessage', { message: message, id: id });
        this.input.nativeElement.value = "";
    };
    SendComponent.prototype.removeFocus = function () {
        var _this = this;
        setTimeout(function () {
            _this.showEmojis = false;
            _this.focused = false;
        }, 10);
    };
    SendComponent.prototype.viewEmojis = function () {
        var _this = this;
        if (this.focused) {
            this.showEmojis = false;
        }
        else {
            this.showEmojis = true;
        }
        if (this.showEmojis) {
            setTimeout(function () { _this.popup.nativeElement.focus(); }, 10);
        }
    };
    SendComponent.prototype.addEmoji = function (index) {
        this.input.nativeElement.value += this.emojis[index].text + " ";
        this.send.nativeElement.disabled = false;
    };
    SendComponent.prototype.toggleSendBtn = function () {
        if (this.input.nativeElement.value.trim() === '') {
            this.send.nativeElement.disabled = true;
        }
        else {
            this.send.nativeElement.disabled = false;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('message'),
        __metadata("design:type", Object)
    ], SendComponent.prototype, "input", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('popup'),
        __metadata("design:type", Object)
    ], SendComponent.prototype, "popup", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('sendBtn'),
        __metadata("design:type", Object)
    ], SendComponent.prototype, "send", void 0);
    SendComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-send',
            template: __webpack_require__("./src/app/components/send/send.component.html"),
            styles: [__webpack_require__("./src/app/components/send/send.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_websocket_service__["a" /* WebsocketService */], __WEBPACK_IMPORTED_MODULE_2__services_chat_service__["a" /* ChatService */]])
    ], SendComponent);
    return SendComponent;
}());



/***/ }),

/***/ "./src/app/components/user-list/user-list.component.css":
/***/ (function(module, exports) {

module.exports = ":host {\r\n  margin: 0px;\r\n  padding: 0px;\r\n}\r\n\r\n.user-item {\r\n  font-size: 30px;\r\n  margin-left: 20px;\r\n  margin-right: 20px;\r\n}\r\n\r\n.listTitle {\r\n  font-size: 20px;\r\n  margin-top: 10px;\r\n  margin-left: 20px;\r\n  margin-right: 20px;\r\n  padding-top: 5px;\r\n}\r\n\r\n.friends {\r\n  margin-top: 0px;\r\n}\r\n\r\n:host .back {\r\n  margin-top: 0vh;\r\n  margin-bottom: 10px;\r\n  height: 40px;\r\n  width: 31vw;\r\n  margin-left: 1vw;\r\n}\r\n\r\n:host .status {\r\n  font-size: 20px;\r\n  margin-left: 20px;\r\n  margin-right: 20px;\r\n  font-style: italic;\r\n}\r\n\r\n:host .menu {\r\n  background-color: rgb(72, 21, 78);\r\n  padding: 0px;\r\n}\r\n\r\n:host .menu li {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n:host .menu a {\r\n  height: 84px;\r\n  ;\r\n}\r\n\r\n:host .menu .name {\r\n  margin-top: 8px;\r\n  color: white;\r\n  font-size: 20px;\r\n  font-weight: 900;\r\n  display: block;\r\n}\r\n\r\n:host .menu .email {\r\n  color: white;\r\n  font-size: 16px;\r\n  margin-top: -15px;\r\n  display: block;\r\n}\r\n\r\n:host .menu .status {\r\n  height: 20px;\r\n  width: 20px;\r\n  border-radius: 100%;\r\n  display: inline-block;\r\n  position: absolute;\r\n  margin-top: 45px;\r\n  margin-left: -40px;\r\n}\r\n\r\n.online {\r\n  background-color: rgb(4, 214, 134);\r\n}\r\n\r\n.offline {\r\n  background-color: rgb(255, 255, 255);\r\n}\r\n\r\n.away {\r\n  background-color: rgb(243, 247, 3);\r\n}\r\n\r\n.busy {\r\n  background-color: rgb(247, 6, 6);\r\n}\r\n\r\n:host .menu img {\r\n  width: 70px;\r\n  height: 70px;\r\n  margin-right: 20px;\r\n  border-radius: 100%;\r\n  float: left;\r\n  clear: both;\r\n}\r\n\r\n:host .add {\r\n  background-color: transparent;\r\n  height: 84px;\r\n  margin-top: -77px;\r\n  width: 58px;\r\n  margin-right: 67vw;\r\n  padding: 0px;\r\n  float: right;\r\n  font-size: 50px;\r\n  clear: both;\r\n}\r\n\r\n:host .add:active,\r\n:host .add:focus {\r\n  -webkit-box-shadow: none;\r\n          box-shadow: none;\r\n}\r\n\r\n:host .add:hover {\r\n  color: rgb(205, 17, 226);\r\n}\r\n\r\n:host .notificationDot {\r\n  height: 20px;\r\n  width: 20px;\r\n  border-radius: 100%;\r\n  position: absolute;\r\n  margin-top: -30px;\r\n  margin-left: 20%;\r\n  background-color: rgb(205, 17, 226);\r\n}\r\n\r\n:host .accept {\r\n  background-color: transparent;\r\n  height: 74px;\r\n  margin-top: -72px;\r\n  width: 40px;\r\n  margin-right: 67vw;\r\n  padding: 0px;\r\n  float: right;\r\n  font-size: 45px;\r\n  clear: both;\r\n}\r\n\r\n:host .accept:hover {\r\n  color: rgb(17, 226, 128);\r\n}\r\n\r\n:host .decline {\r\n  background-color: transparent;\r\n  height: 74px;\r\n  margin-top: -72px;\r\n  width: 40px;\r\n  margin-right: 70.5vw;\r\n  padding: 0px;\r\n  float: right;\r\n  font-size: 45px;\r\n}\r\n\r\n:host .decline:hover {\r\n  color: rgb(205, 17, 226);\r\n}\r\n\r\n:Host .decline span,\r\n:host .accept span {\r\n  width: 10px;\r\n}\r\n\r\n:host .select {\r\n  right: -18vw;\r\n  font-size: 18px;\r\n  margin-top: -40px;\r\n}\r\n\r\n:host .select select {\r\n  background-color: transparent;\r\n  border: none;\r\n  color: transparent;\r\n  height: 30px;\r\n}\r\n\r\n:host .select:after {\r\n  margin-right: 20px;\r\n  margin-top: -15px;\r\n  font-size: 35px;\r\n}\r\n\r\nselect option {\r\n  background-color: #8e44ad;\r\n  color: white;\r\n}\r\n\r\nselect:active,\r\nselect:focus {\r\n  -webkit-box-shadow: none;\r\n          box-shadow: none;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/user-list/user-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"state === 'friendList'\">\r\n  <h1 class=\"subtitle has-text-white listTitle friends\">Friend list</h1>\r\n\r\n  <div class=\"menu\">\r\n    <ul class=\"menu-list\">\r\n      <li *ngFor=\"let friend of friends\">\r\n        <a (click)=\"changeActiveUserItem(friend)\">\r\n          <img src=\"{{friend.avatar}}\">\r\n          <span class=\"status\" [ngClass]=\"{'online' : friend.status === 'online', 'offline' : friend.status === 'offline', 'away' : friend.status === 'away', 'busy' : friend.status === 'busy'}\"></span>\r\n          <span class=\"name\">{{friend.fullName}}</span>\r\n          <br>\r\n          <span class=\"email\">{{friend.email}}</span>\r\n          <span [ngClass]=\"{'notificationDot' : friend.notification}\"></span>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"state === 'search'\">\r\n  <button class=\"button back\" (click)=\"back()\">Go back</button>\r\n\r\n  <div *ngIf=\"!searchUsers.length > 0\">\r\n    <h1 class=\"subtitle has-text-white listTitle\">No matching users...</h1>\r\n  </div>\r\n\r\n  <div *ngIf=\"searchUsers.length > 0\">\r\n    <h1 class=\"subtitle has-text-white listTitle\">Matching users</h1>\r\n    <div class=\"menu\">\r\n      <ul class=\"menu-list\">\r\n        <li *ngFor=\"let user of searchUsers\">\r\n          <a>\r\n            <img src=\"{{user.avatar}}\">\r\n            <span class=\"status\" [ngClass]=\"{'online' : user.status === 'online', 'offline' : user.status === 'offline', 'away' : user.status === 'away', 'busy' : user.status === 'busy'}\"></span>\r\n            <span class=\"name\">{{user.fullName}}</span>\r\n            <br>\r\n            <span class=\"email\">{{user.email}}</span>\r\n            <button (click)=\"addUser(user.id)\" class=\"button add is-primary\">\r\n              <span class=\"icon is-small\">\r\n                <i class=\"ion-md-person-add\"></i>\r\n              </span>\r\n            </button>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"state === 'friendRequest'\">\r\n  <button class=\"button back\" (click)=\"back()\">Go back</button>\r\n  <div *ngIf=\"!friendRequestUsers.length > 0\">\r\n    <h1 class=\"subtitle has-text-white listTitle\">You don't have any friend requests...</h1>\r\n  </div>\r\n\r\n  <div *ngIf=\"friendRequestUsers.length > 0\">\r\n    <h1 class=\"subtitle has-text-white listTitle\">Friend requests</h1>\r\n    <div class=\"menu\">\r\n      <ul class=\"menu-list\">\r\n        <li *ngFor=\"let request of friendRequestUsers\">\r\n          <a>\r\n            <img src=\"{{request.avatar}}\">\r\n            <span class=\"name\">{{request.fullName}}</span>\r\n            <br>\r\n            <span class=\"email\">{{request.email}}</span>\r\n\r\n            <div class=\"select\">\r\n              <select #friendRequest (input)=\"answerRequest(friendRequest.value, request.id)\">\r\n                <option selected disabled hidden></option>\r\n                <option value=\"accept\">accept</option>\r\n                <option value=\"decline\">decline</option>\r\n              </select>\r\n            </div>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/user-list/user-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_websocket_service__ = __webpack_require__("./src/app/services/websocket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_chat_service__ = __webpack_require__("./src/app/services/chat.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserListComponent = /** @class */ (function () {
    function UserListComponent(websocketService, userService, chatService) {
        this.websocketService = websocketService;
        this.userService = userService;
        this.chatService = chatService;
    }
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socket = this.websocketService.socket;
        this.chatService.activeUserItem.subscribe(function (activeUserItem) { return _this.activeUserItem = activeUserItem; });
        this.chatService.searchUsers.subscribe(function (searchUsers) { return _this.searchUsers = searchUsers; });
        this.chatService.state.subscribe(function (state) { return _this.state = state; });
        this.chatService.friendRequestUsers.subscribe(function (friendRequestUsers) { return _this.friendRequestUsers = friendRequestUsers; });
        this.chatService.friends.subscribe(function (friends) { return _this.friends = friends; });
        this.chatService.getFriends().subscribe(function (friends) {
            _this.friends = friends;
            _this.chatService.changeFriends(friends);
        });
        this.socket.on('updateFriendStatus', function (friend) {
            for (var i = 0; i < _this.friends.length; i++) {
                if (_this.friends[i].id === friend.id) {
                    _this.friends[i].status = friend.status;
                }
            }
        });
        this.socket.on('removeFriend', function (id) {
            _this.chatService.getFriends().subscribe(function (friends) { return _this.friends = friends; });
            if (id === _this.activeUserItem.id) {
                _this.chatService.changeActiveUserItem({ id: null, fullName: 'no user selected' });
                _this.chatService.changeActiveConversation(null);
            }
        });
        this.socket.on('messageNotification', function (id) {
            var friend = _this.friends.filter(function (x) { return x.id === id; })[0];
            if (_this.activeUserItem.id !== id) {
                friend.notification = true;
                _this.chatService.changeFlashMessage({ type: 'info', message: 'You have a new message!', color: 'info' });
            }
        });
    };
    UserListComponent.prototype.changeActiveUserItem = function (user) {
        this.chatService.changeActiveUserItem(user);
        this.chatService.changeActiveConversation(user.id);
        if (this.activeUserItem.notification) {
            this.activeUserItem.notification = false;
        }
    };
    UserListComponent.prototype.addUser = function (id) {
        this.socket.emit('newRequest', id);
    };
    UserListComponent.prototype.acceptRequest = function (id) {
        this.socket.emit('acceptRequest', id);
    };
    UserListComponent.prototype.declineRequest = function (id) {
        this.socket.emit('declineRequest', id);
    };
    UserListComponent.prototype.back = function () {
        this.chatService.changeState('friendList');
    };
    UserListComponent.prototype.answerRequest = function (answer, id) {
        if (answer === 'accept') {
            this.acceptRequest(id);
        }
        else if (answer === 'decline') {
            this.declineRequest(id);
        }
    };
    UserListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-list',
            template: __webpack_require__("./src/app/components/user-list/user-list.component.html"),
            styles: [__webpack_require__("./src/app/components/user-list/user-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_websocket_service__["a" /* WebsocketService */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__services_chat_service__["a" /* ChatService */]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/app/components/welcome/welcome.component.css":
/***/ (function(module, exports) {

module.exports = ":host {\r\n  margin: 0px;\r\n  padding: 0px;\r\n}\r\n\r\n:host h1 {\r\n  font-size: 70px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"title has-text-centered\">Welcome</h1>\r\n\r\n<p class=\"has-text-centered is-size-5\">This is PeerChat, a new and simple chat application for you and your friends! Add a friend by searching in the field to your\r\n  left and start chatting.</p>\r\n"

/***/ }),

/***/ "./src/app/components/welcome/welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () { };
    WelcomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-welcome',
            template: __webpack_require__("./src/app/components/welcome/welcome.component.html"),
            styles: [__webpack_require__("./src/app/components/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/app/services/chat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChatService = /** @class */ (function () {
    function ChatService(http) {
        this.http = http;
        this.ActiveUserItem = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]({ id: null, fullName: 'no user selected' });
        this.Stream = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.Peer = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.ActiveConversation = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.SearchUsers = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.FriendRequestUsers = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.Friends = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.State = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]('friendList');
        this.Calling = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](false);
        this.CallInformation = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.Dialing = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](false);
        this.DialInformation = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.FlashMessage = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]({ type: null, message: null, color: null, dataType: null });
        this.LocalStream = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.Audio = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](false);
        this.Conversations = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.activeUserItem = this.ActiveUserItem.asObservable();
        this.stream = this.Stream.asObservable();
        this.peer = this.Peer.asObservable();
        this.activeConversation = this.ActiveConversation.asObservable();
        this.searchUsers = this.SearchUsers.asObservable();
        this.state = this.State.asObservable();
        this.friendRequestUsers = this.FriendRequestUsers.asObservable();
        this.friends = this.Friends.asObservable();
        this.calling = this.Calling.asObservable();
        this.dialing = this.Dialing.asObservable();
        this.callInformation = this.CallInformation.asObservable();
        this.dialInformation = this.DialInformation.asObservable();
        this.flashMessage = this.FlashMessage.asObservable();
        this.localStream = this.LocalStream.asObservable();
        this.audio = this.Audio.asObservable();
        this.conversations = this.Conversations.asObservable();
        this.BASE_URL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].BASE_URL;
    }
    ChatService.prototype.changeActiveUserItem = function (user) {
        this.ActiveUserItem.next(user);
    };
    ChatService.prototype.changeStream = function (stream) {
        this.Stream.next(stream);
    };
    ChatService.prototype.changeLocalStream = function (stream) {
        this.LocalStream.next(stream);
    };
    ChatService.prototype.changeActiveConversation = function (conversation) {
        this.ActiveConversation.next(conversation);
    };
    ChatService.prototype.changePeer = function (peer) {
        this.Peer.next(peer);
    };
    ChatService.prototype.changeSearchUsers = function (searchUsers) {
        this.SearchUsers.next(searchUsers);
    };
    ChatService.prototype.changeState = function (state) {
        this.State.next(state);
    };
    ChatService.prototype.changeFriendRequestUsers = function (friendRequestUsers) {
        this.FriendRequestUsers.next(friendRequestUsers);
    };
    ChatService.prototype.changeFriends = function (friends) {
        this.Friends.next(friends);
    };
    ChatService.prototype.changeCalling = function (calling) {
        this.Calling.next(calling);
    };
    ChatService.prototype.changeDialing = function (dialing) {
        this.Dialing.next(dialing);
    };
    ChatService.prototype.changeCallInformation = function (callInformation) {
        this.CallInformation.next(callInformation);
    };
    ChatService.prototype.changeDialInformation = function (dialInformation) {
        this.DialInformation.next(dialInformation);
    };
    ChatService.prototype.changeFlashMessage = function (flashMessage) {
        this.FlashMessage.next(flashMessage);
    };
    ChatService.prototype.changeAudio = function (audio) {
        this.Audio.next(audio);
    };
    ChatService.prototype.changeConversations = function (conversations) {
        this.Conversations.next(conversations);
    };
    ChatService.prototype.getFriendRequests = function () {
        var _this = this;
        return this.http.get(this.BASE_URL + "/user/friendRequests")
            .map(function (res) {
            var data = res.json();
            if (data.resStatus === 'error') {
                _this.changeFlashMessage({ type: 'error', message: 'Could not get your friend requests, please try again...', color: 'warning' });
                return [];
            }
            else {
                return data.requests;
            }
        });
    };
    ChatService.prototype.getFriends = function () {
        var _this = this;
        return this.http.get(this.BASE_URL + "/user/friends")
            .map(function (res) {
            var data = res.json();
            if (data.resStatus === 'error') {
                _this.changeFlashMessage({ type: 'retry', message: 'Could not get your friends, please try again...', color: 'warning', dataType: 'friends' });
                return [];
            }
            else {
                return data.friends;
            }
        });
    };
    ChatService.prototype.getConversations = function () {
        var _this = this;
        return this.http.get(this.BASE_URL + "/user/conversations")
            .map(function (res) {
            var data = res.json();
            if (data.resStatus === 'error') {
                _this.changeFlashMessage({ type: 'retry', message: 'Could not get your conversations, please try again...', color: 'warning', dataType: 'conversations' });
                return [];
            }
            else {
                return data.conversations;
            }
        });
    };
    ChatService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "./src/app/services/popup.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopupService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PopupService = /** @class */ (function () {
    function PopupService() {
        this.AnswerCall = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.HangUp = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.CancelCall = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.answerCall = this.AnswerCall.asObservable();
        this.hangUp = this.HangUp.asObservable();
        this.cancelCall = this.CancelCall.asObservable();
    }
    PopupService.prototype.answerCallEvent = function (bool) {
        this.AnswerCall.next(bool);
    };
    PopupService.prototype.hangUpEvent = function (bool) {
        this.HangUp.next(bool);
    };
    PopupService.prototype.cancelCallEvent = function (bool) {
        this.CancelCall.next(bool);
    };
    PopupService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], PopupService);
    return PopupService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chat_service__ = __webpack_require__("./src/app/services/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserService = /** @class */ (function () {
    function UserService(http, chatService) {
        this.http = http;
        this.chatService = chatService;
        this.CurrentUser = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]({ id: 0, fullName: 'Getting user...', status: 'offline', avatar: '../../assets/avatars/avatar-1.png' });
        this.currentUser = this.CurrentUser.asObservable();
        this.BASE_URL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].BASE_URL;
    }
    UserService.prototype.changeCurrentUser = function (currentUser) {
        this.CurrentUser.next(currentUser);
    };
    UserService.prototype.getCurrentUser = function () {
        var _this = this;
        return this.http.get(this.BASE_URL + "/user/current")
            .map(function (res) {
            var data = res.json();
            if (data.resStatus === 'error') {
                _this.chatService.changeFlashMessage({ type: 'retry', message: 'An error occured when trying to load the current user, please try again...', color: 'warning', dataType: 'current-user' });
                return { id: 0, fullName: 'Getting user...', status: 'offline', avatar: '../../assets/avatars/avatar-1.png' };
            }
            else {
                return data;
            }
        });
    };
    UserService.prototype.getUsersByQuery = function (query) {
        var _this = this;
        return this.http.post(this.BASE_URL + "/user/query", { query: query })
            .map(function (res) {
            var data = res.json();
            if (data.resStatus === 'error') {
                _this.chatService.changeFlashMessage({ type: 'error', message: 'An error occured when trying to search for the requested user, please try again...', color: 'warning' });
                return [];
            }
            else {
                return data.users;
            }
        });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4__chat_service__["a" /* ChatService */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/services/websocket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__("./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebsocketService = /** @class */ (function () {
    function WebsocketService() {
        this.BASE_URL = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].BASE_URL;
    }
    WebsocketService.prototype.connect = function () {
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__["connect"](this.BASE_URL);
    };
    WebsocketService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], WebsocketService);
    return WebsocketService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false,
    BASE_URL: 'http://localhost:8000'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map