import React, { Component } from 'react';
import LoggedInTabNavigator from '../navigators/TabNavigator';
import { transparentHeaderStyle } from '../styles/navigation';

export default class LoggedIn extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: null,
    headerStyle: transparentHeaderStyle,
    gestureEnabled: false,
  });

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <LoggedInTabNavigator />
    );
  }
}
