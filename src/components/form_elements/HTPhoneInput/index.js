/* eslint-disable react-native/no-inline-styles */
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import CountryPicker from 'react-native-country-picker-modal';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import {Dimensions, GlobalStyles} from '../../../utils/constants';
import {Colors, Fonts} from '../../../theme';
const HTPhoneInput = ({Code, Country, setCountry, setCode}) => {
  const [ShowCountryList, setShowCountryList] = useState(false);
  return (
    <View
      style={[
        GlobalStyles.row,
        GlobalStyles.marginTopMedium,
        GlobalStyles.contentCenter,
      ]}>
      <TouchableOpacity
        onPress={e => setShowCountryList(true)}
        style={[
          {
            borderRadius: Dimensions.Width * 0.02,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            height: Dimensions.Height * 0.06,
            width: Dimensions.Width * 0.3,
            marginRight: 10,
            backgroundColor: Colors.LighterGray,
          },
        ]}>
        <CountryPicker
          withFilter
          withFlag
          withCallingCode
          withAlphaFilter={false}
          withCurrencyButton={false}
          countryCode={Country}
          modalProps={{presentationStyle: 'pageSheet'}}
          onSelect={country => {
            const {callingCode, cca2} = country;
            setCountry(cca2);
            setCode(callingCode);
            setShowCountryList(false);
          }}
          visible={ShowCountryList}
        />
        <Text
          style={{
            fontSize: Fonts.size.font12,
            includeFontPadding: false,
            color: Colors.DarkerGray,
          }}>
          +{Code}
        </Text>
        <FontAwesome5Icons
          name="caret-down"
          size={15}
          color="rgba(0,0,0,0.6)"
        />
      </TouchableOpacity>
      <TextInput
        keyboardType="numeric"
        placeholderTextColor={Colors.DarkerGray}
        style={[GlobalStyles.marginLeftMedium, styles.numberInput]}
        placeholder="123 456 789"
      />
    </View>
  );
};

export default HTPhoneInput;

const styles = StyleSheet.create({
  numberInput: {
    display: 'flex',
    borderRadius: Dimensions.Width * 0.02,
    height: Dimensions.Height * 0.06,
    width: Dimensions.Width * 0.51,
    backgroundColor: Colors.LighterGray,
    fontFamily: Fonts.family.regular,
    fontSize: Fonts.size.font12,
    padding: 5,
    color: Colors.DarkerGray,
  },
});
