const axios = require('axios')


const weather = async () => {
    await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=Jakarta&appid=e4ad1541f3bf3f4deeeda85a3b322b7a&units=metric&&count=1`)
        .then((response) => {
            const res = response.data.list
            // console.log(res)

            // let hari1 =[]


            // console.log(hari1)
            // console.log("Wheater Forecast:")
            const arr = res.slice(0, 5).map(d => d.main.temp)
            console.log(arr)
            // console.log(response.data.list.map(d => d.main.temp));
            const average = arr.reduce((a, b) => a + b, 0) / arr.length;
            console.log(average);
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
