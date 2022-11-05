const axios = require('axios')


const weather = async () => {
    await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=Jakarta&appid=e4ad1541f3bf3f4deeeda85a3b322b7a&units=metric&&count=1`)
        .then((response) => {
            const res = response.data.list[2]
            console.log(res)
            console.log("Wheater Forecast:")
            // console.log(response.data.list.map(d => d.main.temp));
            // console.log(response.data.list.map(d => d))
            // const temp = response.data.list
            // for (let i=0; i<temp.length; i++) {
            //     console.log(temp[i]);
            // }
            // console.log("Suhu :" + temp + " Celcius");
            // response.json()
        })
}

console.log(weather())
