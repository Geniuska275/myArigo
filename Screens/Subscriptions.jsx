import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useState ,useEffect} from 'react'
import Header from '../Components/Header'
import { ScrollView } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import constants from "expo-constants";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Subscription from '../Components/Subscription';


const Subscriptions = ({navigation}) => {
    const {touch,container,touchy,touches}=styles;
    const [Subscriptions,setSubscriptions]=useState([])

    async function getSubData(){
        const slug = await AsyncStorage.getItem("slug")
  
  
        const baseUrl = `https://app.myarigo.com/api/subscription_plans`
        const token = await AsyncStorage.getItem("token")
        const response = await axios.get(baseUrl,{
          headers:{
            Authorization: `Bearer ${token}`
          }
        })
        console.log(response.data)
        setSubscriptions(Object.values(response.data.data)[0])
      }
      
      useEffect(()=>{
        getSubData()
      }, [])
  
  



  return (
    <SafeAreaView style={container}>
        <Header navigation={navigation}/>
        <Text style={styles.text}>Subscriptions</Text>
        <FlatList 
         data={Subscriptions}
         keyExtractor={(item,index)=>index.toString()}
         renderItem={({item})=><Subscription item={item} navigation={navigation}/>}/>
          
    </SafeAreaView>
  )
}

export default Subscriptions

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