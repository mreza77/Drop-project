import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Styles } from '../../Style/GlobalStyle';
import { Formik } from 'formik';
import * as Yup from "yup";
import { FormFieldTextInput, FormFieldTextBox, FormButton } from '../../Components/Formik';

const validationSchema = Yup.object().shape({
  Phone: Yup.number().required(),
  Password: Yup.string().required().min(4),
})

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={Styles.body}>
          <View style={Styles.ContainerLogo}>
            <Image
              source={require("../../Assets/Pngs/logo.png")}
              style={Styles.LogoLogin}
            ></Image>
          </View>
          <View style={Styles.Loginbody}>
            <Text style={Styles.TextLogin}>Welcome</Text>
            <Formik
              initialValues={{ Phone: "", Password: "" }}
              onSubmit={(values) => { console.log(values) }}
              validationSchema={validationSchema}
            >
              {() => (
                <>
                  <FormFieldTextInput
                    placeholder={"Phone"}
                    placeholderTextColor={"#000"}
                    keyboardType={"phone-pad"}
                    name={"Phone"}
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
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Login;
