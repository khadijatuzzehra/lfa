import React, {useState} from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
import {
  handleTextChange,
  handleChange,
  handleNavigation,
} from '../../../utils/GlobalFunctions';
import Header from '../../../components/Profile/Header';
import CustomButton from '../../../components/Auth/CustomButton';
import Checkbox from '../../../components/Auth/Checkbox';
import CustomTextInput from '../../../components/Auth/CustomTextInput';
import Dropdown from '../../../components/Auth/Dropdown';
import TextCustom from '../../../components/Shared/TextCustom';
import DatePicker from '../../../components/Auth/DatePicker';
import colors from '../../../theme/Colors';
import dimensions from '../../../theme/Dimensions';
import Data from '../../../utils/Data';

const EditEducation = () => {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({});
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView>
        <Header text="Edit Education" />
        <View style={styles.form}>
          <TextCustom
            text="Highest level of education"
            textType="Labels"
            color={colors.Black}
          />
          <Dropdown
            height={dimensions.Height / 18}
            width={dimensions.Width / 1.1}
            placeholder="Enter your Education"
            onClick={value => handleChange('Education', value, setFormData)}
            dropdownValues={Data.Education}
            title="Select your Education"
          />
          <TextCustom text="Institute" textType="Labels" color={colors.Black} />
          <CustomTextInput
            placeholder="Customer Support Manager"
            height={dimensions.Height / 18}
            width={dimensions.Width / 1.1}
            onChangeText={text =>
              handleTextChange(text, 'institute', setFormData)
            }
            fieldType="institute"
          />
          <View style={styles.dropDownHolder}>
            <View>
              <TextCustom
                text="Start Year"
                textType="Labels"
                color={colors.Black}
              />
              <DatePicker
                placeholder="StartYear"
                onSelect={value =>
                  handleChange('StartYear', value, setFormData)
                }
              />
            </View>
            <View>
              <TextCustom
                text="End Year"
                textType="Labels"
                color={colors.Black}
              />
              <DatePicker
                placeholder="EndYear"
                onSelect={value => handleChange('EndYear', value, setFormData)}
              />
            </View>
          </View>
          <View style={styles.checkbox}>
            <Checkbox text="I am currently working at this role" />
          </View>
        </View>
        <View style={styles.button}>
          <CustomButton
            text="Save"
            height={dimensions.Height / 20}
            width={dimensions.Width / 1.1}
            backgroundColor={colors.Primary}
            color={colors.White}
            onClick={() => handleNavigation(navigation, 'Education', formData)}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default EditEducation;
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
  checkbox: {
    marginVertical: dimensions.Width / 100,
  },
  button: {
    marginVertical: dimensions.Height / 3,
  },
});
