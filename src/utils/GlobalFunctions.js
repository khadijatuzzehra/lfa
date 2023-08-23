import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Platform} from 'react-native';
import {PERMISSIONS, request, requestMultiple} from 'react-native-permissions';

export const handleNavigation = async (navigation, screenName, formData) => {
  navigation.navigate(screenName);
};

export const handlePress = async () => {
  try {
    const permissionResult = await request(
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.PHOTO_LIBRARY
        : PERMISSIONS.ANDROID.READ_MEDIA_IMAGES,
    );

    if (permissionResult === 'granted') {
      const response = await launchImageLibrary({
        mediaType: 'photo',
        quality: 1,
        maxWidth: 300,
        maxHeight: 300,
      });

      if (!response.didCancel && !response.error) {
        return response;
      } else {
        console.log('Image selection cancelled or error occurred.');
      }
    } else {
      console.log('Image gallery permission denied.');
    }
  } catch (error) {
    console.log('Error:', error.message);
  }
};

export const handlePostStorySelection = async () => {
  try {
    const permissionResults = await requestMultiple(
      Platform.OS === 'ios'
        ? [PERMISSIONS.IOS.PHOTO_LIBRARY]
        : [
            PERMISSIONS.ANDROID.READ_MEDIA_IMAGES,
            PERMISSIONS.ANDROID.READ_MEDIA_VIDEO,
          ],
    );

    console.log(permissionResults);
    const mediaLibraryPermission =
      permissionResults[
        Platform.OS === 'ios'
          ? PERMISSIONS.IOS.PHOTO_LIBRARY
          : PERMISSIONS.ANDROID.READ_MEDIA_IMAGES
      ];

    const videoPermission =
      permissionResults[PERMISSIONS.ANDROID.READ_MEDIA_VIDEO];

    if (mediaLibraryPermission === 'granted' || videoPermission === 'granted') {
      const response = await launchImageLibrary({
        mediaType: 'mixed',
        quality: 1,
        minWidth: 100,
        minHeight: 100,
      });

      if (!response.didCancel && !response.error) {
        console.log(response);
        return response;
      } else {
        console.log('Camera launch cancelled or error occurred.');
      }
    } else {
      console.log('Camera or media library permission denied.');
    }
  } catch (error) {
    console.log('Error:', error);
  }
};

export const handleCameraPress = async () => {
  try {
    const permissionResult = await request(
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.CAMERA
        : PERMISSIONS.ANDROID.CAMERA,
    );
    console.log(permissionResult);
    if (permissionResult === 'granted') {
      const response = await launchCamera({
        mediaType: 'photo',
        minWidth: 100,
        minHeight: 100,
      });
      console.log(response, 'camera Response');

      if (!response.didCancel && !response.error) {
        return response;
      } else {
        console.log('Camera launch cancelled or error occurred.');
      }
    } else {
      console.log('Camera permission denied.');
    }
  } catch (error) {
    console.log('Error:', error);
  }
};

export const handleDeleteData = async (data, itemIdToDelete) => {
  const updatedData = data.filter(item => item.id !== itemIdToDelete);
  return updatedData;
};

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
