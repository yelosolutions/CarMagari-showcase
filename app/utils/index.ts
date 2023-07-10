export const fetchCars = async() => {
    const headers = {
    'X-RapidAPI-Key': 'c0a5ab4df9msh793b406348d4184p1250d8jsn620f1cd7bb5c',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', { headers: headers });
    const result = await response.json();
    return result;
};

