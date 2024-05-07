import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import Header from '../Components/Header'
import constants from "expo-constants";

const Products = () => {
  return (
    <SafeAreaView style={styles.container}>
    <Header/>
    <Text style={{color:"red"}}>AdvertsScreen</Text>
  </SafeAreaView>
  )
}

export default Products
const styles = StyleSheet.create({
  container:{flex: 1,
    backgroundColor: "white",
    marginTop: constants.statusBarHeight,
  },
})