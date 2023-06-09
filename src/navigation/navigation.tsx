import React from 'react';
import Home from '../screen/Home/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Event from '../screen/Event/Event';
import WaveAnimation from '../screen/WaveAnimation/WaveAnimation';
import Start from '../screen/Start/Start';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen
          name="Start"
          component={Start}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Event"
          component={Event}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WaveAnimation"
          component={WaveAnimation}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
