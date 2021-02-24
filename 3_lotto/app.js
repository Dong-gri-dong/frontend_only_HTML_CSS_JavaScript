const ballList = document.getElementById('ballList')
const pickButton = document.getElementById('pickButton')
const resetButton = document.getElementById('resetButton')
const index = 0
const nums = []
for (var i = 1; i < 46; i++) {
  nums.push(i)
}

const lottoNums = []
for (var j = 1; j < 999; j++) {
  const randomNum = Math.floor(Math.random()*nums.length) +1 
  if(lottoNums.indexOf(randomNum) == -1) {
    lottoNums.push(randomNum)
  }
  if (lottoNums.length == 7){
    break
  }
}

var ballColor = ['red', 'green', 'yellow', 'blue', 'pink', 'blueviolet', 'chartreuse']

pickButton.addEventListener('click', function() {
  if (lottoNums.length != 0){
    const ball = document.createElement('div')
    if (lottoNums.length == 1){
      ball.innerHTML =`<h1>+</h1><div class="ball" style="background: ${ballColor[0]};">
      <h1>${lottoNums[0]}</h1>
      <div>`  
    }
    else {
      ball.innerHTML =`<div class="ball" style="background: ${ballColor[0]};">
      <h1>${lottoNums[0]}</h1>
      <div>`
    }
    
    ballList.appendChild(ball)
    ballColor.splice(ballColor.indexOf(ballColor[0]), 1)
    lottoNums.splice(lottoNums.indexOf(lottoNums[0]), 1)
  }
  else {
    0
  }
  
})

resetButton.addEventListener('click', function() {
  location.reload()
})