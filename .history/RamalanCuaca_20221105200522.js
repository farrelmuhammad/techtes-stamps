const axios = require('axios')

const weather = async () => {
    await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=Jakarta&limit=5&appid=e4ad1541f3bf3f4deeeda85a3b322b7a`)
        .then((response) => {
            console.log(response);
            // response.json()
        })
}

console.log(weather());