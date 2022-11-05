const axios = require('axios')

const weather = async () => {
    await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=e4ad1541f3bf3f4deeeda85a3b322b7a`)
        .then((response) => {
            console.log(response);
        })
}

console.log(weather());