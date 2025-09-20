import Post from "../models/postModel.js"

export const createPostServices = async (postDetails) => {
    try {
        const newPost = new Post(postDetails)
        const post = await newPost.save()
        console.log(post)
        return post
    } catch (error) {
        console.log(error)
    }
}

export const getPostServices = async () => {
    try {
        const post = await Post.find({})
        console.log(post)
        return post

    } catch (error) {
        console.log(error)
    }
}
export const deletePostServices = async (id)=>{
    try {
        const post = await Post.findByIdAndDelete(id)
        console.log(post)
        return post
    } catch (error) {
        console.log(error)
    }
}

export const updatePostServices = async(id,postDetails)=>{
    try {
        const post = await Post.findByIdAndUpdate(id,postDetails)
        return post
    } catch (error) {
         console.log(error)
    }
}