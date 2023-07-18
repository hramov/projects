import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { useAppStore } from "../store";

export type Filters<T> = {
	[key in keyof T]?: T[key];
}

export class NotFoundError extends Error {
	constructor() {
		super('Cannot fetch data from server');
	}
}

export class Api {
	private readonly instance: AxiosInstance;
	constructor() {
		this.instance = axios.create({
			baseURL: import.meta.env.VITE_APP_BASE_URL,
			timeout: 5000,
		});
		
		this.instance.interceptors.request.use(function (config) {
			// TODO add jwt token;
			return config;
		}, function (error) {
			return Promise.reject(error);
		});
		
		this.instance.interceptors.response.use(function (response) {
			return response;
		}, function (error: any) {
			return Promise.reject(error);
		});
	}
	
	public async get<T>(url: string, filters?: string): Promise<T[]> {
		const response = await this.instance.get(url + '/' + (filters ? filters : ''));
		return response.data;
	}
	
	public async getOne<T>(url: string, filters?: string): Promise<T | null> {
		try {
			const response = await this.instance.get(url + '/' + (filters ? filters : ''));
			return response.data;
		} catch(_err: unknown) {
			return null;
		}
	}
	
	public async post<T>(url: string, data: T, opts?: AxiosRequestConfig) {
		try {
			const response = await this.instance.post(url, data, opts);
			return response.data;
		} catch(_err: unknown) {
			return null;
		}
	}
	
	public async put<T>(url: string, id: number | string, data: T, opts?: AxiosRequestConfig) {
		try {
			const response = await this.instance.put(url + '/' + id, data, opts);
			return response.data;
		} catch(_err: unknown) {
			return null;
		}
	}
	
	public async delete(url: string, id: number | string,  opts?: AxiosRequestConfig) {
		try {
			const response = await this.instance.delete(url + '/' + id, opts);
			return response.data;
		} catch(_err: unknown) {
			return null;
		}
	}
	
	public formatFilterQuery<T>(filters: Filters<T>): string {
		const filtersArray: string[] = [];
		
		for (let key in filters) {
						filtersArray.push(`${key}=${filters[key]}`)
		}
		return `?${filtersArray.join('&')}`
	}
}