import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { FlatGrid } from 'react-native-super-grid';
import { FontAwesome6 } from '@expo/vector-icons';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Product = () => {
  const [products, setProducts] = useState([])
   const navigation = useNavigation()


   const getAllPost = async ()=>{
    const baseUrl = "https://app.myarigo.com/api/posts"
    try {
      const token = await AsyncStorage.getItem("token")
      const response = await axios.get(baseUrl,{
        headers:{
          Authorization: `Bearer ${token}`
        }
      })
      
      setProducts(response.data.data.posts.data)


    } catch (error) {
      console.error('Error:', error);
    }
  }
  useEffect(()=>{
    getAllPost();
  },[])

  const [items, setItems] = React.useState([
    { name: 'Business Wyze',store:"Imperatrice Wristhub", date:"28th June,2024",price:"# 6,000,000",time:"14:00 PM", img:"https://images.unsplash.com/photo-1717630297768-bbbd8dd16b4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D ",image:"https://images.unsplash.com/photo-1717313860625-4d4311b5f9d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8" },
    { name: 'imperatrice',store:"My Arigo", date:"28th June,2024",price:"# 6,000,000",time:"14:00 PM", img:"https://plus.unsplash.com/premium_photo-1714839369468-cceb97dc742f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D",image:"https://images.unsplash.com/photo-1716916959437-c904cdabd0f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8" },
    { name: 'Business Wyze',store:"SQE HOLDINGS LTD", date:"28th June,2024",price:"# 6,000,000",time:"14:00 PM", img:"https://images.unsplash.com/photo-1717630297768-bbbd8dd16b4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D ",image:"https://images.unsplash.com/photo-1717511140034-2fff4e952dc1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D" },
    { name: 'Business Wyze',store:"Imperatrice Wristhub", date:"28th June,2024",price:"# 6,000,000",time:"14:00 PM", img:"https://images.unsplash.com/photo-1717630297768-bbbd8dd16b4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D ",image:"https://images.unsplash.com/photo-1717509048735-3cd938174f6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D" },
    { name: 'Business Wyze',store:"Imperatrice Wristhub", date:"28th June,2024",price:"# 6,000,000",time:"14:00 PM", img:"https://images.unsplash.com/photo-1717630297768-bbbd8dd16b4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D ",image:"https://images.unsplash.com/photo-1716724854567-9ec995836d19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D" },
    { name: 'Business Wyze',store:"Imperatrice Wristhub", date:"28th June,2024",price:"# 6,000,000",time:"14:00 PM", img:"https://images.unsplash.com/photo-1717630297768-bbbd8dd16b4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D ",image:"https://images.unsplash.com/photo-1717451061024-5a74a0a112de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NXx8fGVufDB8fHx8fA%3D%3D" },
   
   
 
    // Add more items as needed
  ]);

  console.log(products)
  return (
    <View style={styles.container}>
        <View style={{
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center",
            marginTop:10,
            paddingVertical:20                
        }}>
      <Text style={{
        fontWeight:"bold",
        marginLeft:10
      }}>Products</Text>
      <TouchableOpacity style={{
        flexDirection:"row",
        gap:10,  
        alignItems:"center",
        marginRight:10   
      }}
      onPress={()=>navigation.navigate("Product")}
      >
        <Text style={{
            color:"#337ab7"
        }}>View All</Text>
        <FontAwesome6 name="arrow-right" size={18} color="#337ab7" />
      </TouchableOpacity>
        </View>

        <FlatGrid
     itemDimension={130}
     data={products}
     spacing={10}
  style={styles.gridView}
  renderItem={({ item }) => (
    <View style={{
      width:160,
      height:150,
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
     }}>{item.name}</Text>
     <Text 
     style={{
      position:"absolute",
       textAlign:"center",
       marginVertical:4,
       fontWeight:"bold",
       alignSelf:"center",
       top:60,
       color:"white"
     }}
     >{item.price}</Text>
   
     <Text style={{
       textAlign:"center",
       fontSize:12,
       marginBottom:4
     }}>{item.date} {item.time}</Text>
    
     <Image source={{uri:item.img}} style={{
       width:40,
       height:40,
       borderRadius:20,
       position:"absolute",
       top:10,
       left:10
     }}/>
    



    </View>


  )}
/>

       



    </View>
  )
}

export default Product

const styles = StyleSheet.create({
 container:{
    backgroundColor:"#e8ecec",
    marginTop:"30px"
 },
 gridView: {
  marginTop: 10,
  flex: 1,
}, 

})