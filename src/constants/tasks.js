import { defineAccion } from '../utils/defineAction';
import { INIT, COMPLETED, ERROR } from './frequentStates';

const actionsHttp = [INIT, COMPLETED, ERROR];

// LOCAL STATE
export const ESTATE_TASKS = defineAccion('ESTATE_TASKS', ['CLEAN_FORM', 'SAVE_TASK']);
// REQUEST TO SERVER
export const GET_TASKS = defineAccion('GET_TASKS', accionesHttp);
export const CREATE_TASK = defineAccion('CREATE_TASK', accionesHttp);
export const UPDATE_TASK = defineAccion('UPDATE_TASK', accionesHttp);
export const DELETE_TASK = defineAccion('DELETE_TASK', accionesHttp);