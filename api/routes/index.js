import UsersController from "../controllers/Userscontroller.js";
import AuthController from "../controllers/AuthControllers.js";
import Stats from "../controllers/StatsController.js";
import express, { Router } from "express";

const router = express.Router();

router.post('/register', UsersController.register)
router.post('/login', UsersController.login);
router.get('/connect', AuthController.connect);
router.get('/disconnect', AuthController.disconnect);
router.get('/stats', Stats.stats)

export default router;