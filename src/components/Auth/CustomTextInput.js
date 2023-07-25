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
  const [text2, setText2] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(
    fieldType === 'password',
  );

  const handleTextChange = inputText => {
    if (fieldType === 'password') {
      setText(inputText);
      setText2(inputText);
      onChangeText(text2, fieldType);
    } else {
      setText(inputText);
      onChangeText(inputText, fieldType);
    }
  };

  const togglePasswordVisibility = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = () => {
    if (fieldType === 'password') {
      if (secureTextEntry) {
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
        style={styles.input}
        placeholder={placeholder}
        autoCapitalize="none"
        placeholderTextColor="#959AA1"
        secureTextEntry={secureTextEntry}
        onChangeText={handleTextChange}
        value={text}
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
    borderColor: colors.LightestGray,
    marginHorizontal: dimensions.Width / 30,
    marginBottom: dimensions.Width / 30,
  },
  input: {
    flex: 1,
    height: '100%',
    margin: dimensions.Width / 30,
    color: colors.borderColor,
    fontFamily: fonts.family.regular,
    justifyContent: 'center',
  },
  icon: {
    height: dimensions.Width / 22,
    width: dimensions.Width / 22,
    paddingHorizontal: dimensions.Width / 20,
    color: colors.LightestGray,
  },
});
export default CustomTextInput;
