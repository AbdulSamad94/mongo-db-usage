import { connectionString } from "@/lib/database/db_connect"
import { ImageSchema } from "@/lib/database/models/images"
import mongoose from "mongoose"
import { NextResponse } from "next/server"

export const GET = async () => {
    try {
        await mongoose.connect(connectionString)

        const Images = await ImageSchema.find().select('name data contentType')
        return NextResponse.json({ success: true, Images })
    }
    catch (err) {
        return NextResponse.json({ response: err, success: false })
    }
}