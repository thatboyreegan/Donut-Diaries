import UsersController from "../controllers/Userscontroller";
import AuthController from "../controllers/AuthControllers";

const express = require('express');

const router = express.Router();

router.post('/register', UsersController.register);
router.post('/login', UsersController.login);
router.get('/connect', AuthController.connect);
router.get('/disconnect', AuthController.disconnect);

export default router;