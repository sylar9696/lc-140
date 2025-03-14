import express from 'express'

const router = express.Router()

import {index, show, destroy} from '../controllers/bookController.js'

//Rotte per i libri

//index
//localhost:3000/api/books
router.get( '/', index );

//show
//localhost:3000/api/books/:id
router.get( '/:id', show )

//destroy
//localhost:3000/api/books/:id
router.delete( '/:id', destroy )

export default router