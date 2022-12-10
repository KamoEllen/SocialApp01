import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Friends from '../components/Friends/Friends'
import Header from '../components/Home/Header'
import NavbarTab from '../components/Home/NavbarTab'

const FriendScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{backgroundColor:"#fff"}}>
            <NavbarTab navigation={navigation} />
            <ScrollView showsVerticalScrollIndicator={false}>
            <Friends />
            </ScrollView>
        </SafeAreaView>
    )
}

export default FriendScreen
