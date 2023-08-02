import React, {useState} from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Header from '../../../components/Profile/Header';
import CustomTextInput from '../../../components/Auth/CustomTextInput';
import TextCustom from '../../../components/Auth/TextCustom';
import PhoneNumberInput from '../../../components/Auth/PhoneNumberInput';
import Dropdown from '../../../components/Auth/Dropdown';
import DatePicker from '../../../components/Auth/DatePicker';
import dimensions from '../../../theme/Dimensions';
import Data from '../../../utils/Data';
import styles from '../SharedStyles';

const PersonalBio = ({navigation}) => {
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
    tagline: '',
  });

  const handleTextChange = (inputText, fieldType) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [fieldType]: inputText,
    }));
  };

  const handleChange = (placeholder, value) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [placeholder.toLowerCase()]: value,
    }));
  };

  const handleDateSelect = value => {
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
  return (
    <KeyboardAwareScrollView style={{flex: 1}}>
      <SafeAreaView style={{flex: 1}}>
        <Header text="Personal Bio" />
        <View style={styles.form}>
          <TextCustom text="Full Name" textType="Labels" />
          <CustomTextInput
            placeholder="Write Your Full Name"
            height={dimensions.Height / 16}
            width={dimensions.Width / 1.1}
            onChangeText={text => handleTextChange(text, 'name')}
          />
          <TextCustom text="Email" textType="Labels" />
          <CustomTextInput
            placeholder="Enter your email"
            height={dimensions.Height / 16}
            width={dimensions.Width / 1.1}
            onChangeText={text => handleTextChange(text, 'email')}
          />
          <TextCustom text="Mobile Number" textType="Labels" />
          <PhoneNumberInput onChangeText={handlePhoneNumberChange} />
          <TextCustom text="Password" textType="Labels" />
          <CustomTextInput
            placeholder="Enter your password"
            height={dimensions.Height / 16}
            width={dimensions.Width / 1.1}
            fieldType="password"
            onChangeText={text => handleTextChange(text, 'password')}
          />
          <View style={styles.labelHolder}>
            <TextCustom text="Date of Birth" textType="Labels" />
            <TextCustom text="Gender" textType="Labels" />
          </View>
          <View style={styles.dropDownHolder}>
            <DatePicker placeholder="DD/MM/YYYY" onSelect={handleDateSelect} />
            <Dropdown
              height={dimensions.Height / 16}
              width={dimensions.Width / 2.5}
              placeholder="Gender"
              onClick={handleChange}
              dropdownValues={Data.Gender}
            />
          </View>
          <View style={styles.labelHolder}>
            <TextCustom text="Country" textType="Labels" />
            <TextCustom text="City/State" textType="Labels" />
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
          <TextCustom text="Tagline" textType="Labels" />
          <CustomTextInput
            placeholder="Enter your bio"
            height={dimensions.Height / 16}
            width={dimensions.Width / 1.1}
            onChangeText={text => handleTextChange(text, 'tagline ')}
          />
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};
export default PersonalBio;
