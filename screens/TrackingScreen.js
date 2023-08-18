import React, { useLayoutEffect } from 'react'
import { View, Text, StyleSheet, Button} from "react-native"
import { useNavigation, useRoute } from '@react-navigation/native'
import { HeaderBackButton } from "@react-navigation/elements";
import RouteTracking from '../components/RouteTracking';

const TrackingScreen = () => {
    const navigation = useNavigation()
    return (  
        <View style={styles.screen}>
            <RouteTracking/>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
    }
})

export default TrackingScreen;




