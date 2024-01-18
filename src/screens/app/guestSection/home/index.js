import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {HTCardWithImageList, HTText, HTWrapper} from '../../../../components';
import {HomeHeader} from '../../../../components/Header';
import {SearchInput} from '../../../../components/inputField';
import {styles} from './style';
import {Fonts} from '../../../../theme';
import {
  CategoriesButtons,
  CoursesCard,
} from '../../../../components/listComponents';
import {BlogData} from '../../../../utils/constants/data/dummyData';

const Home = () => {
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
            text={'Categories'}
          />
        </View>
        <CategoriesButtons />
        <View style={styles.titleView}>
          <HTText
            size={Fonts.size.font16}
            bold
            styles={styles.text}
            text={'Explore Courses'}
          />
        </View>
        <CoursesCard data={BlogData} />
        <View style={styles.titleView}>
          <HTText
            size={Fonts.size.font16}
            bold
            styles={styles.text}
            text={'Top Courses'}
          />
        </View>
        <CoursesCard data={BlogData} />
      </ScrollView>
    </HTWrapper>
  );
};

export default Home;
