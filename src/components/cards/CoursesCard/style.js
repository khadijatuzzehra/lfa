import { StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

export const styles= StyleSheet.create({

    container: {
      flexDirection:'row',
      
        
      },
      image: {
        height:responsiveHeight(20),
        width:responsiveWidth(35),
        objectFit:"cover",

      },
      coursetext:{
        alignSelf:'center'
      },
      stars:{
        flexDirection:"row",
        gap:3,
        marginTop:responsiveHeight(.5),
      },
      detailtxt:{
        
      },
      
})