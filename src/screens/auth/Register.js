import React, {useState} from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CustomButton from '../../components/Auth/CustomButton';
import TextCustom from '../../components/Auth/TextCustom';
import CustomTextInput from '../../components/Auth/CustomTextInput';
import PhoneNumberInput from '../../components/Auth/PhoneNumberInput';
import Dropdown from '../../components/Auth/Dropdown';
import DatePicker from '../../components/Auth/DatePicker';
import Agree from '../../components/Auth/Checkbox';
import ActionButton from '../../components/Auth/ActionButton';
import dimensions from '../../theme/Dimensions';
import colors from '../../theme/Colors';
import {useNavigation} from '@react-navigation/native';
import Data from '../../utils/Data';

const Register = () => {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    countryCode: '',
    password: '',
    dob: '',
    gender: '',
    countryName: '',
    cityName: '',
  });

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
    navigation.navigate('RegisterContinue');
  };

  return (
    <KeyboardAwareScrollView style={styles.mainContainer}>
      <SafeAreaView style={styles.container}>
        <TextCustom
          text="Create Account"
          textType="Headings"
          color={colors.Headings}
        />
        <TextCustom
          text="Connect through look for Africa Today!"
          textType="InfoText"
          color={colors.InfoText}
        />
        <TextCustom text="Full Name" textType="Labels" color={colors.Black} />
        <CustomTextInput
          placeholder="Write Your Full Name"
          height={dimensions.Height / 16}
          width={dimensions.Width / 1.1}
          onChangeText={text => handleTextChange(text, 'name')}
        />
        <TextCustom text="Email" textType="Labels" color={colors.Black} />
        <CustomTextInput
          placeholder="Enter your email"
          height={dimensions.Height / 16}
          width={dimensions.Width / 1.1}
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
          height={dimensions.Height / 16}
          width={dimensions.Width / 1.1}
          fieldType="password"
          onChangeText={text => handleTextChange(text, 'password')}
        />
        <View style={styles.labelHolder}>
          <TextCustom
            text="Date of Birth"
            textType="Labels"
            color={colors.Black}
          />
          <TextCustom text="Gender" textType="Labels" color={colors.Black} />
        </View>
        <View style={styles.dropDownHolder}>
          <DatePicker placeholder="DD/MM/YYYY" onSelect={handleDateSelect} />
          <Dropdown
            height={dimensions.Height / 16}
            width={dimensions.Width / 2.5}
            placeholder="Select"
            onClick={handleChange}
            dropdownValues={Data.Gender}
          />
        </View>
        <View style={styles.labelHolder}>
          <TextCustom text="Country" textType="Labels" color={colors.Black} />
          <TextCustom
            text="City/State"
            textType="Labels"
            color={colors.Black}
          />
        </View>
        <View style={styles.dropDownHolder}>
          <Dropdown
            height={dimensions.Height / 16}
            width={dimensions.Width / 2.5}
            placeholder="Country"
            onClick={handleChange}
            dropdownValues={Data.Country}
          />
          <Dropdown
            height={dimensions.Height / 16}
            width={dimensions.Width / 2.5}
            placeholder="City"
            onClick={handleChange}
            dropdownValues={Data.City}
          />
        </View>
        <View style={{marginVertical: dimensions.Width / 100}}>
          <Agree text="I agree to the terms and conditions" />
        </View>
        <CustomButton
          text="Sign Up"
          height={dimensions.Height / 18}
          width={dimensions.Width / 1.1}
          backgroundColor={colors.Primary}
          color={colors.White}
          onClick={handlePress}
        />
        <ActionButton
          text="Already have an Account? "
          buttonText="Log IN"
          handlePress={onLogin}
        />
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    paddingTop: dimensions.Height / 20,
    backgroundColor: colors.White,
    paddingHorizontal: dimensions.Width / 100,
  },
  dropDownHolder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  labelHolder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: dimensions.Width / 20,
  },
});
export default Register;
