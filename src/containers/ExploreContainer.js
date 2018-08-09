import Icon from '@expo/vector-icons/Ionicons';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ExploreContainer extends Component {
  static navigationOptions = {
    tabBarLabel: 'EXPLORE',
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-search" size={22} color={tintColor} />
    ),
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <Text> Explore Container </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 50
  }
});
