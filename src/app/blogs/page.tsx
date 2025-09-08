"use client";

import { useState } from "react";
import Header from "@/components/header";
import BlogCard from "@/components/blog-card";
import Pagination from "@/components/pagination";

export default function Blogs() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  const demoBlogPosts = [
    {
      title: "Using MDX",
      description: "Lorem ipsum dolor sit amet",
      date: "Jan 10 2024",
      slug: "using-mdx",
    },
    {
      title: "Markdown Style Guide",
      description: "Here is a sample of some basic Markdown syntax.",
      date: "Jan 07 2024",
      slug: "markdown-style-guide",
    },
  ];

  // Calculate pagination
  const totalPages = Math.ceil(demoBlogPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = demoBlogPosts.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of the page when changing pages
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 pt-8 md:pt-10 pb-10 flex flex-col">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Blogs</h1>
          <p className="text-foreground/70">
            Here are some of my latest thoughts and tutorials.
          </p>
        </div>

        {/* Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Blog Posts Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {currentPosts.map((post, index) => (
                <BlogCard
                  key={index}
                  title={post.title}
                  description={post.description}
                  date={post.date}
                  slug={post.slug}
                />
              ))}
            </div>
          </div>

          {/* Pagination - bottom with spacing */}
          <div className="flex justify-center py-4 mt-auto">
            <Pagination
              currentPage={currentPage}
              totalPages={Math.max(totalPages, 1)}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
