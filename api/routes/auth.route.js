import express from 'express';
import { signup, signin, google, signout } from '../controllers/auth.controller.js';

const router = express.Router()

router.post("/signup", signup)
router.post("/google", google)
router.post("/signin", signin)
router.get("/signout", signout)

export default router