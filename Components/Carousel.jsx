import { StyleSheet, Text, View ,Animated} from 'react-native'
import React, { useRef } from 'react'
import { FlatList } from 'react-native'
import SlideItem from './SlideItem'
import Pagination from './pagination'

const Carousel = () => {

    const ScrollX=useRef(new Animated.Value(0)).current
    const handleOnScroll=event=>{
        Animated.event([
            {
                nativeEvent:{
                    contentOffset:{
                        x:ScrollX,
                    }
                }
            }
        ],{
            useNativeDriver:false,
        }
    )(event)


    }
    const data=[
        {    id:1,
            desc:"A very nice outfit from myArigo",
            img:"https://images.unsplash.com/photo-1714685953638-41a5dae77ea0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8",
            price:"#3800",
            date:"7th may,2024",
            time:"03:30pm"
        },
        {    id:2,
            desc:"PATOWORLD",
            img:"https://images.unsplash.com/photo-1714891203151-128aa39565e8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8",
            price:"#3000",
            date:"8th may,2024",
            time:"02:12pm"
        },
        {    id:3,
            desc:"Imperatrice",
            img:"https://images.unsplash.com/photo-1714756125244-695a9a65049e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D",
            price:"#3700",
            date:"15th Oct,2024",
            time:"08:00pm"
        },
        {    id:4,
            desc:"GENIUSKA",
            img:"https://plus.unsplash.com/premium_photo-1688821128189-c4f2d10b33f1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D",
            price:"#8000",
            date:"28th June,2024",
            time:"11:20pm"
        },
        {    id:5,
            desc:"SQE HOLDINGS",
            img:"https://images.unsplash.com/photo-1715041347013-de5b8925a7a0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMHx8fGVufDB8fHx8fA%3D%3D",
            price:"#3300",
            date:"7th may,2024",
            time:"09:00pm"
        },
        {    id:6,
            desc:"A very nice outfit from myArigo",
            img:"https://images.unsplash.com/photo-1715039730972-df8fd942ecee?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D",
            price:"#3000",
            date:"9th may,2024",
            time:"08:12pm"
        },
        {    id:7,
            desc:"A very nice outfit from myArigo",
            img:"https://plus.unsplash.com/premium_photo-1714674731941-52efe1a22478?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MXx8fGVufDB8fHx8fA%3D%3D",
            price:"#3000",
            date:"8th may,2024",
            time:"03:13pm"
        }

    ]
  return (
    <View>
      <FlatList
      data={data}
      renderItem={({item})=><SlideItem item={item}/>}
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      snapToAlignment='center'
      onScroll={handleOnScroll}
      />
      <Pagination data={data} ScrollX={ScrollX}/>
    </View>
  )
}

export default Carousel

const styles = StyleSheet.create({})