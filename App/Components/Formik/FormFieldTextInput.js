import React from 'react';
import { View, TextInput } from 'react-native';
import { useFormikContext } from "formik";
import { Styles } from '../../Style/GlobalStyle';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FormAlert from './FormAlert';

const FormField = ({ name, icon, ...otherprops }) => {

    const { handleChange, setFieldTouched, touched, errors } = useFormikContext();

    return (
        <View>
            <View style={Styles.TextInputMain}>
                <View style={Styles.ContainerTextInput}>
                    <MaterialIcons name={icon} style={Styles.TextInputIcon} ></MaterialIcons>
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
