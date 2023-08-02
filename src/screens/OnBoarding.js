import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import TextCustom from '../components/Auth/TextCustom';
import CustomButton from '../components/Auth/CustomButton';
import Images from '../utils/Images';
import colors from '../theme/Colors';
import Data from '../utils/Data';

import dimensions from '../theme/Dimensions';
import {useNavigation} from '@react-navigation/native';

const OnBoarding = () => {
  const data = Data.OnBoarding;
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

    let ImageComponent = null;

    switch (item.imgName) {
      case 'OnBoarding1':
        ImageComponent = (
          <Image source={Images.OnBoarding1} style={styles.image} />
        );
        break;
      case 'OnBoarding2':
        ImageComponent = (
          <Image source={Images.OnBoarding2} style={styles.image} />
        );
        break;
      case 'OnBoarding3':
        ImageComponent = (
          <Image source={Images.OnBoarding3} style={styles.image} />
        );
        break;
      default:
        ImageComponent = null;
    }

    return (
      <SafeAreaView style={styles.container}>
        <View style={containerStyle}>
          <View style={styles.imageContainer}>{ImageComponent}</View>
          <TextCustom text={item.heading} textType="Headings" />
          <TextCustom text={item.text} textType="InfoText" />
          {item.imgName === 'OnBoarding1' && (
            <Images.ProgressBar1 style={styles.progressBar} />
          )}
          {item.imgName === 'OnBoarding2' && (
            <Images.ProgressBar2 style={styles.progressBar} />
          )}
          {item.imgName === 'OnBoarding3' && (
            <Images.ProgressBar3 style={styles.progressBar} />
          )}
        </View>
        {item.imgName !== 'OnBoarding3' && (
          <View style={styles.button}>
            <TouchableOpacity onPress={onNext}>
              <TextCustom text="Skip" textType="InfoText" />
            </TouchableOpacity>
            <CustomButton
              text="Next"
              height={dimensions.Height / 14}
              width={dimensions.Width / 4}
              backgroundColor={colors.Primary}
              color={colors.White}
              onClick={handlePress}
            />
          </View>
        )}
        {item.imgName === 'OnBoarding3' && (
          <View style={styles.button2}>
            <CustomButton
              text="Done"
              height={dimensions.Height / 14}
              width={dimensions.Width / 1.5}
              backgroundColor={colors.Primary}
              color={colors.White}
              onClick={onNext}
            />
          </View>
        )}
      </SafeAreaView>
    );
  };

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
    marginLeft: dimensions.Width / 7,
    marginRight: dimensions.Width / 6,
  },
  lastItem: {
    marginHorizontal: dimensions.Width / 7,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: dimensions.Height / 10,
    marginBottom: dimensions.Height / 4,
    height: dimensions.Height / 50,
    width: dimensions.Width / 50,
  },
  progressBar: {
    height: dimensions.Height / 100,
    width: dimensions.Height / 100,
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
