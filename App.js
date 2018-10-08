import React from 'react';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';

export default class App extends React.Component {
  state = {count: 0, isRunning: false, isOn: false}

  start() {
    this.setState({isOn: true})
    this.timer = setInterval(() => {
      this.setState({count: this.state.count + 1})
      }, 10)
  }

  stop() {
    this.setState({isOn: false})
    clearInterval(this.timer)
  }

  reset() {
    this.setState({count: 0, isOn: false})
    clearInterval(this.timer)
  }

  render() {
    const {count} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.topview}>
          <Text style={styles.watch}>{(count/100).toFixed(2)}</Text>
        </View>
        <View style={styles.bottomview}>
          {this.state.count==0 ? <Button onPress={() => this.start()} title="Start"/> : null }
          {(this.state.count!=0 && !this.state.isOn) ? <Button onPress={() => this.start()} title="Resume"/> : null}
          {this.state.isOn ? <Button onPress={() => this.stop()} title="Stop"/> : null}
          {(this.state.count!=0) ? <Button onPress={() => this.reset()} title="Reset"/> : null}
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
    height: (Dimensions.get('window').height / 3) * 2,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottomview: {
    flexDirection: 'row',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 3,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  watch : {
    color:'#fff',
    fontSize: 60
  },
  button : {
    padding: 10
  }
});
