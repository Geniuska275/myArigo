import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import constants from "expo-constants";

const PostScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
    <Header/>
    <Text style={{color:"red"}}>AdvertsScreen</Text>
  </SafeAreaView>
  )
}

export default PostScreen

const styles = StyleSheet.create({
  container:{flex: 1,
    backgroundColor: "white",
    marginTop: constants.statusBarHeight,
  },
})