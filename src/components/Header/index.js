import React from 'react';
import {Image, View} from 'react-native';
import {Images} from '../../utils/media';
import HTText from '../text/HTText';
import {styles} from './style';
import {TouchableOpacity} from 'react-native';
import Fonts from '../../../android/app/src/main/assets/custom/Fonts';
import HTButton from '../buttons/HTButton';
import {Colors} from '../../theme';
import {Dimensions, GlobalStyles} from '../../utils/constants';
import {useNavigation} from '@react-navigation/native';

export const AuthHeader = ({title, onBackPress}) => {
  return (
    <View style={styles.headerView}>
      <TouchableOpacity onPress={onBackPress}>
        <Image style={styles.iconstyle} source={Images.appImages.leftArrow} />
      </TouchableOpacity>
      <HTText
        size={Fonts.size.font15}
        bold
        styles={styles.titlestyle}
        text={title}
      />
    </View>
  );
};

export const HomeHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.homeheader}>
      <Image
        source={Images.appImages.logo}
        style={styles.logostyle}
        resizeMode="contain"
      />
      <HTButton
        onClick={() =>
          navigation.navigate('Profiles', {
            screen: 'StudentSignIn',
          })
        }
        text={'Login'}
        textSize={12}
        textColor={Colors.TextColor}
        style={[GlobalStyles.marginVerticalLarge]}
        height={Dimensions.Height * 0.04}
        width={Dimensions.Width * 0.3}
        backgroundColor={Colors.buttonColor}
      />
    </View>
  );
};
