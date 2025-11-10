import React from 'react';
import HashnodeBlogWidget from './HashnodeBlogWidget';

const BlogSection = () => {
  return (
    <section id="blog" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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