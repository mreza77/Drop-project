import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const Styles = StyleSheet.create({

    body: {
        flex: 1,
        backgroundColor: "#fff"
    },
    ContainerLottie: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    SplashLottie: {
        width: wp(30),
        height: hp(25),

    },
    ContainerImage: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    ImageFirstpg: {
        width: wp(70),
        height: hp(40)
    },
    Text: {
        fontSize: wp(4.5),
        fontWeight: "bold",
        color: "#005BE2"
    },
    ContainerButton: {
        marginBottom: hp(5)
    },
    Loginbody: {
        backgroundColor: "#F1F4F9",
        borderTopLeftRadius:wp(6),
        borderTopRightRadius:wp(6),
        elevation:wp(1),
    },
    LogoLogin: {
        width: wp(60),
        height: hp(10.5),
        marginVertical:hp(6)
    },
    ContainerLogo:{
        alignItems: "center",
        justifyContent: "center",
    },
    TextLogin:{
        fontSize:wp(5),
        fontWeight: "bold",
        marginHorizontal:wp(8),
        marginVertical:hp(6)
    },
    TextRegister:{
        fontSize:wp(5),
        fontWeight: "bold",
        marginHorizontal:wp(8),
        marginVertical:hp(4)
    },
    TextInput:{
        fontSize:wp(4),
        flex:1
    },
    ContainerTextInput:{
        alignItems:"center",
        flexDirection:"row",
        width:wp(90),
        height:hp(8),
        borderBottomWidth:wp(0.8),
        borderBottomColor:"#6F9EDD",
    },
    TextInputMain:{
        justifyContent:"center",
        alignItems:"center",
        marginVertical:hp(1)
    },
    TextInputIcon:{
        color:"#6F9EDD",
        fontSize:wp(4.5),
        marginRight:wp(2)
    },
    ContainerTextBox:{
        width:wp(84)
    },
    FormButton:{
        width: wp(80),
        height: hp(7.7),
        borderRadius: wp(3),
        elevation: wp(1),
        justifyContent: "center",
        alignItems: "center",
        marginVertical: hp(1.5),
        backgroundColor:"#6F9EDD"
    },
    FormTextButton:{
        fontSize:wp(4.5),
        color:"#fff"
    },
    FormContainerButton: {
        justifyContent: "center",
        alignItems: "center",
        marginVertical:hp(3)
    },
    ForgotPassContainer:{
        alignItems:"flex-end",
        marginRight:wp(5),
        marginTop:hp(4)
    },
    ForgetPassText:{
        fontSize:wp(3.5),
        fontWeight: "bold",
    },
    SignupButtonContainer:{
        justifyContent:"center",
        alignItems:"center",
        marginBottom:hp(5)
    },
    SignupButton:{
        flexDirection:"row"
    },
    SignupTextFirst:{
        fontSize:wp(3.5),
        fontWeight: "bold",
        marginRight:wp(2)
    },
    SignupTextSecond:{
        fontSize:wp(3.5),
        fontWeight: "bold",
        color:"#6F9EDD"
    }

})
