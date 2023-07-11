//fetches car data from RapidAPI

const rapidApiKey = process.env.CARS_API_NINJA_KEY;

export const fetchCars = async() => {
    const headers = {
    'X-RapidAPI-Key': 'rapidApiKey',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', { headers: headers });
    const result = await response.json();
    return result;
};

