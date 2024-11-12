import { 
  ScrollView, 
  StyleSheet, 
  Text, 
  TouchableOpacity,
   View,
   Alert, 
   Image,
   KeyboardAvoidingView,
   Platform
   } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../Components/Header'
import { useNavigation } from '@react-navigation/native'
import { TextInput } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';
import * as ImagePicker from "expo-image-picker"
import { ActivityIndicator } from 'react-native'
import SelectDropdown from 'react-native-select-dropdown'
import axios from 'axios';

const AddScreen = ({navigation}) => {
    const Navigation=useNavigation();
    const [category,  setCategory ] = useState("");
    const [fullname,  setFirstName ] = useState("");
    const [ title, setTitle ] = useState("");
    const [ description, setDescription ] = useState("hello world");
    const [ state, setState ] = useState(" ");
    const [ city, setCity ] = useState(" ");
    const [salary,setSalary]=useState(" ");
    const [skills,setSkills]=useState("");
    const [Language,setLanguage]=useState("")
    const [phoneNumber, setPhoneNumber] = useState("");
    const [images, setImages]= useState([])
    const[image,setImage]=useState(null)
    const[loading, setLoading]=useState(false);
    const[show, setShow]=useState(false);
    const[company, setCompany]=useState("");
    const[endDate, setEnd]=useState("");
    const[startDate, setStart]=useState("");
    const[stillwork, setWork]=useState("");
    const[experienceYear, setYear]=useState("");
    const[type, setType]=useState("");
    const[schooling, setSchooling]=useState("");
    const[qualification, setQualification]=useState("");
    const [age, setAge] = useState("")
    const [experience, setExperience] = useState([]);
    const [status, setStatus] = useState("");
    const [marital, setMarital] = useState("");
    const [certificate, setCert] = useState("")
    const [gender, setGender] = useState("")
    
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

    const State = [ {
      title:"1"
    },
     {
      title:"2"
    },
     {
      title:"3"
    },
    ];
    const City = [ 
       {
      title:"3"
    },
     {
      title:"6"
    },
     {
      title:"8"
    },
    ]
   
    const Data={
      category,
      title,
      mobile:phoneNumber,
      experienceYear,
      jobType:type,
      employmentStatus:status,
      gender,
      maritalStatus:marital,
      age,
      schooling,
      qualification,
      expectedSalary:salary,
      state,
      city,
      workexperience:[],
      certificate,
      skills,
      language:Language,
      description,
      photo:images[0]
     } 

     console.log(Data)
    const qualify = [  {
      title:"Degree "
    },
      {
      title:" BSC"
    },
    ];
    const Gender= [{
      title:"Male"
    },
    {
      title:"Female"
    },
    ];
    const certificates = [ { title:"HND"},
      { title:"BSC"},
      { title:"MSC"},
    ];
    const ExpectedSalary = [  {
      title:"below 5000"
    },
      {
      title:"above 5000"
    },
    ];
    
  const Married= [{
    title:"Single"
  },
  {
    title:"Married"
  },
  ];

  const Schooling= [{
    title:"Yes"
  },
  {
    title:"No"
  },
  ];

  const Employment= [{
    title:"Yes"
  },
  {
    title:"No"
  },
  ];
  
     const HandleSubmit=async ()=>{
        console.log(Data)
    const baseUrl="https://app.myarigo.com/api/user/product/add"    
          try {
              const token = await AsyncStorage.getItem("token")
              const response = await axios.post(baseUrl,Data,{
              headers:{
              Authorization: `Bearer ${token}`
                  }
              })
              console.log(response.data)
                 
                } catch (error) {
                  console.log(error)    
                }

                  
                  
                }
                const loader=()=>{
                  setLoading(false)
                  Navigation.navigate("messages")
                 }
               
                

  return (

    <SafeAreaView>
        <Header navigation={navigation}/>
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
     <KeyboardAvoidingView behavior="padding" >
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
        <Text style={{color:"red",fontSize:30,position:"absolute",right:Platform.OS==="ios"? 300:270,top:-10}}>*</Text>       
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
                 onChangeText={(text) => setCategory(text)}
                 value={category}
              />
        <Text style={{
            fontWeight:"bold",
            marginHorizontal:20,
            marginVertical:5,
            color:"#565b64",
            
        }}>Full Name</Text> 
        <TextInput
              style={{ 
                  height: 40, 
              borderWidth: 1,
              width:350,
              borderRadius:10,
              borderColor:"gray",
              marginHorizontal:20,
              marginVertical:5 
            }}
              onChangeText={text => setFirstName(text)}
              value={fullname}
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
        <Text style={{color:"red",fontSize:30,position:"absolute",right:Platform.OS==="ios"?330:300,top:-10}}>*</Text>       
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
                  onChangeText={text => setAge(text)}
                  value={setAge}
                  />
      
      <View style={{
               flexDirection:"row",
               marginHorizontal:20,
               marginVertical:10,
               position:"relative"
            }}>
        <Text style={{
            color:"#565b64"
        }}>Experience Year </Text>
        <Text style={{color:"red",fontSize:30,position:"absolute",right:Platform.OS==="ios"? 305:270,top:-10}}>*</Text>       
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
                  onChangeText={text => setYear(text)}
                  value={experienceYear}
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
        <Text style={{color:"red",fontSize:30,position:"absolute",right:Platform.OS==="ios"? 305:270,top:-10}}>*</Text>       
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
                  onChangeText={text => setTitle(text)}
                  value={title}
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
        <Text style={{color:"red",fontSize:30,position:"absolute",right:Platform.OS==="ios"?305:270,top:-10}}>*</Text>       
      </View>
      <SelectDropdown
    data={emojisWithIcons}
    onSelect={(selectedItem, index) => {
      console.log(selectedItem, index);
      setType(selectedItem.title)
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
        <Text style={{color:"red",fontSize:30,position:"absolute",right:Platform.OS==="ios"?240:240,top:-10}}>*</Text>       
      </View>
      <SelectDropdown
    data={emojisWithIcons}
    onSelect={(selectedItem, index) => {
      console.log(selectedItem, index);
      setStatus(selectedItem.title)
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
        <Text style={{color:"red",fontSize:30,position:"absolute",right:Platform.OS==="ios"?310:280,top:-10}}>*</Text>       
      </View>
      <SelectDropdown
    data={Gender}
    onSelect={(selectedItem, index) => {
      setGender(selectedItem.title, index);
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
    renderItem={(item,index, isSelected) => {
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
        <Text style={{color:"red",fontSize:30,position:"absolute",right:Platform.OS==="ios"?320:290,top:-10}}>*</Text>       
      </View>
      <SelectDropdown
    data={State}
    onSelect={(selectedItem, index) => {
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
      <View style={{
                flexDirection:"row",
                marginHorizontal:20,
                marginVertical:10,
                position:"relative"
            }}>
        <Text style={{
            color:"#565b64"
        }}>City </Text>
        <Text style={{color:"red",fontSize:30,position:"absolute",right:Platform.OS==="ios"?320:300,top:-10}}>*</Text>       
      </View>
      <SelectDropdown
    data={City}
    onSelect={(selectedItem, index) => {
      setCity(selectedItem.title);
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
        <Text style={{color:"red",fontSize:30,position:"absolute",right:Platform.OS==="ios"?200:180,top:-10}}>*</Text>       
      </View>
      <SelectDropdown
    data={ExpectedSalary}
    onSelect={(selectedItem, index) => {
      setSalary(selectedItem.title, index);
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
    data={Employment}
    onSelect={(selectedItem, index) => {
      console.log(selectedItem.title, index);
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
    data={Married}
    onSelect={(selectedItem, index) => {
      setMarital(selectedItem.title, index);
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
        }}>Schooling? </Text>
        <Text style={{color:"red",fontSize:30,position:"absolute",display:"none",right:200,top:-10}}>*</Text>       
      </View>
      <SelectDropdown
    data={Schooling}
    onSelect={(selectedItem, index) => {
      setSchooling(selectedItem.title, index);
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
    data={qualify}
    onSelect={(selectedItem, index) => {
      setQualification(selectedItem.title, index);
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
                 marginHorizontal:20,
                 marginVertical:10,
                 flexDirection:"row",
                 alignItems:"center",
                 gap:10
                }}
                onPress={()=>setShow(prev=>!prev)}
                >
        <Entypo name="circle-with-plus" size={24} color="#243c56" />
        <Text style={{color:"#243c56",fontWeight:"bold"}}>Add Experience</Text>
      </TouchableOpacity>
           {show ? 
           <View>

           <Text style={{textAlign:"center",marginTop:20}}>WORK EXPERIENCE</Text>
           <View style={{
          flexDirection:"row",
          marginHorizontal:20,
          position:"relative"
        }}>
        <Text style={{
            color:"#565b64"
        }}>Company </Text>
        <Text style={{color:"red",fontSize:30,position:"absolute",right:Platform.OS==="ios"? 300:270,top:-10}}>*</Text>       
      </View>
      <TextInput
              style={{ 
                  height: 40, 
                  borderWidth: 1,
                  width:350,
                  borderRadius:10,
                  borderColor:"gray",
                  marginHorizontal:20,
                  paddingHorizontal:10,
                 marginVertical:15
                 }}
                 onChangeText={(text) => setCompany(text)}
                 value={company}
              />
              <View style={{
          flexDirection:"row",
          marginHorizontal:20,
          position:"relative"
        }}>
        <Text style={{
            color:"#565b64"
        }}>Start Date </Text>
        <Text style={{color:"red",fontSize:30,position:"absolute",right:Platform.OS==="ios"? 300:270,top:-10}}>*</Text>       
      </View>
      <TextInput
      placeholder='14-10-2020'
              style={{ 
                  height: 40, 
                  borderWidth: 1,
                  width:350,
                  borderRadius:10,
                  borderColor:"gray",
                  marginHorizontal:20,
                  paddingHorizontal:10,
                 marginVertical:15 }}
                 onChangeText={(text) => setStart(text)}
                 value={startDate}
              />
               <View style={{
          flexDirection:"row",
          marginHorizontal:20,
          position:"relative"
        }}>
        <Text style={{
            color:"#565b64"
        }}>End Date </Text>
        <Text style={{color:"red",fontSize:30,position:"absolute",right:Platform.OS==="ios"? 300:270,top:-10}}>*</Text>       
      </View>
      <TextInput
              placeholder='20-10-2025'
              style={{ 
                  height: 40, 
                  borderWidth: 1,
                  width:350,
                  borderRadius:10,
                  borderColor:"gray",
                  marginHorizontal:20,
                  paddingHorizontal:10,
                  marginVertical:15
                 }}
                 onChangeText={(text) => setEnd(text)}
                 value={endDate}
              />
               <View style={{
          flexDirection:"row",
          marginHorizontal:20,
          position:"relative"
        }}>
        <Text style={{
            color:"#565b64"
        }}>Still Work </Text>
        <Text style={{color:"red",fontSize:30,position:"absolute",right:Platform.OS==="ios"? 300:270,top:-10}}>*</Text>       
      </View>
      <TextInput
              style={{ 
                  height: 40, 
                  borderWidth: 1,
                  width:350,
                  borderRadius:10,
                  borderColor:"gray",
                  marginHorizontal:20,
                  marginBottom:10,
                 marginVertical:5 }}
                 onChangeText={(text) => setWork(text)}
                 value={stillwork}
              />



           </View>
           
           
           
           :""}






















            

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
                  onChangeText={text => setCert(text)}
                  value={certificates}
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
                  onChangeText={text => setSkills(text)}
                  value={skills}
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
                  onChangeText={text => setLanguage(text)}
                  value={Language}
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
        <Text style={{color:"red",fontSize:30,position:"absolute",right:Platform.OS==="ios"?270:240,top:-10}}>*</Text>   
      </View>
        <TouchableOpacity onPress={()=>pickImage()} 
        style={{ 
            marginHorizontal:20,
            
          }}>
       <Image source={require("./image-upload.png")} style={{width:80,height:80}}/>
    
      </TouchableOpacity>
    
        <TouchableOpacity onPress={HandleSubmit} style={{
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
        </KeyboardAvoidingView>

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