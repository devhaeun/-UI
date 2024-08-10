import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Main from './screens/Main';
import Health from './screens/Health';
import HealthScore from './screens/HealthScore';
import Diet from './screens/Diet';
import Exercise from './screens/Exercise';
import Knowledge from './screens/Knowledge';

const Stack = createStackNavigator();

function StackScreen(){
    return(
        <Stack.Navigator initialRouteName='Main'>
            <Stack.Screen name="Main" component={Main}/>
            <Stack.Screen name="Health" component={Health}/>
            <Stack.Screen name="HealthScore" component={HealthScore}/>
            <Stack.Screen name="Diet" component={Diet}/>
            <Stack.Screen name="Exercise" component={Exercise}/>
            <Stack.Screen name="Knowledge" component={Knowledge}/>
        </Stack.Navigator>
    );
}

function Navigation(){
    return (
        <NavigationContainer>
            <StackScreen/>
        </NavigationContainer>
    );
}
export default Navigation;