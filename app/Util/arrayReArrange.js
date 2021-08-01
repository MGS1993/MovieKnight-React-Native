export default arrayReArrange = (objArr) => {
  let newObjArr = [];

  if (objArr.length > 1) {
    objArr.forEach((el) => {
      newObjArr.push({ item: el.name, id: el.id });
    });
    return newObjArr;
  }
};
