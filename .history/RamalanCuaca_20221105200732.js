const axios = require('axios')

const weather = async () => {
    await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=Jakarta&appid=e4ad1541f3bf3f4deeeda85a3b322b7a&units=metric`)
        .then((response) => {
            console.log(response);
            // response.json()
        })
}

console.log(weather());