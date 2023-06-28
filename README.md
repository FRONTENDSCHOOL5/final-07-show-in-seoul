# 🎆 쇼 in Seoul 🎆

## 프로젝트 소개 및 개요
>서울시 문화 행사 정보 공공 API어쩌구

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
8. [소감](#8-소감) 

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
- 
**🔨 기능 개발**
-
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
### 💙 오세원
**🖥️ 화면 구현**
- 
**🔨 기능 개발**
-
### 💜 유재영
**🖥️ 화면 구현**
- 
**🔨 기능 개발**
-

</br> 

## 3. 기술 및 개발환경

✨ Front-end : <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white"/>  <img src="https://img.shields.io/badge/StyledComponents-DB7093?style=flat&logo=styledComponents&logoColor=white"/> 

✨ Back-end : 제공된 API 사용

✨ Design : <img src="https://img.shields.io/badge/Figma-F24E1E?style=flat&logo=Figma&logoColor=white"/> 
(와이어 프레임이나 정보구조도 링크를 달아줘도 좋을듯)

✨ 협업 : <img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"/> <img src="https://img.shields.io/badge/Git-F05032?style=flat&logo=Git&logoColor=white"/> <img src="https://img.shields.io/badge/Notion-000000?style=flat&logo=Notion&logoColor=white"/> <img src="https://img.shields.io/badge/Discord-5865F2?style=flat&logo=Discord&logoColor=white"/>
(노션 링크도)

</br>

### [개발 환경]
Git Flow 방식을 사용하여 페이지/기능 별 브랜치를 만들고 각자 작업 브랜치를 따로 생성하여, 페이지 브랜치로 PR 및 Merge를 진행합니다.

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

### [코드 컨벤션]


## 4. 폴더 구조
- API/ : API 
- Assets/ : 이미지, 아이콘
- Atom/ : 상태 관리
- Components/ : 컴포넌트
- Components/Common/ : 공통 컴포넌트
- Hook/ : 커스텀 훅
- Pages/ : 각 페이지 구현
- Style/ : globalstyle, 공통 스타일


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
* 게시글 수정
* 댓글 게시, 삭제
* 좋아요
### 👨🏿‍🤝‍👨🏼프로필
* 로그아웃
* 프로필 수정
* 프로필 이미지 선택


## 6. UI

## 7. 페이지 기능
 

## 8. 소감
### 🧡 김도경
 - 
### 💚 김소진
 - 
### 💙 오세원
 - 
### 💜 유재영
 - 
