import React from 'react';
import {View, FlatList, StyleSheet, ImageBackground} from 'react-native';
import colors from '../../theme/Colors';
import dimensions from '../../theme/Dimensions';
import Images from '../../utils/Images';
import TextCustom from '../../components/Shared/TextCustom';
import Icon from 'react-native-vector-icons/Ionicons';

const UpcomingEvents = ({events}) => {
  return (
    <View>
      <FlatList
        horizontal
        data={events}
        keyExtractor={event => event.id.toString()}
        renderItem={({item: event}) => (
          <View style={styles.component}>
            <ImageBackground
              style={styles.imageView}
              imageStyle={styles.imageBackground}
              source={Images[event.image[0]]}>
              <TextCustom
                text={event.date + ' ' + event.year}
                textType="UpcomingEventsDate"
                color={colors.White}
              />
              <TextCustom
                text={event.name}
                textType="UpcomingEventsTitle"
                color={colors.White}
              />
              <View style={styles.rows}>
                <View style={styles.row}>
                  <Icon name="location" size={10} color={colors.White} />
                  <TextCustom
                    text={event.location}
                    textType="UpcomingEventsDetail"
                    color={colors.White}
                  />
                </View>
                <View style={styles.row}>
                  <Icon name="time" size={10} color={colors.White} />
                  <TextCustom
                    text={event.time}
                    textType="UpcomingEventsDetail"
                    color={colors.White}
                  />
                </View>
              </View>
            </ImageBackground>
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  component: {
    backgroundColor: 'white',
    marginHorizontal: dimensions.Width / 70,
    borderRadius: 10,
    shadowColor: colors.borderColor,
    shadowOffset: {width: 5, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4,
  },
  text: {
    color: colors.White,
  },
  imageView: {
    height: dimensions.Height / 4.5,
    width: dimensions.Height / 4.1,
    justifyContent: 'flex-end',
    paddingBottom: 20,
    paddingHorizontal: 4,
  },
  imageBackground: {
    resizeMode: 'cover',
    borderRadius: 15,
  },
  rows: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default UpcomingEvents;
