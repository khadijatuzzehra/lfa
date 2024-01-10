import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Lablesdata } from '../../utils/constants/data/dummyData';
import { styles } from './style';
import { Image } from 'react-native';
import { GlobalStyles } from '../../utils/constants';

export const CategoriesButtons = () => {
  const [selectedButton, setSelectedButton] = useState(null);
const [lables,setLables]= useState(Lablesdata);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.button,
        selectedButton === item.id ? styles.selectedButton : null,
      ]}
      onPress={() => setSelectedButton(item.id)}
    >
      <Text style={[styles.buttonText, selectedButton === item.id ? styles.selectedButtonText : null]}>
        {item.label}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={lables}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={false}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

//Home Card components

export const CoursesCard = ({ data }) => {
  return (
    <FlatList
    showsHorizontalScrollIndicator={false}
    horizontal={true}
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.cardContainer}>
          <Image source={item.image} style={styles.image} />
          <View style={styles.inner}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
          </View>
        </View>
      )}
    />
  );
};

export const BlogCard=({data})=>{
  return(
    <FlatList
    showsHorizontalScrollIndicator={false}
    horizontal={false}
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.blogcardcontainer}>
        <View style={[styles.Container,GlobalStyles.shadow]}>
          <Image source={item.image} style={styles.imagestyle} />
          <View style={styles.innerview}>
          <Text style={styles.titlestyle}>{item.title}</Text>
          </View>
        </View>
        <View style={[styles.Container,GlobalStyles.shadow]}>
          <Image source={item.image} style={styles.imagestyle} />
          <View style={styles.innerview}>
          <Text style={styles.titlestyle}>{item.title}</Text>
          </View>
        </View>
        </View>
      )}
    />
  )
}