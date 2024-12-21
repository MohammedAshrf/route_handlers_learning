"use client";

import { usePathname, useRouter } from "next/navigation";

export default function Button({ id }) {
  const router = useRouter();
  const pathname = usePathname();

  function handleClick() {
    router.push(`/posts/${id}`);
  }

  return (
    <div>
      {pathname === "/posts" && (
        <button onClick={() => handleClick()}>view post</button>
      )}
    </div>
  );
}
