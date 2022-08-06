body {
  padding: 0;
  margin: 0;
  font-family: 'Noto Sans KR', sans-serif;
  width: 100%;
}

li {
  list-style: none;
}

ul {
  list-style: none;
  padding-inline-start: 0px;
}


header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 100%;
  margin: 0;
  padding: 0;
  border-top: green solid 5px;
  border-bottom: #a1a1a1 solid 1px;
  z-index: 100;
}

main {
  display:flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 100%;
}

footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 13px;
  padding: 30px 0;
  width: 100%;
  margin: 0;
  color: #666666;
  background-color: #2a2a2a;
}

/* -----------------Main BODY----------------- */

.headUpper {
  display: grid;
  grid-template-columns: 1fr 256px 768px 256px 1fr;
  padding: 50px, 0;
  position: relative;
}

.mainLogo {
  justify-self: center;
  align-self: center;
  grid-column: 3/4;
  margin: 40px 0;
  cursor: pointer;
}

.subMenu {
  justify-self: start;
  align-self: center;
  grid-column: 4/5;
  position: relative;
}

.subMenu ul{
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 13px;
  font-weight: 400;
  color: #666666;
}

.subMenu ul li {
  margin: 0 5px;
  cursor: pointer;
}

.subMenu ul span{
  width: 30px;
  height: 30px;
  margin-left: 10px;
  background-image: url("https://www.subway.co.kr/images/common/icon_utill_global.png");
  cursor: pointer;
}

.headLower {
  display: flex;
  justify-content: center;
  position: relative;
}

.menuList {
  display: flex;
  flex-direction: row;
  text-align: center;
  position: relative;
  z-index: 99;
  margin: 0;
}

.menuList li {
  width: 165px;
}

.menuList p {
  font-size: 18px;
  font-weight: 700;
  margin: 0;
  height: 44px;
  cursor: pointer;
}

.underList li{
  font-size: 15px;
  font-weight: 400;
  color: #666666;
  height: 21px;
  padding: 7px 0px;
  position: relative;
  cursor: pointer;
}

.underList {
  padding: 20px 0;
  background-color: rgba(255, 255, 255, 0);
  position: absolute;
  border-top: #a1a1a1 solid 1px;
  z-index: 99;
  /* display: block; */
  display: none;
}

.underBackgroundSection {
  background-color: white;
  border-top: #a1a1a1 solid 1px;
  border-bottom: #a1a1a1 solid 1px;
  width: 100%;
  height: 267px;
  position: absolute;
  top: 44px;
  /* display: block; */
  display: none;
}

/* ----------메인 본문 시작----------- */

.mainBanner {
  align-self: center;
  max-width: 1940px;
  position: relative;
}

.dotWarp {
  display: flex;
  flex-direction: row;
  justify-content: center;
  z-index: 92;
  position: absolute;
  left: 75%;
  top: 370px;
  width: 120px;
}

.dotWarp div {
  width: 10px;
  height: 10px;
  background-color: white;
  border-radius: 5px;
  margin: 0 5px;
}

.subTab {
  display: flex;
  flex-direction: row;
  align-self: center;
  position: absolute;
  z-index: 90;
  left: 50%;
  top: 400px;
  cursor: pointer;
}

.subTabL {
  width: 200px;
  height: 50px;
  background-color: #FACE32;
  border-radius: 30px 0 0 0;
  padding: 0
}

.subTabR {
  width: 200px;
  height: 50px;
  background-color: #279223;
  border-radius: 0 0 30px 0;
  color: white;
}

.subTab li {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px 50px
  ;
}

.subTab h1 {
  font-size: 22px;
  font-weight: 700;
  margin-left: 15px;
}

#bannerPagination {
  position: absolute;
  left: 75%;
  top: 360px;
}

#bannerPagination .swiper-pagination-bullet {
  border-radius: 10px !important;
  width: 10px !important;
  height: 10px !important;
  margin: 0 5px !important;
  background: white !important;
  opacity: 1 !important;
}

#bannerPagination .swiper-pagination-bullet-active {
  border-radius: 10px !important;
  width: 30px !important;
  height: 10px !important;
  margin: 0 5px !important;
  background: #FACE32 !important;

}


