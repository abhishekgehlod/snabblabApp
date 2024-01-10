import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/Splash';
import Login1 from '../screens/Login1';
import Login2 from '../screens/Login2';
import ForgetPasswordScreen from '../screens/ForgetPasswordScreen';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import SingupScreen from '../screens/SingupScreen';
import Home from '../screens/Home';


const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}}/>
    <Stack.Screen name="Login1" component={Login1} options={{headerShown:false}}/>
    <Stack.Screen name="Login2" component={Login2} options={{headerShown:false}}/>
    <Stack.Screen name="ForgetPasswordScreen" component={ForgetPasswordScreen} options={{headerShown:false}}/>
    <Stack.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} options={{headerShown:false}}/>
    <Stack.Screen name="SingupScreen" component={SingupScreen} options={{headerShown:false}}/>
    <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
    
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default RootNavigation