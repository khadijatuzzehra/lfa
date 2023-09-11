import {StyleSheet} from 'react-native';
import dimensions from '../../../theme/Dimensions';
import colors from '../../../theme/Colors';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.White,
  },
  container: {
    marginTop: dimensions.Height / 20,
    marginHorizontal: dimensions.Width / 100,
  },
  header: {
    marginBottom: dimensions.Width / 40,
  },
  dropDownHolder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  holder: {
    justifyContent: 'space-between',
  },
  button: {
    marginTop: dimensions.Width / 35,
  },
  ActionButtonContainer: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 0,
    paddingBottom: dimensions.Width / 100,
    zIndex: 1,
  },
});
export default styles;
