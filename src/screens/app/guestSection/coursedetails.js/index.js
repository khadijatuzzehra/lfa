import React from 'react';
import {View, Text, ScrollView,Image} from 'react-native';
import {styles} from './style';
import {Fonts} from '../../../../theme';
import {SearchInput} from '../../../../components/inputField';
import {HTText,CourseCard} from '../../../../components';




const BlogDetails = ( ) => {
    return (
        <ScrollView
        contentContainerStyle={styles.container}> 
        <SearchInput />
        <HTText
            size={Fonts.size.font16}
            bold
            styles={styles.title}
            text={'Top Courses'}
          />
          <View style={styles.cards}>
          <CourseCard/>
          </View>
          
      </ScrollView>  
    );
  };
  
  export default BlogDetails;