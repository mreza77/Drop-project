import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Styles } from '../../Style/GlobalStyle';
import LottieView from 'lottie-react-native';

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  async componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate("Firstpg")
    }, 3000)
  }

  render() {
    return (
      <View style={Styles.body}>
        <View style={Styles.ContainerLottie}>
          <LottieView
            style={Styles.SplashLottie}
            source={require("../../Assets/LottieFiles/logo.json")}
            loop
            autoPlay
          />
        </View>
      </View>
    );
  }
}

export default Splash;
