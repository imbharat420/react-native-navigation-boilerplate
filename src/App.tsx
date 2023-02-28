// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import First from './components/First';

// function HomeScreen({navigation}: any) {
//   return (
//     // eslint-disable-next-line react-native/no-inline-styles
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Home Screen</Text>
//       <First />
//       <Button
//         title="Go to About"
//         onPress={() => navigation.navigate('About')}
//       />
//     </View>
//   );
// }

// function AboutScreen({navigation}: any) {
//   return (
//     // eslint-disable-next-line react-native/no-inline-styles
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>About Screen wow</Text>
//       <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
//     </View>
//   );
// }

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="About" component={AboutScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

function App() {
  return (
    <View>
      <Text>App</Text>
    </View>
  );
}

export default App;
