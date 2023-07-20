import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
// import theme
import colors from '../theme/Colors';
import dimensions from '../theme/Dimensions';
import fonts from '../theme/Fonts';

const PhoneNumberInput = ({onChangeText}) => {
  const [text, setText] = useState('');

  const handleTextChange = inputText => {
    setText(inputText);
    onChangeText(inputText, countryCode);
  };
  const [open, setOpen] = useState(false);
  const [countryCode, setCountryCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const countryCodes = [
    {label: '+1', value: '+1'},
    {label: '+91', value: '+91'},
    {label: '+44', value: '+44'},
    // Add more country codes as needed
  ];

  return (
    <View style={styles.container}>
      <View style={styles.dropdownContainer}>
        <DropDownPicker
          containerStyle={{
            height: 2,
            width: 80,
            paddingBottom: '50%',
          }}
          style={styles.dropdown}
          textStyle={styles.dropdownText}
          open={open}
          setOpen={setOpen}
          value={countryCode}
          items={countryCodes}
          setValue={value => setCountryCode(value)}
          placeholder="+1"
          listMode="MODAL"
          itemStyle={styles.dropdownItem}
          dropDownStyle={styles.dropdownMenu}
        />
        <Text style={styles.separator}>|</Text>
      </View>
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
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.LightestGray,
    borderRadius: 4,
    marginHorizontal: dimensions.Width / 30,
    height: dimensions.Height / 16,
    width: dimensions.Width / 1.1,
    marginBottom: dimensions.Width / 30,
  },
  dropdownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '200%',
    width: 100,
  },
  dropdown: {
    height: dimensions.Height / 20,
    borderWidth: 0,
  },
  dropdownText: {
    fontSize: fonts.size.font12,
    fontFamily: fonts.family.regular,
    textAlign: 'center',
    color: colors.Gray,
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
    height: '200%',
    fontSize: fonts.size.font12,
    fontFamily: fonts.family.regular,
    color: colors.Gray,
  },
  dropdownItem: {
    justifyContent: 'flex-start',
    backgroundColor: '#ECECEC', // Set your desired background color here
    padding: dimensions.Width / 30,
  },
  dropdownMenu: {
    backgroundColor: '#ECECEC', // Set your desired background color here
  },
});

export default PhoneNumberInput;
