import { StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { Dimensions } from "../../../../utils/constants";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    imageContainer: {
        height: Dimensions.Height * 0.35,
        width: Dimensions.Height * 0.48,
        position: 'relative',
    },
    img: {
        height: '100%',
        width: '100%',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.4)', // Adjust the opacity for the desired grayscale effect
        justifyContent:'flex-end',
    },
    title:{
          textAlign:'justify',
    },stars:{
        flexDirection:"row",
        gap:3,
        marginTop:responsiveHeight(.5),
        alignItems:"center",
      },
      detailtxt:{
        marginLeft:responsiveWidth(1),
        flexDirection:"row",
      },
});
