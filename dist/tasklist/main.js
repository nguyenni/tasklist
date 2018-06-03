(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-task/add-task.component.css":
/*!*************************************************!*\
  !*** ./src/app/add-task/add-task.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/add-task/add-task.component.html":
/*!**************************************************!*\
  !*** ./src/app/add-task/add-task.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"modal fade\" id=\"addModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLongTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">New Task</h5>\n      </div>\n      <div class=\"modal-body\">\n        <label>Task:</label>\n        <input class=\"form-control\" [(ngModel)]=\"taskItem\" id=\"ex1\" type=\"text\">\n        <br>\n        <label>Priority:</label>\n        <br>\n        <ngb-rating [(rate)]=\"itemPriority\" max=\"3\"></ngb-rating>\n        <br>\n        <br>\n        <label>Deadline:</label>\n        <div class=\"input-group\">\n            <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n                   name=\"dp\" [(ngModel)]=\"deadline\" ngbDatepicker #d=\"ngbDatepicker\">\n            <div class=\"input-group-append\">\n              <button class=\"btn btn-outline-secondary\" (click)=\"d.toggle()\" type=\"button\">\n                <img src=\"img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\"/>\n              </button>\n            </div>\n          </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" (click)=\"addTask()\" data-dismiss=\"modal\" class=\"btn btn-primary\">Add item</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/add-task/add-task.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-task/add-task.component.ts ***!
  \************************************************/
/*! exports provided: AddTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTaskComponent", function() { return AddTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common.service */ "./src/app/common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddTaskComponent = /** @class */ (function () {
    function AddTaskComponent(commonService) {
        this.commonService = commonService;
    }
    AddTaskComponent.prototype.addTask = function () {
        var _this = this;
        var created = new Date();
        var newTask = {
            name: this.taskItem,
            priority: this.itemPriority,
            deadline: this.deadline,
            created: created,
            isDone: false
        };
        this.commonService.addTask(newTask).subscribe(function (res) {
            _this.commonService.add_subject.next();
        });
        this.taskItem = '';
        this.itemPriority = '';
        this.deadline = '';
    };
    AddTaskComponent.prototype.ngOnInit = function () {
    };
    AddTaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-task',
            template: __webpack_require__(/*! ./add-task.component.html */ "./src/app/add-task/add-task.component.html"),
            styles: [__webpack_require__(/*! ./add-task.component.css */ "./src/app/add-task/add-task.component.css")]
        }),
        __metadata("design:paramtypes", [_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"]])
    ], AddTaskComponent);
    return AddTaskComponent;
}());



/***/ }),

/***/ "./src/app/add-task/task.model.ts":
/*!****************************************!*\
  !*** ./src/app/add-task/task.model.ts ***!
  \****************************************/
/*! exports provided: Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
var Task = /** @class */ (function () {
    function Task(name, priority, deadline, created, isDone) {
        this.name = name;
        this.priority = priority;
        this.deadline = deadline;
        this.created = created;
        this.isDone = isDone;
    }
    return Task;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\n \n</head>\n\n<body>\n  <br>\n  <br>\n  <div class=\"container\">\n    <div class=\"header clearfix\">\n      <nav>\n        <ul class=\"nav nav-pills float-right\">\n          <li class=\"nav-item\">\n            <a data-toggle=\"modal\" data-target=\"#addModal\" class=\"nav-link active\" href=\"#\">Add <span class=\"sr-only\">(current)</span></a>\n          </li>\n        </ul>\n      </nav>\n      <h3 class=\"text-muted\">Task List</h3>\n    </div>\n    \n    <app-task-list></app-task-list>\n    <app-add-task></app-add-task>\n  </div>\n</body>\n\n</html>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _add_task_add_task_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-task/add-task.component */ "./src/app/add-task/add-task.component.ts");
/* harmony import */ var _edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-task/edit-task.component */ "./src/app/edit-task/edit-task.component.ts");
/* harmony import */ var _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./task-list/task-list.component */ "./src/app/task-list/task-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _add_task_add_task_component__WEBPACK_IMPORTED_MODULE_6__["AddTaskComponent"],
                _edit_task_edit_task_component__WEBPACK_IMPORTED_MODULE_7__["EditTaskComponent"],
                _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_8__["TaskListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common.service.ts":
/*!***********************************!*\
  !*** ./src/app/common.service.ts ***!
  \***********************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommonService = /** @class */ (function () {
    function CommonService(http) {
        this.http = http;
        this.add_subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.taskList = [];
    }
    CommonService.prototype.addTask = function (task) {
        return this.http.post('/api/task', task);
    };
    CommonService.prototype.updateTask = function (task) {
        return this.http.put('/api/task/' + task._id, task);
    };
    CommonService.prototype.deleteTask = function (id) {
        return this.http.delete('api/task/' + id);
    };
    CommonService.prototype.getTasks = function () {
        return this.http.get('/api/tasks');
    };
    CommonService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], CommonService);
    return CommonService;
}());



