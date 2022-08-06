
// ================ 상단 메뉴바 펼치고 닫기
$(document).ready(function(){

  $(".menuList p, .underList").hover(function(){
    $(this).css({color: "#279223",})
    $(".underList").stop().slideDown('400')
    $(".underBackgroundSection").stop().slideDown('400');
  }, function(){
    $(this).css({color: "black",})
    $(".underList").stop().slideUp('400')
    $(".underBackgroundSection").stop().slideUp('400')
  });

  $(".underList li").hover(function(){
    $(this).css({textDecoration: "underline", color: "#279223",})
  },function(){
    $(this).css({textDecoration: "", color: "#666666",})
  });

});
// =================

// ====================배너 슬라이딩 애니메이션
$(function(){
  var mainBannerSwiper = new Swiper ('#bannerContainer .swiper-container', {
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
});
// ====================

$(function(){
  var menuSwiper = new Swiper ("#wholeWrap > .swiper-container", {
    loop: true, // 없으면 첫 슬라이드 prev, 마지막슬라이드 next가 자동으로 비활성화됨
    debugger: true,
    pagination: {
      el: "#menuPagination",
      clickable: true,
    }
  })
})


// ====================배너 슬라이딩 애니메이션
$(function(){
  var menuSwiper = new Swiper ("#classicMenu .swiper-container", {
    // loop: true, // 없으면 첫 슬라이드 prev, 마지막슬라이드 next가 자동으로 비활성화됨
    debugger: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  })
})

$(function(){
  var menuSwiper = new Swiper ("#freshMenu .swiper-container", {
    loop: true, // 없으면 첫 슬라이드 prev, 마지막슬라이드 next가 자동으로 비활성화됨
    debugger: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  })
})

$(function(){
  var menuSwiper = new Swiper ("#premiumMenu .swiper-container", {
    loop: true, // 없으면 첫 슬라이드 prev, 마지막슬라이드 next가 자동으로 비활성화됨
    debugger: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  })
})

$(function(){
  var menuSwiper = new Swiper ("#morningMenu .swiper-container", {
    loop: true, // 없으면 첫 슬라이드 prev, 마지막슬라이드 next가 자동으로 비활성화됨
    debugger: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  })
})

$(document).ready(function(){
  $("#specificMenu .swiper-button-prev div").hover(function(){
    $(this).css({
      top: "-50px",
    }) //mouseover()에서 작동하는 함수
  }, function(){
    $(this).css({
      top: "0",
    })
  }); //mouseout()에서 작동하는 함수
}); //즉, hover()는 둘을 하나의 함수로 묶은 메소드

$(document).ready(function(){
  $("#specificMenu .swiper-button-next div").hover(function(){
    $(this).css({
      top: "-50px",
    }) //mouseover()에서 작동하는 함수
  }, function(){
    $(this).css({
      top: "0",
    })
  }); //mouseout()에서 작동하는 함수
}); //즉, hover()는 둘을 하나의 함수로 묶은 메소드
// ====================

// =================   SNS 마우스 활성화 버튼
$(document).ready(function(){
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
  }); //mouseout()에서 작동하는 함수
}); //즉, hover()는 둘을 하나의 함수로 묶은 메소드
// =======================================




$(document).ready(function(){
  $(".category li").hover(function(){
    $(this).css({
      color: "green",
    }
  )}, function(){
    $(this).css({
      color: "#666666",
    })
  });
});


$(document).ready(function(){
  $("#warpA").hover(function(){
    $("#warpA img").css({
      width: "350px",
    })
    $("#warpA h4").css({
      fontSize: "21px",
    })
    $("#warpA h5").css({
      display: "none",
    })
    $("#warpA .searchDetail").css({
      display: "block",
      position: "absolute",
      left: "135px",
      top: "150px",
    })
  },function(){
      $("#warpA img").css({
        width: "260px",
      })
      $("#warpA h4").css({
        fontSize: "18px",
      })
      $("#warpA h5").css({
        display: "",
      })
    $("#warpA .searchDetail").css({
      display: "none",
      position: "absolute",
      left: "135px",
      top: "150px",
    })
  });
});


$(document).ready(function(){
  $("#warpB").hover(function(){
    $("#warpB img").css({
      width: "350px",
    })
    $("#warpB h4").css({
      fontSize: "21px",
    })
    $("#warpB h5").css({
      display: "none",
    })
    $("#warpB .searchDetail").css({
      display: "block",
      position: "absolute",
      left: "135px",
      top: "150px",
    })
  },function(){
      $("#warpB img").css({
        width: "260px",
      })
      $("#warpB h4").css({
        fontSize: "18px",
      })
      $("#warpB h5").css({
        display: "",
      })
    $("#warpB .searchDetail").css({
      display: "none",
      position: "absolute",
      left: "135px",
      top: "150px",
    })
  });
});


