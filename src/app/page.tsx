"use client";
import React from "react";
import Breadcrumbs from "./components/Breadcrumbs";

const MyPage2 = () => {
  const paths = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
  ];
  return (
    <div>
      <Breadcrumbs paths={paths} />
      <h1>Home</h1>
    </div>
  );
};

export default MyPage2;
