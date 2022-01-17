import axios from "axios";
export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers : {
        Authorization: 'Client-ID JjmQWvi8GfX2EMq_I8BzA3w5z_NYMP6TZPJ1QqSedJs'
    }

});