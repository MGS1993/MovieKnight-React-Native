const apiKey = "b88a57406d9a87698d307358f3e4f4ab";

const trendingMedia = async (setState) => {
  try {
    const response = await fetch(
      ` https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}`
    );
    const data = await response.json();
    return data.results;
    // return setState(item);
  } catch (err) {
    console.log(err);
  }
};

export default { trendingMedia };
