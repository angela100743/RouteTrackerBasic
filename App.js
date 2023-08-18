import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  SafeAreaView,
  TextInput,
  Button,
  Platform,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { MyDrawer } from './navigation/drawer';

export default function App() {
  const [text, setText] = useState("");
  const handleText = (newText) => {
    setText(newText);
  }
  return (
    <NavigationContainer>
      <MyDrawer />
      <StatusBar style="light" />
    </NavigationContainer>
  );
}


