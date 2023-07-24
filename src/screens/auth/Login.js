import React, {useState} from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
  Image,
  StyleSheet,
} from 'react-native';
import TextCustom from '../../components/TextCustom';
import CustomTextInput from '../../components/CustomTextInput';
import RememberMe from '../../components/Checkbox';
import CustomButton from '../../components/CustomButton';
import SocialLoginButton from '../../components/SocialLoginButton';
import ActionButton from '../../components/ActionButton';
import Images from '../../utils/Images';
import dimensions from '../../theme/Dimensions';
import colors from '../../theme/Colors';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {LOGIN_SUCCESS} from '../../store/ActionTypes';
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

  const handleTextChange = (inputText, fieldType) => {
    if (fieldType === 'email') {
      setEmail(inputText);
      console.log(email);
    } else {
      setPassword(inputText);
      console.log(password);
    }
  };
  const onSignUp = () => {
    navigation.navigate('Register');
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
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled">
      <View style={styles.topImage}>
        <Image
          source={Images.LoginIllustration}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.header}>
        <TextCustom text="Welcome Back!" textType="Headings" />
        <TextCustom
          text="Hello again, you've been missed!"
          textType="InfoText"
        />
      </View>
      <TextCustom text="Email Address" textType="Labels" />
      <CustomTextInput
        placeholder="Enter your email"
        height={dimensions.Height / 16}
        width={dimensions.Width / 1.1}
        onChangeText={handleTextChange}
        fieldType="email"
      />
      <TextCustom text="Password" textType="Labels" />
      <CustomTextInput
        placeholder="Enter your password"
        height={dimensions.Height / 16}
        width={dimensions.Width / 1.1}
        onChangeText={handleTextChange}
        fieldType="password"
      />
      <View style={styles.recovery}>
        <RememberMe text="Remember Me" />
        <TouchableOpacity>
          <TextCustom text="Forgot Password" textType="InfoText" />
        </TouchableOpacity>
      </View>
      <View style={styles.button}>
        <CustomButton
          text="Login"
          height={dimensions.Height / 16}
          width={dimensions.Width / 1.4}
          backgroundColor={colors.Primary}
          color={colors.White}
          onClick={handlePress}
        />
      </View>
      <View style={styles.option}>
        <Images.Line />
        <TextCustom text="Or Login with" textType="Labels" />
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
      <View style={styles.ActionButtonContainer}>
        <ActionButton
          text="Don't have an Account? "
          buttonText="Sign UP"
          handlePress={onSignUp}
        />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.White,
    paddingHorizontal: dimensions.Width / 80,
  },
  header: {
    paddingTop: dimensions.Height / 7,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialAuth: {
    flexDirection: 'row',
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: dimensions.Height / 50,
  },
  recovery: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ActionButtonContainer: {
    marginTop: dimensions.Height / 8,
  },
  topImage: {
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    width: dimensions.Width,
    height: dimensions.Height / 20,
  },
  image: {
    width: dimensions.Width / 2,
    right: 0,
  },
});
export default Login;
