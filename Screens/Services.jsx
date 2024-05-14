import { View, Text,StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import constants from "expo-constants";
import Header from '../Components/Header';

const Services = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <Text style={styles.text}>services</Text>
      
    </SafeAreaView>
  )
}

export default Services;
const styles = StyleSheet.create({
  container:{flex: 1,
    backgroundColor: "white",
    marginTop: constants.statusBarHeight,
  },
  text:{
    textAlign:"center",
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "black",
    shadowOpacity: 0.1,
    elevation:1,
    
    paddingVertical:15,
    marginTop:-3,
    fontWeight:"bold",
    color:"#243c56",
    // marginBottom:10
    textTransform:"uppercase"
  }
})