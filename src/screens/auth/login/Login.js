import React from 'react';
import {
  HTButtonWithIcon,
  HTInput,
  HTText,
  HTWrapper,
} from '../../../components';
import {View} from 'react-native';
import {Colors, Fonts} from '../../../theme';
import {Dimensions, GlobalStyles} from '../../../utils/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {LOGIN_SUCCESS} from '../../../store/actions/ActionTypes';

const Login = () => {
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
      <View style={GlobalStyles.contentCenter}>
        <HTText
          size={Fonts.size.font18}
          text="Login"
          bold
          textColor={Colors.Primary}
          styles={GlobalStyles.marginVerticalLarge}
        />
        <HTInput
          fieldType="email"
          placeholder="Please enter your email"
          backgroundColor={Colors.LighterGray}
          textColor={Colors.DarkerGray}
          styles={GlobalStyles.marginVerticalMedium}
          onChangeText={() => handleChange()}
        />
        <HTInput
          fieldType="password"
          placeholder="Please enter your password"
          backgroundColor={Colors.LighterGray}
          textColor={Colors.DarkerGray}
          styles={GlobalStyles.marginVerticalMedium}
          onChangeText={() => handleChange()}
        />
        <HTButtonWithIcon
          onClick={handleLogin}
          buttonType="fill"
          text="Login"
          backgroundColor={Colors.Primary}
          textColor={Colors.White}
          bold
          height={Dimensions.Height * 0.05}
          width={Dimensions.Width * 0.8}
          style={GlobalStyles.marginVerticalLarge}
          iconName="mail"
        />
      </View>
    </HTWrapper>
  );
};

export default Login;
