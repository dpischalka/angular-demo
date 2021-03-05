import {Action, createReducer, on} from '@ngrx/store';
import {ActionReducer} from '@ngrx/store/src/models';

import {StateModel} from '@store/models';
import {USStatesActions} from '@store/actions/us-states';
import {ActionDispatch} from '@common';
import {usStatesInitialState} from '@store/state';

export const USStateReducer: ActionReducer<StateModel[], Action> = createReducer(
  usStatesInitialState,
  on(USStatesActions.getStatesSuccess, (state, {payload}: ActionDispatch<StateModel[]>) => payload)
);
