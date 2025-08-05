const API_KEY = 'acd44edbeee7f1770df45d8dedd4ee27';
const BASE_URL = 'https://api.themovieedb.org/3';

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json()
    return data.results
}