import React, { Component } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

import Video from 'react-native-video';

import { miniVideo } from './src/assets/videos';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.welcome}>Welcome to MyVideoPlayer!</Text>
        <Video
          source={miniVideo}
          ref={ref => {
            this.player = ref;
          }}
          resize="contain"
          onBuffer={this.onBuffer}
          onEnd={this.onEnd}
          onError={this.videoError}
          style={styles.video}
          controls={true}
        />
      </View>
    );
  }

  onEnd = end => {
    console.log('end', end);
  };

  onBuffer = buffer => {
    console.log('buffer', buffer);
  };

  videoError = error => {
    console.log('error', error);
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#55A5FF'
  },
  welcome: {
    fontSize: 24,
    marginTop: 100,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold'
  },
  video: {
    marginTop: 150,
    width: 300,
    height: 200,
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1
  }
});
