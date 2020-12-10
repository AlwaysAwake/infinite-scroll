export const getList = ({page = 1, size = 10} = {}) => {
  return fetch(`http://localhost:3000/users?page=${page}&size=${size}`)
    .then(res => res.json())
    .then(res => res.result);
};
