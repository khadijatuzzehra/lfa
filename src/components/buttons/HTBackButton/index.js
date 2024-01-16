import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {Colors, Fonts} from '../../../theme';
import HTText from '../../text/HTText';

const HTBackButton = ({label}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
      <Ionicons name="arrow-back-outline" size={20} color={Colors.Gray} />
      <HTText
        bold
        text={label}
        textColor={Colors.Gray}
        size={Fonts.size.font14}
        styles={styles.text}
      />
    </TouchableOpacity>
  );
};

export default HTBackButton;
const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    left: 20,
    top: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 5,
  },
});
