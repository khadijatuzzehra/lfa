import React, {useState} from 'react';
import {View, Image, Text, ScrollView, TouchableOpacity} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import {useNavigation} from '@react-navigation/native';
import Images from '../../../utils/Images';
import colors from '../../../theme/Colors';
import dimensions from '../../../theme/Dimensions';
import CustomButton from '../../../components/Auth/CustomButton';
import TextCustom from '../../../components/Shared/TextCustom';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

const EventDetails = ({route}) => {
  const navigation = useNavigation();
  const object = route.params;
  const event = object.event;
  const [buttonText, setButtonText] = useState('...Read More');
  const [showFullText, setShowFullText] = useState(false);
  const handlePress = () => {
    console.log('Interested');
  };

  const toggleFullText = () => {
    setShowFullText(!showFullText);
    if (showFullText) {
      setButtonText(' ..Read More');
    } else {
      setButtonText(' Read Less');
    }
  };

  const displayText = showFullText
    ? event.details
    : event.details.substring(0, 50);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <ScrollView
          style={styles.horizontalScrollView}
          horizontal
          decelerationRate="fast"
          snapToInterval={dimensions.Width}>
          {event.image &&
            event.image.map((imageVariable, imageIndex) => (
              <View key={imageIndex}>
                <Image source={Images[imageVariable]} style={styles.image} />
              </View>
            ))}
        </ScrollView>
        <LinearGradient
          colors={['transparent', 'rgba(255, 255, 255, 1)']}
          style={styles.gradient}
        />
      </View>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.headerButton}>
          <Images.BackButton />
        </TouchableOpacity>
        <Images.EventHeader />
      </View>
      <View style={styles.row}>
        <View>
          <TextCustom
            text={event.name}
            textType="Headings"
            color={colors.EventDetails}
          />
          <TextCustom
            text={event.organizer}
            textType="Labels"
            color={colors.EventHeading}
          />
        </View>
        <View style={styles.locationContext}>
          <TextCustom
            text={event.locationContext}
            textType="EventLocation"
            color={colors.EventHeading}
          />
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.rowContainer}>
          <View style={styles.rowBottom}>
            <TextCustom
              text="Status:   "
              textType="UpcomingEventsTitle"
              color={colors.EventHeading}
            />
            <View style={styles.ticketStatus}>
              <TextCustom
                text={event.status}
                textType="EventLocation"
                color={colors.White}
              />
            </View>
          </View>
          <TouchableOpacity>
            <TextCustom
              text="Add to Calendar"
              textType="Button"
              color={colors.Primary}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.rowContainer}>
          <View>
            <View style={styles.icons}>
              <Icon name="time" size={20} color={colors.Headings} />
            </View>
            <TextCustom
              text={event.day + ' , ' + event.date}
              textType="EventDetails"
              color={colors.EventHeading}
            />
            <TextCustom
              text={event.time}
              textType="EventDetails"
              color={colors.EventHeading}
            />
          </View>
          <View style={styles.seperator}>
            <Images.Seperator />
          </View>
          <View>
            <View style={styles.icons}>
              <Icon name="location" size={20} color={colors.Headings} />
            </View>
            <TextCustom
              text={event.city}
              textType="EventDetails"
              color={colors.EventHeading}
            />
            <TextCustom
              text={event.location + '- Hall 2'}
              textType="EventDetails"
              color={colors.EventHeading}
            />
          </View>
          <View style={styles.seperator}>
            <Images.Seperator />
          </View>
          <View>
            <View style={styles.icons}>
              <Icon name="star" size={20} color={colors.AccentColor} />
            </View>
            <TextCustom
              text={event.rating}
              textType="Headings"
              color={colors.EventHeading}
            />
          </View>
        </View>
        <View style={styles.heading}>
          <TextCustom
            text="About Event"
            textType="Headings"
            color={colors.EventDetails}
          />
        </View>
        <Text style={styles.EventDetails}>
          {displayText}
          <Text
            onPress={() => {
              toggleFullText();
            }}
            style={styles.toggleText}>
            {buttonText}
          </Text>
        </Text>

        <View style={styles.row}>
          <TextCustom
            text="Pricing"
            textType="Headings"
            color={colors.EventDetails}
          />
          <TextCustom
            text="Purchase Ticket"
            textType="Button"
            color={colors.Primary}
          />
        </View>
        <View style={styles.ticketDetails}>
          <TextCustom
            text="Standard"
            textType="Navigation"
            color={colors.TextEvents}
          />
          <View style={styles.line}>
            <Images.DottedLine />
          </View>
          <TextCustom
            text={'$' + event.standardTicketPrice}
            textType="Headings"
            color={colors.EventHeading}
          />
        </View>
        <View style={styles.ticketDetails}>
          <TextCustom
            text="VIP"
            textType="Navigation"
            color={colors.TextEvents}
          />
          <View style={styles.line}>
            <Images.DottedLine />
          </View>
          <TextCustom
            text={'$' + event.vipTicketPrice}
            textType="Headings"
            color={colors.EventHeading}
          />
        </View>
        <View style={styles.ticketDetails}>
          <TextCustom
            text="Premium"
            textType="Navigation"
            color={colors.TextEvents}
          />
          <View style={styles.line}>
            <Images.DottedLine />
          </View>
          <TextCustom
            text={'$' + event.premiumTicketPrice}
            textType="Headings"
            color={colors.EventHeading}
          />
        </View>
        <View style={styles.heading}>
          <TextCustom
            text="Contact Info"
            textType="Headings"
            color={colors.EventDetails}
          />
          <View style={styles.contactDetails}>
            <Icon name="call" size={25} color={colors.Headings} />
            <TextCustom
              text={event.number}
              textType="Navigation"
              color={colors.Primary}
            />
          </View>
          <View style={styles.contactDetails}>
            <Icon name="mail" size={25} color={colors.Headings} />
            <TextCustom
              text={event.email}
              textType="Navigation"
              color={colors.Primary}
            />
          </View>
          <View style={styles.contactDetails}>
            <Icon name="globe" size={25} color={colors.Headings} />
            <TextCustom
              text={event.website}
              textType="Navigation"
              color={colors.Primary}
            />
          </View>
        </View>
        <View style={styles.heading}>
          <TextCustom
            text="Location"
            textType="Headings"
            color={colors.EventDetails}
          />
          <MapView
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            showsUserLocation
            initialRegion={{
              latitude: 33.54981993492977,
              longitude: 73.12246493917426,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}>
            <Marker
              style={styles.map}
              coordinate={{
                latitude: 33.54981993492977,
                longitude: 73.12246493917426,
              }}
              title={event.name}
              pinColor={colors.Primary}
            />
          </MapView>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.darkBg}>
            <Icon name="bookmark" size={25} color={colors.White} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.lightBg}>
            <Icon name="heart" size={25} color={colors.Headings} />
          </TouchableOpacity>
          <CustomButton
            text="Interested"
            height={40}
            width={dimensions.Height / 5}
            backgroundColor={colors.Primary}
            color={colors.White}
            onClick={() => handlePress()}
          />
        </View>
      </View>
    </ScrollView>
  );
};
export default EventDetails;
