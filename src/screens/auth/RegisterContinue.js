import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {LOGIN_SUCCESS} from '../../store/ActionTypes';
//Components Imports
import CustomButton from '../../components/CustomButton';
import Headings from '../../components/Headings';
import Interests from '../../components/Interests';
import InfoText from '../../components/InfoText';
import UploadPicture from '../../components/UploadPicture';
import Labels from '../../components/Labels';
import CustomTextInput from '../../components/CustomTextInput';
import PhoneNumberInput from '../../components/PhoneNumberInput';
import Dropdown from '../../components/Dropdown';
import SelectMultipleDropdown from '../../components/SelectMultipleDropdown';
import Agree from '../../components/Checkbox';
import ActionButton from '../../components/ActionButton';
//Theme
import dimensions from '../../theme/Dimensions';
import colors from '../../theme/Colors';
//Navigation
import {useNavigation} from '@react-navigation/native';
const RegisterContinue = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [profession, setProfession] = useState('');
  const [higherLevelEducation, setHigherLevelEducation] = useState('');
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
    }
  };
  const clickUploadPicture = image => {
    console.log('Uploading picture', image);
    setImage(image);
  };
  const handlePress = text => {
    navigation.navigate('Otp');
  };

  const [selectedInterests, setSelectedInterests] = useState([]);

  const interests = [
    'Tech',
    'Business',
    'Educational',
    'Music',
    'Sports',
    'Art',
    'Travel',
    'Cooking',
    'Reading',
    'Gaming',
    'Data Science',
    'Data Engineering',
  ];
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
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Headings text="Profile Setup" />
        <InfoText text="Let us know about you" />
      </View>
      <InfoText
        text="You can also fill out this section later when setting up 
your profile *"
      />
      <UploadPicture uploadPicture={clickUploadPicture} />
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
        <View style={{flexDirection: 'row'}}>
          <Labels text="Interests" />
          <InfoText text="(Select Your Interests)" />
        </View>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          {interests.map(interest => (
            <Interests
              key={interest}
              interest={interest}
              selectedInterests={selectedInterests}
              setSelectedInterests={setSelectedInterests}
            />
          ))}
        </ScrollView>
      </View>
      <View style={styles.bottom}>
        <CustomButton
          text="Next"
          height={dimensions.Height / 16}
          width={dimensions.Width / 1.1}
          backgroundColor={colors.Secondary}
          color={colors.White}
          onClick={handlePress}
        />
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
    alignItems: 'center',
    paddingBottom: dimensions.Height / 20,
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
  contentContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: dimensions.Width / 30,
  },
});

export default RegisterContinue;
