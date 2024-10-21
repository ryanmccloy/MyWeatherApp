export default async function handler(req, res) {
  const { location } = req.query;

  const apiKey = process.env.WEATHER_API_KEY;

  // 1. Check if the API key exists
  if (!apiKey) {
    return res.status(500).json({ message: "API key is missing." });
  }

  // 2. Construct the API URL with location and the API key
  const apiUrl = `https://api.tomorrow.io/v4/weather/realtime?location=${location}&apikey=${apiKey}`;

  try {
    // 3. Fetch the weather data from the external API
    const response = await fetch(apiUrl);

    // 4. Handle unsuccessful responses
    if (!response.ok) {
      const message =
        response.status === 429
          ? "Too many requests! Please try again later."
          : "Error fetching weather forecast! Please make sure you have entered a valid location";
      return res.status(response.status).json({ message });
    }

    // 5. Parse the response as JSON and send it back to the client
    const data = await response.json();
    return res.status(200).json(data);
  } catch (err) {
    // 6. Handle server errors (e.g., network issues, etc.)
    return res.status(500).json({ message: err.message });
  }
}
