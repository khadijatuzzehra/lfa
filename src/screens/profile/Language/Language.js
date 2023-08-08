import React, {useState} from 'react';
import {SafeAreaView, Text, Alert} from 'react-native';
import Header from '../../../components/Profile/Header';
import CustomButton from '../../../components/Auth/CustomButton';
import {useAxios} from '../../../../src/context/api.context';
import colors from '../../../theme/Colors';
import dimensions from '../../../theme/Dimensions';

const Language = ({navigation}) => {
  const {get, post} = useAxios();
  const [getData, setGetData] = useState('');
  const [postData, setPostData] = useState('');
  const handleStatusCode = (statusCode, response) => {
    if (statusCode == 200) {
      Alert.alert('Success', 'Song name: ' + response);
    }
    if (statusCode == 401) {
      Alert.alert('Access token is invalid', response);
    }
    if (statusCode == 403) {
      Alert.alert('Forbidden', response);
    }
  };
  const apiCall = () => {
    setPostData('');
    setGetData('');
    get('tracks/5iCY0TXNImK4hyKfcplQsg?si=1zyiaR60RMaN_QoiondDaw', {
      success: async res => {
        console.log(res.data.album);
        setGetData(res.data.album);
        handleStatusCode(res.status, res.data.album.name);
      },
      error: async error => {
        console.log(error.response.data.error);
        handleStatusCode(
          error.response.data.error.status,
          error.response.data.error.message,
        );
      },
    });
  };
  const apiCallPost = () => {
    setPostData('');
    setGetData('');
    let params = {cat: 'movies', count: '10'};
    post('users/317lgelaf4fdkdg4abupoxpw3nca/playlists', params, {
      success: async res => {
        console.log(res);
        setPostData(res);
        handleStatusCode(res.status);
      },
      error: async error => {
        console.log(error.response.data.error);
        handleStatusCode(
          error.response.data.error.status,
          error.response.data.error.message,
        );
      },
    });
  };

  return (
    <SafeAreaView>
      <Header text="Language" />
      <CustomButton
        text="Get Request"
        height={dimensions.Height / 20}
        width={dimensions.Width / 1.1}
        backgroundColor={colors.Primary}
        color={colors.White}
        onClick={apiCall}
      />
      <CustomButton
        text="Post Request"
        height={dimensions.Height / 20}
        width={dimensions.Width / 1.1}
        backgroundColor={colors.Primary}
        color={colors.White}
        onClick={apiCallPost}
      />
      <Text style={{color: 'black', marginLeft: 20}}>GET DATA</Text>
      <Text style={{color: 'black', marginLeft: 20}}>
        {JSON.stringify(getData)}
      </Text>
      <Text style={{color: 'black'}}>
        ___________________________________________________________________
      </Text>
      <Text style={{color: 'black', marginLeft: 20}}>POST DATA</Text>

      <Text style={{color: 'black', marginLeft: 20}}>
        {JSON.stringify(postData)}
      </Text>
    </SafeAreaView>
  );
};

export default Language;
