import React from 'react';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with Next.js 14",
      excerpt: "Learn how to build modern web applications with the latest Next.js features including App Router and Server Components.",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Web Development",
      slug: "getting-started-nextjs-14"
    },
    {
      id: 2,
      title: "TypeScript Best Practices",
      excerpt: "Discover essential TypeScript patterns and practices that will make your code more maintainable and robust.",
      date: "2024-01-10",
      readTime: "8 min read",
      category: "TypeScript",
      slug: "typescript-best-practices"
    },
    {
      id: 3,
      title: "Building Responsive UIs with Tailwind CSS",
      excerpt: "Master the art of creating beautiful, responsive user interfaces using Tailwind CSS utility classes.",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "CSS",
      slug: "responsive-uis-tailwind"
    }
  ];

  return (
    <section id="blog" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 bg-white/80 backdrop-blur-sm rounded-2xl p-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest Blog Posts
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I write about web development, programming tips, and technology trends. Here are my recent articles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white/90 backdrop-blur-sm rounded-lg overflow-hidden hover:shadow-lg transition-shadow border border-white/20"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                  <a href={`/blog/${post.slug}`}>
                    {post.title}
                  </a>
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                  <a
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/blog"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View All Posts
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;