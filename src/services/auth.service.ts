import User from "../model/User";
import HttpClient from "../networks/http-client";

export default class AuthService {
	http: HttpClient;
	constructor(httpClient: HttpClient) {
		this.http = httpClient;
	}

	getAuthToken() {
		const OAUTH2_ENDPOINT = process.env.REACT_APP_GOOGLE_OAUTH_ENDPOINTS;

		/** Sending request is prohibited by Google by cors */
		const form = document.createElement("form");
		form.setAttribute("method", "GET");
		form.setAttribute("action", OAUTH2_ENDPOINT);

		type OAuthParams = {
			[key: string]: string;
			client_id: string;
			redirect_uri: string;
			scope: string;
			response_type: string;
		};

		const params: OAuthParams = {
			client_id: process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID,
			redirect_uri: process.env.REACT_APP_GOOGLE_OAUTH_REDIRECT_URI,
			scope: process.env.REACT_APP_GOOGLE_OAUTH_SCOPE,
			response_type: "token",
		};

		for (const param in params) {
			const input = document.createElement("input");
			input.setAttribute("type", "hidden");
			input.setAttribute("name", param);
			input.setAttribute("value", params[param]);
			form.appendChild(input);
		}

		document.body.appendChild(form);
		form.submit();
	}

	async me() {
		return this.http.request<User>("GET", "/auth/me");
	}

	async logIn(token: string) {
		return this.http.request<User>("POST", "/auth/google", {}, { token });
	}

	async logOut() {
		return this.http.request<null>("POST", "/auth/logout");
	}
}
