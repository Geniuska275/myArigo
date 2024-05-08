import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import constants from "expo-constants";
import Displays from '../Components/Displays';
import { ScrollView } from 'react-native';
const AdvertsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <ScrollView>

      <Displays route={"Post"} name={"Posts"}/>
      <Displays route={"Adverts"} name={"Adverts"}/>
      <Displays/>
      </ScrollView>


    </SafeAreaView>
  )
}

export default AdvertsScreen

const styles = StyleSheet.create({
  container:{flex: 1,
    backgroundColor: "white",
    marginTop: constants.statusBarHeight,
  },
})