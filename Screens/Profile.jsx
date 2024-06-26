import { View, Text,StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import constants from "expo-constants";
import Header from '../Components/Header';
import { Feather } from '@expo/vector-icons';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


import { TextInput } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
const Profile = ({navigation}) => {
  
  
  
  const [userData, setUserData] =useState({})
  async function getUserData(){
    const baseUrl = "https://app.myarigo.com/api/user"
    const token = await AsyncStorage.getItem("token")
    const response = await axios.get(baseUrl,{
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
    console.log("called")
    setUserData(response.data.user)
  }
  
  useEffect(()=>{
    getUserData()
    console.log("useEffect")
  }, [])
  console.log(userData)
  const [email, setEmail] = useState(userData.email)
  const [phone, setPhone] = useState(userData.phone)
  const [name, setName] = useState(userData.name)


    const emojisWithIcons = [{
        title:"Sort By"
      },
      {
        title:"Sort By"
      },
      ];
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation}/>
      <ScrollView>

      <View style={{
        flexDirection:"row",
        alignItems:"center",
        gap:10,
        marginHorizontal:20,
        marginVertical:10
      }}>
        <View style={{
          width:120,
          height:120,
          backgroundColor:"black",
          justifyContent:"center",
          alignItems:"center",
          borderRadius:10
        }}>
        <Feather name="camera" size={60} color="white" />
        </View>
        <View>
            <Text style={{
              fontWeight:"bold",
              marginBottom:5,
            }}>{userData.name}</Text>
            <Text style={{
              color:"gray"
            }}> Max file size is 5Mb</Text>
            <TouchableOpacity style={{
              paddingHorizontal:10,
              backgroundColor:"#337bb7",
              borderRadius:10,
              marginVertical:10
              
            }}>
                <Text style={{
                  color:"white",
                  fontWeight:"bold",
                  textTransform:"uppercase",
                  textAlign:"center",
                  paddingVertical:10,
                  paddingHorizontal:10,
                  borderRadius:10,
                  textTransform:"uppercase"
                }}>Change</Text>
            </TouchableOpacity>
        </View>

      </View>
      <Text style={{
        fontWeight:"bold",
        marginHorizontal:20,
        marginVertical:5,
        color:"#565b64",
        
      }}>Name</Text> 
        <TextInput
              style={{ 
                  height: 40, 
                  borderWidth: 1,
                  width:350,
                  borderRadius:10,
                  padding:5,
                  borderColor:"gray",
                  marginHorizontal:20,
                  marginVertical:5 }}
                  onChangeText={text =>setName(text)}
                  value={userData.name}
                  />
               <Text style={{
                 fontWeight:"bold",
                 marginHorizontal:20,
                 marginVertical:5,
                 color:"#565b64",
                 
                }}>Email</Text> 
        <TextInput
              style={{ 
                height: 40, 
                borderWidth: 1,
                width:350,
                borderRadius:10,
                borderColor:"gray",
                marginHorizontal:20,
                padding:5,
                marginVertical:5 }}
                onChangeText={text =>setEmail(text)}
                value={userData.email}
                />
               <Text style={{
                 fontWeight:"bold",
                 marginHorizontal:20,
                 marginVertical:5,
                 color:"#565b64",
                 
                }}>Mobile Number</Text> 
        <TextInput
              style={{ 
                height: 40, 
                borderWidth: 1,
                width:350,
                borderRadius:10,
                padding:5,
                borderColor:"gray",
                marginHorizontal:20,
                marginVertical:5 }}
                onChangeText={text =>setPhone(text)}
                value={userData.phone}
                />
               <Text style={{
            fontWeight:"bold",
            marginHorizontal:20,
            marginVertical:5,
            color:"#565b64",
            
          }}>Address</Text> 
        <TextInput
              style={{ 
                height: 40, 
                borderWidth: 1,
                width:350,
                borderRadius:10,
                borderColor:"gray",
                marginHorizontal:20,
                marginVertical:5 }}
                onChangeText={text =>(text)}
                value={""}
                />
                          <Text style={{
                            fontWeight:"bold",
                            marginHorizontal:20,
                            marginVertical:5,
                            color:"#565b64",
                            
                          }}>State</Text> 
                <SelectDropdown
    data={emojisWithIcons}
    onSelect={(selectedItem, index) => {
      console.log(selectedItem, index);
    }}
    renderButton={(selectedItem, isOpened) => {
      return (
        <View style={styles.dropdownButtonStyle}>
          <Text style={styles.dropdownButtonTxtStyle}>
            {(selectedItem && selectedItem.title) || 'Select'}
          </Text>
         
        </View>
      );
    }}
    renderItem={(item, index, isSelected) => {
      return (
        <View style={{...styles.dropdownItemStyle, ...(isSelected && {backgroundColor: '#D2D9DF'})}}>
          
          <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
        </View>
      );
    }}
    showsVerticalScrollIndicator={false}
    dropdownStyle={styles.dropdownMenuStyle}
    />
 
                          <Text style={{
                            fontWeight:"bold",
                            marginHorizontal:20,
                            marginVertical:10,
                            color:"#565b64",
                            
                          }}>City</Text> 
                <SelectDropdown
    data={emojisWithIcons}
    onSelect={(selectedItem, index) => {
      console.log(selectedItem, index);
    }}
    renderButton={(selectedItem, isOpened) => {
      return (
        <View style={styles.dropdownButtonStyle}>
          <Text style={styles.dropdownButtonTxtStyle}>
            {(selectedItem && selectedItem.title) || 'Select'}
          </Text>
         
        </View>
      );
    }}
    renderItem={(item, index, isSelected) => {
      return (
        <View style={{...styles.dropdownItemStyle, ...(isSelected && {backgroundColor: '#D2D9DF'})}}>
          
          <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
        </View>
      );
    }}
    showsVerticalScrollIndicator={false}
    dropdownStyle={styles.dropdownMenuStyle}
    />
       <TouchableOpacity style={{
         paddingHorizontal:10,
         backgroundColor:"#337bb7",
         borderRadius:10,
         marginVertical:10,
         width:200,
         marginHorizontal:20,
         marginVertical:20
         
        }}>
                <Text style={{
                  color:"white",
                  fontWeight:"bold",
                  textTransform:"uppercase",
                  textAlign:"center",
                  paddingVertical:10,
                  paddingHorizontal:10,
                  borderRadius:10,
                  textTransform:"uppercase"
                }}>Update</Text>
            </TouchableOpacity>
     
      
</ScrollView>
    </SafeAreaView>
  )
}

export default Profile;
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
    
    paddingVertical:15,
    marginTop:-3,
    fontWeight:"bold",
    color:"#243c56",
    // marginBottom:10
    textTransform:"uppercase"
  },
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