import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class Alert extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={Styles.Container}>
                {!this.props.error || !this.props.visible ? null : (
                    <Text style={Styles.Text}>{this.props.error}</Text>
                )}
            </View>
        );
    }
}

export default Alert;


const Styles = StyleSheet.create({

   Text:{
       fontSize:wp(4),
       color:"#838383",
       width:wp(80)
   },
   Container:{
    alignItems:"center"
   }

})