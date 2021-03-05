import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';

import {UsStatesApiService} from '../../services/us-states-api.service';
import {USStatesActions} from '../actions/us-states';
import {StateModel} from '../models';
import {ActionDispatch} from '@common';

@Injectable()
export class UsStatesEffects {
  constructor(private actions$: Actions,
              private usStatesApi: UsStatesApiService) {
  }

  getStates: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(USStatesActions.ActionTypes.GET_STATES),
    switchMap((): Observable<ActionDispatch> => this.usStatesApi.getStatesInfo()
      .pipe(
        map((USStates: StateModel[]): ActionDispatch<StateModel[]> => {
          return {
            type: USStatesActions.ActionTypes.GET_STATES_SUCCESS,
            payload: USStates
          };
        }),
        catchError((error): Observable<ActionDispatch> => of({type: USStatesActions.ActionTypes.GET_STATES_FAILED, payload: error}))
      )
    ),
  ));
}
