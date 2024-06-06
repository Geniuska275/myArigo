import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View ,ImageBackground} from 'react-native'
import React,{useState} from 'react'
import { SafeAreaView } from 'react-native'
import Header from '../Components/Header'
import constants from "expo-constants";
import RNPickerSelect from 'react-native-picker-select';
import SelectDropdown from 'react-native-select-dropdown'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { FlatGrid } from 'react-native-super-grid';
import { Octicons } from '@expo/vector-icons';



const Products = () => {
  const [service, setService] = useState("");
  const emojisWithIcons = [{
    title:"Sort By"
  },
  {
    title:"Sort By"
  },
  ];

  const [items, setItems] = React.useState([
    { name: 'Business Wyze', img:"",image:"https://images.unsplash.com/photo-1717313860625-4d4311b5f9d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8" },
    { name: 'imperatrice', img:"",image:"https://images.unsplash.com/photo-1716916959437-c904cdabd0f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8" },
    { name: 'Sqe holdings', img:"",image:"https://images.unsplash.com/photo-1717318104110-d8ef457d9c2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D" },
    { name: 'Swift Exchange', img:"",image:"https://images.unsplash.com/photo-1717328802573-a7cc71415e8b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D" },
    { name: 'Brains Technologies.', img:"",image:"https://plus.unsplash.com/premium_photo-1717563132740-6903bac2cf85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D" },
    { name: 'EMERALD', img:"",image:"https://images.unsplash.com/photo-1717501218511-768944e2c325?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D" },
 
    // Add more items as needed
  ]);
  return (
    <SafeAreaView style={styles.container}>
    <Header/>
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
                 width:370,
                 paddingVertical:8,
                 borderRadius:8,
                 marginHorizontal:20,
                 marginVertical:10,
               
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
      data={items}
      style={styles.gridView}
      spacing={15}
      renderItem={({ item }) => (
        <ImageBackground source={{uri:item.image}} style={styles.backgroundImage}>
        <View style={{position:"absolute",top:15,left:10,flexDirection:"row",borderRadius:"20px",backgroundColor:"white",padding:5,gap:10,alignItems:"center"}}>
        <Octicons name="dot-fill" size={24} color="blue" />
          <Text  style={{fontWeight:"bold",color:"black",width:100}}
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

export default Products
const styles = StyleSheet.create({
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