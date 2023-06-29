<img src="https://github.com/FRONTENDSCHOOL5/final-07-show-in-seoul/assets/118108221/953ddb46-348e-4e7a-8c3e-f59042a83f7d" width="800px;" alt="목업이미지" >


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
<img src="https://github.com/FRONTENDSCHOOL5/final-07-show-in-seoul/assets/103922121/b44801a7-548e-4f4d-bd6f-44967c36e235" width=800>

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
|🔗 [splash]|🔗 [로그인 페이지]|🔗 [회원가입 페이지]|🔗 [프로필 설정]|
|:-:|:-:|:-:|:-:|
|![스플래시](https://github.com/FRONTENDSCHOOL5/final-07-show-in-seoul/assets/126149375/4f515833-fe7d-403f-b63d-b2ab87261516)|![로그인](https://github.com/FRONTENDSCHOOL5/final-07-show-in-seoul/assets/126149375/b3a69d63-f15e-4612-8fb4-e86eadf98f9e)|![회원가입](https://github.com/FRONTENDSCHOOL5/final-07-show-in-seoul/assets/126149375/dcf02b67-a743-40bb-a6ee-37b65b6186f3)|![프로필 설정](https://github.com/FRONTENDSCHOOL5/final-07-show-in-seoul/assets/126149375/677fa9e2-4a7f-4b88-93d3-9357be1a0697)|


|🔗 [카테고리 페이지]|🔗 [검색]|🔗 [메인 페이지]|🔗 [행사 상세 페이지]
|:-:|:-:|:-:|:-:|
|![카테고리](https://github.com/FRONTENDSCHOOL5/final-07-show-in-seoul/assets/126149375/19e070b0-2b79-4b99-9689-4f7001e2851d)|![검색](https://github.com/FRONTENDSCHOOL5/final-07-show-in-seoul/assets/126149375/6b3b44e2-8237-4a9f-988e-2ee8852a90a7)|![메인피드 탑바 클릭](https://github.com/FRONTENDSCHOOL5/final-07-show-in-seoul/assets/126149375/c249ea0d-1781-47df-93ff-69ab7efc29ba)|![행사상세페이지](https://github.com/FRONTENDSCHOOL5/final-07-show-in-seoul/assets/126149375/c5eec896-5fd9-4c3b-b0f3-9690c5e95b45)|

<br/>

### 2) 게시판 & 프로필
|🔗 [후기 작성 페이지]|🔗 [후기 게시판 페이지]|🔗 [후기 상세]|
|:-:|:-:|:-:|
|![후기 작성](https://github.com/FRONTENDSCHOOL5/final-07-show-in-seoul/assets/126149375/bde17ddf-e4a3-43dd-b839-81f0a5a3f0c1)|![후기 피드](https://github.com/FRONTENDSCHOOL5/final-07-show-in-seoul/assets/126149375/d9104c51-1a2c-4e1c-80b1-3aea3b6277fd)|![게시글 상세](https://github.com/FRONTENDSCHOOL5/final-07-show-in-seoul/assets/126149375/4a83c99f-85e7-452d-924d-513e4f32df12)|


|🔗 [마이 프로필 페이지]|🔗 [다른 유저 프로필 페이지]|🔗 [프로필 수정]|
|:-:|:-:|:-:|
|![마이 프로필 상세](https://github.com/FRONTENDSCHOOL5/final-07-show-in-seoul/assets/126149375/b268a25e-9bbe-4088-ba84-6f9fdf3ee602)|![다른 유저 프로필 상세](https://github.com/FRONTENDSCHOOL5/final-07-show-in-seoul/assets/126149375/d283ed2f-36b5-4f6a-8761-c5d52db5ead9)|![프로필 수정](https://github.com/FRONTENDSCHOOL5/final-07-show-in-seoul/assets/126149375/29c6edaf-e068-436d-9181-def02b4a0741)|

<br/>

### 3) 후기 수정/삭제 & 좋아요
|🔗 [후기 수정]|🔗 [후기 삭제]|🔗 [로그아웃 ]|
|:-:|:-:|:-:|
|![후기 수정](https://github.com/FRONTENDSCHOOL5/final-07-show-in-seoul/assets/126149375/f43ea48a-4f05-49e1-b821-73bab6f773cc)|![게시글 삭제](https://github.com/FRONTENDSCHOOL5/final-07-show-in-seoul/assets/126149375/2c419f77-5bb2-4a66-89a8-6ce5423d9863)|![로그아웃](https://github.com/FRONTENDSCHOOL5/final-07-show-in-seoul/assets/126149375/4989fc34-727d-4266-9929-096c6c814275)|

|🔗 [댓글 작성]|🔗 [댓글 삭제]|🔗 [좋아요]|
|:-:|:-:|:-:|
|![댓글 작성](https://github.com/FRONTENDSCHOOL5/final-07-show-in-seoul/assets/126149375/72f433d0-111d-4694-9761-bc88bea58d30)|![댓글 삭제](https://github.com/FRONTENDSCHOOL5/final-07-show-in-seoul/assets/126149375/b3f47296-2b5a-49a8-b270-ae120f9f2501)|![좋아요](https://github.com/FRONTENDSCHOOL5/final-07-show-in-seoul/assets/126149375/307406db-e7d5-4f29-b836-76bedd25e896)|








