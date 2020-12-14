import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Styles } from '../../Style/GlobalStyle';
import { Formik } from 'formik';
import * as Yup from "yup";
import { FormFieldTextInput, FormFieldTextBox, FormButton } from '../../Components/Formik';

const validationSchema = Yup.object().shape({
  Name: Yup.string().required().min(3),
  Phone: Yup.number().required(),
  Password: Yup.string().required().min(4),
  Repassword: Yup.string().required().oneOf([Yup.ref("Password"), null], "Password and Repassword are not equal").min(4)
})


class Register extends Component {
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
            <Text style={Styles.TextRegister}>Sign Up</Text>
            <Formik
              initialValues={{ Name: "", Phone: "", Password: "", Repassword: "" }}
              onSubmit={(values) => { console.log(values) }}
              validationSchema={validationSchema}
            >
              {() => (
                <>
                  <FormFieldTextInput
                    placeholder={"Name"}
                    placeholderTextColor={"#000"}
                    name={"Name"}
                  />
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
                  <FormFieldTextBox
                    placeholder={"Repassword"}
                    placeholderTextColor={"#000"}
                    secureTextEntry={true}
                    name={"Repassword"}
                  />
                  <FormButton title={"Sign Up"}></FormButton>
                </>
              )}
            </Formik>
            <View style={Styles.SignupButtonContainer}>
              <TouchableOpacity
                style={Styles.SignupButton}
                onPress={() => { this.props.navigation.navigate("Login") }}
              >
                <Text style={Styles.SignupTextFirst}>
                  Already have an account?
                      </Text>
                <Text style={Styles.SignupTextSecond}>
                  Log In
                      </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Register;
