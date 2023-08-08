import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import DatePick from 'react-native-modern-datepicker';
import Modal from 'react-native-modal';
import colors from '../../theme/Colors';
import dimensions from '../../theme/Dimensions';
import fonts from '../../theme/Fonts';
import moment from 'moment';

const DatePicker = ({placeholder, onSelect}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [date, setDate] = useState('DD/MM/YYYY');
  const handleDateChange = dateInput => {
    const formattedDate = moment(dateInput, 'YYYY/MM/DD').format('D/MM/YYYY');
    setDate(formattedDate);
    onSelect(formattedDate);
    setModalVisible(false);
  };
  const handlePress = () => {
    console.log('Inside handlePress');
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.dropdown}
        onPress={() => setModalVisible(true)}>
        <View>
          <Text style={styles.dateText}>{date}</Text>
        </View>
      </TouchableOpacity>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => {
          setModalVisible(false);
        }}>
        <View style={styles.modal}>
          <DatePick
            mode="calendar"
            onDateChange={dateSelected => {
              handleDateChange(dateSelected);
            }}
            options={{
              textHeaderColor: '#333333',
              textDefaultColor: '#333333',
              mainColor: colors.Primary,
              textSecondaryColor: colors.Primary,
            }}
            style={styles.datepicker}
          />
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
  modal: {
    height: dimensions.Height / 2,
    width: dimensions.Width / 1.1,
    backgroundColor: colors.White,
    borderRadius: 10,
    backgroundColor: colors.White,
  },

  dropdown: {
    height: dimensions.Height / 16,
    width: dimensions.Width / 2.5,
    borderColor: colors.borderColor,
    borderWidth: 1,
    borderRadius: 4,
    justifyContent: 'center',
  },
  dateText: {
    fontFamily: fonts.family.regular,
    color: colors.Gray,
    padding: dimensions.Width / 100,
  },
  datepicker: {
    borderRadius: 10,
    backgroundColor: colors.White,
  },
  text: {
    fontFamily: fonts.family.regular,
    color: colors.Gray,
    padding: dimensions.Width / 30,
  },
});

export default DatePicker;
