import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {handleDeleteData} from '../../../utils/GlobalFunctions';
import AlertBox from '../../../components/Profile/AlertBox';
import TextCustom from '../../../components/Auth/TextCustom';
import Header from '../../../components/Profile/Header';
import Images from '../../../utils/Images';
import Data from '../../../utils/Data';
import colors from '../../../theme/Colors';
import styles from '../SharedStyles';

const Projects = () => {
  const navigation = useNavigation();
  const [projects, setProjects] = useState(Data.Projects);
  const [isModalVisible, setModalVisible] = useState(false);
  const [itemIdToDelete, setItemIdToDelete] = useState(null);
  const handleNav = () => {
    navigation.navigate('EditProjects');
  };
  const handleDelete = itemId => {
    setModalVisible(true);
    setItemIdToDelete(itemId);
  };
  const handleDeleteConfirmed = async () => {
    let updatedData = await handleDeleteData(projects, itemIdToDelete);
    setProjects(updatedData);
    setModalVisible(false);
    setItemIdToDelete(null);
  };

  const handleCancelDelete = () => {
    setModalVisible(false);
    setItemIdToDelete(null);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header text="Projects" />
      <ScrollView>
        <View style={styles.bottom}>
          {projects.map(item => (
            <View style={styles.component} key={item.id}>
              <View style={styles.textContainer}>
                <TextCustom
                  text={item.projectName}
                  textType="CompTitles"
                  color={colors.Black}
                />
                <TextCustom
                  text={item.role}
                  textType="Role"
                  color={colors.TextColor}
                />
                <TextCustom
                  text={item.years}
                  textType="Date"
                  color={colors.Placeholder}
                />
                <TextCustom
                  text={item.description}
                  textType="Description"
                  color={colors.Black}
                />
                <Text style={styles.text}>
                  Skills:{' '}
                  <Text style={styles.skills}>{item.skills.join(', ')}</Text>
                </Text>
              </View>
              <View style={styles.manageContainer}>
                <TouchableOpacity onPress={handleNav}>
                  <Images.EditOutline style={styles.icons} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleDelete(item.id)}>
                  <Images.DeleteOutline style={styles.icons} />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.AddButton}>
        <Images.Add />
      </TouchableOpacity>
      <AlertBox
        text="Delete Project"
        textDescription="Are you sure you want to delete Project?"
        isVisible={isModalVisible}
        onCancel={handleCancelDelete}
        onConfirm={handleDeleteConfirmed}
        icon="DeleteOutline"
      />
    </SafeAreaView>
  );
};

export default Projects;
