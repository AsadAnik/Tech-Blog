import React from 'react';
import BlogItem from './BlogItem';
import './styles.css';

const BlogList = ({ blogs }) => {
  return (
    <div className='blogList-wrap'>
      {blogs.map((blog,index) => (
        <BlogItem key={index} blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;
