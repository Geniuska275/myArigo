import React from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import { SubCategory } from '../api/models/SubCategory'
// import { ProductService } from '../api/ProductService';
import { AppColors } from '../utils/Colors';


const ProductHeader = (props) => {

    const {
        subCatSelector,
        subCatName,
        common,
        opacityView,
        catName,
        coverImageContainer
    } = styles

    const productService = props.productService
    const setProdList = props.onProdListStateChanged
    const setSelectedCatId = props.onChangeSelectedCatId
    const selectedCatId = props.selectedCatId
    const subCategories = props.subCategories
    const categoryName = props.categoryName

    return (
        <View style={{ marginHorizontal: 20, }}>
            <Text style={{fontSize:30,color:"#243c56",marginTop:10}}>Categories</Text>

            <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal
                style={{ paddingVertical: 20 }}
            >
                <TouchableOpacity
                    style={[subCatSelector, { backgroundColor: selectedCatId === 0 ? AppColors.subCatSelector : AppColors.grey }]}
                    onPress={() => {
                        setSelectedCatId(0)
                        setProdList(productService.getAllProducts())
                    }}>
                    <Text style={[subCatName, { color: selectedCatId === 0 ? AppColors.white : AppColors.black }]}>
                        All Cvs
                    </Text>
                </TouchableOpacity>
                {
                    subCategories.map((cat) => {
                        return (
                            <TouchableOpacity
                                key={cat.id}
                                style={[
                                    subCatSelector,
                                    { backgroundColor: selectedCatId === cat.id ? AppColors.subCatSelector : AppColors.grey }
                                ]}
                                onPress={() => {
                                    setSelectedCatId(cat.id)
                                    setProdList(productService.getProductList(cat.productIds))
                                }}>
                                <Text style={[subCatName, { color: selectedCatId === cat.id ? AppColors.white : AppColors.black }]}>
                                    {cat.name}
                                </Text>
                            </TouchableOpacity>
                        )
                    })
                }

            </ScrollView>
        </View>
    )
}

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
        backgroundColor: AppColors.black
    },
    catName: {
        fontSize: 22,
        fontWeight: 'bold',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        color: AppColors.white
    },
    coverImageContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    common: {
        width: '100%',
        height: 170,
        borderRadius: 20,
    }
})

export default ProductHeader
