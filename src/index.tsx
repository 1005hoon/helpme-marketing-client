import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./app/App";
import GlobalStyles from "./app/GlobalStyles";
import { AuthErrorEventBus, AuthProvider } from "./context/AuthContext";
import HttpClient from "./networks/http-client";
import reportWebVitals from "./reportWebVitals";
import AuthService from "./services/auth.service";

const authErrorEventBus = new AuthErrorEventBus();
const httpClient = new HttpClient(authErrorEventBus);
const authService = new AuthService(httpClient);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<React.StrictMode>
		<GlobalStyles />
		<BrowserRouter>
			<AuthProvider authErrorEventBus={authErrorEventBus} authService={authService}>
				<App />
			</AuthProvider>
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
