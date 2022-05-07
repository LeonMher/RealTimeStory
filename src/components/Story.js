import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Story(props) {

    const [weather, setWeather] = useState('')
    const [cat, setCat] = useState('')
    const [scenario, setScenario] = useState('')

    function apiCalls() {
        let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=Boston&units=imperial&appid=dcedc9f6a3375687009f75babf7cb35b`
        let catFacts = `https://cat-fact.herokuapp.com/facts`


        const axiosWeather = axios.get(weatherUrl);
        const axiosCat = axios.get(catFacts)

        axios.all([axiosWeather, axiosCat]).then(
            axios.spread((...allData) => {
                const weatherData = allData[0]
                const catData = allData[1]

                setWeather(weatherData.data.weather[0].description)
                console.log(weatherData)
                console.log()
                setCat(catData.data[0].text)
                console.log(weatherData.data.weather[0].description)

            })
        )
    }

    useEffect(() => {
        apiCalls()


    }, [])
    setTimeout(() => {

        const rainyArr = ["drizzle rain", "light intensity drizzle", "drizzle", "heavy intensity drizzle", "light intensity drizzle rain", "heavy intensity drizzle rain", "shower rain and drizzle", "heavy shower rain and drizzle", "shower drizzle", "light rain", "moderate rain", "heavy intensity rain", "very heavy rain", "extreme rain", "freezing rain", "light intensity shower rain", "shower rain", "heavy intensity shower rain", "ragged shower rain"]
        rainyArr.map((r) => {
            if (weather === r) {
                setScenario(props.rainyScenario)
            }
        })

        const cloudyArr = ['few clouds', "broken clouds", "overcast clouds", "scattered clouds"]
        cloudyArr.map((r) => {
            if (weather === r) {
                setScenario(props.cloudyScenario)
            }
        })

        const clearSkyArr = ['clear sky']
        clearSkyArr.map((r) => {
            if (weather === r) {
                setScenario(props.clearSkyScenario)
            }
        })


        const snowArr = ['light snow', 'Snow', 'Heavy snow', 'Sleet', 'Light shower sleet', 'Shower sleet', 'Light rain and snow', 'Rain and snow', 'Light shower snow', 'Shower snow', 'Heavy shower snow']
        snowArr.map((r) => {
            if (weather === r) {
                setScenario(props.snowyScenario)
            }
        })

        // switch (weather) {
        //     case 'few clouds' || "broken clouds" || "overcast clouds" || "scattered clouds":
        //         setScenario(props.cloudyScenario)
        //         break;
        //     case 'haze':
        //         setScenario(props.hazyScenario)
        //         break;
        //     case "drizzle rain" || "light intensity drizzle	" || "drizzle" || "heavy intensity drizzle" || "light intensity drizzle rain" || "heavy intensity drizzle rain" || "shower rain and drizzle" || "heavy shower rain and drizzle" || "shower drizzle" || "light rain" || "moderate rain" || "heavy intensity rain" || "very heavy rain" || "extreme rain" || "freezing rain" || "light intensity shower rain" || "shower rain" || "heavy intensity shower rain" || "ragged shower rain":
        //         setScenario(props.rainyScenario)
        //         break;
        //     default:
        //         console.log(`Sorry, we are out of ${weather}.`);
        // }
        // //

    }, 1000)





    return (

        <>
            <h1>Story</h1>
            <p>John is from New York City. It's .
                He checked the news and according to  there are 100 conformed cases</p>
            <h1>{scenario}</h1>



        </>
    )

}
export default Story