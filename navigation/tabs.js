import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RouteScreen from '../screens/RouteScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { Ionicons } from '@expo/vector-icons';
import TrackingScreen from '../screens/TrackingScreen';

const Tab = createBottomTabNavigator();
// These BottomTabs can be created for different stacks.
export const BottomTabs = () => {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                backgroundColor: 'green',
            },
            tabBarActiveTintColor: 'yellow',
            tabBarIcon: ({focused, color, size}) => {
                let iconName;
                if (route.name === 'RouteScreen') {
                    iconName = focused ? 'home' : 'home-outline'
                }
                else if (route.name === 'TrackingScreen') {
                    iconName = focused ? 'navigate-circle' : 'navigate-circle-outline'
                }

                return <Ionicons name={iconName} size={focused? 30: size} color={color} />
            }
        })}
    >
            <Tab.Screen name="RouteScreen" component={RouteScreen} options = {{title:'My Saved Routes'}}/>
            <Tab.Screen name="TrackingScreen" component={TrackingScreen} options = {{title:'Tracking'}}/>
        </Tab.Navigator>
    );
}