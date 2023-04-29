export default async function handler(req, res) {
  const { page, limit, offset, q, slug } = req.query;

  // Fetch data from external API using the provided query parameters
  let endpoint = `https://a39f-49-145-192-47.ngrok-free.app/api/blog/?page=${page}&limit=${limit}&offset=${offset}&q=${q}`;
  if (slug) {
    endpoint = `https://a39f-49-145-192-47.ngrok-free.app/api/blog/${slug}`;
  }
  const response = await fetch(endpoint);
  const data = await response.json();

  // Send the fetched data as the API response
  res.status(200).json(data);
}
