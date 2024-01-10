import React, { useState } from 'react';
import { HTButton, HTButtonWithIcon,HTInput, HTText,HTWrapper, } from '../../../../components';
import {Image, View} from 'react-native';
import { Dimensions,GlobalStyles } from '../../../../utils/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import { LOGIN_SUCCESS } from '../../../store/actions/ActionTypes';
import { Images } from '../../../../utils/media';
import { Styles } from './style';
import { CheckBox } from '@rneui/themed';
import { Fonts ,Colors} from '../../../../theme';

const StudentSignIn = ({navigation}) => {
    const [checked, setChecked] = useState(true);
     const toggleCheckbox = () => setChecked(!checked);
//   const dispatch = useDispatch();
//   const handleLogin = () => {
//     let info = {name: 'John', email: 'john@example.com'};
//     AsyncStorage.setItem('userInfo', JSON.stringify(info)).then(() => {
//       dispatch({type: LOGIN_SUCCESS, payload: info});
//     });
//   };
//   const handleChange = () => {
//     console.log('User is typing something');
//   };
  return (
    <HTWrapper>
      <View style={[GlobalStyles.contentCenter,Styles.maincontainer]}>
        <Image source={Images.appImages.logo} style={Styles.logostyle} />
        <HTText
          size={Fonts.size.font16}
          text="Student"
          bold
          textColor={Colors.titleTextColor}
          styles={GlobalStyles.marginVerticalLarge}
        />
<View style={Styles.ContentView}>
        <HTText
          size={Fonts.size.font15}
          text="Lets Sign in.!"
          bold
          textColor={Colors.ContinueAsTextColor}
        />
        <HTText
          size={Fonts.size.font11}
          text="Login to your account to continue your courses"
          textColor={Colors.ContinueAsTextColor}
          styles={GlobalStyles.marginTopSmall}
        />
        </View>
        <HTInput
          fieldType="email"
          placeholder="Please enter your email"
          backgroundColor={Colors.LighterGray}
          textColor={Colors.DarkerGray}
          styles={[GlobalStyles.marginVerticalMedium,Styles.inputField]}
          onChangeText={() => handleChange()}
        />
        <HTInput
          fieldType="password"
          placeholder="Please enter your password"
          backgroundColor={Colors.LighterGray}
          textColor={Colors.DarkerGray}
          styles={[GlobalStyles.marginVerticalMedium,Styles.inputField]}
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
           checkedColor='#519041'
           uncheckedColor='#519041'
           title={'Remember me'}
           
         />
         </View>
            <HTText text={"Forgot Password"} bold size={Fonts.size.font12}/>
        </View>
        <View style={Styles.btnView}>
        <HTButton 
        onClick={()=>navigation.navigate("GetStarted")}
        text={"Sign In"}
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
        onClick={()=>navigation.navigate("InstructerSignIn")}
        text={"Instructer"}
        textSize={12}
        textColor={Colors.TextColor}
        style={Styles.btn}
         height={Dimensions.Height * 0.043}
          width={Dimensions.Width * 0.52}
          backgroundColor={Colors.ButtonBackgroundGrayColor}
        />
        </View>
        <View style={Styles.bottomView}>
        <HTText size={Fonts.size.font12}  text={"Don’t have an account?"}/>
        <HTText size={Fonts.size.font12} textColor={Colors.Blue} bold text={" Sign up"}/>
        </View>
      </View>
    </HTWrapper>
  );
};

export default StudentSignIn;
