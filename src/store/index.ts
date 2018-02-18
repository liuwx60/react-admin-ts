import * as Counter from './Counter';

export interface ApplicationState {
  counter: Counter.CounterState;
}

export const reducers = {
  counter: Counter.reducer
};

export interface AppThunkAction<TAction> {
  (dispatch: (action: TAction) => void, getState: () => ApplicationState): void;
}
