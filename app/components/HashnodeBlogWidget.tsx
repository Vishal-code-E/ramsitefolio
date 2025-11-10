'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { HashnodePost, BlogWidgetProps } from '../../types/hashnode';
import { fetchHashnodePosts, formatPublishedDate, getReadTimeText, truncateText } from '../../lib/hashnode';

interface BlogPostCardProps {
  post: HashnodePost;
  showTags?: boolean;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post, showTags = true }) => {
  const handleClick = () => {
    window.open(post.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <article 
      className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1"
      onClick={handleClick}
    >
      {post.coverImage && (
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={post.coverImage.url}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
          <span>{formatPublishedDate(post.publishedAt)}</span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            {getReadTimeText(post.readTimeInMinutes)}
          </span>
        </div>
        
        <h3 className="text-lg font-semibold text-white mb-3 line-clamp-2 group-hover:text-blue-300 transition-colors duration-300">
          {post.title}
        </h3>
        
        <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
          {truncateText(post.brief)}
        </p>
        
        {showTags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag.id}
                className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30"
              >
                {tag.name}
              </span>
            ))}
            {post.tags.length > 3 && (
              <span className="px-2 py-1 bg-gray-500/20 text-gray-400 text-xs rounded-full border border-gray-500/30">
                +{post.tags.length - 3}
              </span>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

const LoadingCard: React.FC = () => (
  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden animate-pulse">
    <div className="w-full h-48 bg-gray-700/50" />
    <div className="p-6 space-y-3">
      <div className="flex justify-between">
        <div className="h-3 bg-gray-700/50 rounded w-20" />
        <div className="h-3 bg-gray-700/50 rounded w-16" />
      </div>
      <div className="h-5 bg-gray-700/50 rounded w-3/4" />
      <div className="space-y-2">
        <div className="h-3 bg-gray-700/50 rounded" />
        <div className="h-3 bg-gray-700/50 rounded w-5/6" />
        <div className="h-3 bg-gray-700/50 rounded w-4/6" />
      </div>
      <div className="flex gap-2">
        <div className="h-6 bg-gray-700/50 rounded-full w-16" />
        <div className="h-6 bg-gray-700/50 rounded-full w-20" />
      </div>
    </div>
  </div>
);

const ErrorState: React.FC<{ error: string; onRetry: () => void }> = ({ error, onRetry }) => (
  <div className="col-span-full bg-red-500/10 border border-red-500/20 rounded-lg p-8 text-center">
    <div className="text-red-400 mb-4">
      <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
      </svg>
      <h3 className="text-lg font-semibold">Failed to load blog posts</h3>
    </div>
    <p className="text-gray-400 mb-4">{error}</p>
    <button
      onClick={onRetry}
      className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-300"
    >
      Try Again
    </button>
  </div>
);

const HashnodeBlogWidget: React.FC<BlogWidgetProps> = ({ 
  className = '', 
  showTags = true, 
  maxPosts = 5 
}) => {
  const [posts, setPosts] = useState<HashnodePost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadPosts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const fetchedPosts = await fetchHashnodePosts({ first: maxPosts });
      setPosts(fetchedPosts);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  }, [maxPosts]);

  useEffect(() => {
    loadPosts();
  }, [loadPosts]);

  return (
    <section className={`w-full ${className}`}>
      <div className="mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Latest Blog Posts
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Insights on AI, technology, and innovation from my Hashnode blog
        </p>
        <div className="w-20 h-1 bg-linear-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
      </div>

      {error ? (
        <ErrorState error={error} onRetry={loadPosts} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            // Show loading skeletons
            Array.from({ length: maxPosts }, (_, i) => (
              <LoadingCard key={i} />
            ))
          ) : posts.length > 0 ? (
            // Show actual posts
            posts.map((post) => (
              <BlogPostCard 
                key={post.id} 
                post={post} 
                showTags={showTags} 
              />
            ))
          ) : (
            // No posts found
            <div className="col-span-full text-center py-12 text-gray-400">
              <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z" clipRule="evenodd" />
              </svg>
              <p className="text-lg">No blog posts found</p>
            </div>
          )}
        </div>
      )}

      {!loading && !error && posts.length > 0 && (
        <div className="text-center mt-12">
          <a
            href="https://agenticaiavataq.hashnode.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
          >
            View All Posts
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      )}
    </section>
  );
};

export default HashnodeBlogWidget;