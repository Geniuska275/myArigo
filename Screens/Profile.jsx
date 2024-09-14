import { View, Text,StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import constants from "expo-constants";
import Header from '../Components/Header';
import { Feather } from '@expo/vector-icons';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from "expo-image-picker"


import { TextInput } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
const Profile = ({navigation}) => {
  
  
  const [images, setImages]= useState([])
  const[image,setImage]=useState(null)
  const [userData, setUserData] =useState({})
  async function getUserData(){
    const baseUrl = "https://app.myarigo.com/api/user/profile"
    const token = await AsyncStorage.getItem("token")
    const response = await axios.get(baseUrl,{
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
  
     AsyncStorage.setItem("slug", response.data.user.slug)
    setUserData(response.data.user);
  }
  
  useEffect(()=>{
    getUserData()

  }, [])
     
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [name, setName] = useState("")
  const [city, setCity] = useState("")
  const [address, setAddress] = useState("")
  const [state, setState] = useState("")


    

    const emojisWithIcons = [{
        title:"Edo State"
      },
      {
        title:"Benin City"
      },
      ];

      async function EditProfile(){
        const data={
          email,
          name,
          phone,
          state,
          city,
          address
        }
        console.log(data)
        const baseUrl = "https://myarigo.com/api/user/profile/edit"
        const response = await axios.post(baseUrl,{
          headers:{
            'Authorization': 'Bearer '+ await AsyncStorage.getItem('token')
          },
          body:JSON.stringify(data)
        })
        console.log(response)
      
      }




      useEffect(()=>{
        (async()=>{
          const galleryStatus=await ImagePicker.requestMediaLibraryPermissionsAsync();
          setHasGalleryPermission(galleryStatus.status == "granted")
        })()
      },[]);

      const pickImage=async ()=>{
        if(images.length < 4){
          let result=await ImagePicker.launchImageLibraryAsync({
            mediaTypes:ImagePicker.MediaTypeOptions.Images,
            allowsEditing:true,
            aspect:[4,4],
            quality:1
         })
         if(!result.canceled){
            setImages(state=>[...state,result.assets[0].uri]);
        }else{
          Alert.alert("Invalid Input", "Can not upload more than 4 images", [
            { text: "OK", onPress: () => console.log("OK Pressed") },
          ]);
        }
      }


      const fetchImageUri=async (uri)=>{
       console.log("ran")
       const response=await fetch(uri)
       const blob= await response.blob()
       const file= new File([blob], uri, { type: blob.type });
       return file
     }}
     

const updateProfile=async ()=>{

  pickImage()
  const baseurl="https://myarigo.com/api/user/profile/image"
  const response = await axios.post(baseurl,{
    headers:{
      'Authorization': 'Bearer '+ await AsyncStorage.getItem('token')
    },
    body:images[0]
  })
 
}

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
              
            }}
            onPress={()=>updateProfile()} 
            >
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
                  value={name}
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
                value={email}
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
                value={phone}
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
                onChangeText={(text) =>setAddress(text)}
                value={address}
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
      setState(selectedItem.title)
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
      console.log(selectedItem.title);
      setCity(selectedItem.title)
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
       <TouchableOpacity
       onPress={EditProfile} 
       style={{
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