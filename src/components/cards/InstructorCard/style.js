import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";


export default StyleSheet.create({
  card1: {
    marginTop:responsiveHeight(1),
    width:responsiveWidth(40),
    height:responsiveHeight(12),
    marginLeft:responsiveWidth(6),
    backgroundColor: '#D9D9D9',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0, // Flat bottom left corner
    borderBottomRightRadius: 0, // Flat bottom right corner
    padding: 16,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  card2:{
    width:responsiveWidth(40),
    height:responsiveHeight(12),
    marginLeft:responsiveWidth(6),
    marginBottom:responsiveHeight(3),
    backgroundColor: 'white',
    borderTopLeftRadius: 0, // Flat top left corner
    borderTopRightRadius: 0, // Flat top right corner
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    padding: 16,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  textstyle:{
    alignSelf:'center',

  },
  imagestyle:{
    height:responsiveHeight(3),
    width:responsiveWidth(6),
    marginRight:responsiveWidth(2),
    marginBottom:responsiveHeight(.5),
  },
  dateview:{
    flexDirection:'row',
    alignSelf:'center',
  },
  
});
