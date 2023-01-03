import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Albums from './src/screens/Albums';
import AlbumDetails from './src/screens/AlbumDetail';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Albums' component={Albums} />
        <Stack.Screen name='AlbumDetails' component={AlbumDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
