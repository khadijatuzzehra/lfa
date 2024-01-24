import { StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import {Colors} from '../../../../theme';

export const styles= StyleSheet.create({

    container:{
    backgroundColor:'white',
    },

    title:{
        marginLeft:responsiveWidth(6),
    },
    cards:{
    marginTop:responsiveHeight(2),
    marginLeft:responsiveWidth(6),
    gap:20,
    },

    text:{
        alignSelf:"center",
        marginLeft:responsiveWidth(2),
    },
    buttoncontainer: {
        flexDirection: 'row',
        
        justifyContent: 'space-between',
        marginHorizontal: responsiveWidth(7),
        paddingVertical:responsiveHeight(1),
      },
      button: {
        paddingVertical: responsiveHeight(1.5),
        paddingHorizontal: responsiveWidth(11),
        borderRadius: 8,
        backgroundColor: 'rgba(217, 217, 217, 0.3)',
      },
      selectedButton: {
        backgroundColor: Colors.Primary,
      },
})