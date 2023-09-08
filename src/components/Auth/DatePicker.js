import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import DatePick from 'react-native-modern-datepicker';
import Modal from 'react-native-modal';
import colors from '../../theme/Colors';
import dimensions from '../../theme/Dimensions';
import fonts from '../../theme/Fonts';
import moment from 'moment';

const DatePicker = ({placeholder, onSelect}) => {
  let dateHolder = 'DD/MM/YY';
  if (placeholder === 'ExpiryDate') {
    dateHolder = 'MM/YY';
  }
  const [isModalVisible, setModalVisible] = useState(false);
  const [date, setDate] = useState(dateHolder);
  const handleDateChange = dateInput => {
    let formattedDate = '';
    if (placeholder === 'ExpiryDate') {
      formattedDate = moment(dateInput, 'YYYY/MM/DD').format('MM/YYYY');
    } else {
      formattedDate = moment(dateInput, 'YYYY/MM/DD').format('D/MM/YYYY');
    }
    setDate(formattedDate);
    onSelect(formattedDate);
    setModalVisible(false);
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
              textHeaderColor: colors.TurquoiseActionButton,
              textDefaultColor: colors.TurquoiseActionButton,
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
    borderColor: colors.PaleGray,
    marginBottom: dimensions.Width / 30,
    backgroundColor: colors.White,
  },
  modal: {
    height: dimensions.Height / 2,
    width: dimensions.Width / 1.1,
    borderRadius: 10,
    backgroundColor: colors.White,
  },

  dropdown: {
    height: dimensions.Height / 18,
    width: dimensions.Width / 2.5,
    borderColor: colors.borderColor,
    borderWidth: 1,
    borderRadius: 4,
    justifyContent: 'center',
  },
  dateText: {
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.font11,
    color: colors.Gray,
    padding: dimensions.Width / 100,
  },
  datepicker: {
    borderRadius: 10,
    backgroundColor: colors.White,
  },
  text: {
    fontFamily: fonts.family.regular,
    fontSize: fonts.size.font11,
    color: colors.Gray,
    padding: dimensions.Width / 30,
  },
});

export default DatePicker;
