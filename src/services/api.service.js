import axios from 'axios';

const base_url = "https://jsonplaceholder.typicode.com";

export const fetchPosts = () => {
    return axios.get(base_url + '/posts');
}
export const addPost = (data) => {
    return axios.post(base_url + "/posts", data);
}
export const deletePost = (data) => {
    return axios.delete(`${base_url}/posts/${data.id}`);
}
export const updatePost = (data) => {
    return axios.put(`${base_url}/posts/${data.id}`, data);
}