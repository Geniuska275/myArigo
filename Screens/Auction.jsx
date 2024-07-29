import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import NewHeader from '../Components/NewHeader'
import constants from "expo-constants";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Auction = () => {
    const [items, setItems] = React.useState([
        { name: 'Business Wyze',store:"Imperatrice Wristhub", date:"28th June,2024",price:"# 6,000,000",time:"14:00 PM", img:"https://images.unsplash.com/photo-1717630297768-bbbd8dd16b4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D ",image:"https://images.unsplash.com/photo-1717313860625-4d4311b5f9d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8" },
        { name: 'imperatrice',store:"My Arigo", date:"28th June,2024",price:"# 6,000,000",time:"14:00 PM", img:"https://plus.unsplash.com/premium_photo-1714839369468-cceb97dc742f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D",image:"https://images.unsplash.com/photo-1716916959437-c904cdabd0f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8" },
        { name: 'Business Wyze',store:"SQE HOLDINGS LTD", date:"28th June,2024",price:"# 6,000,000",time:"14:00 PM", img:"https://images.unsplash.com/photo-1717630297768-bbbd8dd16b4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D ",image:"https://images.unsplash.com/photo-1717511140034-2fff4e952dc1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D" },
        { name: 'Business Wyze',store:"Imperatrice Wristhub", date:"28th June,2024",price:"# 6,000,000",time:"14:00 PM", img:"https://images.unsplash.com/photo-1717630297768-bbbd8dd16b4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D ",image:"https://images.unsplash.com/photo-1717509048735-3cd938174f6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D" },
        { name: 'Business Wyze',store:"Imperatrice Wristhub", date:"28th June,2024",price:"# 6,000,000",time:"14:00 PM", img:"https://images.unsplash.com/photo-1717630297768-bbbd8dd16b4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D ",image:"https://images.unsplash.com/photo-1716724854567-9ec995836d19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D" },
        { name: 'Business Wyze',store:"Imperatrice Wristhub", date:"28th June,2024",price:"# 6,000,000",time:"14:00 PM", img:"https://images.unsplash.com/photo-1717630297768-bbbd8dd16b4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D ",image:"https://images.unsplash.com/photo-1717451061024-5a74a0a112de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NXx8fGVufDB8fHx8fA%3D%3D" },
        { name: 'Business Wyze',store:"Imperatrice Wristhub", date:"28th June,2024",price:"# 6,000,000",time:"14:00 PM", img:"https://images.unsplash.com/photo-1717630297768-bbbd8dd16b4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D ",image:"https://images.unsplash.com/photo-1712025853995-d59634cf286e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OXx8fGVufDB8fHx8fA%3D%3D" },
      ]);
      const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
        <NewHeader/>
        <Text style={styles.text}>Auction</Text>
        <TouchableOpacity style={{
            width:60,
            height:60,
            borderRadius:30,
            position:"absolute",
            bottom:35,
            right:20,
            zIndex:10,
            backgroundColor:"#337ab7",
            justifyContent:"center",
            alignItems:"center"
          }}
          
          onPress={()=>navigation.navigate("HomeScreen")}>
           <MaterialCommunityIcons name="home" size={24} color="white" />
          </TouchableOpacity>
        <FlatList
    
      data={items}
   
      renderItem={({ item }) => (
       <View style={{
         width:320,
         height:220,
         borderWidth:0.5,
         borderColor:"gray",
         borderRadius:10,
         margin:10,
         position:"relative",
         marginHorizontal:20,
         alignSelf:"center"
       
       }}>
        <Image 
        source={{
          uri:item.image
        }} 
        style={{
          width:"100%",
          height:"70%",
          borderTopLeftRadius:10,
          borderTopRightRadius:10,
          }}/>
        <Text numberOfLines={1} style={{
          textAlign:"center",
          marginVertical:4,
          fontWeight:"bold"
        }}>HOUSES AND SALES</Text>
        <Text 
        style={{
          textAlign:"center",
          marginVertical:4,
          fontWeight:"bold"
        }}
        >{item.price}</Text>
      





       </View>
      )}
    />


      
    </SafeAreaView>
  )
}

export default Auction

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
        paddingVertical:20,
        marginTop:-3,
        fontWeight:"bold",
        color:"#a0a0a0",
        textTransform:"capitalize",
        backgroundColor:"#fafafa"
      },

})