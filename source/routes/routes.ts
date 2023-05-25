import express from 'express';
import controller from '../controllers/controllers';
const router = express.Router();

router.get("/user/", controller.getAllUsers);

export default router