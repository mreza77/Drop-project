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
            <Text style={Styles.TextRegister}>Welcome</Text>
            <Formik
              initialValues={{ Name: "", Phone: "", Password: "", Repassword: "" }}
              onSubmit={(values) => { console.log(values) }}
              validationSchema={validationSchema}
            >
              {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
                <>
                  <View style={Styles.TextInputMain}>
                    <View style={Styles.ContainerTextInput}>
                      <FontAwesome5 name="user-alt" style={Styles.TextInputIcon} ></FontAwesome5>
                      <TextInput
                        style={Styles.TextInput}
                        placeholder={"Name"}
                        placeholderTextColor={"#000"}
                        onChangeText={handleChange("Name")}
                        onBlur={() => setFieldTouched("Name")}
                      >
                      </TextInput>
                    </View>
                  </View>
                  <FormAlert error={errors.Name} visible={touched.Name}></FormAlert>
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
                  <View style={Styles.TextInputMain}>
                    <View style={Styles.ContainerTextInput}>
                      <MaterialIcons name="lock" style={Styles.TextInputIcon} ></MaterialIcons>
                      <TextBox
                        onChangeText={handleChange("Repassword")}
                        placeholder={"Repassword"}
                        inputStyle={Styles.TextInput}
                        containerStyles={Styles.ContainerTextBox}
                        hintStyles={Styles.TextInput}
                        placeholderTextColor={"#000"}
                        secureTextEntry={true}
                        onBlur={() => setFieldTouched("Repassword")}
                      />
                    </View>
                  </View>
                  <FormAlert error={errors.Repassword} visible={touched.Repassword}></FormAlert>
                  <View style={Styles.FormContainerButton}>
                    <TouchableOpacity
                      style={Styles.FormButton}
                      onPress={handleSubmit}
                    >
                      <Text style={Styles.FormTextButton}>Sign Up</Text>
                    </TouchableOpacity>
                  </View>
                </>
              )}
            </Formik>
            <View style={Styles.SignupButtonContainer}>
              <TouchableOpacity style={Styles.SignupButton}>
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
