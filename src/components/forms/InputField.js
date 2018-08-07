import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from '../../../node_modules/react-native-gesture-handler';

export default class InputField extends Component {
  constructor(props) {
    super(props)
    this.state = {
      secureText: props.inputType === 'password' ? true : false
    };
  }

  //bind context this to the function
  togglePassword = () => {
    this.setState({ secureText: !this.state.secureText });
  }

  render() {
    const { labelText, inputType } = this.props;
    const secureText = this.state.secureText;
    return (
      <View style={styles.wrapper}>
        <Text style={styles.labelText}> {labelText} </Text>
        {inputType === 'password' ?
          <TouchableOpacity onPress={this.togglePassword} style={styles.togglePasswordButton}>
            <Text style={styles.togglePasswordText}> {secureText ? "Show" : "Hide"} </Text>
          </TouchableOpacity>
          : null}
        <TextInput
          autoCorrect={false}
          style={styles.inputField}
          secureTextEntry={secureText} />
      </View>
    );
  }
}

InputField.propTypes = {
  labelText: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginBottom: 30,
  },
  labelText: {
    color: 'white',
    fontWeight: '700',
    marginBottom: 5,
  },
  togglePasswordButton: {
    position: 'absolute',
    right: 0
  },
  togglePasswordText: {
    color: 'white',
  },
  inputField: {
    borderBottomWidth: 1,
    paddingTop: 5,
    paddingBottom: 5,
    color: 'white',
    borderBottomColor: 'white',
  }
});
