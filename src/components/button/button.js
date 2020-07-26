import React, {Component} from 'react';
import {Button, Text} from 'native-base';
import {StyleSheet} from 'react-native';
export default class CustomButton extends Component {
  render() {
    return (
      <>
        {this.props.err ? (
          <Button
            style={styles.btn}
            bordered
            danger
            onPress={this.props.onPress}>
            <Text style={{color: 'red'}}>{this.props.name}</Text>
          </Button>
        ) : this.props.success ? (
          <Button
            style={styles.btn}
            bordered
            success
            onPress={this.props.onPress}>
            <Text style={{color: 'green'}}>{this.props.name}</Text>
          </Button>
        ) : (
          <Button style={styles.btn} bordered onPress={this.props.onPress}>
            <Text>{this.props.name}</Text>
          </Button>
        )}
      </>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
