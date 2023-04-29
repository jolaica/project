// api/blog.js

export default async function handler(req, res) {
  const { page, limit, offset, q } = req.query;

  // Fetch data from external API using the provided query parameters
  const response = await fetch(
    `http://192.168.1.7:8000/api/blog/?page=${page}&limit=${limit}&offset=${offset}&q=${q}`
  );
  const data = await response.json();

  // Send the fetched data as the API response
  res.status(200).json(data);
}
