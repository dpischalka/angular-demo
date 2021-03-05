import {Action} from '@ngrx/store';

export interface ActionDispatch<P = any> extends Action {
  payload: P;
}

export interface StringMap<T> {
  [key: string]: T;
}

export interface NumberMap<T> {
  [key: number]: T;
}
