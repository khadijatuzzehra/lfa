import React from 'react';
import {View, Text, ScrollView,Image} from 'react-native';
import {HTCardWithImageList, HTText, HTWrapper} from '../../../../components';
import {CardData} from '../../../../utils/constants/data/dummyData';
import {HomeHeader} from '../../../../components/Header';
import {SearchInput} from '../../../../components/inputField';
import { Images } from '../../../../utils/media';
import {styles} from './style';
import {Fonts} from '../../../../theme';

import {
    BlogCard2,
    CoursesCard,
  } from '../../../../components/listComponents';


const BlogDetails = ( ) => {
    return (
        <ScrollView>
      <HTWrapper>
        <HomeHeader />
        <Image style={styles.img}
        source={Images.appImages.blogimg}/>
        <HTText
            size={Fonts.size.font16}
            bold
            textColor='#0056D2'
            styles={styles.title}
            text={CardData[1].title}
          />
          <View style={styles.paragraphview}>
          <Text style={styles.paragraph1} >{CardData[1].blogdetail} </Text>
          <Text style={styles.paragraph2} >{CardData[1].blogdetail2} </Text>
          <Text style={styles.paragraph3} >{CardData[1].blogdetail3} </Text>
          <Text style={styles.paragraph4} >{CardData[1].blogdetail4} </Text>
          <Text style={styles.paragraph5} >{CardData[1].blogdetail5} </Text>
          </View>
          
          <HTText
            size={Fonts.size.font16}
            bold
            styles={styles.title}
            text={'Other Blogs'}
          />
          
          <BlogCard2 data={CardData} />
          
      </HTWrapper>
      </ScrollView>  
    );
  };
  
  export default BlogDetails;