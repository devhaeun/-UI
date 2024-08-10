import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import MakeAccount from '../screens/MakeAccount';
import Main from '../screens/Main';
import Health from '../screens/Health';
import HealthScore from '../screens/HealthScore';
import Diet from '../screens/Diet';
import Exercise from '../screens/Exercise';
import Knowledge from '../screens/Knowledge';
import StartScreen from '../components/StartScreen';
import DataInputScreen from '../components/DataInputScreen';
import DataInputScreen2 from '../components/DataInputScreen2';
import DataInputScreen3 from '../components/DataInputScreen3';
import DataCompleteScreen from '../components/DataCompleteScreen';
import LoadingScreen from '../components/LoadingScreen';
import ResultScreen from '../components/ResultScreen';

const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="MakeAccount" component={MakeAccount} />
            <Stack.Screen name="Main" component={Main}/>
            <Stack.Screen name="Health" component={Health}/>
            <Stack.Screen name="HealthScore" component={HealthScore}/>
            <Stack.Screen name="Diet" component={Diet}/>
            <Stack.Screen name="Exercise" component={Exercise}/>
            <Stack.Screen name="Knowledge" component={Knowledge}/>
            <Stack.Screen name="Start" component={StartScreen} />
            <Stack.Screen name="DataInput" component={DataInputScreen} />
            <Stack.Screen name="DataInput2" component={DataInputScreen2} />
            <Stack.Screen name="DataInput3" component={DataInputScreen3} />
            <Stack.Screen name="Complete" component={DataCompleteScreen} />
            <Stack.Screen name="Loading" component={LoadingScreen} />
            <Stack.Screen name="Result" component={ResultScreen} />
        </Stack.Navigator>
    );
};

export default StackNavigation;