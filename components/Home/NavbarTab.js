import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'


const NavbarTab = ({navigation}) => {
    return (
        <View>
            <View style={{
                flexDirection:"row",
                justifyContent:"space-around",
                borderBottomColor:"#05050538",
                borderBottomWidth:1
            }}>    
               {/* Home */}
                   <TouchableOpacity onPress={() => navigation.push("HomeScreen")}>
                         <Image source={{uri: "https://scontent.fdac99-1.fna.fbcdn.net/v/t1.15752-9/p206x206/262386649_1313398332436978_2861545477909843118_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeFM9Cf_94h2Huy-QguurXlHse_uHwb8RjSx7-4fBvxGNDxH9fUmsXKwVVZbyN_jEGEXyB9CqiqibDUKYv--EWpc&_nc_ohc=jG49NdOSyG8AX_s46EO&_nc_ht=scontent.fdac99-1.fna&oh=89f7411ed00a75f2849df3b087d8d211&oe=61D1EA6C"}} 
                         style={{
                             width:50,
                             height:50,
                             resizeMode:"contain"
                         }}
                         />
                    </TouchableOpacity>
                    {/* Friends */}
                    <TouchableOpacity onPress={() => navigation.push("FriendScreen")}>
                         <Image source={{uri: "https://scontent.fdac99-1.fna.fbcdn.net/v/t1.15752-9/258027653_375365201053102_6126112752076935643_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeFE78Wy0OHuvaPavgB1qvLuSamMh75-chBJqYyHvn5yEDsx_5TZ-Iai9rW9sFUSoRUIt1Sq6bwW8Ega6SEmDMb4&_nc_ohc=eaQzM-01gvMAX85uBgU&_nc_ht=scontent.fdac99-1.fna&oh=c31d355d9bd7170a0b95800b253ca59e&oe=61C62061"}} 
                         style={{
                             width:50,
                             height:50,
                             resizeMode:"contain"
                         }}
                         />
                    </TouchableOpacity>
                    {/* Messages */}
                    <TouchableOpacity onPress={() => navigation.push("MessagesScreen")}>
                         <Image source={{uri: "https://scontent.fdac99-1.fna.fbcdn.net/v/t1.15752-9/257738639_265602525595719_2818531870543052565_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeFVd-ymILJvfNPjM1hq4Cl_aCI96Twn0HhoIj3pPCfQeO70RPPQ2krGUbmJDhITC8y6sKjc4KvRm9p_-qLSKGgL&_nc_ohc=9U6rqcgLjAAAX95tkqg&_nc_ht=scontent.fdac99-1.fna&oh=b10578dd1e4d594feb27c32180cd8e75&oe=61C4A3DD"}} 
                         style={{
                             width:50,
                             height:50,
                             resizeMode:"contain"
                         }}
                         />
                    </TouchableOpacity>
                    {/* Notifications */}
                    <TouchableOpacity onPress={() => navigation.push("NotificationsScreen")}>
                         <Image source={{uri: "https://scontent.fdac99-1.fna.fbcdn.net/v/t1.15752-9/258424040_666534714706264_5323710194042838051_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeH2fsr8Nc-iR-PpI-z7ENJDH8DWZya1288fwNZnJrXbz_iFmR1tCfWLzQGass97L3blKSjw1xt4jMPlTr8uTJgw&_nc_ohc=dNidi0AJRukAX8wTpf8&_nc_ht=scontent.fdac99-1.fna&oh=836a27f679400866eeb8038932ffd9c3&oe=61C54A9B"}} 
                         style={{
                             width:50,
                             height:50,
                             resizeMode:"contain"
                         }}
                         />
                         {/* Videos */}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.push("VideosScreen")}>
                         <Image source={{uri: "https://scontent.fdac99-1.fna.fbcdn.net/v/t1.15752-9/259498065_327806465443933_7173889359704423606_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeHC5nBQNB1Z_q4OYKKvHSXK2pcwSJNluKzalzBIk2W4rMSfP984gEgmgpqRqt4b49E0JVK3of5kMxlv7LgJn_hV&_nc_ohc=hCXd6Inz4HoAX_E-2cH&_nc_ht=scontent.fdac99-1.fna&oh=7c49768f9e3b62c7829a256ccb71647e&oe=61C5A966"}} 
                         style={{
                             width:50,
                             height:50,
                             resizeMode:"contain"
                         }}
                         />
                    </TouchableOpacity>
                    {/* Pages */}
                    <TouchableOpacity onPress={() => navigation.push("PagesScreen")}>
                         <Image source={{uri: "https://scontent.fdac99-1.fna.fbcdn.net/v/t1.15752-9/258854645_195363379425834_4367028605115865161_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=aee45a&_nc_eui2=AeG1L058GK8BOy-M4yBFkhNton2yXnpsy3CifbJeemzLcICCwXOqAB_BqV-YKjbusIwyRPflM9eHJYmkTgS5gNSc&_nc_ohc=PLpq-12WEHAAX-tGc_T&_nc_ht=scontent.fdac99-1.fna&oh=4890aaec53be0410151409e2774547c1&oe=61C68067"}} 
                         style={{
                             width:50,
                             height:50,
                             resizeMode:"contain"
                         }}
                         />
                    </TouchableOpacity>

            </View>
        </View>
    )
}

export default NavbarTab
