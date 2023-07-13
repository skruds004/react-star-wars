import axios from "axios";



export default async function getAllStarShips() {
    const url = "https://swapi.dev/api/starships/";
    try {
        const response = await axios.get(url);
        const data = response.data.results;
        return data;
    } catch (err) {
        console.error(err);
    }
}