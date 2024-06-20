import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import Header from '../Components/Header'
import constants from "expo-constants";

const Notification = ({navigation}) => {
  return (
    <SafeAreaView  style={styles.container}>
        <Header navigation={navigation}/>
      <Text>Notification</Text>
    </SafeAreaView>
  )
}

export default Notification

const styles = StyleSheet.create({
  container:{flex: 1,
    backgroundColor: "white",
    marginTop: constants.statusBarHeight,
  },
})