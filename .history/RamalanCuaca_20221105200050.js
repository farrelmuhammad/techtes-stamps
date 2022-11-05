const axios = require('axios')

const weather = async () => {
    await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=appId`)
        .then((response) => {
            // console.log(response);
            response.json()
        })
}

console.log(weather());