import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {HTText, HTWrapper} from '../../../../components';
import {styles} from './style';
import {Fonts} from '../../../../theme';
import {
  BlogCard,
  CategoriesButtons,
} from '../../../../components/listComponents';
import {CardData} from '../../../../utils/constants/data/dummyData';
import {HomeHeader} from '../../../../components/Header';
import {SearchInput} from '../../../../components/inputField';

const Blog = () => {
  return (
    <HTWrapper>
      <HomeHeader />
      <SearchInput />
      <BlogCard data={CardData} />
    </HTWrapper>
  );
};

export default Blog;
