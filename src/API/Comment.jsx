import { useRecoilValue } from 'recoil';
import { Token } from '../Atom/atom';
const URL = "https://api.mandarin.weniv.co.kr";

const PutCommentAPI = async ({postId}, {comment}) => {
	const getMyToken = useRecoilValue(Token);

	try {
		const req = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Authorization": "Bearer " + getMyToken
			},
			body: {
				"comment": {
					"content": {comment}
				}
			}
		};

		const response = await fetch(URL + "/post/:" + {postId} + "/comments", req);
		
		if (!response.ok)
			throw new Error("댓글 작성 에러");

		return await response.json();
	} catch (e) {
		console.error(e);
	}
};

const DeleteCommentAPI = async ({postId}, {commentId}) => {
	const getMyToken = useRecoilValue(Token);

	try {
		const req = {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				"Authorization": "Bearer " + getMyToken
			}
		};

		const response = await fetch(URL + "/post/:" + {postId} + "/comments/:" + {commentId}, req);
		
		if (!response.ok)
			throw new Error("댓글 삭제 에러");

		return await response.json();
	} catch (e) {
		console.error(e);
	}
};

const ReportCommentAPI = async ({postId}, {commentId}) => {
	const getMyToken = useRecoilValue(Token);

	try {
		const req = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Authorization": "Bearer " + getMyToken
			}
		};

		const response = await fetch(URL + "/post/:" + {postId} + "/comments/:" + {commentId} + "/report", req);
		
		if (!response.ok)
			throw new Error("댓글 신고 에러");

		return await response.json();
	} catch (e) {
		console.error(e);
	}
};

const GetCommentListAPI = async (postId) => {
	const getMyToken = useRecoilValue(Token);

	try {
		const req = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Authorization": "Bearer " + getMyToken
			}
		};

		const response = await fetch(URL + "/post/:" + {postId} + "/comments", req);
		
		if (!response.ok)
			throw new Error("댓글 리스트 가져오기 에러");

		return await response.json();
	} catch (e) {
		console.error(e);
	}
};

export {PutCommentAPI, ReportCommentAPI, DeleteCommentAPI, GetCommentListAPI};