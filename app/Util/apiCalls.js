const apiKey = "b88a57406d9a87698d307358f3e4f4ab";

//gets general list for homepage
const trendingMedia = async () => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}`
    );
    const data = await response.json();
    return data.results;
  } catch (err) {
    console.log(err);
  }
};

const trendingByType = async (mediaType) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=${apiKey}`
    );
    const data = await response.json();
    return data.results;
  } catch (err) {
    console.log(err);
  }
};

const getMediaGenre = async (mediaType) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/genre/${mediaType}/list?api_key=${apiKey}&language=en-US`
    );
    const data = await response.json();
    // console.log(data);
    return data.genres;
  } catch (err) {
    console.log(err);
  }
};

const getMediaByGenre = async (mediaType, mediaCode) => {
  //&page=${renderHelper}
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/${mediaType}?api_key=${apiKey}&language=en-US&sort_by=vote_average.desc&vote_count.gte=800&with_genres=${mediaCode}&include_adult=false&include_video=false&watch_region=US`
    );
    const data = await response.json();
    // console.log(data);
    return data.results;
  } catch (error) {
    console.log(error);
  }
};

const getTopMediaAllGenres = async (mediaType) => {
  //page=${renderHelper}
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/${mediaType}?api_key=${apiKey}&language=en-US&sort_by=vote_average.desc&vote_count.gte=10000&&timezone=America%2FTexas&include_null_first_air_dates=false`
    );
    const data = await response.json();
    // console.log(data.results);
    return data.results;
  } catch (err) {
    console.log(err);
  }
};

export default {
  getTopMediaAllGenres,
  getMediaByGenre,
  getMediaGenre,
  trendingByType,
  trendingMedia,
};
