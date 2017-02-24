webpackJsonp([1,4],{

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Stock */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COLOR_SEQ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return COLOR_SMA_SEQ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return STOCK_DATE; });
/* unused harmony export STOCK_OPEN */
/* unused harmony export STOCK_HIGH */
/* unused harmony export STOCK_LOW */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return STOCK_CLOSE; });
/* unused harmony export STOCK_VOLUME */
/* unused harmony export STOCK_ADJ_CLOSE */
var Stock = (function () {
    function Stock() {
    }
    return Stock;
}());
// color sequence for stocks
var COLOR_SEQ = ['red', 'green', 'blue', 'cyan'];
// color sequence for SMA curves
var COLOR_SMA_SEQ = ['lightcoral', 'lightgreen', 'lightblue', 'lightcyan'];
// consistent with data format
var STOCK_DATE = 0;
var STOCK_OPEN = 1;
var STOCK_HIGH = 2;
var STOCK_LOW = 3;
var STOCK_CLOSE = 4;
var STOCK_VOLUME = 5;
var STOCK_ADJ_CLOSE = 6;
//# sourceMappingURL=C:/Users/vance/kwantera-solution/browser/src/stock.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(257);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// a service implementing the collection of apis; currently only getAllStocks is used
var ApiService = (function () {
    function ApiService(http) {
        this.http = http;
        // change server address here if needed
        this.url = '.';
    }
    ;
    ApiService.prototype.getAllStocks = function () {
        return this.http.get(this.url + "/stocks");
    };
    ApiService.prototype.getStock = function (symbol) {
        return this.http.get(this.url + "/stock/" + symbol);
    };
    ApiService.prototype.getSymbols = function () {
        return this.http.get(this.url + "/symbols");
    };
    ApiService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], ApiService);
    return ApiService;
    var _a;
}());
//# sourceMappingURL=C:/Users/vance/kwantera-solution/browser/src/api.service.js.map

/***/ }),

/***/ 292:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 292;


