import { Component, OnChanges, AfterViewInit, Input, Output, EventEmitter, ElementRef, ViewChild, SimpleChange } from '@angular/core';
import { Stock, STOCK_DATE, STOCK_CLOSE, COLOR_SEQ, COLOR_SMA_SEQ } from './stock';
import { calcSMA, trimDate } from './util';
import * as d3 from 'd3';

// properties used for d3 library
interface Graph {
  // lines, cursors and axis are stored so they can be updated without repainting

  adjX: d3.ScaleLinear<any, any> // adjusted(zoomed) scale x
  container: d3.Selection<any, any, any, any>, // d3 root element
  height: number,
  hoveringDateCursor: d3.Selection<any, any, any, any>,
  lines: {
    selected: d3.Selection<any, any, any, any>
    SMAs: d3.Selection<any, any, any, any>[],
    stocks: d3.Selection<any, any, any, any>[],
  },
  selectedDateCursor: d3.Selection<any, any, any, any>,
  svg: d3.Selection<any, any, any, any>, // canvas
  width: number,
  x: d3.ScaleLinear<any, any>, // x scale
  xAxis: d3.Selection<any, any, any, any>,
  y: d3.ScaleLinear<any, any> // y scale
  zoom: d3.ZoomBehavior<any, any> //
}

