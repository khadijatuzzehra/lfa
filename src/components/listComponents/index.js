import React, {useState} from 'react';
import {View, FlatList, TouchableOpacity, Text} from 'react-native';
import {Lablesdata,BlogData} from '../../utils/constants/data/dummyData';
import {styles} from './style';
import HTText from '../text/HTText';
import {Image} from 'react-native';
import {GlobalStyles} from '../../utils/constants';
import {Colors, Fonts} from '../../theme';
import { useNavigation } from '@react-navigation/native';


export const CategoriesButtons = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [lables, setLables] = useState(Lablesdata);
  const [blogs, setBlogs] = useState(BlogData);

  
  
  const renderItem = ({item}) => (
    <TouchableOpacity
      style={[
        styles.button,
        selectedButton === item.id ? styles.selectedButton : null,
      ]}
      onPress={() => setSelectedButton(item.id)}>
      <HTText
        bold
        text={item.label}
        size={Fonts.size.font12}
        textColor={selectedButton === item.id ? Colors.White : Colors.Primary}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={lables}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        style={GlobalStyles.marginHorizontalMedium}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

//Home Card components

export const CoursesCard = ({data}) => {
  const navigation = useNavigation();
  return (
    
    <FlatList
      showsHorizontalScrollIndicator={false}
      style={GlobalStyles.marginHorizontalMedium}
      horizontal={true}
      data={data}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => navigation.navigate('Courses', { })}>
        <View style={styles.cardContainer}>
          <Image source={item.image} style={styles.image} />
          <View style={styles.inner}>
            <HTText
              bold
              text={item.title}
              size={Fonts.size.font12}
              textColor={Colors.Black}
            />
            <HTText
              text={item.description}
              size={Fonts.size.font12}
              textColor={Colors.Black}
            />
          </View>
        </View>
        </TouchableOpacity>
      )}
    />
  );
};

export const BlogCard = ({data}) => {
  const navigation = useNavigation();

  const truncateTitle = (title) => {
    return title.length > 25 ? title.substring(0, 25) + '...' :title;
  };

  return (
    <FlatList 
    contentContainerStyle ={styles.flatlist}
      showsHorizontalScrollIndicator={false}
      horizontal={false}
      data={data}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => navigation.navigate('BlogDetails', { item })}>
        <View style={styles.blogcardcontainer}>
          <View style={[styles.Container, GlobalStyles.shadow]}>
            <Image source={item.image} style={styles.imagestyle} />
            <View style={styles.innerview}>
            <Text style={styles.titlestyle}>{truncateTitle(item.title)}</Text>
            </View>
          </View>
        </View>
        </TouchableOpacity>
      )}
    />
  );
  
};

export const BlogCard2 = ({data}) => {
  const navigation = useNavigation();
  return (
    <FlatList 
    contentContainerStyle ={styles.flatlist}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      data={data}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => navigation.navigate('BlogDetails', { item })}>
        <View style={styles.blogcardcontainer}>
          <View style={[styles.Container, GlobalStyles.shadow]}>
            <Image source={item.image} style={styles.imagestyle} />
            <View style={styles.innerview}>
              <Text style={styles.titlestyle}>{item.title}</Text>
            </View>
          </View>
        </View>
        </TouchableOpacity>
      )}
    />
  );
  
};
