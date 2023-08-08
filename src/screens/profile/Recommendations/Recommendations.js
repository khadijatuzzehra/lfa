import React, {useState} from 'react';
import {SafeAreaView, View, Image, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {handleDeleteData} from '../../../utils/GlobalFunctions';
import AlertBox from '../../../components/Profile/AlertBox';
import TextCustom from '../../../components/Auth/TextCustom';
import Header from '../../../components/Profile/Header';
import Images from '../../../utils/Images';
import Data from '../../../utils/Data';
import styles from '../SharedStyles';
import colors from '../../../theme/Colors';

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState(Data.Users);

  return (
    <SafeAreaView style={styles.container}>
      <Header text="Recommendations" />
      <View style={styles.bottom}>
        {recommendations.map(item => (
          <View style={styles.component} key={item.id}>
            <Image style={styles.profile} source={Images[item.user_image]} />
            <View style={styles.textContainer}>
              <TextCustom
                text={item.user_name}
                textType="CompTitles"
                color={colors.Black}
              />
              <TextCustom
                text={item.designation}
                textType="Labels"
                color={colors.Black}
              />
              <TextCustom
                text={item.date}
                textType="Date"
                color={colors.Headings}
              />
              <Text style={styles.recommendations}>{item.bio}</Text>
            </View>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Recommendations;
