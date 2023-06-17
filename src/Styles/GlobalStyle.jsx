import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}

:root {
	--main: #961f1f;
	--disabled: #DCB6B6;
	--gray: #DBDBDB;
	--warning: #FC6D6D;
	--deepgray: #767676;
}

body {
	background-color: #fff8ed;
	font-family: 'pretendard', 'Noto Sans KR';
}

* {
	box-sizing: border-box;
}

li {
	list-style: none;
}

img {
	margin: 0;
}

input {
	all: unset;
}

a {
	text-decoration: none;
	color: inherit;
}

button {
	background: none;
	border: none;
	padding: 0;
	margin: 0;
	cursor: pointer;
}

.a11y-hidden {
	clip: rect(1px, 1px, 1px, 1px);
	clip-path: inset(50%);
	width: 1px;
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
}
`;

export default GlobalStyle;
