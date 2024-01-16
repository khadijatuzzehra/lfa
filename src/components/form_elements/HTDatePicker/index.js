import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import DatePick from 'react-native-modern-datepicker';
import Modal from 'react-native-modal';
import {Colors, Fonts} from '../../../theme';
import {Dimensions} from '../../../utils/constants';
import moment from 'moment';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const HTDatePicker = ({placeholder, onSelect}) => {
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
            mode={placeholder === 'ExpiryDate' ? 'monthYear' : 'calendar'}
            onDateChange={dateSelected => {
              handleDateChange(dateSelected);
            }}
            onMonthYearChange={dateSelected => handleDateChange(dateSelected)}
            options={{
              textHeaderColor: Colors.Secondary,
              textDefaultColor: Colors.DarkerGray,
              mainColor: Colors.Primary,
              textSecondaryColor: Colors.LightPrimary,
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
    backgroundColor: Colors.White,
  },
  modal: {
    height: Dimensions.Height / 2,
    width: Dimensions.Width / 1.1,
    borderRadius: 10,
    backgroundColor: Colors.White,
  },

  dropdown: {
    height: responsiveHeight(6),
    width: responsiveWidth(41.5),
    marginRight: 5,
    borderRadius: 10,
    backgroundColor: Colors.LighterGray,
    justifyContent: 'center',
  },
  dateText: {
    fontFamily: Fonts.family.regular,
    fontSize: Fonts.size.font12,
    color: Colors.DarkerGray,
    marginLeft: 6,
  },
  datepicker: {
    borderRadius: 10,
    backgroundColor: Colors.White,
  },
  text: {
    fontFamily: Fonts.family.regular,
    fontSize: Fonts.size.font11,
    color: Colors.Gray,
    padding: Dimensions.Width / 30,
  },
});

export default HTDatePicker;
