import { useRecoilValue } from 'recoil';
import { Token } from '../Atom/atom';
const URL = "https://api.mandarin.weniv.co.kr";

const GetMyProfileAPI = async () => {
	const getMyToken = useRecoilValue(Token);

	try {
		const req = {
			method: "GET",
			headers: {
				"Authorization": "Bearer " + getMyToken
			}};

		const response = await fetch(URL + "/user/myinfo", req);
		
		if (!response.ok)
			throw new Error("프로필 정보 불러오기 에러");

		return await response.json();
	} catch (e) {
		console.error(e);
	}
};

const EditProfileAPI = async (profile) => {
	const getMyToken = useRecoilValue(Token);

	try {
		const req = {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				"Authorization": "Bearer " + getMyToken
			},
			body: JSON.stringify({ ...profile })};

		const response = await fetch(URL + "/user", req);
		
		if (!response.ok)
			throw new Error("프로필 수정 에러");

		return await response.json();
	} catch (e) {
		console.error(e);
	}
};

const GetOtherProfileAPI = async (accountName) => {
	const getMyToken = useRecoilValue(Token);

	try {
		const req = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Authorization": "Bearer " + getMyToken
			}
		};

		const response = await fetch(URL + "/profile/:" + {accountName}, req);
		
		if (!response.ok)
			throw new Error("다른 프로필 보기 에러");

		return await response.json();
	} catch (e) {
		console.error(e);
	}
};

export {GetMyProfileAPI, GetOtherProfileAPI, EditProfileAPI};