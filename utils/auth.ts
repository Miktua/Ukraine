import axios from 'axios'

export const url = process.env.REACT_APP_IP

export const setAuthToken = (token: string | null) => {
    if (token) {
        api.defaults.headers.common['auth-token'] = token
    }
}

export const api = axios.create({
    baseURL: url,
    headers: {
        accept: 'application/json',
    },
})
