import * as Counter from './Counter';

export interface IApplicationState {
  counter: Counter.ICounterState;
}

export const reducers = {
  counter: Counter.reducer
};

// tslint:disable-next-line:interface-name
export interface AppThunkAction<TAction> {
  // tslint:disable-next-line:callable-types
  (dispatch: (action: TAction) => void, getState: () => IApplicationState): void;
}