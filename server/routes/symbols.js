const router = require('express').Router({mergeParams: true});
const db = require('../lib/db');

router.get('/', function(req, res, next) {
  res.json(db.getSymbols());
});

module.exports = router;
