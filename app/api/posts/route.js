import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  const posts = data.slice(0, 6);

  return NextResponse.json({ data: posts });
}
