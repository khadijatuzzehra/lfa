import React from 'react';
import { View ,Text,Image} from 'react-native';
import HTText from '../../text/HTText';
import Fonts from '../../../../android/app/src/main/assets/custom/Fonts';
import styles from './style';
import { Images } from '../../../utils/media';



const Card = ({name ="Alex Hales" , course="58" , date="12/12/2023"}) => {
  return (
    <View>
    <View style={styles.card1}>

    </View>
      <View style={styles.card2}>
      <HTText
            size={Fonts.size.font14}
            bold
            styles={styles.textstyle}
            text={name}
          />
          <Text style={styles.textstyle} > Course: {course} </Text>
          <View style={styles.dateview}  >
          <Image style={styles.imagestyle}
                source={Images.appImages.calender}
            />
            <Text style={styles.textstyle} >{date} </Text>
          </View>
          
    </View>

    </View>
    
  );
};

export default Card;
