"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const slugMap = [
  { id: 1, title: "my-first-post" },
  { id: 2, title: "my-second-post" },
  { id: 3, title: "my-third-post" },
  { id: 4, title: "my-fourth-post" },
  { id: 5, title: "my-fifth-post" },
  { id: 6, title: "my-sixth-post" },
];

const arr = [
  {
    id: 1,
    title: "My First Post",
    image:
      "https://images.unsplash.com/photo-1719937051058-63705ed35502?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "This is a description for the first post.",
  },
  {
    id: 2,
    title: "My Second Post",
    image:
      "https://images.unsplash.com/photo-1719937051058-63705ed35502?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "This is a description for the second post.",
  },
  {
    id: 3,
    title: "My Third Post",
    image:
      "https://images.unsplash.com/photo-1719937051058-63705ed35502?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "This is a description for the third post.",
  },
  {
    id: 4,
    title: "My Fourth Post",
    image:
      "https://images.unsplash.com/photo-1719937051058-63705ed35502?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "This is a description for the fourth post.",
  },
  {
    id: 5,
    title: "My Fifth Post",
    image:
      "https://images.unsplash.com/photo-1719937051058-63705ed35502?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "This is a description for the fifth post.",
  },
  {
    id: 6,
    title: "My Sixth Post",
    image:
      "https://images.unsplash.com/photo-1719937051058-63705ed35502?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "This is a description for the sixth post.",
  },
];

interface Post {
  id: number;
  title: string;
  image: string;
  description: string; // Added description field
}

export default function Page() {
  const [postItem, setPostItem] = useState<Post[] | null>(null);
  const pathName = usePathname();
  const router = useRouter();
  const slug = pathName.split("/").filter(Boolean);

  useEffect(() => {
    if (slug.length > 1) {
      const slugPart = slug[1];
      const postId = Number(slugPart);
      const correctSlug = slugMap.find((entry) => entry.id === postId)?.title;
      if (correctSlug) {
        const newUrl = `/posts/${correctSlug}`;
        if (pathName !== newUrl) {
          router.replace(newUrl);
        }
      }
    }
  }, [pathName, slug, router]);

  useEffect(() => {
    if (slug.length > 1) {
      const slugPart = slug[1];
      const find = slugMap.find((p) => p.title === slugPart);
      if (find) {
        const findPost = arr.filter((p) => find.id === p.id);
        if (findPost.length > 0) {
          document.title = findPost[0].title;
          setPostItem(findPost);
        }
      }
    }
  }, [slug]);

  return (
    <div className="p-4">
      {postItem ? (
        postItem.length > 0 && (
          <div>
            <h1 className="text-2xl font-bold">{postItem[0].title}</h1>
            <img
              src={postItem[0].image}
              alt={postItem[0].title}
              className="my-4 w-full max-w-lg rounded-lg"
            />
            <p className="text-gray-700">{postItem[0].description}</p>
          </div>
        )
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
