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
import SelectMultipleDropdown from '../../components/SelectMultipleDropdown';
import Agree from '../../components/Checkbox';
import ActionButton from '../../components/ActionButton';
import dimensions from '../../theme/Dimensions';
import colors from '../../theme/Colors';
import {useNavigation} from '@react-navigation/native';

const RegisterContinue = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [profession, setProfession] = useState('');
  const [higherLevelEducation, setHigherLevelEducation] = useState('');
  const [interests, setInterests] = useState('');
  const professionRef = useRef('');
  const higherLevelEducationRef = useRef('');
  const interestRef = useRef('');

  const handleChange = async (ph, value) => {
    if (ph == 'Profession') {
      professionRef.current = value;
      setProfession(professionRef.current);
    }
    if (ph == 'Higher Level Education') {
      higherLevelEducationRef.current = value;
      setHigherLevelEducation(higherLevelEducationRef.current);
    } else {
      interestRef.current = value;
      setInterests(interestRef.current);
    }
  };
  const handlePress = text => {
    navigation.navigate('Otp');
  };

  const dropdownValues1 = [
    'Actor',
    'Accountant',
    'Air traffic controller',
    'Archiect',
    'Artist',
    'Attorney',
    'Barber',
    'Book keeper',
    'Builder',
  ];
  const dropdownValues2 = [
    'Undergraduate',
    'Graduate',
    'Postgraduate',
    'none of the above',
  ];
  const dropdownValues3 = [
    'Marketing',
    'Developer',
    'Engineering',
    'None of the above',
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Headings text="Profile Setup" />
        <InfoText text="Let us know about you" />
      </View>
      <View style={styles.holder}>
        <Labels text="Profession" />
        <Dropdown
          height={dimensions.Height / 16}
          width={dimensions.Width / 1.1}
          placeholder="Write your Profession"
          onClick={handleChange}
          dropdownValues={dropdownValues1}
        />
      </View>
      <View style={styles.holder}>
        <Labels text="Highest Level Education" />
        <Dropdown
          height={dimensions.Height / 16}
          width={dimensions.Width / 1.1}
          placeholder="Enter your Education"
          onClick={handleChange}
          dropdownValues={dropdownValues2}
        />
      </View>
      <View style={styles.holder}>
        <Labels text="Interests" />
        <SelectMultipleDropdown
          height={dimensions.Height / 10}
          width={dimensions.Width / 1.1}
          placeholder="Select your Interests"
          onClick={handleChange}
          dropdownValues={dropdownValues3}
        />
      </View>
      <View style={styles.bottom}>
        <View style={styles.button}>
          <CustomButton
            text="Later"
            height={dimensions.Height / 16}
            width={dimensions.Width / 4}
            backgroundColor="#C8C8C8"
            color={colors.White}
            onClick={handlePress}
          />
          <CustomButton
            text="Next"
            height={dimensions.Height / 16}
            width={dimensions.Width / 4}
            backgroundColor={colors.Secondary}
            color={colors.White}
            onClick={handlePress}
          />
        </View>
      </View>
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
  header: {
    paddingBottom: dimensions.Height / 15,
  },
  holder: {
    marginBottom: dimensions.Height / 100,
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    position: 'relative',
    paddingBottom: dimensions.Height / 20,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default RegisterContinue;
