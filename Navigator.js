import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import First from './First';
import Second from './Second';

const stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <stack.Navigator screenOptions={{ headerShown: false}}>
      <stack.Group>
        <stack.Screen name='First' component={First}></stack.Screen>
        <stack.Screen name='Second' component={Second}></stack.Screen>
      </stack.Group>
    </stack.Navigator>
  )
}

export default Navigator;