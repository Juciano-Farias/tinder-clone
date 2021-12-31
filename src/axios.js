import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://tinder-backend-juciano.herokuapp.com',
})

export default instance