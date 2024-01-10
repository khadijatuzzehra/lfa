import { StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { Colors } from "../../theme";


export const styles= StyleSheet.create({
headerView:{
    flexDirection:'row',
    paddingLeft:16,
    padding:10,
    alignItems:'center'
},
iconstyle:{
    resizeMode:'contain',
    height:responsiveHeight(4.66),

},
titlestyle:{
    marginLeft:responsiveWidth(1.44),
    color:Colors.ContinueAsTextColor,
},
homeheader:{
    height:responsiveHeight(9.7),
    backgroundColor:Colors.homeheaderbackgroundColor,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:responsiveWidth(6.44)
},
logostyle:{
    height:responsiveHeight(7),
    width:responsiveWidth(25)
}
})