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

export default function BlogGrid({ posts }: BlogGridProps) {
  const [selectedCategory] = useState("All Posts");

  const filteredPosts =
    selectedCategory === "All Posts"
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  return (
    <section className={styles.blogGrid}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {filteredPosts.map((post, index) => (
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

                <div className={styles.tags}>
                  {post.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>

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
      </div>
    </section>
  );
}
