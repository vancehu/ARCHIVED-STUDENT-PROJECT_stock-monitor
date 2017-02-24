const router = require('express').Router({mergeParams: true});
const symbols = require('./symbols');
const stocks = require('./stocks');
const stock = require('./stock');


router.use('/symbols', symbols);
router.use('/stocks', stocks);
router.use('/stock', stock);


// 404 handler
router.use((req, res, next) => {
  res.status(404).send('Invalid request');
});

// error handler
router.use((err, req, res, next) => {
  res.status(err.status || 500);
  if(req.app.get('env') === 'development'){
    res.json({message:err.message, stack: err.stack});
  }else{
    res.send('An error occurred');
  }
});

module.exports = router;
