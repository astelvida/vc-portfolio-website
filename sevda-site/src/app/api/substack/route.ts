import { NextResponse } from "next/server";
import { getPosts } from "@/lib/substack";

export async function GET() {
  try {
    const posts = await getPosts();
    return NextResponse.json(posts);
  } catch {
    return NextResponse.json([]);
  }
}
