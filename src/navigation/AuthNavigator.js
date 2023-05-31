import React from 'react'
import Login from '../sreens/auth/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AuthStack = createNativeStackNavigator();

const AuthNavigator = () => {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name={'Login'} component={Login} options={{
                headerShown: false,
            }}
            />
        </AuthStack.Navigator>
    )
}

export default AuthNavigator