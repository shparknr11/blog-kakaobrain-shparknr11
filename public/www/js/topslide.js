// DOM (html)을 다루려고 하는 목적인 경우
// 랜더링 이후 작동
window.addEventListener("load", function () {
  // 1. 외부에서 자료를 불러온다.
  const dataUrl = "./apis/topslide.json";

  fetch(dataUrl)
    .then((response) => {
      // Step 1. 자료 받아서 json 변경하기
      // 토큰을 js의 데이터로 변경하기
      const data = response.json();
      // 변환된 결과를 돌려주기
      return data;
    })
    .then((result) => {
      // Step 2. json 변경된 데이터 활용하기
      // 전체 글자 모음
      let slideTags = "";

      for (let i = 0; i < result.length; i++) {
        const data = result[i];
        // const data = {id: 1, pic: "png"}
        // 템플릿 문법 필요(html)
        const test = `<div class="swiper-slide">
          <a href="${data.url}" style="background:url('./images/${data.pic}') no-repeat center; background-size: cover;">
            <p class="slide-title">
              ${data.title}
            </p>
          </a>
        </div>`;
        slideTags = slideTags + test;
      }
      // 2. 자료를 이용해서 슬라이드에 배치할 html을 만든다.
      // 원하는 장소에 출력해 보자. DOM API 사용 document.querySelector();
      const whereTag = document.querySelector(".topslide .swiper-wrapper");
      whereTag.innerHTML = slideTags;
      // 3. html 완성후 swiper를 생성한다.
      // Swiper 기본코드를 넣어보자. *위치 중요
      const topSlide = new Swiper(".topslide", {
        loop: true, // 이미지 무한반복
        speed: 800,
        autoplay: {
          delay: 1500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

      // 4. 마우스 오버시 슬라이드를 일시 멈춤 및 재실행
      // 페이지네이션도 마우스 오버에 포함해야 하므로 .topslide로 지정
      const slideArea = document.querySelector(".topslide");
      slideArea.addEventListener("mouseenter", function () {
        // console.log("마우스 올렸어요.");
        topSlide.autoplay.stop();
      });
      slideArea.addEventListener("mouseleave", function () {
        // console.log("마우스 빠졋어요.");
        topSlide.autoplay.start();
      });
    })
    .catch((error) => {});
});
