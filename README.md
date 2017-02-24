# kWantera Sample Task Solution

## 1. Introduction

The project contains a web API using Node.js(Express), and an application using Angular 2 and D3.js. The server loads csv files from a designated folder and keeps the data in memory, and it sends JSON response on request. The client requests and gets the data from the server and generates a historical prices graph. User can zoom, pan and use filter/options to change the content of the graph. By hovering or click on the graph, user can check closing prices of all the stocks on the cursors or the detail of one stock on the side panel. Simple Moving Average curve is also available. The project is a solution to https://github.com/kwantera/sample-problem and implements all the requirements.

Live Demo is available: http://vancehu.info:3002

## 2. Installation

To run instantly:
```
cd server
npm install 
npm start
```
Change environment variables if you need:
- SERVER_PORT: Choose what port to listen
- CSV_FOLDER: Change the folder of the csv files
- NO_STATIC: The server will serve '../browser/dist' as a static folder, so you can choose to run the application without configuring  the browser side. Use this if you want to remove the dependency. 

To serve the browser part:
- Use NO_STATIC
- Install angular-cli, then
```
cd browser
npm install
ng serve
```
- Open 'browser/src/app/api.service.ts' and change the server address on line 9 if needed.

## 3. Structure
![Image](https://raw.githubusercontent.com/vancehu/kwantera-sample-solution/master/readme.png)
```
browser/
 src/
  styles.css:        global and svg styling, and a copy of normalize.css
  
  app/
    api.service:       wrapping service for web api requests
    
    app.component:     an assembly of all components; 
                       invokes initial web request; 
                       stores application-level props
    
    detail.component:  shows detail of a stock on a specific date
    
    graph.component:   implements d3-based interactive graph;
                       can emit selected stock and date changes
    
    legend.component:  a list of stocks; can emit selected stock
                       and stock visibility changes
    
    options.component: toggle moving average curve visibility;
                       change moving average period

    stock:             export Stock class, default color sequence
                       and header constants of the raw data
    
    util:              calculate moving average;
                       shorten date string

server/
  data/               default folder of the csv files

  lib/db.js:          convert csv to in-memory database

  routes/
    index.js          entrypoint of the api

    stock.js          GET /stock/:id
                      Response: 200, {symbol: "IBM", data: [...]}
                                400, invalid stock
                                
    stocks.js         GET /stocks
                      Response: 200, [{symbol, data} ...]
    
    symbols.js        GET /symbols
                      Response: 200, ["IBM",...]

  server.js           Implements Basic Express Server
```

## 4. Experience acquired

- Become familiar with Angular 2 and Typescript.
- Data visualization: D3.js, SVG manipulation.
- Learned RxJS and Observable but not confident yet to use them. I used traditional Callback, Promise and Array manipulation, which is definitely more verbose.
- Not sure if I used best practices and conventions, which I need further guidance.