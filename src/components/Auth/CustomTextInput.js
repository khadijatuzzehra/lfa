import React, {useState} from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import EyeOpen from '../../assets/svgs/eye-outline';
import EyeClose from '../../assets/svgs/eye-off-outline';
import colors from '../../theme/Colors';
import dimensions from '../../theme/Dimensions';
import fonts from '../../theme/Fonts';

const CustomTextInput = ({
  placeholder,
  height,
  width,
  onChangeText,
  fieldType,
}) => {
  const [text, setText] = useState('');
  const [secureText, setSecureText] = useState(fieldType === 'password');

  const handleTextChange = inputText => {
    if (fieldType === 'cvv' && inputText.length > 3) {
      setText('');
    } else {
      let formattedInput = inputText;
      if (fieldType === 'cardNumber') {
        if (formattedInput.length > 3) {
          formattedInput = formattedInput.replace(
            /(\d{3})(\d{3})(\d{4})(\d{4}).*/,
            '$1 $2 $3 $4',
          );
        }
      }
      setText(formattedInput);
      onChangeText(formattedInput, fieldType);
    }
  };

  const togglePasswordVisibility = () => {
    setSecureText(!secureText);
  };

  const renderIcon = () => {
    if (fieldType === 'password') {
      if (secureText) {
        return (
          <EyeClose style={styles.icon} onPress={togglePasswordVisibility} />
        );
      } else {
        return (
          <EyeOpen style={styles.icon} onPress={togglePasswordVisibility} />
        );
      }
    }
    return null;
  };

  return (
    <View style={[{height, width}, styles.container]}>
      <TextInput
        style={[
          styles.input,
          fieldType === 'description' || 'skills'
            ? styles.descriptionInput
            : null,
        ]}
        multiline={fieldType !== 'password'}
        secureTextEntry={secureText}
        placeholder={placeholder}
        autoCapitalize={
          fieldType === 'email' || fieldType === 'password'
            ? 'none'
            : 'sentences'
        }
        placeholderTextColor={colors.Placeholder}
        onChangeText={handleTextChange}
        value={text}
        keyboardType={
          fieldType === 'cardNumber' || fieldType === 'cvv'
            ? 'phone-pad'
            : fieldType === 'email'
            ? 'email-address'
            : 'default'
        }
      />
      {renderIcon()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: colors.PaleGray,
    marginHorizontal: dimensions.Width / 30,
    marginBottom: dimensions.Width / 30,
    backgroundColor: colors.White,
  },
  input: {
    flex: 1,
    height: '100%',
    margin: dimensions.Width / 100,
    color: colors.borderColor,
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.font11,
  },
  icon: {
    height: dimensions.Width / 22,
    width: dimensions.Width / 22,
    paddingHorizontal: dimensions.Width / 20,
    color: colors.PaleGray,
  },
  descriptionInput: {
    textAlignVertical: 'top',
  },
});
export default CustomTextInput;
