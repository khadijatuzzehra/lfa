import React, { useState } from 'react';
import { HTButton, HTButtonWithIcon,HTInput, HTText,HTWrapper, } from '../../../../components';
import {Image, ScrollView, View} from 'react-native';
import { Dimensions,GlobalStyles } from '../../../../utils/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import { LOGIN_SUCCESS } from '../../../store/actions/ActionTypes';
import { Images } from '../../../../utils/media';
import { CheckBox } from '@rneui/themed';
import { Fonts ,Colors} from '../../../../theme';
import { styles } from './style';

const GetStartedwithInstructer = ({navigation}) => {
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
        <ScrollView>
      <View style={[GlobalStyles.contentCenter]}>
        <Image source={Images.appImages.logo} style={styles.logostyle} />
        <HTText
          size={Fonts.size.font16}
          text="Instructer"
          bold
          textColor={Colors.titleTextColor}
          styles={GlobalStyles.marginVerticalLarge}
        />
<View style={styles.ContentView}>
        <HTText
          size={Fonts.size.font15}
          text="Getting Started..!"
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
          styles={[GlobalStyles.marginVerticalMedium,styles.inputField]}
          onChangeText={() => handleChange()}
        />
        <HTInput
          fieldType="password"
          placeholder="Please enter your password"
          backgroundColor={Colors.LighterGray}
          textColor={Colors.DarkerGray}
          styles={[GlobalStyles.marginVerticalMedium,styles.inputField]}
          onChangeText={() => handleChange()}
        />
        <View style={styles.rememberView}>
            <View style={styles.checkBoxView}>
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
        </View>

        <View style={styles.btnView}>
        <HTButton 
        onClick={()=>navigation.navigate("StudentRegistration")}
        text={"continue"}
        textSize={12}
        textColor={Colors.TextColor}
        style={[GlobalStyles.marginVerticalLarge]}
         height={Dimensions.Height * 0.043}
          width={Dimensions.Width * 0.52}
          backgroundColor={Colors.buttonColor}
          
        />
        </View>
        
      </View>
      <View style={styles.bottomView}>
        <HTText size={Fonts.size.font12}  text={"Don’t have an account?"}/>
        <HTText onPress={()=>navigation.navigate("InstructerRegistration")} size={Fonts.size.font12} textColor={Colors.Blue} bold text={" Sign up"}/>
        </View>
        </ScrollView>
    </HTWrapper>
  );
};

export default GetStartedwithInstructer;
