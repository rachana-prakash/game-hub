import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {key: '8a6ebafc5f5d484f94ddece5695f700c'}});