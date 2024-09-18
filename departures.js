// api/departures.js
import axios from 'axios';

export default async function handler(req, res) {
  const apiKey = process.env.API_KEY; // Fetch the API key from environment variables

  try {
    const response = await axios.get('YOUR_API_ENDPOINT', {
      params: {
        api_key: apiKey
      }
    });

    res.status(200).json(response.data); // Return API data to the frontend
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to fetch data from the API' });
  }
}
