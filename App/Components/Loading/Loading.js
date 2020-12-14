import React, { Component } from 'react';
import { View, Text } from 'react-native';
import LottieView from 'lottie-react-native';
import Modal from 'react-native-modal';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Modal isVisible={this.props.isVisible} animationIn={"zoomIn"} backdropOpacity={0.6} backdropColor={"#fff"} animationInTiming={0} animationOutTiming={0} animationOut={"zoomOut"}>
                <View
                    style={{
                        justifyContent: "center", alignItems: "center",flex:1
                    }}
                >
                    <LottieView
                        source={require("../../Assets/LottieFiles/loadingAuth3.json")}
                        loop
                        autoPlay
                        style={{width:wp(45)}}
                    />
                </View>

            </Modal>
        );
    }
}

export default Loading;




