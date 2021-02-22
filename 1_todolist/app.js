const todoList = document.getElementById('todoList')
const addText = document.getElementById('addText')
const addBtn = document.getElementById('add-button');
const addDate = document.getElementById('addDate')


addBtn.addEventListener('click', function(){
  if (addText.value != ''){    
    let el = document.createElement('li');
    el.innerHTML =`
      <div class="cover">
        <strong>${addText.value}</strong>
      </div>
      <span class="time">${addDate.value}</span>        
      <button class="finished">X</button>
    `;
    todoList.appendChild(el);
    addText.value = ''
  }
})

addText.addEventListener('keydown', function(event){
  if(event.keyCode == 13){
    if (addText.value != ''){
    let el = document.createElement('li');
    el.innerHTML =`
      <div class="cover">
        <strong>${addText.value}</strong>
      </div>
      <span class="time">${addDate.value}</span>        
      <button class="finished">X</button>
    `;
    todoList.appendChild(el);
    addText.value = ''
    }
  }
})

todoList.addEventListener('click', function(event) {
  const className = event.target.className;
  if (className == 'finished'){
    event.target.parentElement.remove();
    return false;
  }
})