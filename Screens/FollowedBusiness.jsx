import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React ,{useEffect,useState} from 'react'
import Header from '../Components/Header'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FollowedBusiness = () => {



  const [userData, setUserData] =useState({})
  async function getUserData(){

    const baseUrl = `https://app.myarigo.com/api/user/follow_business`
    const token = await AsyncStorage.getItem("token")
    const response = await axios.get(baseUrl,{
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
    console.log(response.data)
    setUserData(response.data)
  }
  
  useEffect(()=>{
    getUserData()
  }, [])
  return (
    <SafeAreaView>
        <Header/>
        <Text style={styles.text}>Followed Business</Text>
        <Text style={{alignSelf:"center",marginTop:10}}>You are not following any business ! </Text>



    
    </SafeAreaView>
  )
}

export default FollowedBusiness

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