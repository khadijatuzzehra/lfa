/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Alert, Keyboard} from 'react-native';
import styles from './styles';
import TextCustom from '../../../components/Auth/TextCustom';
import CustomTextInput from '../../../components/Auth/CustomTextInput';
import RememberMe from '../../../components/Auth/Checkbox';
import CustomButton from '../../../components/Auth/CustomButton';
import SocialLoginButton from '../../../components/Auth/SocialLoginButton';
import ActionButton from '../../../components/Auth/ActionButton';
import Images from '../../../utils/Images';
import dimensions from '../../../theme/Dimensions';
import colors from '../../../theme/Colors';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {LOGIN_SUCCESS} from '../../../store/ActionTypes';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
GoogleSignin.configure({
  webClientId:
    '1091379759654-0qno7galr7ft280sb69if9einrlsnuml.apps.googleusercontent.com',
});

const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      },
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleTextChange = (inputText, fieldType) => {
    if (fieldType === 'email') {
      setEmail(inputText);
    } else {
      setPassword(inputText);
    }
  };
  const handlePress = text => {
    let info = {displayName: 'John', email: 'john@example.com'};
    AsyncStorage.setItem('userInfo', JSON.stringify(info)).then(() => {
      dispatch({type: LOGIN_SUCCESS, payload: info});
    });
  };
  async function onGoogleButtonPress() {
    try {
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      const {idToken} = await GoogleSignin.signIn();

      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      auth()
        .signInWithCredential(googleCredential)
        .then(userCredential => {
          const user = userCredential.user;
          AsyncStorage.setItem('userInfo', JSON.stringify(user)).then(() => {
            dispatch({type: LOGIN_SUCCESS, payload: user});
          });
          Alert.alert('You are logged in');
        })
        .catch(error => {
          console.log(error);
        });
    } catch (error) {
      console.log('error happened', error);
    }
  }
  return (
    <>
      <KeyboardAwareScrollView style={styles.mainContainer}>
        <View style={styles.header}>
          <TextCustom
            text="Welcome Back!"
            textType="Headings"
            color={colors.Headings}
          />
          <TextCustom
            text="Hello again, you've been missed!"
            textType="InfoText"
            color={colors.InfoText}
          />
        </View>
        <TextCustom
          text="Email Address"
          textType="Labels"
          color={colors.Black}
        />
        <CustomTextInput
          placeholder="Enter your email"
          height={dimensions.Height / 18}
          width={dimensions.Width / 1.1}
          onChangeText={handleTextChange}
          fieldType="email"
        />
        <TextCustom text="Password" textType="Labels" color={colors.Black} />
        <CustomTextInput
          placeholder="Enter your password"
          height={dimensions.Height / 18}
          width={dimensions.Width / 1.1}
          onChangeText={handleTextChange}
          fieldType="password"
        />
        <View style={styles.recovery}>
          <RememberMe text="Remember Me" />
          <TouchableOpacity>
            <TextCustom
              text="Forgot Password"
              textType="Button"
              color={colors.Primary}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <CustomButton
            text="Login"
            height={dimensions.Height / 20}
            width={dimensions.Width / 1.1}
            backgroundColor={colors.Primary}
            color={colors.White}
            onClick={handlePress}
          />
        </View>
        <View style={styles.option}>
          <Images.Line />
          <TextCustom
            text="Or Login with"
            textType="Labels"
            color={colors.Black}
          />
          <Images.Line />
        </View>
        <View style={styles.socialAuth}>
          <SocialLoginButton
            onGoogleButtonPress={handlePress}
            buttonName="Facebook"
          />
          <SocialLoginButton
            onGoogleButtonPress={onGoogleButtonPress}
            buttonName="Google"
          />
        </View>
      </KeyboardAwareScrollView>
      {!isKeyboardVisible ? (
        <View style={styles.ActionButtonContainer}>
          <ActionButton
            text="Don't have an Account? "
            buttonText="Sign up"
            handlePress={() => navigation.navigate('Register')}
          />
        </View>
      ) : null}
    </>
  );
};

export default Login;
