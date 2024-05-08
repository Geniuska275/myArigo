import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import constants from "expo-constants";
const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <Text style={{color:"red"}}>Home screen</Text>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{flex: 1,
    backgroundColor: "white",
    marginTop: constants.statusBarHeight,
  },
})