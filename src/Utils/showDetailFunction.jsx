// (참고) 공공 API 데이터 형식
// CODENAME: "클래식"
// DATE: "2023-12-05~2023-12-05"
// END_DATE: "2023-12-05 00:00:00.0"
// ETC_DESC: ""
// GUNAME: "마포구"
// MAIN_IMG: "https://culture.seoul.go.kr/cmmn/file/getImage.do?atchFileId=6a59720cd9c34bbfa056eb6b5031f809&thumb=Y"
// ORG_LINK: "https://www.mfac.or.kr/performance/whole_view.jsp?sc_b_category=17&sc_b_code=BOARD_1207683401&pk_seq=2176&page=1"
// ORG_NAME: ""
// PLACE: "마포아트센터 아트홀맥"
// PLAYER: "피아니스트 김도현"
// PROGRAM: ""
// RGSTDATE: "2023-03-15"
// STRTDATE: "2023-12-05 00:00:00.0"
// THEMECODE: "기타"
// TICKET: "기관"
// TITLE: " M 아티스트 2023 김도현 피아노 리사이틀 II"
// USE_FEE: " VIP석 55,000원, R석 44,000원, S석 33,000원"
// USE_TRGT: " 8세이상관람가[미취학아동입장불가]"

// 공연 카테고리 확인 함수 : '축제' 단어 포함 시 축제 반환
export const showCodeName = codename => {
  return codename.includes('축제') ? '축제' : codename;
};

// 공연 날짜 확인 함수
export const showDateForm = (startDate, endDate) => {
  let startDateForm = startDate.split(' ')[0];
  let endDateForm = endDate.split(' ')[0];

  if (startDateForm === endDateForm) return startDateForm;
  else return startDateForm + '~' + endDateForm;
};

// 공연 상태 확인 함수
export const showState = (startDate, endDate) => {
  // 오늘 날짜 확인 - 반환 데이터 형식 : '2023-00-00'
  const today = new Date().toISOString().slice(0, 10);

  return today < startDate ? '공연예정' : today > endDate ? '공연종료' : '공연중';
};

// 정보가 null이면 '정보없음' 반환, 데이터 앞 공백 제거하는 함수
export const showDataTrim = showData => {
  return showData === '' ? '정보없음' : showData.replace(/^\s+/g, '');
};
