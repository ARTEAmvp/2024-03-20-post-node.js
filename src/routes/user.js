import express from 'express';
import { NEW_USER, LOGIN } from '../controllers/user.js'

const router = express.Router();

  router.post('/users', NEW_USER);
  router.get('/users/login', LOGIN)

export default router;