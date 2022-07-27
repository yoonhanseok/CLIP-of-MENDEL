var Body = {
  SetColor:function (color){
    document.querySelector('body').style.color = color;
  },
  SetBGColor:function (color){
    document.querySelector('body').style.backgroundColor = color;
  },
  SetFontSize:function (size) {
    document.querySelector('.FSchange').style.fontSize = size;
  },
  SetTXTColor:function (color) {
    document.querySelector('.txtcolorchange').style.color = color;
  }
}


// Text에서 Submit으로 입력받은 내용을 Alert
function submitEvent(){
  const submit_text = document.getElementById("text_V").value;
  if(submit_text == "" || submit_text == null ) {
    event.preventDefault();
    alert('입력 값이 없습니다')
    retern false;
  }
  else { alert(submit_text);}
}

//버튼을 누르면 색이 변하는 텍스트, 토글 방식
function TC_changer(self){
  var target = document.querySelector('body');
  if(self.value === '색 바꾸기') {
    Body.SetTXTColor('#e85743');
    self.value = '색 되돌리기';
  } else {
    var TXT_color = document.querySelector('.CCB').value;
    if(TXT_color === '다크모드') {
      Body.SetTXTColor('black');
      self.value = '색 바꾸기';
    } else {
      Body.SetTXTColor('white');
      self.value = '색 바꾸기';
    }
  }
}


// 버튼을 누르면 다크모드로 진입, 토글 방식
function Mode_changer(self){
  var target = document.querySelector('body');
  if(self.value === '다크모드') {
    Body.SetBGColor('#171717');
    Body.SetColor('white');
    Body.SetTXTColor('white');
    self.value = '라이트모드';
  } else {
    Body.SetBGColor('white');
    Body.SetColor('black');
    Body.SetTXTColor('black');
    self.value = '다크모드';
  }
}

//폰트 크기 바꾸기
function fontSize_changer(self){
  if(self.value === '폰트 키우기') {
    Body.SetFontSize('35px');
    self.value = '폰트 줄이기';
  } else {
    Body.SetFontSize('18px');
    self.value = '폰트 키우기';
  }
}
