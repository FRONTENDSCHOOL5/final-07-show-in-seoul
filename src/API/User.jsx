import { useRecoilValue } from 'recoil';
import { Token } from '../Atom/atom';
const URL = "https://api.mandarin.weniv.co.kr";

const SignUpAPI = async (body) => {
	try {
		const req = {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ ...body })};

		const response = await fetch(URL + "/user", req);
		
		if (!response.ok)
			throw new Error("회원가입 에러");

		return await response.json();
	} catch (e) {
		console.error(e);
	}
};

const LoginAPI = async (body) => {
	try {
		const req = {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ ...body })};

		const response = await fetch(URL + "/user/login", req);
		
		if (!response.ok)
			throw new Error("로그인 에러");

		return await response.json();
	} catch (e) {
		console.error(e);
	}
};

const IsValidEmailAPI = async (email) => {
	try {
		const req = {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: {
				"user":{"accountname": {email}}
			}
		};

		const response = await fetch(URL + "/user/emailvalid", req);
		
		if (!response.ok)
			throw new Error("이메일 검증 에러");

		return await response.json();
	} catch (e) {
		console.error(e);
	}
};

const IsValidAccountAPI = async (accountName) => {
	try {
		const req = {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: {
				"user":{"accountname": {accountName}}
			}
		};

		const response = await fetch(URL + "/user/accountnamevalid", req);
		
		if (!response.ok)
			throw new Error("계정 검증 에러");

		return await response.json();
	} catch (e) {
		console.error(e);
	}
};

const IsValidTokenAPI = async () => {
	const getMyToken = useRecoilValue(Token);

	try {
		const req = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Authorization": "Bearer " + getMyToken
			}
		};

		const response = await fetch(URL + "/user/checktoken", req);
		
		if (!response.ok)
			throw new Error("토큰 검증 에러");

		return await response.json();
	} catch (e) {
		console.error(e);
	}
};

export {SignUpAPI, LoginAPI, IsValidAccountAPI, IsValidEmailAPI, IsValidTokenAPI};