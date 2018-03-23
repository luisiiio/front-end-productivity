import axios from 'axios';
import findIndex from 'lodash/findIndex';
import * as CONSTANTS from '../constants/tasks';
import { apiUrl } from '../utils/http';

// d_ GENERALES
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


// d_ OBTENER CONTACTOS
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


// d_ CREAR CONTACTO
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