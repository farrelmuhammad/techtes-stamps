const axios = require('axios')

const weather = async () => {
    await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appId=3e156352133fc4169049ed9e9f9f4b90`)
        .then((response) => {
            // console.log(response);
            response.json()
        })
}

console.log(weather());