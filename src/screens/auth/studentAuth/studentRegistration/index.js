import React from 'react';
import {HTButton, HTInput, HTText, HTWrapper} from '../../../../components';
import {Image, TouchableOpacity, View} from 'react-native';
import {Dimensions, GlobalStyles} from '../../../../utils/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {LOGIN_SUCCESS} from '../../../../store/actions/ActionTypes';
import {Images} from '../../../../utils/media';
import {Styles} from './style';
import {Fonts, Colors} from '../../../../theme';

const StudentRegistration = ({navigation}) => {
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
            text="Sign up!"
            bold
            textColor={Colors.ContinueAsTextColor}
          />
          <HTText
            size={Fonts.size.font11}
            text="Seamlessly access a world of knowledge at Charter Center. "
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
        </View>
        <View style={Styles.btnView}>
          <HTButton
            onClick={() => navigation.navigate('ProfileComplete')}
            text={'Continue'}
            textSize={12}
            textColor={Colors.TextColor}
            style={[GlobalStyles.marginVerticalLarge]}
            height={Dimensions.Height * 0.043}
            width={Dimensions.Width * 0.52}
            backgroundColor={Colors.buttonColor}
          />
        </View>
      </View>
      <TouchableOpacity
        style={Styles.bottomView}
        onPress={() => navigation.navigate('StudentSignIn')}>
        <HTText size={Fonts.size.font12} text={'Already have an account?'} />
        <HTText
          size={Fonts.size.font12}
          textColor={Colors.Blue}
          bold
          text={' Sign in'}
        />
      </TouchableOpacity>
    </HTWrapper>
  );
};

export default StudentRegistration;
