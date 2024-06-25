
import { ImageBackground, SafeAreaView, Alert,ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import AppButton from '../Components/AppButton';
import { FontAwesome } from '@expo/vector-icons';
import { Divider } from 'react-native-elements';
import RadioGroup from 'react-native-radio-buttons-group';
import Radio from '../Components/Inputs/Radio';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const SignupScreen = ({navigation}) => {
  const Navigation=useNavigation()
  const [email, setEmail] = useState("");
  const [fullname, setFullName] = useState("");
  const [phone, setPhone] = useState();
  const [password, setPassword]= useState("");
  const [accountType, setAccountType] = useState("");
  const [firstname, setFirstName]= useState("");
  const [lastname, setLastName]= useState("");
  const [Secure, setSecure] = useState(false)
  const [Seller, setSeller] = useState("")

const handleSubmit= async ()=>{
  const baseUrl="https://app.myarigo.com/api/register"
  const userData={
    fullname,
    email,
    phone,
    password,
    firstname,
    lastname,
    account_type:accountType
  } 
  console.log(userData)
  try {
    const response = await axios.post(baseUrl,userData)
    console.log(response.data)
    Alert.alert(
      'Registration',
      'Registered successfully',
    
    );
    Navigation.navigate("Login")
  } catch (error) {
    console.log(error)    
  }
}

const Options=[
  {label:"seller",value:"seller"},
  {label:"buyer",value:"buyer"}
]


  return (
        
        <ImageBackground source={require('./login-bg.jpg')} style={styles.backgroundImage}>
         <SafeAreaView>
           <View style={styles.form}>
            <View style={styles.login}>
              <Text style={styles.text}>Register to Arigo</Text>
              <TextInput
             style={{ height: 40, borderBottomWidth: 1, borderColor:"gray",marginHorizontal:40,marginVertical:8 }}
              onChangeText={text => setFullName(text)}
              placeholder='First & Last Name'
               value={fullname}
             />
            
            <TextInput
             style={{ height: 40, borderBottomWidth: 1, borderColor:"gray",marginHorizontal:40,marginVertical:8 }}
              onChangeText={text => setFirstName(text)}
              placeholder='FirstName'
               value={firstname}
             />
             
             <TextInput
             style={{ height: 40, borderBottomWidth: 1, borderColor:"gray",marginHorizontal:40,marginVertical:8 }}
              onChangeText={text => setLastName(text)}
              placeholder='LastName'
               value={lastname}
             />
             <TextInput
             style={{ height: 40, borderBottomWidth: 1, borderColor:"gray",marginHorizontal:40,marginVertical:8 }}
              onChangeText={text => setEmail(text)}
              placeholder='Email'
               value={email}
      />  
       <TextInput
             style={{ height: 40, borderBottomWidth: 1, borderColor:"gray",marginHorizontal:40,marginVertical:8 }}
              onChangeText={text => setPhone(text)}
              placeholder='Phone'
               value={phone}
      />
           


           <View style={{position:"relative"}}>
           <TextInput
             style={{ height: 40, borderBottomWidth: 1, borderColor:"gray",marginHorizontal:40,marginVertical:10 }}
              onChangeText={text => setPassword(text)}
              placeholder='Password'
               value={password}
               secureTextEntry={Secure}
      />
 {Secure ? 
<FontAwesome name="eye" size={24} color="black"  style={{position:"absolute",top:20,right:40}} onPress={()=>{
  setSecure(false)
}}/>:
<Entypo 
name="eye-with-line" 
size={24} 
color="black" 
style={{
  position:"absolute",
  top:20,
  right:40,
  fontWeight:"bold",
  fontSize:20}} onPress={()=>{
 setSecure(true)  
}}/>


}         
 <Text style={{marginHorizontal:40}}>Select account type</Text>
          <Radio Options={Options}
           CheckedValue={Seller} 
          style={{marginBottom:15}}
          onChange={setAccountType}/>
          <AppButton title={"Signup as a seller"} handleSubmit={handleSubmit}/>
           <View style={{position:"relative"}}>

          <Divider style={{ backgroundColor: 'black' ,marginHorizontal:40,marginTop:20}} />
          <TouchableOpacity >
          <Text style={{backgroundColor:"#f9f9f9",width:90,position:"absolute",top:10,left:140}}>
            signup with</Text>
          </TouchableOpacity>
           </View>
            </View>      

            </View>
            <View style={styles.intro}>


               <Text style={{color:"#fefefe",fontWeight:"bold",marginHorizontal:30,marginTop:30}} >
                Already have an account ?</Text>
            <View style={{flexDirection:"row",gap:4,marginHorizontal:30}}>
            <TouchableOpacity onPress={()=>Navigation.navigate("Login")} 
            style={{
              backgroundColor:"#6c757d",
              padding:10,
              borderRadius:10,
              marginTop:5
              }}>
            <Text style={{color:"white",fontWeight:"bold"}}>Login</Text>
           </TouchableOpacity>
           {/* <TouchableOpacity onPress={{}} style={{backgroundColor:"#6c757d",padding:10,borderRadius:10}}>
            <Text style={{color:"white",fontWeight:"bold"}}>Forgot Password</Text>
           </TouchableOpacity> */}
            </View>
            </View>


           </View>
         </SafeAreaView>
    </ImageBackground>
    
  )
}

export default SignupScreen

const styles = StyleSheet.create({
     inner:{
      width:20,
      height:20,
      borderWidth:1,
      borderRadius:10,
      backgroundColor:"gray"
     },
     outer:{
      justifyContent:"center",
      alignItems:"center",
      width:30,
      height:30,
      borderWidth:1,
      borderRadius:15
     },
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
      height:750,
      width:340,
      borderRadius:20,
      marginHorizontal:30,
      marginTop:40,
      xOffset:-2,
     yOffset:4,
     shadowColorIos:"#171717",
     shadowOpacity: 0.2,
     shadowRadius: 3,
     elevation:4,
     shadowColorAndroid:"#171717",
    },
    login:{
      flex:2,
      backgroundColor:"#f9f9f9",
      borderTopLeftRadius:10,
      borderTopRightRadius:10
    },
    intro:{
      height:100,
      borderBottomLeftRadius:10,
      borderBottomRightRadius:10,
      backgroundColor:"#243c56"
    },
    text:{
      textAlign:"center",
      marginTop:20
    }
})