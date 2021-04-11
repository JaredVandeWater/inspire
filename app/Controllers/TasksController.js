import { ProxyState } from "../AppState.js";
import { tasksService } from "../Services/TasksService.js";

//Private
function _drawTasks() {


    let template = ''
    ProxyState.tasks.forEach(t => {
        template += /*html*/`
           
        <li class="list-group-item d-flex justify-content-between my-card-bg2">
            <div class="${t.completed ? 'my-strike' : ""}">
                <input onchange="app.tasksController.checkTask('${t.id}')" type="checkbox" class="mr-2" ${t.completed ? 'checked' : ''}>${t.description}
            </div>
            <button onclick="app.tasksController.deleteTask('${t.id}')" class="text-white btn p-0 mr-2 "><i class="fas fa-times-circle"></i></button>
        </li>
`
    })

    if (ProxyState.tasks.length > 0) {
        document.getElementById('task-title').innerText = "Task Completed"
        document.getElementById('task-count').innerHTML = `<span id="tasks-done">0</span> / <span id="tasks-total">0</span></p >`
    } else {
        document.getElementById('task-title').innerText = "Add Some Tasks!"
        document.getElementById('task-count').innerText = ""
    }

    document.getElementById('my-tasks').innerHTML = template
    document.getElementById('tasks-total').innerText = ProxyState.tasks.length.toString()
    document.getElementById('tasks-done').innerText = ProxyState.tasks.filter(t => t.completed === true).length.toString()


}




//Public
export default class BgImageController {
    constructor() {
        ProxyState.on('tasks', _drawTasks)

        this.grabTasks()

    }

    async grabTasks() {
        try {
            await tasksService.grabTasks()
        } catch (error) {
            console.error(error)
        }
    }

    async AddTask() {
        try {
            console.log('test');
            window.event.preventDefault()
            const form = window.event.target
            let formedTask = {
                // @ts-ignore
                completed: false,
                // @ts-ignore
                description: form.description.value,
                // @ts-ignore
                user: 'jared'
            }
            await tasksService.AddTask(formedTask)

            // @ts-ignore
            form.reset()
        } catch (error) {
            console.error(error)
        }
    }

    async checkTask(id) {
        try {
            await tasksService.checkTask(id)
        } catch (error) {
            console.error(error)
        }
    }

    async deleteTask(id) {
        try {
            await tasksService.deleteTask(id)
        } catch (error) {
            console.error(error)
        }

    }

}
