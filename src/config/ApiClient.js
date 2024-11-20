import axios from "axios"

export const ApiClient = axios.create({
    baseURL : "https://673c3fea96b8dcd5f3f9175f.mockapi.io/",
    headers : {
        "Content-Type" : "application/json"
    }
})