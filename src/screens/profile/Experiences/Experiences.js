import React, {useState} from 'react';
import {SafeAreaView, View, TouchableOpacity} from 'react-native';
import {handleDeleteData} from '../../../utils/GlobalFunctions';
import {useNavigation} from '@react-navigation/native';
import AlertBox from '../../../components/Profile/AlertBox';
import TextCustom from '../../../components/Auth/TextCustom';
import Header from '../../../components/Profile/Header';
import Images from '../../../utils/Images';
import Data from '../../../utils/Data';
import styles from '../SharedStyles';
import colors from '../../../theme/Colors';

const Experiences = () => {
  const navigation = useNavigation();
  const [experiences, setExperiences] = useState(Data.Experience);
  const [isModalVisible, setModalVisible] = useState(false);
  const [itemIdToDelete, setItemIdToDelete] = useState(null);
  const handleNavigation = () => {
    navigation.navigate('EditExperiences');
  };
  const handleDelete = itemId => {
    setModalVisible(true);
    setItemIdToDelete(itemId);
  };
  const handleDeleteConfirmed = async () => {
    let updatedData = await handleDeleteData(experiences, itemIdToDelete);
    setExperiences(updatedData);
    setModalVisible(false);
    setItemIdToDelete(null);
  };

  const handleCancelDelete = () => {
    setModalVisible(false);
    setItemIdToDelete(null);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header text="Experiences" />
      <View style={styles.bottom}>
        {experiences.map(item => (
          <View style={styles.component} key={item.id}>
            <View style={styles.textContainer}>
              <TextCustom
                text={item.companyName}
                textType="CompTitles"
                color={colors.Black}
              />
              <TextCustom
                text={item.years}
                textType="Date"
                color={colors.placeholder}
              />
              <TextCustom
                text={item.role}
                textType="Role"
                color={colors.textColor}
              />
            </View>
            <View style={styles.manageContainer}>
              <TouchableOpacity onPress={() => handleNavigation()}>
                <Images.EditOutline style={styles.icons} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDelete(item.id)}>
                <Images.DeleteOutline style={styles.icons} />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
      <AlertBox
        text="Delete Experience"
        textDescription="Are you sure you want to delete Experience?"
        isVisible={isModalVisible}
        onCancel={handleCancelDelete}
        onConfirm={handleDeleteConfirmed}
        icon="DeleteOutline"
      />
      <TouchableOpacity style={styles.AddButton}>
        <Images.Add />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Experiences;
