// Função  tarefa
function criandoTask(){
    //Titulo da tarefa
    const taskTitle= document.querySelector('#idtare').value

    if (taskTitle) {
        //Clonando template
        const template=document.querySelector('.template')
        const newTask= template.cloneNode(true)
        //Adicionado título
        newTask.querySelector('.tare-title').textContent = taskTitle
        //Removendo as classes denecessárias
        newTask.classList.remove("template")
        newTask.classList.remove("hide")
        //adiciona terefa na lista
        const lista= document.querySelector('#tare-list')
        lista.appendChild(newTask)
        //Adiciona o evento de completar tarefa
        const addBtn= newTask.querySelector('.add-btn').addEventListener('click',function(){
            completeTask(this)
        })
        //Adiciona o evento de remover
        const closeBtn= newTask.querySelector('.close-btn').addEventListener('click',function(){
            removerTask(this)
        })
        //limpar texto
        document.querySelector('#idtare').value=''
    }else{
        window.alert('Escreva uma tarefa,para que possa adicionar a nova tarefa!')
    }
    
}

// Evento de adicionar tarefa
const addTarefa= document.querySelector('#add-tarefa')

addTarefa.addEventListener('click', function newTarefa(e) {
    e.preventDefault()

    criandoTask()
})
//fucão de adicionar tarefa
function completeTask(complet){
   const taskToComplete= complet.parentNode
   taskToComplete.classList.toggle('done')
}
//função de remover tarefa
function removerTask(task){
    task.parentNode.remove(true)
}

