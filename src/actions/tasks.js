import axios from 'axios';
import * as CONSTANTS from '../constants/tasks';
import { apiUrl } from '../utils/http';

// d_ GENERALS
// >> Action Creators <<
export function cleanForm() {
    return {
        type: CONSTANTS.ESTATE_TASKS.CLEAN_FORM,
        payload: {
            description: '',
            duration: '',
            completed: false
        },
    };
}

export function saveTask(nombre) {
    return {
        type: CONSTANTS.ESTATE_TASKS.SAVE_TASK,
        payload: {
            nombre,
        },
    };
}


// d_ GET TASKS
// >> Action Creators <<
export function getTasksInit() {
    return {
        type: CONSTANTS.GET_TASKS.INIT,
        payload: {
            tasks: [],
            loading: true,
            error: '',
        },
    };
}

export function getTasksCompleted(tasks) {
    return {
        type: CONSTANTS.GET_TASKS.COMPLETED,
        payload: {
            tasks,
            loading: false,
            error: '',
        },
    };
}

export function getTasksError(error) {
    return {
        type: CONSTANTS.GET_TASKS.ERROR,
        payload: {
            error,
            loading: false,
        },
    };
}

// >> Async Action Creator <<
export function getTasks() {
    return (dispatch, getState) => {
        dispatch(getTasksInit());

        return axios.get(`${apiUrl}/task`)
            .then(({ data }) => dispatch(getTasksCompleted(data)))
            .catch((error) => {
                const mensaje = error.message || error;
                dispatch(getTasksError(mensaje));
            });
    };
}


// d_ CREATE TASKS
// >> Action Creators <<
export function createTaskInit() {
    return {
        type: CONSTANTS.CREATE_TASK.INIT,
        payload: {
            loading: true,
            error: '',
        },
    };
}

export function createTaskCompleted(tasks) {
    return {
        type: CONSTANTS.CREATE_TASK.COMPLETED,
        payload: {
            tasks,
            loading: false,
            error: '',
        },
    };
}

export function createTaskError(error) {
    return {
        type: CONSTANTS.CREATE_TASK.ERROR,
        payload: {
            error,
            loading: false,
        },
    };
}

// >> Async Action Creator <<
export function createTask(task) {
    return (dispatch, getState) => {
        dispatch(crearContactoInicio());

        return axios.post(`${apiUrl}/task`, task)
            .then((tasks) => dispatch(createTaskCompleted(tasks)))
            .catch((error) => {
                const mensaje = error.message || error;
                dispatch(createTaskError(mensaje));
            });
    };
}



// d_ UPDATE TASKS
// >> Action Creators <<
export function updateTaskInit() {
    return {
        type: CONSTANTS.UPDATE_TASK.INIT,
        payload: {
            loading: true,
            error: '',
        },
    };
}

export function updateTaskCompleted(tasks) {
    return {
        type: CONSTANTS.UPDATE_TASK.COMPLETED,
        payload: {
            tasks,
            loading: false,
            error: '',
        },
    };
}

export function updateTaskError(error) {
    return {
        type: CONSTANTS.UPDATE_TASK.ERROR,
        payload: {
            error,
            loading: false,
        },
    };
}

// >> Async Action Creator <<
export function updateTask(task) {
    return (dispatch, getState) => {
        dispatch(updateTaskInit());

        return axios.put(`${apiUrl}/task`, task)
            .then((tasks) => dispatch(updateTaskCompleted(tasks)))
            .catch((error) => {
                const mensaje = error.message || error;
                dispatch(updateTaskError(mensaje));
            });
    };
}



// d_ DELETE TASK
// >> Action Creators <<
export function deleteTaskInit() {
    return {
        type: CONSTANTS.DELETE_TASK.INIT,
        payload: {
            loading: true,
            error: '',
        },
    };
}

export function deleteTaskCompleted(tasks) {
    return {
        type: CONSTANTS.DELETE_TASK.COMPLETED,
        payload: {
            tasks,
            loading: false,
            error: '',
        },
    };
}

export function deleteTaskError(error) {
    return {
        type: CONSTANTS.DELETE_TASK.ERROR,
        payload: {
            error,
            loading: false,
        },
    };
}

// >> Async Action Creator <<
export function delteTask(taskId) {
    return (dispatch, getState) => {
        dispatch(deleteTaskInit());

        return axios.delete(`${apiUrl}/task`, taskId)
            .then((tasks) => dispatch(deleteTaskCompleted(tasks)))
            .catch((error) => {
                const mensaje = error.message || error;
                dispatch(deleteTaskError(mensaje));
            });
    };
}