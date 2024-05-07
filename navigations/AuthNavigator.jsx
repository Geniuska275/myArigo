import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../Screens/LoginScreen";
import SignupScreen from "../Screens/SignupScreen";
import BottomTabs from "./BottomTabNavigator";

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
            <Stack.Screen name="Home"  component={BottomTabs}/>

        </Stack.Navigator>
    )
}

export default AuthStack;