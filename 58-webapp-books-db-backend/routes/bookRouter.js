import express from 'express';

import upload from '../middlewares/multer.js'

const router = express.Router();

import {
  index,
  show,
  destroy,
  storeReview,
  store
} from '../controllers/bookController.js';

//Rotte per i libri

//index
//localhost:3000/books
router.get('/', index);

//show
//localhost:3000/books/:id
router.get('/:id', show);

//destroy
//localhost:3000/books/:id
router.delete('/:id', destroy);

//storeReview
//localhost:3000/books/:id/reviews
router.post('/:id/reviews', storeReview);

//store
//creazione di un nuovo libro
//localhost:3000/books con metodo POST
router.post( '/', upload.single('image'), store )

export default router;
