import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import colors from '../theme/Colors';
import dimensions from '../theme/Dimensions';
import fonts from '../theme/Fonts';

const Dropdown = ({
  dropdownValue1,
  dropdownValue2,
  dropdownValue3,
  placeholder,
  onClick,
}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [country, setCountry] = useState([
    {label: dropdownValue1, value: dropdownValue1},
    {label: dropdownValue2, value: dropdownValue2},
    {label: dropdownValue3, value: dropdownValue3},
  ]);

  const handleValue = () => {
    onClick(placeholder, value);
  };

  return (
    <View style={styles.container}>
      <DropDownPicker
        style={styles.dropdown}
        textStyle={{
          fontSize: 14,
          fontFamily: fonts.family.regular,
        }}
        autoScroll={true}
        nestedScrollEnabled={true}
        open={open}
        value={value}
        listMode="MODAL"
        items={country}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setCountry}
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
    height: dimensions.Height / 12,
    width: dimensions.Width / 2.5,
    marginHorizontal: 15,
    borderColor: colors.LightestGray,
  },
  dropdown: {
    height: dimensions.Height / 18,
    width: dimensions.Width / 2.5,
    marginVertical: 10,
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
export default Dropdown;
