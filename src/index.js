// src/index.js
import { transit_realtime } from 'gtfs-realtime-bindings'
function greet() {
  alert("Hello from Webpack!");
}

// Function to fetch and parse GTFS-RT data
const fetchAlerts = async () => {
	try {
		// setError("");
		const response = await fetch("https://passio3.com/ritech/passioTransit/gtfs/realtime/serviceAlerts");

		if (!response.ok) {
			throw new Error(`Error fetching the feed: ${response.statusText}`);
		}

		const buffer = await response.arrayBuffer();
		const feed = transit_realtime.FeedMessage.decode(new Uint8Array(buffer));
		const alertData = feed.entity.map((entity) => ({
			id: entity.id,
			header: entity.alert?.headerText?.translation[0]?.text || "No header",
			description: entity.alert?.descriptionText?.translation[0]?.text || "No description",
		}));
		return alertData
		// setAlerts(alertData);
	} catch (err) {
		console.error(err);
		// setError("Failed to fetch or parse the GTFS-RT feed. Ensure the feed is accessible.");
		// setAlerts([]);
		return []
	}
};

// Expose the function to the window object to make it accessible globally
window.greet = greet;
window.fetchAlerts = fetchAlerts;
