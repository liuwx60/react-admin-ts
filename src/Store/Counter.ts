import { Reducer } from 'redux';

export interface ICounterState {
  count: number;
}

interface IIncrementCountAction { type: 'INCREMENT_COUNT'; }
interface IDecrementCountAction { type: 'DECREMENT_COUNT'; }

type KnownAction = IIncrementCountAction | IDecrementCountAction;

export const actionCreators = {
  increment: ():IIncrementCountAction => ({ type: 'INCREMENT_COUNT' }),
  // tslint:disable-next-line:object-literal-sort-keys
  decrement: ():IDecrementCountAction => ({ type: 'DECREMENT_COUNT' })
};

export const reducer: Reducer<ICounterState, KnownAction> = (state: ICounterState, action: KnownAction) => {
  switch (action.type) {
    case 'INCREMENT_COUNT':
      return { count: state.count + 1 };
    case 'DECREMENT_COUNT':
      return { count: state.count - 1 };
    default:
  }

  return state || { count: 0 };
};
