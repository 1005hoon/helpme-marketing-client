import { AuthErrorEventBus } from "../context/AuthContext";
import HttpClient from "../networks/http-client";
import AuthService from "./auth.service";
jest.mock("../networks/http-client");

describe("AuthService", () => {
	let authService: AuthService;
	let httpClient: HttpClient;
	let authErrorEventBus: AuthErrorEventBus;

	beforeEach(() => {
		authErrorEventBus = new AuthErrorEventBus();
		httpClient = new HttpClient(authErrorEventBus);
		authService = new AuthService(httpClient);
	});

	describe("me()", () => {
		it("should send GET request to /auth/me", async () => {
			await authService.me();
			expect(httpClient.request).toHaveBeenCalledWith("GET", "/auth/me");
		});
	});

	describe("logIn()", () => {
		it("should send POST request to /auth/login", async () => {
			await authService.logIn();
			expect(httpClient.request).toHaveBeenCalledWith("POST", "/auth/login");
		});
	});

	describe("logOut()", () => {
		it("should send POSt request to /auth/logout", async () => {
			await authService.logOut();
			expect(httpClient.request).toHaveBeenCalledWith("POST", "/auth/logout");
		});
	});
});
