import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../Screens/LoginScreen";
import SignupScreen from "../Screens/SignupScreen";
import BottomTabs from "./BottomTabNavigator";
import ProductDetails from "../Screens/ProductDetails";
import StoreScreen from "../Screens/StoreScreen";
import Messages from "../Screens/Messages";
import Notification from "../Screens/Notification";

const Stack=createStackNavigator()

function AuthStack(){
    return (
        <Stack.Navigator screenOptions={{
            headerShown:false
            // headerStyle:{
            //     backgroundColor:"red"
            // },
            // headerTintColor:"white",
            // headerBackTitleVisible:'back'
        }} initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup"  component={SignupScreen}/>
            <Stack.Screen name="ProductDetails"  component={ProductDetails}/>
            <Stack.Screen name="StoreDetails"  component={StoreScreen}/>
            <Stack.Screen name="messages"  component={Messages}/>
            <Stack.Screen name="notification"  component={Notification}/>


            
            
            <Stack.Screen name="Home"  component={BottomTabs}/>

        </Stack.Navigator>
    )
}

export default AuthStack;