@Component({
  selector: 'graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnChanges, AfterViewInit {

  @ViewChild('graph') element: ElementRef;
  graph: Graph;

  colorSeq = COLOR_SEQ;
  colorSMASeq = COLOR_SMA_SEQ;

  @Input()
  selectedIndex: number;
  @Output()
  selectedIndexChange: EventEmitter<number> = new EventEmitter();

  @Input()
  selectedDate: number;
  @Output()
  selectedDateChange: EventEmitter<number> = new EventEmitter();

  @Input()
  showSMA: boolean;

  @Input()
  SMAPeriod: number;

  @Input()
  stocks: Stock[];

  @Input()
  showStocks: boolean[];

  // calculate max, min closing price for y-axis
  maxPrice: number;
  minPrice: number;
  // extract date strings for x-axis
  dateArr: string[];

  // what date is currently hovering;
  hoveringDate: number;

  constructor() {
    this.graph = { lines: {} } as Graph;
    this.hoveringDate = -1;
  }

  // trigger once when view loaded
  ngAfterViewInit() {
    this.graph.container = d3.select(this.element.nativeElement);
    this.graph.x = d3.scaleLinear();
    this.graph.y = d3.scaleLinear();

    this.resetCanvas();
  }

  // trigger when input changed
  ngOnChanges(changes: { [propName: string]: SimpleChange }) {
    if (changes['showStocks'] && changes['showStocks'].previousValue != changes['showStocks'].currentValue) {
      // trigger when stock visibility is changed
      this.calcProps();
      this.resetCanvas();
    }else if (changes['stocks'] && changes['stocks'].previousValue != changes['stocks'].currentValue) {
      // stocks.length changed - reset canvas
      this.resetCanvas();
    } else {
      // update canvas will be sufficient
      this.update();
    }
  }

  // trigger when window resized (responsive)
  onResize() {
    this.resetCanvas();
  }

  // recalulate min/max price and extract date strings 
  calcProps() {
    if (this.stocks && this.showStocks.filter(el => true).length > 0) {
      this.maxPrice = this.stocks
        .filter((stock, index) => this.showStocks[index]) // filter out hidden stocks
        .reduce(((max, stock) => {
          return Math.max(max, stock.data.reduce((stockMax, record) => {
            return Math.max(stockMax, record[STOCK_CLOSE]); // use nested reducers to find max closing price in 2d array
          }, 0));
        }), 0);
      this.minPrice = this.stocks
        .filter((stock, index) => this.showStocks[index]) // filter out hidden stocks
        .reduce(((min, stock) => {
          return Math.min(min, stock.data.reduce((stockMin, record) => {
            return Math.min(stockMin, record[STOCK_CLOSE]); // use nested reducers to find max closing price in 2d array
          }, Infinity));
        }), Infinity);

      // extract strings from any stock array
      // also remove the year text (since all of them are 2013)
      this.dateArr = this.stocks[0].data.map((record) => trimDate(record[STOCK_DATE]));
    }
  }

  // d3 line generator
  line(input) {
    return d3.line<any>()
      .x(d => this.graph.adjX(d[0]))
      .y(d => this.graph.y(d[1]))(input);
  }

  // use current width of the div to determine width and height of the drawing area and recreate the svg
  resetCanvas() {
    if (!this.graph.container) {
      return;
    }

    const MARGIN = 30;
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
    this.graph.zoom = d3.zoom()
      .scaleExtent([1, 32])
      .translateExtent([[0, 0], [this.graph.width, this.graph.height]])
      .extent([[0, 0], [this.graph.width, this.graph.height]])
      .on("zoom", () => {
        this.graph.adjX = d3.event.transform.rescaleX(this.graph.x);
        this.update();
      });

    // initialize new svg element
    this.graph.svg = this.graph.container.append('svg')
      .attr('width', this.graph.width + MARGIN * 2)
      .attr('height', this.graph.height + MARGIN * 2)
      .call(this.graph.zoom)
      .append('g')
      .attr('transform', `translate(${MARGIN},${MARGIN})`)
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
      .attr('transform', `translate(0,${this.graph.height})`)
      .call(d3.axisBottom(this.graph.x)
      );

    // draw y axis
    this.graph.svg.append('g')
      .attr('class', 'y-axis')
      .call(d3.axisLeft(this.graph.y))

    // mask
    this.graph.svg
      .append('defs')
      .append("clipPath")
      .attr("id", "mask")
      .style("pointer-events", "none")
      .append("rect")
      .attr("width", this.graph.width)
      .attr("height", this.graph.height + MARGIN)


    // prepare SMA lines
    this.graph.lines.SMAs = Array.apply(null, Array(this.stocks.length)).map((el, i) =>
      this.graph.svg.append('path')
        .attr("clip-path", "url(#mask)")
        .attr("class", "line")
        .attr("style", `stroke:${this.colorSMASeq[i]}`));


    // prepare closing price lines
    this.graph.lines.stocks = Array.apply(null, Array(this.stocks.length)).map((el, i) =>
      this.graph.svg.append('path')
        .attr("clip-path", "url(#mask)")
        .attr("class", "line")
        .attr("style", `stroke:${this.colorSeq[i]}`)
        .on('click', () => this.changeSelectedIndex(i)));

    // prepare selected stock closing price line
    this.graph.lines.selected = this.graph.svg.append('path')
      .attr("clip-path", "url(#mask)")
      .attr("class", "line");

    // current selected date
    this.graph.selectedDateCursor = this.graph.svg.append('g');

    // hovering date
    this.graph.hoveringDateCursor = this.graph.svg.append('g');

    // overlay for even capturing 
    const self = this;
    this.graph.svg
      .append('rect')
      .attr('class', 'overlay')
      .style("pointer-events", "all")
      .attr("width", this.graph.width)
      .attr("height", this.graph.height)
      .on('mousemove', function () {
        self.hoveringDate = Math.round(self.graph.adjX.invert(d3.mouse(this as d3.ContainerElement)[0]));
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
      .on('click', () => self.changeSelectedDate(self.hoveringDate));

    // canvas ready; start to update data
    this.update();
  }

  // update canvas
  update() {
    if (!this.graph.svg) {
      return;
    }

    // update x axis
    this.graph.xAxis.call(d3.axisBottom(this.graph.adjX).tickFormat((d, i) => this.dateArr[d as number]));

    // update SMA lines
    this.stocks.forEach((stock, i) => {
      // skip when certain stocks or showSMA is hidden
      if (!this.showSMA || !this.showStocks[i]) {
        this.graph.lines.SMAs[i].attr('d', null);
      } else {
        // calculate SMA; right align SMA curve correctly by moving x
        this.graph.lines.SMAs[i].attr('d', this.line(calcSMA(stock, this.SMAPeriod).map((el, j) => [j + this.SMAPeriod - 1, el])));
      }
    });


    // update closing price lines
    this.stocks.forEach((stock, i) => {
      // skip hidden stocks
      if (!this.showStocks[i]) {
        this.graph.lines.stocks[i].attr('d', null);
      } else {
        this.graph.lines.stocks[i].attr('d', this.line(stock.data.map((el, j) => [j, el[STOCK_CLOSE]])));
      };
    });

    // update selected stock again using bolded line
    if (this.selectedIndex < 0) {
      this.graph.lines.selected.attr('d', null);
    } else {
      this.graph.lines.selected
        .attr("style", `stroke:${this.colorSeq[this.selectedIndex]};stroke-width:5`)
        .attr('d', this.line(this.stocks[this.selectedIndex].data.map((el, i) => [i, el[STOCK_CLOSE]])));
    }

    // update selected date cursor
    if (this.selectedDate < 0) {
      this.graph.selectedDateCursor.select('*').remove();
    } else {
      this.drawCursors();
    }
  }

  // draw hovering cursor and selected date cursor
  // they need to be drawn in a more frequent way (on mousemove)
  drawCursors() {
    const cursor1 = this.graph.hoveringDateCursor;
    const cursor2 = this.graph.selectedDateCursor;
    const x1 = this.hoveringDate;
    const posX1 = this.graph.adjX(this.hoveringDate);
    const x2 = this.selectedDate;
    const posX2 = this.graph.adjX(this.selectedDate);
    const showHovering: boolean = x1 >= 0 && x1 !== x2;
    const showSelected: boolean = x2 >= 0;

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
        .text(this.dateArr[x1])
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
        .text(this.dateArr[x2])
    }

    let labelPosX = showHovering ? posX1 : posX2;
    labelPosX = (labelPosX < this.graph.width / 2) ? labelPosX + 5 : labelPosX - 60;

    if (showHovering) {
      this.stocks.forEach((stock, i) => {
        if(!stock.isVisible){
          return;
        }
        const y = stock.data[this.hoveringDate][STOCK_CLOSE];
        const posY = this.graph.y(y);
        cursor1.append('circle') // crosspoints
          .attr('cx', posX1)
          .attr('cy', posY)
          .attr("style", `fill:${this.colorSeq[i]}`)
          .attr('r', 5);
        cursor1.append('text')  // price label outline
          .attr('x', labelPosX)
          .attr('y', posY)
          .text(y)
          .attr('style', 'stroke: white; stroke-width: 5px;')
        cursor1.append('text') // price label fill
          .attr('x', labelPosX)
          .attr('y', posY)
          .text(y)
      });
    } else if (showSelected) {
      this.stocks.forEach((stock, i) => {
        if(!stock.isVisible){
          return;
        }
        const y = stock.data[this.selectedDate][STOCK_CLOSE];
        const posY = this.graph.y(y);
        cursor2.append('circle') // crosspoints
          .attr('cx', posX2)
          .attr('cy', posY)
          .attr("style", `fill:${this.colorSeq[i]}`)
          .attr('r', 5);
        cursor2.append('text')  // price label outline
          .attr('x', labelPosX)
          .attr('y', posY)
          .text(y)
          .attr('style', 'stroke: white; stroke-width: 5px;')
        cursor2.append('text') // price label fill
          .attr('x', labelPosX)
          .attr('y', posY)
          .text(y)
      });
    }
  }

  // zoom button handler
  zoom(direction: boolean): void {
    // TODO: zoom with buttons in conflicts with zoom behaviour in current d3 library 
    // see http://stackoverflow.com/questions/40246196/d3-v4-zoom-with-buttons-in-conflicts-with-zoom-behaviour
    this.graph.zoom.scaleBy(this.graph.svg, direction ? 1.2 : 0.8);
  }

  // change selected stock index
  changeSelectedIndex(index: number): void {
    this.selectedIndexChange.emit(index);
  }

  // change selected date
  changeSelectedDate(date: number): void {
    if (date >= 0) {
      this.selectedDateChange.emit(date);
    }
  }
}
