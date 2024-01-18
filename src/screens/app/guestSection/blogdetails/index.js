import React from 'react';
import {View, Text, ScrollView,Image} from 'react-native';
import {HTText, HTWrapper} from '../../../../components';
import {BlogData, CardData} from '../../../../utils/constants/data/dummyData';
import {HomeHeader} from '../../../../components/Header';
import { Images } from '../../../../utils/media';
import {styles} from './style';
import {Fonts} from '../../../../theme';

import {
    BlogCard2,
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
          <View styles={styles.paragraphview}>
          <HTText styles={styles.paragraph1} size={Fonts.size.font11} textColor="rgba(0, 0, 0, 0.64)" text={CardData[1].blogdetail}/>
          <HTText styles={styles.paragraph2} size={Fonts.size.font11} textColor="rgba(0, 0, 0, 0.64)" text={CardData[1].blogdetail2} />
          <HTText styles={styles.paragraph3} size={Fonts.size.font11} textColor="rgba(0, 0, 0, 0.64)" text={CardData[1].blogdetail3}/>
          <HTText styles={styles.paragraph4} size={Fonts.size.font11} textColor="rgba(0, 0, 0, 0.64)" text={CardData[1].blogdetail4} />
          <HTText styles={styles.paragraph5} size={Fonts.size.font11} textColor="rgba(0, 0, 0, 0.64)" text={CardData[1].blogdetail5}/>
          </View>
          
          <HTText
            size={Fonts.size.font16}
            bold
            styles={styles.title}
            text={'Other Blogs'}
          />
          
          <BlogCard2 data={BlogData} />
          
      </HTWrapper>
      </ScrollView>  
    );
  };
  
  export default BlogDetails;