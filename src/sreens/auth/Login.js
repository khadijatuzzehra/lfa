import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import Colors from '../../theme/Colors'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN_SUCCESS } from '../../store/ActionTypes';

const Login = () => {

    const dispatch = useDispatch()

    const handleLogin = () => {
        let info = { name: 'John', email: 'john@example.com' }
        AsyncStorage.setItem('userInfo', JSON.stringify(info)).then(() => {
            dispatch({ type: LOGIN_SUCCESS, payload: info })
        })
    }

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => handleLogin()} style={{ backgroundColor: Colors.Gray, margin: 20, borderRadius: 10, padding: 10, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: Colors.White }}>Login</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Login