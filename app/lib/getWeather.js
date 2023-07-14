export default async function getWeather() {
    // const res = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${process.env.LOCATION}`, {
    //     headers: {
    //         'X-RapidAPI-Key': process.env.WEATHER_API_KEY,
    //         'X-RapidAPI-Host': process.env.WEATHER_API_HOST
    //     }
    // })

    // if (!res.ok) {
    //   throw new Error('Failed to fetch data')
    // }
   
    // return res.json();

    return {
        location: {
            name: "London"
        },
        current: {
            temp_c: "12"
        }
    }
}

export function weatherExtract (data) {
    return {
        cityname: data.location.name,
        temperature: data.current.temp_c
    }
}