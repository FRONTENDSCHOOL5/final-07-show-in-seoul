# 🎆 SHOW in Seoul 🎆

<img src="https://github.com/FRONTENDSCHOOL5/final-07-show-in-seoul/assets/118108221/23f27e98-92b7-45dd-b814-2eb14c1ca95e" width="800px;" alt="목업이미지" >

## 프로젝트 소개 및 개요
>**SHOW in Seoul**은 서울시 **문화행사 정보와 그에 대한 후기**를 한눈에 볼 수 있는 모바일 서비스입니다.
>
>문화 행사 공공 API를 활용하여 **매일 업데이트**되는 행사 정보를 볼 수 있으며
>
>지역구, 취향에 따른 **카테고리**를 선택하여 원하는 정보만 **필터링**하여 보다 쉽고 편리하게 행사 정보를 확인할 수 있습니다.  

</br> 

🔗배포 URL : `test`

🔒Test ID : `test`

🔓Test PW : `test`

</br>

## 목차
1. [팀원 소개](#1-팀원-소개)
2. [역할 분담](#2-역할-분담)
3. [기술 및 개발 환경](#3-기술-및-개발환경)
4. [폴더 구조](#4-폴더-구조)
5. [주요 기능](#5-주요-기능)
6. [UI](#6-ui)
7. [페이지 기능](#7-페이지-기능)

</br> 

## 1. 팀원 소개
|**김도경**|**김소진**|**오세원**|**유재영** |
| :------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://avatars.githubusercontent.com/d-charlie-kim" width="180px;"> | <img src="https://avatars.githubusercontent.com/kimSojinn" width="180px;"> | <img src="https://avatars.githubusercontent.com/sewon-O" width="180px;"/> | <img src="https://avatars.githubusercontent.com/zxxng" width="180px;" > |
| [d-charlie-kim](https://github.com/d-charlie-kim) | [kimSojinn](https://github.com/kimSojinn) | [sewon-O](https://github.com/sewon-O) | [zxxng](https://github.com/zxxng) |
|![FrontEnd](https://img.shields.io/badge/FrontEnd-961F1F)</br> ![Team%20Leader](https://img.shields.io/badge/-Team%20leader-95DBF9) | ![FrontEnd](https://img.shields.io/badge/FrontEnd-961F1F)</br> | ![FrontEnd](https://img.shields.io/badge/FrontEnd-961F1F)</br> | ![FrontEnd](https://img.shields.io/badge/FrontEnd-961F1F)</br> |

</br> 

## 2. 역할 분담

### 🧡 김도경
**🖥️ 화면 구현**
- 로고 디자인
- 카테고리 페이지 디자인 및 마크업
- 프로필 설정 페이지 디자인 및 마크업
- 프로필 수정 페이지 디자인 및 마크업
  
**🔨 기능 개발**
- Recoil 상태 관리 라이브러리 도입
- 필터링에 활용될 분야 태그들 관리
- 태그 선택 제한 및 전체보기 버튼과 다른 버튼과의 상호작용 구현
- 프로필 정보들 유효성 검사
- String으로 들어가는 Intro 값을 태그 값으로 변환 및 표시
- 이미지 업로드 및 업로드 된 이미지 미리보기로 반영
- 프로필 수정 시 기존의 프로필 반영

</br>

### 💚 김소진
**🖥️ 화면 구현**
- splash screen
- 로그인, 회원가입, 프로필 설정 페이지 마크업
- 404 에러 페이지
- 재사용성을 고려한 공통 컴포넌트
    - 버튼 컴포넌트, scroll to top 버튼, 모달 컴포넌트, 에러 컴포넌트
 
**🔨 기능 개발**
- splash screen
    - 정밀한 keyframes 값을 주어 페이지 이동 시 자연스러운 흐름 고려
- 로그인
    - 유효성 검사
    - 인풋값 유효성에 따른 버튼 disabled
    - 사용자 토큰 저장
 
</br>

### 💙 오세원
**🖥️ 화면 구현**
- 게시글 공통 컴포넌트
- 프로필 공통 컴포넌트
- 프로필 상세 페이지 마크업
- 공연 후기 피드 페이지 마크업
- 공연 후기 상세 페이지 마크업
- 공연 후기 작성 페이지 마크업
  
**🔨 기능 개발**
- 공연 후기 피드 페이지
    - 공연후기 데이터들을 받아와 화면에 그려주는 기능 구현 (API 명세에 따름) 
- 프로필 상세 페이지
    -  유저 정보 및 게시글 데이터를 받아와 화면에 그려주는 기능 구현 (API 명세에 따름) 
- 후기 작성 페이지
    - 작성  유저가 후기를 작성하고 싶은 공연의 포스터 이미지와 정보를 받아와 후기 작성 페이지에 디폴트 값으로 등록 시킴으로써 후기를 작성하기 편안하도록 구현 
- 공연 후기 수정 / 삭제
    -  내 후기 게시글의 설정 버튼을 누를때는 게시글 수정 / 삭제 모달이 뜨고  다른 유저 게시글 일 때는 신고하기 모달이 나오도록 구분 시키고 수정과 삭제 기능 구현
- 댓글 작성 / 삭제 댓글 작성 기능 구현
    - 내 댓글이면 삭제하기 모달, 다른 유저 댓글이면 신고하기 모달이 뜨고 삭제 기능 구현 
- 좋아요
    -  좋아요는 게시글 당 한번씩만 할 수 있고 좋아요를 또 누르면 취소가 되는 기능 구현

</br>

### 💜 유재영
**🖥️ 화면 구현**
- 메인페이지 디자인 및 마크업
- 행사상세페이지 디자인 및 마크업
- 검색페이지 디자인 및 마크업
- 하단 네비게이션 마크업 및 컴포넌트화
- 상단바 마크업 및 컴포넌트화
  
**🔨 기능 개발**
- 메인페이지 기능 개발
    - Promise.All 을 활용한 공공API 데이터 통신 최적화
        - 카테고리 태그 선택을 통한 접속시 필터링 기능 구현
        - 데이터 통신 대기시간 발생 시 랜덤이미지 스켈레톤 렌더링 기능 구현
- 행사상세페이지 기능 개발
    - 메인페이지에서 선택한 컨텐츠에 해당하는 데이터 렌더링
- 검색페이지 기능 개발
    - 인풋, 검색아이콘을 통한 검색 기능 구현
        - 검색결과 keyword 색상 변경
- 모달, 에러페이지 조건부 렌더링 기능 구현

</br> 

## 3. 기술 및 개발환경

✨ Front-end : <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white"/>  <img src="https://img.shields.io/badge/StyledComponents-DB7093?style=flat&logo=styledComponents&logoColor=white"/> <img src="https://img.shields.io/badge/Recoil-764ABC?style=flat&logo=Recoil&logoColor=white"/> 

✨ Back-end : 제공된 API 사용

✨ Design : <img src="https://img.shields.io/badge/Figma-F24E1E?style=flat&logo=Figma&logoColor=white"/> 

✨ 협업 : <img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"/> <img src="https://img.shields.io/badge/Git-F05032?style=flat&logo=Git&logoColor=white"/> <img src="https://img.shields.io/badge/Notion-000000?style=flat&logo=Notion&logoColor=white"/> <img src="https://img.shields.io/badge/Discord-5865F2?style=flat&logo=Discord&logoColor=white"/>

</br>

### [정보 구조도]

<img alt="정보구조도" src="https://github.com/FRONTENDSCHOOL5/final-07-show-in-seoul/assets/118108221/25a9b51e-c4e3-49bf-8941-d2038ebe4538" width="800px;">

</br>

</br>

### [개발 환경]
코드 충돌을 줄이고 브랜치 관리가 용이한 **Git Flow** 방식을 사용하여 페이지/기능 별 브랜치를 만들고
각자 작업 브랜치를 따로 생성하여, 페이지 브랜치로 PR 및 Merge를 진행합니다.

</br>

### [커밋 컨벤션]
|커밋 유형|설명|
|---------|----|
|Feat|새로운 기능, 특징 추가|
|Fix|버그해결, 수정|
|Docs|문서에 관련된 내용, 문서 수정|
|Style|스타일링|
|Refactor|리팩토링|
|Test|테스트 코드 수정, 누락된 테스트를 추가할 때, 리팩토링 테스트 추가|
|Chore|자잘한 수정에 대한 커밋|
|Remove|어떤 요소 혹은 파일을 삭제했을 때|
|Build|npm 등 설치 실행 관련|
|Init|최초 세팅|

</br>

## 4. 폴더 구조

<details>
<summary>📁</summary>
  
```
+---public
|       favicon.ico
|       index.html
|
\---src
    |   App.js
    |   index.js
    |
    +---API
    |       Comment.jsx
    |       GetShowAPI.jsx
    |       Image.jsx
    |       Like.jsx
    |       PostAPI.jsx
    |       Profile.jsx
    |       useFollow.jsx
    |       useProfile.jsx
    |       User.jsx
    |
    +---Assets
    |   +---Icon
    |   |   |
    |   |   \---skeleton
    |   |
    |   \---Img
    |
    +---Atom
    |       atom.jsx
    |
    +---Components
    |   +---Article
    |   |       Content.jsx
    |   |       FeedContents.jsx
    |   |       ShowDetailInfo.jsx
    |   |       ShowDetailTopBar.jsx
    |   |       TotalCount.jsx
    |   |
    |   +---Category
    |   |       CategoryHeader.jsx
    |   |       CategoryPeriod.jsx
    |   |
    |   +---Common
    |   |   |   BottomNav.jsx
    |   |   |   Button.jsx
    |   |   |   Error.jsx
    |   |   |   InputBox.jsx
    |   |   |   Profile.jsx
    |   |   |   ProfileImageEdit.jsx
    |   |   |   ProfileInfoEdit.jsx
    |   |   |   Skeleton.jsx
    |   |   |   TopBar.jsx
    |   |   |   TopBarBtn.jsx
    |   |   |   TopBtn.jsx
    |   |   |
    |   |   \---Post
    |   |           Post.jsx
    |   |           PostContent.jsx
    |   |           PostContentButtons.jsx
    |   |           PostHeader.jsx
    |   |           PostLayoutButtons.jsx
    |   |
    |   +---Login
    |   |       Login.jsx
    |   |       SignUp.jsx
    |   |
    |   +---Modal
    |   |       Alert.jsx
    |   |       Modal.jsx
    |   |
    |   +---Post
    |   |       Comments.jsx
    |   |       CommentsForm.jsx
    |   |
    |   +---Profile
    |   |       AreaTag.jsx
    |   |       CategoryTags.jsx
    |   |       InterestsTag.jsx
    |   |       ProfileInterests.jsx
    |   |       ProfileTags.jsx
    |   |
    |   \---Search
    |           SearchContent.jsx
    |           SearchInput.jsx
    |
    +---Hook
    |       useAtomReset.jsx
    |       useDataFiltering.jsx
    |       useScrollToTop.jsx
    |       useTokenCheck.jsx
    |
    +---Pages
    |       CategoryPage.jsx
    |       ErrorPage.jsx
    |       LoginPage.jsx
    |       MainPage.jsx
    |       PostDetailPage.jsx
    |       PostEditPage.jsx
    |       PostingPage.jsx
    |       PostPage.jsx
    |       ProfileDetailPage.jsx
    |       ProfileEditPage.jsx
    |       ProfileSettingPage.jsx
    |       SearchPage.jsx
    |       ShowDetailPage.jsx
    |       SignupPage.jsx
    |       SplashPage.jsx
    |
    +---Route
    |       RequireAuth.jsx
    |
    +---Styles
    |       GlobalStyle.jsx
    |       LayoutStyle.jsx
    |
    \---Utils
            showDetailFunction.jsx
```
</details>


- API/ : API 
- Assets/ : 이미지, 아이콘
- Atom/ : 상태 관리
- Components/ : 컴포넌트
- Components/Common/ : 공통 컴포넌트
- Hook/ : 커스텀 훅
- Pages/ : 각 페이지 구현
- Style/ : globalstyle, 공통 스타일

</br>

## 5. 주요 기능
### 🔒 로그인 / 회원가입
 * 로그인
 * 회원가입
 * 취향 태그 선택
 * 유효성 검사
 * 토큰 검증
### 📎 카테고리
 * 선택한 분야와 지역구에 따른 필터링 기능
### 📃 피드
* 게시글 업로드
* 행사 상세 페이지
### 🔍 검색
* 행사 검색
### 🖼 게시글
* 게시글 수정, 삭제
* 댓글 게시, 삭제
* 좋아요
### 👨🏿‍🤝‍👨🏼프로필
* 로그아웃
* 프로필 수정
* 프로필 이미지 선택

</br>

## 6. UI
<img src="https://github.com/FRONTENDSCHOOL5/final-07-show-in-seoul/assets/118108221/bb8581a6-e2a5-43b0-abc5-ad191a856bb3" alt="UI" >


</br>


</br>

## 7. 페이지 기능
### 1) 홈
|🔗 [splash]|🔗 [로그인 페이지]|🔗 [회원가입 페이지]|
|:-:|:-:|:-:|
||||

|🔗 [카테고리 페이지]|🔗 [메인 페이지]|🔗 [행사 상세 페이지]
|:-:|:-:|:-:|
|||

<br/>

### 2) 게시판 & 프로필
|🔗 [후기 작성 페이지]|🔗 [후기 게시판 페이지]|🔗 [프로필 페이지]
|:-:|:-:|:-:|
|||

|🔗 [프로필 수정 페이지]|🔗 [로그아웃 모달]
|:-:|:-:|
|||

|🔗 [게시글 수정 / 삭제 모달]|🔗 [댓글 삭제 모달]|
|:-:|:-:|
|||



