import { StyleSheet } from "react-native"
import {
    responsiveScreenWidth,
    responsiveScreenFontSize,
    responsiveWidth,
    responsiveHeight,
    responsiveFontSize,
} from "react-native-responsive-dimensions";
export const styles = StyleSheet.create({
    logostyle: {
        height: responsiveHeight(11.01),
        width: responsiveWidth(45.56),
       resizeMode:'contain',
       marginTop:responsiveHeight(10)
    },
    rememberView:{width:responsiveWidth(85.04),
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:-12
    },
    inputField:{
        height:responsiveHeight(4.29),
        width:responsiveWidth(85.04),
    },
    btn:{
        marginTop:responsiveHeight(1)
    },
    textStyle:{
        fontSize:responsiveFontSize(3)
    },
    btnView:{
        marginTop:responsiveHeight(5),
        alignItems:'center'
    },
    ContentView:{
        flexDirection:'column',
        alignItems:'flex-start',
        width:responsiveWidth(85.04),
        marginBottom:responsiveHeight(3),
    marginTop:responsiveHeight(7)
    },
    bottomView:{
        flexDirection:'row',
        position:'absolute',
        alignSelf:'center',
        bottom:responsiveHeight(6)
    },
    checkBoxView:{
        flexDirection:'row',
        alignItems:'center',
        marginHorizontal:responsiveWidth(-5.4)
    }
})