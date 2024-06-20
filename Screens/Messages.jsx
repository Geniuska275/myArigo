import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import constants from "expo-constants";

const Messages = ({navigation}) => {
  const {touch,container,touchy,touches}=styles;
  return (
    <SafeAreaView style={container}>
        <Header navigation={navigation}/>
      <Text>Messages</Text>
    </SafeAreaView>
  )
}

export default Messages

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#fefefe",
    marginTop: constants.statusBarHeight,
   
   },
})