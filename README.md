# 카카오브레인 블로그 클론 프로젝트

## 기본형 진행중

## 리액트 가기위한 최적화 작업

# React

0. 사전준비
   - Node.js 설치 (npm은 자동으로 설치됨)
   - yarn 쓰려면 직접 설치하여야함.
   - github에 repository 생성
1. 프로젝트 생성법

   - 폴더명은 규칙 (소문자로)
   - 리액트 프로젝트 : `npx create-react-app ./ --template typescript` (타입스크립트 권장)

<!-- 2. 피그마 / 기획 (생략) -->

2.  진행순서

    - public 폴더에 www 폴더 생성 후 퍼블리싱 작업 진행 및 테스트
    - React js 버전으로 진행. (CSR)
    - React ts 버전으로 진행.
    <!-- - Next js 버전으로 진행. -->
    - Next ts 버전으로 진행. (SSR)

3.  프로잭트 내용 기본 파악하기
    3.1. node_modules

            - npm 또는 yarn 으로 다운로드 받은 파일 보관
            - npm install 라이브러리명 을 이용하여 다운로드 받고 활용
            - 만약 프로젝트가 라이브러리 등의 오류가 발생했다면
                1) node_modules 폴더 삭제
                2) package-lock.json 파일 삭제
                3) 이후 `npm i` 를 작성 후 실행 (터미널)
            - 깃 허브 push 대상에서 제외하기 위해 .gitignore 에 자동 입력

    3.2. public 폴더 ( 꼭 기억하세요. 압축 안됩니다! `Webpack 에서 제외됨`)

            - index.html
            : 최초 웹 서비스 실행 시 실행되는 파일명 (파일명 변경불가)
            : lang="ko" 수정
            : favicon 아이콘 수정
            : SEO 관련 내용은 별도 추가 (네이버 검색, 구글 검색, GA4 적용예정)
            : apple-touch-icon 수정
            : title 내용 수정
            : manifest.json 은 추후 내용 수정필요(https://web.dev/articles/add-manifest?hl=ko)
            : id="root"는 리액트 미리보기 및 결과물이 배치되는 장소

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <!-- SEO 적용 필요 : 네이버 검색 및 구글 검색 등록 예정, GA4 예정 -->
    <meta name="description" content="카카오 브레인 블로그 클론 코딩" />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>카카오 브레인블로그</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```

            - manifest.json 파일 수정
                : `https://web.dev/articles/add-manifest?hl=ko`

```json
{
  "short_name": "카카오 브레인 블로그 클론코딩",
  "name": "카카오 브레인 블로그 클론코딩",
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    },
    {
      "src": "logo192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "logo512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
}
```

        - robots.txt 파일수정
            - 검색엔진 로봇이 내용을 접근해서 보관하는 여부 설정
            - 상세 경험은 네이버 및 구글 검색엔진 등록 시 실습

    3.3. src폴더
        - index. js

```js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// 아래 라이브러리는 구글의 웹 성능 리포트 기능
// import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //<React.StrictMode /> 디버그 전용, 메시지 창 두번 띄워준다
  <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
```

        - App.js 는 최초 화면에 보여지는 내용

        - TDD 관련 파일 제거 (Test Driven Develop) : 테스트 주도 개발
            - App.test.js
            - setupTests.js
        - 성능 측정파일 제거
            - reportWebVitals.js

    3.4. .gitignore 파일
        - 깃허브 파일 예외 사항 기재
        - 폴더 및 파일 작성하면 제외됨.
        - 추후 내용 작성 필요 (예. 인증키)

    3.5. package-lock.json
        - node_modules 에서 사용된 라이브러리들의 버전 보관

    3.6. package.json
        - node.js 프로젝트 생성시 기초 정보 관리
        - dependencies 항목이 중요합니다.
            : 프로젝트에 실제 활용한 라이브러리 목록 (파악용도)
            : 개발 / 최종 빌드한 소스에 포함이 되는 라이브러리들 목록
            : npm start 개발시 포함
            : npm build 배포시 포함

# React 기초 2.
