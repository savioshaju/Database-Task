import { statusCodes } from "../../ExpressJS backend/helpers/userHelper.js";

export const validatePost = (req, res, next) => {
    const { title, content } = req.body ||{}

    const status = statusCodes.find((item) => item.code === 400);
    const errors = [];
    if (!title) errors.push("Title is required");
    if (!content) errors.push("Content is required");

    if (errors.length > 0) {
        return res.status(status.code).json({ sucess: false, errors, message: status.message })
    }

    next();

}