$(document).ready(function(){
  $(".menuList p").hover(function(){

    $(this).css({color: "green",})
    // $(".underList").css({
    //   display: "block",
    //   position: "absolute",
    // })
    $(".underList").slideToggle('500', function(){
      $(this).css({
        display: "block",
      })
    })
    $(".underBackgroundSection").slideToggle('500', function(){
      $(this).css({
        display: "block",
        position: "absolute",
      })
    })
  },

  function(){
    $(this).css({color: "black",});
    $(".underList").css({display: "none", })
    $(".underBackgroundSection").slideToggle('500', function(){
      $(this).css({
        display: "none",
      })
    })
  }); //mouseout()에서 작동하는 함수

}); //즉, hover()는 둘을 하나의 함수로 묶은 메소드




// SNS 마우스 활성화 버튼
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
  $(".warpA").hover(function(){
    $(".warpA img").css({
      width: "350px",
    })
    $(".warpA h4").css({
      fontSize: "21px",
    })
    $(".warpA h5").css({
      display: "none",
    })
    $(".warpA .searchDetail").css({
      display: "block",
      position: "absolute",
      left: "135px",
      top: "150px",
    })
  },function(){
      $(".warpA img").css({
        width: "260px",
      })
      $(".warpA h4").css({
        fontSize: "18px",
      })
      $(".warpA h5").css({
        display: "",
      })
    $(".warpA .searchDetail").css({
      display: "none",
      position: "absolute",
      left: "135px",
      top: "150px",
    })
  });
});

$(document).ready(function(){
  $(".warpB").hover(function(){
    $(".warpB img").css({
      width: "350px",
    })
    $(".warpB h4").css({
      fontSize: "21px",
    })
    $(".warpB h5").css({
      display: "none",
    })
    $(".warpB .searchDetail").css({
      display: "block",
      position: "absolute",
      left: "135px",
      top: "150px",
    })
  },function(){
      $(".warpB img").css({
        width: "260px",
      })
      $(".warpB h4").css({
        fontSize: "18px",
      })
      $(".warpB h5").css({
        display: "",
      })
    $(".warpB .searchDetail").css({
      display: "none",
      position: "absolute",
      left: "135px",
      top: "150px",
    })
  });
});

$(document).ready(function(){
  $(".warpC").hover(function(){
    $(".warpC img").css({
      width: "350px",
    })
    $(".warpC h4").css({
      fontSize: "21px",
    })
    $(".warpC h5").css({
      display: "none",
    })
    $(".warpC .searchDetail").css({
      display: "block",
      position: "absolute",
      left: "135px",
      top: "150px",
    })
  },function(){
      $(".warpC img").css({
        width: "260px",
      })
      $(".warpC h4").css({
        fontSize: "18px",
      })
      $(".warpC h5").css({
        display: "",
      })
    $(".warpC .searchDetail").css({
      display: "none",
      position: "absolute",
      left: "135px",
      top: "150px",
    })
  });
});

$(document).ready(function(){
  $(".warpD").hover(function(){
    $(".warpD img").css({
      width: "350px",
    })
    $(".warpD h4").css({
      fontSize: "21px",
    })
    $(".warpD h5").css({
      display: "none",
    })
    $(".warpD .searchDetail").css({
      display: "block",
      position: "absolute",
      left: "135px",
      top: "150px",
    })
  },function(){
      $(".warpD img").css({
        width: "260px",
      })
      $(".warpD h4").css({
        fontSize: "18px",
      })
      $(".warpD h5").css({
        display: "",
      })
    $(".warpD .searchDetail").css({
      display: "none",
      position: "absolute",
      left: "135px",
      top: "150px",
    })
  });
});
