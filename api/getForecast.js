export default async function handler(req, res) {
  const { location } = req.query; // Get the location from the request query
  const apiKey = process.env.WEATHER_API_KEY; // Get the API key securely from environment variables

  // Construct the API URL with the location and API key
  const apiUrl = `https://api.tomorrow.io/v4/weather/forecast?location=${location}&apikey=${apiKey}`;

  try {
    // Fetch forecast data from Tomorrow.io API
    const response = await fetch(apiUrl);

    if (!response.ok) {
      return res.status(response.status).json({
        message:
          response.status === 429
            ? "Too many requests! Please come back later."
            : "Error fetching forecast. Please check the location.",
      });
    }

    const data = await response.json();

    // Return the forecast data to the frontend
    res.status(200).json(data);
  } catch (err) {
    // Handle any errors
    console.error("Error fetching weather forecast from Tomorrow.io", err);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
}
