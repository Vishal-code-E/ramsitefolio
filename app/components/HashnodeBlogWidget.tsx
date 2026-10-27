'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ExternalLink, Clock, RefreshCw, BookOpen, ArrowRight } from 'lucide-react';
import { HashnodePost, BlogWidgetProps } from '../../types/hashnode';

const BLOG_URL = 'https://agenticaiavataq.hashnode.dev';

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

function readTime(minutes: number): string {
  if (minutes < 1) return '< 1 min';
  return `${Math.round(minutes)} min read`;
}

function truncate(text: string, max = 150): string {
  if (text.length <= max) return text;
  return text.substring(0, max).replace(/\s+\S*$/, '') + '…';
}

const BlogPostCard: React.FC<{ post: HashnodePost; showTags?: boolean }> = ({
  post,
  showTags = true,
}) => (
  <article
    onClick={() => window.open(post.url, '_blank', 'noopener,noreferrer')}
    className="group flex flex-col bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:bg-white/10 hover:border-blue-500/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-950/30"
  >
    {post.coverImage && (
      <div className="relative w-full h-44 overflow-hidden shrink-0">
        <Image
          src={post.coverImage.url}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
    )}

    <div className="flex flex-col flex-1 p-5 gap-3">
      <div className="flex items-center justify-between text-xs text-gray-400">
        <span>{formatDate(post.publishedAt)}</span>
        <span className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {readTime(post.readTimeInMinutes)}
        </span>
      </div>

      <h3 className="text-base font-semibold text-white line-clamp-2 group-hover:text-blue-300 transition-colors leading-snug">
        {post.title}
      </h3>

      <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 flex-1">
        {truncate(post.brief)}
      </p>

      {showTags && post.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 pt-1">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag.id}
              className="px-2 py-0.5 bg-blue-500/15 text-blue-300 text-xs rounded-full border border-blue-500/20"
            >
              {tag.name}
            </span>
          ))}
        </div>
      )}

      <div className="flex items-center gap-1 text-xs text-blue-400 font-medium pt-1 group-hover:gap-2 transition-all">
        <span>Read article</span>
        <ExternalLink className="w-3 h-3" />
      </div>
    </div>
  </article>
);

const SkeletonCard: React.FC = () => (
  <div className="flex flex-col bg-white/5 border border-white/10 rounded-xl overflow-hidden animate-pulse">
    <div className="w-full h-44 bg-gray-800/60" />
    <div className="p-5 space-y-3">
      <div className="flex justify-between">
        <div className="h-3 bg-gray-700/60 rounded w-20" />
        <div className="h-3 bg-gray-700/60 rounded w-16" />
      </div>
      <div className="h-4 bg-gray-700/60 rounded w-4/5" />
      <div className="h-3 bg-gray-700/60 rounded w-full" />
      <div className="h-3 bg-gray-700/60 rounded w-5/6" />
      <div className="flex gap-1.5">
        <div className="h-5 bg-gray-700/60 rounded-full w-14" />
        <div className="h-5 bg-gray-700/60 rounded-full w-16" />
      </div>
    </div>
  </div>
);

const EmptyState: React.FC = () => (
  <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
    <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
      <BookOpen className="w-8 h-8 text-blue-400" />
    </div>
    <p className="text-white font-semibold mb-2">No posts yet</p>
    <p className="text-gray-400 text-sm mb-6 max-w-sm">
      Posts will appear here once published on Hashnode.
    </p>
    <a
      href={BLOG_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 text-blue-300 rounded-lg text-sm font-medium transition-all"
    >
      Visit Blog <ExternalLink className="w-4 h-4" />
    </a>
  </div>
);

const ErrorState: React.FC<{ onRetry: () => void }> = ({ onRetry }) => (
  <div className="col-span-full">
    <div className="bg-white/5 border border-white/10 rounded-2xl p-10 text-center max-w-xl mx-auto">
      <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-5">
        <BookOpen className="w-8 h-8 text-blue-400" />
      </div>
      <h3 className="text-white font-bold text-lg mb-2">Could not load posts</h3>
      <p className="text-gray-400 text-sm mb-6 leading-relaxed">
        There was a problem reaching the blog API. Read the latest posts directly on Hashnode.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <button
          onClick={onRetry}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/15 border border-white/20 text-white rounded-lg text-sm font-medium transition-all"
        >
          <RefreshCw className="w-4 h-4" /> Try again
        </button>
        <a
          href={BLOG_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-lg text-sm font-semibold transition-all"
        >
          Open Blog <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  </div>
);

const HashnodeBlogWidget: React.FC<BlogWidgetProps> = ({
  className = '',
  showTags = true,
  maxPosts = 6,
}) => {
  const [posts, setPosts] = useState<HashnodePost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const loadPosts = useCallback(async () => {
    try {
      setLoading(true);
      setError(false);
      const res = await fetch(`/api/posts?first=${maxPosts}`);
      const json = await res.json();
      if (json.error && json.posts.length === 0) throw new Error(json.error);
      setPosts(json.posts);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [maxPosts]);

  useEffect(() => {
    loadPosts();
  }, [loadPosts]);

  return (
    <section className={`w-full ${className}`}>
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Latest Blog Posts</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Insights on AI, technology, and innovation
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          Array.from({ length: maxPosts }, (_, i) => <SkeletonCard key={i} />)
        ) : error ? (
          <ErrorState onRetry={loadPosts} />
        ) : posts.length === 0 ? (
          <EmptyState />
        ) : (
          posts.map((post) => (
            <BlogPostCard key={post.id} post={post} showTags={showTags} />
          ))
        )}
      </div>

      {!loading && !error && posts.length > 0 && (
        <div className="text-center mt-12">
          <a
            href={BLOG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-950/40"
          >
            View All Posts <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </section>
  );
};

export default HashnodeBlogWidget;
