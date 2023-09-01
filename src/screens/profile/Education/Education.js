import React, {useState} from 'react';
import {SafeAreaView, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {handleDeleteData} from '../../../utils/GlobalFunctions';
import AlertBox from '../../../components/Shared/AlertBox';
import TextCustom from '../../../components/Shared/TextCustom';
import Header from '../../../components/Profile/Header';
import Images from '../../../utils/Images';
import Data from '../../../utils/Data';
import styles from '../SharedStyles';
import colors from '../../../theme/Colors';

const Education = () => {
  const navigation = useNavigation();
  const [education, setEducation] = useState(Data.Educations);
  const [isModalVisible, setModalVisible] = useState(false);
  const [itemIdToDelete, setItemIdToDelete] = useState(null);

  const handleNavigation = () => {
    navigation.navigate('EditEducation');
  };
  const handleDelete = itemId => {
    setModalVisible(true);
    setItemIdToDelete(itemId);
  };
  const handleDeleteConfirmed = async () => {
    let updatedData = await handleDeleteData(education, itemIdToDelete);
    setEducation(updatedData);
    setModalVisible(false);
    setItemIdToDelete(null);
  };

  const handleCancelDelete = () => {
    setModalVisible(false);
    setItemIdToDelete(null);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header text="Education" />
      <View style={styles.bottom}>
        {education.map(item => (
          <View style={styles.component} key={item.id}>
            <View style={styles.textContainer}>
              <TextCustom
                text={item.instName}
                textType="CompTitles"
                color={colors.Black}
              />
              <TextCustom
                text={item.years}
                textType="Date"
                color={colors.Placeholder}
              />
              <TextCustom
                text={item.role}
                textType="Role"
                color={colors.TextColor}
              />
            </View>
            <View style={styles.manageContainer}>
              <TouchableOpacity onPress={() => handleNavigation(item)}>
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
        text="Delete Education"
        textDescription="Are you sure you want to delete Education?"
        isVisible={isModalVisible}
        onCancel={handleCancelDelete}
        onConfirm={handleDeleteConfirmed}
        icon="trash-outline"
      />
      <TouchableOpacity style={styles.AddButton}>
        <Images.Add />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Education;
