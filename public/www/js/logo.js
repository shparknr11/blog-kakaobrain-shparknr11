/*
 상단 로고 가능
 처음에는 로고가 기본 그림으로 보인다.
 사용자가 마우스 오버를 하면 로고가 부드럽게 변경이 된다.
 사용자가 마우스 아웃하면 로고가 첫 기본 그림으로 보인다.
 나는 위의 기능을 구현하기 위해서 Swiper 라이브러리를 사용할 예정이다.
 이유는 React 로 마이그레이션 할 것이기 떄문이다.

    1. 라이브러리를 사용하려면 레퍼런스를 참조해야 한다.
      https://swiperjs.com/
 */
// 만약 html 태그를 참조해야 하는 경우라면
// 1. html 태그 제일 뒷쪽에서 참조한다 (비추천)
// 2. window.onload = funtion(){코드} (비추천)
// 3. window.addEventListener("Load", funtion(){ 코드 }) (적극추천)

// 아래 구문은 html 태그, css 파일, image 파일, js 파일 등이 로드완료시 실행
// html에 script 태그를 위치에 상관없이 쓸수있게 해준다
window.addEventListener("load", function () {
  // 과연 swlogo 라는 html 클래스를 찾을 수 있을까?
  // console로 확인해보자. 확인후 주석함.
  // documemt : html (문서), querySelector : css 형식으로 찾아라(선택)
  // const swLogo = document.querySelector(".swlogo");
  // console.log(swLogo);

  const logoSlider = new Swiper(".swlogo", {
    effect: "fade",
    speed: 500,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
  });
  // 무조건 모션이 재생되면 안되기떄문에 기능 추가.
  logoSlider.autoplay.stop();
  // 사용자가 마우스 오버 하면 모션 재생
  // .header-logo-link 클래스에 마우스 오버하면 logoSlide가 모션 재생

  const headerLogoLink = document.querySelector(".header-logo-link");
  // console.log(headerLogoLink);
  // headerLogoLink.addEventListener("mosueenter", function () {});
  // 이벤트를 더하라 Listener (대기, 이벤트가일어나면 function을 하겠다.
  // 콜백함수)
  headerLogoLink.addEventListener("mouseenter", function () {
    logoSlider.autoplay.start();
  });
  headerLogoLink.addEventListener("mouseleave", function () {
    logoSlider.autoplay.stop();
    logoSlider.slideTo(0);
    // autoplay 멈추면 0번으로 가라
  });
});
