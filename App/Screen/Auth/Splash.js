import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Styles} from '../../Style/GlobalStyle';

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={Styles.body}>
        <Text> Splash </Text>
      </View>
    );
  }
}

export default Splash;
