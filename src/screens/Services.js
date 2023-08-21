/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Colors from '../theme/Colors';

const Services = () => {
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
        <Text style={{color: Colors.White}}>Explore</Text>
      </View>
    </SafeAreaView>
  );
};

export default Services;
