import React from 'react';
import {View, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import TextCustom from '../../../components/Shared/TextCustom';
import Header from '../../../components/Feed/Header';
import UpcomingEvents from '../../../components/Events/UpcomingEvents';
import AllEvents from '../../../components/Events/AllEvents';
import MyEvents from '../../../components/Events/MyEvents';
import Data from '../../../utils/Data';
import dimensions from '../../../theme/Dimensions';
import colors from '../../../theme/Colors';

const Events = () => {
  const allEvents = Data.Events;
  const upcomingEvents = Data.Events.filter(event => event.upcoming);
  const addedEvents = Data.Events.filter(event => event.added);
  const navigation = useNavigation();
  const handlePress = event => {
    navigation.navigate('EventDetails', {event});
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <Header />
      </View>
      <ScrollView style={styles.container}>
        <TextCustom
          text="Upcoming Events"
          textType="Headings"
          color={colors.EventHeading}
        />
        <UpcomingEvents events={upcomingEvents} />
        <View style={styles.row}>
          <TextCustom
            text="All Events"
            textType="Headings"
            color={colors.EventHeading}
          />
          <TouchableOpacity>
            <TextCustom
              text="View All"
              textType="Button"
              color={colors.Primary}
            />
          </TouchableOpacity>
        </View>
        <AllEvents events={allEvents} onClick={handlePress} />
        <View style={styles.row}>
          <TextCustom
            text="My Events"
            textType="Headings"
            color={colors.EventHeading}
          />
          <TouchableOpacity>
            <TextCustom
              text="View All"
              textType="Button"
              color={colors.Primary}
            />
          </TouchableOpacity>
        </View>

        <MyEvents events={addedEvents} />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.BackgroundColor,
  },
  container: {
    paddingLeft: dimensions.Width / 70,
    paddingTop: dimensions.Width / 50,
  },
  header: {
    shadowColor: colors.borderColor,
    shadowRadius: 1,
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: dimensions.Width / 30,
  },
});
export default Events;
