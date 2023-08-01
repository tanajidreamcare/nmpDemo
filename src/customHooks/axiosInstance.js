import  axios  from 'axios';

// const instance = axios.create({
//     baseURL: process.env.base_url_axios
// })

// const instance = axios.create({
//     baseURL: 'http://localhost:7000/api/'
// })

const instance = axios.create({
    baseURL: "http://3.111.197.119/api/"
})

export default instance
