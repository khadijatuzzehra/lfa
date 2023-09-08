import {StyleSheet} from 'react-native';
import dimensions from '../../../theme/Dimensions';
import colors from '../../../theme/Colors';
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  ticketContainer: {
    marginHorizontal: dimensions.Width / 22,
    backgroundColor: colors.White,
    height: dimensions.Height / 1.3,
    width: dimensions.Width / 1.1,
    borderRadius: 20,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: dimensions.Height / 10,
    marginBottom: dimensions.Height / 5,
    height: dimensions.Height / 50,
    width: dimensions.Width / 50,
  },
  progressBar: {
    height: dimensions.Height / 100,
    width: dimensions.Height / 100,
    marginTop: dimensions.Height / 30,
  },
  center: {
    alignItems: 'center',
  },
  centerButton: {
    alignItems: 'center',
    marginVertical: 20,
  },
  button: {
    marginVertical: 5,
  },
  bar: {
    marginHorizontal: dimensions.Width / 30,
    borderRadius: 20,
  },
  ticket: {
    height: dimensions.Height / 15,
    width: dimensions.Height / 3,
    resizeMode: 'contain',
    marginVertical: dimensions.Height / 30,
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
    marginHorizontal: dimensions.Height / 40,
  },
  rowStatus: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  rowTickets: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: dimensions.Height / 80,
  },
  rowCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: dimensions.Height / 80,
  },
  backButton: {
    position: 'absolute',
    left: 20,
    top: 50,
  },
});
export default Styles;
