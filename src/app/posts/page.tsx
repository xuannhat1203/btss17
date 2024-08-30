import React from "react";
import Image from "next/image";

const arr = [
  {
    id: 1,
    title: "My First Post",
    image:
      "https://images.unsplash.com/photo-1719937051058-63705ed35502?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "My Second Post",
    image:
      "https://images.unsplash.com/photo-1719937051058-63705ed35502?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "My Third Post",
    image:
      "https://images.unsplash.com/photo-1719937051058-63705ed35502?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "My Fourth Post",
    image:
      "https://images.unsplash.com/photo-1719937051058-63705ed35502?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "My Fifth Post",
    image:
      "https://images.unsplash.com/photo-1719937051058-63705ed35502?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    title: "My Sixth Post",
    image:
      "https://images.unsplash.com/photo-1719937051058-63705ed35502?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const metadata = {
  title: "Danh sách bài viết",
  description: "Nhất đẹp trai",
};

export default function PostListPage() {
  return (
    <section>
      <div className="p-6 bg-gray-50">
        <h3 className="text-2xl font-semibold mb-6">List Post</h3>
        <div className="grid grid-cols-3 gap-4">
          {arr.map((post) => (
            <div key={post.id} className="bg-white p-4 rounded-lg shadow-md">
              <Image
                src={post.image}
                alt={post.title}
                width={150}
                height={100}
                className="rounded-lg mb-3"
              />
              <h4 className="text-lg font-medium">{post.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
