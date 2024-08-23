import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React ,{useEffect,useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../Components/Header'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Mycv = ({navigation}) => {
    const Navigation=useNavigation()
    const [userData, setUserData] =useState({})
    async function getUserData(){
      const slug = await AsyncStorage.getItem("slug")


      const baseUrl = `https://app.myarigo.com/api/cv/${slug}`
      const token = await AsyncStorage.getItem("token")
      const response = await axios.get(baseUrl,{
        headers:{
          Authorization: `Bearer ${token}`
        }
      })
      console.log(response.data)
      setUserData(response.data.user)
    }
    
    useEffect(()=>{
      getUserData()
    }, [])


  return (
    <SafeAreaView>
        <Header navigation={navigation}/>
      <Text style={{
        alignSelf:"center",
        marginVertical:10
      }}> No CV Found </Text>
      <TouchableOpacity onPress={()=>Navigation.navigate("AddScreen")} style={{
     alignSelf:"center"
      }}>
      <Text style={{fontWeight:"bold",color:"#679eca"}}>Click here to Add.</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Mycv

const styles = StyleSheet.create({})