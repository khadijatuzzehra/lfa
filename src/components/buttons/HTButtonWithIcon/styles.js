import {StyleSheet} from 'react-native';
import {Colors} from '../../../theme';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.Primary,
  },
  text: {
    textAlign: 'center',
    fontSize:responsiveFontSize(1)
  },
});

export default styles;
