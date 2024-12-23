import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, ScrollView,Platform } from 'react-native'
import React,{useState,useEffect} from 'react'
import Header from '../Components/Header'
import { useNavigation } from '@react-navigation/native';
import constants from "expo-constants";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {USER_ENDPOINT} from "@env"
import Select from '../Components/select';

const DashboardScreen = ({navigation}) => {
    const {touch, container, touchy, touches} = styles;
    const Navigation = useNavigation()

    const [userData, setUserData] = useState({})
    const [userMessages, setUserMessages] = useState([])
    const [userSub,setUserSub] = useState()
    const [plan, setPlan] = useState("")
    const [duration, setDuration] = useState("")
    

    async function getUserData(){
      const baseUrl = USER_ENDPOINT
      const token = await AsyncStorage.getItem("token")
      const response = await axios.get(baseUrl,{
        headers:{
          Authorization: `Bearer ${token}`
        }
      })
    
      setUserData(response.data.user)
    }
    

    async function getUserMessages(){
        const baseUrl = "https://app.myarigo.com/api/user/messages"
        const token = await AsyncStorage.getItem("token")
        const response = await axios.get(baseUrl,{
          headers:{
            Authorization: `Bearer ${token}`
          }
        })
      
        setUserMessages(response.data.messages)
      }
      

      async function getUserSub(){
        const baseUrl = `https://app.myarigo.com/api/user/onboard/41500/3`
        const token = await AsyncStorage.getItem("token")
        const response = await axios.get(baseUrl,{
          headers:{
            Authorization: `Bearer ${token}`
          }
        })
        console.log(response.data.data)
        setUserSub(response.data.data.plan)
      }
      
    useEffect(()=>{
      getUserData()
       getPlan()
       getUserMessages()
       getUserSub()

    }, [])
    
     
    async function getPlan(){
        
        const plan = await AsyncStorage?.getItem("plan")
        const duration = await AsyncStorage?.getItem("duration")
             setPlan(plan)
           setDuration(duration)
      }
      

  return (
   <SafeAreaView style={container}>
    <Header navigation={navigation}/>
    <ScrollView>

    <View>
        <TouchableOpacity style={touch} onPress={()=>Navigation.navigate("Products")}>
            <View style={{
                width:40,
                height:40,
                borderRadius:20,
                borderColor:"#fefefe",
                justifyContent:"center",
                alignItems:"center",
                borderWidth:2
            }}>
                <Text style={{color:"white"}}>{userData?.total_products}</Text>
            </View>
            <Text style={{fontWeight:"bold",color:"#fefefe"}}>Products</Text>

        </TouchableOpacity>
        <TouchableOpacity style={touchy}  
        onPress={()=>Navigation.navigate("Refferals")}
        >
            <View style={{
                width:40,
                height:40,
                borderRadius:20,
                borderColor:"#fefefe",
                justifyContent:"center",
                alignItems:"center",
                borderWidth:2
            }}>
                <Text style={{color:"white"}}>{userData?.referral}</Text>
            </View>
            <Text style={{fontWeight:"bold",color:"#fefefe"}}>Refferals</Text>

        </TouchableOpacity>
        <TouchableOpacity style={touches} onPress={()=>Navigation.navigate("messages")}>
            <View style={{
                width:40,
                height:40,
                borderRadius:20,
                borderColor:"#fefefe",
                justifyContent:"center",
                alignItems:"center",
                borderWidth:2
            }}>
                <Text style={{color:"white"}}>{userMessages?.length}</Text>
            </View>
            <Text style={{fontWeight:"bold",color:"#fefefe"}}>Messages</Text>

        </TouchableOpacity>
    </View>
    
    <View style={styles.box}>
        <Text style={{marginHorizontal:10,marginTop:15}}>
            Welcome to Myarigo,register  for our premium packages and enjoy the following;
        </Text>
        <Text style={{marginHorizontal:10,marginTop:15}}>
           -Unlimited Visibility
        </Text>
        <Text style={{marginHorizontal:10,marginTop:15}}>
            -Connect with millions of verified brands,services,businesses,buyers and sellers.
        </Text>
        <Text style={{marginHorizontal:10,marginTop:15}}>
            -Give your brand an identity, and give your clients and customers multiple reasons to trust you
        </Text>
        <Text style={{marginHorizontal:10,marginTop:15}}>
            -Advertise your business to the right people at the right time.
        </Text>
        <Text style={{marginHorizontal:10,marginTop:15}}>
          -Turn your bussiness into a global market.
        </Text>
        <TouchableOpacity style={styles.button} onPress={()=>Navigation.navigate("Subscription")}>
            <Text style={{color:"white",fontWeight:"bold"}}> Register your Business/brand/Service</Text>
        </TouchableOpacity>

    </View>
   {userSub? (

   <View style={{borderWidth:1,
        borderColor:"gray",
        width:360,
        marginHorizontal:20,
        alignSelf:"center",
        height:140,
        paddingVertical:40,
        borderWidth:0.5,
        borderRadius:5,
        elevation:4,
        
        }}>
        <View>
            <Text style={{alignSelf:"center",color:"#337bb7",marginBottom:10,fontWeight:"bold"}}> Subscription Plan  #{userSub.price}</Text>

            <Text style={{alignSelf:"center",color:"#337bb7",marginBottom:10,fontWeight:"bold"}}> Duration : {userSub.duration} - Month(s)</Text>
            <Text style={{alignSelf:"center",color:"#337bb7",marginBottom:10,fontWeight:"bold"}}>
                
                 Next Billing on December 5th, 2024.
                 </Text>

            

        </View>
       
    </View>
   ):(
    <View style={{borderWidth:1,
        borderColor:"gray",
        width:360,
        marginHorizontal:20,
        alignSelf:"center",
        height:140,
        paddingVertical:40,
        borderWidth:0.5,
        borderRadius:5,
        elevation:4,
        
        }}>

        <Text style={{color:"red",fontWeight:"bold",alignSelf:"center",marginBottom:10}}>
            Pending Registration
        </Text>
        <Text style={{color:"red",fontWeight:"bold",alignSelf:"center"}}>
            Plan : {plan} for month {duration}
        </Text>

        <Text style={{color:"green",fontWeight:"bold",alignSelf:"center",marginBottom:10}}>
            Your Request has been submitted,
            please await admin approval.
        </Text>
    </View>
   )} 
  </ScrollView>

   </SafeAreaView>
  )
}

