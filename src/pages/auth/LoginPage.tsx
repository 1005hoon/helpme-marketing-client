import React from "react";

interface LoginPageProps {
	children?: React.ReactNode;
}

const LoginPage: React.FC<LoginPageProps> = (props) => {
	return (
		<div>
			<h1>Login Page</h1>
		</div>
	);
};

export default LoginPage;
