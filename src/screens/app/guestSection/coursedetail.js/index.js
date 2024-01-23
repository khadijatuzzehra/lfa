import React from 'react';
import {View, ScrollView, Image, Text, TouchableOpacity} from 'react-native';
import {styles} from './style';
import {HTWrapper, HTText, HTButton, HTDropdown} from '../../../../components';
import {Images} from '../../../../utils/media';
import {Colors, Fonts} from '../../../../theme';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';



import {Dimensions, GlobalStyles} from '../../../../utils/constants';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const CourseDetails = () => {
  return (
    <HTWrapper>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.img} source={Images.appImages.of} />

          <View style={styles.overlay}>
            <HTText
              text={'Meta Social Media Marketing '}
              size={Fonts.size.font18}
              bold
              textColor="white"
              styles={styles.title}
            />
            <HTText
              text={
                'The Meta Social Media Marketing is a comprehensive training program designed to equip individuals with the necessary skills and knowledge to excel in the field of social media marketing.'
              }
              size={Fonts.size.font11}
              textColor="white"
              styles={styles.title1}
            />
            <View style={styles.stars}>
              <Icon name="star" size={12} color="#F1C332" />
              <Icon name="star" size={12} color="#F1C332" />
              <Icon name="star" size={12} color="#F1C332" />
              <Icon name="star" size={12} color="#F1C332" />
              <Icon name="star" size={12} color="#F1C332" />
              <HTText
                text={'4.9 (17K)'}
                size={Fonts.size.font11}
                textColor={'white'}
                styles={styles.coursename}
              />
            </View>

            <View style={styles.stars}>
              <HTText
                text={'Offered by'}
                size={Fonts.size.font11}
                textColor={'white'}
                styles={styles.coursetxt}
              />

              <HTText
                text={'Deep Learning LLC'}
                size={Fonts.size.font11}
                bold
                textColor={'white'}
                styles={styles.coursename}
              />
            </View>

            <HTText
              text={'Standford University'}
              size={Fonts.size.font11}
              textColor={'white'}
              styles={styles.uni}
            />
          </View>
        </View>
        <HTText
          text={'About this specialization'}
          bold
          size={Fonts.size.font18}
          textColor={'black'}
          styles={styles.titletxt}
        />
        <HTText
          text={
            'The Meta Social Media Marketing is a comprehensive training program designed to equip individuals with the necessary skills and knowledge to excel in the field of social media marketing.'
          }
          bold
          size={Fonts.size.font12}
          textColor={'black'}
          styles={styles.paratxt}
        />

        <View style={{flexDirection: 'row' ,paddingHorizontal:18, paddingVertical:10}}>
          <Ionicons name="globe" size={20}  />
          <View style={{paddingHorizontal:10,flexDirection: 'column'}}>
          <HTText
                text={'100% Online'}
                bold
                size={Fonts.size.font13}
                textColor={'black'}
              />
              <HTText
                text={'Start Instantly and learn at your own shedule'}
                size={Fonts.size.font10}
                textColor={'black'}
                
              />
          </View>
        </View>

        <View style={{flexDirection: 'row' ,paddingHorizontal:18 , paddingVertical:10}}>
          <MaterialCommunityIcons name="timer-sand-complete" size={20}  />
          <View style={{paddingHorizontal:10,flexDirection: 'column'}}>
          <HTText
                text={'Flexible deadlines'}
                bold
                size={Fonts.size.font13}
                textColor={'black'}
              />
              <HTText
                text={'Reset deadline in accordance to your schedule'}
                size={Fonts.size.font10}
                textColor={'black'}
                
              />
          </View>
        </View>

        <View style={{flexDirection: 'row' ,paddingHorizontal:18 , paddingVertical:10}}>
          <MaterialIcons name="waterfall-chart" size={20}  />
          <View style={{paddingHorizontal:10,flexDirection: 'column'}}>
          <HTText
                text={'Beginner Level'}
                bold
                size={Fonts.size.font13}
                textColor={'black'}
              />
              <HTText
                text={'No prior Experience required'}
                size={Fonts.size.font10}
                textColor={'black'}
                
              />
          </View>
        </View>

        <View style={{flexDirection: 'row' ,paddingHorizontal:18 , paddingVertical:10}}>
          <Fontisto name="stopwatch" size={20}  />
          <View style={{paddingHorizontal:10,flexDirection: 'column'}}>
          <HTText
                text={'Approx. 3 months to complete'}
                bold
                size={Fonts.size.font13}
                textColor={'black'}
              />
              <HTText
                text={'Suggested 5 hours/week'}
                size={Fonts.size.font10}
                textColor={'black'}
                
              />
          </View>
        </View>


        <View style={{flexDirection: 'row' ,paddingHorizontal:18 , paddingVertical:40}}>
          <AntDesign name="message1" size={20}  />
          <View style={{paddingHorizontal:10,flexDirection: 'column'}}>
          <HTText
                text={'Language'}
                bold
                size={Fonts.size.font13}
                textColor={'black'}
              />
              <HTText
                text={'English,  Speanish, French, German, Arabic, Shinese, '}
                size={Fonts.size.font10}
                textColor={'black'}
                
              />
          </View>
        </View>
        

        <HTText
          text={'Skills you will gain'}
          bold
          size={Fonts.size.font20}
          textColor={'black'}
          styles={styles.skilltitle}
        />
        <View style={styles.skillscontainer}>
          <HTButton
            text={'Logic Regression'}
            textSize={12}
            textColor={Colors.Black}
            style={[styles.button]}
            height={Dimensions.Height * 0.035}
            width={Dimensions.Width * 0.35}
            backgroundColor={Colors.LightestGray}
          />
          <HTButton
            text={'Artificial Neural Network'}
            textSize={12}
            textColor={Colors.Black}
            style={[styles.button]}
            height={Dimensions.Height * 0.035}
            width={Dimensions.Width * 0.42}
            backgroundColor={Colors.LightestGray}
          />
          <HTButton
            text={'Linear Regression'}
            textSize={12}
            textColor={Colors.Black}
            style={[styles.button]}
            height={Dimensions.Height * 0.035}
            width={Dimensions.Width * 0.35}
            backgroundColor={Colors.LightestGray}
          />
          <HTButton
            text={'Decision Trees'}
            textSize={12}
            textColor={Colors.Black}
            style={[styles.button]}
            height={Dimensions.Height * 0.035}
            width={Dimensions.Width * 0.35}
            backgroundColor={Colors.LightestGray}
          />
        </View>

        <HTText
          text={'How the Specialization Works'}
          bold
          size={Fonts.size.font20}
          textColor={'black'}
          styles={styles.skilltitle}
        />

        <View style={styles.specializationcontainer}>
          <View style={styles.specializationdetail}>
            <HTText
              text={'Take Courses'}
              size={Fonts.size.font14}
              textColor={'black'}
              styles={styles.specializationtitle}
            />

            <HTText
              text={'Hands-on Project'}
              size={Fonts.size.font14}
              textColor={'black'}
              styles={styles.specializationtitle}
            />

            <HTText
              text={'Earn a Certificate'}
              size={Fonts.size.font14}
              textColor={'black'}
              styles={styles.specializationtitle}
            />
          </View>
          <View style={styles.arrow}>
            <Icon1
              style={styles.arrow}
              name="chevron-down"
              size={12}
              color="#33363F"
            />
            <Icon1
              style={styles.arrow}
              name="chevron-down"
              size={12}
              color="#33363F"
            />
            <Icon1
              style={styles.arrow}
              name="chevron-down"
              size={12}
              color="#33363F"
            />
          </View>
        </View>

        <HTText
          text={'There are 3 courses in this specialization'}
          size={Fonts.size.font15}
          textColor={'black'}
          styles={styles.coursetitle}
        />

        <View style={styles.specializationcontainer}>
          <View style={styles.specializationdetail}>
            <HTText
              text={'Course 1'}
              size={Fonts.size.font14}
              textColor={'black'}
              styles={styles.specializationtitle}
            />

            <HTText
              text={'Course 2'}
              size={Fonts.size.font14}
              textColor={'black'}
              styles={styles.specializationtitle}
            />

            <HTText
              text={'Course 3'}
              size={Fonts.size.font14}
              textColor={'black'}
              styles={styles.specializationtitle}
            />
          </View>
          <View style={styles.arrow}>
            <Icon1
              style={styles.arrow}
              name="chevron-down"
              size={12}
              color="#33363F"
            />
            <Icon1
              style={styles.arrow}
              name="chevron-down"
              size={12}
              color="#33363F"
            />
            <Icon1
              style={styles.arrow}
              name="chevron-down"
              size={12}
              color="#33363F"
            />
          </View>
        </View>

        <HTText
          text={'Instructor'}
          bold
          size={Fonts.size.font18}
          textColor={'black'}
          styles={styles.coursetitle}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 15,
            paddingVertical: 15,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Icon1 name="user-alt" size={40} color="#222222" />
            <View style={{marginLeft: responsiveWidth(2)}}>
              <HTText
                text={'Andrew ng'}
                bold
                size={Fonts.size.font14}
                textColor={'black'}
              />
              <HTText
                text={'Instructor'}
                size={Fonts.size.font12}
                textColor={'black'}
                styles={{paddingHorizontal: 2}}
              />
            </View>
          </View>
          <View style={{paddingHorizontal: 10}}>
            <Icon1
              style={styles.arrow}
              name="chevron-right"
              size={15}
              color="#33363F"
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 15,
            paddingVertical: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Icon1 name="user-alt" size={40} color="#222222" />
            <View style={{marginLeft: responsiveWidth(2)}}>
              <HTText
                text={' Eddy Shyu'}
                bold
                size={Fonts.size.font14}
                textColor={'black'}
              />
              <HTText
                text={'Curriculum Architect'}
                size={Fonts.size.font12}
                textColor={'black'}
                styles={{paddingHorizontal: 2}}
              />
            </View>
          </View>
          <View style={{paddingHorizontal: 10}}>
            <Icon1
              style={styles.arrow}
              name="chevron-right"
              size={15}
              color="#33363F"
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 15,
            paddingVertical: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Icon1 name="user-alt" size={40} color="#222222" />
            <View style={{marginLeft: responsiveWidth(2)}}>
              <HTText
                text={'Arti Bagul'}
                bold
                size={Fonts.size.font14}
                textColor={'black'}
              />
              <HTText
                text={'Curriculum Engineer'}
                size={Fonts.size.font12}
                textColor={'black'}
                styles={{paddingHorizontal: 2}}
              />
            </View>
          </View>
          <View style={{paddingHorizontal: 10}}>
            <Icon1
              style={styles.arrow}
              name="chevron-right"
              size={15}
              color="#33363F"
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 15,
            paddingVertical: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Icon1 name="user-alt" size={40} color="#222222" />
            <View style={{marginLeft: responsiveWidth(2)}}>
              <HTText
                text={'Geoff Ladwig'}
                bold
                size={Fonts.size.font14}
                textColor={'black'}
              />
              <HTText
                text={'Curriculum Engineer'}
                size={Fonts.size.font12}
                textColor={'black'}
                styles={{paddingHorizontal: 2}}
              />
            </View>
          </View>
          <View style={{paddingHorizontal: 10}}>
            <Icon1
              style={styles.arrow}
              name="chevron-right"
              size={15}
              color="#33363F"
            />
          </View>
        </View>
        <HTText
          text={'Start Learning Today'}
          bold
          size={Fonts.size.font18}
          textColor={'black'}
          styles={styles.coursetitle}
        />

        <View style={styles.coursecontainer}>
          <Icon1 name="caret-right" size={16} color="#33363F" />
          <HTText
            text={'Shareable Specialization and Course Certificates'}
            bold
            size={Fonts.size.font10}
            textColor={'black'}
          />
        </View>
        <View style={styles.coursecontainer}>
          <Icon1 name="caret-right" size={16} color="#33363F" />
          <HTText
            text={'Shareable Specialization and Course Certificates'}
            bold
            size={Fonts.size.font10}
            textColor={'black'}
          />
        </View>
        <View style={styles.coursecontainer}>
          <Icon1 name="caret-right" size={16} color="#33363F" />
          <HTText
            text={'Shareable Specialization and Course Certificates'}
            bold
            size={Fonts.size.font10}
            textColor={'black'}
          />
        </View>
        <View style={styles.coursecontainer}>
          <Icon1 name="caret-right" size={16} color="#33363F" />
          <HTText
            text={'Shareable Specialization and Course Certificates'}
            bold
            size={Fonts.size.font10}
            textColor={'black'}
          />
        </View>
        <View style={styles.coursecontainer}>
          <Icon1 name="caret-right" size={16} color="#33363F" />
          <HTText
            text={'Shareable Specialization and Course Certificates'}
            bold
            size={Fonts.size.font10}
            textColor={'black'}
          />
        </View>
        <View style={styles.coursecontainer}>
          <Icon1 name="caret-right" size={16} color="#33363F" />
          <HTText
            text={'Shareable Specialization and Course Certificates'}
            bold
            size={Fonts.size.font10}
            textColor={'black'}
          />
        </View>
        <View style={styles.coursecontainer}>
          <Icon1 name="caret-right" size={16} color="#33363F" />
          <HTText
            text={'Shareable Specialization and Course Certificates'}
            bold
            size={Fonts.size.font10}
            textColor={'black'}
          />
        </View>

        <View style={styles.buttonbox}>
          <TouchableOpacity style={styles.container1}>
            <Text style={styles.text}>Enroll Now</Text>
            <Text style={styles.text1}>Starts 12 Dec</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </HTWrapper>
  );
};

export default CourseDetails;
