import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React ,{ useState,useEffect}from 'react'
import NewHeader from '../Components/NewHeader'
import constants from "expo-constants";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FlatGrid } from 'react-native-super-grid';
import axios from 'axios';
const Product = () => {
    const navigation = useNavigation();
    const [products, setProducts] = useState([])
  


   const getAllProducts = async ()=>{
    const baseUrl = "https://app.myarigo.com/api/products"
   await axios.get(baseUrl)
  .then(response => {
    console.log(response.data.data.list.data);
    setProducts(response.data.data.list.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
   
  }
  useEffect(()=>{
    getAllProducts();
  },[])

  

  console.log(products)
  return (
    <SafeAreaView style={styles.container}>
        <NewHeader/>
        <Text style={styles.text}>Products</Text>
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
          <FlatGrid
     itemDimension={130}
     data={products}
     spacing={10}
  style={styles.gridView}
  renderItem={({ item }) => (
    <View style={{
      width:160,
      height:180,
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
       fontWeight:"bold"
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
    



    </View>


  )}
/>

       
  


      
    </SafeAreaView>
  )
}

export default Product

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