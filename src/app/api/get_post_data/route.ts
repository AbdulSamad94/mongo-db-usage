import { connectionString } from "@/lib/database/db_connect";
import { Posts } from "@/lib/database/models/post";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const GET = async () => {
    await mongoose.connect(connectionString)
    const postData = await Posts.find()

    return NextResponse.json({ result: postData, success: true })

}

export const POST = async (req: Request) => {
    const payload = await req.json()
    await mongoose.connect(connectionString)

    const postData = await new Posts(payload)

    const response = await postData.save()

    return NextResponse.json({ result: response, success: true })

}