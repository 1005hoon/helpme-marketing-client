/// <reference types="react-scripts" />

declare namespace NodeJS {
	interface ProcessEnv {
		REACT_APP_GOOGLE_OAUTH_ENDPOINTS: string;
		REACT_APP_GOOGLE_OAUTH_CLIENT_ID: string;
		REACT_APP_GOOGLE_OAUTH_REDIRECT_URI: string;
		REACT_APP_GOOGLE_OAUTH_SCOPE: string;
	}
}
