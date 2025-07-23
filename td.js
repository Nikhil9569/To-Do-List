const addtask = document.getElementById('add-task');
const taskcon = document.getElementById('task-container');
const inputtask = document.getElementById('input-task');
addtask.addEventListener('click', function(){
    let task = document.createElement('div')
    task.classList.add('task');
    let li = document.createElement('li');
    li.innerText = `${inputtask.value}`;
    task.appendChild(li);
    let checkbtn = document.createElement('button');
    checkbtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
    checkbtn.classList.add('checktask');
    task.appendChild(checkbtn);
    let dbtn = document.createElement('button');
    dbtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    dbtn.classList.add('deletetask');
    task.appendChild(dbtn);
    if(inputtask.value === ""){
        alert('Please Enter Task');
    }else{
        taskcon.appendChild(task);
    }
    inputtask.value = "";
    checkbtn.addEventListener('click',function(){
        checkbtn.parentElement.style.textDecoration =
        "line-through";
    });
    dbtn.addEventListener('click',function(e){
          let target = e.target;
          target.parentElement.parentElement.remove();
    });
});