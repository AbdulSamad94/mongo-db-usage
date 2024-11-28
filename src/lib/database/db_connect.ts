const username = process.env.myUsername
const password = process.env.myPassword

if (!username || !password) {
    throw new Error("Please add credentials")
}

export const connectionString = `mongodb+srv://${username}:${password}@cluster0.difli.mongodb.net/post?retryWrites=true&w=majority&appName=Cluster0`