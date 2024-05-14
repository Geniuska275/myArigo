import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import constants from "expo-constants";
import { SafeAreaView } from 'react-native';
const AuctionScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
    <Header/>
    <Text style={styles.text}>Auctions</Text>
   
   </SafeAreaView>
  )
}

export default AuctionScreen;
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
    textTransform:"uppercase"
  }
})