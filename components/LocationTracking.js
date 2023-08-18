import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { Location } from 'expo-location';
import { calculateDistance } from "./calculateDistance"

const defaultLocation = {
    latitude: 0, // Set your default latitude here
    longitude: 0, // Set your default longitude here
};

const useTracking = (isActive) => {
    const [location, setLocation] = useState(defaultLocation);
    const [history, setHistory] = useState([]);
    const [distance, setDistance] = useState(0);

    useEffect(() => {
        if (!isActive) {
            return;
        }

        let subscription=null;

        const startLocationUpdates = async () => {
            try {
            // Check for location permissions
                let { status } = await Location.requestForegroundPermissionsAsync();
                if (status !== 'granted') {
                    console.log('Permission to access location was denied');
                    return;
                }

            // Start location updates
                subscription = await Location.watchPositionAsync(
                    {
                        accuracy: Location.Accuracy.Balanced,
                        timeInterval: 10000, // Interval in milliseconds
                        distanceInterval: 50, // Distance in meters
                    },
                    (location) => {
                        console.log('Location update:', location);
                        // Handle your location updates here
                        setLocation((prev) => ({
                            ...prev,
                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude,
                        }));

                        setHistory((prev) => {
                            const newPoint = {
                                latitude: location.latitude,
                                longitude: location.longitude,
                            };
                        
                            if (prev.length === 0) {
                                return [newPoint];
                            }
                        
                            const latestItem = prev[prev.length - 1];
                        
                            // Calculate distance between consecutive points using calculateDistance
                            const distanceBetweenPoints = calculateDistance(
                                latestItem.latitude,
                                latestItem.longitude,
                                newPoint.latitude,
                                newPoint.longitude
                            );
                        
                            setDistance((prevDistance) => prevDistance + distanceBetweenPoints);
                        
                            return [...prev, newPoint];
                        });
                        
                    }
                );
            } catch (error) {
                console.error('Error starting location updates:', error);
            }
        };

        startLocationUpdates();

        return () => {
            if (subscription) {
                subscription.remove();
            }
        };
    }, [isActive]);

    return { location, history, distance };
};

export default useTracking;
