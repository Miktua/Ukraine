import axios, { AxiosError, AxiosRequestConfig, AxiosRequestHeaders } from 'axios';
import { baseURL } from '../utils/config';
import { isServer } from "../utils/utilities";

export const AUTH_TOKEN_NAME = 'jwt'
export const AUTH_TOKEN_TTL_NAME = 'jwtTTL'
export const getAuthToken = () =>  localStorage.getItem(AUTH_TOKEN_NAME)
export const getAuthTokenTTL = () => !isServer && localStorage.getItem(AUTH_TOKEN_TTL_NAME)
export const setAuthToken = (token: string) => !isServer && localStorage.setItem(AUTH_TOKEN_NAME, token)
export const clearAuthToken = () => !isServer && localStorage.removeItem(AUTH_TOKEN_NAME)

export const setLocalStorage = (key: string, value: string) => localStorage.setItem(key, value)

export const buildHeaders = (): AxiosRequestHeaders => ({
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    Pragma: 'no-cache',
    authorization: !isServer && getAuthToken() ? `Bearer ${getAuthToken()}` : ''
});



export const instance = axios.create({
    baseURL: baseURL
});


//for server call
export const server_api = axios.create({
    baseURL: baseURL
})

export interface IResponse<T> {
    data: T;
    meta: {
        success: boolean;
        message: string;
    }
}

const request = <T>({ url = '', method = 'GET', params = {}, headers = buildHeaders(), data = {} }: AxiosRequestConfig): Promise<T> => {
    const reqUrl = `api/v1/${url}`
    return new Promise((resolve, reject) => {
        instance(reqUrl, {
            method,
            data,
            params,
            headers,
        })
            .then(({ data }) => resolve(data))
            .catch((err: AxiosError | Error) => {
                if (axios.isAxiosError(err)) {
                    if (err.response?.status === 401) {
                        console.error({axiosError: err})
                    }

                    return reject({
                        status: err?.response?.status || null,
                        message: err?.response?.data || err?.request || err?.message || null,
                    })
                }

                return reject(err)
            });
    });
}

export default request
