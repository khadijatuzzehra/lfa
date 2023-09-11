import React from 'react';
import {View, FlatList, StyleSheet, Image} from 'react-native';
import colors from '../../theme/Colors';
import dimensions from '../../theme/Dimensions';
import Images from '../../utils/Images';
import TextCustom from '../../components/Shared/TextCustom';
import CustomButton from '../../components/Auth/CustomButton';
import Icon from 'react-native-vector-icons/Ionicons';

const AllEvents = ({events, onClick}) => {
  const handlePress = event => {
    onClick(event);
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
            <TextCustom
              text={event.name}
              textType="EventTitle"
              color={colors.Black}
            />
            <View style={styles.date}>
              <TextCustom
                text={event.date.split(' ')[0]}
                textType="Headings"
                color={colors.White}
              />
              <TextCustom
                text={event.date.split(' ')[1]}
                textType="EventDate"
                color={colors.White}
              />
            </View>
            <View style={styles.rows}>
              <View style={styles.row}>
                <Icon name="location" size={15} color={colors.EventDate} />
                <TextCustom
                  text={event.location + ' - ' + event.city}
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
            <View style={styles.center}>
              <CustomButton
                text="Read More"
                height={dimensions.Height / 25}
                width={dimensions.Height / 3.5}
                backgroundColor={colors.Primary}
                color={colors.White}
                onClick={() => handlePress(event)}
              />
            </View>
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  component: {
    height: dimensions.Height / 2.8,
    width: dimensions.Width / 1.2,
    padding: dimensions.Width / 40,
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginBottom: 10,
    justifyContent: 'center',
    borderRadius: 30,
    shadowColor: colors.Black,
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageView: {
    alignSelf: 'center',
    height: dimensions.Height / 5,
    width: dimensions.Width / 1.3,
    resizeMode: 'cover',
    borderRadius: 20,
  },
  date: {
    width: 55,
    height: 65,
    paddingTop: 5,
    position: 'absolute',
    top: 30,
    right: 25,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
  rows: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: dimensions.Width / 50,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default AllEvents;
