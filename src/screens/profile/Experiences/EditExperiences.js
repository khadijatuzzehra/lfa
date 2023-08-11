/* eslint-disable react/jsx-no-duplicate-props */
import React, {useState} from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  handleTextChange,
  handleChange,
  handleNavigation,
} from '../../../utils/GlobalFunctions';
import {useNavigation} from '@react-navigation/native';
import Header from '../../../components/Profile/Header';
import CustomButton from '../../../components/Auth/CustomButton';
import CustomTextInput from '../../../components/Auth/CustomTextInput';
import Checkbox from '../../../components/Auth/Checkbox';
import TextCustom from '../../../components/Auth/TextCustom';
import DatePicker from '../../../components/Auth/DatePicker';
import colors from '../../../theme/Colors';
import dimensions from '../../../theme/Dimensions';

const EditExperiences = () => {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({});
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView>
        <Header text="Edit Experience" />
        <View style={styles.form}>
          <TextCustom
            text="Company Name"
            textType="Labels"
            color={colors.Black}
          />
          <CustomTextInput
            placeholder="WestWick IC"
            height={dimensions.Height / 18}
            width={dimensions.Width / 1.1}
            onChangeText={handleTextChange}
            fieldType="company"
            onChangeText={text =>
              handleTextChange(text, 'companyname', setFormData)
            }
          />
          <TextCustom
            text="Designation"
            textType="Labels"
            color={colors.Black}
          />
          <CustomTextInput
            placeholder="Customer Support Manager"
            height={dimensions.Height / 18}
            width={dimensions.Width / 1.1}
            onChangeText={handleTextChange}
            fieldType="designation"
            onChangeText={text =>
              handleTextChange(text, 'designation', setFormData)
            }
          />
          <View style={styles.labelHolder}>
            <TextCustom
              text="Start Year"
              textType="Labels"
              color={colors.Black}
            />
            <TextCustom
              text="End Year"
              textType="Labels"
              color={colors.Black}
            />
          </View>
          <View style={styles.dropDownHolder}>
            <DatePicker
              placeholder="StartYear"
              onSelect={value => handleChange('StartYear', value, setFormData)}
            />
            <DatePicker
              placeholder="EndYear"
              onSelect={value => handleChange('EndYear', value, setFormData)}
            />
          </View>
          <View style={styles.checkbox}>
            <Checkbox text="I currently work at this role" />
          </View>
          <TextCustom
            text="Description"
            textType="Labels"
            color={colors.Black}
          />
          <CustomTextInput
            placeholder="Describe your role..."
            height={dimensions.Height / 7}
            width={dimensions.Width / 1.1}
            onChangeText={text =>
              handleTextChange(text, 'description', setFormData)
            }
            fieldType="description"
          />
        </View>
        <View style={styles.button}>
          <CustomButton
            text="Save"
            height={dimensions.Height / 20}
            width={dimensions.Width / 1.1}
            backgroundColor={colors.Primary}
            color={colors.White}
            onClick={() =>
              handleNavigation(navigation, 'Experiences', formData)
            }
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default EditExperiences;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.White,
    paddingHorizontal: dimensions.Width / 80,
  },
  form: {
    marginVertical: dimensions.Width / 10,
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
  checkbox: {
    marginVertical: dimensions.Width / 100,
  },
  button: {
    marginVertical: dimensions.Width / 4,
  },
});
