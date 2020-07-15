export const getPost = () => {
  if(localStorage.getItem("POST")){
    return JSON.parse(localStorage.getItem("POST"));
  }
  return [];
};

const setPost = (items) => {
  localStorage.setItem("POST", JSON.stringify(items || []));
};

export const addPost = (item) => {
  const items = getPost();
  item.id = items.length + 1;

  items.push(item);
  setPost(items);
  return items;
};

export const updatePost = (data) => {
  const items = getPost();
  items.forEach((item, index) => {
    if (data.id === item.id) {
      items[index] = data;
    }
  });
  return items;
};

export const deletePost = (data) => {
  const items = getPost();
  items.forEach((item, index) => {
    if (data.id === item.id) {
      items.splice(index, 1);
    }
  });
  setPost(items);
  return items;
};

export default {
  getPost,
  setPost,
  addPost,
  updatePost,
  deletePost,
};
