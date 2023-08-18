import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderBackButton } from '@react-navigation/elements';

const ProfileScreen = () => {
    const route = useRoute()
    const navigation = useNavigation()

    
    useLayoutEffect(() => {
        navigation.setOptions({
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
            <Text>Profile id: </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        padding: 20,
    }
});

export default ProfileScreen;