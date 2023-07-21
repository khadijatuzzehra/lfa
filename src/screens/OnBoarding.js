import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import Svg, {Circle, Rect} from 'react-native-svg';
import Headings from '../components/Headings';
import InfoText from '../components/InfoText';
import ActionButton from '../components/ActionButton';
import CustomButton from '../components/CustomButton';

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
    navigation.navigate('GetStarted');
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

    let SvgComponent = null;

    switch (item.svgName) {
      case 'OnBoarding1':
        SvgComponent = <OnBoarding1 />;
        break;
      case 'OnBoarding2':
        SvgComponent = <OnBoarding2 />;
        break;
      case 'OnBoarding3':
        SvgComponent = <OnBoarding3 />;
        break;
      default:
        SvgComponent = null;
    }

    return (
      <SafeAreaView style={styles.container}>
        <View style={containerStyle}>
          <View style={styles.image}>{SvgComponent}</View>
          <Headings text={item.heading} />
          <InfoText text={item.text} />
          {item.svgName === 'OnBoarding1' && (
            <ProgressBar1 style={styles.progressBar} />
          )}
          {item.svgName === 'OnBoarding2' && (
            <ProgressBar2 style={styles.progressBar} />
          )}
          {item.svgName === 'OnBoarding3' && (
            <ProgressBar3 style={styles.progressBar} />
          )}
        </View>
        {item.svgName !== 'OnBoarding3' && (
          <View style={styles.button}>
            <TouchableOpacity onPress={onNext}>
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
        )}
        {item.svgName === 'OnBoarding3' && (
          <View style={styles.button2}>
            <CustomButton
              text="Done"
              height={dimensions.Height / 14}
              width={dimensions.Width / 1.5}
              backgroundColor={colors.Secondary}
              color={colors.White}
              onClick={onNext}
            />
          </View>
        )}
      </SafeAreaView>
    );
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
    paddingHorizontal: dimensions.Width / 200,
  },
  listContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: dimensions.Width / 8,
  },
  firstItem: {
    marginLeft: dimensions.Width / 7, // Add left padding to the first item
  },
  lastItem: {
    marginHorizontal: dimensions.Width / 7,
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: dimensions.Height / 10,
    marginBottom: dimensions.Height / 5,
    marginHorizontal: dimensions.Width / 10,
    paddingRight: dimensions.Width / 12,
    height: dimensions.Height / 50,
    width: dimensions.Width / 50,
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
    paddingHorizontal: dimensions.Width / 30,
  },
  button2: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: dimensions.Height / 20,
    paddingTop: dimensions.Height / 10,
  },
});

export default OnBoarding;
