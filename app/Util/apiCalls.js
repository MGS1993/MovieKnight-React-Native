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

const getMediaByGenre = async (mediaType) => {
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

export default { getMediaByGenre, trendingByType, trendingMedia };
