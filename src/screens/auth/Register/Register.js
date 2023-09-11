/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Keyboard} from 'react-native';
import styles from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CustomButton from '../../../components/Auth/CustomButton';
import TextCustom from '../../../components/Shared/TextCustom';
import CustomTextInput from '../../../components/Auth/CustomTextInput';
import PhoneNumberInput from '../../../components/Auth/PhoneNumberInput';
import Dropdown from '../../../components/Auth/Dropdown';
import DatePicker from '../../../components/Auth/DatePicker';
import Agree from '../../../components/Auth/Checkbox';
import ActionButton from '../../../components/Auth/ActionButton';
import dimensions from '../../../theme/Dimensions';
import colors from '../../../theme/Colors';
import {useNavigation} from '@react-navigation/native';
import Data from '../../../utils/Data';

const Register = () => {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({});
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      },
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleTextChange = (inputText, fieldType) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [fieldType]: inputText,
    }));
  };

  const handleChange = (value, placeholder) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [placeholder.toLowerCase()]: value,
    }));
  };

  const handleDateSelect = (placeholder, value) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      dob: value,
    }));
  };

  const handlePhoneNumberChange = (inputText, country) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      phoneNumber: inputText,
      countryCode: country,
    }));
  };

  const onLogin = () => {
    navigation.navigate('Login');
  };

  const handlePress = () => {
    navigation.navigate('ProfileSetup');
  };

  return (
    <>
      <KeyboardAwareScrollView style={styles.mainContainer}>
        <SafeAreaView style={styles.container}>
          <View style={styles.header}>
            <TextCustom
              text="Create Account"
              textType="Headings"
              color={colors.Headings}
            />
            <TextCustom
              text="Connect through Look for Africa Today!"
              textType="InfoText"
              color={colors.InfoText}
            />
          </View>

          <TextCustom text="Full Name" textType="Labels" color={colors.Black} />
          <CustomTextInput
            placeholder="Write Your Full Name"
            height={dimensions.Height / 18}
            width={dimensions.Width / 1.1}
            fieldType="name"
            onChangeText={text => handleTextChange(text, 'name')}
          />
          <TextCustom text="Email" textType="Labels" color={colors.Black} />
          <CustomTextInput
            placeholder="Enter your email"
            height={dimensions.Height / 18}
            width={dimensions.Width / 1.1}
            fieldType="email"
            onChangeText={text => handleTextChange(text, 'email')}
          />
          <TextCustom
            text="Mobile Number"
            textType="Labels"
            color={colors.Black}
          />
          <PhoneNumberInput onChangeText={handlePhoneNumberChange} />
          <TextCustom text="Password" textType="Labels" color={colors.Black} />
          <CustomTextInput
            placeholder="Enter your password"
            height={dimensions.Height / 18}
            width={dimensions.Width / 1.1}
            fieldType="password"
            onChangeText={text => handleTextChange(text, 'password')}
          />
          <View style={styles.dropDownHolder}>
            <View style={styles.holder}>
              <TextCustom
                text="Date of Birth"
                textType="Labels"
                color={colors.Black}
              />
              <DatePicker
                placeholder="DD/MM/YYYY"
                onSelect={handleDateSelect}
              />
              <TextCustom
                text="Country"
                textType="Labels"
                color={colors.Black}
              />
              <Dropdown
                height={dimensions.Height / 18}
                width={dimensions.Width / 2.5}
                placeholder="Country"
                onClick={handleChange}
                dropdownValues={Data.Country}
                title="Select Country"
              />
            </View>
            <View style={styles.holder}>
              <TextCustom
                text="Gender"
                textType="Labels"
                color={colors.Black}
              />
              <Dropdown
                height={dimensions.Height / 18}
                width={dimensions.Width / 2.5}
                placeholder="Select"
                onClick={handleChange}
                dropdownValues={Data.Gender}
                title="Select Gender"
              />
              <TextCustom
                text="City/State"
                textType="Labels"
                color={colors.Black}
              />
              <Dropdown
                height={dimensions.Height / 18}
                width={dimensions.Width / 2.5}
                placeholder="City"
                onClick={handleChange}
                dropdownValues={Data.City}
                title="Select City/State"
              />
            </View>
          </View>
          <View style={styles.button}>
            <Agree text="I agree to the terms and conditions" />
            <CustomButton
              text="Sign Up"
              height={dimensions.Height / 20}
              width={dimensions.Width / 1.1}
              backgroundColor={colors.Primary}
              color={colors.White}
              onClick={handlePress}
            />
          </View>
        </SafeAreaView>
      </KeyboardAwareScrollView>
      {!isKeyboardVisible ? (
        <View style={styles.ActionButtonContainer}>
          <ActionButton
            text="Already have an Account? "
            buttonText="Log In"
            handlePress={onLogin}
          />
        </View>
      ) : null}
    </>
  );
};

export default Register;
