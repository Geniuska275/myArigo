import { SafeAreaView, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import constants from "expo-constants";
import { ScrollView } from 'react-native';
import { Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const StoreScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
        <Header navigation={navigation}/>
        <ScrollView>
            <View style={{
                width:340,
                height:660,
                marginVertical:10,
                alignSelf:"center",
                borderColor:"black",
                borderWidth:0.5,
                borderRadius:5
            }}
            
            >
                <View style={{
                    marginVertical:10,
                    alignSelf:"center"
                }}>
                    <Image source={{
                        uri:"https://images.unsplash.com/photo-1715114064378-b97c82f06856?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0N3x8fGVufDB8fHx8fA%3D%3D"
                    }}
                
                
                    style={{
                        width:80,
                        height:80,
                        borderRadius:40
                    }}/>
                    <Text style={{fontWeight:"bold",marginTop:10}}>PATOWORLD</Text>
                </View>
                    <Text style={{textAlign:"center"}}>User Since April 26th,2024.</Text>
                <View style={{marginLeft:10,marginTop:20}}>
                    <View style={{flexDirection:"row",gap:4,marginVertical:5}}>
                        <Text style={{fontWeight:"bold",color:"#a3a6ab"}}>Seller:</Text>
                        <Text>Terkaa pato</Text>
                    </View>
                    <View style={{flexDirection:"row",gap:4,marginVertical:5}}>
                        <Text style={{fontWeight:"bold",color:"#a3a6ab"}}>Email:</Text>
                        <Text>Terkaapato@gmail.com</Text>
                    </View>
                    <View style={{flexDirection:"row",gap:4,marginVertical:5}}>
                        <Text style={{fontWeight:"bold",color:"#a3a6ab"}}>Phone:</Text>
                    <Text>+2348190903445</Text>
                    </View>
                    <View style={{flexDirection:"row",gap:4,marginVertical:5}}>
                        <Text style={{fontWeight:"bold",color:"#a3a6ab"}}>State:</Text>
                    <Text>
                    Lagos
                    </Text>
                    </View>

                    <View style={{flexDirection:"row",gap:4,marginVertical:5}}>
                        <Text style={{fontWeight:"bold",color:"#a3a6ab"}}>City:</Text>
                    <Text>
                    Lagos Island
                    </Text>
                    </View>

                    <View style={{flexDirection:"row",gap:4,marginVertical:5}}>
                        <Text style={{fontWeight:"bold",color:"#a3a6ab"}}>Address:</Text>
                    <Text>
                    Sulurele bode Thomas, oladipo albino
                    </Text>
                    </View>

                    <View style={{flexDirection:"row",gap:4,marginVertical:5}}>
                        <Text style={{fontWeight:"bold",color:"#a3a6ab"}}>Facebook:</Text>
                    <Text>
                 
                    </Text>
                    </View>

                    <View style={{flexDirection:"row",gap:4,marginVertical:5}}>
                        <Text style={{fontWeight:"bold",color:"#a3a6ab"}}>Twitter:</Text>
                    <Text>
                 
                    </Text>
                    </View>

                    <View style={{flexDirection:"row",gap:4,marginVertical:5}}>
                        <Text style={{fontWeight:"bold",color:"#a3a6ab"}}>Instagram:</Text>
                    <Text>
               
                    </Text>
                    </View>


                    <View style={{flexDirection:"row",gap:4,marginVertical:5}}>
                        <Text style={{fontWeight:"bold",color:"#a3a6ab"}}>RC-NUMBER:</Text>
                    <Text>
                   
                    </Text>
                    </View>
                    <View style={{
        flexDirection:"row",
        gap:4,
    
        marginTop:5}}>
       <AntDesign name="star" size={16} color="#dedfe0" />
       <AntDesign name="star" size={16} color="#dedfe0" />
       <AntDesign name="star" size={16} color="#dedfe0" />
       <AntDesign name="star" size={16} color="#dedfe0" />
       <AntDesign name="star" size={16} color="#dedfe0" />

       </View>

       <Text style={{
        fontSize:17,
        fontWeight:"bold",
        color:"#5894c5",
        marginVertical:10
       }}>Rate this business</Text>
               <View style={{
                backgroundColor:"#f9f9f9",
                borderRadius:10,
                marginHorizontal:10
               }}>

               <TouchableOpacity 
           style={{
               backgroundColor:"#337bb7",
               width:240,
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
                    }}>login to follow business</Text>
            </TouchableOpacity>
            <TouchableOpacity 
           style={{
                 backgroundColor:"#337bb7",
                 width:240,
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
       </TouchableOpacity>
              
        </View> 
        </View>
            </View>

            <View style={{
                borderWidth:0.5,
                borderColor:"black",
                marginHorizontal:35,
                borderRadius:10,
                paddingVertical:10
            }}>
                <Text style={{marginVertical:10,marginLeft:10}}>Share On</Text>
                <View style={{flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>
                <Fontisto name="email" size={30} color="black" />
                <FontAwesome6 name="square-whatsapp" size={30} color="#51b02b" />
                <FontAwesome name="facebook-square" size={30} color="#0c64f6" />
                 <FontAwesome name="twitter-square" size={30} color="#359cf1" />
                </View>
            </View>

        </ScrollView>
     
    </SafeAreaView>
  )
}

export default StoreScreen

const styles = StyleSheet.create({
    container:{flex: 1,
        backgroundColor: "white",
        marginTop: constants.statusBarHeight,
      },
})