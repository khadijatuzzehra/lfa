import { StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

export const styles=StyleSheet.create({
    mainView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    logostyle:{
        height:responsiveHeight(25),
        width:responsiveWidth(60),
        resizeMode:'contain'
    },
    linestyle:{
        resizeMode:'contain',
        width:responsiveWidth(85)
    },
    text:{
        textAlign:'center',
    },
    bottomView:{
        width:responsiveWidth(85),
        marginTop:responsiveHeight(2)
    }
})