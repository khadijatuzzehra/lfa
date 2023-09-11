/* eslint-disable no-unused-vars */
import React, {useState, useRef} from 'react';
import {SafeAreaView, View, ScrollView, StyleSheet} from 'react-native';
import CustomButton from '../../../components/Auth/CustomButton';
import TextCustom from '../../../components/Shared/TextCustom';
import Interests from '../../../components/Auth/Interests';
import UploadPicture from '../../../components/Auth/UploadPicture';
import Dropdown from '../../../components/Auth/Dropdown';
import dimensions from '../../../theme/Dimensions';
import colors from '../../../theme/Colors';
import Data from '../../../utils/Data';
import {useNavigation} from '@react-navigation/native';

const ProfileSetup = () => {
  const navigation = useNavigation();
  const [image, setImage] = useState(null);
  const [profession, setProfession] = useState('');
  const [higherLevelEducation, setHigherLevelEducation] = useState('');
  const professionRef = useRef('');
  const higherLevelEducationRef = useRef('');

  const handleChange = async (value, placeholder) => {
    if (placeholder === 'Select your Profession') {
      professionRef.current = value;
      setProfession(professionRef.current);
    }
    if (placeholder === 'Select your Education') {
      higherLevelEducationRef.current = value;
      setHigherLevelEducation(higherLevelEducationRef.current);
    }
  };
  const clickUploadPicture = imageInput => {
    console.log('Uploading picture', imageInput);
    setImage(imageInput);
  };
  const handlePress = text => {
    navigation.navigate('DiscoverPeople');
  };
  const [selectedInterests, setSelectedInterests] = useState([]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <TextCustom
            text="Profile Setup"
            textType="Headings"
            color={colors.Headings}
          />
          <TextCustom
            text="Let us know about you!"
            textType="InfoText"
            color={colors.InfoText}
          />
        </View>
        <TextCustom
          text={
            'You can also fill out this section later when setting up your profile *'
          }
          textType="InfoText"
          color={colors.InfoText}
        />
        <UploadPicture uploadPicture={clickUploadPicture} />
        <View style={styles.holder}>
          <TextCustom
            text="Profession"
            textType="Labels"
            color={colors.Black}
          />
          <Dropdown
            height={dimensions.Height / 18}
            width={dimensions.Width / 1.1}
            placeholder="Select your Profession"
            onClick={handleChange}
            dropdownValues={Data.Profession}
            title="Select your Profession"
          />
        </View>
        <View style={styles.holder}>
          <TextCustom
            text="Highest Level Education"
            textType="Labels"
            color={colors.Black}
          />
          <Dropdown
            height={dimensions.Height / 18}
            width={dimensions.Width / 1.1}
            placeholder="Select your Education"
            onClick={handleChange}
            dropdownValues={Data.Education}
            title="Select your Education"
          />
        </View>
        <View style={styles.holder}>
          <View style={styles.row}>
            <TextCustom
              text="Interests"
              textType="Labels"
              color={colors.Black}
            />
            <TextCustom
              text="(Select Your Interests)"
              textType="InfoText"
              color={colors.InfoText}
            />
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
            height={dimensions.Height / 20}
            width={dimensions.Width / 1.1}
            backgroundColor={colors.Primary}
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
    paddingTop: dimensions.Height / 20,
    backgroundColor: colors.White,
    paddingHorizontal: dimensions.Width / 100,
  },
  content: {
    marginHorizontal: dimensions.Width / 100,
  },
  header: {
    paddingBottom: dimensions.Height / 100,
  },
  holder: {
    marginBottom: dimensions.Height / 100,
  },
  bottom: {
    flex: 1,
    position: 'relative',
    paddingBottom: dimensions.Width / 4,
    paddingTop: dimensions.Width / 10,
  },
  contentContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: dimensions.Width / 100,
  },
  row: {
    flexDirection: 'row',
  },
});

export default ProfileSetup;
