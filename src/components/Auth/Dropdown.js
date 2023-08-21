/* eslint-disable no-shadow */
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

const Dropdown = ({
  height,
  width,
  placeholder,
  dropdownValues,
  title,
  onClick,
}) => {
  const [dropdownCoordinates, setDropdownCoordinates] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [showDropdown, setShowDropdown] = useState(true);
  const [selectedValue, setSelectedValue] = useState(null);
  const [isImage, setImage] = useState(true);
  useEffect(() => {
    if (placeholder === '+92' || placeholder === 'Gender') {
      setShowDropdown(false);
    }
    if (placeholder === 'Image') {
      setModalVisible(true);
      setImage(false);
    }
  }, [placeholder]);

  let dropDownStyle = '';
  let containerStyle = '';
  if (placeholder === '+92') {
    containerStyle = styles.phoneNumberContainer;
    dropDownStyle = styles.phoneNumberDropdown;
  } else {
    containerStyle = styles.container;
    dropDownStyle = styles.dropdown;
  }
  const handlePress = item => {
    if (placeholder === 'Image') {
      setModalVisible(false);
      onClick(item, placeholder);
    } else {
      setSelectedValue(item);
      setTimeout(() => {
        setModalVisible(false);
      }, 300);
      onClick(selectedValue, placeholder);
    }
  };
  const backDropPress = () => {
    setModalVisible(false);
    onClick('', '');
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
      {isImage && (
        <TouchableOpacity
          ref={dropdownRef}
          style={[{height, width}, dropDownStyle]}
          onPress={eventHandler}>
          <Text style={styles.text}>{selectedValue || placeholder}</Text>
          {showDropdown && <Images.DropdownArrow />}
        </TouchableOpacity>
      )}

      <Modal
        animationIn="zoomInDown"
        animationOut="zoomOutDown"
        isVisible={isModalVisible}
        onBackdropPress={() => backDropPress()}
        style={[
          styles.modal,
          {
            top: dropdownCoordinates?.y + dropdownCoordinates?.height - 30 || 0,
            [placeholder === 'Image' ? 'right' : 'left']:
              dropdownCoordinates?.x - 20 || 0,
          },
        ]}
        backdropOpacity={0.3}>
        <View
          style={[
            styles.modalContainer,
            {width: width, height: height * 4 - 15},
          ]}>
          {isImage && (
            <View style={styles.okButton}>
              <Text style={styles.title}>{title}</Text>
            </View>
          )}
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            {dropdownValues.map((item, index) => (
              <View key={index} style={styles.item}>
                <TouchableOpacity onPress={() => handlePress(item)}>
                  <Text
                    style={[
                      styles.textDropdown,
                      selectedValue === item && styles.selectedItemStyle,
                    ]}>
                    {item}
                  </Text>
                </TouchableOpacity>
                {selectedValue === item && <Images.Active />}
              </View>
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
    borderColor: colors.PaleGray,
    marginBottom: dimensions.Width / 30,
    backgroundColor: colors.White,
  },
  dropdown: {
    flexDirection: 'row',
    borderColor: colors.borderColor,
    borderWidth: 1,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: dimensions.Width / 30,
  },
  phoneNumberContainer: {
    paddingTop: dimensions.Height / 200,
    marginBottom: dimensions.Height / 100,
  },
  phoneNumberDropdown: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textDropdown: {
    justifyContent: 'center',
    marginTop: dimensions.Width / 100,
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.font11,
    color: colors.Black,
    paddingRight: dimensions.Width / 80,
    paddingBottom: dimensions.Width / 80,
  },
  text: {
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.font11,
    color: colors.Gray,
    padding: dimensions.Width / 100,
  },
  modal: {
    position: 'absolute',
  },
  modalContainer: {
    maxHeight: dimensions.Height / 3,
    paddingHorizontal: dimensions.Height / 50,
    width: dimensions.Width / 1.1,
    backgroundColor: colors.White,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  selectedItemStyle: {
    fontFamily: fonts.family.bold,
    color: colors.Black,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: colors.borderColor,
    borderBottomWidth: 0.8,
  },
  okButton: {
    left: 0,
    top: 0,
  },
  title: {
    fontFamily: fonts.family.medium,
    fontSize: fonts.size.font12,
    color: colors.Placeholder,
  },
});

export default Dropdown;
