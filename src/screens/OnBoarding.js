/* eslint-disable react-native/no-inline-styles */
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
  const [showNextButton, setShowNextButton] = useState(true);

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
    setShowNextButton(false);
    setTimeout(() => {
      setShowNextButton(true);
    }, 250);
  };
  const handleScroll = event => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffset / dimensions.Width);
    setCurrentIndex(index);
  };
  const renderItem = ({item, index}) => {
    const containerStyle = [
      styles.listContainer,
      index !== data.length - 1 && styles.firstItem,
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
          <TextCustom
            text={item.heading}
            textType="Headings"
            color={colors.Headings}
          />
          <TextCustom
            text={item.text}
            textType="OnBoardingText"
            color={colors.InfoText}
          />
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
      <View style={styles.buttonContainer}>
        {data[currentIndex].imgName !== 'OnBoarding3' ? (
          <>
            <TouchableOpacity onPress={onNext} style={styles.button}>
              <TextCustom
                text="Skip"
                textType="OnBoardingText"
                color={colors.InfoText}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePress} style={styles.button}>
              <TextCustom
                text="Next"
                textType="OnBoardingText"
                color={colors.Primary}
              />
            </TouchableOpacity>
          </>
        ) : (
          <View style={[styles.button2, {opacity: showNextButton ? 1 : 0}]}>
            <CustomButton
              text="Done"
              height={dimensions.Height / 20}
              width={dimensions.Width / 1.5}
              backgroundColor={colors.Primary}
              color={colors.White}
              onClick={onNext}
            />
          </View>
        )}
      </View>
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
    marginHorizontal: dimensions.Width / 10,
  },
  firstItem: {
    marginLeft: dimensions.Width / 8,
    marginBottom: dimensions.Width / 10,
  },
  lastItem: {
    marginHorizontal: dimensions.Width / 8,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: dimensions.Height / 10,
    marginBottom: dimensions.Height / 5,
    height: dimensions.Height / 50,
    width: dimensions.Width / 50,
  },
  progressBar: {
    height: dimensions.Height / 100,
    width: dimensions.Height / 100,
    marginTop: dimensions.Height / 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: dimensions.Height / 20,
    paddingTop: dimensions.Height / 10,
    paddingHorizontal: dimensions.Width / 30,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  button2: {
    alignItems: 'center',
    marginLeft: dimensions.Height / 20,
  },
  image: {
    height: dimensions.Height / 3,
    width: dimensions.Height / 2.5,
    resizeMode: 'contain',
  },
});

export default OnBoarding;
