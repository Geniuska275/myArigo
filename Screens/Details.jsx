import { Dimensions, StyleSheet, Text, View ,Dimension, FlatList} from 'react-native'
import React from 'react'

const Details = () => {
    carouselDetails=[

        {title: 'Title 1',
        image: 'https://unsplash.com/photos/a-man-standing-in-front-of-a-green-door-uF2B40niSFs'
        },
        {
        title: 'Title 2',
        image: 'https://unsplash.com/photos/a-man-on-a-motorcycle-in-a-parking-garage-u_fh1bvvD-Y'
        },
        {
            title: 'Title 3',
           image: 'https://unsplash.com/photos/the-outside-of-a-restaurant-with-tables-and-chairs-NGktqjG777E'
       }
  
    ]
    const renderItem=()=>{
        const Screenwidth=Dimensions.get('window').width;
        return carouselDetails.map((item,index)=>(
            <View key={index}>
                <Text>{item.title}</Text>
                <Image source={{uri:item.image}} style={{width:Screenwidth, height:200}} />
            </View>
        ))
    }
  return (
    <View>
      <Text>Details</Text>
      <FlatList
      data={carouselDetails}
      renderItem={renderItem}
      horizontal={true}/>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({})