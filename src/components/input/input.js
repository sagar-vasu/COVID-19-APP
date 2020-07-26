import React, {Component} from 'react';
import {Input, Item, View} from 'native-base';

export default class CustomInput extends Component {
  render() {
    return (
      <View style={{margin: 10}}>
        <Item regular>
          <Input
            placeholder={this.props.placeholder}
            secureTextEntry={this.props.secureTextEntry}
            onChangeText={this.props.onChangeText}
            value={this.props.value}
            onFocus={this.props.onFocus}
          />
        </Item>
      </View>
    );
  }
}
