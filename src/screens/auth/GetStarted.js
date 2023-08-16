import React from 'react';
import {View, StyleSheet, Image, ImageBackground} from 'react-native';
import CustomButton from '../../components/Auth/CustomButton';
import TextCustom from '../../components/Auth/TextCustom';
import {useNavigation} from '@react-navigation/native';
import Images from '../../utils/Images';

// import theme
import colors from '../../theme/Colors';
import dimensions from '../../theme/Dimensions';
const GetStarted = () => {
  const navigation = useNavigation();

  const handlePress = text => {
    if (text === 'Login') {
      navigation.navigate('Login');
    } else {
      navigation.navigate('Register');
    }
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={Images.HandShake}
        style={styles.background}
        resizeMode="cover"
      />
      <View style={styles.top}>
        <View style={styles.text}>
          <TextCustom
            text="Let's Get Started"
            textType="Headings"
            color={colors.Headings}
          />
          <TextCustom
            text={'Lorem Ipsum sit amet Constentular giz not\nnamet Ipsum'}
            textType="InfoText"
            color={colors.Gray}
          />
        </View>
        <View style={styles.buttonContainer}>
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
          <View style={styles.button}>
            <CustomButton
              text="Register"
              height={dimensions.Height / 20}
              width={dimensions.Width / 1.1}
              backgroundColor={colors.White}
              color={colors.TextDark}
              onClick={handlePress}
            />
          </View>
        </View>
      </View>
      <View style={styles.bottom}>
        <Image
          source={Images.Bottom}
          style={styles.image}
          resizeMode="stretch"
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  top: {
    paddingHorizontal: dimensions.Width / 40,
    paddingTop: dimensions.Height / 20,
  },
  buttonContainer: {
    paddingTop: dimensions.Height / 1.7,
    alignItems: 'center',
  },
  image: {
    height: dimensions.Height / 80,
    width: dimensions.Width,
    left: 0,
    right: 0,
  },
  bottom: {
    flex: 1,
    position: 'absolute',
    bottom: -5,
  },
  button: {
    marginBottom: dimensions.Width / 20,
  },
});

export default GetStarted;
