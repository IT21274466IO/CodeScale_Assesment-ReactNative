import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import CharacterListScreen from '../screens/CharacterListScreen';
import ProfileScreen from '../screens/ProfileScreen';
import useAuth from '../hooks/useAuth';
import CharacterDetailScreen from '../screens/CharacterDetailsScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {

  const {user} = useAuth();

  if(user){
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
          <Stack.Screen name="UserList" options={{headerShown: false}} component={CharacterListScreen} />
          <Stack.Screen name="Profile" options={{headerShown: false}} component={ProfileScreen} />
          <Stack.Screen name="CharacterDetail" options={{headerShown: false}} component={CharacterDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Welcome'>
          <Stack.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen} />
          <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
          <Stack.Screen name="SignUp" options={{headerShown: false}} component={SignUpScreen} />
          <Stack.Screen name="UserList" options={{headerShown: false}} component={CharacterListScreen} />
          <Stack.Screen name="Profile" options={{headerShown: false}} component={ProfileScreen} />
          <Stack.Screen name="CharacterDetail" options={{headerShown: false}} component={CharacterDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }

  
}