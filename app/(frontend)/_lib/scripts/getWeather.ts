enum Units { celcius, farengheit }

export interface WeatherInfoType {
    getLocation (): string;
    getCurrentTemp(unit?: Units): string;
}

type OpenWeatherApiResponse = {
    location: {
        name: string;
        country: string;
        localtime: string;
    },
    current: {
        temp_c: number;
        temp_f: number;
        is_day: number;
        condition: {
            text: string; // Sunny, ...
            icon: string;
        }
    }
}

class WeatherInfo implements WeatherInfo {
    private data: OpenWeatherApiResponse;
    
    constructor (response: OpenWeatherApiResponse) {
        this.data = response;
    }

    getLocation(): string {
        return this.data.location.name;
    }

    getCurrentTemp(unit: Units = Units.celcius): string {
        if (unit == Units.celcius) {
            return `${this.data.current.temp_c}°C`;
        }

        if (unit == Units.farengheit) {
            return `${this.data.current.temp_f}°F`;
        }
    }

    setUnitTemperature () {

    }

    getBriefInfo (): string {
        return `${this.getLocation()}, ${this.getCurrentTemp()}`;
    }
}

export default async function getWeatherInfo () {
    const res = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${process.env.LOCATION}`, {
        headers: {
            'X-RapidAPI-Key': process.env.WEATHER_API_KEY,
            'X-RapidAPI-Host': process.env.WEATHER_API_HOST
        },
        next: {
            revalidate: 3600
        }
    })

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }

    let apires = (await res.json()) as OpenWeatherApiResponse;

    return new WeatherInfo(apires);
}

