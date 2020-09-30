import React from 'react';
import { createAppContainer, createSwitchNavigator, } from 'react-navigation';

import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import Step4 from './screens/Step4';

import Go from './screens/GoScreen';

import { AppTabNavigator } from './components/TabNavigator';


export default function App() {
  return (
    <AppContainer />
  );
}


const switchNavigator = createSwitchNavigator({
  WelcomeScreen: { screen: WelcomeScreen },
  AppTabNavigator: { screen: AppTabNavigator },
  Step4: { screen: Step4 },
  Go: { screen: Go },
})

const AppContainer = createAppContainer(switchNavigator);
