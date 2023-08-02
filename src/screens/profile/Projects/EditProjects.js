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
import CustomTextInput from '../../../components/Auth/CustomTextInput';
import TextCustom from '../../../components/Auth/TextCustom';
import DatePicker from '../../../components/Auth/DatePicker';
import colors from '../../../theme/Colors';
import dimensions from '../../../theme/Dimensions';

const EditProjects = () => {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({});
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView>
        <Header text="Edit Project" />
        <View style={styles.form}>
          <TextCustom text="Project Name" textType="Labels" />
          <CustomTextInput
            placeholder="WestWick IC"
            height={dimensions.Height / 16}
            width={dimensions.Width / 1.1}
            onChangeText={text =>
              handleTextChange(text, 'projectName', setFormData)
            }
            fieldType="projectName"
          />
          <TextCustom text="Project Description" textType="Labels" />
          <CustomTextInput
            placeholder="Tell us more..."
            height={dimensions.Height / 7}
            width={dimensions.Width / 1.1}
            onChangeText={text =>
              handleTextChange(text, 'description', setFormData)
            }
            fieldType="description"
          />
          <TextCustom text="Web Link" textType="Labels" />
          <CustomTextInput
            placeholder="www.seccuracy.com"
            height={dimensions.Height / 16}
            width={dimensions.Width / 1.1}
            onChangeText={text =>
              handleTextChange(text, 'webLink', setFormData)
            }
            fieldType="webLink"
          />
          <TextCustom text="Your Role" textType="Labels" />
          <CustomTextInput
            placeholder="Describe your role..."
            height={dimensions.Height / 16}
            width={dimensions.Width / 1.1}
            onChangeText={text => handleTextChange(text, 'role', setFormData)}
            fieldType="role"
          />
          <View style={styles.labelHolder}>
            <TextCustom text="Start Year" textType="Labels" />
            <TextCustom text="End Year" textType="Labels" />
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
        </View>
        <CustomButton
          text="Done"
          height={dimensions.Height / 16}
          width={dimensions.Width / 1.1}
          backgroundColor={colors.Primary}
          color={colors.White}
          onClick={() => handleNavigation(navigation, 'Projects', formData)}
        />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.White,
    paddingHorizontal: dimensions.Width / 80,
  },
  form: {
    marginTop: dimensions.Width / 10,
    marginBottom: dimensions.Width / 100,
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
});
export default EditProjects;
