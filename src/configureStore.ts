import { History } from 'history';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import { applyMiddleware, combineReducers, compose, createStore, ReducersMapObject, Store, StoreEnhancerStoreCreator } from 'redux';
import thunk from 'redux-thunk';
import { IApplicationState, reducers } from './Store';

export default function configureStore(history: History, initialState: IApplicationState) {

  const createStoreWithMiddleware = compose(
    applyMiddleware(thunk, routerMiddleware(history)),
    <S>(next: StoreEnhancerStoreCreator<S>) => next
  )(createStore);

  const allReducers = buildRootReducer(reducers);
  const store = createStoreWithMiddleware(allReducers, initialState) as Store<IApplicationState>;

  return store;
};

function buildRootReducer(allReducers: ReducersMapObject<IApplicationState>) {
  return combineReducers<IApplicationState>(Object.assign({}, allReducers, { routing: routerReducer }));
}
