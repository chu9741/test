// 일반번호 5개를 추출합니다.
function normalNumber(count) {
  //일반번호를 담을 배열 선언
  let selectedNumber = [];
  // count만큼 배열에 담습니다.
  while (selectedNumber.length < count) {
    // 1~45의 정수에서 무작위 값을 추출합니다.
    let randomNum = Math.ceil(Math.random() * 45);
    // 추출된 무작위 값이 배열에 포함되어있지 않다면
    if (!selectedNumber.includes(randomNum)) {
      // 배열에 추가합니다.
      selectedNumber.push(randomNum);
    }
  }
  // 배열을 리턴합니다.
  return selectedNumber;
}

function bonusNumber(normalNumber) {
  //보너스 번호 변수 선언
  let bonusNum;
  do {
    // 보너스 번호를 1~45 사이의 무작위의 정수 값을 추출합니다.
    bonusNum = Math.ceil(Math.random() * 45);
    // 추출한 보너스 번호가 파라미터로 받은 normalNum안에 없을떄 까지 무작위 값을 추출합니다.
  } while (normalNumber.includes(bonusNum));
  // 보너스 번호를 추출합니다.
  return bonusNum;
}

// 버튼 클릭 이벤트에 연결
const btn = document.getElementById("buttonId");
const normalNum = document.getElementById("normalNumResult");
const bonusNum = document.getElementById("bonusNumResult");

btn.addEventListener("click", function () {
  // normalNumber함수의 값을 normal에 저장합니다.
  const normal = normalNumber(6);
  // 태그 안의 텍스트를 아래와 같이 바꾼다.
  normalNum.innerText = "일반 번호 : " + normal.join(", ");
  bonusNum.innerText = "보너스 번호 : " + bonusNumber(normal);
});
