import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import Dropdown from '../../components/Auth/Dropdown';
import Data from '../../utils/Data';
import colors from '../../theme/Colors';
import dimensions from '../../theme/Dimensions';
import fonts from '../../theme/Fonts';

const PhoneNumberInput = ({onChangeText}) => {
  const [text, setText] = useState('');

  const handleTextChange = inputText => {
    setText(inputText);
    onChangeText(inputText, countryCode);
  };
  const [countryCode, setCountryCode] = useState('+92');

  return (
    <View style={styles.container}>
      <Dropdown
        height={dimensions.Height / 16}
        width={dimensions.Width / 6}
        placeholder="+92"
        onClick={value => setCountryCode(value)}
        dropdownValues={Data.CountryCode}
        title=""
      />
      <Text style={styles.separator}>|</Text>
      <TextInput
        style={styles.phoneNumberInput}
        placeholder="Phone Number"
        placeholderTextColor={colors.Placeholder}
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
    height: dimensions.Height / 18,
    width: dimensions.Width / 1.1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.White,
  },
  separator: {
    fontSize: fonts.size.font18,
    textAlign: 'center',
    paddingBottom: dimensions.Width / 50,
    color: colors.Gray,
    marginRight: dimensions.Width / 40,
  },
  phoneNumberInput: {
    flex: 1,
    fontSize: fonts.size.font11,
    fontFamily: fonts.family.regular,
    color: colors.Gray,
  },
});

export default PhoneNumberInput;
