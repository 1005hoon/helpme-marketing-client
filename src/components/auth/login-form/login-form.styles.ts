import styled from "styled-components";

export const StyledLoginFormContainer = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const StyledLoginForm = styled.form`
	width: 500px;
	height: 300px;
	padding: 3rem 2rem 2.5rem;
	border-radius: 8px;
	border: 1px solid #dadce0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const StyledLoginFormTitle = styled.h1`
	font-weight: 500;
`;

export const StyledLoginFormButton = styled.button`
	padding: 1rem 2rem;
	background-color: #00b4e3;
	color: #fff;
	border: none;
	font-size: 14px;
	transition: 0.2s all;

	&:hover {
		cursor: pointer;
		background-color: #009ac2;
	}
`;
