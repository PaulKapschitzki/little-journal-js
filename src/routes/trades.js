const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  try {
    res.render('trades');
    // res.send('All trades');
  } catch {
    res.render('error');
  }
});

module.exports = router;