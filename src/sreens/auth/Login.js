import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';

import {LOGIN_SUCCESS} from '../../store/ActionTypes';
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '1091379759654-0qno7galr7ft280sb69if9einrlsnuml.apps.googleusercontent.com',
});
//Components
import Headings from '../../components/Headings';
import InfoText from '../../components/InfoText';
import Labels from '../../components/Labels';
import CustomTextInput from '../../components/CustomTextInput';
import RememberMe from '../../components/Checkbox';
import CustomButton from '../../components/CustomButton';
import FacebookLoginButton from '../../components/FacebookLoginButton';
import GoogleLoginButton from '../../components/GoogleLoginButton';
import ActionButton from '../../components/ActionButton';

import dimensions from '../../theme/Dimensions';
import colors from '../../theme/Colors';
import Line from '../../assets/svgs/Line 1';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleTextChange = (inputText, fieldType) => {
    // Your logic here
    if (fieldType == 'email') {
      setEmail(inputText);
    } else {
      setPassword(inputText);
    }
  };

  const handlePress = text => {
    let info = {name: 'John', email: 'john@example.com'};
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
          console.log('Signed in');
          const user = userCredential.user;
          console.log(user);
          AsyncStorage.setItem('userInfo', JSON.stringify(user)).then(() => {
            dispatch({type: LOGIN_SUCCESS, payload: user});
          });
          Alert.alert('You are logged in');
        })
        .catch(error => {
          console.log(error);
        });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('SignIn cancelled');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        console.log('sign in in progress already');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.log('play services not available or outdated');
      } else {
        // some other error happened
        console.log('some other error happened', error.code);
      }
    }
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled">
      <Headings text="Hello! Welcome Back!" />
      <InfoText text="Hello again, you've been missed!" />
      <Labels text="Email Address" />
      <CustomTextInput
        placeholder="Enter your email"
        height={dimensions.Height / 18}
        width={dimensions.Width / 1.1}
        onChangeText={handleTextChange}
        fieldType="email"
      />
      <Labels text="Password" />
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
          <InfoText text="Forgot Password" />
        </TouchableOpacity>
      </View>
      <CustomButton
        text="Login"
        height={dimensions.Height / 18}
        width={dimensions.Width / 1.1}
        backgroundColor={colors.Secondary}
        color={colors.White}
        onClick={handlePress}
      />
      <View style={styles.option}>
        <Line style={styles.line} />
        <Labels text="Or Login with" />
        <Line style={{width: 5, height: 1}} />
      </View>
      <View style={styles.socialAuth}>
        <FacebookLoginButton onClick={handlePress} />
        <GoogleLoginButton onGoogleButtonPress={onGoogleButtonPress} />
      </View>
      <View style={styles.ActionButtonContainer}>
        <ActionButton
          text="Don't have an Account? "
          buttonText="Sign UP"
          handlePress={handlePress}
        />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: dimensions.Height / 7,
    backgroundColor: colors.White,
    paddingHorizontal: 10,
  },
  line: {
    width: 5,
    height: 1,
  },
  socialAuth: {
    flexDirection: 'row',
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: dimensions.Height / 35,
  },
  recovery: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    paddingHorizontal: 10,
  },
  ActionButtonContainer: {
    marginTop: dimensions.Height / 5,
  },
});
export default Login;
