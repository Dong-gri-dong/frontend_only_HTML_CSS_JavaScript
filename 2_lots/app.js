const numPeople = document.getElementById('numPeople');
const confirmPeople = document.getElementById('confirmPeople');
const squareList = document.getElementById('squareList')

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

var jbRandom = Math.random();
var num = 0;
var arr = [];
var randomNumber = 0;
confirmPeople.addEventListener('click', function() {
  if (isNaN(numPeople.value) || numPeople.value == ''){
    alert('숫자를 입력해 주세요')
    numPeople.value = ''
  }
  else {
    num = numPeople.value
    for(var i = 1; i <= num; i++) {
        arr.push(i);
    }
    shuffle(arr)

    for (var i = 0; i < numPeople.value; i++){  
      let square = document.createElement('div');
      square.innerHTML=`
        <div class='square' id='square'>
          <h1>선택</h1>
        </div>
      `;
      squareList.appendChild(square)
    }
    confirmPeople.disabled = true
  }
})

squareList.addEventListener('click', function(event) {
  randomNumber = randomItem(arr)
  
  event.target.parentElement.innerHTML=`
    <div class='square' id='square'>
      <h1>${randomNumber} 번째</h1>
    </div>
  `
  arr.splice(arr.indexOf(randomNumber), 1)
})