/***/ }),

/***/ "./src/app/edit-task/edit-task.component.css":
/*!***************************************************!*\
  !*** ./src/app/edit-task/edit-task.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/edit-task/edit-task.component.html":
/*!****************************************************!*\
  !*** ./src/app/edit-task/edit-task.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"task\">\n  <div class=\"modal fade\" id=\"editModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLongTitle\" aria-hidden=\"true\">\n<div class=\"modal-dialog\" role=\"document\">\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <h5 class=\"modal-title\">Edit Task</h5>\n    </div>\n    <div class=\"modal-body\">\n      <label>Name: </label>\n      <input class=\"form-control\" [(ngModel)]=\"task.name\" type=\"text\">\n      <br>\n      <label>Priority: </label>\n      <br>\n      <ngb-rating [(rate)]=\"task.priority\" max=\"3\"></ngb-rating>\n      <br>\n      <br>\n      <label>Deadline: </label>\n      <div class=\"input-group\">\n          <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n                 name=\"dp\" [(ngModel)]=\"task.deadline\" ngbDatepicker #d=\"ngbDatepicker\">\n          <div class=\"input-group-append\">\n            <button class=\"btn btn-outline-secondary\" (click)=\"d.toggle()\" type=\"button\">\n              <img src=\"img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\"/>\n            </button>\n          </div>\n      </div>\n      <br>\n      <label>Created on: </label> {{task.created | date:'yyyy-MM-dd HH:mm'}}\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" (click)=\"updateTask(task)\" data-dismiss=\"modal\" class=\"btn btn-primary\">Save</button>\n    </div>\n  </div>\n</div>\n</div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/edit-task/edit-task.component.ts":
/*!**************************************************!*\
  !*** ./src/app/edit-task/edit-task.component.ts ***!
  \**************************************************/
/*! exports provided: EditTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTaskComponent", function() { return EditTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _add_task_task_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../add-task/task.model */ "./src/app/add-task/task.model.ts");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common.service */ "./src/app/common.service.ts");
/* harmony import */ var _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../task-list/task-list.component */ "./src/app/task-list/task-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditTaskComponent = /** @class */ (function () {
    function EditTaskComponent(commonService, taskListComponent) {
        this.commonService = commonService;
        this.taskListComponent = taskListComponent;
    }
    EditTaskComponent.prototype.ngOnInit = function () {
    };
    EditTaskComponent.prototype.updateTask = function (task) {
        var _this = this;
        var _task = {
            _id: task._id,
            name: task.name,
            priority: task.priority,
            deadline: task.deadline,
            created: task.created,
            isDone: task.isDone
        };
        this.commonService.updateTask(_task).subscribe(function (res) {
            _this.taskListComponent.getAllTasks();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _add_task_task_model__WEBPACK_IMPORTED_MODULE_1__["Task"])
    ], EditTaskComponent.prototype, "task", void 0);
    EditTaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-task',
            template: __webpack_require__(/*! ./edit-task.component.html */ "./src/app/edit-task/edit-task.component.html"),
            styles: [__webpack_require__(/*! ./edit-task.component.css */ "./src/app/edit-task/edit-task.component.css")]
        }),
        __metadata("design:paramtypes", [_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"], _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_3__["TaskListComponent"]])
    ], EditTaskComponent);
    return EditTaskComponent;
}());



/***/ }),

/***/ "./src/app/task-list/task-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/task-list/task-list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".listContainer{\n    border: 1px solid rgb(187, 170, 170);\n    border-radius: 10px;\n    padding: 30px;\n  }\n  "

/***/ }),

