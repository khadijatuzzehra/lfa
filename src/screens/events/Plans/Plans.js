import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from 'react-native';
import styles from './styles';
import TextCustom from '../../../components/Shared/TextCustom';
import Images from '../../../utils/Images';
import colors from '../../../theme/Colors';
import Data from '../../../utils/Data';
import CustomButton from '../../../components/Auth/CustomButton';
import dimensions from '../../../theme/Dimensions';
import {useNavigation} from '@react-navigation/native';
import {ProgressBar} from 'react-native-paper';
const Plans = () => {
  const data = Data.Plans;
  const navigation = useNavigation();
  const handlePress = item => {
    navigation.navigate('PurchaseTicket', {item});
  };
  const renderItem = ({item, index}) => {
    const progressValue = item.ticketRemaining / item.ticketTotal;
    const normalizedProgress = Math.min(1, Math.max(0, progressValue));
    const remainingTicket = item.ticketTotal - item.ticketRemaining;
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Images.BackButton />
        </TouchableOpacity>
        <View style={styles.ticketContainer}>
          <Image source={Images.Ticket} style={styles.ticket} />
          <View style={styles.center}>
            <TextCustom
              text={item.name}
              textType="Headings"
              color={colors.TextEvents}
            />
          </View>
          <View style={styles.rowCenter}>
            <TextCustom
              text={'$ ' + item.price + '/'}
              textType="TicketPrice"
              color={colors.Black}
            />
            <TextCustom
              text={'month'}
              textType="Labels"
              color={colors.TextEvents}
            />
          </View>
          <View style={styles.row}>
            <View>
              <View style={styles.rowStatus}>
                <Image source={Images.TicketStatus} style={styles.icons} />
                <TextCustom
                  text="Ticket Status"
                  textType="TicketStatus"
                  color={colors.EventHeading}
                />
              </View>
              <View style={styles.rowStatus}>
                <Image source={Images.Seating} style={styles.icons} />
                <TextCustom
                  text="Seating"
                  textType="TicketStatus"
                  color={colors.EventHeading}
                />
              </View>
              <View style={styles.rowStatus}>
                <Image source={Images.Refreshments} style={styles.icons} />
                <TextCustom
                  text="Refreshment"
                  textType="TicketStatus"
                  color={colors.EventHeading}
                />
              </View>
            </View>
            <View>
              <Image source={Images.TicketLine} style={styles.line} />
              <Image source={Images.TicketLine} style={styles.line} />
              <Image source={Images.TicketLine} style={styles.line} />
            </View>
            <View>
              <View style={styles.ticketDetails}>
                <TextCustom
                  text={item.ticketStatus}
                  textType="TicketDetails"
                  color={colors.EventHeading}
                />
              </View>
              <View style={styles.ticketDetails}>
                <TextCustom
                  text={item.seating}
                  textType="TicketDetails"
                  color={colors.EventHeading}
                />
              </View>
              <View style={styles.ticketDetails}>
                <TextCustom
                  text={item.refreshments}
                  textType="TicketDetails"
                  color={colors.EventHeading}
                />
              </View>
            </View>
          </View>
          <View style={styles.rowTickets}>
            <TextCustom
              text="Tickets Remaining  "
              textType="TicketDetails"
              color={colors.EventHeading}
            />
            <TextCustom
              text={remainingTicket + ' remaining'}
              textType="UpcomingEventsTitle"
              color={colors.Primary}
            />
          </View>
          <ProgressBar
            progress={normalizedProgress}
            color={colors.Primary}
            style={styles.bar}
          />
          <View style={styles.centerButton}>
            <View style={styles.button}>
              <CustomButton
                text="Continue"
                height={dimensions.Height / 20}
                width={dimensions.Width / 1.5}
                backgroundColor={colors.Primary}
                color={colors.White}
                onClick={() => handlePress(item)}
              />
            </View>
            <View style={styles.button}>
              <CustomButton
                text="No Thanks"
                height={dimensions.Height / 20}
                width={dimensions.Width / 1.5}
                backgroundColor={colors.borderSocialButton}
                color={colors.White}
                onClick={() => navigation.goBack()}
              />
            </View>
          </View>
        </View>
        {item.name === 'Standard Ticket' && (
          <Images.ProgressBar1 style={styles.progressBar} />
        )}
        {item.name === 'VIP Ticket' && (
          <Images.ProgressBar2 style={styles.progressBar} />
        )}
        {item.name === 'Premium Ticket' && (
          <Images.ProgressBar3 style={styles.progressBar} />
        )}
      </SafeAreaView>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <ImageBackground
        source={Images.Background}
        style={styles.background}
        resizeMode="cover"
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        scrollEnabled={true}
        scrollEventThrottle={16}
      />
    </View>
  );
};

export default Plans;
