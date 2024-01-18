import React from 'react';
import {View, Text, ScrollView,Image} from 'react-native';
import {styles} from './style';
import {Fonts} from '../../../../theme';
import {SearchInput} from '../../../../components/inputField';
import {HTText,CourseCard,HTWrapper} from '../../../../components';
import { CourseCardData } from '../../../../utils/constants/data/dummyData';



const Courses = ( ) => {
    return (
      <HTWrapper>
      <ScrollView contentContainerStyle={styles.container}>

         
        <SearchInput />
        <HTText
            size={Fonts.size.font16}
            bold
            styles={styles.title}
            text={'Top Courses'}
          />
          <View style={styles.cards}>
          <CourseCard imageSource={CourseCardData[0].image}/>
          <CourseCard imageSource={CourseCardData[1].image}/>
          <CourseCard imageSource={CourseCardData[2].image}/>
          <CourseCard imageSource={CourseCardData[3].image}/>

          </View>
          
      </ScrollView>  
      </HTWrapper>
    );
  };
  
  export default Courses;