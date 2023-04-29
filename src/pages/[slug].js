import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [blogPost, setBlogPost] = useState(null);

  useEffect(() => {
    async function fetchBlogPost() {
      try {
        const response = await fetch(`/api/blog/${slug}`);
        if (!response.ok) {
          throw new Error("Failed to fetch blog post data");
        }
        const data = await response.json();
        console.log("API response:", data);
        setBlogPost(data);
      } catch (error) {
        console.error(error);
      }
    }
    if (slug) {
      fetchBlogPost();
    }
  }, [slug]);

  if (!blogPost) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{blogPost.title}</h1>
      <p>
        {blogPost.description} on {blogPost.date}
      </p>
      <div dangerouslySetInnerHTML={{ __html: blogPost.content }}></div>
    </div>
  );
};

export default BlogPost;
