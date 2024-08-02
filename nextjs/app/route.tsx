import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI; // Your MongoDB connection string
const client = new MongoClient("uri");

export async function POST(request: { json: () => PromiseLike<{ email: any; }> | { email: any; }; }) {
  const { email } = await request.json();

  if (!email || !email.includes("@")) {
    return NextResponse.json(
      { message: "Invalid email address" },
      { status: 400 }
    );
  }

  try {
    await client.connect();
    const database = client.db("admin");
    const users = database.collection("users");

    const result = await users.insertOne({ email });

    return NextResponse.json(
      { message: "User signed up", userId: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  } finally {
    await client.close();
  }
}
