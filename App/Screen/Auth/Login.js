import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { Styles } from '../../Style/GlobalStyle';
import { Formik } from 'formik';
import * as Yup from "yup";
import { FormFieldTextInput, FormFieldTextBox, FormButton } from '../../Components/Formik';
import Global from '../../Global/Global';
import Axios from 'axios';
import Loading from '../../Components/Loading/Loading';
import Alert from 'react-native-android-alert-mjr';

const validationSchema = Yup.object().shape({
  Email: Yup.string().required().email(),
  Password: Yup.string().required().min(4),
})

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      visibleLoading: false,
      visiblealert: false,
      Alert: ""
    };
  }

  SendData = () => {
    this.setState({ visibleLoading: true }, () => {
      Axios.post(`${Global.baseUrl}api/login`, {
        email: this.state.data.Email,
        password: this.state.data.Password
      })
        .then(response => {
          this.setState({ visibleLoading: false }, () => {
            if (response.data.token) {
              this.props.navigation.navigate("Home")
            }
          })
        })
        .catch(error => {
          this.setState({ visibleLoading: false }, () => {
            setTimeout(() => {
              this.setState({
                visiblealert: true,
                Alert: error.response.data.error
              })
            }, 1000)
          })
        })
    })
  }


  render() {

    return (


      <View style={Styles.body}>
        <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"} />
        <Loading isVisible={this.state.visibleLoading} />
        <Alert
          isVisible={this.state.visiblealert}
          text={this.state.Alert}
          closeText={"close"}
          onClose={() => {
            this.setState({ visiblealert: false })
          }}
        />
        <View style={Styles.ContainerLogo}>
          <Image
            source={require("../../Assets/Pngs/logo.png")}
            style={Styles.LogoLogin}
            resizeMode={"center"}
          ></Image>
        </View>
        <View style={Styles.Loginbody}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={Styles.TextLogin}>Welcome</Text>
            <Formik
              initialValues={{ Email: "", Password: "" }}
              onSubmit={(values) => { this.setState({ data: values }, () => { this.SendData() }) }}
              validationSchema={validationSchema}
            >
              {() => (
                <>
                  <FormFieldTextInput
                    placeholder={"Email"}
                    placeholderTextColor={"#000"}
                    name={"Email"}
                    icon={"email"}
                  />
                  <FormFieldTextBox
                    placeholder={"Password"}
                    placeholderTextColor={"#000"}
                    secureTextEntry={true}
                    name={"Password"}
                  />
                  <View style={Styles.ForgotPassContainer}>
                    <TouchableOpacity>
                      <Text style={Styles.ForgetPassText}>Forgot password?</Text>
                    </TouchableOpacity>
                  </View>
                  <FormButton title={"Log In"} />
                </>
              )}
            </Formik>
            <View style={Styles.SignupButtonContainer}>
              <TouchableOpacity
                style={Styles.SignupButton}
                onPress={() => { this.props.navigation.navigate("Register") }}
              >
                <Text style={Styles.SignupTextFirst}>
                  Dont have an account?
                      </Text>
                <Text style={Styles.SignupTextSecond}>
                  Sign up
                      </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>

    );
  }
}

export default Login;
