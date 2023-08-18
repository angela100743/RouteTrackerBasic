import { createStackNavigator } from '@react-navigation/stack';
import RouteScreen from '../screens/RouteScreen';
import IndvRouteScreen from '../screens/IndvRouteScreen';
import { navOptions } from './options';
import { useNavigation } from '@react-navigation/native';
import ProfileScreen from '../screens/ProfileScreen';
import { BottomTabs } from './tabs';
const Stack = createStackNavigator();

export const RouteStack = () => {
    const navigation = useNavigation()
    return (
        <Stack.Navigator
            screenOptions={()=>navOptions(navigation)}
        >
            
            {/* names specified in stack are important bc those are the reference */}
            <Stack.Screen name="Research Portal" component={BottomTabs} />
            <Stack.Screen name="IndvRoute" component={IndvRouteScreen} options={{title:"Route"}}/>
        </Stack.Navigator>
    );
}

export const ProfileStack = () => {
    const navigation = useNavigation()
    return (
        <Stack.Navigator
            screenOptions={()=>navOptions(navigation)}  
        >
            <Stack.Screen name="Profile" component={ProfileScreen} options={{title: "Profie"}}/>   
        </Stack.Navigator>
    );
}