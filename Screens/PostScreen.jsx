import { ScrollView, StyleSheet, Text,Platform, TextInput, TouchableOpacity, View ,ImageBackground, Image, FlatList} from 'react-native'
import React,{useState,useEffect} from 'react'
import { SafeAreaView } from 'react-native'
import Header from '../Components/Header'
import constants from "expo-constants";
import RNPickerSelect from 'react-native-picker-select';
import SelectDropdown from 'react-native-select-dropdown'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { FlatGrid } from 'react-native-super-grid';
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PostScreen = ({navigation}) => {
  const [service, setService] = useState("");
  const [posts,setPosts]= useState([])
  const emojisWithIcons = [{
    title:"Sort By"
  },
  {
    title:"Sort By"
  },
  ];

  const [items, setItems] = React.useState([
    { name: 'Business Wyze',store:"Imperatrice Wristhub", date:"28th June,2024",price:"# 6,000,000",time:"14:00 PM", img:"https://images.unsplash.com/photo-1717630297768-bbbd8dd16b4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D ",image:"https://images.unsplash.com/photo-1717313860625-4d4311b5f9d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8" },
    { name: 'imperatrice',store:"My Arigo", date:"28th June,2024",price:"# 6,000,000",time:"14:00 PM", img:"https://plus.unsplash.com/premium_photo-1714839369468-cceb97dc742f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D",image:"https://images.unsplash.com/photo-1716916959437-c904cdabd0f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8" },
    { name: 'Business Wyze',store:"SQE HOLDINGS LTD", date:"28th June,2024",price:"# 6,000,000",time:"14:00 PM", img:"https://images.unsplash.com/photo-1717630297768-bbbd8dd16b4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D ",image:"https://images.unsplash.com/photo-1717511140034-2fff4e952dc1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D" },
    { name: 'Business Wyze',store:"Imperatrice Wristhub", date:"28th June,2024",price:"# 6,000,000",time:"14:00 PM", img:"https://images.unsplash.com/photo-1717630297768-bbbd8dd16b4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D ",image:"https://images.unsplash.com/photo-1717509048735-3cd938174f6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D" },
    { name: 'Business Wyze',store:"Imperatrice Wristhub", date:"28th June,2024",price:"# 6,000,000",time:"14:00 PM", img:"https://images.unsplash.com/photo-1717630297768-bbbd8dd16b4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D ",image:"https://images.unsplash.com/photo-1716724854567-9ec995836d19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D" },
    { name: 'Business Wyze',store:"Imperatrice Wristhub", date:"28th June,2024",price:"# 6,000,000",time:"14:00 PM", img:"https://images.unsplash.com/photo-1717630297768-bbbd8dd16b4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D ",image:"https://images.unsplash.com/photo-1717451061024-5a74a0a112de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NXx8fGVufDB8fHx8fA%3D%3D" },
    { name: 'Business Wyze',store:"Imperatrice Wristhub", date:"28th June,2024",price:"# 6,000,000",time:"14:00 PM", img:"https://images.unsplash.com/photo-1717630297768-bbbd8dd16b4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D ",image:"https://images.unsplash.com/photo-1712025853995-d59634cf286e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OXx8fGVufDB8fHx8fA%3D%3D" },
   
 
    // Add more items as needed
  ]);

  const getAllPost = async ()=>{
    const baseUrl = "https://app.myarigo.com/api/posts"
    try {
      const token = await AsyncStorage.getItem("token")
      const response = await axios.get(baseUrl,{
        headers:{
          Authorization: `Bearer ${token}`
        }
      })
      setPosts(response.data.data.posts.data[0])

    } catch (error) {
      console.error('Error:', error);
    }
  }
  useEffect(()=>{
    getAllPost();
  },[])

  console.log(posts)
  return (
    <SafeAreaView style={styles.container}>
    <Header navigation={navigation}/>
    <Text style={styles.text}>All Posts</Text>
    <ScrollView>
      <Text style={{
        fontWeight:"bold",
        marginHorizontal:20,
        marginVertical:20,
        fontSize:15,
        marginTop:20,
      
      }}>Search Filter</Text>
      <View style={{
        marginHorizontal:20,
        flexDirection:"column",
        justifyContent:"space-between",
        alignItems:"center"

      }}>
        <TextInput style={{
          borderWidth:1,
          borderColor:"black",
          width:350,
          height:40,
          marginVertical:10
          
        }}/>
        <SelectDropdown
    data={emojisWithIcons}
    onSelect={(selectedItem, index) => {
      console.log(selectedItem, index);
    }}
    renderButton={(selectedItem, isOpened) => {
      return (
        <View style={styles.dropdownButtonStyle}>
          <Text style={styles.dropdownButtonTxtStyle}>
            {(selectedItem && selectedItem.title) || 'Sort by'}
          </Text>
         
        </View>
      );
    }}
    renderItem={(item, index, isSelected) => {
      return (
        <View style={{...styles.dropdownItemStyle, ...(isSelected && {backgroundColor: '#D2D9DF'})}}>
          
          <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
        </View>
      );
    }}
    showsVerticalScrollIndicator={false}
    dropdownStyle={styles.dropdownMenuStyle}
  />

    
     

      </View>

      <View style={{
        marginHorizontal:20,
        margin:10,
        flexDirection:"column",
        alignItems:"center"

      }}>
        

        <SelectDropdown
    data={emojisWithIcons}
    onSelect={(selectedItem, index) => {
      console.log(selectedItem, index);
    }}
    renderButton={(selectedItem, isOpened) => {
      return (
        <View style={styles.dropdownButtonStyle}>
          <Text style={styles.dropdownButtonTxtStyle}>
            {(selectedItem && selectedItem.title) || 'Pets'}
          </Text>
         
        </View>
      );
    }}
    renderItem={(item, index, isSelected) => {
      return (
        <View style={{...styles.dropdownItemStyle, ...(isSelected && {backgroundColor: '#D2D9DF'})}}>
          
          <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
        </View>
      );
    }}
    showsVerticalScrollIndicator={false}
    dropdownStyle={styles.dropdownMenuStyle}
  />
        <SelectDropdown
    data={emojisWithIcons}
    onSelect={(selectedItem, index) => {
      console.log(selectedItem, index);
    }}
    renderButton={(selectedItem, isOpened) => {
      return (
        <View style={styles.dropdownButtonStyle}>
          <Text style={styles.dropdownButtonTxtStyle}>
            {(selectedItem && selectedItem.title) || 'All States'}
          </Text>
         
        </View>
      );
    }}
    renderItem={(item, index, isSelected) => {
      return (
        <View style={{...styles.dropdownItemStyle, ...(isSelected && {backgroundColor: '#D2D9DF'})}}>
          
          <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
        </View>
      );
    }}
    showsVerticalScrollIndicator={false}
    dropdownStyle={styles.dropdownMenuStyle}
  />

    
     

      </View>

   

      <View style={{
        marginHorizontal:20,
        marginVertical:20,
        flexDirection:"column",
        justifyContent:"space-between",
        alignItems:"center"

      }}>
         <SelectDropdown
    data={emojisWithIcons}
    onSelect={(selectedItem, index) => {
      console.log(selectedItem, index);
    }}
    renderButton={(selectedItem, isOpened) => {
      return (
        <View style={styles.dropdownButtonStyle}>
          <Text style={styles.dropdownButtonTxtStyle}>
            {(selectedItem && selectedItem.title) || 'All Cities'}
          </Text>
         
        </View>
      );
    }}
    renderItem={(item, index, isSelected) => {
      return (
        <View style={{...styles.dropdownItemStyle, ...(isSelected && {backgroundColor: '#D2D9DF'})}}>
          
          <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
        </View>
      );
    }}
    showsVerticalScrollIndicator={false}
    dropdownStyle={styles.dropdownMenuStyle}
  />
        <SelectDropdown
    data={emojisWithIcons}
    onSelect={(selectedItem, index) => {
      console.log(selectedItem, index);
    }}
    renderButton={(selectedItem, isOpened) => {
      return (
        <View style={styles.dropdownButtonStyle}>
          <Text style={styles.dropdownButtonTxtStyle}>
            {(selectedItem && selectedItem.title) || 'All Markets'}
          </Text>
         
        </View>
      );
    }}
    renderItem={(item, index, isSelected) => {
      return (
        <View style={{...styles.dropdownItemStyle, ...(isSelected && {backgroundColor: '#D2D9DF'})}}>
          
          <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
        </View>
      );
    }}
    showsVerticalScrollIndicator={false}
    dropdownStyle={styles.dropdownMenuStyle}
  />

    
     

      </View>

   

      <TouchableOpacity 
           style={{
                 backgroundColor:"#337bb7",
                 width:Platform.OS==="ios" ?350:340,
                 paddingVertical:8,
                 borderRadius:8,
                 marginHorizontal:20,
                 marginVertical:10,
                 marginLeft:Platform.OS==="ios" ?30:25
               
                 }}>
                
        <Text style={{
          fontWeight:"bold",
          color:"white",
          alignSelf:"center",
          textTransform:"uppercase"
          }}>Search</Text>
       </TouchableOpacity>
         
       <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{
            width:360,
            marginHorizontal:20,
            marginBottom:40,
            backgroundColor:"#ffffff",
            shadowColor: "#000",       
            height:220,
            borderWidth:0.5,
            borderColor:"gray",
            borderRadius:10,
            margin:10,
            position:"relative"
          
          }}>
           {item.images.map((image)=>(
             
            <Image 
             source={{
               uri:image.image_url
             }} 
             style={{
               width:"100%",
               height:"100%",
               borderTopLeftRadius:10,
               borderTopRightRadius:10,
             }}/>
   
           ))
         
         
         
         }
             <View style={{
               position:"absolute",
               width:"90%",
               height:80,
               backgroundColor:"#ffffff",
               marginHorizontal:10,
               bottom:2,
               borderRadius:10,
             }}>
               <Text style={{
                 fontWeight:"bold",
                 alignItems:"center",
                 fontSize:12,
                 marginHorizontal:10,
                 marginVertical:5
               }}>{item.title}</Text>
               <View style={{flexDirection:"row",justifyContent:"space-around",alignItems:"center",marginVertical:10}}>
                 <View style={{flexDirection:"row",alignItems:"center"}}>
                 <AntDesign name="like2" size={24} color="black" />
                 <Text>0</Text>
                 </View>
                 <View style={{flexDirection:"row",alignItems:"center"}}>
                 <EvilIcons name="comment" size={24} color="black" />
                 <Text>0</Text>
                 </View>
                 <View style={{flexDirection:"row",alignItems:"center"}}>
                 <FontAwesome name="eye" size={24} color="black" />
                 <Text>{item.view}</Text>
                 </View>
   
   
               </View>
   
             </View>
         
          </View>
        )}
       
       />




    </ScrollView>
    
  </SafeAreaView>
  )
}

export default PostScreen

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
    
    paddingVertical:15,
    marginTop:-3,
    fontWeight:"bold",
    color:"#243c56",
    // marginBottom:10
    textTransform:"uppercase"
  },
  subCatSelector: {
    borderRadius: 10,
    padding: 15,
    marginEnd: 15
},
subCatName: {
    fontSize: 18,
    fontWeight: 'bold',
},
opacityView: {
    opacity: 0.4,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  
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
backgroundImage: {
  flex: 1,
  resizeMode: 'cover', 
  position:"relative",
  width:160,
  height:150,
  borderRadius:15
},
itemCode: {
  fontWeight: '600',
  fontSize: 12,
  color: '#fff',
},
catName: {
    fontSize: 22,
    fontWeight: 'bold',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    
},
coverImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
},
common: {
    width: '100%',
    height: 170,
    borderRadius: 20,
},
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
  dropdownButtonStyle: {
    width: 260,
    height: 50,
    backgroundColor: '#E9ECEF',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
    marginBottom:10
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: '#151E26',
  },
  dropdownButtonArrowStyle: {
    fontSize: 28,
  },
  dropdownButtonIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  dropdownMenuStyle: {
    backgroundColor: '#E9ECEF',
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: '#151E26',
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
})