/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(407);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/vance/kwantera-solution/browser/src/main.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__(275);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(api) {
        this.api = api;
        this.showSMA = false;
        this.SMAPeriod = 5;
        this.selectedIndex = -1;
        this.selectedDate = -1;
    }
    ;
    // for simplicity all the data is fetched at the same time by using getAllStocks
    // use getSymbols & getStock for larger data
    AppComponent.prototype.getAllStocks = function () {
        var _this = this;
        this.api.getAllStocks().subscribe(function (response) {
            _this.stocks = response.json();
            _this.showStocks = _this.stocks.map(function (stock) { return true; });
        });
    };
    // get all stocks on page load  
    AppComponent.prototype.ngOnInit = function () {
        this.getAllStocks();
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(468),
            styles: [__webpack_require__(462)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/vance/kwantera-solution/browser/src/app.component.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__detail_component__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__graph_component__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__legend_component__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__options_component__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__api_service__ = __webpack_require__(275);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__detail_component__["a" /* DetailComponent */],
                __WEBPACK_IMPORTED_MODULE_6__graph_component__["a" /* GraphComponent */],
                __WEBPACK_IMPORTED_MODULE_7__legend_component__["a" /* LegendComponent */],
                __WEBPACK_IMPORTED_MODULE_8__options_component__["a" /* OptionsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__api_service__["a" /* ApiService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/vance/kwantera-solution/browser/src/app.module.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stock__ = __webpack_require__(116);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DetailComponent = (function () {
    function DetailComponent() {
        this.colorSeq = __WEBPACK_IMPORTED_MODULE_1__stock__["a" /* COLOR_SEQ */];
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Number)
    ], DetailComponent.prototype, "selectedIndex", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Number)
    ], DetailComponent.prototype, "selectedDate", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Array)
    ], DetailComponent.prototype, "stocks", void 0);
    DetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'detail',
            template: __webpack_require__(469),
            styles: [__webpack_require__(463)]
        }), 
        __metadata('design:paramtypes', [])
    ], DetailComponent);
    return DetailComponent;
}());
//# sourceMappingURL=C:/Users/vance/kwantera-solution/browser/src/detail.component.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stock__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraphComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GraphComponent = (function () {
    function GraphComponent() {
        this.colorSeq = __WEBPACK_IMPORTED_MODULE_1__stock__["a" /* COLOR_SEQ */];
        this.colorSMASeq = __WEBPACK_IMPORTED_MODULE_1__stock__["b" /* COLOR_SMA_SEQ */];
        this.selectedIndexChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
        this.selectedDateChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
        this.graph = { lines: {} };
        this.hoveringDate = -1;
    }
    // trigger once when view loaded
    GraphComponent.prototype.ngAfterViewInit = function () {
        this.graph.container = __WEBPACK_IMPORTED_MODULE_3_d3__["select"](this.element.nativeElement);
        this.graph.x = __WEBPACK_IMPORTED_MODULE_3_d3__["scaleLinear"]();
        this.graph.y = __WEBPACK_IMPORTED_MODULE_3_d3__["scaleLinear"]();
        this.resetCanvas();
    };
    // trigger when input changed
    GraphComponent.prototype.ngOnChanges = function (changes) {
        if (changes['showStocks'] && changes['showStocks'].previousValue != changes['showStocks'].currentValue) {
            // trigger when stock visibility is changed
            this.calcProps();
            this.resetCanvas();
        }
        else if (changes['stocks'] && changes['stocks'].previousValue != changes['stocks'].currentValue) {
            // stocks.length changed - reset canvas
            this.resetCanvas();
        }
        else {
            // update canvas will be sufficient
            this.update();
        }
    };
    // trigger when window resized (responsive)
    GraphComponent.prototype.onResize = function () {
        this.resetCanvas();
    };
    // recalulate min/max price and extract date strings 
    GraphComponent.prototype.calcProps = function () {
        var _this = this;
        if (this.stocks && this.showStocks.filter(function (el) { return true; }).length > 0) {
            this.maxPrice = this.stocks
                .filter(function (stock, index) { return _this.showStocks[index]; }) // filter out hidden stocks
                .reduce((function (max, stock) {
                return Math.max(max, stock.data.reduce(function (stockMax, record) {
                    return Math.max(stockMax, record[__WEBPACK_IMPORTED_MODULE_1__stock__["c" /* STOCK_CLOSE */]]); // use nested reducers to find max closing price in 2d array
                }, 0));
            }), 0);
            this.minPrice = this.stocks
                .filter(function (stock, index) { return _this.showStocks[index]; }) // filter out hidden stocks
                .reduce((function (min, stock) {
                return Math.min(min, stock.data.reduce(function (stockMin, record) {
                    return Math.min(stockMin, record[__WEBPACK_IMPORTED_MODULE_1__stock__["c" /* STOCK_CLOSE */]]); // use nested reducers to find max closing price in 2d array
                }, Infinity));
            }), Infinity);
            // extract strings from any stock array
            // also remove the year text (since all of them are 2013)
            this.dateArr = this.stocks[0].data.map(function (record) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["a" /* trimDate */])(record[__WEBPACK_IMPORTED_MODULE_1__stock__["d" /* STOCK_DATE */]]); });
        }
    };
    // d3 line generator
    GraphComponent.prototype.line = function (input) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_3_d3__["line"]()
            .x(function (d) { return _this.graph.adjX(d[0]); })
            .y(function (d) { return _this.graph.y(d[1]); })(input);
    };
    // use current width of the div to determine width and height of the drawing area and recreate the svg
    GraphComponent.prototype.resetCanvas = function () {
        var _this = this;
        if (!this.graph.container) {
            return;
        }
        var MARGIN = 30;
        // remove existing svg element
        this.graph.container.selectAll('svg').remove();
        this.graph.width = this.element.nativeElement.clientWidth - MARGIN * 2;
        // 4:3 ratio, or maximum height 800px
        this.graph.height = this.graph.width * 0.75 - MARGIN * 2;
        if (this.graph.height > 800) {
            this.graph.height = 800;
        }
        // event listener for zoom/pan events
        // will replace adjX scale with current zooming setting
        this.graph.zoom = __WEBPACK_IMPORTED_MODULE_3_d3__["zoom"]()
            .scaleExtent([1, 32])
            .translateExtent([[0, 0], [this.graph.width, this.graph.height]])
            .extent([[0, 0], [this.graph.width, this.graph.height]])
            .on("zoom", function () {
            _this.graph.adjX = __WEBPACK_IMPORTED_MODULE_3_d3__["event"].transform.rescaleX(_this.graph.x);
            _this.update();
        });
        // initialize new svg element
        this.graph.svg = this.graph.container.append('svg')
            .attr('width', this.graph.width + MARGIN * 2)
            .attr('height', this.graph.height + MARGIN * 2)
            .call(this.graph.zoom)
            .append('g')
            .attr('transform', "translate(" + MARGIN + "," + MARGIN + ")");
        if (!this.stocks) {
            return;
        }
        // set scale range; copy x scale to adjX
        this.graph.x.range([0, this.graph.width]);
        this.graph.y.range([this.graph.height, 0]);
        // set scale domain; leave extra space for y
        this.graph.x.domain([0, this.dateArr.length]);
        this.graph.y.domain([this.minPrice * 0.9, this.maxPrice * 1.1]);
        if (!this.graph.adjX) {
            this.graph.adjX = this.graph.x;
        }
        // draw x axis
        this.graph.xAxis = this.graph.svg.append('g')
            .attr('class', 'x-axis')
            .attr('transform', "translate(0," + this.graph.height + ")")
            .call(__WEBPACK_IMPORTED_MODULE_3_d3__["axisBottom"](this.graph.x));
        // draw y axis
        this.graph.svg.append('g')
            .attr('class', 'y-axis')
            .call(__WEBPACK_IMPORTED_MODULE_3_d3__["axisLeft"](this.graph.y));
        // mask
        this.graph.svg
            .append('defs')
            .append("clipPath")
            .attr("id", "mask")
            .style("pointer-events", "none")
            .append("rect")
            .attr("width", this.graph.width)
            .attr("height", this.graph.height + MARGIN);
        // prepare SMA lines
        this.graph.lines.SMAs = Array.apply(null, Array(this.stocks.length)).map(function (el, i) {
            return _this.graph.svg.append('path')
                .attr("clip-path", "url(#mask)")
                .attr("class", "line")
                .attr("style", "stroke:" + _this.colorSMASeq[i]);
        });
        // prepare closing price lines
        this.graph.lines.stocks = Array.apply(null, Array(this.stocks.length)).map(function (el, i) {
            return _this.graph.svg.append('path')
                .attr("clip-path", "url(#mask)")
                .attr("class", "line")
                .attr("style", "stroke:" + _this.colorSeq[i])
                .on('click', function () { return _this.changeSelectedIndex(i); });
        });
        // prepare selected stock closing price line
        this.graph.lines.selected = this.graph.svg.append('path')
            .attr("clip-path", "url(#mask)")
            .attr("class", "line");
        // current selected date
        this.graph.selectedDateCursor = this.graph.svg.append('g');
        // hovering date
        this.graph.hoveringDateCursor = this.graph.svg.append('g');
        // overlay for even capturing 
        var self = this;
        this.graph.svg
            .append('rect')
            .attr('class', 'overlay')
            .style("pointer-events", "all")
            .attr("width", this.graph.width)
            .attr("height", this.graph.height)
            .on('mousemove', function () {
            self.hoveringDate = Math.round(self.graph.adjX.invert(__WEBPACK_IMPORTED_MODULE_3_d3__["mouse"](this)[0]));
            // fix out-of-bound
            if (self.hoveringDate === self.dateArr.length) {
                self.hoveringDate = self.hoveringDate - 1;
            }
            self.drawCursors();
        })
            .on('mouseleave', function () {
            self.hoveringDate = -1;
            self.drawCursors();
        })
            .on('click', function () { return self.changeSelectedDate(self.hoveringDate); });
        // canvas ready; start to update data
        this.update();
    };
    // update canvas
    GraphComponent.prototype.update = function () {
        var _this = this;
        if (!this.graph.svg) {
            return;
        }
        // update x axis
        this.graph.xAxis.call(__WEBPACK_IMPORTED_MODULE_3_d3__["axisBottom"](this.graph.adjX).tickFormat(function (d, i) { return _this.dateArr[d]; }));
        // update SMA lines
        this.stocks.forEach(function (stock, i) {
            // skip when certain stocks or showSMA is hidden
            if (!_this.showSMA || !_this.showStocks[i]) {
                _this.graph.lines.SMAs[i].attr('d', null);
            }
            else {
                // calculate SMA; right align SMA curve correctly by moving x
                _this.graph.lines.SMAs[i].attr('d', _this.line(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__util__["b" /* calcSMA */])(stock, _this.SMAPeriod).map(function (el, j) { return [j + _this.SMAPeriod - 1, el]; })));
            }
        });
        // update closing price lines
        this.stocks.forEach(function (stock, i) {
            // skip hidden stocks
            if (!_this.showStocks[i]) {
                _this.graph.lines.stocks[i].attr('d', null);
            }
            else {
                _this.graph.lines.stocks[i].attr('d', _this.line(stock.data.map(function (el, j) { return [j, el[__WEBPACK_IMPORTED_MODULE_1__stock__["c" /* STOCK_CLOSE */]]]; })));
            }
            ;
        });
        // update selected stock again using bolded line
        if (this.selectedIndex < 0) {
            this.graph.lines.selected.attr('d', null);
        }
        else {
            this.graph.lines.selected
                .attr("style", "stroke:" + this.colorSeq[this.selectedIndex] + ";stroke-width:5")
                .attr('d', this.line(this.stocks[this.selectedIndex].data.map(function (el, i) { return [i, el[__WEBPACK_IMPORTED_MODULE_1__stock__["c" /* STOCK_CLOSE */]]]; })));
        }
        // update selected date cursor
        if (this.selectedDate < 0) {
            this.graph.selectedDateCursor.select('*').remove();
        }
        else {
            this.drawCursors();
        }
    };
    // draw hovering cursor and selected date cursor
    // they need to be drawn in a more frequent way (on mousemove)
    GraphComponent.prototype.drawCursors = function () {
        var _this = this;
        var cursor1 = this.graph.hoveringDateCursor;
        var cursor2 = this.graph.selectedDateCursor;
        var x1 = this.hoveringDate;
        var posX1 = this.graph.adjX(this.hoveringDate);
        var x2 = this.selectedDate;
        var posX2 = this.graph.adjX(this.selectedDate);
        var showHovering = x1 >= 0 && x1 !== x2;
        var showSelected = x2 >= 0;
        cursor1.selectAll('*').remove();
        cursor2.selectAll('*').remove();
        if (showHovering) {
            cursor1.append('line') // hovering cursor line
                .attr('class', 'hover-cursor')
                .attr('x1', posX1)
                .attr('x2', posX1)
                .attr('y1', 0)
                .attr('y2', this.graph.height);
            cursor1.append('text') // date label
                .attr('x', posX1)
                .attr('y', 0)
                .attr('style', 'fill: lightgray')
                .text(this.dateArr[x1]);
        }
        if (showSelected) {
            cursor1.append('line') // selected cursor line
                .attr('class', 'selected-cursor')
                .attr('x1', posX2)
                .attr('x2', posX2)
                .attr('y1', 0)
                .attr('y2', this.graph.height);
            cursor2.append('text') // date label
                .attr('x', posX2)
                .attr('y', 0)
                .attr('style', 'fill: black')
                .text(this.dateArr[x2]);
        }
        var labelPosX = showHovering ? posX1 : posX2;
        labelPosX = (labelPosX < this.graph.width / 2) ? labelPosX + 5 : labelPosX - 60;
        if (showHovering) {
            this.stocks.forEach(function (stock, i) {
                if (!_this.showStocks[i]) {
                    return;
                }
                var y = stock.data[_this.hoveringDate][__WEBPACK_IMPORTED_MODULE_1__stock__["c" /* STOCK_CLOSE */]];
                var posY = _this.graph.y(y);
                cursor1.append('circle') // crosspoints
                    .attr('cx', posX1)
                    .attr('cy', posY)
                    .attr("style", "fill:" + _this.colorSeq[i])
                    .attr('r', 5);
                cursor1.append('text') // price label outline
                    .attr('x', labelPosX)
                    .attr('y', posY)
                    .text(y)
                    .attr('style', 'stroke: white; stroke-width: 5px;');
                cursor1.append('text') // price label fill
                    .attr('x', labelPosX)
                    .attr('y', posY)
                    .text(y);
            });
        }
        else if (showSelected) {
            this.stocks.forEach(function (stock, i) {
                if (!_this.showStocks[i]) {
                    return;
                }
                var y = stock.data[_this.selectedDate][__WEBPACK_IMPORTED_MODULE_1__stock__["c" /* STOCK_CLOSE */]];
                var posY = _this.graph.y(y);
                cursor2.append('circle') // crosspoints
                    .attr('cx', posX2)
                    .attr('cy', posY)
                    .attr("style", "fill:" + _this.colorSeq[i])
                    .attr('r', 5);
                cursor2.append('text') // price label outline
                    .attr('x', labelPosX)
                    .attr('y', posY)
                    .text(y)
                    .attr('style', 'stroke: white; stroke-width: 5px;');
                cursor2.append('text') // price label fill
                    .attr('x', labelPosX)
                    .attr('y', posY)
                    .text(y);
            });
        }
    };
    // zoom button handler
    GraphComponent.prototype.zoom = function (direction) {
        // TODO: zoom with buttons in conflicts with zoom behaviour in current d3 library 
        // see http://stackoverflow.com/questions/40246196/d3-v4-zoom-with-buttons-in-conflicts-with-zoom-behaviour
        this.graph.zoom.scaleBy(this.graph.svg, direction ? 1.2 : 0.8);
    };
    // change selected stock index
    GraphComponent.prototype.changeSelectedIndex = function (index) {
        this.selectedIndexChange.emit(index);
    };
    // change selected date
    GraphComponent.prototype.changeSelectedDate = function (date) {
        if (date >= 0) {
            this.selectedDateChange.emit(date);
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* ViewChild */])('graph'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */]) === 'function' && _a) || Object)
    ], GraphComponent.prototype, "element", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Number)
    ], GraphComponent.prototype, "selectedIndex", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]) === 'function' && _b) || Object)
    ], GraphComponent.prototype, "selectedIndexChange", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Number)
    ], GraphComponent.prototype, "selectedDate", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(), 
        __metadata('design:type', (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]) === 'function' && _c) || Object)
    ], GraphComponent.prototype, "selectedDateChange", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Boolean)
    ], GraphComponent.prototype, "showSMA", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Number)
    ], GraphComponent.prototype, "SMAPeriod", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Array)
    ], GraphComponent.prototype, "stocks", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Array)
    ], GraphComponent.prototype, "showStocks", void 0);
    GraphComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'graph',
            template: __webpack_require__(470),
            styles: [__webpack_require__(464)]
        }), 
        __metadata('design:paramtypes', [])
    ], GraphComponent);
    return GraphComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/vance/kwantera-solution/browser/src/graph.component.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stock__ = __webpack_require__(116);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LegendComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LegendComponent = (function () {
    function LegendComponent() {
        this.colorSeq = __WEBPACK_IMPORTED_MODULE_1__stock__["a" /* COLOR_SEQ */];
        this.showStocksChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
        this.selectedIndexChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
    }
    // change stock visibility
    LegendComponent.prototype.toggleStock = function (index, event) {
        event.stopPropagation();
        this.showStocks[index] = !this.showStocks[index];
        this.showStocksChange.emit(this.showStocks.slice());
        // if the selcted stock is about to be hidden also remove the selection
        if (this.selectedIndex === index && !this.showStocks[index]) {
            this.selectedIndex = -1;
            this.selectedIndexChange.emit(this.selectedIndex);
        }
    };
    // change selected stock
    LegendComponent.prototype.changeSelected = function (index) {
        if (this.showStocks[index]) {
            this.selectedIndex = index;
            this.selectedIndexChange.emit(this.selectedIndex);
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Array)
    ], LegendComponent.prototype, "stocks", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Array)
    ], LegendComponent.prototype, "showStocks", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]) === 'function' && _a) || Object)
    ], LegendComponent.prototype, "showStocksChange", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Number)
    ], LegendComponent.prototype, "selectedIndex", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]) === 'function' && _b) || Object)
    ], LegendComponent.prototype, "selectedIndexChange", void 0);
    LegendComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'stock-legend',
            template: __webpack_require__(471),
            styles: [__webpack_require__(465)]
        }), 
        __metadata('design:paramtypes', [])
    ], LegendComponent);
    return LegendComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/vance/kwantera-solution/browser/src/legend.component.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OptionsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OptionsComponent = (function () {
    function OptionsComponent() {
        this.showSMAChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
        this.SMAPeriodChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]();
    }
    // toogle SMA visibility
    OptionsComponent.prototype.toggleSMA = function () {
        this.showSMAChange.emit(!this.showSMA);
    };
    // change SMA period
    OptionsComponent.prototype.changeSMAPeriod = function (period) {
        this.SMAPeriodChange.emit(period);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Boolean)
    ], OptionsComponent.prototype, "showSMA", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]) === 'function' && _a) || Object)
    ], OptionsComponent.prototype, "showSMAChange", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Number)
    ], OptionsComponent.prototype, "SMAPeriod", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* EventEmitter */]) === 'function' && _b) || Object)
    ], OptionsComponent.prototype, "SMAPeriodChange", void 0);
    OptionsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'options',
            template: __webpack_require__(472),
            styles: [__webpack_require__(466)]
        }), 
        __metadata('design:paramtypes', [])
    ], OptionsComponent);
    return OptionsComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/vance/kwantera-solution/browser/src/options.component.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stock__ = __webpack_require__(116);
