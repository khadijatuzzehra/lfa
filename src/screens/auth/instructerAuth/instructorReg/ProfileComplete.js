import React, {useState} from 'react';
import {
  HTButton,
  HTInput,
  HTPictureOption,
  HTDatePicker,
  HTText,
  HTWrapper,
  HTDropdown,
  HTBackButton,
  HTPhoneInput,
} from '../../../../components';
import {Image, TouchableOpacity, View, StyleSheet} from 'react-native';
import {Dimensions, GlobalStyles} from '../../../../utils/constants';
import {Images} from '../../../../utils/media';
import {CheckBox} from '@rneui/themed';
import {Fonts, Colors} from '../../../../theme';
import {
  uploadFromCamera,
  selectFromGallery,
} from '../../../../services/media_upload';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const ProfileComplete = ({navigation}) => {
  const [checked, setChecked] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [country, setCountry] = useState('');
  const [code, setCode] = useState('');
  const [selectedOption, setSelectedOption] = useState(false);
  const toggleCheckbox = () => setChecked(!checked);
  const [pictureModal, setPictureModal] = useState(false);
  const handlePictureUpload = async pictureOption => {
    let picture = '';
    setPictureModal(false);
    if (pictureOption === 'Camera') {
      picture = await uploadFromCamera();
    } else {
      picture = await selectFromGallery();
    }
    console.log(picture);
  };

  const handleChange = () => {
    console.log('User is typing something');
  };
  const handleSelect = option => {
    setSelectedOption(option);
  };
  const gender = ['Male', 'Female', 'Prefer not to say'];

  return (
    <HTWrapper>
      <View style={[GlobalStyles.contentCenter, Styles.maincontainer]}>
        <HTBackButton label="Fill your profile" />
        <TouchableOpacity onPress={() => setPictureModal(true)}>
          <Image
            source={Images.appImages.User}
            style={[GlobalStyles.roundMedium, Styles.imageStyle]}
          />
        </TouchableOpacity>
        <View style={Styles.ContentView}>
          <HTText
            bold
            size={Fonts.size.font11}
            text="Email"
            textColor={Colors.Primary}
            styles={[GlobalStyles.marginTopMedium, GlobalStyles.textAlignLeft]}
          />
          <HTInput
            fieldType="email"
            placeholder="Enter email"
            backgroundColor={Colors.LighterGray}
            textColor={Colors.DarkerGray}
            styles={[GlobalStyles.marginBottomMedium, Styles.inputField]}
            onChangeText={() => handleChange()}
          />

          <HTText
            bold
            size={Fonts.size.font11}
            text="Phone number"
            textColor={Colors.Primary}
            styles={[GlobalStyles.textAlignLeft]}
          />
          <HTPhoneInput
            Country={country}
            Code={code}
            setCode={code1 => setCode(code1)}
            setCountry={country1 => setCountry(country1)}
          />

          <View style={GlobalStyles.row}>
            <View>
              <HTText
                bold
                size={Fonts.size.font11}
                text="Gender"
                textColor={Colors.Primary}
                styles={[
                  GlobalStyles.textAlignLeft,
                  GlobalStyles.marginTopMedium,
                ]}
              />
              <TouchableOpacity
                style={Styles.buttonDropdown}
                onPress={() => setDropdownOpen(true)}>
                <HTText
                  text={selectedOption ? selectedOption : 'Select gender'}
                  textColor={Colors.DarkerGray}
                  styles={GlobalStyles.marginLeftMedium}
                />
              </TouchableOpacity>
            </View>
            <View>
              <HTText
                bold
                size={Fonts.size.font11}
                text="Date of birth"
                textColor={Colors.Primary}
                styles={[
                  GlobalStyles.marginTopMedium,
                  GlobalStyles.textAlignLeft,
                ]}
              />
              <HTDatePicker
                fieldType="dob"
                backgroundColor={Colors.LighterGray}
                textColor={Colors.DarkerGray}
                styles={[GlobalStyles.marginVerticalMedium, Styles.inputField2]}
                onChangeText={() => handleChange()}
                width={Dimensions.Width / 2}
                onSelect={date => console.log(date)}
              />
            </View>
            <HTDropdown
              heading={'Please select an option'}
              items={gender}
              selectedValue={selectedOption}
              onSelect={handleSelect}
              open={dropdownOpen}
              onCancel={() => setDropdownOpen(false)}
            />
          </View>
          <View style={GlobalStyles.row}>
            <View>
              <HTText
                bold
                size={Fonts.size.font11}
                text="Teaching experience"
                textColor={Colors.Primary}
                styles={[
                  GlobalStyles.textAlignLeft,
                  GlobalStyles.marginTopMedium,
                ]}
              />
              <TouchableOpacity
                style={Styles.buttonDropdown}
                onPress={() => setDropdownOpen(true)}>
                <HTText
                  text={selectedOption ? selectedOption : 'Select gender'}
                  textColor={Colors.DarkerGray}
                  styles={GlobalStyles.marginLeftMedium}
                />
              </TouchableOpacity>
            </View>
            <View>
              <HTText
                bold
                size={Fonts.size.font11}
                text="Upload CV"
                textColor={Colors.Primary}
                styles={[
                  GlobalStyles.marginTopMedium,
                  GlobalStyles.textAlignLeft,
                ]}
              />
              <HTDatePicker
                fieldType="dob"
                backgroundColor={Colors.LighterGray}
                textColor={Colors.DarkerGray}
                styles={[GlobalStyles.marginVerticalMedium, Styles.inputField2]}
                onChangeText={() => handleChange()}
                width={Dimensions.Width / 2}
                onSelect={date => console.log(date)}
              />
            </View>
            <HTDropdown
              heading={'Please select an option'}
              items={gender}
              selectedValue={selectedOption}
              onSelect={handleSelect}
              open={dropdownOpen}
              onCancel={() => setDropdownOpen(false)}
            />
          </View>

          <View style={Styles.rememberView}>
            <View style={Styles.checkBoxView}>
              <CheckBox
                checked={checked}
                onPress={toggleCheckbox}
                iconType="material-community"
                checkedIcon="checkbox-outline"
                uncheckedIcon={'checkbox-blank-outline'}
                checkedColor="#519041"
                uncheckedColor="#519041"
                title={'I agree to the terms and conditions'}
              />
            </View>
          </View>
        </View>
        <View style={Styles.btnView}>
          <HTButton
            onClick={() => navigation.navigate('StudentSignIn')}
            text={'Sign up'}
            textSize={12}
            textColor={Colors.TextColor}
            style={[GlobalStyles.marginVerticalLarge]}
            height={Dimensions.Height * 0.043}
            width={Dimensions.Width * 0.52}
            backgroundColor={Colors.buttonColor}
          />
        </View>

        <HTPictureOption
          isVisible={pictureModal}
          onCancel={() => setPictureModal(false)}
          onSelect={handlePictureUpload}
        />
      </View>
    </HTWrapper>
  );
};

export default ProfileComplete;

const Styles = StyleSheet.create({
  imageStyle: {
    justifyContent: 'center',
    resizeMode: 'contain',
    borderWidth: 5,
    borderColor: Colors.LightSecondary,
    marginTop: responsiveHeight(10),
  },
  rememberView: {
    width: responsiveWidth(85.04),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputField: {
    height: responsiveHeight(6),
    width: responsiveWidth(85.04),
  },
  inputField2: {
    height: responsiveHeight(6),
    width: responsiveWidth(41.5),
    marginRight: 8,
  },
  buttonDropdown: {
    height: responsiveHeight(6),
    width: responsiveWidth(41.5),
    marginRight: 8,
    backgroundColor: Colors.LighterGray,
    borderRadius: 10,
    justifyContent: 'center',
  },
  btn: {
    marginTop: responsiveHeight(1),
  },
  textStyle: {
    fontSize: responsiveFontSize(3),
  },
  btnView: {
    marginTop: responsiveHeight(0.2),
    alignItems: 'center',
  },
  ContentView: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: responsiveWidth(85.04),
    marginBottom: responsiveHeight(3),
  },
  bottomView: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: responsiveHeight(10),
  },
  checkBoxView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: responsiveWidth(-5.4),
  },
});
