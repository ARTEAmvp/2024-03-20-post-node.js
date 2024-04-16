import express from 'express';
import {
  NEW_FILM,
  UPDATE_FILM_BY_ID,
  GET_FILM_BY_ID,
  GET_FILMS,
  GET_FILMS_SORTED,
  DELETE_FILMS,
  DELETE_FILMS_BY_ID
} from "../controllers/film.js";

import authUser from '../middleware/auth.js';

import validation from '../middleware/validation.js'
import filmSchema from '../validationSchemas/filmSchema.js';

const router = express.Router();

  router.post('/films', validation(filmSchema), authUser, NEW_FILM);

  router.put('/updateFilmTitle/:filmId', authUser, UPDATE_FILM_BY_ID); 
  
  router.get('/films/:filmId', authUser, GET_FILM_BY_ID);
  
  router.get('/films', authUser, GET_FILMS);
  
  router.get('/filmsSort', authUser, GET_FILMS_SORTED);
  
  router.delete('/films', authUser, DELETE_FILMS);

  router.delete('/film/:filmId', authUser, DELETE_FILMS_BY_ID);

export default router;