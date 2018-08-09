import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });
const navigationMiddleware = createReactNavigationReduxMiddleware('root', state => state.nav);
function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
      navigationMiddleware,
    )
  )
  return createStore(reducer, initialState, enhancer);
}

export default configureStore({});