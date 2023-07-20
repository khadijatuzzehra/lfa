import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {LOGIN_SUCCESS} from '../../store/ActionTypes';
import CustomButton from '../../components/CustomButton';
import Headings from '../../components/Headings';
import InfoText from '../../components/InfoText';
import Labels from '../../components/Labels';
import CustomTextInput from '../../components/CustomTextInput';
import PhoneNumberInput from '../../components/PhoneNumberInput';
import Dropdown from '../../components/Dropdown';
import DatePicker from '../../components/DatePicker';
import Agree from '../../components/Checkbox';
import ActionButton from '../../components/ActionButton';
import dimensions from '../../theme/Dimensions';
import colors from '../../theme/Colors';
import {useNavigation} from '@react-navigation/native';

const Register = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [countryName, setCountryName] = useState('');
  const [cityName, setCityName] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const countryNameRef = useRef('');
  const genderRef = useRef('');
  const dateRef = useRef('');
  const cityNameRef = useRef('');

  const handleTextChange = (inputText, fieldType) => {
    // Your logic here
    if (fieldType == 'email') {
      setEmail(inputText);
    }
    if (fieldType == 'name') {
      setName(inputText);
    } else {
      setPassword(inputText);
    }
  };

  const onLogin = () => {
    navigation.navigate('Login');
  };
  const handleChange = async (ph, value) => {
    if (ph == 'Country') {
      countryNameRef.current = value;
      setCountryName(countryNameRef.current);
    }
    if (ph == 'Gender') {
      genderRef.current = value;
      setGender(genderRef.current);
    } else {
      cityNameRef.current = value;
      setCityName(cityNameRef.current);
    }
  };
  const handleDateSelect = async value => {
    dateRef.current = value;
    setDob(dateRef.current);
  };

  const onChangeText = (inputText, country) => {
    // Your logic here
    setPhoneNumber(inputText);
    setCountryCode(country);
  };
  const handlePress = text => {
    // let info = {name: 'John', email: 'john@example.com'};
    // AsyncStorage.setItem('userInfo', JSON.stringify(info)).then(() => {
    //   dispatch({type: LOGIN_SUCCESS, payload: info});
    // });
    navigation.navigate('RegisterContinue');
  };

  const dropdownValues1 = ['Pakistan', 'South Africa', 'Bangladesh'];
  const dropdownValues2 = [
    'Islamabad',
    'Lahore',
    'Karachi',
    'Cape Town',
    'Pretoria',
    'Dhaka',
  ];
  const dropdownValues3 = ['Male', 'Female', 'Prefer not to say'];
  return (
    <SafeAreaView style={styles.container}>
      <Headings text="Create Account" />
      <InfoText text="Connect through look for Africa today" />
      <Labels text="Full Name" />
      <CustomTextInput
        placeholder="Write Your Full Name"
        height={dimensions.Height / 16}
        width={dimensions.Width / 1.1}
        onChangeText={handleTextChange}
        fieldType="name"
      />
      <Labels text="Email" />
      <CustomTextInput
        placeholder="Enter your email"
        height={dimensions.Height / 16}
        width={dimensions.Width / 1.1}
        onChangeText={handleTextChange}
        fieldType="email"
      />
      <Labels text="Mobile Number" />
      <PhoneNumberInput onChangeText={onChangeText} />
      <Labels text="Password" />
      <CustomTextInput
        placeholder="Enter your password"
        height={dimensions.Height / 16}
        width={dimensions.Width / 1.1}
        onChangeText={handleTextChange}
        fieldType="password"
      />
      <View style={styles.labelHolder}>
        <Labels text="Date of Birth" />
        <Labels text="Gender" />
      </View>
      <View style={styles.dropDownHolder}>
        <DatePicker placeholder="DD/MM/YYYY" onSelect={handleDateSelect} />
        <Dropdown
          height={dimensions.Height / 16}
          width={dimensions.Width / 2.5}
          placeholder="Gender"
          onClick={handleChange}
          dropdownValues={dropdownValues3}
        />
      </View>
      <View style={styles.labelHolder}>
        <Labels text="Country" />
        <Labels text="City/State" />
      </View>
      <View style={styles.dropDownHolder}>
        <Dropdown
          height={dimensions.Height / 16}
          width={dimensions.Width / 2.5}
          placeholder="Country"
          onClick={handleChange}
          dropdownValues={dropdownValues1}
        />
        <Dropdown
          height={dimensions.Height / 16}
          width={dimensions.Width / 2.5}
          placeholder="City"
          onClick={handleChange}
          dropdownValues={dropdownValues2}
        />
      </View>
      <View style={{marginVertical: dimensions.Width / 100}}>
        <Agree text="I agree to the terms and conditions" />
      </View>
      <CustomButton
        text="Sign Up"
        height={dimensions.Height / 16}
        width={dimensions.Width / 1.1}
        backgroundColor={colors.Secondary}
        color={colors.White}
        onClick={handlePress}
      />
      <ActionButton
        text="Already have an Account? "
        buttonText="Log IN"
        handlePress={onLogin}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: dimensions.Height / 15,
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
  },
});

export default Register;
