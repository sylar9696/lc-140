const express = require('express')
const router = express.Router();
const checkTime = require('../middlewares/checkTime');

const arrayPizzas = require('../data/pizzas.js');

//middleware
// router.use( checkTime );
	
// const pizzaController = require('../controllers/pizzaController');

const { index, show, store, update, patch, destroy } = require('../controllers/pizzaController');

// index
router.get('/', checkTime, index);
// show
router.get('/:id', show);
// store
router.post('/', store);

// update
router.put('/:id', update);

// patch
router.patch('/:id', patch);

// destroy
router.delete('/:id', destroy);

module.exports = router;
