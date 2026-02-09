import { blogPosts, blogCategories } from "@/utils/blogData";
import styles from "./styles.module.css";
import BlogHero from "@/components/blogHero";
import BlogGrid from "@/components/blogGrid";

export default function BlogPage() {
  return (
    <div className={styles.blogPage}>
      <BlogHero
        title="Blog & Insights"
        subtitle="Thought leadership on coaching, leadership, and professional development"
        description="Explore articles, insights, and practical strategies to help you grow as a leader and achieve your professional goals."
      />

      <BlogGrid posts={blogPosts} categories={blogCategories} />
    </div>
  );
}
