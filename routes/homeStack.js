import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "../screens/home";
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';

const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#beb7a4',
                    height: 100
                },
                headerTintColor: '#191716',
                headerTitleStyle: {
                    fontFamily: 'ranchers-regular',
                    alignSelf: "center",
                },
            }}
        >
            <Stack.Screen
                name="Home"
                options={({ navigation }) => {
                    return {
                        headerTitle: () => <Header title='GameZone' navigation={navigation} />
                    }
                }
                }
                component={HomeScreen}
            />
            <Stack.Screen
                name="ReviewDetails"
                options={({ route }) => ({ title: route.params.title })}
                component={ReviewDetails}
            />
        </Stack.Navigator>
    );
}