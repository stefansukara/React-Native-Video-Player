import React, { Component } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

import Video from 'react-native-video';

import miniVideo from './src/assets/videos/mini-video.mp4';

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
    justifyContent: 'center',
    backgroundColor: '#75A7FF'
  },
  welcome: {
    fontSize: 24,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold'
  },
  video: {
    marginTop: 50,
    width: 300,
    height: 200,
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1
  }
});
