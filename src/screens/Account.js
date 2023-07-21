import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'
import { SafeAreaView, Text, TouchableOpacity } from 'react-native'
import Colors from '../theme/Colors'
import { useDispatch } from 'react-redux'
import { LOGOUT } from '../store/ActionTypes'

const Account = () => {
    const dispatch = useDispatch()
    const handleLogout = () => {
        AsyncStorage.removeItem('userInfo').then(() => {
            dispatch({ type: LOGOUT, payload: null })
        })
    }

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => handleLogout()} style={{ backgroundColor: Colors.Gray, margin: 20, borderRadius: 10, padding: 10, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: Colors.White }}>Logout</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Account