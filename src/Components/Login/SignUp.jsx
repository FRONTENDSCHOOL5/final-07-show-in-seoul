import {useNavigate} from 'react-router-dom';
import { SignUpAPI } from '../API/User';
import { LoginAPI } from '../API/User';

const checkInterests = () => {
	//취향 체크 (태그 선택된 것 string으로 바꿔주기)
	setProfile({ ...profile, intro: '임시 문장입니다.' });
};

const isValidProfile = () => {
	//유효성 검사
	return true;
};

const signUp = async profile => {
	const navigate = useNavigate();
	const signUpResponse = await SignUpAPI({ user: profile });
	if (signUpResponse.hasOwnProperty('user')) {
		const loginResponse = await LoginAPI({ user: { email: profile.email, password: profile.password } });
		if (loginResponse.hasOwnProperty('user')) {
			setToken(loginResponse.user.token);
			navigate('/mainpage');
		} else {
			console.log('회원가입 후 로그인 실패');
		}
	} else {
		console.log('회원가입 실패');
	}
};

const signUpHandler = () => {
	checkInterests();
	if (isValidProfile()) {
		signUp(profile);
	}
};

export {signUpHandler};