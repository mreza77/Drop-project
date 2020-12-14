import React, { Component } from 'react';
import { View, Image, StatusBar, Text } from 'react-native';
import { Styles } from '../../Style/GlobalStyle';
import Button from '../../Components/CustomButton/Button';

class Firstpg extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={Styles.body}>
        <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"} />
        <View style={Styles.ContainerImage}>
          <Image
            source={require("../../Assets/Pngs/imagemarketing.png")}
            style={Styles.ImageFirstpg}
          ></Image>
          <Text style={Styles.Text}>ABDULLAH MARKETING</Text>
        </View>
        <View style={Styles.ContainerButton}>
          <Button
            Text={"Log In"}
            onpress={this.props.navigation.navigate}
            screen={"Login"}
            color={"#699CDB"}
            textcolor={"#fff"}
          ></Button>
          <Button
            Text={"Register"}
            onpress={this.props.navigation.navigate}
            screen={"Register"}
            color={"#E3ECFE"}
            textcolor={"#84ACE4"}
          ></Button>
        </View>
      </View>
    );
  }
}

export default Firstpg;
