import express from "express"
const router = express.Router()
import User from "./controller.js"
router.post("/addUser",await User.addUser);
router.post("/existUser",await User.existUser);

export default router;
