const axios = require('axios')


const weather = async () => {
    await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=Jakarta&appid=e4ad1541f3bf3f4deeeda85a3b322b7a&units=metric&&count=1`)
        .then((response) => {
            const res = response.data.list
            // console.log(res)
            
            const arr1 = res.slice(3, 10).map(d => d.main.temp)
            const average1 = arr1.reduce((a, b) => a + b, 0) / arr1.length;
            console.log(Number(average1.toFixed(2)));
            const arr2 = res.slice(11, 18).map(d => d.main.temp)
            const average2 = arr2.reduce((a, b) => a + b, 0) / arr2.length;
            console.log(average2);
            const arr3 = res.slice(19, 26).map(d => d.main.temp)
            const average3 = arr3.reduce((a, b) => a + b, 0) / arr3.length;
            console.log(average3);
            const arr4 = res.slice(27, 34).map(d => d.main.temp)
            const average4 = arr4.reduce((a, b) => a + b, 0) / arr4.length;
            console.log(average4);
            const arr5 = res.slice(35, 39).map(d => d.main.temp)
            const average5 = arr5.reduce((a, b) => a + b, 0) / arr5.length;
            console.log(average5);

            // console.log("Suhu :" + temp + " Celcius");
            // response.json()
        })
}

console.log(weather())
