import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import Dropdown from '../../components/Auth/Dropdown';
import colors from '../../theme/Colors';
import dimensions from '../../theme/Dimensions';
import fonts from '../../theme/Fonts';

const PhoneNumberInput = ({onChangeText}) => {
  const [text, setText] = useState('');

  const handleTextChange = inputText => {
    setText(inputText);
    onChangeText(inputText, countryCode);
  };
  const [open, setOpen] = useState(false);
  const [countryCode, setCountryCode] = useState('');

  const dropdownValues1 = ['+1', '+91', '+44'];

  return (
    <View style={styles.container}>
      <Dropdown
        height={dimensions.Height / 16}
        width={dimensions.Width / 6}
        placeholder="Code"
        onClick={value => setCountryCode(value)}
        dropdownValues={dropdownValues1}
      />
      <Text style={styles.separator}>|</Text>
      <TextInput
        style={styles.phoneNumberInput}
        placeholder="Phone Number"
        placeholderTextColor="#959AA1"
        onChangeText={handleTextChange}
        value={text}
        keyboardType="phone-pad"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: 4,
    marginHorizontal: dimensions.Width / 30,
    marginBottom: dimensions.Width / 30,
    height: dimensions.Height / 16,
    width: dimensions.Width / 1.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  separator: {
    fontSize: fonts.size.font20,
    textAlign: 'center',
    paddingBottom: dimensions.Width / 50,
    color: colors.Gray,
    marginRight: dimensions.Width / 50,
  },
  phoneNumberInput: {
    flex: 1,
    fontSize: fonts.size.font12,
    fontFamily: fonts.family.regular,
    color: colors.Gray,
  },
});

export default PhoneNumberInput;
