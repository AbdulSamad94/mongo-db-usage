import mongoose from 'mongoose'

const postModel = new mongoose.Schema({
    author: String,
    date: String,
    postTitle: String,
    postDescription: String,
})

export const Posts = mongoose.models.posts || mongoose.model('posts', postModel)