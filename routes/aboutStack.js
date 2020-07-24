import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import About from "../screens/about";
import Header from '../shared/header';

const Stack = createStackNavigator();

export default function AboutStack() {
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
                name="About"
                options={({ navigation }) => {
                    return {
                        headerTitle: () => <Header title='About GameZone' navigation={navigation} />
                    }
                }
                }
                component={About}
            />
        </Stack.Navigator>
    );
}