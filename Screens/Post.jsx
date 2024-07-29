import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import NewHeader from '../Components/NewHeader'
import constants from "expo-constants";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Post = () => {
    const navigation = useNavigation();
    const [posts,setPosts]= useState([])
   
    const getAllPost = async ()=>{
        const baseUrl = "https://app.myarigo.com/api/posts"
        try {
          const token = await AsyncStorage.getItem("token")
          const response = await axios.get(baseUrl,{
            headers:{
              Authorization: `Bearer ${token}`
            }
          })
          setPosts(response.data.data.posts.data)
    
        } catch (error) {
          console.error('Error:', error);
        }
      }
      useEffect(()=>{
        getAllPost();
      },[])
    
      console.log(posts)
  return (
    <SafeAreaView style={styles.container}>
        <NewHeader/>
        <Text style={styles.text}>Posts</Text>
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
        <FlatList
    
      data={posts}
   
      renderItem={({ item }) => (
        <View style={{
            width:320,
            marginHorizontal:20,
            marginBottom:40,
            backgroundColor:"#ffffff",
            shadowColor: "#000",
          
            height:220,
            borderWidth:0.5,
            borderColor:"gray",
            borderRadius:10,
            margin:10,
            position:"relative",
            alignSelf:"center"
          
          }}>
           {item.images.map((image)=>(
             
            <Image 
             source={{
               uri:image.image_url
             }} 
             style={{
               width:"100%",
               height:"100%",
               borderTopLeftRadius:10,
               borderTopRightRadius:10,
             }}/>
   
           ))
         
         
         
         }
             <View style={{
               position:"absolute",
               width:"90%",
               height:80,
               backgroundColor:"#ffffff",
               marginHorizontal:10,
               bottom:2,
               borderRadius:10,
             }}>
               <Text style={{
                 fontWeight:"bold",
                 alignItems:"center",
                 fontSize:12,
                 marginHorizontal:10,
                 marginVertical:5
               }}>{item.title}</Text>
               <View style={{flexDirection:"row",justifyContent:"space-around",alignItems:"center",marginVertical:10}}>
                 <View style={{flexDirection:"row",alignItems:"center"}}>
                 <AntDesign name="like2" size={24} color="black" />
                 <Text>0</Text>
                 </View>
                 <View style={{flexDirection:"row",alignItems:"center"}}>
                 <EvilIcons name="comment" size={24} color="black" />
                 <Text>0</Text>
                 </View>
                 <View style={{flexDirection:"row",alignItems:"center"}}>
                 <FontAwesome name="eye" size={24} color="black" />
                 <Text>{item.view}</Text>
                 </View>
   
   
               </View>
   
             </View>
         
          </View>
      )}
    />


      
    </SafeAreaView>
  )
}

export default Post

const styles = StyleSheet.create({
    container:{flex: 1,
        backgroundColor: "white",
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
      },

})