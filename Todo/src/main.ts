import './style.css'

interface Todo{
  title:string,
  isCompleted:boolean,
  readonly id:string
}

const todos:Todo[] = []

const input = document.getElementsByName('title')[0] as HTMLInputElement
const form = document.querySelector('form') as HTMLFormElement
const todoContainer = document.getElementById('todoContainer') as HTMLDivElement

form.onsubmit=(e: SubmitEvent)=>{
  e.preventDefault();
 
  const todo:Todo={
    title:input.value,
    isCompleted:false,
    id:Date.now().toString()
  }

  todos.push(todo)
  input.value = ''

  renderTodos(todos)
  

}

const generateTodoItem=(title:string,isCompleted:boolean,id:string)=>{
  const todo = document.createElement('div') as HTMLDivElement
  todo.className='todo'
  const checkBox = document.createElement('input') as HTMLInputElement
  checkBox.setAttribute('type','checkbox')
  checkBox.className="isCompleted"
  checkBox.checked = isCompleted

const p = document.createElement('p') as HTMLParagraphElement
p.textContent = title
p.className = isCompleted ? "textCut" : ""
const button = document.createElement('button') as HTMLButtonElement
button.textContent = 'X'
button.className='deleteBtn'

todo.append(checkBox,p ,button)
todoContainer.append(todo)

checkBox.onchange=()=>{
  todos.find((item)=>{
    if(item.id === id){
     item.isCompleted =  checkBox.checked
    }
  })
  p.className = checkBox.checked ? "textCut" : ""
}

button.onclick=()=>{
  deleteTodo(id)

}

}

const deleteTodo=(id:string)=>{

  const idx = todos.findIndex(item=>item.id===id)
  todos.splice(idx,1)
  renderTodos(todos)

}



const renderTodos = (todos:Todo[])=>{
  todoContainer.innerText = ''
todos.forEach(todo=>{
  generateTodoItem(todo.title,todo.isCompleted,todo.id)
})

}