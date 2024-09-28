const todoList= [{
    name: 'problem solving',
    dueDate: '22-12-2024'},
    {
     name:'project submition',
     dueDate:'24-12-2024'
    }];
    

renderTodoList();

function renderTodoList() {
    //create html
    let todoListHTML = '';
    for (let i =0; i<todoList.length;i++) {
       const todoObject = todoList[i];
        const {name , dueDate} = todoObject;      
        const html = `
        <div class="new-todos"> 
          <div>${name}</div>
          <div>${dueDate}</div>
          <button onclick="
           todoList.splice(${i},1);
           renderTodoList();
        "<i class="fa-solid fa-trash-can delete-btn"></i> 
        </button>
        </div>
        
         `
        ;
      todoListHTML += html;
    }
    document.querySelector('.js-todo-list')
     .innerHTML  = todoListHTML;
}

function addTodo() {
    const inputElement =document.querySelector('.js-input');
    const name = inputElement.value;
    const dateElement = document.querySelector('.due-date');
    const dueDate = dateElement.value;
    //console.log(name);
    todoList.push({name,dueDate});

    //console.log(todoList);
    //reset

    inputElement.value ='';
    renderTodoList();
}
    

