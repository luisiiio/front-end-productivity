import cloneDeep from 'lodash/cloneDeep';
import * as CONSTANTS from '../constants/tasks';

const stateInitial = {
    description: '',
    duration: '',
    tasks: [],
    loading: false,
    error: '',
    taskActive: ''
};

export default function tasks(state = cloneDeep(stateInitial), action) {
    const { type, payload } = action;

    switch (type) {
        case CONSTANTS.ESTATE_TASKS.CLEAN_FORM:
        case CONSTANTS.ESTATE_TASKS.SAVE_TASK:
        case CONSTANTS.GET_TASKS.INIT:
        case CONSTANTS.GET_TASKS.COMPLETED:
        case CONSTANTS.GET_TASKS.ERROR:
        case CONSTANTS.CREATE_TASK.INIT:
        case CONSTANTS.CREATE_TASK.ERROR:
        case CONSTANTS.UPDATE_TASK.INIT:
        case CONSTANTS.UPDATE_TASK.ERROR:
        case CONSTANTS.DELETE_TASK.INIT:
        case CONSTANTS.DELETE_TASK.ERROR:
            return {
                ...state,
                ...payload,
            };

        case CONSTANTS.CREATE_TASK.COMPLETED:
            {
                const { tasks, ...propEstados } = payload;
                return {
                    ...state,
                    ...propEstados,
                    contactos: tasks,
                };
            }

        case CONSTANTS.UPDATE_TASK.COMPLETED:
            {
                const { tasks, ...propEstados } = payload;
                return {
                    ...state,
                    ...propEstados,
                    contactos: tasks,
                };
            }

        case CONSTANTS.DELETE_TASK.COMPLETED:
            {
                const { tasks, ...propEstados } = payload;
                return {
                    ...state,
                    ...propEstados,
                    contactos: tasks,
                };
            }

        default:
            return state;
    }
}