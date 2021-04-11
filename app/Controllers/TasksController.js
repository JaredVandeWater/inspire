import { ProxyState } from "../AppState.js";
import { tasksService } from "../Services/TasksService.js";

//Private
function _drawTasks() {

    let template = ''
    ProxyState.tasks.forEach(t => {
        template += /*html*/`
           
        <li class="list-group-item ${t.completed ? 'my-strike' : ""}">
            <input onchange="app.tasksController.checkTask('${t.id}')" type="checkbox" class="mr-2" ${t.completed ? 'checked' : ''}>${t.description}
        </li>
`
    })


    document.getElementById('my-tasks').innerHTML = template
    console.log("drawn-tasks");
}




//Public
export default class BgImageController {
    constructor() {
        ProxyState.on('tasks', _drawTasks)

        //this.grabTasks()

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

    // async deleteTask() {
    //     try {
    //         await tasksService.deleteTask(id)
    //     } catch (error) {
    //         console.error(error)
    //     }

    // }

}
