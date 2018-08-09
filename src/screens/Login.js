import React, { Component } from 'react';
import { KeyboardAvoidingView, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ScrollView } from '../../node_modules/react-native-gesture-handler';
import NextArrowButton from '../components/buttons/NextArrowButton';
import InputField from '../components/forms/InputField';
import Loader from '../components/Loader';
import Notification from "../components/Notification";
import { ActionCreators } from '../redux/actions';
import colors from '../styles/colors';
import { styles } from './styles/Login';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formValid: true,
      emailAddress: '',
      password: '',
      validEmail: false,
      validPassword: false,
      loadingVisible: false
    };
  };

  handleEmailChange = (email) => {
    const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.setState({ emailAddress: email });
    this.setState({ validEmail: emailCheckRegex.test(email) });
  };

  handlePasswordChange = (password) => {
    this.setState({ password, validPassword: password.length > 3 });
  };

  handleNextButton = () => {
    this.setState({ loadingVisible: true });
    const { emailAddress, password } = this.state;
    setTimeout(() => {
      formValid = this.props.logIn(emailAddress, password);
      this.setState({ formValid: formValid });
      this.setState({ loadingVisible: false });
    }, 2000);
  };

  isNextButtonDisabled = () => {
    return !this.state.validEmail || !this.state.validPassword;
  }

  handleCloseNotification = () => {
    this.setState({ formValid: true });
  };

  render() {
    const showNotification = !this.state.formValid;
    const backgroundColor = this.state.formValid ? colors.orangebnb : 'red';
    const loadingVisible = this.state.loadingVisible;
    return (
      <KeyboardAvoidingView behavior="padding" style={[{ backgroundColor }, styles.wrapper]}>
        <View style={styles.scrollWrapper}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.loginHeader}>Login</Text>
            <InputField
              labelText="Email Address"
              inputType="email"
              onChangeText={this.handleEmailChange} />
            <InputField
              labelText="Password"
              inputType="password"
              onChangeText={this.handlePasswordChange} />
          </ScrollView>
          <View style={styles.nextButton}>
            <NextArrowButton disabled={this.isNextButtonDisabled()} handleOnPress={this.handleNextButton} />
          </View>
          <View style={styles.notificationWrapper}>
            <Notification
              showNotification={showNotification}
              handleOnClose={this.handleCloseNotification}
              type="Error"
              message="Invalid input" />
          </View>
        </View>
        <Loader modalVisible={loadingVisible} animationType="fade" />
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedInStatus: state.loggedInStatus
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);