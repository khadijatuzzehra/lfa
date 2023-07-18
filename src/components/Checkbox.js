import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Checked from '../assets/svgs/checkbox-outline';
import Unchecked from '../assets/svgs/square-outline';

// import theme
import colors from '../theme/Colors';
import dimensions from '../theme/Dimensions';
import fonts from '../theme/Fonts';

const Checkbox = ({text}) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };
  const renderIcon = () => {
    if (isChecked) {
      return <Checked style={styles.icon} />;
    } else {
      return <Unchecked style={styles.icon} />;
    }
    return null;
  };

  return (
    <View style={styles.holder}>
      <TouchableOpacity style={styles.container} onPress={toggleCheckbox}>
        {renderIcon()}
        <Text style={styles.label}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  holder: {
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  label: {
    marginLeft: 4,
    fontSize: 16,
    fontFamily: fonts.family.medium,
    fontSize: fonts.size.font12,
    color: colors.Black,
  },
  icon: {
    padding: 8,
    height: 18,
    width: 18,
    color: colors.Gray,
  },
});

export default Checkbox;
