const axios = require('axios')

const weather = async () => {
    await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&apikey=c8a9f088cb18113bb7903cc24e340f8e`)
        .then((response) => {
            console.log(response);
        })
}

console.log(weather());