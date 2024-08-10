// 1. 로그인 서비스 관련 App.js 코드 (아래와 연결 필요)
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './navigations/Stack';

const App = () => {
    return (
        <NavigationContainer>
            <StackNavigation />
        </NavigationContainer>
    );
};

export default App;


// 2. 모델 서비스 관련 App.js 코드 (로그인 화면과 연결 필요)
// import 'react-native-gesture-handler';
// import React from 'react';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import StartScreen from './components/StartScreen';
// import DataInputScreen from './components/DataInputScreen';
// import DataInputScreen2 from './components/DataInputScreen2';
// import DataInputScreen3 from './components/DataInputScreen3';
// import DataCompleteScreen from './components/DataCompleteScreen';
// import LoadingScreen from './components/LoadingScreen';
// import ResultScreen from './components/ResultScreen';
// // 경로 변경 필요

// const Stack = createStackNavigator();

// // 네비게이터 연결 수정
// export default function App() {
//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName="Start">
//           <Stack.Screen name="Start" component={StartScreen} />
//           <Stack.Screen name="DataInput" component={DataInputScreen} />
//           <Stack.Screen name="DataInput2" component={DataInputScreen2} />
//           <Stack.Screen name="DataInput3" component={DataInputScreen3} />
//           <Stack.Screen name="Complete" component={DataCompleteScreen} />
//           <Stack.Screen name="Loading" component={LoadingScreen} />
//           <Stack.Screen name="Result" component={ResultScreen} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </GestureHandlerRootView>
//   );
// }

// 3. 유방암 건강 정보 관련 App.js 코드 (위와 연결 필요)
// import React from 'react';
// import Navigation from './Navigation';

// export default function App() {
//   return(
//     <Navigation />
//   )
// }