import React, {useState, useRef, useEffect} from 'react';
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
import Images from '../../utils/Images';

const Dropdown = ({height, width, placeholder, dropdownValues, onClick}) => {
  const [dropdownCoordinates, setDropdownCoordinates] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [showDropdown, setShowDropdown] = useState(true);
  const [selectedValue, setSelectedValue] = useState(null);
  useEffect(() => {
    if (placeholder === 'Code' || placeholder === 'Gender') {
      setShowDropdown(false);
    }
  }, []);

  let dropDownStyle = '';
  let containerStyle = '';
  if (placeholder === 'Code') {
    containerStyle = styles.phoneNumberContainer;
    dropDownStyle = styles.phoneNumberDropdown;
  } else {
    containerStyle = styles.container;
    dropDownStyle = styles.dropdown;
  }
  const handlePress = item => {
    setSelectedValue(item);
    setModalVisible(false);
    onClick(item, placeholder);
  };
  const eventHandler = () => {
    if (dropdownRef.current) {
      dropdownRef.current.measureInWindow((x, y, width, height) => {
        setDropdownCoordinates({x, y, width, height});
      });
    }
    setModalVisible(true);
  };
  const dropdownRef = useRef(null);
  return (
    <View style={[{height, width}, containerStyle]}>
      <TouchableOpacity
        ref={dropdownRef}
        style={[{height, width}, dropDownStyle]}
        onPress={eventHandler}>
        <Text style={styles.text}>{selectedValue || placeholder}</Text>
        {showDropdown && <Images.DropdownArrow />}
      </TouchableOpacity>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => {
          setModalVisible(false);
        }}
        style={[
          styles.modal,
          {
            top: dropdownCoordinates?.y + dropdownCoordinates?.height - 30 || 0,
            left: dropdownCoordinates?.x - 20 || 0,
          },
        ]}
        backdropOpacity={0.3}>
        <View
          style={[
            styles.modalContainer,
            {width: width, height: height * 4 - 10},
          ]}>
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            {dropdownValues.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handlePress(item)}
                style={styles.item}>
                <Text
                  style={[
                    styles.textDropdown,
                    selectedValue === item && styles.selectedItemStyle,
                  ]}>
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: dimensions.Width / 30,
    borderColor: colors.LightestGray,
    marginBottom: dimensions.Height / 100,
    backgroundColor: colors.White,
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.borderColor,
    borderWidth: 1,
    borderRadius: 4,
    justifyContent: 'space-between',
    paddingRight: dimensions.Width / 30,
  },
  phoneNumberContainer: {
    paddingTop: dimensions.Height / 200,
    marginBottom: dimensions.Height / 100,
    marginLeft: dimensions.Width / 80,
  },
  phoneNumberDropdown: {
    justifyContent: 'center',
  },
  textDropdown: {
    marginTop: dimensions.Width / 70,
    borderBottomColor: colors.borderColor,
    borderBottomWidth: 0.2,
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.font12,
    color: colors.Gray,
    padding: dimensions.Width / 100,
  },
  text: {
    fontFamily: fonts.family.regular,
    color: colors.Gray,
    padding: dimensions.Width / 100,
  },
  modal: {
    position: 'absolute',
  },
  modalContainer: {
    maxHeight: dimensions.Height / 3,
    paddingHorizontal: dimensions.Height / 100,
    width: dimensions.Width / 1.1,
    backgroundColor: colors.White,
    borderRadius: 4,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  selectedItemStyle: {
    fontFamily: fonts.family.bold,
    color: colors.Black,
  },
});

export default Dropdown;