/* --------------------Introduce Menu--------------------- */

.introduceMenu {
  padding: 130px 0;
}


.introBar {
  display: grid;
  grid-template-columns: 1fr 580px 700px 1fr;
  justify-items: space-between;
}



.category {
  justify-self: end;
  align-self: center;
  grid-column: 3/4;
}

.introTitleNew {
  z-index: 99;
  font-size: 35px;
  font-weight: 900;
  position: relative;
  float:left;
  margin: 0;
  padding: 0;
  top: -5px;
  left: 20px;
}


.category ul {
  display: flex;
  flex-direction: row;
}

.category li {
  font-size: 15px;
  font-weight: bold;
  color: #666666;
  margin: 0 16px;
  letter-spacing: -0.03rem;
  cursor: pointer;
}

.category span {
  font-size: 15px;
  font-weight: 400;
  color: #e1e1e1;
  margin: 0 16px;
  letter-spacing: -0.03rem;
}

#entireWrap {
  display: grid;
  grid-template-columns: 1fr 1500px 1fr;
  height: 400px;

}

#wholeWrapWrap {

  grid-column: 2/3;
}

#titleMenuStack {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  overflow: hidden;
}

.introduceTitle {
  position: absolute;
  top: 0px;
  left: 100px;
  z-index: 99;
  /* justify-self: start;
  align-self: center;
  grid-column: 2/3; */
}

#wholeMenuWrap {
  height: 400px;

}

#specificMenu {
  width: 1500px;
  display: block;
}

#menuPagination {
  background-color: rgba(147, 2, 7, 0.41);
  width: 500px;
  height: 30px;
  position: absolute;
  left: 900px;
  top: 10px;
}

#menuPagination .swiper-pagination-bullet {
  width: 15px;
  height: 15px;
  background-color: blue;
  position: relative;
}


#specificMenu h4 {
  font-size: 18px;
  font-weight: bold;
  margin: 0;
}

#specificMenu h5 {
  font-size: 13px;
  font-weight: 400;
  color: #a1a1a1;
  margin: 0;
  margin-top: 15px;
  line-height: 20px;
}

#specificMenuClassic {
  /* grid-column: 2/3; */
  /* width: 1280px; */
  /* overflow: hidden; */
}

#menuClassic {
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* width: 100%; */
  /* float: left; */
  text-align: center;
}

#menuClassic #warpF, #warpG, #warpH {
  visibility: hidden;
}

#warpA, #warpB, #warpC, #warpD, #warpE, #warpF, #warpG, #warpH {
  /* width: 260px; */
  margin: 30px;
  padding-top: 50px;
  position: relative;
}

#menuClassic img {
  width: 260px;
}

#specificMenu .swiper-button-prev {
  width: 50px;
  height: 50px;
  background-image: url("");
  overflow: hidden;
}

#specificMenu .swiper-button-prev div{
  width: 100px;
  height: 100px;
  background-image: url("https://www.subway.co.kr/images/news/icon_event_slider_arr.png");
  background-size: 100px;
  position: absolute;
}

#specificMenu .swiper-button-next {
  width: 50px;
  height: 50px;
  background-image: url("");
  overflow: hidden;
}

#specificMenu .swiper-button-next div{
  width: 100px;
  height: 100px;
  background-image: url("https://www.subway.co.kr/images/news/icon_event_slider_arr.png");
  background-position: left;
  position: absolute;
  left: -50px;
}

#specificMenu .swiper-button-disabled {
  opacity: 1;
}

.searchDetail {
  width: 98px;
  height: 98px;
  z-index: 99;
  background-image: url("https://www.subway.co.kr/images/main/btn_more.png");
  display: none;
}


/* ------------------Additional Card------------------ */


.additionalCard {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("https://www.subway.co.kr/images/main/bg_content.gif");
  background-repeat: repeat;
  padding: 100px 0;
}

.additionalCard .upperFloor{
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 1225px;
}

.additionalCard .lowerFloor{
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 1225px;
}

