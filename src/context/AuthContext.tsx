import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import LoginPage from "../pages/auth/LoginPage";
import AuthService from "../services/auth.service";

class User {}

type AuthState = { user: User | undefined; logIn: () => Promise<void>; logOut: () => Promise<void> };
const AuthContext = createContext<AuthState>({ user: undefined, logIn: async () => {}, logOut: async () => {} });

export function AuthProvider({
	authService,
	authErrorEventBus,
	children,
}: {
	authService: AuthService;
	authErrorEventBus: AuthErrorEventBus;
	children: React.ReactNode;
}) {
	const [user, setUser] = useState<User | undefined>(undefined);

	useEffect(() => {
		authErrorEventBus.listen((e: Error) => {
			console.error(e);
			setUser(undefined);
		});
	}, [authErrorEventBus]);

	const isLoggedIn = useCallback(async () => {
		try {
			const user = await authService.me();

			if (!user) {
				setUser(undefined);
				return;
			}

			setUser(user);
		} catch (error) {
			console.error(error);
		}
	}, [authService]);

	useEffect(() => {
		isLoggedIn();
	}, [isLoggedIn]);

	const logIn = useCallback(async () => {
		try {
			const user = await authService.logIn();
			setUser(user);
		} catch (error) {
			console.error(error);
		}
	}, [authService]);

	const logOut = useCallback(async () => {
		try {
			await authService.logOut();
			setUser(undefined);
		} catch (error) {
			console.error(error);
		}
	}, [authService]);

	const context = useMemo(() => ({ user, logIn, logOut }), [user, logIn, logOut]);

	return <AuthContext.Provider value={context}>{user ? children : <LoginPage />}</AuthContext.Provider>;
}

export default AuthContext;

export class AuthErrorEventBus {
	cb!: (e: Error) => void;
	listen(cb: (e: Error) => void) {
		this.cb = cb;
	}

	notify(error: Error) {
		this.cb(error);
	}
}
