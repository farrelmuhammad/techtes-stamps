const axios = require('axios')


const weather = async () => {
    await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=Jakarta&appid=e4ad1541f3bf3f4deeeda85a3b322b7a&units=metric&&count=1`)
        .then((response) => {
            const res = response.data.list
            // const date = new Date(res)
            // var dayName = date.toString().split(' ')[0];
            // // console.log(res)
            // console.log(dayName)
            // // console.log(Date("2022-11-06T17:00:00Z"))
            const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
            
            const arr1 = res.slice(3, 10).map(d => d.main.temp)
            const average1 = Number((arr1.reduce((a, b) => a + b, 0) / arr1.length).toFixed(2));
            const date1 = res[3].dt_txt
            const day1 = new Date(date1).toLocaleDateString("en-GB", options)
            // console.log(day1)
            // console.log(average1);

            const arr2 = res.slice(11, 18).map(d => d.main.temp)
            const average2 = Number((arr2.reduce((a, b) => a + b, 0) / arr2.length).toFixed(2));
            const date2 = res[11].dt_txt
            const day2 = new Date(date2).toLocaleDateString("en-GB", options)
            // console.log(day2);
            // console.log(average2);
            
            const arr3 = res.slice(19, 26).map(d => d.main.temp)
            const average3 = Number((arr3.reduce((a, b) => a + b, 0) / arr3.length).toFixed(2));
            const date3 = res[19].dt_txt
            const day3 = new Date(date3).toLocaleDateString("en-GB", options)
            // console.log(day3);
            // console.log(average3);
            
            const arr4 = res.slice(27, 34).map(d => d.main.temp)
            const average4 = Number((arr4.reduce((a, b) => a + b, 0) / arr4.length).toFixed(2));
            const date4 = res[27].dt_txt
            const day4 = new Date(date4).toLocaleDateString("en-GB", options)
            // console.log(day4);
            // console.log(average4);
            
            const arr5 = res.slice(35, 39).map(d => d.main.temp)
            const average5 = Number((arr5.reduce((a, b) => a + b, 0) / arr5.length).toFixed(2));
            const date5 = res[35].dt_txt
            const day5 = new Date(date5).toLocaleDateString("en-GB", options)
            // console.log(day5);
            // console.log(average5);

            console.log("Weather Forecast:")
            console.log(day1 + ": " + average1 + "°C")
            console.log(day2 + ": " + average2 + "°C")
            console.log(day3 + ": " + average3 + "°C")
            console.log(day4 + ": " + average4 + "°C")
            console.log(day5 + ": " + average5 + "°C")
            // console.log()

            // console.log("Suhu :" + temp + " Celcius");
            // response.json()
        })
}

console.log(weather())
