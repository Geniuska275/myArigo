import { FlatList, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Octicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const Enquires = () => {
    const [enq, setEnq] = useState([
        {name:"Enquires",image:"https://images.unsplash.com/photo-1721722587845-baeeb48621b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8aVVJc25WdGpCMFl8fGVufDB8fHx8fA%3D%3D",company:"Arigo Outlet"},
        {name:"Local Markets",image:"https://images.unsplash.com/photo-1664806443873-3db387475809?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8aVVJc25WdGpCMFl8fGVufDB8fHx8fA%3D%3D",company:"Find Business"}
    ])
  return (
    <View>
       <FlatList 
       data={enq}
        renderItem={({item})=>(
            <ImageBackground source={{uri:item.image}} style={styles.backgroundImage}>
            <View style={{position:"absolute",top:15,left:10,flexDirection:"row",borderRadius:20,backgroundColor:"white",padding:5,gap:10,alignItems:"center"}}>
            <Octicons name="dot-fill" size={24} color="#337ab7" />
              <Text  style={{fontWeight:"bold",color:"black",width:150}}
              numberOfLines={1}
              >{item.name}</Text>
            </View>
            <TouchableOpacity style={{
                position:"absolute",
                 alignItems:"center",
                 flexDirection:"row",
                top:140,
                left:120,     
                backgroundColor:"#337ab7",
                paddingHorizontal:10,
                paddingVertical:12,
                borderRadius:15,
            }} >
                <Entypo name="plus" size={24} color="white" />
                <Text style={{color:"white",fontWeight:"bold"}}>{item.company}</Text>
            </TouchableOpacity>
          </ImageBackground>



        )}
       />
    </View>
  )
}

export default Enquires

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', 
        position:"relative",
        width:360,
        height:200,
        borderRadius:15,
        marginHorizontal:30,
        alignSelf:"center",
        marginBottom:10
      },
})