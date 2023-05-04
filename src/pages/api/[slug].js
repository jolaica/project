export default async function handler(req, res) {
  const { slug } = req.query;

  try {
    const response = await fetch(`http://192.168.1.2:8000/api/blog/${slug}`);

    if (!response.ok) {
      throw new Error("Failed to fetch blog data");
    }

    const data = await response.json();
    console.log("API response:", data);
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: "Item not found" });
  }
}
