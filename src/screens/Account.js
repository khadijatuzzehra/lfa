/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Colors from '../theme/Colors';

const Account = () => {
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <View
        style={{
          backgroundColor: Colors.Gray,
          margin: 20,
          borderRadius: 10,
          padding: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: Colors.White}}>Opportunity</Text>
      </View>
    </SafeAreaView>
  );
};

export default Account;
