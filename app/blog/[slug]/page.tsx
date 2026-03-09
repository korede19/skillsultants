import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, getRelatedPosts } from "@/utils/blogData";
import styles from "./styles.module.css";
import ShareButtons from "@/components/shareButtons";

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
              <ShareButtons title={post.title} excerpt={post.excerpt} />
            </div>
          </div>
        </div>

        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
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
