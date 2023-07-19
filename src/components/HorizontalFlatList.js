import React, {useState} from 'react';
import {View, FlatList, Text} from 'react-native';
import Svg, {Circle, Rect} from 'react-native-svg';

const HorizontalFlatList = data => {
  const renderItem = ({item}) => {
    const SvgComponent = item.svgName === 'Circle' ? Circle : Rect;

    return (
      <View style={{marginRight: 10}}>
        <Svg height="60" width="60">
          <SvgComponent {...item.svgProps} />
        </Svg>
        <Text>{item.text}</Text>
      </View>
    );
  };
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default HorizontalFlatList;
