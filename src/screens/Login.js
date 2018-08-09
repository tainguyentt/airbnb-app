import React, { Component } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from '../../node_modules/react-native-gesture-handler';
import NextArrowButton from '../components/buttons/NextArrowButton';
import InputField from '../components/forms/InputField';
import Notification from "../components/Notification";
import colors from '../styles/colors';

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formValid: false,
      emailAddress: '',
      validEmail: false,
      validPassword: false,
    };
  };

  handleEmailChange = (email) => {
    const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.setState({ emailAddress: email });
    this.setState({ validEmail: emailCheckRegex.test(email) });
  };

  handlePasswordChange = (password) => {
    this.setState({ validPassword: password.length > 3 });
  };

  handleNextButton = () => {
    formValid = this.state.emailAddress === 'tai.tan849@gmail.com';
    if (formValid) {
      alert('success');
    }
    this.setState({ formValid: formValid });
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
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  scrollWrapper: {
    marginTop: 70,
    flex: 1
  },
  scrollView: {
    paddingTop: 20,
    paddingLeft: 30,
    paddingRight: 30,
    flex: 1,
  },
  loginHeader: {
    fontSize: 28,
    color: 'white',
    fontWeight: '300',
    marginBottom: 30,
  },
  nextButton: {
    alignItems: 'flex-end',
    right: 20,
    bottom: 20
  },
  notificationWrapper: {
    position: 'absolute',
    backgroundColor: 'yellow',
    bottom: 0,
    right: 0,
    left: 0
  }
});