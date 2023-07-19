import React, {useState, useRef} from 'react';
import {View, StyleSheet, FlatList, Text, TouchableOpacity} from 'react-native';
import Svg, {Circle, Rect} from 'react-native-svg';
import Headings from '../components/Headings';
import InfoText from '../components/InfoText';
import ActionButton from '../components/ActionButton';
import CustomButton from '../components/CustomButton';
import HorizontalFlatList from '../components/HorizontalFlatList';

import OnBoarding1 from '../assets/svgs/one';
import OnBoarding2 from '../assets/svgs/OnBoarding2';
import OnBoarding3 from '../assets/svgs/OnBoarding3';
import ProgressBar1 from '../assets/svgs/ProgressBar1';
import ProgressBar2 from '../assets/svgs/ProgressBar2';
import ProgressBar3 from '../assets/svgs/ProgressBar3';

// import theme
import colors from '../theme/Colors';
import dimensions from '../theme/Dimensions';
import fonts from '../theme/Fonts';
import {useNavigation} from '@react-navigation/native';

const OnBoarding = () => {
  const navigation = useNavigation();
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const onNext = () => {
    navigation.navigate('Login');
  };
  const handlePress = () => {
    const nextIndex = (currentIndex + 1) % data.length;
    flatListRef.current?.scrollToIndex({index: nextIndex, animated: true});
    setCurrentIndex(nextIndex);
  };
  const handleScroll = event => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffset / dimensions.Width);
    setCurrentIndex(index);
  };
  const renderItem = ({item, index}) => {
    // Add left and right padding to the first and last items respectively
    const containerStyle = [
      styles.listContainer,
      index === 0 && styles.firstItem,
      index === data.length - 1 && styles.lastItem,
    ];
    const SvgComponent = '';
    if (item.svgName === 'OnBoarding1') {
      return (
        <View style={styles.container}>
          <View style={containerStyle}>
            <View style={styles.image}>
              <OnBoarding1 />
            </View>
            <Headings text={item.heading} />
            <InfoText text={item.text} />
            <ProgressBar1 style={styles.progressBar} />
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={() => onNext()}>
              <InfoText text="Skip" />
            </TouchableOpacity>
            <CustomButton
              text="Next"
              height={dimensions.Height / 14}
              width={dimensions.Width / 4}
              backgroundColor={colors.Secondary}
              color={colors.White}
              onClick={handlePress}
            />
          </View>
        </View>
      );
    }
    if (item.svgName === 'OnBoarding2') {
      return (
        <View style={styles.container}>
          <View style={containerStyle}>
            <View style={styles.image}>
              <OnBoarding2 />
            </View>
            <Headings text={item.heading} />
            <InfoText text={item.text} />
            <ProgressBar2 style={styles.progressBar} />
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={() => onNext()}>
              <InfoText text="Skip" />
            </TouchableOpacity>
            <CustomButton
              text="Next"
              height={dimensions.Height / 14}
              width={dimensions.Width / 4}
              backgroundColor={colors.Secondary}
              color={colors.White}
              onClick={handlePress}
            />
          </View>
        </View>
      );
    }
    if (item.svgName === 'OnBoarding3') {
      return (
        <View style={styles.container}>
          <View style={containerStyle}>
            <View style={styles.image}>
              <OnBoarding3 />
            </View>
            <Headings text={item.heading} />
            <InfoText text={item.text} />
            <ProgressBar3 style={styles.progressBar} />
          </View>
          <View style={styles.button2}>
            <CustomButton
              style={{marginLeft: dimensions.Width / 8}}
              text="Done"
              height={dimensions.Height / 14}
              width={dimensions.Width / 1.1}
              backgroundColor={colors.Secondary}
              color={colors.White}
              onClick={onNext}
            />
          </View>
        </View>
      );
    }
  };
  const data = [
    {
      id: '1',
      svgName: 'OnBoarding1',
      svgName2: 'ProgressBar1',
      heading: 'Lorem Ipsum',
      text: 'Unleashing Africas Collective Ingenuity ',
    },
    {
      id: '2',
      svgName: 'OnBoarding2',
      svgName2: 'ProgressBar2',
      heading: 'Lorem Ipsum',
      text: 'Unleashing Africas Collective Ingenuity ',
    },
    {
      id: '3',
      svgName: 'OnBoarding3',
      svgName2: 'ProgressBar3',
      heading: 'Lorem Ipsum',
      text: 'Unleashing Africas Collective Ingenuity ',
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        scrollEnabled={true}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: dimensions.Height / 10,
    paddingHorziontal: dimensions.Width / 50,
  },
  listContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: dimensions.Width / 8, // Add left padding to the first item
  },
  firstItem: {
    marginRight: dimensions.Width / 8, // Add left padding to the first item
  },
  lastItem: {
    marginRight: dimensions.Width / 5,
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: dimensions.Height / 10,
    marginBottom: dimensions.Height / 5,
    marginHorizontal: dimensions.Width / 3,
    paddingRight: dimensions.Width / 12,
    height: 20,
    width: 10,
  },
  progressBar: {
    height: 60,
    width: 60,
    marginTop: dimensions.Height / 30,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: dimensions.Height / 20,
    paddingTop: dimensions.Height / 10,
    paddingHorizontal: dimensions.Width / 20,
  },
  button2: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: dimensions.Height / 20,
    marginLeft: dimensions.Width / 40,
    paddingTop: dimensions.Height / 10,
    paddingRight: dimensions.Width / 5,
  },
});

export default OnBoarding;
