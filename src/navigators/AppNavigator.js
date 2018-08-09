import PropTypes from 'prop-types';
import React from 'react';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import LoggedOut from '../screens/LoggedOut';
import LogIn from '../screens/Login';

export const AppNavigator = StackNavigator({
  LogIn: { screen: LogIn },
  LoggedOut: { screen: LoggedOut },
});

const AppWithNavigationState = ({ dispatch, nav, listener }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav, addListener: listener })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);