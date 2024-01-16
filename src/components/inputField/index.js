import React, {useState} from 'react';
import {Icon} from '@rneui/themed';
import {TextInput, View} from 'react-native';
import {styles} from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../theme';
import {GlobalStyles} from '../../utils/constants';

export const IconInputField = ({size, Iconname, placeholder, type}) => {
  const inputField = () => {
    return (
      <View>
        <TextInput
          placeholder={placeholder}
          style={styles.field}
          placeholderTextColor={'#000000'}
        />
      </View>
    );
  };
  const inputICon = () => {
    return (
      <View style={styles.iconstyleview}>
        <Icon name={Iconname} size={size} type={type} />
      </View>
    );
  };
  return (
    <View style={styles.inputFieldview}>
      {inputICon()}
      {inputField()}
    </View>
  );
};

export const SearchInput = () => {
  const [text, setText] = useState('');
  return (
    <View style={[styles.searchinputView, GlobalStyles.shadow]}>
      <TextInput
        style={styles.input}
        onChangeText={txt => {
          console.log(txt);
          setText(txt);
        }}
        placeholderTextColor={Colors.Gray}
        value={text}
        placeholder="What do you want"
      />
      <Ionicons name="search" size={20} color={Colors.Black} />
    </View>
  );
};
