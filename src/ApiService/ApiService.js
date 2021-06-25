import Axios from "axios";

const API_KEY = "6ca8edc770c6737575c823681f068a12";
const BASE_URL = "https://api.themoviedb.org/3/";

class ApiService {
  makeUrl(directory) {
    return `${BASE_URL}${directory}api_key=${API_KEY}`;
  }

  async makeRequest(url) {
    const response = await Axios.get(url);

    return response.data.results ? response.data.results : response.data;
  }

  getTrends() {
    const url = this.makeUrl("trending/movie/week?");
    return this.makeRequest(url);
  }

  getMoviesByQuery(query) {
    const directory = `search/movie?query=${query}&`;

    const url = this.makeUrl(directory);
    return this.makeRequest(url);
  }

  getMovieById(id) {
    const directory = `movie/${id}?`;
    const url = this.makeUrl(directory);

    return this.makeRequest(url);
  }
}

export default ApiService;
