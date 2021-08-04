'use strict'

{
  const addBtn = document.getElementById('btn');
  const newTask = document.getElementById('newtask');
  const taskList = document.getElementById('tasklist');
  const radioAllBtn = document.getElementById('radioallbtn');
  const radioWorkBtn = document.getElementById('radioworkbtn');
  const radioDoneBtn = document.getElementById('radiodonebtn');
  const option = document.getElementsByName('status');
  const todos = [];
  let id = 0;

  const createStatusBtn = (task, el) => {
    const statusBtn = document.createElement('button');
    statusBtn.textContent = el.status;
    if (statusBtn.textContent === '作業中') {
      task.classList.add('work');
      task.classList.remove('finish');
    } else {
      task.classList.add('finish');
      task.classList.remove('work');
    }
    task.appendChild(statusBtn);
    statusBtn.addEventListener('click', () => {
      if (statusBtn.textContent === '作業中') {
        statusBtn.textContent = '完了';
        el.status = '完了';
        task.classList.add('finish');
        task.classList.remove('work');
        displayTodos(todos);
      } else {
        statusBtn.textContent ='作業中';
        el.status = '作業中';
        task.classList.add('work');
        task.classList.remove('finish');
        displayTodos(todos);
      }
    });
  };
  
  const createDeleteBtn = (task, index) => {
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '削除';
    task.appendChild(deleteBtn);
    deleteBtn.addEventListener('click', () => {
      todos.splice(index, 1);
      displayTodos(todos);
    });
  };
  
  const displayTodos = (array) => {
    taskList.innerText = '';
    array.forEach((el, index) => {
      const task = document.createElement('tr');
      taskList.appendChild(task);
      const taskId = document.createElement('td');
      const taskComment = document.createElement('td');
      taskId.textContent = id++;
      taskComment.textContent = el.task;
      task.appendChild(taskId);
      task.appendChild(taskComment);
      createStatusBtn(task, el);
      createDeleteBtn(task, index);
    });
    id = 0;
    checkOption();
  };

  const checkOption = () => {
    const workTask = document.querySelectorAll('.work');
    const doneTask = document.querySelectorAll('.finish');
    if (option[1].checked) {
      workTask.forEach(element => {
        element.style.display = '';
      });
      doneTask.forEach(element => {
        element.style.display = 'none';
      });
    } else if (option[2].checked) {
      workTask.forEach(element => {
        element.style.display = 'none';
      });
      doneTask.forEach(element => {
        element.style.display = '';
      });
    } else {
      workTask.forEach(element => {
        element.style.display = '';
      });
      doneTask.forEach(element => {
        element.style.display = '';
      });
    }
  }

  radioAllBtn.addEventListener('click', () => {
      displayTodos(todos);
    });
    
  radioWorkBtn.addEventListener('click', () => {
    displayTodos(todos);
  });
  
  radioDoneBtn.addEventListener('click', () => {
    displayTodos(todos);
  });

  addBtn.addEventListener('click', () => {
    const todo = {
      task: newTask.value,
      status: '作業中'
    };
    todos.forEach((todo,index) => {
      todo.id = index + 1;
    });
    todos.push(todo);
    displayTodos(todos);
    newTask.value = '';
  });
}