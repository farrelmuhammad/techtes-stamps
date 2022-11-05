const weather = async () => {
    await fetch(`api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}`)
    .then((response) => {
        console.log(response);
    })
}