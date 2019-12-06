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

router.get('/blog', (req, res) => {
    res.render('blog',{
        title: 'Blog'
    });
});

router.get('/about', (req, res) => {
    res.render('about',{
        title: 'About Us'
    });
});

module.exports = router; 