import { StyleSheet, Text, TouchableOpacity, View,Modal } from 'react-native'
import React, { useState } from 'react'
import Fontisto from '@expo/vector-icons/Fontisto';
import AntDesign from '@expo/vector-icons/AntDesign';
const Select = ({newoptions,setSelectedState}) => {
    const [show, setShow] = useState(true)
    const [modalVisible, setModalVisible] = useState(false);
    
    const [value,setValue]=useState('')
    const [options, setOptions] = useState(newoptions)

    const handleSelect=(option)=>{
       const selected=options.find(x=>x==option)
       setValue(selected)
       setSelectedState(selected)
       setModalVisible(false)
    }
    console.log(value)
  return (
    <View style={{
       
        backgroundColor:"#e8ecec",
        flex:1,
        
    }}>
        <TouchableOpacity style={{
            flexDirection:'row',
            gap:4,
            width:100,
            alignItems:"center",
            backgroundColor:"white"
        }}
        onPress={()=>setModalVisible(true)}
        > 
            <Text>{value}</Text>
            <AntDesign name="caretdown" size={15} color="black" />

        </TouchableOpacity>

         <Modal visible={modalVisible} 
                style={{ flex: 1 }}
                activeOpacity={1}
               transparent={true}
               animationType="fade"
                >
            <View 
              style={{
               backgroundColor: 'rgba(0, 0, 0, 0.7)',
               flex: 1,
               justifyContent: 'center',
               alignItems: 'center'}}
             >

           <View style={{
            width:400,
            borderRadius:20,
          
          
           }}>

    {options.map((option,i)=>(  
        <TouchableOpacity style={{
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center",
            borderBottomWidth:1,
            padding:10,
            backgroundColor:"white",
            marginHorizontal:10,
            
          }}
           key={i}
            onPress={()=>handleSelect(option)}
            >
              <Text style={{fontWeight:"bold",fontSize:18}}>{option}</Text>
              <Fontisto name={`${option===value? 'radio-btn-active':'radio-btn-passive'}`} size={24} color="black" />
                </TouchableOpacity>
            ))
        }
                </View>
        </View>
        </Modal>
        </View>
  )
}

export default Select

const styles = StyleSheet.create({})