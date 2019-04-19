var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');



/* GET home page. */
router.get('/', function (req, res, next) {
    // res.render('index', {title: 'Express powered by akabox'});
    Item.find()//loading from database
        .then(items => {
            res.render('index', {items});
        })
        .catch(err => res.status(404).json({msg: 'No items found'}));
});

router.get('/dbtest',  (req, res) => {
    res.sendFile(__dirname + '../public/dbtest');

});


router.get('/db', (req, res) => {
    Item.find()//loading from database
        .then(items => {
            res.render('index', {items});
        })
        .catch(err => res.status(404).json({msg: 'No items found'}));
});


router.post('/item/add', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });

    newItem.save().then(item => res.redirect('/db'));//this is sending to database

});


// Connect to MongoDB
mongoose
    .connect(
        'mongodb://mongodbapp:27017/fullstackreacttemplate',
        {useNewUrlParser: true}
    )
    .then(() => console.log('MongoDB Connected=======from indexjs======================='))
    .catch(err => {
        console.log("DB Error =============================================");
        console.log(err);

    });

const Item = require('../models/item');


module.exports = router;

