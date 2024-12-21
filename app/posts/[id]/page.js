import Post from "@/components/Post";
import React from "react";

async function getPost(id) {
  const res = await fetch(`${process.env.MAIN_API_URL}/api/posts/${id}`);
  const data = await res.json();

  return data;
}

export default async function page({ params }) {
  const { id } = await params;
  //   console.log(id);

  const { data: post } = await getPost(id);
  //   console.log(post);

  return (
    <div>
      <Post key={post.id} {...post} />
    </div>
  );
}
