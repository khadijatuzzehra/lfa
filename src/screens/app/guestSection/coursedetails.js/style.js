import { StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

export const styles= StyleSheet.create({

    container:{
        flex:1,
    backgroundColor:'white',
    },

    title:{
        marginLeft:responsiveWidth(6),
    },
    cards:{
    marginTop:responsiveHeight(2),
    marginLeft:responsiveWidth(6),
    },


})