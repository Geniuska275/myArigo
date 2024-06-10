import { ScrollView, StyleSheet, Text, TouchableOpacity, View,Alert, Image } from 'react-native'
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

const AddScreen = () => {
    const navigation=useNavigation();
    const {category, setCategory}=useState("");
    const {firstName, setFirstName}=useState("");
    const {phoneNumber, setPhoneNumber}=useState("");
    const [images,setImages]=useState([])
    const[image,setImage]=useState(null)
    const[loading, setLoading]=useState(false);
    
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
     

     const emojisWithIcons = [{
      title:"Sort By"
    },
    {
      title:"Sort By"
    },
    ];
               const AddCv=()=>{
              
                setLoading(true)
                setTimeout(loader,4000)
                  
                  
                }
                const loader=()=>{
                  setLoading(false)
                  navigation.navigate("messages")
                 }
               
                

  return (

    <SafeAreaView>
        <Header/>
        {loading &&(
        <View style={[StyleSheet.absoluteFill,{
          backgroundColor:"rgba(0,0,0,0.6)",
          alignItems:"center",
          justifyContent:"center",
          zIndex:30000
       }   
       ]}>
       <ActivityIndicator  color={"#243c56"} animating size={180}/>
     </View>)}
        
        <ScrollView>


      <Text style={{   
          marginVertical:10,
          color:"#565b64",
          fontSize:20,
          marginHorizontal:20
        }}> My Cv </Text>
      
      <View style={{
          flexDirection:"row",
          marginHorizontal:20,
          position:"relative"
        }}>
        <Text style={{
            color:"#565b64"
        }}>Category </Text>
        <Text style={{color:"red",fontSize:30,position:"absolute",right:300,top:-10}}>*</Text>       
      </View>
      <TextInput
              style={{ 
                  height: 40, 
                  borderWidth: 1,
                  width:350,
                  borderRadius:10,
                  borderColor:"gray",
              marginHorizontal:20,
              marginVertical:5 }}
              onChangeText={text => setCategory(text)}
              value={category}
              />
        <Text style={{
            fontStyle:"bold",
            marginHorizontal:20,
            marginVertical:5,
            color:"#565b64",
            
        }}>First Name</Text> 
        <TextInput
              style={{ 
                  height: 40, 
              borderWidth: 1,
              width:350,
              borderRadius:10,
              borderColor:"gray",
              marginHorizontal:20,
              marginVertical:5 }}
              onChangeText={text => setFirstName(text)}
              value={firstName}
              />
         <Text style={{
             fontStyle:"bold",
             marginHorizontal:20,
             marginVertical:5,
             color:"#565b64",
             
            }}>Phone Number</Text> 
        <TextInput
              style={{ 
                  height: 40, 
                  borderWidth: 1,
                  width:350,
                  borderRadius:10,
                  borderColor:"gray",
                  marginHorizontal:20,
                  marginVertical:5 }}
                  onChangeText={text => setPhoneNumber(text)}
                  value={phoneNumber}
                  />
              <View style={{
               flexDirection:"row",
               marginHorizontal:20,
               marginVertical:10,
               position:"relative"
            }}>
        <Text style={{
            color:"#565b64"
        }}>Age </Text>
        <Text style={{color:"red",fontSize:30,position:"absolute",right:330,top:-10}}>*</Text>       
      </View>
      <TextInput
              style={{ 
                  height: 40, 
                  borderWidth: 1,
                  width:350,
                  borderRadius:10,
                  borderColor:"gray",
                  marginHorizontal:20,
                  marginVertical:5 }}
                  onChangeText={text => setPhoneNumber(text)}
                  value={phoneNumber}
                  />
      





           <View style={{
               flexDirection:"row",
               marginHorizontal:20,
               marginVertical:10,
               position:"relative"
            }}>
        <Text style={{
            color:"#565b64"
        }}>Job Title </Text>
        <Text style={{color:"red",fontSize:30,position:"absolute",right:300,top:-10}}>*</Text>       
      </View>
      
      <TextInput
              style={{ 
                  height: 40, 
                  borderWidth: 1,
                  width:350,
                  borderRadius:10,
                  borderColor:"gray",
                  marginHorizontal:20,
                  marginVertical:5 }}
                  onChangeText={text => setCategory(text)}
                  value={category}
                  />
       <View style={{
                flexDirection:"row",
                marginHorizontal:20,
                marginVertical:10,
                position:"relative"
            }}>
        <Text style={{
            color:"#565b64"
        }}>Job Type </Text>
        <Text style={{color:"red",fontSize:30,position:"absolute",right:300,top:-10}}>*</Text>       
      </View>
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

<View style={{
                flexDirection:"row",
                marginHorizontal:20,
                marginVertical:10,
                position:"relative"
            }}>
        <Text style={{
            color:"#565b64"
        }}>Gender</Text>
        <Text style={{color:"red",fontSize:30,position:"absolute",right:310,top:-10}}>*</Text>       
      </View>
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
     
     <View style={{
                flexDirection:"row",
                marginHorizontal:20,
                marginVertical:10,
                position:"relative"
            }}>
        <Text style={{
            color:"#565b64"
        }}>State </Text>
        <Text style={{color:"red",fontSize:30,position:"absolute",right:330,top:-10}}>*</Text>       
      </View>
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
      <View style={{
                flexDirection:"row",
                marginHorizontal:20,
                marginVertical:10,
                position:"relative"
            }}>
        <Text style={{
            color:"#565b64"
        }}>City </Text>
        <Text style={{color:"red",fontSize:30,position:"absolute",right:330,top:-10}}>*</Text>       
      </View>
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
     









              <View style={{
                flexDirection:"row",
                marginHorizontal:20,
                marginVertical:10,
                position:"relative"
            }}>
        <Text style={{
            color:"#565b64"
        }}>Experience on this Role </Text>
        <Text style={{color:"red",fontSize:30,position:"absolute",right:200,top:-10}}>*</Text>       
      </View>
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
     
     <View style={{
                flexDirection:"row",
                marginHorizontal:20,
                marginVertical:10,
                position:"relative"
            }}>
        <Text style={{
            color:"#565b64"
        }}>Employment Status </Text>
        <Text style={{color:"red",fontSize:30,position:"absolute",display:"none",right:200,top:-10}}>*</Text>       
      </View>
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
     
             
              
     <View style={{
                flexDirection:"row",
                marginHorizontal:20,
                marginVertical:10,
                position:"relative"
            }}>
        <Text style={{
            color:"#565b64"
        }}>Marital Status </Text>
        <Text style={{color:"red",fontSize:30,position:"absolute",display:"none",right:200,top:-10}}>*</Text>       
      </View>
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
     
             
     <View style={{
                flexDirection:"row",
                marginHorizontal:20,
                marginVertical:10,
                position:"relative"
            }}>
        <Text style={{
            color:"#565b64"
        }}>Still Studying? </Text>
        <Text style={{color:"red",fontSize:30,position:"absolute",display:"none",right:200,top:-10}}>*</Text>       
      </View>
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
     <View style={{
                flexDirection:"row",
                marginHorizontal:20,
                marginVertical:10,
                position:"relative"
            }}>
        <Text style={{
            color:"#565b64"
        }}>Expected Salary </Text>
        <Text style={{color:"red",fontSize:30,position:"absolute",display:"none",right:200,top:-10}}>*</Text>       
      </View>
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
     
             
                        
     <View style={{
                flexDirection:"row",
                marginHorizontal:20,
                marginVertical:10,
                position:"relative"
            }}>
        <Text style={{
            color:"#565b64"
        }}>Highest Qualification </Text>
        <Text style={{color:"red",fontSize:30,position:"absolute",display:"none",right:200,top:-10}}>*</Text>       
      </View>
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
     
             
                        
             
                        





             <View style={{
                 marginHorizontal:20,
                 flexDirection:"row",
                 alignItems:"center",
                 gap:10
                }}>
        <Entypo name="circle-with-plus" size={24} color="#243c56" />
        <Text style={{color:"#243c56",fontWeight:"bold"}}>Add Experience</Text>
      </View>

             <View style={{
                 flexDirection:"row",
                 marginHorizontal:20,
                 marginVertical:10,
                 position:"relative"
                }}>
        <Text style={{
            color:"#565b64"
        }}>About You </Text>
        <Text style={{color:"red",fontSize:30,position:"absolute",right:290,top:-10}}>*</Text>       
      </View>
      <TextInput
              style={{ 
                  height: 100, 
                  borderWidth: 1,
                  width:350,
                  borderRadius:10,
                  borderColor:"gray",
                  marginHorizontal:20,
                  marginVertical:5 }}
                  onChangeText={text => setCategory(text)}
                  value={category}
                  />

<View style={{
                 flexDirection:"row",
                 marginHorizontal:20,
                 marginVertical:10,
                 position:"relative"
                }}>
        <Text style={{
            color:"#565b64"
        }}>Certification </Text>
        <Text style={{color:"gray",fontSize:30,position:"absolute",display:"none",right:290,top:-10}}>*</Text>       
      </View>
      <TextInput
              style={{ 
                  height: 100, 
                  borderWidth: 1,
                  width:350,
                  borderRadius:10,
                  borderColor:"gray",
                  marginHorizontal:20,
                  marginVertical:5 }}
                  onChangeText={text => setCategory(text)}
                  value={category}
                  />
      

<View style={{
                 flexDirection:"row",
                 marginHorizontal:20,
                 marginVertical:10,
                 position:"relative"
                }}>
        <Text style={{
            color:"#565b64"
        }}>Skills  </Text>
        <Text style={{color:"gray",fontSize:30,position:"absolute",display:"none",right:290,top:-10}}>*</Text>       
      </View>
      <TextInput
              style={{ 
                  height: 100, 
                  borderWidth: 1,
                  width:350,
                  borderRadius:10,
                  borderColor:"gray",
                  marginHorizontal:20,
                  marginVertical:5 }}
                  onChangeText={text => setCategory(text)}
                  value={category}
                  />


                 
<View style={{
                 flexDirection:"row",
                 marginHorizontal:20,
                 marginVertical:10,
                 position:"relative"
                }}>
        <Text style={{
            color:"#565b64"
        }}>Languages </Text>
        <Text style={{color:"gray",fontSize:30,position:"absolute",display:"none",right:290,top:-10}}>*</Text>       
      </View>
      <TextInput
              style={{ 
                  height: 100, 
                  borderWidth: 1,
                  width:350,
                  borderRadius:10,
                  borderColor:"gray",
                  marginHorizontal:20,
                  marginVertical:5 }}
                  onChangeText={text => setCategory(text)}
                  value={category}
                  />

                   <View style={{
                       flexDirection:"row",
                       marginHorizontal:20,
                       marginVertical:10,
                       position:"relative"
                    }}>
        <Text style={{
            color:"#565b64"
        }}>Profile Image </Text>
        <Text style={{color:"red",fontSize:30,position:"absolute",right:280,top:-10}}>*</Text>   
      </View>
        <TouchableOpacity onPress={()=>pickImage()} 
        style={{ 
            marginHorizontal:20,
            
          }}>
       <Image source={require("./image-upload.png")} style={{width:80,height:80}}/>
    
      </TouchableOpacity>
    
        <TouchableOpacity onPress={AddCv} style={{
         paddingHorizontal:10,
         backgroundColor:"#337bb7",
         borderRadius:10,
         marginVertical:30,
         width:350,
         marginHorizontal:20,
         marginVertical:20,
         marginBottom:30
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
                }}>Submit</Text>
            </TouchableOpacity>
            <View style={{marginTop:"10px"}}></View>
     
      
        </ScrollView>
    </SafeAreaView>
  )
}

export default AddScreen

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