import { statusCodes } from "../../ExpressJS backend/helpers/userHelper.js";
import { createPostServices } from "../services/postServices.js";
import { getPostServices } from "../services/postServices.js";
import { deletePostServices } from "../services/postServices.js";
import { updatePostServices } from "../services/postServices.js";

export const addNewPost = async (req, res) => {
    try {
        const { title, content } = req.body;
        const payload = { title, content };

        const response = await createPostServices(payload);
        if (!response) {
            const status = statusCodes.find((item) => item.code === 500);
            return res.status(status.code).json({ success: false, message: status.message, error: "Failed creating new" });
        }

        const status = statusCodes.find((item) => item.code === 201);
        res.status(status.code).json({ success: true, message: status.message, item: response });

    } catch (error) {
        console.error(error);
        const status = statusCodes.find((item) => item.code === 500);
        res.status(status.code).json({ success: false, message: status.message, error: "Error adding new post" });
    }
};

export const getAllPosts = async (req, res) => {
    try {

        const response = await getPostServices();
        if (!response) {
            const status = statusCodes.find((item) => item.code === 404);
            return res.status(status.code).json({ success: false, message: status.message, error: "No posts found" });
        }

        const status = statusCodes.find((item) => item.code === 200);
        res.status(status.code).json({ success: true, message: status.message, item: response });
    } catch (error) {
        console.error(error);
        const status = statusCodes.find((item) => item.code === 500);
        res.status(status.code).json({ success: false, message: status.message, error: "Error retrieving posts" });
    }
}

export const deleteBYId = async (req, res) => {

    try {
        const { id } = req.params;

        if (!id) {
            const status = statusCodes.find((item) => item.code === 400);
            return res.status(status.code).json({ success: false, message: status.message, error: "ID not present" });
        }
        const response = await deletePostServices(id);

        if (!response) {
            const status = statusCodes.find((item) => item.code === 404);
            return res.status(status.code).json({ success: false, message: status.message, error: "No posts found" });
        }

        const status = statusCodes.find((item) => item.code === 200);
        res.status(status.code).json({ success: true, message: status.message, item: response });


    } catch (error) {
        console.error(error);
        const status = statusCodes.find((item) => item.code === 500);
        res.status(status.code).json({
            success: false, message: status.message, error: "Error deleting post"
        });
    }

}

export const updatePost = async (req, res) => {
    try {
        const { id } = req.params
        const { title, content } = req.body || {}
        const payload = {}
        if (title) payload.title = title
        if (content) payload.content = content
        if (!id) {
            const status = statusCodes.find((item) => item.code === 400);
            return res.status(status.code).json({ success: false, message: status.message, error: "ID not present" });
        }
        const response = await updatePostServices(id,payload);

        if (!response) {
            const status = statusCodes.find((item) => item.code === 404);
            return res.status(status.code).json({ success: false, message: status.message, error: "No posts found" });
        }
        const status = statusCodes.find((item) => item.code === 200);
        res.status(status.code).json({ success: true, message: status.message, item: response });


    } catch (error) {
        console.error(error);
        const status = statusCodes.find((item) => item.code === 500);
        res.status(status.code).json({
            success: false, message: status.message, error: "Error updating post"
        });
    }
}