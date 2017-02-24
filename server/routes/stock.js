const router = require('express').Router({mergeParams: true});
const db = require('../lib/db');

router.get('/:symbol', function(req, res, next) {
    const result = db.getStock(req.params.symbol);
    if(result){
        res.json(result);
    }else{
        res.status(400).send('Invalid Stock');
    }
});

module.exports = router;
