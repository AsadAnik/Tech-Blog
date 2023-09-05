// import React, { useEffect, useState } from 'react';
// import EmptyList from '../../components/common/EmptyList';
// import BlogList from '../../components/Home/BlogList';
// import Header from '../../components/Home/Header';
// import SearchBar from '../../components/Home/SearchBar';
// import { blogList } from '../../config/data';

// const Home = () => {
//   const [blogs, setBlogs] = useState(blogList);
//   const [searchKey, setSearchKey] = useState('');

//   useEffect(() => {
//       handleSearchBar();
//   },[searchKey])

//   // Search submit
//   const handleSearchBar = (e) => {
//     e.preventDefault();
//     handleSearchResults();
//   };

//   // Search for blog by category
//   const handleSearchResults = () => {
//     const allBlogs = blogList;
//     const filteredBlogs = allBlogs.filter((blog) =>
//       blog.title.toLowerCase().includes(searchKey.toLowerCase().trim())
//     );
//     setBlogs(filteredBlogs);
//   };

//   // Clear search and show all blogs
//   const handleClearSearch = () => {
//     setBlogs(blogList);
//     setSearchKey('');
//   };

//   return (
//     <div>
//       {/* Page Header */}
//       <Header />

//       {/* Search Bar */}
//       <SearchBar
//         value={searchKey}
//         clearSearch={handleClearSearch}
//         formSubmit={handleSearchBar}
//         handleSearchKey={(e) => setSearchKey(e.target.value)}
//       />

//       {/* Blog List & Empty View */}
//       {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
//     </div>
//   );
// };

// export default Home;

import React, { useState, useEffect } from "react";
import EmptyList from "../../components/common/EmptyList";
import BlogList from "../../components/Home/BlogList";
import Header from "../../components/Home/Header";
import SearchBar from "../../components/Home/SearchBar";
import { blogList } from "../../config/data";
import './Home.css';

const Home = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState("");
  // const mentItem = useState(BlogList)

  // Update search results whenever the searchKey changes
  useEffect(() => {
    handleSearchResults();
  }, [searchKey]);


  // const filter = (cat) => {
  //   const newItem = Data.filter((newVal) => newVal.category === cat)
  //   mentItem(newItem)
  // }

  // Search for blog by title
  const handleSearchResults = () => {
    const filteredBlogs = blogList.filter((blog) =>
      blog.title.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey("");
  };

  return (
    <div>
      {/* Page Header */}
      <Header />

      {/* Search Bar */}
      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />

      {/* Blog List & Empty View */}
      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
