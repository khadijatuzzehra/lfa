/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
import {
  handleTextChange,
  handleChange,
  handleNavigation,
} from '../../../utils/GlobalFunctions';
import Header from '../../../components/Profile/Header';
import CustomButton from '../../../components/Auth/CustomButton';
import CustomTextInput from '../../../components/Auth/CustomTextInput';
import TextCustom from '../../../components/Shared/TextCustom';
import PhoneNumberInput from '../../../components/Auth/PhoneNumberInput';
import Dropdown from '../../../components/Auth/Dropdown';
import DatePicker from '../../../components/Auth/DatePicker';
import dimensions from '../../../theme/Dimensions';
import Data from '../../../utils/Data';
import styles from '../SharedStyles';
import colors from '../../../theme/Colors';

const PersonalBio = ({}) => {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({});

  const handlePhoneNumberChange = (inputText, country) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      phoneNumber: inputText,
      countryCode: country,
    }));
  };
  return (
    <KeyboardAwareScrollView style={{flex: 1, backgroundColor: colors.White}}>
      <SafeAreaView style={{flex: 1}}>
        <Header text="Personal Bio" />
        <View style={styles.form}>
          <TextCustom text="Full Name" textType="Labels" color={colors.Black} />
          <CustomTextInput
            placeholder="Write Your Full Name"
            height={dimensions.Height / 18}
            width={dimensions.Width / 1.1}
            onChangeText={text => handleTextChange(text, 'name', setFormData)}
            fieldType="name"
          />
          <TextCustom text="Email" textType="Labels" color={colors.Black} />
          <CustomTextInput
            placeholder="Enter your email"
            height={dimensions.Height / 18}
            width={dimensions.Width / 1.1}
            onChangeText={text => handleTextChange(text, 'email', setFormData)}
            fieldType="email"
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
            onChangeText={text =>
              handleTextChange(text, 'password', setFormData)
            }
            fieldType="password"
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
                onSelect={value => handleChange('dob', value, setFormData)}
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
                onClick={value => handleChange('Country', value, setFormData)}
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
                onClick={value => handleChange('Gender', value, setFormData)}
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
                onClick={value => handleChange('City', value, setFormData)}
                dropdownValues={Data.City}
                title="Select City/State"
              />
            </View>
          </View>
          <TextCustom text="Tagline" textType="Labels" color={colors.Black} />
          <CustomTextInput
            placeholder="Write a Tagline"
            height={dimensions.Height / 9}
            width={dimensions.Width / 1.1}
            onChangeText={text =>
              handleTextChange(text, 'tagline', setFormData)
            }
            fieldType="tagline"
          />
          <View style={styles.button}>
            <CustomButton
              text="Save"
              height={dimensions.Height / 20}
              width={dimensions.Width / 1.1}
              backgroundColor={colors.Primary}
              color={colors.White}
              onClick={() => handleNavigation(navigation, 'Profile', formData)}
            />
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};
export default PersonalBio;
