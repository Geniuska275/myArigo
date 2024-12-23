import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View ,Platform,ImageBackground, Image} from 'react-native'
import React,{useEffect, useState} from 'react'
import { SafeAreaView } from 'react-native'
import Header from '../Components/Header'
import constants from "expo-constants";
import RNPickerSelect from 'react-native-picker-select';
import SelectDropdown from 'react-native-select-dropdown'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { FlatGrid } from 'react-native-super-grid';
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CV_ENDPOINT} from "@env"
import { FontAwesome } from '@expo/vector-icons';

const Products = ({navigation,route}) => {
  const [products, setProducts] = useState([])
  const {value}=route?.params;
 

  const getAllProducts = async ()=>{
    const baseUrl = "https://app.myarigo.com/api/products"
    try {
      const token = await AsyncStorage.getItem("token")
      const response = await axios.get(baseUrl,{
        headers:{
          Authorization: `Bearer ${token}`,
          "Content-Type":"*/*"
        }
      })   
      setProducts(response.data.data.list.data)
    } catch (error) {
      console.error('Error:', error);
    }
  }
  useEffect(()=>{
    getAllProducts();
  },[])
 


  const [service, setService] = useState("");
  const emojisWithIcons = [{
    title:"Sort By"
  },
  {
    title:"Sort By"
  },
  ];

  const {container}=styles
  
  return (
    <SafeAreaView style={container}>
    <Header navigation={navigation}/>
    <Text style={styles.text}>Products</Text>
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
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
      }}>
        <TextInput style={{
          borderWidth:1,
          borderColor:"black",
          width:150,
          height:40,
          marginVertical:10,
          
        }} value={value}/>
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
        marginVertical:10,
        flexDirection:"row",
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
        flexDirection:"row",
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
                 marginLeft:Platform.OS==="ios" ?28:25,
                }}>
                
        <Text style={{
          fontWeight:"bold",
          color:"white",
          alignSelf:"center",
          textTransform:"uppercase"
        }}>Search</Text>
       </TouchableOpacity>
         

       <FlatGrid
      itemDimension={130}
      data={products}
      style={styles.gridView}
      spacing={2}
      renderItem={({ item }) => (
        <TouchableOpacity
        onPress={()=>{
          navigation.navigate('ProductDetails',{product:item})
        }}
       style={{
         width:160,
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
            height:"50%",
            borderTopLeftRadius:10,
            borderTopRightRadius:10,
          }}/>
        ))}


        <Text numberOfLines={1} style={{
          textAlign:"center",
          marginVertical:4,
          fontWeight:"bold"
        }}>{item.brand.business}</Text>
        <Text 
        style={{
          textAlign:"center",
          marginVertical:4,
          fontWeight:"bold"
        }}
        >#{item.price}</Text>
      <View style={{
        flexDirection:"row",
        alignSelf:'center',
        alignItems:"center"
      }}>
        <FontAwesome name="eye" size={24} color="black"/>
        <Text style={{
          textAlign:"center",
          fontSize:12,          
        }}>{item.view}</Text>
        </View>
       </TouchableOpacity>
      )}
      />
    </ScrollView>
  </SafeAreaView>
  )
}

export default Products
const styles = StyleSheet.create({
  
  container:{
    flex: 1,
    backgroundColor: "white",
    marginTop: constants.statusBarHeight,
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
    width: 160,
    height: 50,
    backgroundColor: '#E9ECEF',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
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