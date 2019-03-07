import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class MyKidsLogo extends React.Component {
  render() {
    return (
        <View>
            <Text style={styles.title}>My Kids</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
    },
});