import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const ItemDetails = () => {
  const [item, setItem] = useState(null);
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    if (!slug) return;

    async function fetchData() {
      try {
        const response = await fetch(
          `http://192.168.1.7:8000/api/blog/${slug}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch item data");
        }
        const data = await response.json();
        console.log("API response:", data);
        setItem(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [slug]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{item.title}</h1>
      <img src={item.image} alt={item.title} />
      <p>{item.description}</p>
    </div>
  );
};

export default ItemDetails;
