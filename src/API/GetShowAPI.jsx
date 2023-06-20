import { Show } from "../Atom/atom";
import { useSetRecoilState } from "recoil";
import { useRecoilValue } from "recoil";

const GetShowAPI = async () => {
	const setShow = useSetRecoilState(Show);
	const getShow = useRecoilValue(Show);

	try {
	// while(true) {
			const response = await fetch("http://openapi.seoul.go.kr:8088/774c79676c79686f31303566616f7871/json/culturalEventInfo/" + (getShow.length + 1) + "/" + (getShow.length + 1000));

			if (!response.ok)
				throw new Error("ERROR");
			if (!response.length)
				setShow({...getShow, ...response});

		// }
		return getShow;

	} catch (e) {
		console.error(e);
	}
};

export default GetShowAPI;
