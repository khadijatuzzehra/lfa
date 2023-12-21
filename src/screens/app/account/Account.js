import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {LOGOUT} from '../../../store/actions/ActionTypes';
import {HTWrapper, HTAccountCard} from '../../../components';
import {Images} from '../../../utils/media';
import {GlobalStyles, Data, Dimensions} from '../../../utils/constants';
import {Colors} from '../../../theme';

const Account = () => {
  const dispatch = useDispatch();
  const handleNavigation = navigate => {
    console.log(navigate);
    if (navigate !== false) {
      AsyncStorage.removeItem('userInfo').then(() => {
        dispatch({type: LOGOUT, payload: null});
      });
    }
  };

  return (
    <HTWrapper>
      <View style={GlobalStyles.marginVerticalExtraLarge}>
        <Image
          source={Images.appImages.User}
          style={[GlobalStyles.roundMedium, styles.image]}
        />
      </View>
      <View style={styles.card}>
        <HTAccountCard
          data={Data.Account}
          onClick={handleNavigation}
          backgroundColor={Colors.BackgroundColor}
          color={Colors.Primary}
        />
      </View>
    </HTWrapper>
  );
};

export default Account;

const styles = StyleSheet.create({
  header: {
    marginVertical: Dimensions.Height * 0.05,
  },
  image: {
    resizeMode: 'contain',
    alignSelf: 'center',
    borderColor: Colors.LightPrimary,
    borderWidth: 5,
  },
});
