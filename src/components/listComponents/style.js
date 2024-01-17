import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Colors} from '../../theme';
import {GlobalStyles} from '../../utils/constants';

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
    width: responsiveWidth(39),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.44,
    borderColor: 'gray',
    backgroundColor: 'white',
    marginLeft: responsiveWidth(2.77),
    paddingVertical: 10,
    borderRadius: responsiveWidth(2),
    marginTop: responsiveHeight(1.66),
  },
  selectedButton: {
    backgroundColor: '#233465',
    borderColor: 'black',
  },
  buttonText: {
    color: '#233465', // Default text color
    fontSize: 13,
    fontWeight: '700',
  },
  selectedButtonText: {
    color: 'white', // Text color when the button is selected
  },
  cardContainer: {
    backgroundColor: Colors.cardBackground,
    borderRadius: 24,
    flexDirection: 'column',
    height: responsiveHeight(25),
    width: responsiveWidth(57),
    margin: responsiveHeight(1),
  },

  flatlist:{
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'center',
  },

  image: {
    height: responsiveHeight(17),
    width: responsiveWidth(57),
    borderRadius: 24,
    resizeMode: 'cover',
  },
  blogcardcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  Container: {
    borderRadius: 15,
    flexDirection: 'column',
    height: responsiveHeight(16),
    width: responsiveWidth(42),
    backgroundColor: Colors.cardBackground,
    margin: 8,
  },
  
  imagestyle: {
    width: responsiveWidth(40),
    margin: 2,
    height: responsiveHeight(12),
    resizeMode: 'cover',
    borderRadius: 5,
    alignSelf: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
  },
  description: {
    fontWeight: '500',
    fontSize: 13,
  },
  inner: {
    margin: responsiveHeight(1.22),
  },
  innerview: {
    alignSelf: 'center',
    marginTop: responsiveHeight(0.44),
  },
  titlestyle: {
    fontSize: 11,
    fontWeight: '500',
    color: Colors.ContinueAsTextColor,
  },

  spacer: {},
});
