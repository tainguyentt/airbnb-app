import Icon from '@expo/vector-icons/FontAwesome';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class Notification extends Component {
  constructor(props) {
    super(props)
    this.state = {
      positionValue: new Animated.Value(-60)
    };
  };

  animateNotification = (value) => {
    Animated.timing(
      this.state.positionValue,
      {
        toValue: value
      }
    ).start();
  };

  closeNotification = () => {
    this.props.handleOnClose();
  };

  render() {
    const { showNotification, type, message } = this.props;
    const { positionValue } = this.state;
    showNotification ? this.animateNotification(0) : this.animateNotification(-60);
    return (
      <Animated.View style={[{ marginBottom: positionValue }, styles.wrapper]}>
        <View style={styles.errorContent}>
          <Text style={styles.errorType}> {type} </Text>
          <Text style={styles.errorMessage}> {message} </Text>
        </View>
        <TouchableOpacity style={styles.closeButton} onPress={this.closeNotification}>
          <Icon name="times" size={20} style={{ color: 'grey' }} />
        </TouchableOpacity>
      </Animated.View>
    );
  }
}

Notification.propTypes = {
  showNotification: PropTypes.bool.isRequired,
  handleOnClose: PropTypes.func.isRequired,
  type: PropTypes.string,
  message: PropTypes.string,
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    width: '100%',
    padding: 20,
  },
  errorContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  errorType: {
    color: 'red'
  },
  errorMessage: {
    color: 'grey'
  },
  closeButton: {
    position: 'absolute',
    padding: 20,
    top: 0,
    right: 0,
  }
});