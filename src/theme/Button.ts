import styled from "styled-components";

const Button = styled.button`
	display: inline-block;
	color: palevioletred;
	font-size: 1em;
	background-color: white;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid palevioletred;
	border-radius: 3px;
	display: block;
	cursor: pointer;
`;

Button.displayName = "Button";

export default Button;
