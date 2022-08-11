var Links = {
  SetColor:function (color){
    // var alist = document.querySelectorAll('a');
    // var i = 0 ;
    // while(i < alist.length) {
    //     alist[i].style.color = color;
    //     i = i + 1;
    // }
    $('a').css('color',color);
  }
}

var Body = {
  SetColor:function (color){
    // document.querySelector('body').style.color = color;
    $('body').css('color', color);
  },
  SetBGColor:function (color){
    // document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
  },
}

function MODE_handler (self){
  var target = document.querySelector('body');
  if(self.value === 'Dark MODE') {
      Body.SetBGColor('#171717');
      Body.SetColor('white');
      Links.SetColor('#d49d23');
      self.value='Light MODE';

  } else {
    Body.SetBGColor('white')
    Body.SetColor('black');
    Links.SetColor('black');
    self.value='Dark MODE';
  }
}
