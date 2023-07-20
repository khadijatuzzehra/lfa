import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import DatePick from 'react-native-modern-datepicker';
import Modal from 'react-native-modal';
import colors from '../theme/Colors';
import dimensions from '../theme/Dimensions';
import fonts from '../theme/Fonts';
import moment from 'moment';

const DatePicker = ({placeholder, onSelect}) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(
    moment().format('YYYY-MM-DD'),
  );
  const [cDate, setCDate] = useState(moment().format('D MMMM YYYY'));
  const [weekDates, setWeekDates] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);

  const [date, setDate] = useState('DD/MM/YYYY');
  const handleDatePress = date => {
    setSelectedDate(date);
    console.log(date);
  };
  const handleDateChange = date => {
    const formattedDate = moment(date, 'YYYY/MM/DD').format('D/MM/YYYY');
    setCDate(formattedDate);
    setDate(formattedDate);
    onSelect(formattedDate);
    setModalVisible(false);

    // setTimeout(() => {}, 1000);
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
      <Modal isVisible={isModalVisible}>
        <View>
          <DatePick
            mode="calendar"
            onDateChange={date => {
              handleDateChange(date);
            }}
            options={{
              textHeaderColor: '#333333',
              textDefaultColor: '#333333',
              mainColor: colors.Secondary,
              textSecondaryColor: colors.Secondary,
            }}
            style={{
              borderRadius: 10,
              backgroundColor: colors.White,
            }}
          />
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
    height: dimensions.Height / 16,
    width: dimensions.Width / 2.5,
    borderColor: colors.LightestGray,
    borderWidth: 1,
    borderRadius: 4,
    justifyContent: 'center',
  },
  dateText: {
    fontFamily: fonts.family.regular,
    color: colors.Gray,
    padding: dimensions.Width / 30,
  },
});

export default DatePicker;
