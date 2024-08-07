# MyExampleBlog

## Overview

MyExampleBlog is a modern, feature-rich blogging platform built using the latest web technologies. This project serves as a preview to showcase my web development skills, utilizing Next.js 14, TailwindCSS, shadcn\ui, MongoDB, and Mongoose. The blog allows for easy content management through markdown files and supports user interactions through comments and replies.

## Features

- **Markdown Support**: Add new blog posts by simply creating markdown files.
- **Comment System**: Readers can leave comments and reply to existing comments.
- **Inspired Design**: The blog's appearance is inspired by the design of the Make Life Easier blog.

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/myexampleblog.git
   cd myexampleblog
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**
   Create a `.env.local` file in the root of the project and add the following:

   ```env
   MONGODB_URI=your_mongodb_connection_string
   ```

4. **Run the Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Adding Posts

To add a new blog post:

1. Create a new markdown (`.md`) file in the `articles` folder. Ensure the file has the following front matter:

   ```markdown
   ---
   title: "Your Post Title"
   date: "2024-08-07"
   description: "A short description of your post"
   image: "/articles/your-image.jpg"
   ---
   ```

2. Write your post content below the front matter using markdown syntax.

3. Place any associated images in the `public/articles` folder.

## Comment System

The comment system allows users to leave comments and reply to existing comments under each blog post. This feature enhances user engagement and interaction on the blog.

## Technologies Used

- **Next.js 14**: Framework for building server-side rendered React applications.
- **TailwindCSS**: Utility-first CSS framework for rapid UI development.
- **shadcn\ui**: Component library for building cohesive user interfaces.
- **MongoDB**: NoSQL database for storing blog posts and comments.
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB and Node.js.

## Acknowledgments

- Design inspiration from the [Make Life Easier](https://www.makelifeeasier.com) blog.

---

Thank you for checking out MyExampleBlog!
