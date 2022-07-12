import axios, { AxiosError, AxiosInstance, Method } from "axios";
import { AuthErrorEventBus } from "../context/AuthContext";

export default class HttpClient {
	instance: AxiosInstance;
	authErrorEventBus: AuthErrorEventBus;

	constructor(authErrorEventBus: AuthErrorEventBus) {
		this.instance = axios.create({ baseURL: process.env.REACT_APP_BASE_URL, withCredentials: true });
		this.authErrorEventBus = authErrorEventBus;
	}

	async request<T>(method: Method, url: string, params?: any, data?: any): Promise<T | undefined> {
		try {
			const res = await this.instance.request<T>({ method, url, params, data });
			return res.data;
		} catch (e) {
			const error = this.parseAxiosError(e as AxiosError);
			this.authErrorEventBus.notify(error);
			return undefined;
		}
	}

	parseAxiosError(e: AxiosError) {
		let message = "";

		if (e.message) {
			message = e.message;
		} else if (e.response) {
			// Request made and server responded
			message = e.response.data as string;
		} else if (e.request) {
			// The request was made but no response was received
			message = e.request;

			if (e.request.status === 0) {
				message = "서버연결 오류";
			}
		} else {
			// Something happened in setting up the request that triggered an Error
			message = e.message;
		}

		return new Error(message);
	}
}
