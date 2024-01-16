import {View, Text} from 'react-native';
import React from 'react';
import {HTButton, HTText, HTWrapper} from '../../../../components';
import {styles} from './style';
import {Image} from 'react-native';
import {Images} from '../../../../utils/media';
import {Colors, Fonts} from '../../../../theme';
import {Dimensions, GlobalStyles} from '../../../../utils/constants';
import {navigate} from '../../../../navigation/rootNavigation';
import {useNavigation} from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();
  return (
    <HTWrapper>
      <View style={styles.mainView}>
        <Image source={Images.appImages.logo} style={styles.logostyle} />
        <HTText
          textColor="#233465"
          bold
          size={Fonts.size.font12}
          text={'Login to your account to continue your courses'}
        />
        <HTButton
          text={'Login with Email'}
          textSize={12}
          textColor={Colors.TextColor}
          style={[GlobalStyles.marginVerticalLarge]}
          height={Dimensions.Height * 0.05}
          width={Dimensions.Width * 0.85}
          backgroundColor={Colors.buttonColor}
          onClick={() => navigation.navigate('StudentSignIn')}
        />
        <Image source={Images.appImages.line} style={styles.linestyle} />
        <HTButton
          text={'New to Charter Center? Create an Account'}
          textSize={12}
          textColor={Colors.ContinueAsTextColor}
          style={[GlobalStyles.marginVerticalLarge]}
          height={Dimensions.Height * 0.05}
          width={Dimensions.Width * 0.85}
          backgroundColor={'#EDF5F3'}
          onClick={() => navigation.navigate('StudentRegistration')}
        />
        <View style={styles.bottomView}>
          <Text style={styles.text}>
            {
              'You can learn more about our privacy and how we use your information in our Privacy Policy by creating an account confirm that i have read and agreed to the Terms of use'
            }
          </Text>
        </View>
      </View>
    </HTWrapper>
  );
};

export default Profile;
