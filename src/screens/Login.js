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
      formValid: false
    };
  };

  handleNextButton() {
    alert("Next Button");
  };

  handleCloseNotification = () => {
    this.setState({
      formValid: true
    });
  };

  render() {
    const showNotification = !this.state.formValid;
    const backgroundColor = this.state.formValid ? 'orange' : 'red';
    return (
      <KeyboardAvoidingView behavior="padding" style={[{ backgroundColor }, styles.wrapper]}>
        <View style={styles.scrollWrapper}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.loginHeader}>Login</Text>
            <InputField
              labelText="Email Address"
              inputType="email"
            />
            <InputField
              labelText="Password"
              inputType="password"
            />
          </ScrollView>
          <View style={styles.button}>
            <NextArrowButton handleOnPress={this.handleNextButton} />
          </View>
          <View style={styles.notificationWrapper}>
            <Notification
              showNotification={showNotification}
              handleOnClose={this.handleCloseNotification}
              type="Error"
              message="Invalid input"
            />
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
  button: {
    alignItems: 'flex-end',
    right: 20,
    bottom: 20
  },
  notificationWrapper: {
    display: 'flex',
  }
});