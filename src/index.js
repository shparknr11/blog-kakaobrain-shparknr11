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
