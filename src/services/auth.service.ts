import HttpClient from "../networks/http-client";

const mockUser = {};

export default class AuthService {
	http: HttpClient;
	constructor(httpClient: HttpClient) {
		this.http = httpClient;
	}

	async me() {
		return null;
	}

	async logIn() {
		return mockUser;
	}

	async logOut() {
		return null;
	}
}
