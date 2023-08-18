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

export default function App() {
  const [text, setText] = useState("");
  const handleText = (newText) => {
    setText(newText);
  }
  return (
    <SafeAreaView>
      <Text>Hi</Text> 
      <ScrollView>
        <View style={styles.pinkContainer}>
          <TextInput
            defaultValue={text}
            onChangeText={text => setText(text)}
            style={{borderWidth: 1, borderColor: 'black', padding: 10, marginBottom: 20}}
          />
          <Button title="Press me" onPress={() => console.log('Simple Button pressed')} />
          <TouchableOpacity style={styles.btn} onPress={() => console.log('Simple Button pressed')}>
            <Text style={{color: 'white'}}>Press me too</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  pinkContainer: {
    backgroundColor:'pink', 
    height: 1600, 
    padding: 20
  },

  btn: {
    padding: 10, 
    backgroundColor: 'purple', 
    width: 150, height: 100, 
    justifyContent:'center', 
    alignItems:'center'
  },

})