.additionalCard .upperFloor div{
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.additionalCard .upperFloor div h1{
  font-size: 30px;
  color: white;
}

.additionalCard .upperFloor div h4{
  border: white solid 2px;
  text-align: center;
  border-radius: 25px;
  padding: 10px;
  color: white;
  cursor: pointer;
}

.useSubway {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 400px;
  height: 300px;
  background-image: url("https://www.subway.co.kr/images/main/bg_utilization.png");
}

.useSubway h1{
  margin-left: 20px;
}

.useSubway h4{
  width: 100px;
  margin-left: 20px;
}

.historyCard {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 825px;
  height: 300px;
  background-image: url("https://www.subway.co.kr/images/main/img_subway_history.png");
}

.historyCard h1{
  margin-left: 400px;
}

.historyCard h4{
  width: 130px;
  margin-left: 400px;
}

.additionalCard .lowerFloor {
  margin-top: 30px;
}


.sponsorCard {
  width: 270px;
  height: 300px;
  border-radius: 0 25px 0 25px;
  margin-left: 30px;
  background-image: url("https://www.subway.co.kr/upload/banner/270x300_20220801013110442.png");
  cursor: pointer;
}

.newCard {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 870px;
  height: 300px;
  border-radius: 25px 0 25px 0;
  background-color: white;
  margin-right: 25px

}

.newCardLeft {
  align-self: center;
  width: 350px;
  margin: 0;
}

.newCardLeft h4{
  text-align: center;
  color: #a1a1a1;
  line-height: 25px;
  font-weight: 400;
  margin: 15px 0;
}

.newCardTitle .colorTab {
  margin-left: 60px;
}


.titleNew {
  z-index: 99;
  position: absolute;
  font-size: 35px;
  font-weight: 900;
  margin: 0;
}

.newCardTitle .titleNew {
  margin: 10px 0 0 85px;
}

.colorTab{
  width: 50px;
  height: 50px;
  border-radius: 50px 50px 0 50px;
  background-color: orange;
  position: relative;
}

.newCardRight {
  align-self: center;
  width: 450px;
  margin: 0;
}

.newCardRight ul h4{
  margin: 20px 0;
  font-weight: 400;
  color: #292929;
  cursor: pointer;
}

.newCardRight h5{
  font-size: 15px;
  margin: 0;
  margin-top: 30px;
  color: #a1a1a1;
  cursor: pointer;
}

/* --------------메뉴.------------ */

.additionalMenu ul {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  cursor: pointer;
}

.additionalMenu ul li div{
  width: 70px;
  height: 70px;
  background-image: url("https://www.subway.co.kr/images/main/icon_quickmenu.png");
}

.additionalMenu ul li{
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 230px;
  margin: 2rem 2.5rem;
}

.additionalMenu ul li span h3,h5{
  margin: 0px;
  margin-left: 15px;
}

.additionalMenu ul li span h5{
  color: #a1a1a1;
  font-size: 13px;
  margin: 0px;
  margin-left: 15px;
  margin-top: 4px;
}

#additionalIconB {
  background-position: -70px;
}

#additionalIconC {
  background-position: -140px;
}

#additionalIconD {
  background-position: -210px;
}


/* -----------------Footer 박스 시작--------------- */


.upperFooter {
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-bottom: gray solid 1px;
}

.lowerFooter {
  display: flex;
  justify-content: center;
  margin-top: 15px;
}

.lowerOutroBar {
  display: flex;
  flex-direction:row;
  justify-content: space-between;
  width: 1150px;
}

.outroBar {
  width: 1150px;
}

.outroBar ul{
  display: flex;
  flex-direction:row;
  padding-left: 0;
  margin-top: 0;
}

.outroBar ul li {
  cursor: pointer;
}

.outroBar ul li:nth-of-type(2) {
  color: #bbbbbb;
  font-size: 14px;
  font-weight: 500;
}

.companyAbstract ul{
  display: flex;
  flex-direction:row;
  margin: 0.5rem 0;
  padding-left: 0;
}

.companyAbstract ul li {
  border-left: #666666 solid 1px;
  padding: 0 0.6rem;
}

.companyAbstract div {
  margin-right: 30px;
}

.outroBar ul li {
  margin-right: 30px;
}

.snsButtonGroup {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 120px;
}

.snsButtonGroup div{
  width: 50px;
  overflow: hidden;
  cursor: pointer;
}

.snsButtonGroup div img{
  position: relative;
}
