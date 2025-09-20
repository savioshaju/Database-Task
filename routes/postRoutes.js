import { Router } from "express";
import { validatePost } from "../middlewares/postMiddlewares.js";
import { addNewPost } from "../controllers/postControllers.js";
import { getAllPosts } from "../controllers/postControllers.js";
import { deleteBYId } from "../controllers/postControllers.js";
import { updatePost } from "../controllers/postControllers.js";

const router = Router()


router.route('/addPosts').post(validatePost,addNewPost)
router.route('/getPosts').get(getAllPosts)
router.route('/delPosts/:id').delete(deleteBYId)
router.route('/updPosts/:id').put(updatePost)

export default router