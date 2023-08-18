import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RouteScreen from '../screens/RouteScreen';
import IndvRouteScreen from '../screens/IndvRouteScreen';

const Tab = createBottomTabNavigator();
export const HomeTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="RouteScreen" component={RouteScreen} />
            <Tab.Screen name="IndvRouteScreen" component={IndvRouteScreen} />
        </Tab.Navigator>
    );
}