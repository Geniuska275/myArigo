import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image} from 'react-native';
import {logo} from "./arigo-logo.png"
import SignupScreen from './Screens/SignupScreen';
import LoginScreen from './Screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './navigations/AuthNavigator';
export default function App() {
  return (
    <NavigationContainer>
{/* 
    <View style={styles.container}>
       <LoginScreen/>
       
    </View> */}
    <AuthStack/>
      <StatusBar  barStyle="light-content" backgroundColor="#243c56"/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#243c56',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
