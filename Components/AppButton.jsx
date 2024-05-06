import {TouchableOpacity,Text, StyleSheet} from "react-native"


const AppButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );

  export default AppButton;
  
  const styles=StyleSheet.create({
    appButtonContainer:{
        backgroundColor:"#243c56",
        paddingHorizontal:20,
        paddingVertical:8,
        marginHorizontal:40,
        borderRadius:5,
        margin:10
    },
    appButtonText:{
        color:"white",
        textAlign:"center",
        fontWeight:"bold"
    }

  })