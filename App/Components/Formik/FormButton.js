import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useFormikContext } from "formik";
import { Styles } from '../../Style/GlobalStyle';


const FormButton = ({ title }) => {

    const { handleSubmit } = useFormikContext();

    return (
        <View style={Styles.FormContainerButton}>
            <TouchableOpacity
                style={Styles.FormButton}
                onPress={handleSubmit}
            >
                <Text style={Styles.FormTextButton}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
};

export default FormButton;




