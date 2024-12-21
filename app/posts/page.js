import Post from "@/components/Post";
import React from "react";

async function getPosts() {
  const res = await fetch(`${process.env.MAIN_API_URL}/api/posts`);
  const data = await res.json();

  return data;
}

export default async function page() {
  const { data } = await getPosts();
  console.log(data);

  return (
    <div>
      <h1>Posts</h1>
      {data.map((post) => (
        <Post key={post.id} {...post} />
      ))}
      <Post />
    </div>
  );
}
