import React from 'react';
import {View, FlatList, StyleSheet, Image} from 'react-native';
import colors from '../../theme/Colors';
import dimensions from '../../theme/Dimensions';
import Images from '../../utils/Images';
import TextCustom from '../../components/Shared/TextCustom';
import Icon from 'react-native-vector-icons/Ionicons';

const MyEvents = ({events}) => {
  const timeCalculate = time => {
    const currentTime = new Date();
    const eventTime = new Date(time);
    const timeDifference = currentTime - eventTime;
    const hoursAgo = Math.floor(timeDifference / (1000 * 60 * 60));
    const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    if (daysAgo >= 1) {
      return `${daysAgo} day/s ago`;
    } else {
      return `${hoursAgo} hour/s ago`;
    }
  };
  return (
    <View>
      <FlatList
        horizontal
        data={events}
        keyExtractor={event => event.id.toString()}
        renderItem={({item: event}) => (
          <View style={styles.component}>
            <Image style={styles.imageView} source={Images[event.image[0]]} />
            <View style={styles.details}>
              <TextCustom
                text={event.name}
                textType="MyEventsTitle"
                color={colors.EventHeading}
              />
              <View style={styles.rows}>
                <View style={styles.row}>
                  <Icon name="location" size={15} color={colors.EventDate} />
                  <TextCustom
                    text={event.location}
                    textType="EventDetails"
                    color={colors.EventDate}
                  />
                </View>
                <View style={styles.row}>
                  <Icon name="time" size={15} color={colors.EventDate} />
                  <TextCustom
                    text={event.time}
                    textType="EventDetails"
                    color={colors.EventDate}
                  />
                </View>
              </View>
              <View style={styles.eventTime}>
                <TextCustom
                  text={'Added ' + timeCalculate(event.posted)}
                  textType="UpcomingEventsDetail"
                  color={colors.EventDate}
                />
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  component: {
    height: dimensions.Height / 6.5,
    width: dimensions.Width / 1.2,
    backgroundColor: colors.White,
    marginHorizontal: 10,
    marginBottom: 20,
    justifyContent: 'center',
    borderRadius: 20,
    shadowColor: colors.borderColor,
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    flexDirection: 'row',
  },
  details: {
    marginTop: dimensions.Width / 30,
  },
  imageView: {
    alignSelf: 'center',
    justifyContent: 'flex-start',
    height: dimensions.Height / 7.5,
    width: dimensions.Width / 3.5,
    resizeMode: 'cover',
    borderRadius: 20,
  },
  rows: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: dimensions.Width / 40,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eventTime: {
    marginTop: dimensions.Height / 40,
    paddingLeft: dimensions.Width / 40,
  },
});
export default MyEvents;
