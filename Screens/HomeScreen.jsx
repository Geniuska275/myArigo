import { ImageBackground, SafeAreaView, StyleSheet, Text, View,TextInput,TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import NewHeader from '../Components/NewHeader'
import constants from "expo-constants";
import { Entypo } from '@expo/vector-icons';
import Sponsored from '../Components/Sponsored';
import MyCarousel from '../Components/Carousels';
import Product from '../Components/Product';
import Enquires from '../Components/Enquires';
import { useNavigation } from '@react-navigation/native';
import { nigeriaStatesAndLGAs } from '../data/states';
import { Picker } from "@react-native-picker/picker";

import Select from '../Components/select';
const HomeScreen = () => {
  const navigation=useNavigation()
    const {image, container} = styles;
    const [states,setState]=useState(nigeriaStatesAndLGAs)
    const[text, setText]=useState(null)
    const [selectedState,setSelectedState]=useState('Products')
    const[options,setOptions]=useState([
      'Products','Businesses','Posts','Cvs'
    ])
      const HandleCahnge=()=>{
        navigation.navigate(`${selectedState}`,{value: `${text}`})
      }

      console.log(text)
   
    
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
              color:"white",
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
            top:120,
            flexDirection:"row",
            justifyContent:"space-between",
            gap:5,
            width:370,
            backgroundColor:"white",
            alignSelf:"center",
            paddingVertical:10,
            borderRadius:30,
            height:50,

           }}>
            <Select newoptions={options} setSelectedState={setSelectedState}/>

            <TextInput style={{width:130,padding:10,paddingVertical:20}} placeholder={`Seach ${selectedState}`}
              onChangeText={text => setText(text)}
            
             />
            <TouchableOpacity style={{
              backgroundColor:"#337ab7",
              paddingVertical:10,
              borderRadius:30,
              height:35,
              paddingHorizontal:20,
              width:100,
              marginRight:8
             
            }}
            
            onPress={()=>HandleCahnge()}>
              <Text style={{
                color:"white"
              }}>Search</Text>
            </TouchableOpacity>             
           </View>
           <View style={{
            position:"absolute",
            bottom:50
           }}>
           <Text style={{fontWeight:"bold",color:"white",fontSize:16,marginHorizontal:20,
            }}>Shop from any market in Nigeria from the comfort of your home and buy from verified sellers.</Text>
           <TouchableOpacity style={{
            paddingHorizontal:10,
            backgroundColor:"#337ab7",
            width:200,
            paddingVertical:10,
            alignSelf:"center",
            borderRadius:10
           }}
           onPress={()=>navigation.navigate('Assist')}
           
           >
            <Text style={{textAlign:"center",color:"white",fontWeight:"bold",}}>Let's Assist you</Text>
           </TouchableOpacity>
           </View>
        </ImageBackground>
        <MyCarousel text={"Posts"} navigate={"Post"}/>

        <MyCarousel  text={"Auction"} navigate={"Auction"}/>
        <Product/>
       <TouchableOpacity style={{
         backgroundColor:"#337ab7",
         padding:10,
        borderRadius:10,
        marginHorizontal:20,
        paddingHorizontal:30,
        marginVertical:30,
        marginBottom:20,
        alignSelf:"center"
      }}>

        <TouchableOpacity 
        onPress={()=>navigation.navigate('Products',{value:""})}
        >
          <Text style={{color:"white",fontWeight:"bold",padding:5}}>More</Text>
        </TouchableOpacity>
       </TouchableOpacity>
         <Sponsored/> 
       <Enquires/>
        


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