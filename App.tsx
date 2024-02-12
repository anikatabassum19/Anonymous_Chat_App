import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Login from './screen/login/login';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-violet-700">
     <Login/>
      <StatusBar style="auto" />
    </View>
  );
}
