import { StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { Colors } from "../../theme";

export const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    flatListContainer: {
      flexDirection: 'row',
      marginLeft: 5,
    },
    button: {
      width:responsiveWidth(39),
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: .44,
      borderColor: 'gray',
      backgroundColor: 'white',
      marginLeft: responsiveWidth(2.77),
      paddingVertical: 10,
      borderRadius:responsiveWidth(2),
      marginTop:responsiveHeight(1.66)
    },
    selectedButton: {
      backgroundColor: '#233465',
      borderColor: 'black',
    },
    buttonText: {
      color: '#233465', // Default text color
      fontSize:13,
      fontWeight:'700'
    },
    selectedButtonText: {
      color: 'white', // Text color when the button is selected
    },
    cardContainer: {
        backgroundColor:Colors.cardBackground,
        borderRadius: 24,
        flexDirection: 'column',
        height:responsiveHeight(25),
        width:responsiveWidth(57),
        marginTop:responsiveHeight(1),
      },
      Container:{
        backgroundColor:Colors.cardBackground,
        borderRadius: 15,
        flexDirection: 'column',
        height:responsiveHeight(16),
        width:responsiveWidth(44),
        backgroundColor:Colors.cardBackground,
        margin:4,
      },
      image: {
        width: responsiveWidth(57.22),
        height: responsiveHeight(17),
        borderRadius: 24,
      },
      imagestyle:{
        width: responsiveWidth(44),
        height: responsiveHeight(12),
        borderRadius: 15,
      },
      title: {
        fontSize: 14,
        fontWeight:'600'
      },
      description: {
        fontWeight:'500',
        fontSize:13

      },
      inner:{
        alignSelf:'center',
        marginVertical:responsiveHeight(1.22)
      },
      innerview:{
        alignSelf:'center',
        marginTop:responsiveHeight(.44)
      },
      titlestyle:{
        fontSize: 11,
        fontWeight:'500',
        color:Colors.ContinueAsTextColor
      },
      blogcardcontainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginTop:5
      }
    
  });