//fetches car data from RapidAPI

const rapidApiKey = process.env.CARS_API_NINJA_KEY;

export const fetchCars = async() => {
    const headers = {
    'X-RapidAPI-Key': `${rapidApiKey}`,
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', { headers: headers });
    const result = await response.json();
    return result;
};


export const calculateCarRent = (city_kmpl: number, year: number) => {
    const basePricePerDay = 6500; //in Ksh
    const mileageFactor = 0.1;
    const ageFactor = 0.05;
    const mileageRate = city_kmpl * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
};

