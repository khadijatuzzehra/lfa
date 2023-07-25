import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Checked from '../../assets/svgs/checkbox-outline';
import Unchecked from '../../assets/svgs/square-outline';

// import theme
import colors from '../../theme/Colors';
import dimensions from '../../theme/Dimensions';
import fonts from '../../theme/Fonts';

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
    marginHorizontal: dimensions.Width / 30,
    marginTop: dimensions.Height / 100,
  },
  label: {
    marginLeft: dimensions.Width / 80,
    fontFamily: fonts.family.medium,
    fontSize: fonts.size.font12,
    color: colors.Black,
  },
  icon: {
    height: dimensions.Width / 22,
    width: dimensions.Width / 22,
    color: colors.borderColor,
  },
});

export default Checkbox;
