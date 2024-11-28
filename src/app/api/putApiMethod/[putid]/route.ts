import { connectionString } from "@/lib/database/db_connect";
import { Posts } from "@/lib/database/models/post";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

type PutValue = {
    params: {
        putid: string;
    };
};

export const PUT = async (req: Request, value: PutValue) => {
    const postid = value.params.putid
    const id = { _id: postid }

    const payload = await req.json()

    await mongoose.connect(connectionString)

    const finalresult = await Posts.findOneAndUpdate(id, payload)

    return NextResponse.json({ result: finalresult, success: true })
}

export const GET = async (req: Request, value: PutValue) => {
    const postid = value.params.putid
    const id = { _id: postid }

    await mongoose.connect(connectionString)

    const finalresult = await Posts.findById(id)
    return NextResponse.json({ result: finalresult, success: true })
}

export const DELETE = async (req: Request, value: PutValue) => {
    const postid = value.params.putid
    const id = { _id: postid }

    await mongoose.connect(connectionString)

    const finalResult = await Posts.deleteOne(id)
    return NextResponse.json({ finalResult, success: true })
}