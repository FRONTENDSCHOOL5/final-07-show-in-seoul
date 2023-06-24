import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const Token = atom({
  key: 'Token',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const MyAccountName = atom({
  key: 'MyAccountName',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export const Show = atom({
  key: 'Show',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const TotalShow = atom({
  key: 'TotalShow',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const UserInterestTagCount = atom({
  key: 'ProfileTagCount',
  default: 0,
  // effects_UNSTABLE: [persistAtom],
});

export const CategoryInterestTagCount = atom({
  key: 'CategoryInterestTagcount',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const CategoryAreaTagCount = atom({
  key: 'CategoryAreaTagcount',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const UserInterestTags = atom({
  key: 'ProfileTags',
  default: [
    ['교육/체험', false],
    ['독주/독창회', false],
    ['무용', false],
    ['전시/미술', false],
    ['영화', false],
    ['축제', false],
    ['국악', false],
    ['콘서트', false],
    ['연극', false],
    ['뮤지컬/오페라', false],
    ['클래식', false],
  ],
  // effects_UNSTABLE: [persistAtom],
});

export const InterestTags = atom({
  key: 'InterestTags',
  default: [
    ['전체', true],
    ['교육/체험', false],
    ['독주/독창회', false],
    ['무용', false],
    ['전시/미술', false],
    ['영화', false],
    ['축제', false],
    ['국악', false],
    ['콘서트', false],
    ['연극', false],
    ['뮤지컬/오페라', false],
    ['클래식', false],
    ['기타', false],
  ],
  effects_UNSTABLE: [persistAtom],
});

export const AreaTags = atom({
  key: 'AreaTags',
  default: [
    ['전체', true],
    ['강남구', false],
    ['강동구', false],
    ['강북구', false],
    ['강서구', false],
    ['광진구', false],
    ['관악구', false],
    ['구로구', false],
    ['금천구', false],
    ['노원구', false],
    ['도봉구', false],
    ['동대문구', false],
    ['동작구', false],
    ['마포구', false],
    ['서대문구', false],
    ['서초구', false],
    ['성동구', false],
    ['성북구', false],
    ['송파구', false],
    ['양천구', false],
    ['영등포구', false],
    ['용산구', false],
    ['은평구', false],
    ['종로구', false],
    ['중구', false],
    ['중랑구', false],
  ],
  effects_UNSTABLE: [persistAtom],
});

export const setPeriod = atom({
  key: 'setPeriod',
  default: [0, 0],
});
