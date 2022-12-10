import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Home/Header'
import NavbarTab from '../components/Home/NavbarTab'
import Notification from '../components/Notifications/Notification'

const NotificationsScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{backgroundColor:"#fff"}}>
            <NavbarTab navigation={navigation}/>
            <Notification />
        </SafeAreaView>
    )
}

export default NotificationsScreen