/***/ "./src/app/task-list/task-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/task-list/task-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"listContainer\">\n    <ul class=\"list-group\" *ngFor=\"let task of taskList\">\n        <li class=\"list-group-item\" (click)=\"onSelect(task)\">\n            <table style=\"width: 100%\">\n                <td style=\"width:10%\">\n                    <input type=\"checkbox\" [checked]=\"task.isDone\" (click)=\"updateTask(task)\">\n                </td>\n                <td style=\"width:50%\">\n                    {{task.name}}\n                </td>\n                <td>\n                    <ngb-rating [(rate)]=\"task.priority\" [readonly]=\"true\" max=\"3\"></ngb-rating>\n                </td>\n                <td style=\"width:20%\">\n                    Due on: {{task.deadline.year}}-{{task.deadline.month}}-{{task.deadline.day}}\n                </td>\n                <td style=\"text-align: right\">\n                    <a data-toggle=\"modal\" data-target=\"#editModal\" class=\"nav-link active\" href=\"#\">Edit</a>\n                </td>\n                <td style=\"text-align: right\">\n                    <button type=\"button\" (click)=\"deleteTask(task._id)\" data-dismiss=\"modal\" class=\"btn btn-danger\">Delete</button>\n                </td>\n            </table>\n        </li>\n    </ul>\n</div>\n<br>\n\n<div style=\"text-align: right\">\n    <button type=\"button\" (click)=\"removeCompleted(taskList)\" data-dismiss=\"modal\" class=\"btn btn-danger\">Delete Completed</button>\n</div>\n\n<app-edit-task [task]=\"selectedTask\"></app-edit-task>\n    "

/***/ }),

/***/ "./src/app/task-list/task-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/task-list/task-list.component.ts ***!
  \**************************************************/
/*! exports provided: TaskListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskListComponent", function() { return TaskListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common.service */ "./src/app/common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TaskListComponent = /** @class */ (function () {
    function TaskListComponent(commonService) {
        this.commonService = commonService;
    }
    TaskListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getAllTasks();
        this.commonService.add_subject.subscribe(function (res) {
            _this.getAllTasks();
        });
    };
    TaskListComponent.prototype.onSelect = function (task) {
        this.selectedTask = task;
    };
    TaskListComponent.prototype.updateTask = function (task) {
        var _this = this;
        task.isDone = !task.isDone;
        var _task = {
            _id: task._id,
            name: task.name,
            priority: task.priority,
            deadline: task.deadline,
            created: task.created,
            isDone: task.isDone
        };
        this.commonService.updateTask(_task).subscribe(function (res) {
            _this.getAllTasks();
        });
    };
    TaskListComponent.prototype.deleteTask = function (id) {
        var _this = this;
        this.commonService.deleteTask(id).subscribe(function (res) {
            _this.getAllTasks();
        });
    };
    TaskListComponent.prototype.removeCompleted = function (taskList) {
        var _this = this;
        taskList.forEach(function (task) {
            if (task.isDone) {
                _this.deleteTask(task._id);
            }
        });
    };
    TaskListComponent.prototype.getAllTasks = function () {
        var _this = this;
        this.commonService.getTasks().subscribe(function (res) {
            _this.taskList = res.json();
            // Sort the tasks (by date and priority) for display
            // https://stackoverflow.com/questions/8837454/sort-array-of-objects-by-single-key-with-date-value
            _this.taskList.sort(function (a, b) {
                if (a.priority > b.priority) {
                    return -1;
                }
                if (a.priority < b.priority) {
                    return 1;
                }
                return 0;
            }).sort(function (a, b) {
                var dateA = new Date(a.deadline.year, a.deadline.month, a.deadline.day);
                var dateB = new Date(b.deadline.year, b.deadline.month, b.deadline.day);
                if (dateA < dateB) {
                    return -1;
                }
                if (dateA > dateB) {
                    return 1;
                }
                return 0;
            });
        });
    };
    TaskListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-task-list',
            template: __webpack_require__(/*! ./task-list.component.html */ "./src/app/task-list/task-list.component.html"),
            styles: [__webpack_require__(/*! ./task-list.component.css */ "./src/app/task-list/task-list.component.css")]
        }),
        __metadata("design:paramtypes", [_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"]])
    ], TaskListComponent);
    return TaskListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Nini/Documents/Uni/tasklist/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map