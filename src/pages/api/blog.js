export default async function handler(req, res) {
  const { page, limit, offset, q, slug } = req.query;

  // Fetch data from external API using the provided query parameters
  let endpoint = `http://192.168.1.2:8000/api/blog/?page=${page}&limit=${limit}&offset=${offset}&q=${q}`;
  if (slug) {
    endpoint = `http://192.168.1.2:8000/api/blog/${slug}`;
  }
  const response = await fetch(endpoint);
  const data = await response.json();

  // Send the fetched data as the API response
  res.status(200).json(data);
}
