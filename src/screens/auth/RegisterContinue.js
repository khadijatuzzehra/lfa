import React, {useState, useRef} from 'react';
import {SafeAreaView, View, ScrollView, StyleSheet} from 'react-native';
import CustomButton from '../../components/Auth/CustomButton';
import TextCustom from '../../components/Auth/TextCustom';
import Interests from '../../components/Auth/Interests';
import UploadPicture from '../../components/Auth/UploadPicture';
import Dropdown from '../../components/Auth/Dropdown';
import dimensions from '../../theme/Dimensions';
import colors from '../../theme/Colors';
import Data from '../../utils/Data';
import {useNavigation} from '@react-navigation/native';

const RegisterContinue = () => {
  const navigation = useNavigation();
  const [image, setImage] = useState(null);
  const [profession, setProfession] = useState('');
  const [higherLevelEducation, setHigherLevelEducation] = useState('');
  const professionRef = useRef('');
  const higherLevelEducationRef = useRef('');

  const handleChange = async (placeholder, value) => {
    if (placeholder === 'Write your Profession') {
      professionRef.current = value;
      setProfession(professionRef.current);
    }
    if (placeholder === 'Higher Level Education') {
      higherLevelEducationRef.current = value;
      setHigherLevelEducation(higherLevelEducationRef.current);
    }
  };
  const clickUploadPicture = imageInput => {
    console.log('Uploading picture', imageInput);
    setImage(imageInput);
  };
  const handlePress = text => {
    navigation.navigate('Login');
  };
  const [selectedInterests, setSelectedInterests] = useState([]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TextCustom text="Profile Setup" textType="Headings" />
        <TextCustom text="Let us know about you" textType="InfoText" />
      </View>
      <TextCustom
        text="You can also fill out this section later when setting up 
your profile *"
        textType="InfoText"
      />
      <UploadPicture uploadPicture={clickUploadPicture} />
      <View style={styles.holder}>
        <TextCustom text="Profession" textType="Labels" />
        <Dropdown
          height={dimensions.Height / 16}
          width={dimensions.Width / 1.1}
          placeholder="Write your Profession"
          onClick={handleChange}
          dropdownValues={Data.Profession}
        />
      </View>
      <View style={styles.holder}>
        <TextCustom text="Highest Level Education" textType="Labels" />
        <Dropdown
          height={dimensions.Height / 16}
          width={dimensions.Width / 1.1}
          placeholder="Enter your Education"
          onClick={handleChange}
          dropdownValues={Data.Education}
        />
      </View>
      <View style={styles.holder}>
        <View style={styles.row}>
          <TextCustom text="Interests" textType="Labels" />
          <TextCustom text="(Select Your Interests)" textType="InfoText" />
        </View>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          {Data.Interests.map(interest => (
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
          backgroundColor={colors.Primary}
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
    paddingTop: dimensions.Height / 20,
    backgroundColor: colors.White,
    paddingHorizontal: dimensions.Width / 100,
  },
  header: {
    alignItems: 'center',
    paddingBottom: dimensions.Height / 100,
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
    marginBottom: dimensions.Width / 100,
  },
  row: {
    flexDirection: 'row',
  },
});

export default RegisterContinue;
