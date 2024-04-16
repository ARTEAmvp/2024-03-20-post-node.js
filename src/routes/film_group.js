import express from 'express';
import {
    NEW_FILM_GROUP,
    GET_ALL_FILM_GROUPS
} from "../controllers/film_group.js";

const router = express.Router();

  router.post('/group', NEW_FILM_GROUP);
  
  router.get('/groups', GET_ALL_FILM_GROUPS);

export default router;