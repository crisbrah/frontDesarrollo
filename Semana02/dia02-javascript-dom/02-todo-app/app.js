console.log('Hola Js')

const taskInput=document.getElementById('taskInput')
const taskAdd=document.querySelector('.task__add')
const taskList=document.querySelector('.task__list')

//console.log(taskInput)
//console.log({taskAdd})
//console.log({taskList})

//EVENTOS

taskAdd.addEventListener('click',function(e) {
        //console.log('Click')
        //console.log(taskInput.value)

        //forma de crear documentos dinamicamente
        /* const button=document.createElement('button')
        button.textContent = 'Hola soy un boton'
        document.body.appendChild(button) */

        // VALIDAR LA ENTRADA DEL USUARIO
        if(taskInput.value===''){
            alert('El campo es requerido')
            return
        }


        //Añadiendo un elemento li al  elemento task list
        const li=document.createElement('li')
        const span=document.createElement('span')
        span.textContent =taskInput.value
        li.appendChild(span)

        //TODO: Añadir un boton dentro del li con el texto 'borrar'
        const button=document.createElement('button')
        button.textContent='Eliminar X'
        li.appendChild(button)

        taskList.appendChild(li)
        
        //TODO: Limpiar la caja de texto despues de crear la tarea
        taskInput.value=''
        taskInput.focus()
    })

    // TODO: Añadir al boton borrar remover elmento de la tarea
     taskList.addEventListener('click', function(e) {
        const {target}=e
        
        if(target.tagName==='BUTTON'){
            console.log('eliminando tarea ...')
            target.parentElement.remove()
        }

     })