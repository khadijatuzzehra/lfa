import {StyleSheet} from 'react-native';
import dimensions from '../../../theme/Dimensions';
import colors from '../../../theme/Colors';
import fonts from '../../../theme/Fonts';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.White,
  },
  header: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    top: 20,
    left: 10,
  },
  headerButton: {
    marginRight: dimensions.Height / 2.8,
  },
  seperator: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  image: {
    width: dimensions.Width,
    height: dimensions.Width / 1.1,
  },
  imageContainer: {
    position: 'relative',
    width: dimensions.Width,
    height: dimensions.Width / 1.1,
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: dimensions.Width / 100,
    marginVertical: dimensions.Width / 30,
    marginTop: -20,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: dimensions.Width / 50,
    marginLeft: dimensions.Width / 30,
    alignItems: 'center',
  },
  rowBottom: {
    flexDirection: 'row',
    marginRight: dimensions.Width / 4,
  },
  locationContext: {
    borderColor: colors.InfoText,
    borderWidth: 0.8,
    borderRadius: 10,
    justifyContent: 'center',
    height: dimensions.Width / 15,
    paddingHorizontal: dimensions.Width / 40,
    paddingVertical: dimensions.Width / 100,
    margin: dimensions.Width / 100,
  },
  ticketStatus: {
    borderRadius: 10,
    justifyContent: 'center',
    height: dimensions.Width / 20,
    width: 60,
    backgroundColor: colors.Primary,
  },
  ticketDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: dimensions.Width / 40,
  },
  bottomContainer: {
    backgroundColor: colors.BackgroundColor,
    width: dimensions.Width / 1.1,
    borderRadius: 20,
    margin: dimensions.Width / 30,
    paddingBottom: dimensions.Width / 3,
    paddingTop: dimensions.Width / 20,
  },
  icons: {
    marginRight: 80,
    marginBottom: dimensions.Width / 50,
  },
  EventDetails: {
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.font11,
    marginHorizontal: dimensions.Width / 40,
    marginBottom: dimensions.Width / 10,
    color: colors.Headings,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggleText: {
    fontFamily: fonts.family.bold,
    fontSize: fonts.size.font11,
    color: colors.Primary,
  },
  line: {
    position: 'absolute',
    marginHorizontal: dimensions.Height / 7,
  },
  heading: {
    marginTop: dimensions.Width / 30,
  },
  contactDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    width: dimensions.Width / 2,
    marginHorizontal: dimensions.Width / 40,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: dimensions.Width / 30,
    marginTop: dimensions.Width / 20,
  },
  darkBg: {
    backgroundColor: colors.Badge,
    width: 40,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightBg: {
    backgroundColor: colors.White,
    width: 40,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    height: dimensions.Width / 2,
    width: dimensions.Width / 1.2,
    marginHorizontal: 15,
    marginVertical: 20,
  },
  Button: {
    paddingBottom: dimensions.Width / 40,
  },
});

export default Styles;
