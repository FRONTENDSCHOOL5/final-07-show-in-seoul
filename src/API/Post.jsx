import { useRecoilValue } from 'recoil';
import { Token } from '../Atom/atom';
const URL = "https://api.mandarin.weniv.co.kr";

const PostPostAPI = async (post) => {
	const getMyToken = useRecoilValue(Token);

	try {
		const req = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Authorization": "Bearer " + getMyToken
			},
			body: JSON.stringify({ ...post })};

		const response = await fetch(URL + "/post", req);
		
		if (!response.ok)
			throw new Error("게시글 작성 에러");

		return await response.json();
	} catch (e) {
		console.error(e);
	}
};

const GetUserPostAPI = async (accountName) => {
	const getMyToken = useRecoilValue(Token);

	try {
		const req = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Authorization": "Bearer " + getMyToken
			}};

		const response = await fetch(URL + "/post/:" + {accountName} + "/userpost", req);
		
		if (!response.ok)
			throw new Error("사용자 게시글 목록 조회 에러");

		return await response.json();
	} catch (e) {
		console.error(e);
	}
};

const GetPostDetailAPI = async (postId) => {
	const getMyToken = useRecoilValue(Token);

	try {
		const req = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Authorization": "Bearer " + getMyToken
			}};

		const response = await fetch(URL + "/post/:" + {postId}, req);
		
		if (!response.ok)
			throw new Error("게시글 상세 조회 에러");

		return await response.json();
	} catch (e) {
		console.error(e);
	}
};

const EditPostAPI = async ({newPost}, {postId}) => {
	const getMyToken = useRecoilValue(Token);

	try {
		const req = {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				"Authorization": "Bearer " + getMyToken
			},
			body: JSON.stringify({ ...newPost })};

		const response = await fetch(URL + "/post/:" + {postId}, req);
		
		if (!response.ok)
			throw new Error("게시글 수정 에러");

		return await response.json();
	} catch (e) {
		console.error(e);
	}
};

const DeletePostAPI = async (postId) => {
	const getMyToken = useRecoilValue(Token);

	try {
		const req = {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				"Authorization": "Bearer " + getMyToken
			}};

		const response = await fetch(URL + "/post/:" + {postId}, req);
		
		if (!response.ok)
			throw new Error("게시글 삭제 에러");

		return await response.json();
	} catch (e) {
		console.error(e);
	}
};

const ReportPostAPI = async (postId) => {
	const getMyToken = useRecoilValue(Token);

	try {
		const req = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Authorization": "Bearer " + getMyToken
			}};

		const response = await fetch(URL + "/post/:" + {postId} + "/report", req);
		
		if (!response.ok)
			throw new Error("게시글 신고 에러");

		return await response.json();
	} catch (e) {
		console.error(e);
	}
};

export {PostPostAPI, GetPostDetailAPI, GetUserPostAPI, DeletePostAPI, ReportPostAPI, EditPostAPI};