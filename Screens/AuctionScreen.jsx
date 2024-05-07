import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import constants from "expo-constants";
import { SafeAreaView } from 'react-native';
const AuctionScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
    <Header/>
    <Text style={{color:"red"}}>auctions</Text>
   </SafeAreaView>
  )
}

export default AuctionScreen;
const styles = StyleSheet.create({
  container:{flex: 1,
    backgroundColor: "white",
    marginTop: constants.statusBarHeight,
  },
})