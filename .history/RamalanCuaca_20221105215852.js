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
            
            const arr1 = res.slice(3, 10).map(d => d.main.temp)
            const average1 = arr1.reduce((a, b) => a + b, 0) / arr1.length;
            const date1 = res[3].dt_txt
            const day1 = new Date(date1)
            var dayName1 = day1.toString().split(' ')[0];
            console.log(dayName1);
            console.log(day1.toDateString("id-ID"));
            console.log(Number(average1.toFixed(2)));

            // const arr2 = res.slice(11, 18).map(d => d.main.temp)
            // const average2 = arr2.reduce((a, b) => a + b, 0) / arr2.length;
            // const date2 = res[11].dt_txt
            // const day2 = Date(date2)
            // var dayName2 = day2.toString().split(' ')[0];
            // console.log(dayName2);
            // console.log(Number(average2.toFixed(2)));
            
            // const arr3 = res.slice(19, 26).map(d => d.main.temp)
            // const average3 = arr3.reduce((a, b) => a + b, 0) / arr3.length;
            // const date3 = res[19].dt_txt
            // console.log(Date(date3));
            // console.log(Number(average3.toFixed(2)));
            
            // const arr4 = res.slice(27, 34).map(d => d.main.temp)
            // const average4 = arr4.reduce((a, b) => a + b, 0) / arr4.length;
            // const date4 = res[27].dt_txt
            // console.log(Date(date4));
            // console.log(Number(average4.toFixed(2)));
            
            // const arr5 = res.slice(35, 39).map(d => d.main.temp)
            // const average5 = arr5.reduce((a, b) => a + b, 0) / arr5.length;
            // const date5 = res[35].dt_txt
            // console.log(Date(date5));
            // console.log(Number(average5.toFixed(2)));

            console.log("Weather Forecast:")
            // console.log()

            // console.log("Suhu :" + temp + " Celcius");
            // response.json()
        })
}

console.log(weather())
