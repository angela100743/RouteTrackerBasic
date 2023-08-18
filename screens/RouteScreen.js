import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RouteScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>Route Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        padding: 20,
    }
});

export default RouteScreen;