import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {StyleSheet, Image, View, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {LOGOUT} from '../../../store/actions/ActionTypes';
import {HTWrapper, HTAccountCard, HTPictureOption} from '../../../components';
import {Images} from '../../../utils/media';
import {GlobalStyles, Data, Dimensions} from '../../../utils/constants';
import {Colors} from '../../../theme';
import {
  uploadFromCamera,
  selectFromGallery,
} from '../../../services/media_upload';

const Account = () => {
  const dispatch = useDispatch();
  const [pictureModal, setPictureModal] = useState(false);

  const handleNavigation = navigate => {
    console.log(navigate);
    if (navigate !== false) {
      AsyncStorage.removeItem('userInfo').then(() => {
        dispatch({type: LOGOUT, payload: null});
      });
    }
  };
  const handlePictureUpload = async pictureOption => {
    let picture = '';
    setPictureModal(false);
    if (pictureOption === 'Camera') {
      picture = await uploadFromCamera();
    } else {
      picture = await selectFromGallery();
    }
    console.log(picture);
  };

  return (
    <HTWrapper>
      <View style={GlobalStyles.marginVerticalExtraLarge}>
        <Image
          source={Images.appImages.User}
          style={[GlobalStyles.roundMedium, styles.image]}
        />
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => setPictureModal(true)}>
          <Image
            source={Images.appImages.Edit}
            style={[GlobalStyles.roundIcon]}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <HTAccountCard
          data={Data.Account}
          onClick={handleNavigation}
          backgroundColor={Colors.BackgroundColor}
          color={Colors.Primary}
        />
      </View>
      <HTPictureOption
        isVisible={pictureModal}
        onCancel={() => setPictureModal(false)}
        onSelect={handlePictureUpload}
      />
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
  editButton: {
    position: 'absolute',
    right: 140,
    bottom: 10,
  },
});
