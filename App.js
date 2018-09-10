import React, { Component } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.welcome}>Welcome to MyVideoPlayer!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#75A7FF'
  },
  welcome: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 100,
    color: 'white',
    fontWeight: 'bold'
  }
});
