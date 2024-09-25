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
  import ImageResizer from 'react-native-image-resizer';
  import constants from "expo-constants";
  
  import React, { useEffect, useState } from 'react'
  import { SafeAreaView } from 'react-native-safe-area-context'
  import Header from '../Components/Header'
  import { useNavigation } from '@react-navigation/native'
  import { TextInput } from 'react-native-gesture-handler';
  import RNPickerSelect from 'react-native-picker-select';
  import { Entypo ,AntDesign} from '@expo/vector-icons';
  import * as ImagePicker from "expo-image-picker"
  import { ActivityIndicator } from 'react-native'
  import SelectDropdown from 'react-native-select-dropdown'
  import axios from 'axios';
  
  const Information = ({route}) => {
    const[loading, setLoading]=useState(false);
      const [images, setImages]=useState([])
      const [image, setImage]=useState(null)
      const {amount,duration}=route.params;
      const navigation=useNavigation();
      

       const HandleSubmit= async()=>{   
        setLoading(true)  
        try {
          

          
          const formData=new FormData()     
          const slug = await AsyncStorage.getItem("slug")
          const imageUri = images[0].replace('file://', '');
           formData.append('proof',  {
             uri:imageUri,
             name:'image.jpg',
             type:'image/jpg'
          })
           formData.append("slug",slug)
           formData.append('duration',duration)
           formData.append('amount',amount)
               const baseUrl=`https://app.myarigo.com/api/user/onboard/bank_transfer`      
               const token = await AsyncStorage.getItem("token")   
              const response= await axios.post(baseUrl, formData, {
                 headers: {
                   Accept: 'application/json',
                   'Content-Type': 'multipart/form-data',
                   Authorization: `Bearer ${token}`,
                 }
               })
                 
                Alert.alert('Image uploaded successfully', 'Your payment has been made successfully', [
                  { text: 'OK'},
                ]);
                 AsyncStorage.setItem("plan",amount)
                 AsyncStorage.setItem("duration",toString(duration))
                loader()
               } catch (error) {
          Alert.alert('Image failed',`${error.response.data.errors.proof[0]}` , [
            { text: 'OK', onPress: () => {}},
          ]);
     
        }   
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
      

    }
  
         const loader=()=>{
          setLoading(false)
          navigation.navigate("Home")
         }

     
      
  
    return (
      <SafeAreaView style={styles.container}>
          <Header navigation={navigation}/>
          {loading &&(
          <View style={[StyleSheet.absoluteFill,{
          backgroundColor:"rgba(0,0,0,0.6)",
          alignItems:"center",
          justifyContent:"center",
          zIndex:30000
       }   
       ]}>
       <ActivityIndicator  color={"#243c56"} animating size={100}/>
     </View>)}
          
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
            }}>Pay #{amount} to the account below</Text>  
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
        <Text style={{color:"red",fontSize:30,position:"absolute",right:Platform.OS==="ios"? 180:240,top:-1}}>*</Text>       
      </View>

       <View style={{
        flexDirection:"row"
       }}>

      <TouchableOpacity onPress={pickImage} 
        style={{ 
          marginHorizontal:20,      
        }}>
       <Image source={require("./image-upload.png")} style={{width:100,height:100}}/> 
      </TouchableOpacity>
      {images[0]?  <View style={styles.image}> 
      <TouchableOpacity  style={{position:"relative",top:5,left:-7,zIndex:999}} onPress={()=>{
         const  r=images.filter((_,i)=>i !==0)
         console.log(r)
         setImages(r)
       }}>
        <AntDesign name="closecircleo" size={16} color="#0284c7" />
       </TouchableOpacity>       
        <Image source={{uri:images[0]}} style={{width:70,height:70,marginBottom:10}}/>
       </View>:null}

      
            </View>

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
    container:{
      flex:1,
      backgroundColor:"#fefefe",
     
     
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