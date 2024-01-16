import {StyleSheet} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
export const Styles = StyleSheet.create({
  logostyle: {
    height: responsiveHeight(8.01),
    width: responsiveWidth(45.56),
    resizeMode: 'contain',
    marginTop: responsiveHeight(10),
  },
  rememberView: {
    width: responsiveWidth(85.04),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: -12,
  },
  inputField: {
    height: responsiveHeight(6),
    width: responsiveWidth(85.04),
  },
  btn: {
    marginTop: responsiveHeight(1),
  },
  textStyle: {
    fontSize: responsiveFontSize(3),
  },
  btnView: {
    marginTop: responsiveHeight(1),
    alignItems: 'center',
  },
  ContentView: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: responsiveWidth(85.04),
    marginBottom: responsiveHeight(3),
    marginTop: responsiveHeight(7),
  },
  bottomView: {
    position: 'absolute',
    bottom: 30,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  checkBoxView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: responsiveWidth(-5.4),
  },
});
