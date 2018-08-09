import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import Login from './src/screens/Login';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Login />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
