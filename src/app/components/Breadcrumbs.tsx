import Link from "next/link";
import React from "react";

const Breadcrumbs = ({
  paths,
}: {
  paths: { name: string; href: string }[];
}) => {
  return (
    <nav aria-label="Breadcrumb">
      <ol>
        {paths.map((path, index) => (
          <li key={index}>
            {index < paths.length - 1 ? (
              <Link href={path.href}>{path.name}</Link>
            ) : (
              <span>{path.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
