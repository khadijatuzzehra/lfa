import {StyleSheet} from 'react-native';
import dimensions from '../../theme/Dimensions';
import colors from '../../theme/Colors';
import fonts from '../../theme/Fonts';

const Styles = StyleSheet.create({
  form: {
    marginTop: dimensions.Height / 50,
    paddingHorizontal: dimensions.Width / 100,
  },
  dropDownHolder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  holder: {
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },

  bottom: {
    paddingTop: dimensions.Width / 30,
    paddingHorizontal: dimensions.Width / 30,
  },
  component: {
    flexDirection: 'row',
    borderRadius: 10,
    shadowColor: colors.borderColor,
    shadowRadius: 2,
    elevation: 5,
    justifyContent: 'space-between',
    backgroundColor: colors.White,
    marginVertical: dimensions.Width / 70,
    paddingVertical: dimensions.Width / 50,
    paddingHorizontal: dimensions.Width / 100,
    width: dimensions.Width / 1.1,
    maxHeight: dimensions.Height / 4,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  manageContainer: {
    position: 'absolute',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: dimensions.Width / 40,
    right: 0,
  },
  icons: {
    marginHorizontal: dimensions.Width / 50,
    height: dimensions.Height / 60,
    width: dimensions.Height / 60,
  },
  AddButton: {
    position: 'absolute',
    bottom: 30,
    right: 20,
  },
  text: {
    marginHorizontal: dimensions.Width / 30,
    fontFamily: fonts.family.bold,
    fontSize: fonts.size.font10,
    color: colors.InfoText,
  },
  skills: {
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.font10,
    color: colors.InfoText,
  },
  recommendations: {
    marginRight: dimensions.Width / 12,
    paddingRight: dimensions.Width / 20,
    textAlign: 'left',
    fontFamily: fonts.family.medium,
    fontSize: fonts.size.font10,
    color: colors.Black,
  },
  profile: {
    marginLeft: dimensions.Width / 100,
    height: dimensions.Height / 20,
    width: dimensions.Height / 20,
    borderWidth: 2,
    borderColor: colors.Primary,
    borderRadius: dimensions.Width / 20,
  },
  button: {
    marginBottom: dimensions.Width / 50,
  },
});
export default Styles;
