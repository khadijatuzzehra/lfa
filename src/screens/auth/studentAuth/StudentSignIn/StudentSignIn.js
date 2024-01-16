import React, {useState} from 'react';
import {
  HTButton,
  HTButtonWithIcon,
  HTInput,
  HTText,
  HTWrapper,
} from '../../../../components';
import {Image, TouchableOpacity, View} from 'react-native';
import {Dimensions, GlobalStyles} from '../../../../utils/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {LOGIN_SUCCESS} from '../../../../store/actions/ActionTypes';
import {Images} from '../../../../utils/media';
import {Styles} from './style';
import {CheckBox} from '@rneui/themed';
import {Fonts, Colors} from '../../../../theme';

const StudentSignIn = ({navigation}) => {
  const [checked, setChecked] = useState(true);
  const toggleCheckbox = () => setChecked(!checked);
  const dispatch = useDispatch();
  const handleLogin = () => {
    let info = {name: 'John', email: 'john@example.com'};
    AsyncStorage.setItem('userInfo', JSON.stringify(info)).then(() => {
      dispatch({type: LOGIN_SUCCESS, payload: info});
    });
  };
  const handleChange = () => {
    console.log('User is typing something');
  };
  return (
    <HTWrapper>
      <View style={[GlobalStyles.contentCenter, Styles.maincontainer]}>
        <Image source={Images.appImages.logo} style={Styles.logostyle} />
        <HTText
          size={Fonts.size.font14}
          text="Student"
          bold
          textColor={Colors.titleTextColor}
        />
        <View style={Styles.ContentView}>
          <HTText
            size={Fonts.size.font15}
            text="Sign in!"
            bold
            textColor={Colors.ContinueAsTextColor}
          />
          <HTText
            size={Fonts.size.font11}
            text="Sign in and embark on your learning journey"
            textColor={Colors.ContinueAsTextColor}
            styles={GlobalStyles.marginTopSmall}
          />
          <HTText
            bold
            size={Fonts.size.font11}
            text="Email"
            textColor={Colors.Primary}
            styles={[GlobalStyles.marginTopLarge, GlobalStyles.textAlignLeft]}
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
            text="Password"
            textColor={Colors.Primary}
            styles={[GlobalStyles.marginTopSmall, GlobalStyles.textAlignLeft]}
          />
          <HTInput
            fieldType="password"
            placeholder="Enter password"
            backgroundColor={Colors.LighterGray}
            textColor={Colors.DarkerGray}
            styles={[GlobalStyles.marginBottomMedium, Styles.inputField]}
            onChangeText={() => handleChange()}
          />
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
                title={'Remember me'}
              />
            </View>
            <HTText
              text={'Forgot Password'}
              size={Fonts.size.font12}
              textColor={Colors.Primary}
            />
          </View>
        </View>

        <View style={Styles.btnView}>
          <HTButton
            onClick={() => handleLogin()}
            text={'Sign In'}
            textSize={12}
            textColor={Colors.TextColor}
            style={[GlobalStyles.marginVerticalLarge]}
            height={Dimensions.Height * 0.043}
            width={Dimensions.Width * 0.52}
            backgroundColor={Colors.buttonColor}
          />
          <HTText
            size={Fonts.size.font12}
            bold
            text="Or Continue as"
            textColor={Colors.ContinueAsTextColor}
          />
          <HTButton
            onClick={() => navigation.navigate('InstructorSignIn')}
            text={'Instructor'}
            textSize={12}
            textColor={Colors.TextColor}
            style={Styles.btn}
            height={Dimensions.Height * 0.043}
            width={Dimensions.Width * 0.52}
            backgroundColor={Colors.ButtonColor}
          />
        </View>
      </View>
      <TouchableOpacity
        style={Styles.bottomView}
        onPress={() => navigation.navigate('StudentRegistration')}>
        <HTText size={Fonts.size.font12} text={'Don’t have an account?'} />
        <HTText
          size={Fonts.size.font12}
          textColor={Colors.Blue}
          bold
          text={' Sign up'}
        />
      </TouchableOpacity>
    </HTWrapper>
  );
};

export default StudentSignIn;
