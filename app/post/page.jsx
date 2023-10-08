'use client'
import { useState } from 'react';
import { useRouter } from "next/navigation";

import { blogList } from '@/data'; // Import the blogList data
import { Input, Textarea, Button } from "@nextui-org/react"; // Import Next UI components

export default function PostCreate() {
  const router = useRouter();

  const initialPostState = {
    title: '',
    category: '',
    subCategory: '',
    description: '',
    authorName: '',
    authorAvatar: '',
    createdAt: '',
    cover: '',
  };

  const [newPost, setNewPost] = useState(initialPostState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create a unique ID for the new post (replace with your logic)
    const newPostId = blogList.length + 1;

    const newPostObject = {
      id: newPostId,
      title: newPost.title,
      category: newPost.category,
      subCategory: newPost.subCategory.split(','),
      description: newPost.description,
      authorName: newPost.authorName,
      authorAvatar: newPost.authorAvatar,
      createdAt: newPost.createdAt,
      cover: newPost.cover,
    };

    blogList.unshift(newPostObject);

    router.push('/');
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Create a New Blog Post</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-lg font-semibold">Title:</label>
          <Input
            type="text"
            name="title"
            value={newPost.title}
            onChange={handleInputChange}
            required
            placeholder="Enter the title"
          />
        </div>
        <div>
          <label className="text-lg font-semibold">Category:</label>
          <Input
            type="text"
            name="category"
            value={newPost.category}
            onChange={handleInputChange}
            required
            placeholder="Enter the category"
          />
        </div>
        <div>
          <label className="text-lg font-semibold">Subcategory:</label>
          <Input
            type="text"
            name="subCategory"
            value={newPost.subCategory}
            onChange={handleInputChange}
            placeholder="Enter subcategories (comma separated)"
          />
        </div>
        <div>
          <label className="text-lg font-semibold">Description:</label>
          <Textarea
            name="description"
            value={newPost.description}
            onChange={handleInputChange}
            required
            placeholder="Enter the description"
          />
        </div>
        <div>
          <label className="text-lg font-semibold">Author Name:</label>
          <Input
            type="text"
            name="authorName"
            value={newPost.authorName}
            onChange={handleInputChange}
            required
            placeholder="Enter the author's name"
          />
        </div>
        <div>
          <label className="text-lg font-semibold">Author Avatar:</label>
          <Input
            type="text"
            name="authorAvatar"
            value={newPost.authorAvatar}
            onChange={handleInputChange}
            placeholder="Enter the author's avatar URL"
          />
        </div>
        <div>
          <label className="text-lg font-semibold">Created At:</label>
          <Input
            type="text"
            name="createdAt"
            value={newPost.createdAt}
            onChange={handleInputChange}
            required
            placeholder="Enter the creation date"
          />
        </div>
        <div>
          <label className="text-lg font-semibold">Cover Image URL:</label>
          <Input
            type="text"
            name="cover"
            value={newPost.cover}
            onChange={handleInputChange}
            placeholder="Enter the cover image URL"
          />
        </div>
        <Button type="submit" color="primary">Create Post</Button>
      </form>
    </div>
  );
}
