import express from 'express';
import controller from '../controllers/controllers';
const router = express.Router();

router.get("/user/", controller.getAllUsers);
router.get("/user/:id/", controller.getUser);
router.put("user/changePassword/:id/", controller.updatePassword);
router.post("user/new/", controller.createUser);
router.delete("user/delete/:id/", controller.deleteUser)

export default router