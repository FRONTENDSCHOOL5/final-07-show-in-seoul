import { useRecoilValue } from 'recoil';
import { AdminToken } from '../Atom/atom';
const URL = 'https://api.mandarin.weniv.co.kr';

const FollowAPI = async ({ accountname }) => {
  const getAdminToken = useRecoilValue(AdminToken);

  try {
    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + getAdminToken,
      },
    };

    const response = await fetch(URL + '/profile/' + { accountname } + '/follow', req);

    if (!response.ok) throw new Error('Admin 팔로우 에러');

    return await response.json();
  } catch (e) {
    console.error(e);
  }
};

const GetFeedAPI = async () => {
  const getAdminToken = useRecoilValue(AdminToken);
  try {
    const req = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + getAdminToken,
      },
    };

    const response = await fetch(URL + '/post/feed', req);

    if (!response.ok) throw new Error('Admin 팔로우 에러');

    return await response.json();
  } catch (e) {
    console.error(e);
  }
};

export { GetFeedAPI, FollowAPI };
