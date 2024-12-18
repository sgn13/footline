export const uniqueArray = (array) =>
  array.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });

export const sliceIntoChunks = (arr, chunkSize) => {
  const temp = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    temp.push(arr.slice(i, i + chunkSize));
  }
  return temp;
};

export const checkArrayIntersection = (arr = [], target = []) =>
  target.every((v) => arr.includes(v));

export const stringArrayToObject = (arr) =>
  arr.map((item) => ({
    label: item,
    value: item,
  }));

export const shallowEqual = ({ object1, object2 }) => {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

export const includesEvery = ({ arr = [], target = [] }) => target.every((v) => arr.includes(v));

export const getQuery = (filter) => {
  let query = '';

  Object.entries(filter).map((item) => {
    query = query + `${item[0]}=${item[1]}&`;
  });

  return query;
};
