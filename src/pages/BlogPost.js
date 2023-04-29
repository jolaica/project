import { useRouter } from "next/router";
import { useState } from "react";

const BlogPost = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading item...</div>;
  }

  if (!data) {
    return <div>Item not found</div>;
  }

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.content}</p>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.params;
  const endpoint = `https://a39f-49-145-192-47.ngrok-free.app/api/blog/${slug}`;

  try {
    const response = await fetch(endpoint);
    const data = await response.json();

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error(error);

    return {
      props: {
        data: null,
      },
    };
  }
}

export default BlogPost;
