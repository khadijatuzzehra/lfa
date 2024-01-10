import { StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { Colors } from "../../../../theme";

export const styles= StyleSheet.create({
    addprofile:{
        backgroundColor:Colors.addProfileBackground,
        height:responsiveHeight(20),
        width:responsiveWidth(40),
        borderRadius:responsiveHeight(12),
        alignItems:'center',
        marginTop:responsiveHeight(13),
        marginBottom:responsiveHeight(8),
        justifyContent:'center',
        alignSelf:'center'
    },
    inputField:{
        height:responsiveHeight(4.29),
        width:responsiveWidth(85.04),
    },
    fieledView:{
    },
    textView:{
        alignSelf:'center',
        width:responsiveWidth(80)
    },
    text:{
        textAlign:'left',
    },
    regbtn:{
        alignSelf:'center',
        marginTop:responsiveHeight(6)
    }
})