$(document).ready(function(){
  $("#warpC").hover(function(){
    $("#warpC img").css({
      width: "350px",
    })
    $("#warpC h4").css({
      fontSize: "21px",
    })
    $("#warpC h5").css({
      display: "none",
    })
    $("#warpC .searchDetail").css({
      display: "block",
      position: "absolute",
      left: "135px",
      top: "150px",
    })
  },function(){
      $("#warpC img").css({
        width: "260px",
      })
      $("#warpC h4").css({
        fontSize: "18px",
      })
      $("#warpC h5").css({
        display: "",
      })
    $("#warpC .searchDetail").css({
      display: "none",
      position: "absolute",
      left: "135px",
      top: "150px",
    })
  });
});


// =============써브웨이 메뉴 호버링============

$(document).ready(function(){
  $("#warpD").hover(function(){
    $("#warpD img").css({
      width: "350px",
    })
    $("#warpD h4").css({
      fontSize: "21px",
    })
    $("#warpD h5").css({
      display: "none",
    })
    $("#warpD .searchDetail").css({
      display: "block",
      position: "absolute",
      left: "135px",
      top: "150px",
    })
  },function(){
      $("#warpD img").css({
        width: "260px",
      })
      $("#warpD h4").css({
        fontSize: "18px",
      })
      $("#warpD h5").css({
        display: "",
      })
    $("#warpD .searchDetail").css({
      display: "none",
      position: "absolute",
      left: "135px",
      top: "150px",
    })
  });
});


$(document).ready(function(){
  $("#warpE").hover(function(){

    $("#warpE img").css({
      width: "350px",
    })
    $("#warpE h4").css({
      fontSize: "21px",
    })
    $("#warpE h5").css({
      display: "none",
    })
    $("#warpE .searchDetail").css({
      display: "block",
      position: "absolute",
      left: "135px",
      top: "150px",
    })
  },function(){
      $("#warpE img").css({
        width: "260px",
      })
      $("#warpE h4").css({
        fontSize: "18px",
      })
      $("#warpE h5").css({
        display: "",
      })
    $("#warpE .searchDetail").css({
      display: "none",
      position: "absolute",
      left: "135px",
      top: "150px",
    })
  });
});


//
// $(document).ready(function(){
//   $("#warpF").hover(function(){
//     $("#warpF img").css({
//       width: "350px",
//     })
//     $("#warpF h4").css({
//       fontSize: "21px",
//     })
//     $("#warpF h5").css({
//       display: "none",
//     })
//     $("#warpF .searchDetail").css({
//       display: "block",
//       position: "absolute",
//       left: "135px",
//       top: "150px",
//     })
//   },function(){
//       $("#warpF img").css({
//         width: "260px",
//       })
//       $("#warpF h4").css({
//         fontSize: "18px",
//       })
//       $("#warpF h5").css({
//         display: "",
//       })
//     $("#warpF .searchDetail").css({
//       display: "none",
//       position: "absolute",
//       left: "135px",
//       top: "150px",
//     })
//   });
// });
//
// $(document).ready(function(){
//   $("#warpG").hover(function(){
//     $("#warpG img").css({
//       width: "350px",
//     })
//     $("#warpG h4").css({
//       fontSize: "21px",
//     })
//     $("#warpG h5").css({
//       display: "none",
//     })
//     $("#warpG .searchDetail").css({
//       display: "block",
//       position: "absolute",
//       left: "135px",
//       top: "150px",
//     })
//   },function(){
//       $("#warpG img").css({
//         width: "260px",
//       })
//       $("#warpG h4").css({
//         fontSize: "18px",
//       })
//       $("#warpG h5").css({
//         display: "",
//       })
//     $("#warpG .searchDetail").css({
//       display: "none",
//       position: "absolute",
//       left: "135px",
//       top: "150px",
//     })
//   });
// });
//
// $(document).ready(function(){
//   $("#warpH").hover(function(){
//     $("#warpH img").css({
//       width: "350px",
//     })
//     $("#warpH h4").css({
//       fontSize: "21px",
//     })
//     $("#warpH h5").css({
//       display: "none",
//     })
//     $("#warpH .searchDetail").css({
//       display: "block",
//       position: "absolute",
//       left: "135px",
//       top: "150px",
//     })
//   },function(){
//       $("#warpH img").css({
//         width: "260px",
//       })
//       $("#warpH h4").css({
//         fontSize: "18px",
//       })
//       $("#warpH h5").css({
//         display: "",
//       })
//     $("#warpH .searchDetail").css({
//       display: "none",
//       position: "absolute",
//       left: "135px",
//       top: "150px",
//     })
//   });
// });
// =======================================

// =================상단 메뉴 컬러 및 밑줄 강조
$(document).ready(function(){
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
});
// =====================================
