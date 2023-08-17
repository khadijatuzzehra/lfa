import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {PermissionsAndroid} from 'react-native';

export const handleNavigation = async (navigation, screenName, formData) => {
  navigation.navigate(screenName);
};

export const handlePress = async () => {
  const options = {
    mediaType: 'photo',
    quality: 1,
    maxWidth: 800,
    maxHeight: 800,
  };

  try {
    const granted = await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.CAMERA,
      PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
      PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO,
    ]);

    if (
      granted['android.permission.CAMERA'] === 'granted' &&
      granted['android.permission.READ_MEDIA_IMAGES'] === 'granted' &&
      granted['android.permission.READ_MEDIA_VIDEO'] === 'granted'
    ) {
      try {
        const response = await launchImageLibrary(options);
        if (!response.didCancel) {
          return response;
        } else {
          console.log('Image selection cancelled.');
          return null;
        }
      } catch (error) {
        console.log('Image selection error:', error);
        return null;
      }
    } else {
      console.log('Storage permission denied');
    }
  } catch (err) {
    console.log('Permission request error:', err);
  }
};

export const handlePostStorySelection = async () => {
  const options = {
    mediaType: 'mixed',
    quality: 1,
    maxWidth: 800,
    maxHeight: 800,
  };

  try {
    const granted = await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.CAMERA,
      PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
      PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO,
    ]);

    if (
      granted['android.permission.CAMERA'] === 'granted' &&
      granted['android.permission.READ_MEDIA_IMAGES'] === 'granted' &&
      granted['android.permission.READ_MEDIA_VIDEO'] === 'granted'
    ) {
      try {
        const response = await launchImageLibrary(options);
        if (!response.didCancel) {
          return response;
        } else {
          console.log('Media selection cancelled.');
          return null;
        }
      } catch (error) {
        console.log('Media selection error:', error);
        return null;
      }
    } else {
      console.log('Storage permission denied');
    }
  } catch (err) {
    console.log('Permission request error:', err);
  }
};

export const handleCameraPress = async () => {
  const options = {
    mediaType: 'photo',
    quality: 1,
    maxWidth: 800,
    maxHeight: 800,
  };
  try {
    const granted = await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.CAMERA,
      PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
      PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO,
    ]);
    console.log(granted);
    if (
      granted['android.permission.CAMERA'] === 'granted' &&
      granted['android.permission.READ_MEDIA_IMAGES'] === 'granted' &&
      granted['android.permission.READ_MEDIA_VIDEO'] === 'granted'
    ) {
      try {
        console.log('Inside handle camera press');
        const response = await launchCamera(options);
        if (!response.didCancel) {
          return response;
        } else {
          console.log('Camera capture cancelled.');
          return null;
        }
      } catch (error) {
        console.log('Camera capture error:', error);
        return null;
      }
    } else {
      console.log('Camera permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

export const handleDeleteData = async (data, itemIdToDelete) => {
  const updatedData = data.filter(item => item.id !== itemIdToDelete);
  return updatedData;
};

// const onNext = () => {
//   console.log('');
// };

export const handleTextChange = async (inputText, fieldType, setFormData) => {
  setFormData(prevFormData => ({
    ...prevFormData,
    [fieldType]: inputText,
  }));
};

export const handleChange = async (placeholder, value, setFormData) => {
  setFormData(prevFormData => ({
    ...prevFormData,
    [placeholder.toLowerCase()]: value,
  }));
};
