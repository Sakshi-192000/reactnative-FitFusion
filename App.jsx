/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import MainNavigator from './navigators/MainNavigator';

const App = () => {

  return (
    <NavigationContainer>
     <MainNavigator/>
    </NavigationContainer>
  )
};

export default App;
