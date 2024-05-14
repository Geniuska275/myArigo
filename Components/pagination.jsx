import { StyleSheet, Text, View,Animated, Dimensions } from 'react-native'
import React from 'react'
const {width} =Dimensions.get("window")
const Pagination = ({data,ScrollX}) => {

  return (
    <View style={styles.container}>
      {data.map((_,idx)=>{
        const inputRange=[1,2,3]
      
       const dotWidth=ScrollX.interpolate({
        inputRange,
        outputRange:[12,30,12],
        extrapolate:"clamp"
       })
       return <Animated.View  key={idx} style={[styles.dot,{width:dotWidth}]}/>
})}
    </View>
  )
}

export default Pagination

const styles = StyleSheet.create({
    dot:{
     width:16,
     height:16,
     borderRadius:8,
     backgroundColor:"#ccc",
     

    },
    container:{
        position:"absolute",
        bottom:-30,
        flexDirection:"row",
        marginHorizontal:3,
        alignItems:"center",
        justifyContent:"center",
        width:"100%"

    }
})