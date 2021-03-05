import {createAction, props} from '@ngrx/store';

import {StateModel} from '@store/models';

export namespace USStatesActions {
  export enum ActionTypes {
    GET_STATES = '[API] Get states',
    GET_STATES_SUCCESS = '[API] Get states success',
    GET_STATES_FAILED = '[API] Get states failed',
  }

  export const getStates = createAction(ActionTypes.GET_STATES);
  export const getStatesSuccess = createAction(ActionTypes.GET_STATES_SUCCESS, props<{payload: StateModel[]}>());
  export const getStatesFailed = createAction(ActionTypes.GET_STATES_FAILED, props<{payload: any}>());
}
