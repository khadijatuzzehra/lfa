import {StyleSheet} from 'react-native';
import dimensions from '../../../theme/Dimensions';
import colors from '../../../theme/Colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  ticketContainer: {
    backgroundColor: colors.White,
    height: dimensions.Height / 1.2,
    width: dimensions.Width,
    bottom: 0,
    position: 'absolute',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  center: {
    alignItems: 'center',
    marginTop: dimensions.Height / 20,
  },
  centerButton: {
    alignItems: 'center',
    marginVertical: 20,
  },
  backButton: {
    position: 'absolute',
    left: 20,
    top: 50,
  },

  ticket: {
    position: 'absolute',
    top: -30,
    height: dimensions.Height / 15,
    width: dimensions.Height / 3,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  icons: {
    height: dimensions.Height / 40,
    width: dimensions.Height / 20,
    resizeMode: 'contain',
    marginVertical: dimensions.Height / 60,
  },
  line: {
    height: dimensions.Height / 30,
    width: dimensions.Height / 12,
    resizeMode: 'contain',
    marginVertical: dimensions.Height / 80,
  },
  ticketDetails: {
    marginVertical: dimensions.Height / 80,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: dimensions.Height / 80,
    marginHorizontal: dimensions.Height / 20,
  },
  form: {
    marginLeft: dimensions.Width / 70,
    marginRight: dimensions.Width / 90,
  },
  rowForm: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: dimensions.Height / 80,
  },
  rowTickets: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: dimensions.Height / 80,
  },
  rowStatus: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  rowCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: dimensions.Height / 80,
  },
});
export default styles;
