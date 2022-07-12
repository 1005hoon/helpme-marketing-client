import React from "react";
import LoginForm from "../../components/auth/login-form";
import { useAuth } from "../../context/AuthContext";

interface LoginPageProps {
	children?: React.ReactNode;
}

const LoginPage: React.FC<LoginPageProps> = (props) => {
	const { getAuthToken } = useAuth();
	const onLogin = async () => {
		getAuthToken();
	};

	return (
		<>
			<LoginForm onLogin={onLogin} />
		</>
	);
};

export default LoginPage;
