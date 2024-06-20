import React, { useEffect, useState } from 'react'
import { ActivityIndicator, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import { FlatGrid } from 'react-native-super-grid'
// import { useQuery } from 'react-query'
import { ProductService } from '../api/ProductService'
import ProductHeader from '../Components/ProductDetailsHeader'
import ProductGridItem from '../Components/ProductGridItem'
import Header from '../Components/Header'
import constants from "expo-constants";
import Displays from '../Components/Displays'




const ProductCategoryDetails = ({navigation}) => {

    const productService = new ProductService()

    const categories = productService.getCategories('Personal Care')

    const [prodList, setProdList] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    
    useEffect(() => {
        setIsLoading(true)
        // Using set time out to mock http requests
        setTimeout(() => {                               
            setProdList(productService.getAllProducts());
            setIsLoading(false)
        }, 2000);
    }, [])

    const { subCategories, name } = categories
    const [selectedCatId, setSelectedCatId] = useState(0)

    return (
        <SafeAreaView style={styles.container}>
        <Header navigation={navigation}/>
        <ScrollView>

            <ProductHeader
                categoryName={name}
                productService={productService}
                onProdListStateChanged={setProdList}
                selectedCatId={selectedCatId}
                onChangeSelectedCatId={setSelectedCatId}
                subCategories={subCategories}
                />

           
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
            <View>
            <Displays route={"Post"} name={"Posts"}/>
            <Displays route={"Adverts"} name={"Adverts"}/>
            <Displays route={"Services"} name={"Services"}/>
            <Displays route={"Auctions"} name={"Auctions"}/>
            <Displays route={"Products"} name={"Products"}/>
            </View>
           
                </ScrollView>

        </SafeAreaView>
    )
}

export default ProductCategoryDetails
const styles = StyleSheet.create({
    container:{flex: 1,
      backgroundColor: "#fefefe",
      marginTop: constants.statusBarHeight,
    },
  })