import { SafeAreaView, StyleSheet, Text, View , Platform, TouchableOpacity, TextInput, ScrollView} from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { useNavigation } from '@react-navigation/native'
import SelectDropdown from 'react-native-select-dropdown'
import Radio from '../Components/Inputs/Radio';
import constants from "expo-constants";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
const Business = ({route}) => {
  const {plan, duration}=route?.params;
  
    const navigation=useNavigation();
    const [data,setData]=useState([])
    const [subscription, setSubcription] = React.useState(plan);
    const [dura, setDura] = React.useState(duration);
    const [businessname, setBusinessName] = React.useState('');
    const [businessphone, setBusinessPhone] = React.useState('');
    const [businessaddress, setBusinessAddress] = React.useState(data.address);
    const [businessemail, setBusinessEmail] = React.useState(data.email);
    const [city, setCity] = React.useState(data?.city);   
    const [state, setState] = React.useState(data?.state);
    const [market, setMarket] = React.useState(data?.market);
    const [about, setAbout] = React.useState(data?.about);


    const [Flutterwave, setFlutterwave] = React.useState('');
    const [accountType, setAccountType] = React.useState("");
    useEffect(()=>{
      const fetch=async()=>{

        const token= await AsyncStorage.getItem("token")
        console.log(token)
         const response= await axios.get(`https://app.myarigo.com/api/user/onboard/${plan}/${dura}`,{
            headers:{
              Authorization: `Bearer ${token}`
            }
          })

          setData(response.data.data.business)
       
      }
      fetch()
     },[])
  
      
     const HandleSubmit=async ()=>{ 
         const baseUrl=`https://app.myarigo.com/api/user/onboard/${plan}/${dura}` 
         const obj={
	       about,
	       address: businessaddress,
	       city,
	       email: businessemail,
	       market,
	       name: businessname,
	       phone: businessphone,
	       plan_amount: subscription,
	       plan_duration: dura.toString(),
	       state,
         gateway:"bank transfer",
         callback_url:""
         }
         try {
           const token = await AsyncStorage.getItem("token")
           const response = await axios.post(baseUrl,obj,{
             headers:{
               Authorization: `Bearer ${token}`
              }
            })
                   
            navigation.navigate("Information",{amount:plan,duration:duration})          
              } catch (error) {
                console.log(error)    
              }      
               }
             
    const states = [{
        title:"1"
      },
      {
        title:"3"
      },
      {
        title:"4"
      },
      {
        title:"5"
      },
      {
        title:"6"
      },
      {
        title:"7"
      },
      {
        title:"8"
      },
      ];
  return (
    <SafeAreaView style={[ styles.container,{
        backgroundColor:"white"
    }]}>
        <Header navigation={navigation}/>
        <Text style={styles.text}>Business Information</Text>
        <ScrollView>

         <View 
                 style={{
                     flexDirection:"row",
                     marginHorizontal:20,
                     marginTop:20,
                     position:"relative"
                    }}
                    >
        <Text style={{
            color:"#565b64"
        }}>Subscription Plan</Text>
        <Text 
            style = {{
            color:"red",
            fontSize:30,
            position:"absolute",
            right:Platform.OS==="ios"?250:210,
            top:-10}}>*</Text> 
        <TouchableOpacity onPressIn={()=>navigation.navigate("Subscription")}>
            <Text style={{color:"blue",fontWeight:"bold",marginLeft:30}}>Change Plan</Text>
        </TouchableOpacity>  
      </View>
      <TextInput
              style={{ 
                  height: 40, 
                  borderWidth: 1,
                  width:330,
                  borderRadius:10,
                  borderColor:"gray",
                  marginHorizontal:20,
                  padding:10,
                  marginVertical:5 }}
                  onChangeText={text => setSubcription(text)}
                  value={` #${plan}`}
                  
                  />


        <View style={{
            flexDirection:"row",
            marginHorizontal:20,
            marginTop:20,
            position:"relative"
        }}>
        <Text style={{
            color:"#565b64"
        }}>Business Name</Text>
        <Text style={{color:"red",fontSize:30,position:"absolute",right:Platform.OS==="ios"?265:230,top:-10}}>*</Text> 
 
      </View>
      <TextInput
              style={{ 
                  height: 40, 
                  borderWidth: 1,
                  width:330,
                  borderRadius:10,
                  borderColor:"gray",
                  marginHorizontal:20,
                  padding:10,
                  marginVertical:5 }}
                  onChangeText={text => setBusinessName(text)}
                  value={businessname}
                  
                  />



          <View style={{
              flexDirection:"row",
              marginHorizontal:20,
              marginTop:20,
              position:"relative"
            }}>
        <Text style={{
            color:"#565b64"
        }}>Business Email</Text>
        <Text style={{color:"red",fontSize:30,position:"absolute",right:Platform.OS==="ios"?265:230,top:-10}}>*</Text>  
      </View>
      <TextInput
              style={{ 
                  height: 40, 
                  borderWidth: 1,
                  width:330,
                  borderRadius:10,
                  borderColor:"gray",
                  marginHorizontal:20,
                  padding:10,
                  marginVertical:5 }}
                  onChangeText={text => setBusinessEmail(text)}
                  value={businessemail}          
                  />


            <View style={{
                flexDirection:"row",
                marginHorizontal:20,
                marginTop:20,
                position:"relative"
            }}>
         <Text style={{
             color:"#565b64"
            }}
            >Business Phone</Text>
        <Text style={{color:"red",fontSize:30,position:"absolute",right:Platform.OS==="ios"?260:225,top:-10}}>*</Text>  
      </View>
      <TextInput
              style={{ 
                  height: 40, 
                  borderWidth: 1,
                  width:330,
                  borderRadius:10,
                   borderColor:"gray",
                   marginHorizontal:20,
                   padding:10,
                   marginVertical:5
                }}
                onChangeText={text => setBusinessPhone(text)}
                value={businessphone}          
                />


<View style={{
    flexDirection:"row",
    marginHorizontal:20,
    marginTop:20,
    position:"relative"
}}>
        <Text style={{
            color:"#565b64"
        }}>Business/Office Address</Text>
        <Text style={{color:"red",fontSize:30,position:"absolute",right:Platform.OS==="ios"?210:175,top:-10}}>*</Text> 
 
      </View>
      <TextInput
              style={{ 
                  height: 40, 
                  borderWidth: 1,
                  width:330,
                  borderRadius:10,
                  borderColor:"gray",
                  marginHorizontal:20,
                  padding:10,
                  marginVertical:5 }}
                  onChangeText={text => setBusinessAddress(text)}
                  value={businessaddress}
                  
                  />


<View style={{
    flexDirection:"row",
    marginHorizontal:20,
    marginVertical:10,
    position:"relative"
}}>
        <Text style={{
            color:"#565b64"
        }}>Business State </Text>
        <Text style={{color:"red",fontSize:30,position:"absolute",right:Platform.OS==="ios"?270:235,top:-10}}>*</Text>       
      </View>
      <SelectDropdown
    data={states}
    onSelect={(selectedItem, index) => {
        setState(selectedItem.title);
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
        }}>Business City </Text>
        <Text style={{color:"red",fontSize:30,position:"absolute",right:Platform.OS==="ios"?280:245,top:-10}}>*</Text>       
      </View>
      <SelectDropdown
    data={states}
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
        }}>Business Market</Text>
        <Text style={{color:"red",fontSize:30,position:"absolute",right:Platform.OS==="ios"?260:225,top:-10}}>*</Text>       
      </View>
      <SelectDropdown
    data={states}
    onSelect={(selectedItem, index) => {
        setMarket(selectedItem.title);
    }}
    renderButton={(selectedItem) => {
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
    marginTop:20,
    position:"relative"
}}>
        <Text style={{
            color:"#565b64"
        }}>About Business</Text>
        <Text style={{color:"red",fontSize:30,position:"absolute",right:Platform.OS==="ios"?260:230,top:-10}}>*</Text> 
 
      </View>
      <TextInput
              style={{ 
                  height: 100, 
                  borderWidth: 1,
                  width:330,
                  borderRadius:10,
                  borderColor:"gray",
                  marginHorizontal:20,
                  // alignSelf:"center",
                  padding:10,
                  marginVertical:5 }}
                  onChangeText={text => setAbout(text)}
                  value={about}            
                  />
{/*                   
       <View style={{
    flexDirection:"row",
    marginHorizontal:20,
    marginTop:20,
    position:"relative"
}}>
        <Text style={{
            color:"#565b64"
        }}>Select Payment Option</Text>
        <Text style={{color:"red",fontSize:30,position:"absolute",right:Platform.OS==="ios"?210:240,top:-10}}>*</Text> 
 
      </View>
      <Radio Options={Options}
           CheckedValue={Flutterwave} 
          style={{marginBottom:15}}
          onChange={setAccountType}/> */}

<TouchableOpacity 
  onPress={HandleSubmit}

style={{
        backgroundColor:"#337ab7",
        padding:10,
        borderRadius:10,
        marginHorizontal:20,
        width:340,
        marginVertical:20,
       
        // alignSelf:"center",
        alignItems:"center",
        justifyContent:"center"
       }}>
        <Text style={{color:"white",fontWeight:"bold"}}>Submit</Text>
       </TouchableOpacity>
    <Text style={{marginVertical:80}}></Text>

          
</ScrollView>
    </SafeAreaView>
  )
}

export default Business

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#fefefe",
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
    dropdownButtonStyle: {
        width: 330,
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