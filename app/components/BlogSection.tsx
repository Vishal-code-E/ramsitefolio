import React from 'react';
import HashnodeBlogWidget from './HashnodeBlogWidget';

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 relative overflow-hidden">
      {/* Dark Blue Glow Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-80 h-80 bg-blue-800/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-800/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <HashnodeBlogWidget 
          maxPosts={6}
          showTags={true}
          className=""
        />
      </div>
    </section>
  );
};

export default BlogSection;