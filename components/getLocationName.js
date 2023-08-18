import * as Location from 'expo-location';

export const getLocationName = async (latitude, longitude) => {
    try {
        const addresses = await Location.reverseGeocodeAsync({ latitude, longitude });
        if (addresses && addresses.length > 0) {
            const { city, street, region } = addresses[0];
            return city ? city : (street ? street : region);
        }
        return null;
    } catch (error) {
        console.error("Error getting location name:", error);
        return null;
    }
}


