import { StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

export const styles= StyleSheet.create({
    imgview:{
        height:responsiveHeight(50),
        width:responsiveWidth(20),
    },
    img:{
        height:responsiveHeight(20),
        width:responsiveWidth(100),
        resizeMode: 'contain',
        resizeMode: 'cover',

    },
    title:{
        marginTop:responsiveHeight(2),
        marginLeft:responsiveWidth(2),
    },
    paragraphview:{
        marginLeft:responsiveWidth(2),
        marginRight:responsiveWidth(2),
    },
    paragraph1:{
        marginTop:responsiveHeight(1),
        marginLeft:responsiveWidth(2),
        marginRight:responsiveWidth(2),
        textAlign:"justify",
    },
    paragraph2:{
        marginTop:responsiveHeight(1),
        textAlign:"justify",
        marginLeft:responsiveWidth(2),
        marginRight:responsiveWidth(2),

    },
    paragraph3:{
        marginTop:responsiveHeight(1),
        marginLeft:responsiveWidth(2),
        marginRight:responsiveWidth(2),
        textAlign:"justify",

    },
    paragraph4:{
        marginTop:responsiveHeight(1),
        marginLeft:responsiveWidth(2),
        marginRight:responsiveWidth(2),
        textAlign:"justify",

    },
    paragraph5:{
        marginTop:responsiveHeight(1),
        marginLeft:responsiveWidth(2),
        marginRight:responsiveWidth(2),
        textAlign:"justify",

    },
})