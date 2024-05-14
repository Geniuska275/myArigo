
import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Related = () => {
    const item={
        id:1,
        img:"https://images.unsplash.com/photo-1715238146642-b18a9d17be04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D",
        desc:"nice products",
        date:"23rd May",
        time:"08:34pm",
        price:"#3000"


    }
  const navigation=useNavigation()
   console.log(item.img)
  return (
    <TouchableOpacity style={styles.container} onPress={()=>navigation.navigate("ProductDetails")}>
      <View style={{position:"relative"}}>
      <Image source={{uri:item.img}}  style={{width:"100%",height:150,borderTopLeftRadius:30,borderTopRightRadius:30}}/>
       <View style={styles.opacityView}>
        <Text style={{color:"white",fontWeight:"bold"}}>{item.price}</Text>
       </View>
      </View>
      <Text style={{textTransform:"uppercase",textAlign:"center",marginHorizontal:5,fontWeight:"bold",marginVertical:10}}
       numberOfLines={1}>{item.desc}</Text>
 
    <Text style={{textAlign:"center",marginHorizontal:5,marginVertical:5}}
       numberOfLines={1}>{item.date}    {item.time}</Text>
    </TouchableOpacity>
  )
}

export default Related

const styles = StyleSheet.create({
    container:{
      marginVertical:15,
      marginHorizontal:10,
      width:150,
      height:250,
      shadowOffset: { width: 2, height: 2 },
      shadowColor: "black",
    shadowOpacity: 0.1,
    // elevation:4,
  
      borderWidth:0.5,
      borderRadius:30,
    },
    opacityView: {
      opacity: 0.6,
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "black",
      width:"100%",
      height:150,
      borderTopLeftRadius:30,borderTopRightRadius:30
  },
})