/* harmony export (immutable) */ __webpack_exports__["a"] = trimDate;
/* harmony export (immutable) */ __webpack_exports__["b"] = calcSMA;

// trim date to a shorter string
function trimDate(input) {
    return input.substr(5);
    // use momentjs instead of simple trimming for a more complex case
}
// calculate moving average
function calcSMA(input, period) {
    var result = [];
    var sum = 0;
    for (var i = 0; i < period - 1; i++) {
        sum += parseFloat(input.data[i][__WEBPACK_IMPORTED_MODULE_0__stock__["c" /* STOCK_CLOSE */]]);
    }
    for (var i = period - 1; i < input.data.length; i++) {
        sum += parseFloat(input.data[i][__WEBPACK_IMPORTED_MODULE_0__stock__["c" /* STOCK_CLOSE */]]);
        result.push(sum / period);
        sum -= parseFloat(input.data[i - period + 1][__WEBPACK_IMPORTED_MODULE_0__stock__["c" /* STOCK_CLOSE */]]);
    }
    return result;
}
//# sourceMappingURL=C:/Users/vance/kwantera-solution/browser/src/util.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/vance/kwantera-solution/browser/src/environment.js.map

/***/ }),

/***/ 462:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(46)();
// imports


// module
exports.push([module.i, "/* use flexbox for sections placing */\r\n.container{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n}\r\n.main{\r\n    -webkit-box-flex: 2;\r\n        -ms-flex: 2 1 auto;\r\n            flex: 2 1 auto;\r\n    margin-right: 40px;\r\n}\r\n.side{\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 auto;\r\n            flex: 1 1 auto;\r\n}\r\n\r\n.legend,.detail, .options{\r\n    width: 250px;\r\n}\r\n/*card style*/\r\n.graph,.legend,.options,.detail{\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 463:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(46)();
// imports


// module
exports.push([module.i, ".content{\r\n    padding: 0 10px 10px 10px;\r\n}\r\n.color-block{\r\n    display: inline-block;\r\n    width: 20px;\r\n    margin-right: 10px;\r\n    height: 1em;\r\n    vertical-align: middle;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 464:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(46)();
// imports


// module
exports.push([module.i, ".overlay{\r\n    margin-left: 5px;\r\n    margin-top: 5px;\r\n}\r\n.btn{\r\n    display: inline-block;\r\n    cursor: pointer;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    width: 1.5em;\r\n    line-height: 1.5em;\r\n    color: white;\r\n    background-color: darkblue;\r\n    border-radius: 50%;\r\n    box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.75);\r\n}\r\n.btn:hover{\r\n    background-color: blue;\r\n}\r\n.tip{\r\n    margin-left: 5px;\r\n    color: gray;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 465:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(46)();
// imports


// module
exports.push([module.i, "/* list view*/\r\nul{\r\n    list-style-type: none;\r\n    padding: 0;\r\n    max-height: 300px;\r\n    overflow-y: scroll;\r\n}\r\nli{\r\n    cursor: pointer;\r\n    padding: 1em;\r\n    line-height: 2em;\r\n    border-top: 1px solid whitesmoke;\r\n}\r\nli:hover{\r\n    background-color: whitesmoke;\r\n}\r\nli.selected{\r\n    background-color: lightblue;\r\n}\r\n\r\n/* colored check box */\r\n.checkbox{\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    width: 1em;\r\n    height: 1em;\r\n    margin-right: 1em;\r\n    border-width: 2px;\r\n    border-style: solid;\r\n    border-radius: 5px;\r\n}\r\n.checkmark{\r\n    width: 0.6em;\r\n    height: 0.6em;\r\n    margin-left: 0.2em;\r\n    margin-top: 0.2em;\r\n}\r\n.label{\r\n    vertical-align: middle\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 466:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(46)();
// imports


// module
exports.push([module.i, ".row {\r\n    cursor: pointer;\r\n    margin-bottom: 1em;\r\n}\r\n.checkbox {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    width: 1em;\r\n    height: 1em;\r\n    margin-right: .5em;\r\n    border: 2px solid darkgray;\r\n    border-radius: 5px;\r\n}\r\n.checkbox.checked {\r\n    border-color: limegreen;\r\n}\r\n.checkmark {\r\n    width: 0.6em;\r\n    height: 0.6em;\r\n    margin-left: 0.2em;\r\n    margin-top: 0.2em;\r\n    background-color: limegreen;\r\n}\r\n.label {\r\n    vertical-align: middle\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 468:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"main\">\n    <div class=\"graph\">\n      <graph [stocks]=\"stocks\" [(showStocks)]=\"showStocks\" [(selectedIndex)]=\"selectedIndex\" [(selectedDate)]=\"selectedDate\" [showSMA]=\"showSMA\" [SMAPeriod]=\"SMAPeriod\"></graph>\n    </div>\n  </div>\n  <div class=\"side\">\n    <div class=\"detail\">\n      <detail [selectedIndex]=\"selectedIndex\" [stocks]=\"stocks\" [selectedDate]=\"selectedDate\"></detail>\n    </div>\n    <div class=\"legend\">\n      <stock-legend [stocks]=\"stocks\" [(showStocks)]=\"showStocks\" [(selectedIndex)]=\"selectedIndex\"></stock-legend>\n    </div>\n    <div class=\"options\">\n      <options [(showSMA)]=\"showSMA\" [(SMAPeriod)]=\"SMAPeriod\"></options>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 469:
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <p class=\"title\">Stock Detail</p>\r\n  <div class=\"content\">\r\n    <p *ngIf=\"selectedIndex < 0\">No stock picked. Click the stock in the legend to pick one.</p>\r\n    <p *ngIf=\"selectedDate < 0\">No specific date picked. Click the graph to pick a date.</p>\r\n    <div *ngIf=\"selectedDate >= 0 && selectedIndex >= 0\">\r\n      <p><span class=\"color-block\" [style.backgroundColor]=\"colorSeq[selectedIndex]\"></span> Symbol: {{stocks[selectedIndex].symbol}}</p>\r\n      <p>Date: {{stocks[selectedIndex].data[selectedDate][0]}}</p>\r\n      <p>Open: {{stocks[selectedIndex].data[selectedDate][1]}}</p>\r\n      <p>High: {{stocks[selectedIndex].data[selectedDate][2]}}</p>\r\n      <p>Low: {{stocks[selectedIndex].data[selectedDate][3]}}</p>\r\n      <p>Close: {{stocks[selectedIndex].data[selectedDate][4]}}</p>\r\n      <p>Adj. Close: {{stocks[selectedIndex].data[selectedDate][6]}}</p>\r\n      <p>Volume: {{stocks[selectedIndex].data[selectedDate][5]}}</p>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 470:
/***/ (function(module, exports) {

module.exports = "<div class=\"graph\" #graph (window:resize)=\"onResize($event)\">\r\n    <div class=\"overlay\">\r\n        <span class=\"btn\" (click)=\"zoom(true)\">+</span>\r\n        <span class=\"btn\" (click)=\"zoom(false)\">-</span>\r\n        <span class=\"tip\">or use mousewheel to zoom; drag horizontally to pan when zoomed</span>\r\n</div>"

/***/ }),

/***/ 471:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"stocks\">\r\n  <p class=\"title\">Legend</p>\r\n  <ul>\r\n    <!--click will change selected to current list item-->\r\n    <li *ngFor=\"let stock of stocks; let i = index\" [class.selected]=\"selectedIndex===i\" (click)=\"changeSelected(i)\">\r\n      <!--click the checkbox will toggle visibility of a stock-->\r\n      <span class=\"checkbox\" [style.borderColor]=\"showStocks[i]?colorSeq[i]:'darkgrey'\" (click)=\"toggleStock(i, $event)\">\r\n        <div class=\"checkmark\" [hidden]=\"!showStocks[i]\"  [style.backgroundColor]='colorSeq[i]' ></div>\r\n      </span>\r\n      <span class=\"label\" [style.color]=\"showStocks[i]?'black':'darkgrey'\">{{stock.symbol}}</span>\r\n    </li>\r\n  </ul>\r\n</div>"

/***/ }),

/***/ 472:
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <p class=\"title\">Options</p>\r\n  <div class=\"content\">\r\n    <!--toggle SMA visibility when clicked-->\r\n    <div class=\"row\" (click)=\"toggleSMA()\">\r\n      <span class=\"checkbox\" [class.checked]=\"showSMA\">\r\n        <div class=\"checkmark\" [hidden]=\"!showSMA\"></div>\r\n      </span>\r\n      <span class=\"label\">Show moving average</span>\r\n    </div>\r\n    <!--select SMA period-->\r\n    <div class=\"row\">\r\n      <span class=\"label\">SMA Period:</span>\r\n      <select [(ngModel)]=\"SMAPeriod\" (ngModelChange)=\"changeSMAPeriod($event)\">\r\n        <option [ngValue]=\"5\">5 days</option>\r\n        <option [ngValue]=\"10\">10 days</option>\r\n        <option [ngValue]=\"20\">20 days</option>\r\n        <option [ngValue]=\"50\">50 days</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 485:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(293);


/***/ })

},[485]);
//# sourceMappingURL=main.bundle.js.map