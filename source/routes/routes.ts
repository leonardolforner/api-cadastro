import express from 'express';
import controller from '../controllers/controllers';
const router = express.Router();

router.get("/user/", controller.getAllUsers);
router.get("/user/get/:id/", controller.getUser);
router.get("/user/testPassword/:username", controller.testPassword)
router.put("/user/changePassword/:id/", controller.updatePassword);
router.post("/user/new/", controller.createUser);
router.delete("/user/delete/:id/", controller.deleteUser)

export default router