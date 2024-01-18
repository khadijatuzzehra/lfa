import { StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

export const styles= StyleSheet.create({

    container: {
      flexDirection:'row',
      
        
      },
      image: {
        height:responsiveHeight(20),
        width:responsiveWidth(35),
        resizeMode: 'contain',
        resizeMode: 'cover',
      },
      coursetext:{
        alignSelf:'center'
      },
      stars:{
        flexDirection:"row",
        gap:3,
        marginTop:responsiveHeight(.5),
        alignItems:"center",
      },
      detailtxt:{
        marginLeft:responsiveWidth(1),
        flexDirection:"row",
      },
      button:{
         
        flexDirection:"row",
alignSelf:"flex-end",
marginTop:responsiveHeight(2),
      },
})