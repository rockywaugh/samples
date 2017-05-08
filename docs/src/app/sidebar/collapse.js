"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var Collapse = (function () {
    function Collapse(el) {
        this.el = el;
        this.test = 'wtf';
        // classes
        // shown
        this.isExpanded = true;
        // hidden
        this.isCollapsed = false;
        // stale state
        this.isCollapse = true;
        // animation state
        this.isCollapsing = false;
    }
    Object.defineProperty(Collapse.prototype, "collapse", {
        get: function () {
            return this.isExpanded;
        },
        set: function (value) {
            this.isExpanded = value;
            this.toggle();
        },
        enumerable: true,
        configurable: true
    });
    Collapse.prototype.toggle = function () {
        if (this.isExpanded) {
            this.hide();
        }
        else {
            this.show();
        }
    };
    Collapse.prototype.hide = function () {
        var _this = this;
        this.isCollapse = false;
        this.isCollapsing = true;
        this.isExpanded = false;
        this.isCollapsed = true;
        setTimeout(function () {
            _this.height = '0';
            _this.isCollapse = true;
            _this.isCollapsing = false;
        }, 4);
    };
    Collapse.prototype.show = function () {
        var _this = this;
        this.isCollapse = false;
        this.isCollapsing = true;
        this.isExpanded = true;
        this.isCollapsed = false;
        setTimeout(function () {
            _this.height = 'auto';
            _this.isCollapse = true;
            _this.isCollapsing = false;
        }, 4);
    };
    Collapse = __decorate([
        core_1.Directive({
            selector: '[collapse]',
            properties: [
                'collapse'
            ],
            host: {
                '[class.in]': 'isExpanded',
                '[class.collapse]': 'isCollapse',
                '[class.collapsing]': 'isCollapsing',
                '[attr.aria-expanded]': 'isExpanded',
                '[attr.aria-hidden]': 'isCollapsed',
                '[style.height]': 'height'
            }
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], Collapse);
    return Collapse;
}());
exports.Collapse = Collapse;
//# sourceMappingURL=collapse.js.map