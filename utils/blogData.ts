export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  tags: string[];
  publishedDate: string;
  readTime: string;
  featuredImage?: string;
}

export const blogCategories = [
  "All Posts",
  "Leadership",
  "Career Growth",
  "Business Strategy",
  "Personal Development",
  "Coaching Insights",
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Power of Transformational Leadership in Today's Business World",
    slug: "power-of-transformational-leadership",
    excerpt:
      "Discover how transformational leadership can drive organizational change and inspire teams to achieve extraordinary results in an ever-evolving business landscape.",
    content: `
      <p>In today's rapidly changing business environment, transformational leadership has become more crucial than ever. This leadership style goes beyond traditional management approaches, focusing on inspiring and motivating teams to exceed their own expectations.</p>

      <h2>What is Transformational Leadership?</h2>
      <p>Transformational leadership is a leadership approach that causes change in individuals and social systems. It creates valuable and positive change in followers with the end goal of developing followers into leaders.</p>

      <h2>Key Characteristics of Transformational Leaders</h2>
      <p>Transformational leaders share several key traits:</p>
      <ul>
        <li>Visionary thinking and strategic planning</li>
        <li>Ability to inspire and motivate others</li>
        <li>Strong communication skills</li>
        <li>Emotional intelligence and empathy</li>
        <li>Commitment to continuous learning and development</li>
      </ul>

      <h2>Implementing Transformational Leadership</h2>
      <p>To become a transformational leader, start by developing a clear vision for your organization or team. Communicate this vision effectively and consistently, ensuring everyone understands their role in achieving it. Foster an environment of trust and open communication, where team members feel valued and empowered to contribute their ideas.</p>

      <p>Remember, transformational leadership is not about wielding power, but about empowering others to reach their full potential while driving organizational success.</p>
    `,
    author: "Oluwatoyin Ademola",
    category: "Leadership",
    tags: ["Leadership", "Transformation", "Management", "Business Growth"],
    publishedDate: "2026-01-15",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Navigating Career Transitions: A Coach's Perspective",
    slug: "navigating-career-transitions",
    excerpt:
      "Career transitions can be challenging yet rewarding. Learn the essential strategies for successfully navigating professional changes and emerging stronger.",
    content: `
      <p>Career transitions are inevitable in today's dynamic professional landscape. Whether you're moving to a new role, changing industries, or stepping into leadership, these transitions require careful navigation and strategic planning.</p>

      <h2>Understanding Career Transitions</h2>
      <p>A career transition is more than just changing jobs – it's a shift in your professional identity, responsibilities, and often your entire approach to work. These changes can be exciting, but they also come with challenges and uncertainties.</p>

      <h2>Strategies for Successful Transitions</h2>
      <p>Here are proven strategies to help you navigate career transitions effectively:</p>
      <ul>
        <li>Assess your current skills and identify gaps</li>
        <li>Build a strong professional network</li>
        <li>Seek mentorship and guidance</li>
        <li>Embrace continuous learning</li>
        <li>Maintain confidence while staying humble</li>
      </ul>

      <h2>The Role of Coaching</h2>
      <p>Professional coaching can be invaluable during career transitions. A coach provides objective guidance, helps you identify blind spots, and supports you in developing strategies tailored to your unique situation.</p>

      <p>Remember, every transition is an opportunity for growth. Embrace the journey, stay committed to your goals, and don't hesitate to seek support when needed.</p>
    `,
    author: "Oluwatoyin Ademola",
    category: "Career Growth",
    tags: ["Career", "Transitions", "Professional Development", "Growth"],
    publishedDate: "2026-01-20",
    readTime: "6 min read",
  },
  {
    id: 3,
    title: "Building Connectional Intelligence in the Workplace",
    slug: "building-connectional-intelligence",
    excerpt:
      "Connectional intelligence is the key to thriving in our interconnected world. Learn how to develop this crucial skill for professional success.",
    content: `
      <p>In an increasingly interconnected world, connectional intelligence – the ability to combine different thinking styles and disciplines to create breakthrough ideas – has become a critical skill for success.</p>

      <h2>What is Connectional Intelligence?</h2>
      <p>Connectional intelligence goes beyond traditional intelligence metrics. It's about making connections across diverse fields, people, and ideas to create innovative solutions and drive meaningful change.</p>

      <h2>The Five Types of Connectors</h2>
      <p>Research identifies five types of connectors:</p>
      <ul>
        <li>Thinkers: Connect ideas and concepts</li>
        <li>Enablers: Connect people and resources</li>
        <li>Activators: Connect teams and initiatives</li>
        <li>Creators: Connect disciplines and innovations</li>
        <li>Influencers: Connect communities and movements</li>
      </ul>

      <h2>Developing Your Connectional Intelligence</h2>
      <p>To enhance your connectional intelligence, practice these strategies: Cultivate curiosity across multiple domains, build diverse networks, embrace collaborative problem-solving, and seek opportunities to work on cross-functional projects.</p>

      <p>In today's complex business environment, the ability to connect people, ideas, and resources is what separates good leaders from great ones.</p>
    `,
    author: "Oluwatoyin Ademola",
    category: "Business Strategy",
    tags: ["Innovation", "Collaboration", "Intelligence", "Networking"],
    publishedDate: "2026-01-25",
    readTime: "7 min read",
  },
];

// Helper function to get posts by category
export const getPostsByCategory = (category: string): BlogPost[] => {
  if (category === "All Posts") {
    return blogPosts;
  }
  return blogPosts.filter((post) => post.category === category);
};

// Helper function to get a single post by slug
export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug);
};

// Helper function to get related posts
export const getRelatedPosts = (
  currentPostId: number,
  limit: number = 3
): BlogPost[] => {
  const currentPost = blogPosts.find((post) => post.id === currentPostId);
  if (!currentPost) return [];

  return blogPosts
    .filter(
      (post) =>
        post.id !== currentPostId &&
        (post.category === currentPost.category ||
          post.tags.some((tag) => currentPost.tags.includes(tag)))
    )
    .slice(0, limit);
};
