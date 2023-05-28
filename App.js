import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import Navigator from './src/navigation/Navigator';

const App = () => {

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      // background: Colors.LightPrimary,
    },
  };

  return (
    // <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //   <Text>Boiler Plate</Text>
    // </SafeAreaView>

    <NavigationContainer theme={MyTheme}>
      <Navigator />
    </NavigationContainer>
  )
}

export default App