import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {HTCardWithImageList, HTText, HTWrapper} from '../../../../components';
import {styles} from './style';
import {HomeHeader} from '../../../../components/Header';
import {SearchInput} from '../../../../components/inputField';
import {Fonts} from '../../../../theme';
import Card from '../../../../components/cards/InstructorCard';

const Instructors = () => {
  return (
    <HTWrapper>
      <HomeHeader />
      <ScrollView>
        <SearchInput />
        <View style={styles.titleView}>
          <HTText
            size={Fonts.size.font15}
            bold
            styles={styles.textstyle}
            text={'Instructor'}
          />
        </View>
        <View style={styles.container}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </View>
      </ScrollView>
    </HTWrapper>
  );
};

export default Instructors;
