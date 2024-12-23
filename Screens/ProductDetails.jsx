import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View,Button, TextInput } from 'react-native'
import React, { useState } from 'react'
import Header from '../Components/Header'
import constants from "expo-constants";
import Carousel from '../Components/Carousel';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Divider } from 'react-native-elements';
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { Linking } from 'react-native';

import Modal from 'react-native-modal';

// import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import Display from '../Components/Display';
import Related from '../Components/Related';
import { useNavigation } from '@react-navigation/native';



const ProductDetails = ({navigation,route}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [show,setShow]=useState(true)
  const Navigation = useNavigation()
  const [Secure, setSecure] = useState(false);
  const [desc,setDesc]=useState("Drop a message for the seller")
  const [place,setPlace]=useState("...write a message.")

  const [num, setNum]= useState(3)
  const product=route.params.product
  const toggleModal = () => setIsModalVisible(!isModalVisible);



 const handleCall = async () => {
  setShow(prev=>!prev)
  let phoneNumberValue = product.brand.business_number;
  if (Platform.OS === 'android') {
    phoneNumberValue = `tel:${product.brand.business_number}`;
  } else {
    phoneNumberValue = `telprompt:${product.brand.business_number}`;
  }

  await Linking.openURL(phoneNumberValue);
};

  

  return (
    <SafeAreaView style={styles.container}>
    <Header navigation={navigation}/>
    <ScrollView>
    <Modal isVisible={isModalVisible}>
    <View style={{ 
     
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"white",
      width:350,
      height:260,
      borderRadius:10,
      alignSelf:"center"
    
      }}
      >
        <TouchableOpacity onPress={toggleModal}
         style={{
          justifyContent:"flex-end",
          marginLeft:250,
          marginBottom:20
        }}>

        <AntDesign name="closecircle" size={24} color={"#337bb7"}   />
        </TouchableOpacity>
    <Text style={{fontWeight:"bold"}}>{desc}</Text>
    <TextInput placeholder={place} style={{ borderWidth:1,width:300, height:80,paddingVertical:10,borderRadius:10,marginVertical:10}}/>
    <TouchableOpacity style={{
        backgroundColor:"#337bb7",
        width:300,
        paddingVertical:10,
        borderRadius:8,
        marginHorizontal:20,
        marginVertical:10}}>
        <Text style={{
          fontWeight:"bold",
          color:"white",
          alignSelf:"center"}}>SEND</Text>
       </TouchableOpacity>
    
  </View>
   </Modal>

      <Text 
        style={{
        fontSize:25,
        fontWeight:"bold",
        marginHorizontal:20,
        textTransform:"uppercase"
        }}>{product.brand.business}</Text>
      <Image
      resizeMode="contain"
      style={{width:350,height:200,alignSelf:"center",marginVertical:10}} 
     source={{uri:`${product.images[0].image_url}`}} />
      <View style={{
        flexDirection:"row",
        gap:10,
        marginVertical:6,
        marginHorizontal:20,
        alignItems:"center"
        }}>
        <Text style={{
              fontWeight:"bold",
              color:"#62666f"}}
           >Reach:</Text>
        <Text>{Secure? num : ""}</Text>
        {Secure ? 
        <FontAwesome name="eye" size={24} color="#62666f"  onPress={()=>{
     setSecure(false)
        }}/>:
       <Entypo name="eye-with-line" size={24} color="#62666f" 
       onPress={()=>{
        setSecure(true)
           }}
      />
   }  
      </View>

      <View style={{flexDirection:"row",gap:3, fontWeight:"bold",marginHorizontal:20,alignItems:"center"}}>
      <FontAwesome name="send" size={16} color="#62666f" />
      <Text>{product.state}</Text>
      </View>

      <View style={{marginHorizontal:20,flexDirection:"row",gap:4,marginVertical:10}}>
        <Text style={{fontWeight:"bold",color:"#62666f"}}>Posted:</Text>
        <Text style={{fontWeight:"bold",color:"#62666f"}}>{new Date().toLocaleDateString()}</Text>
        <Text style={{fontWeight:"bold",color:"#62666f"}}>{new Date().toLocaleTimeString()}</Text>
      </View>
      <Text style={{
        marginHorizontal:20,
        fontWeight:"bold",
        color:"#62666f"}}>Product Rating</Text>
       <View style={{
        flexDirection:"row",
        gap:4,
        marginHorizontal:20,
        marginTop:5}}>
       <AntDesign name="star" size={16} color="#dedfe0" />
       <AntDesign name="star" size={16} color="#dedfe0" />
       <AntDesign name="star" size={16} color="#dedfe0" />
       <AntDesign name="star" size={16} color="#dedfe0" />
       </View>
       <TouchableOpacity style={{
        backgroundColor:"#337bb7",
        width:150,
        paddingVertical:10,
        borderRadius:8,
        marginHorizontal:20,
        marginVertical:10}}>
        <Text style={{
          fontWeight:"bold",
          color:"white",
          alignSelf:"center"}}>Rate this product</Text>
       </TouchableOpacity>
       <TouchableOpacity style={{
        backgroundColor:"#337bb7",
        width:300,
        paddingVertical:10,
        borderRadius:8,
        marginHorizontal:20,
        marginVertical:10}}>
        <Text style={{
        fontWeight:"bold",
        color:"white",
        alignSelf:"center"}}>Verify this product/transactions</Text>
       </TouchableOpacity>
       <TouchableOpacity style={{
        backgroundColor:"#337bb7",
        width:150,
        paddingVertical:10,
        borderRadius:8,
        marginHorizontal:20,
        marginVertical:10}}>
        <Text style={{
          fontWeight:"bold",
          color:"white",
          alignSelf:"center"}}>Let's  Assist you</Text>
       </TouchableOpacity>
       <View style={{
        marginHorizontal:20,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: "black",
        shadowOpacity: 0.1,
        width:300,
        height:150,
        borderWidth:0.5,
        borderRadius:10}}>

        <Text 
          style={{
          fontWeight:"bold",
          marginHorizontal:10,
          marginVertical:20
          }}>Product Description</Text>
        <Text 
          style={{
          marginHorizontal:10,
          marginVertical:20
          }}>It game time oil painting 15x26 patoworld</Text>
       </View>
       <View style={{flexDirection:"row"}}>


       <TouchableOpacity style={{
        borderWidth:2,
        borderColor:"#337bb7",
        width:100,
        paddingVertical:10,
        borderRadius:8,
        marginHorizontal:20,
        marginVertical:10}}>
        <Text style={{
          fontWeight:"bold",
          color:"#337bb7",
          alignSelf:"center"}}>#45</Text>
       </TouchableOpacity>
          
       <TouchableOpacity 
       onPress={handleCall}
       
       style={{
        borderWidth:2,
        borderColor:"#337bb7",
        width:160,
        paddingVertical:10,
        borderRadius:8,
        marginHorizontal:20,
        marginVertical:10,
        flexDirection:"row",
        justifyContent:"space-evenly"}}>
          <FontAwesome name="phone" size={24} color="#337bb7" />
        <Text style={{
          fontWeight:"bold",
          color:"#337bb7",
          alignSelf:"center"}}>Show Contact</Text>
       </TouchableOpacity>

          </View>

            <View style={{marginHorizontal:20,flexDirection:"row",gap:6,marginVertical:6}}>
            <Fontisto name="email" size={30} color="black" />
            <FontAwesome6 name="square-whatsapp" size={30} color="#51b02b" />
            <FontAwesome name="facebook-square" size={30} color="#0c64f6" />
            <FontAwesome name="twitter-square" size={30} color="#359cf1" />

              
            </View>
          <Divider 
            style={{ 
            backgroundColor: 'black' ,
            marginHorizontal:20,
            marginTop:20}} />

            <View style={{
              width:300,
              height:220,
              shadowOffset: { width: 2, height: 2 },
              shadowColor: "black",
              shadowOpacity: 0.1,
              elevation:1,
              borderWidth:0.5,
              borderColor:"black",
              alignSelf:"center",
              marginVertical:10,
              borderRadius:5
              }}> 
              <View style={{
                alignSelf:"center"
              }}>
                <Image 
                source={{
                  uri:`${product.images[0].image_url}`
                }}
                resizeMethod='contain'
                style={{
                  width:80,
                  height:80,
                  marginVertical:16,
                  borderRadius:40,
                }}
                 />
                 <Text>{product.brand.business}</Text>

              </View>
              <Text
              style={{
                textAlign:"center",
                color:"#7b838a"
              }} 
              >User Since April 26th,2024</Text>

           <TouchableOpacity 
           style={{
                 backgroundColor:"#337bb7",
                 width:150,
                 paddingVertical:10,
                 borderRadius:8,
                 marginHorizontal:20,
                 marginVertical:10,
                 alignSelf:"center"
                 }} 
                 onPress={()=>Navigation.navigate("StoreDetails",{product:product})}
                 >
            <Text 
            style={{
              fontWeight:"bold",
              color:"white",
              alignSelf:"center"
              }}>Visit My Store</Text>
       </TouchableOpacity>
            </View>


            <View style={{
              width:300,
              height:220,
              shadowOffset: { width: 2, height: 2 },
              shadowColor: "black",
              shadowOpacity: 0.1,
              elevation:1,
              borderWidth:0.5,
              borderColor:"black",
              alignSelf:"center",
              marginVertical:10,
              borderRadius:5
              }}> 

              <View style={{
                width:250,
                height:240,
                flex:1,                
                backgroundColor:"#f9f9f9",
                alignSelf:"center", 
                borderRadius:5,
                marginVertical:20
              }}>
             
            {show ? 
            <TouchableOpacity 
            onPress={handleCall}
           style={{
                 backgroundColor:"#337bb7",
                 width:180,
                 paddingVertical:8,
                 borderRadius:8,
                 marginHorizontal:20,
                 marginVertical:10,
                 alignSelf:"center",
                 flexDirection:"row",
                 justifyContent:"space-evenly"
                }}>
                 <FontAwesome name="phone" size={24} color="white" />
        <Text style={{
            fontWeight:"bold",
            color:"white",
            alignSelf:"center",
            textTransform:"uppercase"
        }}>Show Contact</Text>
       </TouchableOpacity>: 
         <TouchableOpacity 
         onPress={handleCall}
        style={{
              backgroundColor:"#337bb7",
              width:180,
              paddingVertical:8,
              borderRadius:8,
              marginHorizontal:20,
              marginVertical:10,
              alignSelf:"center",
              flexDirection:"row",
              justifyContent:"space-evenly"
             }}>
              <FontAwesome name="phone" size={24} color="white" />
     <Text style={{
         fontWeight:"bold",
         color:"white",
         alignSelf:"center",
         textTransform:"uppercase"
     }}>{product.brand.business_number}</Text>
    </TouchableOpacity>
       
       }

       <TouchableOpacity 
          onPress={()=>{
            setDesc("Drop a message for the seller")
            setPlace("...write a message")
            toggleModal()
          }}
           style={{
                 backgroundColor:"#337bb7",
                 width:180,
                 paddingVertical:8,
                 paddingHorizontal:10,
                 borderRadius:8,
                 marginHorizontal:20,
                 marginVertical:10,
                 alignSelf:"center",
                 flexDirection:"row",
                 justifyContent:"space-evenly"
                 }}>
                  <AntDesign name="wechat" size={24} color="white" />
                  {/* <Entypo name="chat" size={24} color="white" /> */}
                 <Text style={{
                   fontWeight:"bold",
                   color:"white",
                   alignSelf:"center",
                   textTransform:"uppercase"
                   }}>drop a meassage</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={()=>{
              setDesc("Drop your bidding price")
              toggleModal()
              setPlace("write down your bid.")
            }}
           style={{
                 backgroundColor:"#337bb7",
                 width:180,
                 paddingVertical:8,
                 borderRadius:8,
                 marginHorizontal:20,
                 marginVertical:10,
                 alignSelf:"center",
                 flexDirection:"row",
                 justifyContent:"space-evenly"
                 }}>
                  <MaterialCommunityIcons name="cash" size={24} color="white" />
                {/* <FontAwesome name="phone" size={24} color="white" /> */}
                 <Text style={{
                   fontWeight:"bold",
                   color:"white",
                   alignSelf:"center",
                   textTransform:"uppercase"
                   }}>make an offer</Text>
            </TouchableOpacity>
              </View>
                

                


            </View>


            <View style={{
              width:300,
              height:260,
              shadowOffset: { width: 2, height: 2 },
              shadowColor: "black",
              shadowOpacity: 0.1,
              elevation:1,
              borderWidth:0.5,
              borderColor:"black",
              alignSelf:"center",
              marginVertical:10,
              borderRadius:5
              }}> 
              <Text style={{
                textAlign:"center",
                fontWeight:"bold",
                fontSize:16,
                marginVertical:10
              }}
              >Safety Tips</Text>
              <Text style={{
                lineHeight:25,
                marginHorizontal:20,
                color:"#8e8e8e"
              }}>Do not pay in the advance even for the delivery try to meet at a safe public location,check 
                the item BEFORE you buy it.   
              </Text>

              <Text style={{
                lineHeight:25,
                marginHorizontal:20,
                color:"#aecce3",
                textTransform:"uppercase"
              }}>you can also request we verify the transaction for you. 
              </Text>

                   
       <TouchableOpacity style={{
        borderWidth:1,
        borderColor:"#337bb7",
        width:160,
        paddingVertical:10,
        borderRadius:8,
        marginHorizontal:20,
        marginVertical:10,
        alignSelf:"center"
       }}>
          
        <Text style={{
          fontWeight:"bold",
          color:"#337bb7",
          alignSelf:"center"}}>Report Abuse</Text>
       </TouchableOpacity>
            </View>
         


            <View style={{
              width:300,
              height:120,
              shadowOffset: { width: 2, height: 2 },
              shadowColor: "black",
              shadowOpacity: 0.1,
              elevation:1,
              borderWidth:0.5,
              borderColor:"black",
              alignSelf:"center",
              marginVertical:10,
              borderRadius:5
              }}> 
              <View style={{
                width:250,
                height:60,
                flex:1,  
                backgroundColor:"#f9f9f9",
                alignSelf:"center", 
                borderRadius:5,
                marginVertical:20
              }}>
                    <TouchableOpacity 
           style={{
                 backgroundColor:"#337bb7",
                 width:200,
                 marginTop:20,
                 paddingVertical:8,
                 borderRadius:8,
                 marginHorizontal:20,
                 marginVertical:10,
                 alignSelf:"center",
                
                 }}>
                 
        <Text style={{
          fontWeight:"bold",
          color:"white",
          alignSelf:"center",
          textTransform:"uppercase"
          }}>Post product like this</Text>
       </TouchableOpacity>
         
              </View>
            </View>
            <Text style={{
              marginHorizontal:30,
              marginVertical:10
            }}>Related Products</Text>
            
           <View style={{
              marginHorizontal:30,
              flexDirection:"row",
              justifyContent:"space-around",
              alignItems:"center"
            }}>
              <Related/>
              <Related/>



            </View>
            
 





    </ScrollView>
  </SafeAreaView>
  )
}

export default ProductDetails

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
  }
})