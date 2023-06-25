import axios, { AxiosInstance } from "axios";
import {FetchError} from "./error";

export class Fetch {
    private readonly instance: AxiosInstance;
    
    constructor() {
        axios.interceptors.request.use(function (config) {
            return config;
        }, function (error) {
            return Promise.reject(error);
        });

        axios.interceptors.response.use(function (response) {
            return response;
        }, function (error) {
            return Promise.reject(error);
        });

        this.instance = axios.create({
            baseURL: 'http://localhost',
            timeout: 15000,
        });
    }

    async get<T>(url: string): Promise<T | FetchError> {
        try {
            const response = await this.instance.get(url);
            return response.data;
        } catch(err) {
            return new FetchError(url, err.message);
        }
    }
}