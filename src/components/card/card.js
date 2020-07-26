import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class CustomCard extends Component {
  render() {
    let propsData = this.props.data;
    return (
      <>
        {propsData ? (
          <View
            style={[
              styles.card,
              {
                backgroundColor: propsData.backgroundColor,
              },
            ]}>
            <Text style={[styles.heading, {color: 'white'}]}>
              {propsData && propsData.title}
            </Text>
            <Text style={[styles.text, {color: 'white'}]}>
              {propsData && propsData.number}
            </Text>
          </View>
        ) : null}
      </>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    marginHorizontal: 15,
    margin: 10,
    elevation: 4,
    height: 100,
    padding: 50,
  },
  heading: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  text: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 20,
  },
});
