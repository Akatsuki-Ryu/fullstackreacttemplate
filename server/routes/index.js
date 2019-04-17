var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express powered by akabox' });
});

router.get('/dbtest', function (req, res) {
  res.sendFile(__dirname + '../public/dbtest');
});



router.get('/db', (req, res) => {
    Item.find()
        .then(items => {
            res.render('index', {items});
            console.log(items);
        })
        .catch(err => res.status(404).json({ msg: 'No items found' }));
});


router.post('/item/add', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });

    newItem.save().then(item => res.redirect('/dbtest'));

});


// Connect to MongoDB
mongoose
    .connect(
        'mongodb://mongodbapp:27017/fullstackreacttemplate',
        { useNewUrlParser: true }
    )
    .then(() => console.log('MongoDB Connected=======from indexjs======================='))
    .catch(err => {
      console.log("DB Error ==============================================");
      console.log(err);

    });

const Item = require('../models/item');







module.exports = router;

