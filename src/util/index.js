export const toObj = (arr) => {
  const obj = {};
  arr.forEach((element) => {
    obj[element.id] = element;
  });
  return obj;
};
