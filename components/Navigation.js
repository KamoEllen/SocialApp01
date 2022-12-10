import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import FriendScreen from '../screens/FriendScreen';
import MessagesScreen from '../screens/MessagesScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import VideosScreen from '../screens/VideosScreen';
import PagesScreen from '../screens/PagesScreen';
import HomeScreen from '../screens/HomeScreen';


const Stack = createStackNavigator();

const screenOptions = {
    headerShown: false
}

const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator
    initialRouteName="VideosScreen"
    screenOptions={screenOptions}
    >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="FriendScreen" component={FriendScreen} />
        <Stack.Screen name="MessagesScreen" component={MessagesScreen} />
        <Stack.Screen name="NotificationsScreen" component={NotificationsScreen} />
        <Stack.Screen name="VideosScreen" component={VideosScreen} />
        <Stack.Screen name="PagesScreen" component={PagesScreen} />
        
    </Stack.Navigator>
  </NavigationContainer>
 )
export default Navigation
