import mongoose from "mongoose";

const ImagesModel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    data: {
        type: Buffer,
        required: true
    },
    contentType: {
        type: String,
        required: true
    }
})

export const ImageSchema = mongoose.models.images || mongoose.model('images', ImagesModel)