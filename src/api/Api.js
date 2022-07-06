import axios from "axios";
const URL = process.env.REACT_APP_URL

export default axios.create({
    baseURL: URL
})

/* http://31.170.165.21/api */
/* baseURL: `http://localhost:5000` */