import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Image,
  StatusBar,
  ImageBackground,
} from 'react-native';
import styles from './styles';
import TextCustom from '../../../components/Shared/TextCustom';
import CustomTextInput from '../../../components/Auth/CustomTextInput';
import {handleTextChange, handleChange} from '../../../utils/GlobalFunctions';
import DatePicker from '../../../components/Auth/DatePicker';
import Images from '../../../utils/Images';
import colors from '../../../theme/Colors';
import CustomButton from '../../../components/Auth/CustomButton';
import dimensions from '../../../theme/Dimensions';
import {useNavigation} from '@react-navigation/native';
const PurchaseTicket = ({route}) => {
  const [formData, setFormData] = useState({});
  const object = route.params;
  const item = object.item;
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <ImageBackground
        source={Images.Background}
        style={styles.background}
        resizeMode="cover"
      />
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
          <View style={styles.form}>
            <TextCustom
              text="Card Number"
              textType="Labels"
              color={colors.Black}
            />
            <CustomTextInput
              placeholder="XXX XXX XXXX XXXX"
              height={dimensions.Height / 20}
              width={dimensions.Width / 1.1}
              onChangeText={text =>
                handleTextChange(text, 'cardNumber', setFormData)
              }
              fieldType="cardNumber"
            />
            <View style={styles.rowForm}>
              <View>
                <TextCustom
                  text="Expiry Date"
                  textType="Labels"
                  color={colors.Black}
                />
                <DatePicker
                  placeholder="ExpiryDate"
                  onSelect={value =>
                    handleChange('ExpiryDate', value, setFormData)
                  }
                />
              </View>
              <View>
                <TextCustom text="CVV" textType="Labels" color={colors.Black} />
                <CustomTextInput
                  placeholder="XXX"
                  height={dimensions.Height / 18}
                  width={dimensions.Width / 2.5}
                  onChangeText={text =>
                    handleTextChange(text, 'cvv', setFormData)
                  }
                  fieldType="cvv"
                />
              </View>
            </View>
            <TextCustom
              text="Card Holder Name"
              textType="Labels"
              color={colors.Black}
            />
            <CustomTextInput
              placeholder="Sarah Forest"
              height={dimensions.Height / 18}
              width={dimensions.Width / 1.1}
              onChangeText={text =>
                handleTextChange(text, 'cardHolderName', setFormData)
              }
              fieldType="cardHolderName"
            />
          </View>
          <View style={styles.centerButton}>
            <CustomButton
              text="Pay"
              height={dimensions.Height / 18}
              width={dimensions.Width / 1.5}
              backgroundColor={colors.Primary}
              color={colors.White}
              onClick={() => navigation.navigate('Events', formData)}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default PurchaseTicket;
