const express = require('express');
var router = express.Router();

router.get('/',(req,res) => res.render('welcome'));

router.get('/dashboard', function(req, res) {
    res.render('dashboard', { layout: 'layouts/dashlayout'});
});

module.exports = router;