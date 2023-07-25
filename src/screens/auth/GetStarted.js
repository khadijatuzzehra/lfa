import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
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
      <Image
        source={Images.HandShake}
        style={styles.backgroundSvg}
        resizeMode="stretch"
      />
      <View style={styles.top}>
        <View style={styles.text}>
          <TextCustom text="Let's Get Started" textType="Headings" />
          <TextCustom
            text="Lorem Ipsum sit amet Constentular giz not namet Ipsum"
            textType="InfoText"
          />
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            text="Login"
            height={dimensions.Height / 14}
            width={dimensions.Width / 1.1}
            backgroundColor={colors.Primary}
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
