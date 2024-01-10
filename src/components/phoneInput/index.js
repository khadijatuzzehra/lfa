import React from 'react';
import { View, StyleSheet } from 'react-native';
import PhoneInput from 'react-native-phone-input';
import { responsiveHeight } from 'react-native-responsive-dimensions';

const PhonInputComponent = () => {
  return (
    <View style={styles.container}>
      <PhoneInput
        style={styles.phoneInput}
        initialCountry="us"
        flagStyle={styles.flagStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical:responsiveHeight(1.44)
  },
  phoneInput: {
    width: '85%',
    height: responsiveHeight(5.44),
    borderRadius: 14,
    backgroundColor: '#EDF5F3',
    paddingLeft:18
  },
  flagStyle: {
    // Add any additional styling for the flag if needed
  },
});

export default PhonInputComponent;
