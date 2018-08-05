import React, { Component } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from '../../node_modules/react-native-gesture-handler';
import NextArrowButton from '../components/buttons/NextArrowButton';
import InputField from '../components/forms/InputField';
import colors from '../styles/colors';

export default class Login extends Component {
  handleNextButton() {
    alert("Next Button");
  }
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.wrapper}>
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
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.orangebnb
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
  }
});