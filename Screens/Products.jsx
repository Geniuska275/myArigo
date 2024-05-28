import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import Header from '../Components/Header'
import constants from "expo-constants";
import { FlatGrid } from 'react-native-super-grid';
import ProductGridItem from '../Components/ProductGridItem';

const Products = () => {
  const prodList=[
    {
      name:"rice",
      img:"https://unsplash.com/photos/a-table-topped-with-a-plate-of-makeup-and-other-items-BT4_pZubRac",
      price:300
    },
    {
      name:"rice",
      img:"https://unsplash.com/photos/a-table-topped-with-a-plate-of-makeup-and-other-items-BT4_pZubRac",
      price:300
    },
    {
      name:"rice",
      img:"https://unsplash.com/photos/a-table-topped-with-a-plate-of-makeup-and-other-items-BT4_pZubRac",
      price:300
    },
    {
      name:"rice",
      img:"https://unsplash.com/photos/a-table-topped-with-a-plate-of-makeup-and-other-items-BT4_pZubRac",
      price:300
    },
  ]
  return (
    <SafeAreaView style={styles.container}>
    <Header/>
    <Text style={styles.text}>Products</Text>
              <FlatGrid
                showsVerticalScrollIndicator={false}
                itemDimension={130}
                data={prodList || []}
                renderItem={({ item }) => (
                    <ProductGridItem
                    item={item}
                    />
                )}
                />
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
    
    paddingVertical:15,
    marginTop:-3,
    fontWeight:"bold",
    color:"#243c56",
    // marginBottom:10
    textTransform:"uppercase"
  }
})