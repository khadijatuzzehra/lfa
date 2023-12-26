import {StyleSheet, StatusBar} from 'react-native';
import Dimensions from '../dimensions/Dimensions';
import {Colors} from '../../../theme';

const GlobalStyles = StyleSheet.create({
  //Adjust content according to card size large with image
  contentLarge: {
    height: Dimensions.Height * 0.15,
    width: Dimensions.Width * 0.55,
  },
  //Fix to Screen
  screenSize: {
    height: Dimensions.Height,
    width: Dimensions.Width,
  },
  //Transparent Status Bar
  screenSizeTranparentStatusBar: {
    height: Dimensions.Height + StatusBar.currentHeight + 10,
    width: Dimensions.Width,
  },
  //Squrare Containers
  squareLarge: {
    height: Dimensions.Height * 0.28,
    width: Dimensions.Height * 0.28,
  },
  squareMedium: {
    height: Dimensions.Height * 0.18,
    width: Dimensions.Height * 0.18,
  },
  squareSmall: {
    height: Dimensions.Height * 0.1,
    width: Dimensions.Height * 0.1,
  },
  //Rounded Squrare Containers
  roundedSquareLarge: {
    height: Dimensions.Height * 0.3,
    width: Dimensions.Height * 0.3,
    borderRadius: 8,
  },
  roundedSquareMedium: {
    height: Dimensions.Height * 0.15,
    width: Dimensions.Height * 0.15,
    borderRadius: 8,
  },
  roundedSquareSmall: {
    height: Dimensions.Height * 0.1,
    width: Dimensions.Height * 0.1,
    borderRadius: 8,
  },
  //Round or Circular Container
  roundLarge: {
    height: Dimensions.Height * 0.3,
    width: Dimensions.Height * 0.3,
    borderRadius: Dimensions.Height * 0.3,
  },
  roundMedium: {
    height: Dimensions.Height * 0.2,
    width: Dimensions.Height * 0.2,
    borderRadius: Dimensions.Height * 0.2,
  },
  roundSmall: {
    height: Dimensions.Height * 0.1,
    width: Dimensions.Height * 0.1,
    borderRadius: Dimensions.Height * 0.1,
  },
  roundXSmall: {
    height: Dimensions.Height * 0.08,
    width: Dimensions.Height * 0.08,
    borderRadius: Dimensions.Height * 0.08,
  },
  roundIcon: {
    height: Dimensions.Height * 0.04,
    width: Dimensions.Height * 0.04,
    borderRadius: Dimensions.Height * 0.03,
  },
  //Rectangular Container
  rectangleLarge: {
    height: Dimensions.Height * 0.2,
    width: Dimensions.Width * 0.9,
  },
  rectangleMedium: {
    height: Dimensions.Height * 0.18,
    width: Dimensions.Width * 0.7,
  },
  rectangleSmall: {
    height: Dimensions.Height * 0.1,
    width: Dimensions.Width * 0.4,
  },
  //Rounded Rectangular Container
  roundedRectangleXLarge: {
    height: Dimensions.Height * 0.25,
    width: Dimensions.Width * 0.9,
    borderRadius: 8,
  },
  roundedRectangleLarge: {
    height: Dimensions.Height * 0.2,
    width: Dimensions.Width * 0.9,
    borderRadius: 8,
  },
  roundedRectangleMedium: {
    height: Dimensions.Height * 0.18,
    width: Dimensions.Width * 0.7,
    borderRadius: 8,
  },
  roundedRectangleSmall: {
    height: Dimensions.Height * 0.1,
    width: Dimensions.Width * 0.4,
    borderRadius: 8,
  },
  //Shadow
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  //Spacer
  marginLarge: {margin: 20},
  marginMedium: {margin: 10},
  marginSmall: {margin: 5},
  marginVerticalExtraLarge: {marginVertical: Dimensions.Height * 0.05},
  marginVerticalLarge: {marginVertical: 20},
  marginVerticalMedium: {marginVertical: 10},
  marginVerticalSmall: {marginVertical: 5},
  marginVerticalExtraSmall: {marginVertical: 2},
  marginHorizontalLarge: {marginHorizontal: 20},
  marginHorizontalMedium: {marginHorizontal: 10},
  marginHorizontalSmall: {marginHorizontal: 5},
  marginHorizontalExtraSmall: {marginHorizontal: 2},
  marginLeftLarge: {marginLeft: 20},
  marginLeftMedium: {marginLeft: 10},
  marginLeftSmall: {marginLeft: 5},
  marginLeftExtraSmall: {marginLeft: 2},
  marginRightLarge: {marginRight: 20},
  marginRightMedium: {marginRight: 10},
  marginRightSmall: {marginRight: 5},
  marginRightExtraSmall: {marginRight: 2},
  marginTopLarge: {marginTop: 20},
  marginTopMedium: {marginTop: 10},
  marginTopSmall: {marginTop: 5},
  marginTopExtraSmall: {marginTop: 2},
  marginBottomLarge: {marginBottom: 20},
  marginBottomMedium: {marginBottom: 10},
  marginBottomSmall: {marginBottom: 5},
  marginBottomExtraSmall: {marginBottom: 2},
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContain: {
    resizeMode: 'contain',
  },
  imageCover: {
    resizeMode: 'cover',
  },
  bottomSheetHeader: {
    backgroundColor: Colors.Primary,
    height: Dimensions.Height * 0.01,
    width: Dimensions.Width * 0.18,
    borderRadius: 8,
    alignSelf: 'center',
  },
});
export default GlobalStyles;
