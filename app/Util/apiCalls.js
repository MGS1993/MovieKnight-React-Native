const apiKey = "b88a57406d9a87698d307358f3e4f4ab";

//gets general list for homepage
const trendingMedia = async () => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}`
    );
    const data = await response.json();
    // console.log(data);
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

const getMediaByGenre = async (mediaType, mediaCode, voteCount) => {
  //&page=${renderHelper}
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/${mediaType}?api_key=${apiKey}&language=en-US&sort_by=vote_average.desc&vote_count.gte=${voteCount}&with_genres=${mediaCode}&include_adult=false&include_video=false&watch_region=US`
    );
    const data = await response.json();
    // console.log(data);
    return data.results;
  } catch (error) {
    console.log(error);
  }
};

const getTopMediaAllGenres = async (mediaType, voteCount) => {
  //page=${renderHelper}
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/${mediaType}?api_key=${apiKey}&language=en-US&sort_by=vote_average.desc&vote_count.gte=${voteCount}&&timezone=America%2FTexas&include_null_first_air_dates=false`
    );
    const data = await response.json();
    // console.log(data.results);
    return data.results;
  } catch (err) {
    console.log(err);
  }
};

const advMovieSearch = async (genres, page) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genres}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log(error);
  }
};

const advTvSearch = async (genres, page) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&with_genres=${genres}&language=en-US&sort_by=popularity.desc&page=${page}&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log(error);
  }
};

const getMediaDetails = async (mediaType, mediaId) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/${mediaType}/${mediaId}?api_key=${apiKey}&language=en-US`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getStreamData = async (mediaType, mediaId) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/${mediaType}/${mediaId}/watch/providers?api_key=${apiKey}`
  );
  const data = await response.json();
  return data.results;
};

export default {
  advMovieSearch,
  advTvSearch,
  getTopMediaAllGenres,
  getMediaByGenre,
  getMediaDetails,
  getTopMediaAllGenres,
  getMediaGenre,
  getStreamData,
  trendingByType,
  trendingMedia,
};
