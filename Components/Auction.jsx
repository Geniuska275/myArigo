import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Auction = ({data}) => {
    const {container}=styles;
  return (
    <View style={container}>

       <Image 
        source={{uri: data.img}}  
        style={{
        width:90,
        height:50
       }}/>
       <Text>{data.text}</Text>
       <Text>{data.desc}</Text>
    </View>
  )
}

export default Auction

const styles = StyleSheet.create({
    container:{
        marginHorizontal:20,
    }
})