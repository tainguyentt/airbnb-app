import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome';
import colors from '../../styles/colors';
import PropTypes from 'prop-types';

export default class NextArrowButton extends Component {
  render() {
    const {handleOnPress, disabled} = this.props;
    return (
      <TouchableHighlight disabled={disabled} onPress={handleOnPress} style={[{opacity: disabled ? 0.3 : 0.8},styles.wrapper]}>
        <Icon name="angle-right" size={30} color={colors.orangebnb} style={styles.icon} />
      </TouchableHighlight>
    );
  }
}

NextArrowButton.propTypes = {
  handleOnPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

const styles = StyleSheet.create({
  wrapper: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderColor: 'white',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    marginLeft: 5
  }
});
