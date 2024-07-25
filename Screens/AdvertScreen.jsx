import { SafeAreaView, StyleSheet, Text, View,ImageBackground, FlatList,TouchableOpacity } from 'react-native'
import { Octicons } from '@expo/vector-icons';
import React,{useState} from 'react'
import Header from '../Components/Header'
import constants from "expo-constants";
import Displays from '../Components/Displays';
import { ScrollView } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import NewHeader from '../Components/NewHeader';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const AdvertScreen = ({}) => {
  const [items, setItems] =useState([
    { name: 'Business Wyze', img:"",image:"https://images.unsplash.com/photo-1717313860625-4d4311b5f9d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8" },
    { name: 'imperatrice', img:"",image:"https://images.unsplash.com/photo-1716916959437-c904cdabd0f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8" },
    { name: 'Sqe holdings', img:"",image:"https://images.unsplash.com/photo-1717318104110-d8ef457d9c2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D" },
    { name: 'Swift Exchange', img:"",image:"https://images.unsplash.com/photo-1717328802573-a7cc71415e8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D" },
    { name: 'Brains Technologies.', img:"",image:"https://plus.unsplash.com/premium_photo-1717563132740-6903bac2cf85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D" },
    { name: 'EMERALD', img:"",image:"https://images.unsplash.com/photo-1717501218511-768944e2c325?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D" },
 
    // Add more items as needed
  ]);
  const navigation = useNavigation();
  return (  
    <SafeAreaView style={styles.container}>
      <NewHeader navigation={navigation}/>


      <Text style={styles.text}>Adverts</Text>
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
      <ScrollView>
        <FlatList 
         data={items}
         keyExtractor={(item, index) => index.toString()}
         renderItem={({ item }) => (
          <ImageBackground source={{uri:item.image}} style={styles.backgroundImage}>
          <View style={{position:"absolute",top:15,left:10,flexDirection:"row",borderRadius:20,backgroundColor:"white",padding:5,gap:10,alignItems:"center"}}>
          <Octicons name="dot-fill" size={24} color="blue" />
            <Text  style={{fontWeight:"bold",color:"black",width:150}}
            numberOfLines={1}
            >{item.name}</Text>
          </View>
        </ImageBackground>
         )}
        
        />


      
      </ScrollView>


    </SafeAreaView>
  )
}

export default AdvertScreen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "white",
    marginTop: constants.statusBarHeight,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', 
    position:"relative",
    width:360,
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
    marginHorizontal:20
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