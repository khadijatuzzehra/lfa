import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import colors from '../theme/Colors';
import dimensions from '../theme/Dimensions';
import fonts from '../theme/Fonts';

const Dropdown = ({height, width, placeholder, onClick, dropdownValues}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const handleValue = () => {
    onClick(placeholder, value);
  };

  return (
    <View style={[{height, width}, styles.container]}>
      <DropDownPicker
        style={[{height, width}, styles.dropdown]}
        textStyle={{
          fontSize: fonts.size.font12,
          fontFamily: fonts.family.regular,
          color: colors.LightestGray,
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
        placeholder={placeholder}
        itemStyle={styles.dropdownItem}
        dropDownStyle={styles.dropdownMenu}
        onChangeValue={handleValue}
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
    padding: dimensions.Width / 30,
  },
  dropdownMenu: {
    backgroundColor: '#ECECEC', // Set your desired background color here
  },
});
export default Dropdown;
