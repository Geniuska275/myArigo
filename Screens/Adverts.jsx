import { 
    SafeAreaView,
    StyleSheet,
    Text, 
    View,
    Platform,
    TextInput,
    TouchableOpacity,
    Image,
    Alert
   } from 'react-native'
import { Octicons } from '@expo/vector-icons';
import React,
{
    useState,
    useEffect
} from 'react'
import Header from '../Components/Header'
import constants from "expo-constants";
import { ScrollView } from 'react-native';
import * as ImagePicker from "expo-image-picker"
import  HandleSubmit  from '../helpers/HandleSubmit';


const Adverts = ({navigation}) => { 
    const [brand, setBrandName] = useState(" ");
    const [Email, setEmail] = useState(" ");
    const [Mobile, setMobile] = useState(" ");
    const [AdDescription, setAdsDescription] = useState(" ");
    const [AdsBanner, setAdsBanner] = useState(" ");
    const [images, setImages]= useState([])

    useEffect(()=>{
        (async()=>{
          const galleryStatus=await ImagePicker.requestMediaLibraryPermissionsAsync();
          setHasGalleryPermission(galleryStatus.status == "granted")
        })()
      },[]);


    const pickImage=async () =>{
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
    
     const submit=()=>{
      const data={
        brand:brand,
        email:Email,
        mobile:Mobile,
        adDescription:AdDescription,
        adsBanner:AdsBanner
      }
       if(brand && Email && Mobile && AdDescription && AdsBanner){ 
         Alert.alert("Advert Submitted", "Thank you for submitting your advert. We will contact you within 48 working hours.")
       }else{
         Alert.alert("Invalid Input", "Please fill all the required fields", [
           { text: "OK", onPress: () => console.log("OK Pressed") },
         ]);
       }
     }
          
  return (  
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation}/>
      <Text style={styles.text}>Adverts</Text>
      <ScrollView>
        <Text style={{
            marginHorizontal:20,
            margin:10,
            fontSize:14,
            fontWeight:"bold"
        }}>Fill the form below and we would contact you within 48 working hours.  </Text>
       <View>
       <Text style={{
            color:"#565b64",
            marginHorizontal:20,
            marginTop:20,
            fontSize:14,
            fontWeight:"bold"
        }}>Brand Name </Text>
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
                 onChangeText={(text) => setBrandName(text)}
                 value={brand}
              />
         <View>
            <Text style={{
            color:"#565b64",
            marginHorizontal:20,
            marginTop:20,
            fontSize:14,
            fontWeight:"bold"
          }}>Email </Text>
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
                 onChangeText={(text) => setEmail(text)}
                 value={Email}
              />
                        <View>
            <Text style={{
            color:"#565b64",
            marginHorizontal:20,
            marginTop:20,
            fontSize:14,
            fontWeight:"bold"
          }}>Mobile Number </Text>
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
                 onChangeText={(text) => setMobile(text)}
                 value={Mobile}
              />
         
         <View>
            <Text style={{
            color:"#565b64",
            marginHorizontal:20,
            marginTop:20,
            fontSize:14,
            fontWeight:"bold"
          }}>Ad Description </Text>
      </View>
      <TextInput
              style={{ 
                  height: 40, 
                  borderWidth: 1,
                  width:350,
                  height:100,
                  borderRadius:10,
                  borderColor:"gray",
                  marginHorizontal:20,
                 marginVertical:5 }}
                 onChangeText={(text) => setAdsDescription(text)}
                 value={AdDescription}
              />
         <View>
         <Text style={{
            color:"#565b64",
            marginHorizontal:20,
            marginTop:20,
            fontSize:14,
            fontWeight:"bold"
          
        }}>Ad Banner </Text>

       </View>
        <TouchableOpacity onPress={()=>pickImage()} 
         style={{ 
            marginHorizontal:20,      
          }}>
        <Image source={require("./image-upload.png")} style={{width:80,height:80}}/> 
      </TouchableOpacity>
      <TouchableOpacity onPress={submit} style={{
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

export default Adverts

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "white",
    marginTop: constants.statusBarHeight,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', 
    position:"relative",
    width:360,
    height:150,
    borderRadius:15,
    marginHorizontal:20,
    alignSelf:"center",
    marginBottom:10
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
  gridView: {
    marginTop: 10,
    flex: 1,
    marginHorizontal:20
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
})