const axios = require('axios')


const weather = async () => {
    await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=Jakarta&appid=e4ad1541f3bf3f4deeeda85a3b322b7a&units=metric&&count=1`)
        .then((response) => {
            const res = response.data.list
            // console.log(res)

            // const arr1 = res.slice(3, 10).map(d => d.main.temp)
            // const average1 = arr1.reduce((a, b) => a + b, 0) / arr.length;
            // console.log(average1);
            // const arr2 = res.slice(11, 18).map(d => d.main.temp)
            // const average2 = arr2.reduce((a, b) => a + b, 0) / arr.length;
            // console.log(average2);
            
            // console.log("Suhu :" + temp + " Celcius");
            // response.json()
        })
}

console.log(weather())
