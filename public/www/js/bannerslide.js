window.addEventListener("load", function () {
  //console.log("가자");
  //할일
  const dataUrl = "./apis/banner.json";
  fetch(dataUrl)
    .then((response) => {
      const result = response.json();
      return result;
    })
    .then((result) => {
      let tagS = "";
      for (let i = 0; i < result.length; i++) {
        const obj = result[i];
        const temp = `<div class="swiper-slide">
        <a href="${obj.url}" style="background: url('./images/${obj.pic}') no-repeat center; background-size:cover">
          <p class="slide-title">${obj.title}</p>
        </a>
      </div>`;
        tagS += temp;
      }
      //   console.log(tagS);
      const whereTag = document.querySelector(".bannerslide .swiper-wrapper");
      whereTag.innerHTML = tagS;
      // 슬라이드 작동
      const bannerSlide = new Swiper(".bannerslide", {
        loop: true, // 이미지 무한반복
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    })
    .catch((error) => {
      console.log(error);
    });
});
