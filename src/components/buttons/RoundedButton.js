import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default class RoundedButton extends Component {
    render() {
        const { text, color, backgroundColor, icon, handleOnPress } = this.props;
        return (
            <TouchableHighlight
                style={[styles.wrapper, { backgroundColor }]}
                onPress={handleOnPress}
            >
                <View style={styles.buttonWrapper}>
                    {icon}
                    <Text style={[styles.buttonText, { color }]}>{text}</Text>
                </View>
            </TouchableHighlight >
        );
    }
}

RoundedButton.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    icon: PropTypes.object,
    handleOnPress: PropTypes.func,
};

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        padding: 15,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: 'white',
        marginBottom: 15,
    },
    buttonWrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 17,
        width: '90%',
        textAlign: 'center'
    }
});
