// header.js 구조 작업 파일

// html이 load되고 scroll의 위치를 파악하는게 좋음
// window.addEventListener load 안에 scroll 담기
window.addEventListener("load", function () {
  // 브라우저에 스크롤바의 위치를 파악해야함.
  // 현재 스크롤바의 위치값 알아내기
  let scY = window.scrollY;

  // scY 즉, 스크롤바의 위치가 0보다 크면 스크롤 된거다.
  // header 에 라인의 css(.header)를 적용한다. .을 빼면 html<header>를 찾아감
  const header = document.querySelector(".header");

  if (scY > 0) {
    // header 객체, 즉 DOM 에 css 목록에 추가하자 (클래스명)
    header.classList.add("line-active");
    console.log(header.classList);
  } else {
    // header 객체, 즉 DOM 에 css 목록에 제거하자 (클래스명)
    header.classList.remove("line-active");
  }

  window.addEventListener("scroll", function () {
    // 스크롤 했을 경우에 스크롤바의 위치값 알아내기
    scY = window.scrollY;
    if (scY > 0) {
      header.classList.add("line-active");
    } else {
      header.classList.remove("line-active");
    }
  });
});
