export default async function handler(req, res) {
  const { slug } = req.query;

  try {
    const response = await fetch(
      `https://a39f-49-145-192-47.ngrok-free.app/api/blog/${slug}`
    );

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
