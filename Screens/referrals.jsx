import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState ,useEffect} from 'react'

import constants from "expo-constants";
import Header from '../Components/Header';



const Refferals = ({navigation}) => {

  return (
    <SafeAreaView style={styles.container}>
        <Header navigation={navigation}/>
        <Text style={styles.text}>referrals</Text>
        <Text style={{fontWeight:"bold",alignSelf:"center",marginTop:20}}>My Refferal Link</Text>
       
    </SafeAreaView>
  )
}

export default Refferals

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fefefe",
        marginTop: constants.statusBarHeight,
       
       },
    text:{
        textAlign:"center",
        shadowOffset: { width: 2, height: 2 },
        shadowColor: "black",
        shadowOpacity: 0.1,
        elevation:1,   
        paddingVertical:20,
        marginTop:-3,
        fontWeight:"bold",
        color:"#a0a0a0",
        textTransform:"capitalize",
        backgroundColor:"#fafafa"
      }
})