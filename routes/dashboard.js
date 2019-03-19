const express = require('express');
var router = express.Router();


router.get('/schlauchmanagment', function(req, res) {
    res.render('./schlauchmanagment/overview', { layout: 'layouts/schlauchlayout'});
});

router.get('/schlauchmanagment/config', function(req, res) {
    res.render('./schlauchmanagment/config', { layout: 'layouts/schlauchlayout'});
});

router.get('/schlauchmanagment/pflege', function(req, res) {
    res.render('./schlauchmanagment/maintenance', { layout: 'layouts/schlauchlayout'});
});
module.exports = router;