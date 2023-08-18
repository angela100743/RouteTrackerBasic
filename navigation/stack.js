import { createStackNavigator } from '@react-navigation/stack';
import RouteScreen from '../screens/RouteScreen';
import IndvRouteScreen from '../screens/IndvRouteScreen';

const Stack = createStackNavigator();

export const RouteStack = () => {

    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            {/* names specified in stack are important bc those are the reference */}
            <Stack.Screen name="Route" component={RouteScreen} />
            <Stack.Screen name="IndvRoute" component={IndvRouteScreen} />
        </Stack.Navigator>
    );
}