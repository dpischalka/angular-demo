import {AppState} from '@store/state';
import {StateModel} from '@store/models';

export const selectUSStates = (state: AppState): StateModel[] => state.usStates ?? [];
