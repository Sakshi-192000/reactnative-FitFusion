import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Home from '../components/Home';
import WelcomePage from '../components/WelcomePage';
import Exercise from '../components/Exercise';
import BodyParts, {BodyPartsCard} from '../components/BodyParts';
import ExerciseDetails from '../components/ExerciseDetails';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={WelcomePage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomePage"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Exercises"
        component={Exercise}
        options={{headerShown: false,
        presentation:'modal'
        }}
      />
      <Stack.Screen
        name="parts"
        component={BodyParts}
        options={{headerShown: false}}
      />
   <Stack.Screen
        name="Details"
        component={ExerciseDetails}
        options={{headerShown: false}}
      />

    </Stack.Navigator>
  );
};

export default MainNavigator;
