import { ImageBackground, SafeAreaView, Alert,ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import AppButton from '../Components/AppButton';
import { FontAwesome } from '@expo/vector-icons';
import { Divider } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {LOGIN_ENDPOINT} from "@env"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import NewHeader from '../Components/NewHeader';
const LoginScreen = () => {
 
  const [Email, setEmail] = useState("aigbojie2020@gmail.com")
  const [Password, setPassword] = useState("Debbie2025")
  const [Secure, setSecure] = useState(false)
  const navigation = useNavigation();


  const handleSubmit= async ()=>{
    const baseUrl=LOGIN_ENDPOINT;
    const userData={
      email:Email,
      password:Password
    }
    try {
      const response = await axios.post(baseUrl,userData);
      await AsyncStorage.setItem("token", response.data.token)
      AsyncStorage.setItem("isLoggeedIn",JSON.stringify(true))
      Alert.alert(
        'Login',
        'Signedin successfully',
      );
      navigation.navigate("Home")
    } catch (error) {
      console.log(error)
      console.log(error.message)
      Alert.alert(
        'Error',
        `Invalid login detaiils`,  
      );
    }
  }

  return (
        
        <ImageBackground source={require('./login-bg.jpg')} style={styles.backgroundImage}>
         <SafeAreaView>
          <TouchableOpacity style={{
            width:60,
            height:60,
            borderRadius:30,
            position:"absolute",
            bottom:35,
            right:20,
            zIndex:10,
            backgroundColor:"#337ab7",
            justifyContent:"center",
            alignItems:"center"
          }}
          
          onPress={()=>navigation.navigate("HomeScreen")}>
           <MaterialCommunityIcons name="home" size={24} color="white" />
          </TouchableOpacity>
           <View style={styles.form}>
            <View style={styles.login}>
              <Text style={styles.text}>Login to Arigo</Text>
              <View style={{marginTop:30}}>
              <TextInput
              style={{ 
              height: 40, 
              borderBottomWidth: 1,
              borderColor:"gray",
              marginHorizontal:40,
              marginVertical:10 }}
              onChangeText={text => setEmail(text)}
              placeholder='Email'
              value={Email}
             />
           <View style={{position:"relative"}}>
           <TextInput
              style={{ 
              height: 40, 
              borderBottomWidth: 1,
              borderColor:"gray",
              marginHorizontal:40,
              marginVertical:10 }}
              onChangeText={text => setPassword(text)}
              placeholder='Password'
              value={Password}
              secureTextEntry={Secure}
             />
 {Secure ? 
<FontAwesome name="eye" size={24} color="black"  
  style={{
  position:"absolute",
  top:20,
  right:40}} onPress={()=>{
  setSecure(false)
}}/>:
<Entypo name="eye-with-line" size={24} color="black" 
  style={{
  position:"absolute",
  top:20,
  right:40
  }} 
  onPress={()=>{
  setSecure(true)  
}}/>
}      
          <AppButton title={"Login"} handleSubmit={handleSubmit}/>
           <View style={{position:"relative"}}>

          <Divider 
            style={{ 
            backgroundColor: 'black' ,
            marginHorizontal:40,
            marginTop:20}} />
          <Text 
            style={{
            backgroundColor:"#f9f9f9",
            width:70,
            position:"absolute",
            top:10,
            left:140}}>login with</Text>
           </View>
            </View>      

            </View>
            </View>
            <View style={styles.intro}>

              <Text 
                style={{
                color:"#fefefe",
                fontWeight:"bold",
                padding:"20",
                lineHeight:25,
                marginHorizontal:30,
                marginTop:30}}>Hello,Welcome to Myarigo ,the first Business platform for verified brands ,service and Business.Arigo perfectly illustrate the characteristics of a ladder that aids the process of climbing.We Connect Business,Brands and Services together. </Text>
               <Text style={{color:"#fefefe",fontWeight:"bold",marginHorizontal:30,marginTop:30}} >Don't have an account ?</Text>
            <View style={{flexDirection:"row",gap:4,marginHorizontal:30,marginTop:20}}>
            <TouchableOpacity onPress={()=>navigation.navigate("Signup")} style={{backgroundColor:"#6c757d",padding:10,borderRadius:10}}>
            <Text style={{color:"white",fontWeight:"bold"}}>Register</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={{}} style={{backgroundColor:"#6c757d",padding:10,borderRadius:10}}>
            <Text style={{color:"white",fontWeight:"bold"}}>Forgot Password</Text>
           </TouchableOpacity>
            </View>
            </View>


           </View>
         </SafeAreaView>
    </ImageBackground>
    
  )
}

export default LoginScreen

const styles = StyleSheet.create({

    backgroundImage: {
      flex: 1,
      width: '100%',
      height: '100%',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:"red"
    },
    form:{
      backgroundColor:"white",
      height:700,
      width:340,
      borderRadius:20,
      marginHorizontal:20,
      marginTop:40,
      xOffset:-2,
      yOffset:4,
      shadowColorIos:"#171717",
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation:4,
      shadowColorAndroid:"#171717",
      alignSelf:"center"
    },

    login:{
      flex:2,
      backgroundColor:"#f9f9f9",
      borderTopLeftRadius:10,
      borderTopRightRadius:10
    },
    intro:{
      flex:2,
      borderBottomLeftRadius:10,
      borderBottomRightRadius:10,
      backgroundColor:"#243c56"

    },
    text:{
      textAlign:"center",
      marginTop:20
    }
})