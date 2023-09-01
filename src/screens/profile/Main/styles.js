import {StyleSheet} from 'react-native';
import colors from '../../../theme/Colors';
import dimensions from '../../../theme/Dimensions';

const commonRowStyles = {
  flexDirection: 'row',
  justifyContent: 'space-between',
};
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WhiteDull,
    alignItems: 'center',
  },
  image: {
    height: dimensions.Height / 30,
    width: dimensions.Height / 30,
    marginRight: dimensions.Width / 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  coverPhoto: {
    width: dimensions.Width,
    height: dimensions.Height / 4,
    resizeMode: 'cover',
  },
  topContainer: {
    height: dimensions.Height / 4,
    width: dimensions.Width,
  },
  centerContainer: {
    height: dimensions.Height / 15,
    width: dimensions.Width,
    justifyContent: 'center',
    backgroundColor: colors.WhiteDull,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    top: -dimensions.Width / 20,
  },
  text: {
    position: 'absolute',
    marginTop: dimensions.Height / 12,
    marginLeft: dimensions.Width / 4.2,
  },
  bottomContainer: {
    width: dimensions.Width / 1.1,
    backgroundColor: colors.White,
    paddingVertical: dimensions.Width / 50,
    paddingHorizontal: dimensions.Width / 20,
    borderRadius: 10,
    shadowColor: colors.borderColor,
    elevation: 5,
    marginBottom: dimensions.Width / 20,
  },
  row: {
    ...commonRowStyles,
  },
  rowStart: {
    ...commonRowStyles,
    alignItems: 'center',
  },
  rowEnd: {
    justifyContent: 'center',
  },
  profile: {
    position: 'absolute',
    marginTop: dimensions.Height / 25,
    marginLeft: dimensions.Height / 200,
  },
  userPhoto: {
    height: dimensions.Width / 4,
    width: dimensions.Width / 4,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: colors.White,
    resizeMode: 'contain',
  },
  badgeContainer: {
    height: dimensions.Width / 1.1,
    padding: 20,
    position: 'absolute',
    right: 0,
    zIndex: 1,
  },
  line: {
    width: dimensions.Width / 1.1,
    left: -20,
  },
});

export default Styles;
