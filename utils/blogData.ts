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
    title: "The 3 ways Growth & Visualization team up to create value.",
    featuredImage: "/assets/blog-1.jpg",
    slug: "the-3-ways-growth-and-visualization-team-up-to-create-value",
    excerpt:
      "The time to embrace your inner growth hacker is right now, so grab some popcorn because we are diving into the three ways growth and visualization team up to create serious value! 📈💰",
    content: `
      <p>The time to embrace your inner growth hacker is right now, so grab some popcorn because we are diving into the three ways growth and visualization team up to create serious value! 📈💰</p>

      <h2>Way 1 - Growth Spurts</h2>
      <p>Have you ever seen a plant grow a foot overnight? Neither have I, but that is the kind of explosive growth we are talking about here! When your ideas and efforts bloom like Jack's beanstalk, the value shoots through the roof faster than you can say 'ROI'!</p>

      <h2>Way 2 - Visuals Speak Louder Than Words</h2>
      <p>Who needs a crystal ball when you have data visualization and infographics to paint the picture? Numbers and trends come alive in Technicolor, making even the most boring stats look like a Pixar movie! 🎥📊</p>

      <h2> Way 3 - A Dash of Humour</h2>
      <p>They say laughter is the best medicine, but it is also the secret sauce to making growth and  visualization go from 'meh' to 'HECK YEAH!' Imagine your quarterly report telling you a joke –  now that is a board meeting, we would all look forward to! 😄💼</p>

    <p>So, fellow LinkedIn wizards, buckle up, sharpen those graphs, and get ready to ride the growth and visualization rollercoaster to Value Town! 🎢💼💎</p>
    `,
    author: "Oluwatoyin Ademola",
    category: "Growth",
    tags: ["Growth", "Connection", "Professional Development", "Let's talk"],
    publishedDate: "2026-03-05",
    readTime: "3 min read",
  },
  {
    id: 2,
    title:
      "From Growth to Great: 5 Strategies to Transform Contacts into Impactful Stakeholders",
    featuredImage: "/assets/blog-2.jpg",
    slug: "from-growth-to-great",
    excerpt:
      "In today’s fast-paced business environment, cultivating relationships that evolve from mere contacts to influential stakeholders is critical for sustainable success.",
    content: `
      <p>In today’s fast-paced business environment, cultivating relationships that evolve from mere contacts to influential stakeholders is critical for sustainable success.</p>
      <ul>
        <li>Build Authentic Connections: Start by fostering genuine relationships with  
      your contacts.</li>
        <li> Provide Value Continuously: Consistently offer value through knowledge 
      sharing, resources, or support.</li>
        <li>Leverage Social Media Engagement: Utilize platforms like LinkedIn to   
      connect.</li>
        <li>Identify and Address Needs: Take the time to understand the specific needs 
      and challenges of your contacts.</li>
        <li>Encourage Collaborative Opportunities: Facilitate connections between your 
      contacts or explore collaborative projects that benefit all parties involved.</li>
      </ul>

      <p>Transforming contacts into stakeholders is not just about networking; it's about building a community of proactively engaged individuals committed to mutual growth. By implementing these strategies, you can cultivate a network that drives innovation, collaboration, and success.</p>
    `,
    author: "Oluwatoyin Ademola",
    category: "Business Growth",
    tags: ["Business Growth", "Networking", "Stakeholder Engagement"],
    publishedDate: "2026-03-05",
    readTime: "2 min read",
  },
  {
    id: 3,
    title: "Growth vs. Real Growth: What’s the Difference?",
    featuredImage: "/assets/blog-3.jpeg",
    slug: "growth-vs-real-growth",
    excerpt:
      "Its quite interesting to note that despite the rapid fast-paced business landscape, many companies tout growth as a key indicator of success. But here is my question, are we confusing mere growth with real growth? ",
    content: `
      <p>Its quite interesting to note that despite the rapid fast-paced business landscape, many companies tout growth as a key indicator of success. But here is my question, are we confusing mere growth with real growth? Growth often refers to superficial metrics like revenue increases or expanding headcounts. However, Real Growth focuses on sustainable progress: enhancing employee engagement, fostering innovation, and investing in customer relationships. </p>

      <p>As leaders, we must shift our mindset. It’s essential to differentiate between mere growth and real growth. </p>

      <p>Here are three key distinctions:</p>
      <ol>
        <li> Sustainability- While growth may look impressive on paper, real growth is built on a sustainable foundation. It involves creating value that can be maintained over time, rather than relying solely on temporary spikes or trends.</li>
        <li>Impact: Growth can be quantified by metrics like revenue increases or user acquisition. However, real growth goes beyond numbers; it fosters meaningful relationships with customers, enhances employee engagement, and contributes positively to the community.</li>
        <li>Innovation: Growth might stem from expanding existing operations or markets. In contrast, real growth thrives on innovation, encouraging companies to explore new ideas, adapt to changes, and invest in continuous improvement.</li>
      </ol>
      
      <p>In a nutshell, focusing on real growth equips organizations to thrive in the long run, fostering resilience and adaptability. Let’s aim for growth that genuinely transforms and sustains! Let’s celebrate those companies that prioritize long-term value over short-term gains.</p>
    `,
    author: "Oluwatoyin Ademola",
    category: "Growth",
    tags: ["Business Growth", "Networking", "Stakeholder Engagement"],
    publishedDate: "2026-03-05",
    readTime: "2 min read",
  },
  {
    id: 4,
    title: "How viewing everything as a test makes life more interesting",
    featuredImage: "/assets/blog-4.jpg",
    slug: "how-viewing-everything-as-a-test-makes-life-more-interesting",
    excerpt:
      "A year ago, I found myself at a crossroads, uncertain and overwhelmed by doubts. It was then that a saying from a mentor struck a chord with me: ‘Life can either happen to you or with you’...  ",
    content: `
      <p>A year ago, I found myself at a crossroads, uncertain and overwhelmed by doubts. It was then that a saying from a mentor struck a chord with me: ‘Life can either happen to you or with you’. In my musings , I  developed  a powerful mindset shift: viewing life as a series of tests. I decided that life is a series of experiments, and every experience is an opportunity to learn and grow.  </p>

      <p>By embracing the mindset of viewing life as a series of tests, I transformed mundane moments into exciting challenges that changed the game for me.</p>
    <h4>Why does this Mindset Matter?</h4>
      <p>Approaching life with curiosity shifts our focus from fear of failure to the thrill of discovery. Every setback becomes a valuable lesson, fostering resilience, creativity, and a willingness to take risks.</p>
      <p>Practical Tips to Implement This Mindset:</p>
      <ol>
        <li> Reframe Challenges: View obstacles as tests of your skills and adaptability.</li>
        <li>Celebrate Small Wins: Acknowledge every success, no matter how minor.</li>
        <li>Seek Feedback: Treat feedback as data to analyze and improve upon.</li>
        <li>Stay Curious: Cultivate a sense of wonder and be open to unexpected outcomes.</li>
      </ol>
      
      <p>By embracing life as a test, we empower ourselves to navigate personal and professional complexities. Let’s challenge ourselves to view every day as a new experiment—one that can lead to unexpected insights and endless possibilities!</p>

      <p>Your Turn to Test - The next time you face a challenge, ask yourself: “What is this teaching me?” What tests have you faced in your journey? Share your experiences below!</p>
    `,
    author: "Oluwatoyin Ademola",
    category: "Growth Mindset",
    tags: ["Life as a Test", "Growth Mindset", "Continous Learning"],
    publishedDate: "2026-03-05",
    readTime: "2 min read",
  },
  {
    id: 5,
    title: "Unlocking Growth: The Power of Relationship Currency🌟",
    featuredImage: "/assets/blog-5.jpg",
    slug: "unlocking-growth-the-power-of-relationship-currency",
    excerpt:
      "The truth be told, even in today’s interconnected business world, there are two types of organizational currencies- Performance currency and Relationship Currency... ",
    content: `
      <p>The truth be told, even in today’s interconnected business world, there are two types of organizational currencies- Performance currency and Relationship Currency. However the game changer is your Relationship Currency because today, building and managing relationships is more crucial than ever. </p>

      <p>Here are 5 Ways Relationship Currency Leads to Growth:</p>
      <ol>
        <li>Trust Building: Strong relationships foster trust, making collaboration more effective and efficient.</li>
        <li>Increased Opportunities: Networking opens doors! Your connections can lead to new partnerships or business opportunities. So, Network Intelligently.</li>
        <li>Enhanced Innovation: Diverse perspectives from your super connectors ( if you have them )  and relationships can spark creativity and drive innovation within your team.</li>
        <li>Resilience in Challenges: A strong network can provide support and resources during tough times, helping you to navigate challenges more effectively.</li>
        <li>Mutual Growth*: Investing in your relationships encourages reciprocity, leading to shared success and growth for all parties involved.</li>
      </ol>
    `,
    author: "Oluwatoyin Ademola",
    category: "Relationship Building",
    tags: ["Relationship Building", "Networking", "Leadership"],
    publishedDate: "2026-03-05",
    readTime: "1 min read",
  },
  {
    id: 6,
    title: "How Feelings Drive Success: The Unseen Force Behind Achievements",
    featuredImage: "/assets/blog-6.webp",
    slug: "how-feelings-drive-success-the-unseen-force-behind-achievements",
    excerpt:
      "In the realm of business, numbers and strategies are essential, but there's a critical, often overlooked element that drives success: feelings",
    content: `
      <p>In the realm of business, numbers and strategies are essential, but there's a critical, often overlooked element that drives success: feelings.</p>
      <p>Emotions influence decision-making and shape experiences, and harnessing this power can set you apart in a competitive landscape.</p>

      <p>Why do feelings matter in driving success?</p>
      <ol>
        <li>Motivation and Morale- Emotions play a significant role in employee engagement</li>
        <li>Customer Loyalty- A positive emotional connection with customers fosters loyalty. </li>
        <li>Resilience and Adaptability- A strong emotional foundation helps teams navigate challenges</li>
      </ol>

      <p>A few quotes to drive the point home;</p>
    <p>"We don’t make commercials. We don’t sell your product. We tell stories that make the right audience fall in love with you” – Pat Flynn 
<br /><br />
“Building a successful business is no longer about B2B or B2C its about P2P. Those people-to-people relationships “Pat Flynn 
 <br /><br />
Let's explore this further! * How are you leveraging feelings to drive success within your organization? </p>


    `,
    author: "Oluwatoyin Ademola",
    category: "Emotional Intelligence",
    tags: ["Emotional Intelligence", "Business Success", "Leadership"],
    publishedDate: "2026-03-05",
    readTime: "2 min read",
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
