import {
  REQUEST_TASKS_START,
  REQUEST_TASKS_SUCCESS,
  REQUEST_TASKS_FAILURE
} from '../constants';

export const fetchTasks = () => ({
  types: [REQUEST_TASKS_START, REQUEST_TASKS_SUCCESS, REQUEST_TASKS_FAILURE],
  payload: {
    request: {
      url: `tasks`
    }
  }
});