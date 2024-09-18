// api/departures.js
import axios from 'axios';

export default async function handler(req, res) {
  const apiKey = process.env.API_KEY; // Fetch the API key from environment variables
  const apiUrl = 'https://external.transitapp.com/v3/public/stop_departures?global_stop_id=RITECHNY:548'; // Hardcoded API endpoint

  try {
    const response = await axios.get(apiUrl, {
      headers: {
        'Authorization': `Bearer ${apiKey}` // Use your API key as a Bearer token or according to API requirements
      }
    });

    // Ensure the response is in JSON format
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching data:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Failed to fetch data from the API' });
  }
}
