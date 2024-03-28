import UsersController from "../controllers/Userscontroller.js";
import AuthController from "../controllers/AuthControllers.js";
import Stats from "../controllers/StatsController.js";
import MenuController from "../controllers/MenuControllers.js";
import FoodController from "../controllers/FoodControllers.js";
import OrderController from "../controllers/OrderController.js";
import express from "express";


const router = express.Router();

router.post('/register', UsersController.register)
router.post('/login', UsersController.login);
router.get('/connect', AuthController.connect);
router.get('/disconnect', AuthController.disconnect);
router.get('/stats', Stats.stats)
router.post('/menu/create', MenuController.addMenu);
router.post('/menu/delete', MenuController.removeMenu);
router.post('/food/create', FoodController.AddFood);
router.post('/food/update', FoodController.updateFood);
router.post('/food/delete', FoodController.removeFood);
router.post('/order/create', OrderController.createOrder);
router.post('/order/cancel', OrderController.cancelOrder);

export default router;