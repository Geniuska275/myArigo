import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Components/Header'

const BusinessFollowed = () => {
  return (
    <SafeAreaView>
        <Header/>
        <Text style={styles.text}>Business Followed</Text>
        <Text style={{alignSelf:"center",marginTop:10}}>You have no business followers !</Text>



    
    </SafeAreaView>
  )
}

export default BusinessFollowed

const styles = StyleSheet.create({
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