import {StyleSheet} from 'react-native';
import dimensions from '../../../theme/Dimensions';
import colors from '../../../theme/Colors';

const styles = StyleSheet.create({
  mainContainer: {
    height: dimensions.Height,
    flex: 1,
    backgroundColor: colors.White,
    paddingHorizontal: dimensions.Width / 80,
  },
  container: {
    flex: 1,
    paddingHorizontal: dimensions.Width / 80,
  },
  header: {
    paddingTop: dimensions.Height / 20,
    paddingBottom: dimensions.Height / 10,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: dimensions.Width / 10,
  },
  socialAuth: {
    flexDirection: 'row',
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: dimensions.Height / 50,
  },
  recovery: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: dimensions.Height / 50,
    marginBottom: dimensions.Width / 100,
  },
  ActionButtonContainer: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 0,
    paddingBottom: dimensions.Width / 100,
    backgroundColor: 'white',
    zIndex: 1,
  },
});

export default styles;
