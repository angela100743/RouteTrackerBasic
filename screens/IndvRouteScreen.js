import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderBackButton } from '@react-navigation/elements';

const IndvRouteScreen = () => {
    const route = useRoute()
    const navigation = useNavigation()
    // allows us to pass in the rest of parameteres to the IndvRouteScreen
    const { routeId, title, date_added, distance, duration } = route.params
    
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: title,
            headerLeft: () => (
                <HeaderBackButton
                tintColor="white"
                onPress={()=> navigation.goBack()}
                />
            )
        })
    }, [])
    
    return (
        <View style={styles.screen}>
            <Text>{title}</Text>
            <Text>{date_added}</Text>
            <Text>{distance}</Text>
            <Text>{duration}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        padding: 20,
    }
});

export default IndvRouteScreen;