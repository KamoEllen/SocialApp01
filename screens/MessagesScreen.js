import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import NavbarTab from '../components/Home/NavbarTab'
import Messages from '../components/Messages/Messages'

const MessagesScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{backgroundColor:"#fff"}}>
            <NavbarTab navigation={navigation} />
            <Messages />
        </SafeAreaView>
    )
}

export default MessagesScreen