export default DashboardScreen

const styles=StyleSheet.create({
    container:{
     flex:1,
     backgroundColor:"#fefefe",
     marginTop: constants.statusBarHeight,
    
    },
    button:{
     backgroundColor:"#337bb7",
     paddingVertical:10,
     borderRadius:10,
     alignSelf:"center",
     width:300,
     marginVertical:20,
     justifyContent:"center",
     alignItems:"center"
    },
    touch:{
       flexDirection:"row",
       justifyContent:"space-between",
       alignItems:"center",
       backgroundColor:"#337bb7",
       marginHorizontal:20,
       padding:20,
       borderRadius:5,
       xOffset:-2,
       yOffset:4,
       shadowColorIos:"#171717",
       shadowOpacity: 0.2,
       shadowRadius: 3,
       elevation:4,
       marginVertical:10
    },
    touchy:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        backgroundColor:"#333031",
        marginHorizontal:20,
        padding:20,
        borderRadius:5,
        xOffset:-2,
        yOffset:4,
        shadowColorIos:"#171717",
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation:4,
        marginVertical:10
     },
     touches:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        backgroundColor:"#337bb7",
        marginHorizontal:20,
        padding:20,
        borderRadius:5,
        xOffset:-2,
        yOffset:4,
        shadowColorIos:"#171717",
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation:4,
        marginVertical:10
     },
     box:{
        width:Platform.OS==="ios" ?370:340,
        marginTop:30,
        marginBottom:30,
        marginHorizontal:20,
        height:Platform.OS==="ios" ?340:370,
        borderWidth:0.5,
        borderRadius:5,
        elevation:4,
        alignSelf:"center"
     }
})