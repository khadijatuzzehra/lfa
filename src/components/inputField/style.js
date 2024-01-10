import { StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { Colors } from "../../theme";

export const styles= StyleSheet.create({
    inputFieldview:{
        flexDirection:'row',
        alignItems:'center',
        width:responsiveWidth(85.04),
        backgroundColor:Colors.LighterGray,
        borderRadius:responsiveHeight(2.2),
        alignSelf:'center',
        paddingLeft:responsiveWidth(3),
        marginVertical:responsiveHeight(1)
    },
    field:{
            height:responsiveHeight(5.44),
            paddingLeft:responsiveWidth(4)
    },
    iconstyleview:{
        marginLeft:responsiveWidth(1)
    },
    searchinputView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:responsiveWidth(87),
        height:responsiveHeight(5.44),
        paddingHorizontal:responsiveWidth(4.33),
        alignSelf:'center',
        // borderWidth:1,
        borderRadius:28,
        // borderColor:'#D9D9D9',
        // shadowColor:'#D9D9D9',
        backgroundColor:'white',
        marginVertical:responsiveHeight(5),

    }
})