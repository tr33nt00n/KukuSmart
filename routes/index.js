const express = require('express');

const router = express.Router(); 

router.get('/', (req, res) => {
    res.render('home', {
        title: 'KukuSmart'
    });
});

router.get('/products', (req, res) => {
    res.render('products',{
        title: 'Products'
    });
});


module.exports = router; 