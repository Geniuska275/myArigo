import { View, Text,StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import constants from "expo-constants";
import Header from '../Components/Header';

const Services = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <Text style={{color:"red"}}>services</Text>
    </SafeAreaView>
  )
}

export default Services;
const styles = StyleSheet.create({
  container:{flex: 1,
    backgroundColor: "white",
    marginTop: constants.statusBarHeight,
  },
})