import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RouteScreen = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.screen}>
            <Text>Route Screen</Text>
            <Button title="Go to IndvRoute" onPress={() => navigation.navigate('IndvRoute')} />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        padding: 20,
    }
});

export default RouteScreen;