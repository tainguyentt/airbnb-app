import PropTypes from 'prop-types'; //ipt: shortcut
import React, { Component } from 'react'; //rnc: shortcut
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class NavBarButton extends Component {
  render() {
    const { handleOnPress } = this.props;
    return (
      <TouchableOpacity onPress={handleOnPress} style={styles.wrapper}>
        <Text style={styles.label}> Log In </Text>
      </TouchableOpacity>
    );
  }
}

//pt: shortcut
NavBarButton.propTypes = {
  handleOnPress: PropTypes.func,
};

const styles = StyleSheet.create({
  wrapper: {
    marginRight: 20,
  },
  label: {
    fontSize: 17,
    color: 'white'
  }
});
