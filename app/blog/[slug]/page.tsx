import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, getRelatedPosts } from "@/utils/blogData";
import styles from "./styles.module.css";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.id);

  return (
    <div className={styles.blogPostPage}>
      <article className={styles.article}>
        <div className={styles.header}>
          <div className={styles.breadcrumb}>
            <Link href="/blog">Blog</Link>
            <span>/</span>
            <span>{post.category}</span>
          </div>

          <div className={styles.categoryBadge}>{post.category}</div>

          <h1 className={styles.title}>{post.title}</h1>

          <div className={styles.meta}>
            <div className={styles.author}>
              <div className={styles.authorAvatar}>{post.author.charAt(0)}</div>
              <div className={styles.authorInfo}>
                <span className={styles.authorName}>{post.author}</span>
                <div className={styles.postInfo}>
                  <span>
                    {new Date(post.publishedDate).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>

            <div className={styles.share}>
              <span>Share:</span>
              <button aria-label="Share on Twitter">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.46 6c-.85.38-1.78.64-2.75.76a4.8 4.8 0 0 0 2.1-2.66c-.92.55-1.95.95-3.03 1.17A4.76 4.76 0 0 0 11.57 9c0 .37.04.74.12 1.1-3.96-.2-7.47-2.1-9.82-4.98a4.76 4.76 0 0 0 1.48 6.36 4.74 4.74 0 0 1-2.16-.6v.07a4.76 4.76 0 0 0 3.82 4.67 4.76 4.76 0 0 1-2.15.08 4.77 4.77 0 0 0 4.45 3.3A9.56 9.56 0 0 1 1 20.47a13.5 13.5 0 0 0 7.29 2.14c8.75 0 13.54-7.25 13.54-13.54 0-.21 0-.41-.01-.61.93-.67 1.74-1.51 2.38-2.46z"
                    fill="currentColor"
                  />
                </svg>
              </button>
              <button aria-label="Share on LinkedIn">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
                    fill="currentColor"
                  />
                </svg>
              </button>
              <button aria-label="Share via Email">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className={styles.tags}>
          <span className={styles.tagsLabel}>Tags:</span>
          {post.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className={styles.relatedPosts}>
          <h2 className={styles.relatedTitle}>Related Articles</h2>
          <div className={styles.relatedGrid}>
            {relatedPosts.map((relatedPost) => (
              <Link
                key={relatedPost.id}
                href={`/blog/${relatedPost.slug}`}
                className={styles.relatedCard}
              >
                <div className={styles.relatedCategory}>
                  {relatedPost.category}
                </div>
                <h3 className={styles.relatedCardTitle}>{relatedPost.title}</h3>
                <p className={styles.relatedExcerpt}>{relatedPost.excerpt}</p>
                <div className={styles.relatedMeta}>
                  <span>
                    {new Date(relatedPost.publishedDate).toLocaleDateString(
                      "en-US",
                      { month: "short", day: "numeric" }
                    )}
                  </span>
                  <span>•</span>
                  <span>{relatedPost.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <div className={styles.backLink}>
        <Link href="/blog">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 12H5M5 12L12 19M5 12L12 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back to Blog
        </Link>
      </div>
    </div>
  );
}
