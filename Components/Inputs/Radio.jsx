import { Text,View,TouchableOpacity,StyleSheet } from "react-native";
import {MaterialIcons} from "@expo/vector-icons"

const Radio=({Options,onChange,Style,CheckedValue})=>{
    

    return (
        <View style={[Style,styles.container]}>

       {Options.map((option)=>{

           let active=CheckedValue==option.value;
          return <TouchableOpacity style={ active ? [styles.radio,styles.activeRadio]:styles.radio} onPress={()=>{
               onChange(option.value)
               
            }}
            
            key={option.value}
            >
            <MaterialIcons
             name={active?"radio-button-checked":"radio-button-unchecked"}
             size={24}
             color="#64748b"
             />
            <Text style={styles.text}>{option.label}</Text>

        </TouchableOpacity>
    }
        )}
        

        </View>
    )
}

export default Radio;
const styles=StyleSheet.create({
    container:{
      width:"100%"
    },
    radio:{
        height:40,
        width:"100%",
        flexDirection:"row",
        alignItems:"center",
        marginHorizontal:30,
        
        paddingHorizontal:15,
        borderRadius:15
    },
    activeRadio:{
        // backgroundColor:"#06b6d4"+"11"
    },
    text:{
        fontSize:16,
        marginLeft:15,
        color:"#6b7280"
    },
    activeText:{
        color:"#374151"
    },
})