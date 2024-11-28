import { connectionString } from "@/lib/database/db_connect";
import { ImageSchema } from "@/lib/database/models/images";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
    try {
        await mongoose.connect(connectionString)

        const data = await req.formData()
        const file = data.get('file') as File | null

        if (!file) {
            return NextResponse.json({ success: false })
        }

        const bufferData = await file.arrayBuffer()
        const buffer = Buffer.from(bufferData)

        const newImg = new ImageSchema({
            name: file.name,
            data: buffer,
            contentType: file.type
        })
        await newImg.save()

        return NextResponse.json({ response: "Succesfully updated", success: true })
    }
    catch (err) {
        alert(err)
        return NextResponse.json({ response: "uploading failed", success: false })
    }
}