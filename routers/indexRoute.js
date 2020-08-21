const express = require('express');
const router = express.Router();
const translate = require('./../translations.json');
router.get('/:lang?', (req, res) => {
    let lang = ( typeof req.params.lang !== 'undefined' &&  req.params.lang !== 'favicon.ico' ? req.params.lang : 'fr');
    console.log(':GET:',req.url)
    console.log(':req:', lang, req.params )
    // console.log(':translate['+lang+']:',        
    // {
    //     title: translate[lang].title,
    //     quest : translate[lang].quest,
    //     source : translate[lang].flag,
    //     [lang+"Active"] : true
    // })    
    
    res.render('home', {
        title: translate[lang].title,
        quest : translate[lang].quest,
        source : translate[lang].flag,
        [lang+"Active"] : true
    })
});

module.exports = router;