//$(document).ready(function(){~});은 HTML코드가 모두 뿌려진 뒤, 그 이후에 실행되는 함수를 담는 선언
// 즉, 페이지 로드가 완료된 시점에서 실행해야 하는 코드를 포함할 것

$(document).ready(function(){
// ========= 상단 메뉴바 펼치고 닫기
  $(".menuList p, .underList").hover(function(){
    $(this).css({color: "#279223",})
    $(".underList").stop().slideDown('400')
    $(".underBackgroundSection").stop().slideDown('400');
  }, function(){
    $(this).css({color: "black",})
    $(".underList").stop().slideUp('400')
    $(".underBackgroundSection").stop().slideUp('400')
  });
// ===========================

// 텍스트로 이뤄진 링크 메뉴에 마우스 호버링 시 데코변화 (보통은 'a'태그에 묶어서 사용하는 것으로!)
  $(".underList li").hover(function(){
    $(this).css({textDecoration: "underline", color: "#279223",})
  },function(){
    $(this).css({textDecoration: "", color: "#666666",})
  });

  $("#menuPagination .swiper-pagination-bullet").hover(function(){
    $(this).css({
      color: "green",
    }
  )}, function(){
    $(this).css({
      color: "#666666",
    })
  });

  $(".newCardRight ul h4").hover(function(){
    $(this).css({
      textDecoration: "underline",
      color: "#279223",
    })
  }, function(){
    $(this).css({
      textDecoration: "",
      color: "#666666",
    })
  });
// ===========================

// =========== 샌드위치 메뉴 좌우 네비게이션 Swiper 버튼
  $("#specificClassicMenu .swiper-button-prev div").hover(function(){
    $(this).css({
      top: "-50px",
    })
  }, function(){
    $(this).css({
      top: "0",
    })
  });

  $("#specificClassicMenu .swiper-button-next div").hover(function(){
    $(this).css({
      top: "-50px",
    })
  }, function(){
    $(this).css({
      top: "0",
    })
  });

  $("#specificFreshMenu .swiper-button-prev div").hover(function(){
    $(this).css({
      top: "-50px",
    })
  }, function(){
    $(this).css({
      top: "0",
    })
  });

  $("#specificFreshMenu .swiper-button-next div").hover(function(){
    $(this).css({
      top: "-50px",
    })
  }, function(){
    $(this).css({
      top: "0",
    })
  });

  $("#specificPremiumMenu .swiper-button-prev div").hover(function(){
    $(this).css({
      top: "-50px",
    })
  }, function(){
    $(this).css({
      top: "0",
    })
  });

  $("#specificPremiumMenu .swiper-button-next div").hover(function(){
    $(this).css({
      top: "-50px",
    })
  }, function(){
    $(this).css({
      top: "0",
    })
  });

  $("#specificMorningMenu .swiper-button-prev div").hover(function(){
    $(this).css({
      top: "-50px",
    })
  }, function(){
    $(this).css({
      top: "0",
    })
  });

  $("#specificMorningMenu .swiper-button-next div").hover(function(){
    $(this).css({
      top: "-50px",
    })
  }, function(){
    $(this).css({
      top: "0",
    })
  });
// =========================

// =================   SNS 마우스 활성화 버튼
  $(".snsButtonGroup div img").hover(function(){
    $(this).css({
      position: "relative",
      left: "-50px",
    }) //mouseover()에서 작동하는 함수
  }, function(){
    $(this).css({
      position: "relative",
      left: "0",
    })
  });
// =======================================


// ============ 샌드위치 메뉴별 호버링 확대
  $(".wrap").hover(function(){
    $("img", this).css({
      width: "350px",
    })
    $("h4", this).css({
      fontSize: "21px",
    })
    $("h5", this).css({
      display: "none",
    })
    $(".searchDetail", this).css({
      display: "block",
      position: "absolute",
      left: "135px",
      top: "150px",
    })
  },function(){
      $("img", this).css({
        width: "260px",
      })
      $("h4", this).css({
        fontSize: "18px",
      })
      $("h5", this).css({
        display: "",
      })
    $(".searchDetail", this).css({
      display: "none",
      position: "absolute",
      left: "135px",
      top: "150px",
    })
  });
// =============================


// ===========배너 슬라이딩 애니메이션
  var MainBannerSwiper = new Swiper ('#bannerContainer .swiper-container', {
    debugger: true, //무한반복
    loop: true, //마지막 슬라이드 끝나면 첫번째로 자연스럽게
    autoplay: {
      delay: 2500, //1000 = 1초
    },
    pagination: {
      el: "#bannerContainer .swiper-pagination",
      clickable: true, //버튼을 누르면 해당 버튼의 순서로 슬라이드가 이동
    }
  });
// ============================

// ===========메뉴 슬라이딩 애니메이션
// ====================바깥쪽
  var Category = ["클래식", "프래쉬&라이트", "프리미엄", "아침메뉴"]
  var WholeMenuSwiper = new Swiper ("#titleMenuStack > .swiper-container", {
    pagination: {
      el: "#menuPagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' +
        (Category[index]) + '</span>';
      },
    },
  });

// ====================안쪽
  var MenuSwiperClassic = new Swiper ("#classicMenu .swiper-container", {
    loop: true, // 없으면 네비게이션의 첫 슬라이드에서 prev, 마지막슬라이드에서 next 버튼  자동으로 비활성화됨
    debugger: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  });
  var MenuSwiperFresh = new Swiper ("#freshMenu .swiper-container", {
    loop: true,
    debugger: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  });
  var MenuSwiperPremium = new Swiper ("#premiumMenu .swiper-container", {
    loop: true,
    debugger: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  });
  var MenuSwiperMorning = new Swiper ("#morningMenu .swiper-container", {
    // loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  });
// ============================
});
