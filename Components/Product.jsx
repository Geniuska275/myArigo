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


   const getAllProducts = async ()=>{
    const baseUrl = "https://app.myarigo.com/api/products"

   await axios.get(baseUrl)
  .then(response => {

    setProducts(response.data.data.list.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
   
  }
  useEffect(()=>{
    getAllProducts();
  },[])

  

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
    <TouchableOpacity 
     onPress={()=>navigation.navigate("ProductDetails",{product:item})}
    style={{
      width:160,
      height:180,
      borderWidth:0.5,
      borderColor:"gray",
      borderRadius:10,
      margin:10,
      position:"relative",
      marginHorizontal:20,
      alignSelf:"center",
      backgroundColor:"white"
    
    }}>
     <Image 
     source={{
       uri:item.images[0].image_url     
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
       fontWeight:"bold",
       backgroundColor:"white"
     }}>{item.name}</Text>
     <Text 
     style={{
     
       textAlign:"center",
      
       fontWeight:"bold",
       alignSelf:"center",
    
       color:"#243c56",
       fontSize:15
    
     }}
     >#{item.price}</Text>
    
   
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
    



    </TouchableOpacity>


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