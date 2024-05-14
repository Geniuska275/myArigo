import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

const SlideItem = ({item}) => {
    console.log(item)
  return (
    <View>

    <View style={styles.container}>
      <Image source={{uri:item.img}} style={styles.image}/>
    </View>
    </View>
  )
}

export default SlideItem

const styles = StyleSheet.create({
    
        container:{
            marginVertical:15,
            marginHorizontal:10,
            width:200,
            height:250,
            shadowOffset: { width: 2, height: 2 },
            shadowColor: "black",
            shadowOpacity: 0.1,
          // elevation:4,
            borderWidth:0.5,
            borderRadius:30,
          },
          image:{
            width:"100%",
            height:100
          }
         
})