import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={Styles.ContainerButton}>
                <TouchableOpacity
                    style={{ ...Styles.button, backgroundColor: this.props.color }}
                    onPress={() => this.props.onpress(this.props.screen)}
                >
                    <Text style={{ ...Styles.Text, color: this.props.textcolor }}>{this.props.Text}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Button;


const Styles = StyleSheet.create({

    button: {
        width: wp(80),
        height: hp(7.7),
        borderRadius: wp(3),
        elevation: wp(1),
        justifyContent: "center",
        alignItems: "center",
        marginVertical: hp(1.5)
    },
    Text: {
        fontSize: wp(4.5)
    },
    ContainerButton: {
        justifyContent: "center",
        alignItems: "center"
    }

})