//turns obj id values into consolidated strings for search query
const genreRearrange = (data) => {
  let queryStr = [];

  data.forEach((el) => {
    queryStr.push(el.id);
  });

  return queryStr.toString();
};

export default {
  genreRearrange,
};
