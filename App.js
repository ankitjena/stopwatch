import React from 'react';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';

export default class App extends React.Component {
  state = {count: 0, isRunning: false}

  start() {
    this.setState({isRunning: true})
    var timer = setInterval(() => {
      if(!this.state.isRunning) {
        clearInterval(timer)
      } else {
      this.setState({count: this.state.count + 1})
      }
    }, 10)
  }

  stop() {
    this.setState({isRunning: false})
  }

  render() {
    const {count} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.topview}>
          <Text style={styles.watch}>{(count/100).toFixed(2)}</Text>
        </View>
        <View style={styles.bottomview}>
          {this.state.isRunning ? !!'' : <Button onPress={() => this.start()} title="Start"/> }
          <Button onPress={() => this.stop()} title="Stop"/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topview: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2,
    backgroundColor: 'steelblue',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottomview: {
    flexDirection: 'row',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center'
  },
  watch : {
    color:'#fff',
    fontSize: 60
  }
});
