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
  const [countryName, setCountryName] = useState('');
  const [cityName, setCityName] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const countryNameRef = useRef('');
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

  const handleChange = async (ph, value) => {
    if (ph == 'Country') {
      countryNameRef.current = value;
      setCountryName(countryNameRef.current);
    } else {
      cityNameRef.current = value;
      setCityName(cityNameRef.current);
    }
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
    navigation.navigate('Otp');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Headings text="Create Account" />
      <InfoText text="Connect through look for Africa today" />
      <Labels text="Full Name" />
      <CustomTextInput
        placeholder="Write Your Full Name"
        height={dimensions.Height / 18}
        width={dimensions.Width / 1.1}
        onChangeText={handleTextChange}
        fieldType="name"
      />
      <CustomTextInput
        placeholder="Enter your email"
        height={dimensions.Height / 18}
        width={dimensions.Width / 1.1}
        onChangeText={handleTextChange}
        fieldType="email"
      />
      <Labels text="Mobile Number" />
      <PhoneNumberInput onChangeText={onChangeText} />
      <Labels text="Password" />
      <CustomTextInput
        placeholder="Enter your password"
        height={dimensions.Height / 18}
        width={dimensions.Width / 1.1}
        onChangeText={handleTextChange}
        fieldType="password"
      />
      <View style={styles.dropDownHolder}>
        <Labels text="Country" />
        <Labels text="City/State" />
      </View>
      <View style={styles.dropDownHolder}>
        <Dropdown
          dropdownValue1="Pakistan"
          dropdownValue2="America"
          dropdownValue3="India"
          placeholder="Country"
          onClick={handleChange}
        />
        <Dropdown
          dropdownValue1="Islamabad"
          dropdownValue2="Lahore"
          dropdownValue3="Karachi"
          placeholder="City"
          onClick={handleChange}
        />
      </View>
      <View style={{marginLeft: 20, marginVertical: 10}}>
        <Agree text="I agree to the terms and conditions" />
      </View>
      <CustomButton
        text="Sign Up"
        height={dimensions.Height / 18}
        width={dimensions.Width / 1.1}
        backgroundColor={colors.Secondary}
        color={colors.White}
        onClick={handlePress}
      />
      <ActionButton
        text="Already have an Account? "
        buttonText="Log IN"
        handlePress={handlePress}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: dimensions.Height / 7,
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  dropDownHolder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Register;
