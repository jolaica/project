import { useEffect } from "react";

const BlogPost = ({ data }) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
};

export default BlogPost;

export async function getServerSideProps(context) {
  const { slug } = context.params;
  try {
    const response = await fetch(`http://192.168.1.2:8000/api/blog/${slug}`);
    if (!response.ok) {
      throw new Error("Failed to fetch blog post");
    }
    const data = await response.json();
    return { props: { data } };
  } catch (error) {
    console.error(error);
    return { props: {} };
  }
}
