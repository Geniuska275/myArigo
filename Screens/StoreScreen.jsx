import { SafeAreaView, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import constants from "expo-constants";
import { ScrollView,Platform } from 'react-native';
import { Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Linking } from 'react-native';

const StoreScreen = ({navigation,route}) => {
    const product=route.params.product
    console.log(product)

    const handleCall = async () => {
        console.log("ran")
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
            <View style={{
                width:340,
                height:500,
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
                        uri:`${product.images[0].image_url}`
                    }}
                
                
                    style={{
                        width:100,
                        alignSelf:"auto",
                        height:100,
                        borderRadius:50
                    }}/>
                    <Text style={{fontWeight:"bold",marginTop:10}}>{product.brand.business}</Text>
                </View>
                    <Text style={{textAlign:"center"}}>User Since April 26th,2024.</Text>
                <View style={{marginLeft:10,marginTop:20}}>
                    <View style={{flexDirection:"row",gap:4,marginVertical:5}}>
                        <Text style={{fontWeight:"bold",color:"#a3a6ab"}}>Seller:</Text>
                        <Text>{product.brand.business_unique_name}</Text>
                    </View>

                    <View style={{flexDirection:"row",gap:4,marginVertical:5}}>
                        <Text style={{fontWeight:"bold",color:"#a3a6ab"}}>Phone:</Text>
                    <Text>{product.brand.business_number}</Text>
                    </View>
                    <View style={{flexDirection:"row",gap:4,marginVertical:5}}>
                        <Text style={{fontWeight:"bold",color:"#a3a6ab"}}>State:</Text>
                    <Text>
                    {product.state}
                    </Text>
                    </View>

                    

                    <View style={{
        flexDirection:"row",
        gap:4,
    
        marginTop:35}}>
       
       </View>

     
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
            onPress={handleCall}
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