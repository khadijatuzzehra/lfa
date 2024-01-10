import {StyleSheet} from 'react-native';
import {Fonts} from '../../../theme';
import { responsiveWidth } from 'react-native-responsive-dimensions';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 0.5,
  },
  input: {
    fontFamily: Fonts.family.regular,
    fontSize: Fonts.size.font12,
    marginHorizontal: 2,
  },
  icon: {
    marginHorizontal: responsiveWidth(3.44),
  },
});
export default styles;
