import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = await params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();

  return NextResponse.json({ data });
}
