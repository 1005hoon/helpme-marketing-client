import React from "react";
import {
	StyledLoginForm,
	StyledLoginFormButton,
	StyledLoginFormContainer,
	StyledLoginFormTitle,
} from "./login-form.styles";

interface LoginFormProps {
	children?: React.ReactNode;
	onLogin: () => void;
}

const LoginForm: React.FC<LoginFormProps> = (props) => {
	return (
		<StyledLoginFormContainer>
			<StyledLoginForm onSubmit={(e) => e.preventDefault()}>
				<StyledLoginFormTitle>법인등기 헬프미 | 마케팅 대시보드</StyledLoginFormTitle>
				<StyledLoginFormButton onClick={props.onLogin}>구글 계정으로 로그인</StyledLoginFormButton>
			</StyledLoginForm>
		</StyledLoginFormContainer>
	);
};

export default LoginForm;
