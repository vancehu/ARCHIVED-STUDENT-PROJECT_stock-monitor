const parse = require('csv-parse');
const fs = require('fs');
const folder = process.env.CSV_FOLDER || './data'
const stocks = [];

// load data to server memory from csv
module.exports = {
    init: () => {
        fs.readdir(folder, (err, files) => {
            if (err) {
                console.error(err);
                return;
            }
            //iterate all the csv files in the folder
            files.filter(file => file.endsWith('.csv'))
                .forEach(file => fs.readFile(folder + '/' + file, (err, data) => {
                    if (err) {
                        console.warn('failed to load ' + file);
                        return;
                    }
                    // if success parse the csv file (skip the header)
                    const records = parse(data, { delimiter: ',', from: 2 }, (err, output) => {
                        if (err) {
                            console.warn('failed to parse ' + file);
                            return;
                        }
                        // reverse the records (date ascending order)
                        output = output.reverse();

                        // if success add to the database
                        const symbol = file.substr(0, file.length - 4).toUpperCase() //remove '.csv'
                        stocks.push({ symbol, data: output });
                    });
                }))
        })
    },
    getAllStocks: () => stocks,
    getSymbols: () => stocks.map(stock => stock.symbol),
    getStock: (symbol) => stocks.find(stock => stock.symbol === symbol)
}



