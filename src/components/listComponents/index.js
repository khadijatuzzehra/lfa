import React, {useState} from 'react';
import {View, FlatList, TouchableOpacity, Text} from 'react-native';
import {
  Lablesdata,
  BlogData,
  Studentdata,
} from '../../utils/constants/data/dummyData';
import {styles} from './style';
import HTButton from '../buttons/HTButton';
import HTText from '../text/HTText';
import {Dimensions} from '../../utils/constants';
import {Image} from 'react-native';
import {GlobalStyles} from '../../utils/constants';
import {Colors, Fonts} from '../../theme';
import {useNavigation} from '@react-navigation/native';

// Guest Scroll-View

export const CategoriesButtons = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [lables, setLables] = useState(Lablesdata);
  const [blogs, setBlogs] = useState(BlogData);

  //Label/Guest Data Scroll-list
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
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        horizontal
        style={GlobalStyles.marginHorizontalMedium}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

// Student  Scroll-View
export const StudentCategoriesButtons = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const [students, setStudents] = useState(Studentdata);

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
        data={students}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
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
        <TouchableOpacity onPress={() => navigation.navigate('Courses', {})}>
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
                bold 
                text={item.description}
                size={Fonts.size.font11}
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

  const truncateTitle = title => {
    return title.length > 25 ? title.substring(0, 25) + '...' : title;
  };

  return (
    <FlatList
      contentContainerStyle={styles.flatlist}
      showsHorizontalScrollIndicator={false}
      horizontal={false}
      data={data}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <TouchableOpacity
          onPress={() => navigation.navigate('BlogDetails', {item})}>
          <View style={styles.blogcardcontainer}>
            <View style={[styles.Container, GlobalStyles.shadow]}>
              <Image source={item.image} style={styles.imagestyle} />
              <View style={styles.innerview}>
                <Text style={styles.titlestyle}>
                  {truncateTitle(item.title)}
                </Text>
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
      contentContainerStyle={styles.flatlist}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      data={data}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <TouchableOpacity
          onPress={() => navigation.navigate('BlogDetails', {item})}>
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

export const CertificationsCard = ({data}) => {
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      style={GlobalStyles.marginHorizontalMedium}
      horizontal={true}
      data={data}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <TouchableOpacity>
          <View style={styles.cardContainer1}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.inner}>
              <HTText
                bold
                text={item.title}
                size={Fonts.size.font12}
                textColor={Colors.Black}
              />
              <HTText
                bold
                text={item.description}
                size={Fonts.size.font11}
                textColor={Colors.Black}
              />
               <View style={{paddingVertical:3,paddingHorizontal:3}}> 

               <HTButton
                
                text={'View Certificate'}
                textSize={10}
                textColor={Colors.TextColor}
                style={[styles.button1]}
                height={Dimensions.Height * 0.025}
                width={Dimensions.Width * 0.25}
                backgroundColor={Colors.buttonColor}
              />
               
               </View>
              
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};
