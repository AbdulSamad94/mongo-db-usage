import { NextResponse } from "next/server"
import { writeFile } from "fs/promises"

export const POST = async (req: Request) => {
    const data = await req.formData()
    const file = data.get('file') as File | null

    if (!file) {
        return NextResponse.json({ success: false })
    }

    const bufferData = await file.arrayBuffer()
    const buffer = Buffer.from(bufferData)

    const path = `./public/uploads${file.name}`

    try {
        await writeFile(path, buffer)
        return NextResponse.json({ response: "Succesfully uploaded", success: true })
    }

    catch (error) {
        console.log(error)
        return NextResponse.json({ success: false })
    }
}