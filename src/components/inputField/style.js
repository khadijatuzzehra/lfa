import {StyleSheet} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Colors, Fonts} from '../../theme';
import {Dimensions} from '../../utils/constants';

export const styles = StyleSheet.create({
  inputFieldview: {
    flexDirection: 'row',
    alignItems: 'center',
    width: responsiveWidth(85.04),
    backgroundColor: Colors.LighterGray,
    borderRadius: responsiveHeight(2.2),
    alignSelf: 'center',
    paddingLeft: responsiveWidth(3),
    marginVertical: responsiveHeight(1),
  },
  field: {
    height: responsiveHeight(5.44),
    paddingLeft: responsiveWidth(4),
  },
  iconstyleview: {
    marginLeft: responsiveWidth(1),
  },
  searchinputView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: Dimensions.Width * 0.9,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: Colors.LighterGray,
    marginVertical: responsiveHeight(5),
  },
  input: {
    width: Dimensions.Width * 0.8,
    fontFamily: Fonts.family.regular,
    fontSize: Fonts.size.font12,
  },
});
