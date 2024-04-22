// html이 load되고 scroll의 위치를 파악하는게 좋음
// window.addEventListener load 안에 scroll 담기
window.addEventListener("load", function () {
  // header 에 라인의 css(.header)를 적용한다. .을 빼면 html<header>를 찾아감
  const header = document.querySelector(".header");

  // 함수안은 수정안해도 되도록 개선
  const headerActivClass = "line-active"; // 변경되는 css 클래스명
  // 클래스(line-active)가 적용되는 최소 높이값
  const headerActiveValue = 0;

  /*
   * 스크롤바의 위치에 따라서 css 적용함수
   * _html : 대상 html 태그 > header
   * _tgY : css 가 적용될 위치 값 > headerActiveValue
   * _avtive : 적용할 css 클래스명 > headerActivClass
   * _scY : 스크롤바의 위치 > window.scrollY
   */
  function showLine(_html, _tgY, _active, _scY) {
    // 브라우저에 스크롤바의 위치를 파악해야함.
    // 현재 스크롤바의 위치값 알아내기
    // scY = window.scrollY;
    // scY 즉, 스크롤바의 위치가 0보다 크면 스크롤 된거다.

    if (_scY > _tgY) {
      // header 객체, 즉 DOM 에 css 목록에 추가하자 (클래스명)
      _html.classList.add(_active);
    } else {
      // header 객체, 즉 DOM 에 css 목록에 제거하자 (클래스명)
      _html.classList.remove(_active);
    }
  }

  showLine(header, headerActiveValue, headerActivClass, window.scrollY);

  // 스크롤을 할때마다 함수(showLine) 실행
  window.addEventListener("scroll", function () {
    showLine(header, headerActiveValue, headerActivClass, window.scrollY);
  });
});
