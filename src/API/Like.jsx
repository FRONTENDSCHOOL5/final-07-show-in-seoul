import { useRecoilValue } from 'recoil';
import { Token } from '../Atom/atom';
const URL = "https://api.mandarin.weniv.co.kr";

const HeartPostAPI = async (postId) => {
	const getMyToken = useRecoilValue(Token);

	try {
		const req = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Authorization": "Bearer " + getMyToken
			}};

		const response = await fetch(URL + "/post/:" + {postId} + "/heart", req);
		
		if (!response.ok)
			throw new Error("게시글 좋아요 에러");

		return await response.json();
	} catch (e) {
		console.error(e);
	}
};

const UnheartPostAPI = async (postId) => {
	const getMyToken = useRecoilValue(Token);

	try {
		const req = {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				"Authorization": "Bearer " + getMyToken
			}};

		const response = await fetch(URL + "/post/:" + {postId} + "/unheart", req);
		
		if (!response.ok)
			throw new Error("게시글 좋아요 에러");

		return await response.json();
	} catch (e) {
		console.error(e);
	}
};

export {HeartPostAPI, UnheartPostAPI};