import { ImageBackground, SafeAreaView, StyleSheet, Text, View,TextInput,TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import NewHeader from '../Components/NewHeader'
import constants from "expo-constants";
import { Entypo } from '@expo/vector-icons';
import Sponsored from '../Components/Sponsored';


const HomeScreen = () => {
    const {image, container} = styles;
  return (
    <SafeAreaView style={container}>
        <NewHeader/>
      <ScrollView>
        <ImageBackground source={require("./myarigo_bg.jpg")}  style={image}>
           <View style={{
            postion:"absolute",
            flexDirection:"row",
            alignItems:"center",
            gap:10,
            bottom:100,
            alignSelf:"center",
            marginHorizontal:20
           }}>
            <Text style={{
              fontWeight:"bold",
              color:"black",
              fontSize:18
            }}>Fastest way to find anything in </Text>
            <View style={{
              backgroundColor:"#243c56",
              borderRadius:30,
              flexDirection:"row",
              paddingVertical:5,
              paddingHorizontal:10,
              alignItems:"center"
            }}>
            <Entypo name="location-pin" size={20} color="white" />
            <Text style={{
              fontWeight:"bold",
              color:"white"
            }}>Nigeria</Text>
            </View>

           </View>
           <View style={{
            position:"absolute",
            top:100,
            flexDirection:"row",
            justifyContent:"space-between",
            gap:5,
            width:350,
            backgroundColor:"white",
            alignSelf:"center",
            paddingVertical:10,
            borderRadius:30
           }}>
            <TextInput style={{width:250,padding:10}} placeholder="Search here..." />
            <TouchableOpacity style={{
              backgroundColor:"#337ab7",
              paddingVertical:10,
              borderRadius:30,
              paddingHorizontal:20,
              marginRight:5
            }}>
              <Text style={{
                color:"white"
              }}>Search</Text>
            </TouchableOpacity>             
           </View>
           <View style={{
            position:"absolute",
            bottom:50
           }}>
           <Text style={{fontWeight:"bold",color:"white",fontSize:16,marginHorizontal:20,marginBottom:10}}>Shop from any market in Nigeria from the comfort of your home and buy from verified sellers.</Text>
           <TouchableOpacity style={{
            paddingHorizontal:10,
            backgroundColor:"#337ab7",
            width:200,
            paddingVertical:10,
            alignSelf:"center",
            borderRadius:10
           }}>
            <Text style={{textAlign:"center",color:"white",fontWeight:"bold",}}>Let's Assist you</Text>
           </TouchableOpacity>
           </View>
        </ImageBackground>
        <Sponsored/>

        </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    image: {
       
        resizeMode: 'cover', // Cover the entire area of the container
        justifyContent: 'center', // Center the content vertically
        height:320,
        position:"relative"
      },
      container:{     
          flex:1,
          backgroundColor:"#fefefe",
          marginTop: constants.statusBarHeight,
         
      }
})