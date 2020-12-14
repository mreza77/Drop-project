import React from 'react';
import { View } from 'react-native';
import { useFormikContext } from "formik";
import { Styles } from '../../Style/GlobalStyle';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FormAlert from './FormAlert';
import TextBox from 'react-native-password-eye';

const FormField = ({ name, ...otherprops }) => {

    const { handleChange, setFieldTouched, touched, errors } = useFormikContext();

    return (
        <View>
            <View style={Styles.TextInputMain}>
                <View style={Styles.ContainerTextInput}>
                    <FontAwesome5 name="lock" style={Styles.TextInputIcon} ></FontAwesome5>
                    <TextBox
                        onChangeText={handleChange(name)}
                        onBlur={() => setFieldTouched(name)}
                        inputStyle={Styles.TextInput}
                        containerStyles={Styles.ContainerTextBox}
                        hintStyles={Styles.TextInput}
                        {...otherprops}
                    />
                </View>
            </View>
            <FormAlert error={errors[name]} visible={touched[name]}></FormAlert>
        </View>
    )

};

export default FormField;
