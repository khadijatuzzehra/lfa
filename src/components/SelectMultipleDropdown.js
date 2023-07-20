import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import colors from '../theme/Colors';
import dimensions from '../theme/Dimensions';
import fonts from '../theme/Fonts';

const SelectMultipleDropdown = ({
  height,
  width,
  placeholder,
  onClick,
  dropdownValues,
}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);

  const handleValue = () => {
    onClick(placeholder, value);
  };
  // Custom label to show the selected item count
  const customLabel = () => {
    if (value.length === 0) {
      return placeholder;
    } else {
      return `${value.length} item${value.length > 1 ? 's' : ''} selected`;
    }
  };

  return (
    <View style={[{height, width}, styles.container]}>
      <DropDownPicker
        style={[{height, width}, styles.dropdown]}
        textStyle={{
          fontSize: 14,
          fontFamily: fonts.family.regular,
        }}
        autoScroll={true}
        nestedScrollEnabled={true}
        open={open}
        value={value}
        listMode="MODAL"
        items={dropdownValues.map((item, index) => ({
          label: item,
          value: item,
        }))}
        setOpen={setOpen}
        setValue={setValue}
        dropDownDirection="BOTTOM"
        placeholder={customLabel()}
        itemStyle={styles.dropdownItem}
        dropDownStyle={styles.dropdownMenu}
        onChangeValue={handleValue}
        multiple={true}
        min={1}
        max={dropdownValues.length}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: dimensions.Width / 30,
    borderColor: colors.LightestGray,
    marginBottom: dimensions.Height / 100,
  },
  dropdown: {
    fontFamily: fonts.family.regular,
    borderColor: colors.LightestGray,
  },
  dropdownItem: {
    justifyContent: 'flex-start',
    backgroundColor: '#ECECEC', // Set your desired background color here
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  dropdownMenu: {
    backgroundColor: '#ECECEC', // Set your desired background color here
  },
});
export default SelectMultipleDropdown;
