// ❗버튼1,2 위치 수정 1은 가운데로 2는 오른쪽으로 div1도 수정 부모로.
//body
document.body.style.margin = "0px";

// root
let rootDiv = document.createElement("div");
document.body.appendChild(rootDiv);
rootDiv.setAttribute("id", "root");
rootDiv.style.backgroundColor = "#325489";
rootDiv.style.height = "844px";
rootDiv.style.width = "390px";

function maker(tagName, setName, setValue, parent) {
  const element = document.createElement(tagName);
  element.setAttribute(setName, setValue);
  parent.appendChild(element);
}
// div 5개
for (let i = 1; i < 6; i++) {
  maker("div", "id", `div${i}`, root);
}

// ⭐div1 스타일
const div1 = document.getElementById("div1");
div1.style.height = "15%";
div1.style.display = "flex";
div1.style.justifyContent = "center";
div1.style.flexDirection = "column";
div1.style.position = "relative";

//div1안에 있는 버튼1(logo), 버튼2(menu)
let button1 = maker("button", "id", "button1", div1);
let button2 = maker("button", "id", "button2", div1);
// 버튼1 스타일
const div1button = document.getElementById("button1");
div1button.style.height = "45%";
div1button.style.width = "25%";
div1button.style.margin = "auto"; //버튼을 가운데로 이동

// 버튼2 스타일
const div1button2 = document.getElementById("button2");
div1button2.style.height = "25%";
div1button2.style.width = "10%";
div1button2.style.marginTop = "2%"; //위 마진
div1button2.style.position = "absolute";
div1button2.style.top = "0";
div1button2.style.right = "0";

// ⭐div2 스타일
const div2 = document.getElementById("div2");
div2.style.height = "20%";
div2.style.backgroundColor = "#D9D9D9";

// ⭐div3 스타일
const div3 = document.getElementById("div3");
div3.style.height = "8%";
div3.style.display = "flex";
div3.style.alignItems = "flex-end"; //텍스트와 버튼을 하단 배치
div3.style.justifyContent = "space-between";
// div3안에 있는 텍스트와 버튼
let div3_1 = maker("div", "id", "text", div3);
let div3_2 = maker("button", "id", "button3", div3);

// 텍스트 스타일
const div3text = document.getElementById("text");
div3text.style.backgroundColor = "#F9D67A";
div3text.style.height = "60%";
div3text.style.width = "60%";
div3text.style.borderRadius = "30px";
div3text.style.marginBottom = "2%"; //아래 마진

// 버튼 스타일
const div3Button = document.getElementById("button3");
div3Button.style.height = "60%";
div3Button.style.width = "10%";
div3Button.style.marginBottom = "2%"; //아래 마진

// ⭐div4 스타일
const div4 = document.getElementById("div4");
div4.style.height = "47%";
div4.style.backgroundColor = "white";

// ⭐div5 스타일
const div5 = document.getElementById("div5");
div5.style.height = "10%";
div5.style.display = "flex";
div5.style.justifyContent = "flex-end"; //버튼을 오른쪽에 배치

// div5안에 있는 버튼(나침반 or 별자리)
let div5_1 = maker("button", "id", "button4", div5);
// 버튼 스타일
div5button = document.getElementById("button4");
div5button.style.width = "15%";
div5button.style.height = "50%";

// 월출, 월몰 api
var xhr = new XMLHttpRequest();

var url =
  "http://apis.data.go.kr/B090041/openapi/service/RiseSetInfoService/getAreaRiseSetInfo";
var queryParams = "?" + encodeURIComponent("serviceKey") + "=" + "키값";
queryParams +=
  "&" + encodeURIComponent("locdate") + "=" + encodeURIComponent("20230501");
queryParams +=
  "&" + encodeURIComponent("location") + "=" + encodeURIComponent("서울");

xhr.open("GET", url + queryParams);
xhr.onreadystatechange = function () {
  // if (xhr.readyState === XMLHttpRequest.DONE) {
  // if (xhr.status === 200) {
  // var response = JSON.parse(xhr.responseText);
  // var response = xhr.response;
  /*     var moonrise = response.response.body.items.item.moonrise; // 월출시간
    div3text.textContent = "월출시간: " + moonrise; */
  // }
  console.log(xhr.responseText);
  let moonrise = this.response.response.body.items.item.moonrise;
  div3text.textContent = "월출시간:" + moonrise;
  // }
};
xhr.send();

//연습
console.dir(div3text);
console.log(xhr.response);
