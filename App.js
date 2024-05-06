import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image} from 'react-native';
import {logo} from "./arigo-logo.png"
import SignupScreen from './Screens/SignupScreen';
import LoginScreen from './Screens/LoginScreen';

export default function App() {
  return (
    <View style={styles.container}>
       <LoginScreen/>
       
      <StatusBar  barStyle="light-content" backgroundColor='white'/>
    </View>
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
