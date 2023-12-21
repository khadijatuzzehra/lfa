import React from 'react';
import NavigationContainer from './src/navigation';
import {Provider} from 'react-redux';
import store from './src/store/Store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer />
    </Provider>
  );
};

export default App;
