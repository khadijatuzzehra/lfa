import React from 'react';
import {View, StyleSheet} from 'react-native';
import Headings from '../../components/Headings';
import InfoText from '../../components/InfoText';
import Labels from '../../components/Labels';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';

import ActionButton from '../../components/ActionButton';
import {useNavigation} from '@react-navigation/native';

import dimensions from '../../theme/Dimensions';
import colors from '../../theme/Colors';

const Otp = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('ProfileUpdate');
  };
  return (
    <View style={styles.container}>
      <Headings text="OTP Verification" />
      <InfoText text="5 digit verification code has been sent to your mobile number " />
      <View style={styles.row}>
        <CustomTextInput
          placeholder=""
          height={dimensions.Height / 14}
          width={dimensions.Width / 8}
          fieldType="name"
        />
        <CustomTextInput
          placeholder=""
          height={dimensions.Height / 14}
          width={dimensions.Width / 8}
          fieldType="name"
        />
        <CustomTextInput
          placeholder=""
          height={dimensions.Height / 14}
          width={dimensions.Width / 8}
          fieldType="name"
        />
        <CustomTextInput
          placeholder=""
          height={dimensions.Height / 14}
          width={dimensions.Width / 8}
          fieldType="name"
        />
        <CustomTextInput
          placeholder=""
          height={dimensions.Height / 14}
          width={dimensions.Width / 8}
          fieldType="name"
        />
      </View>
      <CustomButton
        text="Sign Up"
        height={dimensions.Height / 14}
        width={dimensions.Width / 1.1}
        backgroundColor={colors.Secondary}
        color={colors.White}
        onClick={handlePress}
      />
      <ActionButton
        text="Didn't received the code? "
        buttonText="Resend (30 sec)"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: dimensions.Height / 5,
    backgroundColor: colors.White,
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Otp;
