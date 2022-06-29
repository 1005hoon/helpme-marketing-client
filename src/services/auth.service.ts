import User from "../model/User";
import HttpClient from "../networks/http-client";

export default class AuthService {
	http: HttpClient;
	constructor(httpClient: HttpClient) {
		this.http = httpClient;
	}

	async me() {
		return this.http.request<User>("GET", "/auth/me");
	}

	async logIn() {
		return this.http.request<User>("POST", "/auth/login");
	}

	async logOut() {
		return this.http.request<null>("POST", "/auth/logout");
	}
}
