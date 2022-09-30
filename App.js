import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyListView from './components/list_view'
import MapView from 'react-native-maps';


export default function App() {
  return (
    <View style={styles.container}>
       <MapView style={{height: '100%', width: '100%'}} 
       initialRegion={{
        latitude: 43.7186134,
        longitude: -79.3866411,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
        }}
       
       />
       <MyListView></MyListView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
