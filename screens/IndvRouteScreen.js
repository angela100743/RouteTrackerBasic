import { useRoute } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const IndvRouteScreen = () => {
    const route = useRoute()
    // allows us to pass in the rest of parameteres to the IndvRouteScreen
    const { routeId, title, date_added, distance, duration } = route.params

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