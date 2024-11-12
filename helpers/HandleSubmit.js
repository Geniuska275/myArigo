import { useNavigation } from "expo-router"
export default  HandleSubmit=(url,data,Screen)=>{
    const navigation = useNavigation()
    try {
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
      navigation.navigate(Screen);
   } catch (error) {
     console.error(error)
   }
}