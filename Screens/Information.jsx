import { 
    ScrollView, 
    StyleSheet, 
    Text, 
    TouchableOpacity,
     View,
     Alert, 
     Image,
     KeyboardAvoidingView,
     Platform } from 'react-native'
  import AsyncStorage from '@react-native-async-storage/async-storage';
  import React, { useEffect, useState } from 'react'
  import { SafeAreaView } from 'react-native-safe-area-context'
  import Header from '../Components/Header'
  import { useNavigation } from '@react-navigation/native'
  import { TextInput } from 'react-native-gesture-handler';
  import RNPickerSelect from 'react-native-picker-select';
  import { Entypo } from '@expo/vector-icons';
  import * as ImagePicker from "expo-image-picker"
  import { ActivityIndicator } from 'react-native'
  import SelectDropdown from 'react-native-select-dropdown'
  import axios from 'axios';
  
  const Information = ({navigation}) => {
      const Navigation=useNavigation();
     
       const HandleSubmit=()=>{}            
  
    return (
  
      <SafeAreaView>
          <Header navigation={navigation}/>
          
       <KeyboardAvoidingView behavior="padding" >
          <ScrollView>
  
          <View style={{
            width:380,
            height:550,
            backgroundColor:"white",
            alignSelf:"center",
            marginTop:50,
            marginBottom:80,
            borderRadius:20,
            marginHorizontal:20
           
          }}>
           <View style={{
            alignSelf:"center"
           }}>
            <Text style={{
              fontWeight:"bold",
              fontSize:25,
              marginBottom:20,
              marginTop:20
            }}
            >Bank Account Information :</Text>

            <Text  style={{
              fontWeight:"bold",
              fontSize:25,
              marginBottom:20,
              marginTop:20
            }}>Pay #41,500 to the account below</Text>  
           </View>
           
           <View style={{
            flexDirection:"row",
            alignItems:"center",
            marginHorizontal:20
           }}>
            <Text style={{
              fontWeight:"bold",
              fontSize:20,
              marginBottom:10,
              marginTop:10
            }}>Account Holder :</Text>
            <Text style={{
              fontWeight:"bold",
              fontSize:20,
              marginLeft:10
            }}>Arigo Energy</Text>
           </View>

           <View style={{
            flexDirection:"row",
            alignItems:"center",
            marginHorizontal:20
           }}>
            <Text style={{
              fontWeight:"bold",
              fontSize:20,
              marginBottom:10,
              marginTop:10
            }}>Account Number :</Text>
            <Text style={{
              fontWeight:"bold",
              fontSize:20,
              marginLeft:10
            }}>5400881912</Text>
           </View>
           <View style={{
            flexDirection:"row",
            alignItems:"center",
            marginHorizontal:20
           }}>
            <Text style={{
              fontWeight:"bold",
              fontSize:20,
              marginBottom:10,
              marginTop:10
            }}> Bank Name :</Text>
            <Text style={{
              fontWeight:"bold",
              fontSize:20,
              marginLeft:10
            }}>Providus Bank</Text>
           </View>

        



          
      <View style={{
          flexDirection:"row",
          marginHorizontal:20,
          position:"relative",
          alignItems:"center"
        }}>
        <Text style={{
            color:"#565b64",
            fontSize:20,
            marginBottom:10,
            marginTop:10
        }}>Proof of Transfer </Text>
        <Text style={{color:"red",fontSize:30,position:"absolute",right:Platform.OS==="ios"? 180:270,top:-1}}>*</Text>       
      </View>
      <TouchableOpacity onPress={()=>{}} 
        style={{ 
            marginHorizontal:20,
            
          }}>
       <Image source={require("./image-upload.png")} style={{width:100,height:100}}/>
    
      </TouchableOpacity>


<TouchableOpacity 
  onPress={HandleSubmit}

style={{
        backgroundColor:"green",
        padding:10,
        borderRadius:10,
        // marginHorizontal:40,
        width:340,
        marginVertical:20,
       
        alignSelf:"center",
        alignItems:"center",
        justifyContent:"center"
       }}>
        <Text style={{color:"white",fontWeight:"bold"}}>Confirm Transfer</Text>
       </TouchableOpacity>



   



          </View>
         
     
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
        
          </ScrollView>
          </KeyboardAvoidingView>
  
      </SafeAreaView>
    )
  }
  
  export default Information
  
  const styles = StyleSheet.create({
    dropdownButtonStyle: {
      width: 360,
      height: 40,
      marginHorizontal:20,
      backgroundColor: '#E9ECEF',
      borderRadius: 12,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 8,
    },
    dropdownButtonTxtStyle: {
      flex: 1,
      fontSize: 18,
      fontWeight: '500',
      color: '#151E26',
    },
    dropdownButtonArrowStyle: {
      fontSize: 28,
    },
    dropdownButtonIconStyle: {
      fontSize: 28,
      marginRight: 8,
    },
    dropdownMenuStyle: {
      backgroundColor: '#E9ECEF',
      borderRadius: 8,
    },
    dropdownItemStyle: {
      width: '100%',
      flexDirection: 'row',
      paddingHorizontal: 12,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 8,
    },
    dropdownItemTxtStyle: {
      flex: 1,
      fontSize: 18,
      fontWeight: '500',
      color: '#151E26',
    },
    dropdownItemIconStyle: {
      fontSize: 28,
      marginRight: 8,
    },
  })