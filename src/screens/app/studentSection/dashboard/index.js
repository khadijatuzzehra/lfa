import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import {HTCardWithImageList, HTText, HTWrapper} from '../../../../components';
import {StudentHeader} from '../../../../components/Header';
import {SearchInput} from '../../../../components/inputField';
import {styles} from './style';
import {Fonts} from '../../../../theme';
import {
  StudentCategoriesButtons,
  CategoriesButtons,
  CoursesCard,
  CertificationsCard,
} from '../../../../components/listComponents';
import {BlogData} from '../../../../utils/constants/data/dummyData';

const Home = () => {
  return (
    <HTWrapper>
      <StudentHeader />
      <ScrollView>
        <View style={styles.titleView}>
          <HTText
            size={Fonts.size.font15}
            bold
            styles={styles.textstyle}
            text={'Categories'}
            textColor="#233465"
          />
        </View>
        <StudentCategoriesButtons />
        <View style={styles.titleView}>
          <HTText
            size={Fonts.size.font16}
            bold
            styles={styles.text}
            text={'My Course'}
            textColor="#233465"
          />
          <TouchableOpacity style={{justifyContent:'center'}}>
            <HTText
              size={Fonts.size.font10}
              bold
              styles={styles.text}
              text={'View All'}
              textColor="#233465"
            />
          </TouchableOpacity>
        </View>
        <CoursesCard data={BlogData} />
        <View style={[styles.titleView ]}>
          <HTText
            size={Fonts.size.font16}
            bold
            styles={styles.text}
            text={'Certifications'}
          />
          <TouchableOpacity style={{justifyContent:'center'}}>
            <HTText
              size={Fonts.size.font10}
              bold
              styles={styles.text}
              text={'View All'}
              textColor="#233465"
            />
          </TouchableOpacity>
        </View>
        <CertificationsCard data={BlogData} />
      </ScrollView>
    </HTWrapper>
  );
};

export default Home;
