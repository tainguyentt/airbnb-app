import React, { Component } from 'react';
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers';
import { Provider } from 'react-redux';
import AppWithNavigationState from './src/navigators/AppNavigator';
import store from './src/redux/store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState listener={createReduxBoundAddListener('root')} />
      </Provider>
    );
  }
}