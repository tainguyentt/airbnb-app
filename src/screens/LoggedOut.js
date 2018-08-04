import React, { Component } from "react";
import { Image, StyleSheet, Text, View, TouchableHighlight } from "react-native";
import colors from "../styles/colors";
import RoundedButton from "../components/buttons/RoundedButton";
import Icon from '@expo/vector-icons/FontAwesome';

export default class LoggedOut extends Component {
    onFacebookPress() {
        alert('Hello FB');
    }
    onAccountPress() {
        alert('Hello Account');
    }
    onMoreOptionsPress() {
        alert('Hello MOre options');
    }
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.welcomeWrapper}>
                    <Image
                        source={require('../images/airbnb-logo.png')}
                        style={styles.logo} />
                    <Text style={styles.welcomeText}>Welcome to Airbnb.</Text>
                    <RoundedButton
                        text="Continue with Facebook"
                        color={colors.orangebnb}
                        backgroundColor="white"
                        icon={<Icon name="facebook" size={20} color={colors.orangebnb} />}
                        handleOnPress={this.onFacebookPress}
                    />
                    <RoundedButton
                        text="Create Account"
                        color="white"
                        backgroundColor={colors.orangebnb}
                        handleOnPress={this.onAccountPress}
                    />
                    <TouchableHighlight
                        style={styles.moreOptionsButton}
                        onPress={this.onMoreOptionsPress}
                    >
                        <Text style={styles.moreOptionsText}>More options</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: colors.orangebnb
    },
    welcomeWrapper: {
        flex: 1,
        padding: 20,
        marginTop: 20
    },
    logo: {
        marginTop: 50,
        marginBottom: 40,
        width: 50,
        height: 50
    },
    welcomeText: {
        fontSize: 30,
        fontWeight: '300',
        marginBottom: 40,
        color: 'white'
    },
    moreOptionsButton: {
        marginTop: 15,
    },
    moreOptionsText: {
        color: 'white',
    }
});