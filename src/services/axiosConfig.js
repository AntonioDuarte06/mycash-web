import axios from 'axios'

export default function createHttp(){
    const http = axios.create({
        baseURL: 'http://localhost:9090/mycash'
    })
    return http
}