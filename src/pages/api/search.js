import { NextApiRequest, NextApiResponse } from "next";
import Blog from "../../pages/Blog"; // Update the import statement to match the location of your Blog model

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { q, published, is_deleted } = req.query; // Extract query params from request

    // Perform search query using the query params
    const blogs = await Blog.find({
      title: { $regex: new RegExp(decodeURIComponent(q), "i") }, // Use regex to search for title containing the query string (case-insensitive), with URL decoding applied
      published: published === "true", // Convert string "true" or "false" to boolean
      is_deleted: is_deleted === "false",
    });

    // Return search results
    res.json({ blogs });
  } catch (error) {
    // Handle error if any
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
