import React from 'react';
import {View, StyleSheet,Image} from 'react-native';
import GlobalStyles from '../../../utils/constants/styles/GlobalStyles';
import {Colors, Fonts} from '../../../theme';
import {HTText, HTButton} from '../../../components';
import Dimensions from '../../../utils/constants/dimensions/Dimensions';
import {styles} from './style';
import{Images} from '../../../utils/media';
import Icon from 'react-native-vector-icons/FontAwesome';

const CourseCard = ({
  cardSize,
  title = 'Graphic Design',
  detail='Graphic design Advanced',
  titleColor = Colors.Black,
  titleColor2=Colors.Blue,
  description = 'Card Description',
  descriptionColor = Colors.Black,
  buttonText = 'Read More',
  isPressable,
  backgroundColor = Colors.White,
  onPress,
  primaryIcon = 'help-circle-outline',
  primaryIconData,
  secondaryIcon,
  secondaryIconData,
  buttonColor = Colors.Primary,
  buttonTextColor = Colors.White,
}) => {
  const containerStyle = {
    backgroundColor,
  };
  return (
    <View
      style={[
        cardSize === 'large'
          ? GlobalStyles.roundedRectangleXLarge
          : GlobalStyles.roundedRectangleLarge,
        GlobalStyles.shadow,
        styles.container,
        containerStyle,
      ]}>

        
          <Image style={styles.image}
          source={Images.appImages.rectangle3}/>
        

      <View style={[GlobalStyles.marginMedium,styles.coursetext]}>
        <HTText
          text={title}
          bold
          size={Fonts.size.font12}
          textColor={titleColor}
          
          
        />
        <HTText
          text={detail}
          bold
          size={Fonts.size.font12}
          textColor={titleColor2}
          
        />
        <View style={styles.stars}>
        <Icon name="star" size={10} color="#F1C332" />
        <Icon name="star" size={10} color="#F1C332" />
        <Icon name="star" size={10} color="#F1C332" />
        <Icon name="star" size={10} color="#F1C332" />
        </View>
        
        
          
          
        </View>
      </View>
  );
};

export default CourseCard;
