import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import CustomButton from '../../components/CustomButton';
import Headings from '../../components/Headings';
import InfoText from '../../components/InfoText';
import Bottom from '../../assets/svgs/Bottom';
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
      <View style={styles.top}>
        <Headings text="Let's Get Started" />
        <InfoText text="Lorem Ipsum sit amet Constentular giz not namet Ipsum" />
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
      <View style={styles.bottom}>
        <Bottom style={styles.image} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.LightPrimary,
    justifyContent: 'center',
  },
  top: {
    justifyContent: 'center',
    flex: 1,
    marginVertical: dimensions.Height / 2.5,
    paddingHorizontal: 10,
  },
  image: {
    height: 10,
    width: dimensions.Width,
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    position: 'relative',
  },
});

export default GetStarted;
