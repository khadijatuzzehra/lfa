import {View, TouchableOpacity, Image, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import TextCustom from '../../../components/Auth/TextCustom';
import Images from '../../../utils/Images';
import colors from '../../../theme/Colors';
import dimensions from '../../../theme/Dimensions';
import fonts from '../../../theme/Fonts';

const Header = ({text}) => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => handlePress()} style={styles.backButton}>
        <Images.BackButton />
      </TouchableOpacity>
      <View style={styles.headerText}>
        <TextCustom text={text} textType="Headings" color={colors.Headings} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: dimensions.Height / 10,
    width: dimensions.Width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.White,
    shadowColor: colors.LightestGray,
    shadowRadius: 0.5,
    elevation: 10,
  },
  backButton: {
    position: 'absolute',
    left: 10,
  },
  headerText: {
    maxWidth: '60%',
  },
});
export default Header;