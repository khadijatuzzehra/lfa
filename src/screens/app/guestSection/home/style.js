import { StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

export const styles= StyleSheet.create({
    titleView:{
        width:responsiveWidth(93),
        alignSelf:'center',
    },
    textstyle:{
        marginLeft:responsiveWidth(.3),
        marginTop:-8
    },
    text:{
        marginLeft:responsiveWidth(.3) ,
        marginTop:responsiveHeight(2)
    }
})