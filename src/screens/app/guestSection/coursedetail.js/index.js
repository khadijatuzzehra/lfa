import React from 'react';
import { View, ScrollView, Image, PanResponder } from 'react-native';
import { styles } from './style';
import { HTWrapper,HTText } from '../../../../components';
import { Images } from '../../../../utils/media';
import {Fonts} from '../../../../theme';
import Icon from 'react-native-vector-icons/FontAwesome';



const CourseDetails = () => {

    return (
        <HTWrapper>
            <ScrollView contentContainerStyle={styles.container}>
                <View 
                    style={styles.imageContainer} 
                  
                >
                    <Image style={styles.img} source={Images.appImages.of} />
                    
                    <View style={styles.overlay}>

                           <HTText
                       text={"Meta Social Media Marketing "}
                       size={Fonts.size.font18}
                       bold
                       textColor="white"
                       styles={styles.title}
                      />
                         <HTText
                       text={"The Meta Social Media Marketing is a comprehensive training program designed to equip individuals with the necessary skills and knowledge to excel in the field of social media marketing."}
                       size={Fonts.size.font11}
                       textColor="white"
                       styles={styles.title}

                      
                      />
                      <View style={styles.stars}>           
        <Icon name="star" size={10} color="#F1C332" />
        <Icon name="star" size={10} color="#F1C332" />
        <Icon name="star" size={10} color="#F1C332" />
        <Icon name="star" size={10} color="#F1C332" />
         
        <HTText
          text={"4.9 (17K)"}
          size={Fonts.size.font11}
          textColor={"white"}
          styles={styles.detailtxt}
        />
        </View>

        <View style={styles.stars}>           
        <HTText
          text={"Offered by"}
          size={Fonts.size.font11}
          textColor={"white"}
          styles={styles.detailtxt}
        />
         
        <HTText
          text={"Deep Learning LLC"}
          size={Fonts.size.font11}
          bold
          textColor={"white"}
          styles={styles.detailtxt}
        />
        </View>

        <HTText
          text={"Standford University"}
          size={Fonts.size.font11}
          textColor={"white"}
          styles={styles.detailtxt}
        />
        

                        </View> 
                </View>
                <HTText
          text={"About this specialization"}
          bold
          size={Fonts.size.font18}
          textColor={"black"}
          styles={styles.detailtxt}
        />
           <HTText
          text={"The Meta Social Media Marketing is a comprehensive training program designed to equip individuals with the necessary skills and knowledge to excel in the field of social media marketing."}
          bold
          size={Fonts.size.font14}
          textColor={"black"}
          styles={styles.detailtxt}
        />

            </ScrollView>  
        </HTWrapper>
    );
};

export default CourseDetails;
