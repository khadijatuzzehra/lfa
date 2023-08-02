import React, {useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';

export const handleNavigation = async (navigation, screenName, formData) => {
  navigation.navigate(screenName);
};

export const handlePress = async () => {
  try {
    const response = await launchImageLibrary({mediaType: 'photo'});
    if (!response.didCancel) {
      return response;
    } else {
      console.log('Image selection cancelled.');
      return null;
    }
  } catch (error) {
    console.log(error.response.data);
    return error.response.data;
  }
};

export const handleDeleteData = async (data, itemIdToDelete) => {
  const updatedData = data.filter(item => item.id !== itemIdToDelete);
  return updatedData;
};

const onNext = () => {
  console.log('');
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
