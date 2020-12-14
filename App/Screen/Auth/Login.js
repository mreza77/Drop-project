import React, { Component } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Styles } from '../../Style/GlobalStyle';
import { Formik } from 'formik';
import * as Yup from "yup";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import TextBox from 'react-native-password-eye';
import FormAlert from '../../Components/FormAlert/Alert';


const validationSchema = Yup.object().shape({
  Phone: Yup.number().required().min(11),
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

      <View style={Styles.body}>
        <View style={Styles.ContainerLogo}>
          <Image
            source={require("../../Assets/Pngs/logo.png")}
            style={Styles.LogoLogin}
          ></Image>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Styles.Loginbody}>
            <Text style={Styles.TextLogin}>Welcome</Text>
            <Formik
              initialValues={{ Phone: "", Password: "" }}
              onSubmit={(values) => { console.log(values) }}
              validationSchema={validationSchema}
            >
              {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
                <>
                  <View style={Styles.TextInputMain}>
                    <View style={Styles.ContainerTextInput}>
                      <FontAwesome5 name="phone-alt" style={Styles.TextInputIcon} ></FontAwesome5>
                      <TextInput
                        style={Styles.TextInput}
                        placeholder={"Phone"}
                        placeholderTextColor={"#000"}
                        keyboardType={"phone-pad"}
                        onChangeText={handleChange("Phone")}
                        onBlur={() => setFieldTouched("Phone")}
                      >
                      </TextInput>
                    </View>
                  </View>
                  <FormAlert error={errors.Phone} visible={touched.Phone}></FormAlert>
                  <View style={Styles.TextInputMain}>
                    <View style={Styles.ContainerTextInput}>
                      <MaterialIcons name="lock" style={Styles.TextInputIcon} ></MaterialIcons>
                      <TextBox
                        onChangeText={handleChange("Password")}
                        placeholder={"Password"}
                        inputStyle={Styles.TextInput}
                        containerStyles={Styles.ContainerTextBox}
                        hintStyles={Styles.TextInput}
                        placeholderTextColor={"#000"}
                        secureTextEntry={true}
                        onBlur={() => setFieldTouched("Password")}
                      />
                    </View>
                  </View>
                  <FormAlert error={errors.Password} visible={touched.Password}></FormAlert>
                  <View style={Styles.ForgotPassContainer}>
                    <TouchableOpacity>
                      <Text style={Styles.ForgetPassText}>
                        Forgot password?
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={Styles.FormContainerButton}>
                    <TouchableOpacity
                      style={Styles.FormButton}
                      onPress={handleSubmit}
                    >
                      <Text style={Styles.FormTextButton}>Log In</Text>
                    </TouchableOpacity>
                  </View>
                </>
              )}
            </Formik>
            <View style={Styles.SignupButtonContainer}>
              <TouchableOpacity style={Styles.SignupButton}>
                <Text style={Styles.SignupTextFirst}>
                  Dont have an account?
                      </Text>
                <Text style={Styles.SignupTextSecond}>
                  Sign up
                      </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>



    );
  }
}

export default Login;
