import React, {useState} from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import Modal from 'react-native-modal';
import colors from '../../theme/Colors';
import dimensions from '../../theme/Dimensions';
import fonts from '../../theme/Fonts';

const Dropdown = ({height, width, placeholder, dropdownValues, onClick}) => {
  let dropDownStyle = '';
  let containerStyle = '';
  if (placeholder === 'Code') {
    dropDownStyle = styles.phoneNumberDropdown;
    containerStyle = styles.phoneNumberContainer;
  } else {
    containerStyle = styles.container;
    dropDownStyle = styles.dropdown;
  }
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  const handlePress = item => {
    console.log(placeholder);
    setSelectedValue(item);
    setModalVisible(false);
    onClick(placeholder, selectedValue);
  };

  return (
    <View style={[{height, width}, containerStyle]}>
      <TouchableOpacity
        style={[{height, width}, dropDownStyle]}
        onPress={() => setModalVisible(true)}>
        <View>
          <Text style={styles.text}>{selectedValue || placeholder}</Text>
        </View>
      </TouchableOpacity>
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalContainer}>
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            {dropdownValues.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handlePress(item)}
                style={styles.item}>
                <Text style={styles.text}>{item}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity onPress={() => handlePress('')}>
              <Text style={styles.text}>Close</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    borderColor: colors.LightestGray,
    marginBottom: dimensions.Height / 100,
  },
  dropdown: {
    borderColor: colors.borderColor,
    borderWidth: 1,
    borderRadius: 4,
    justifyContent: 'center',
  },
  phoneNumberContainer: {
    paddingTop: dimensions.Height / 200,
    marginBottom: dimensions.Height / 100,
  },
  phoneNumberDropdown: {
    justifyContent: 'center',
  },
  text: {
    fontFamily: fonts.family.regular,
    color: colors.Gray,
    padding: dimensions.Width / 30,
  },

  modalContainer: {
    height: dimensions.Height / 2,
    width: dimensions.Width / 1.1,
    backgroundColor: colors.White,
    paddingHorizontal: dimensions.Width / 100,
    borderRadius: 4,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
});

export default Dropdown;
