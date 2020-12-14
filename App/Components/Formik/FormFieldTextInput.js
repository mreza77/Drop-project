import React from 'react';
import { View, TextInput } from 'react-native';
import { useFormikContext } from "formik";
import { Styles } from '../../Style/GlobalStyle';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FormAlert from './FormAlert';

const FormField = ({ name, ...otherprops }) => {

    const { handleChange, setFieldTouched, touched, errors } = useFormikContext();

    return (
        <View>
            <View style={Styles.TextInputMain}>
                <View style={Styles.ContainerTextInput}>
                    <FontAwesome5 name="phone-alt" style={Styles.TextInputIcon} ></FontAwesome5>
                    <TextInput
                        style={Styles.TextInput}
                        {...otherprops}
                        onChangeText={handleChange(name)}
                        onBlur={() => setFieldTouched(name)}
                    >
                    </TextInput>
                </View>
            </View>
            <FormAlert error={errors[name]} visible={touched[name]}></FormAlert>
        </View>
    )

};

export default FormField;
