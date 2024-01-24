import {React,useState} from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import {styles} from './style';
import {Fonts,Colors} from '../../../../theme';
import {SearchInput} from '../../../../components/inputField';
import {HTText, CourseCard, HTWrapper, HTButton} from '../../../../components';
import {CourseCardData} from '../../../../utils/constants/data/dummyData';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import {useNavigation} from '@react-navigation/native';


const Courses = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const navigation = useNavigation();
  return (
    <HTWrapper>
      <View style={{paddingTop:responsiveHeight(2),paddingHorizontal:responsiveWidth(1)}}>
        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}
         style={{flexDirection:'row'}}>
          <MaterialCommunityIcons name="arrow-left-thin" size={50} color='black' />
          <HTText
            size={Fonts.size.font15}
            bold
            styles={styles.text}
            text={'My Courses'}
            textColor="#000"
          />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        <SearchInput />
        <View style={styles.buttoncontainer}>
      <TouchableOpacity
        style={[
          styles.button,
          selectedButton === 'completed' ? styles.selectedButton : null,
        ]}
        onPress={() => setSelectedButton('completed')}>
        <HTText
          bold
          text="Completed"
          size={Fonts.size.font12}
          textColor={
            selectedButton === 'completed' ? Colors.White : Colors.Black
          }
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.button,
          selectedButton === 'ongoing' ? styles.selectedButton : null,
        ]}
        onPress={() => setSelectedButton('ongoing')}>
        <HTText
          bold
          text="Ongoing"
          size={Fonts.size.font12}
          textColor={
            selectedButton === 'ongoing' ? Colors.White : Colors.Black
          }
        />
      </TouchableOpacity>
    </View>
        <View style={styles.cards}>
          <CourseCard imageSource={CourseCardData[0].image} />
          <CourseCard imageSource={CourseCardData[1].image} />
          <CourseCard imageSource={CourseCardData[2].image} />
          <CourseCard imageSource={CourseCardData[3].image} />
        </View>
      </ScrollView>
    </HTWrapper>
  );
};

export default Courses;
