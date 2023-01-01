import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import User from './src/screens/UserScreen';
import Repo from './src/screens/RepoScreen';
import Home from './src/screens/Home';

const HomeStack = createNativeStackNavigator(); {
  // return <View>
  //   <Home />
  // </View>
  <NavigationContainer>
    <HomeStack.Navigator>
      <HomeStack.Screen name='Home' component={'Home'}/>
      <HomeStack.Screen name='User' component={'UserScreen'}/>
      <HomeStack.Screen name='Repo' component={'RepoScreen'}/>
    </HomeStack.Navigator>
  </NavigationContainer>;
}
export default App;

