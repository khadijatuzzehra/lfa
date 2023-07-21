import React, {useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import CustomButton from '../../components/CustomButton';
import Headings from '../../components/Headings';
import InfoText from '../../components/InfoText';
import {useNavigation} from '@react-navigation/native';

// import theme
import colors from '../../theme/Colors';
import dimensions from '../../theme/Dimensions';
import fonts from '../../theme/Fonts';
const GetStarted = () => {
  const navigation = useNavigation();

  const handlePress = text => {
    if (text == 'Login') {
      navigation.navigate('Login');
    } else {
      navigation.navigate('Register');
    }
  };
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/Images/hand-shake.png')}
        style={styles.backgroundSvg}
        resizeMode="stretch" // Apply stretch to fill the entire container
      />
      <View style={styles.top}>
        <View style={styles.text}>
          <Headings text="Let's Get Started" />
          <InfoText text="Lorem Ipsum sit amet Constentular giz not namet Ipsum" />
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            text="Login"
            height={dimensions.Height / 14}
            width={dimensions.Width / 1.1}
            backgroundColor={colors.Secondary}
            color={colors.White}
            onClick={handlePress}
          />
          <CustomButton
            text="Register"
            height={dimensions.Height / 14}
            width={dimensions.Width / 1.1}
            backgroundColor={colors.White}
            color={colors.TextDark}
            onClick={handlePress}
          />
        </View>
      </View>
      <View style={styles.bottom}>
        <Image
          source={require('../../assets/Images/Bottom.png')}
          style={styles.image}
          resizeMode="stretch" // Apply stretch to fill the entire container
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  backgroundSvg: {
    position: 'absolute',
    height: '100%',
    resizeMode: 'repeat',
    width: '100%',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  top: {
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: dimensions.Width / 40,
    paddingTop: dimensions.Height / 8,
  },
  buttonContainer: {
    marginTop: dimensions.Height / 5,
  },
  image: {
    height: dimensions.Height / 100,
    width: dimensions.Width,
    left: 0,
    right: 0,
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    position: 'relative',
  },
});

export default GetStarted;
