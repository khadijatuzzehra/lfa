import React from 'react';
import MainContainer from './MainContainer';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {ApiProvider} from './src/context/api.context';
import store from './src/store/Store';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  return (
    <ApiProvider>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Provider store={store}>
        <MainContainer />
      </Provider>
    </ApiProvider>
  );
};

export default App;
