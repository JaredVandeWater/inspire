import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js";
import { sandboxApi } from "./AxiosService.js"


class TasksService {
    async grabTasks() {
        try {
            let response = await sandboxApi.get('jared/todos')
            ProxyState.tasks = response.data.map(t => new Task(t))
            console.log(ProxyState.tasks);
        } catch (error) {
            console.error(error)
        }
    }

    async AddTask(formedTask) {
        try {
            let response = await sandboxApi.post('jared/todos', formedTask)
            response.data.id = response.data._id
            let task = new Task(response.data)
            ProxyState.tasks = [...ProxyState.tasks, task]
            console.log(ProxyState.tasks);
        } catch (error) {
            console.error(error)
        }
    }


    async checkTask(id) {
        try {
            let currentCheck = ProxyState.tasks.find(t => t.id === id)
            currentCheck.completed = !currentCheck.completed
            await sandboxApi.put(`jared/todos/${id}`, { completed: currentCheck.completed })
            ProxyState.tasks = ProxyState.tasks

        } catch (error) {
            console.error(error)
        }
    }

    async deleteTask(id) {
        console.log('Deleting');
        try {
            let response = await sandboxApi.delete(`jared/todos/${id}`)
            ProxyState.tasks = new Task(response.data)
            console.log(ProxyState.tasks);
        } catch (error) {
            console.error(error)
        }
    }
}


export const tasksService = new TasksService();