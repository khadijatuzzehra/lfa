import React from 'react';
import {View, Image} from 'react-native';
import GlobalStyles from '../../../utils/constants/styles/GlobalStyles';
import {Colors, Fonts} from '../../../theme';
import {HTText, HTButton} from '../../../components';
import {styles} from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Dimensions } from '../../../utils/constants';
import {useNavigation} from '@react-navigation/native';


const CourseCard = ({
  cardSize,
  title = 'Graphic Design',
  detail='Graphic design Advanced',
  titleColor = Colors.Black,
  backgroundColor = Colors.White,
  imageSource,
}) => {
  const containerStyle = {
    backgroundColor,
  };
  const navigation = useNavigation();

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
          source={imageSource}/>     
        

      <View style={[GlobalStyles.marginMedium,styles.coursetext]}>
        <HTText
          text={title}
          bold
          size={Fonts.size.font12}
          textColor={"rgba(35, 52, 101, 1)"}
          
          
        />
        <HTText
          text={detail}
          bold
          size={Fonts.size.font12}
          textColor={titleColor}
          
        />
        <View style={styles.stars}>
        <Icon name="star" size={10} color="#F1C332" />
        <Icon name="star" size={10} color="#F1C332" />
        <Icon name="star" size={10} color="#F1C332" />
        <Icon name="star" size={10} color="#F1C332" />
         
        <HTText
          text={" 4.2 | 2hrs 36 "}
          size={Fonts.size.font11}
          textColor={"rgba(0, 0, 0, 0.54)"}
          styles={styles.detailtxt}
        />
        </View>
        
        <HTButton

         onClick={() => navigation.navigate('CourseDetails')} 
        text={'View Details'}
        textSize={11}
        textColor={Colors.TextColor} 
        style={[styles.button]}
        height={Dimensions.Height * 0.03}
        width={Dimensions.Width * 0.25}
        backgroundColor={Colors.buttonColor}
        
        />
          
          
        </View>
      </View>
  );
};

export default CourseCard;
