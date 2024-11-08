import { StyleSheet, Text, TouchableOpacity, View,ImageBackground, FlatList } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome6 } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FlatGrid } from 'react-native-super-grid';

const Sponsored = () => {
    const navigation = useNavigation();
    const [items, setItems] =useState([
        { name: 'Business Wyze', img:"",image:"https://images.unsplash.com/photo-1717313860625-4d4311b5f9d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8" },
        { name: 'imperatrice', img:"",image:"https://images.unsplash.com/photo-1716916959437-c904cdabd0f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8" },
        { name: 'Sqe holdings', img:"",image:"https://images.unsplash.com/photo-1717318104110-d8ef457d9c2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D" },
        { name: 'Brains Tech', img:"",image:"https://images.unsplash.com/photo-1717318104110-d8ef457d9c2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D" },
        
      ]);
  return (
    <View style={{
        backgroundColor:"#e8ecec",
        flex:1,
    }}>
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
      }}>Sponsored</Text>
      <TouchableOpacity style={{
        flexDirection:"row",
        gap:10,  
        alignItems:"center",
        marginRight:10   
      }}
      onPress={()=>navigation.navigate("Advert")}
      >
        <Text style={{
            color:"#337ab7"
        }}>View All</Text>
        <FontAwesome6 name="arrow-right" size={18} color="#337ab7" />
      </TouchableOpacity>
        </View>
        


        <FlatGrid
  itemDimension={130}
  data={items}
  spacing={10}
  style={styles.gridView}
  renderItem={({ item }) => (
    <ImageBackground source={{uri:item.image}} style={styles.backgroundImage}>
    <View style={{position:"absolute",
      top:15,left:10,
      flexDirection:"row",
      borderRadius:20,backgroundColor:"white",padding:5,gap:10,alignItems:"center"}}>
    <Octicons name="dot-fill" size={24} color="#337ab7" />
      <Text  style={{fontWeight:"bold",color:"black",width:80}}
      numberOfLines={1}
      >{item.name}</Text>
    </View>
  </ImageBackground>
  )}
/>




    </View>
  )
}

export default Sponsored

const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    flex: 1,
  },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', 
        position:"relative",
        width:160,
        height:150,
        borderRadius:15,
        marginHorizontal:20,
        alignSelf:"center",
        marginBottom:10
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
      gridView: {
        marginTop: 10,
        flex: 1,
     
      },
      itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 10,
        height: 150,
      },
      itemName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
      },
      itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
      },
})