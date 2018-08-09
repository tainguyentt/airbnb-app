import React, { Component } from 'react';
import { View, Text, Modal, StyleSheet, Image } from 'react-native';

export default class Loader extends Component {
  render() {
    const { animationType, modalVisible } = this.props;
    return (
      <Modal
        animationType={animationType}
        visible={modalVisible}
        transparent={true}>
        <View style={styles.wrapper}>
          <Image source={require('../images/loading.gif')} style={styles.loadingImage} />
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    height: "100%",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingImage: {
    width: 100,
    height: 50,
    borderRadius: 15,
  }
});
