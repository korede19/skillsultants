"use client";
import { useState } from "react";
import Link from "next/link";
import { BlogPost } from "@/utils/blogData";
import styles from "./styles.module.css";
import Image from "next/image";

interface BlogGridProps {
  posts: BlogPost[];
  categories: string[];
}

const POSTS_PER_PAGE = 6;

export default function BlogGrid({ posts }: BlogGridProps) {
  const [selectedCategory] = useState("All Posts");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts =
    selectedCategory === "All Posts"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getPageNumbers = () => {
    const pages: (number | "...")[] = [];
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    pages.push(1);
    if (currentPage > 3) pages.push("...");
    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      pages.push(i);
    }
    if (currentPage < totalPages - 2) pages.push("...");
    pages.push(totalPages);
    return pages;
  };

  return (
    <section className={styles.blogGrid}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {paginatedPosts.map((post, index) => (
            <article
              key={post.id}
              className={styles.blogCard}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.imagePlaceholder}>
                <Image
                  src={post.featuredImage || "/placeholder-image.png"}
                  alt={post.title}
                  fill
                  className={styles.image}
                />
              </div>

              <div className={styles.cardContent}>
                <div className={styles.meta}>
                  <span className={styles.date}>
                    {new Date(post.publishedDate).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className={styles.readTime}>{post.readTime}</span>
                </div>

                <h2 className={styles.title}>
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>

                <p className={styles.excerpt}>{post.excerpt}</p>

                <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                  Read Article
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className={styles.emptyState}>
            <p>No posts found in this category yet.</p>
          </div>
        )}

        {totalPages > 1 && (
          <div className={styles.pagination}>
            <button
              className={styles.paginationArrow}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              aria-label="Previous page"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M19 12H5M5 12L12 19M5 12L12 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className={styles.pageNumbers}>
              {getPageNumbers().map((page, i) =>
                page === "..." ? (
                  <span key={`ellipsis-${i}`} className={styles.ellipsis}>
                    …
                  </span>
                ) : (
                  <button
                    key={page}
                    className={`${styles.pageButton} ${
                      currentPage === page ? styles.pageButtonActive : ""
                    }`}
                    onClick={() => handlePageChange(page as number)}
                    aria-label={`Page ${page}`}
                    aria-current={currentPage === page ? "page" : undefined}
                  >
                    {page}
                  </button>
                )
              )}
            </div>

            <button
              className={styles.paginationArrow}
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              aria-label="Next page"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
